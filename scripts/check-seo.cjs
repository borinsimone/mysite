// Verify the actual static export: npm run build && node scripts/check-seo.cjs
const fs = require('node:fs');
const assert = require('node:assert/strict');
const sharp = require('sharp');

async function check() {
  const html = fs.readFileSync('out/index.html', 'utf8');
  const url = 'https://borinsimone.github.io/mysite/';
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One primary heading');
  assert.ok(html.includes(`rel="canonical" href="${url}"`), 'Canonical URL');
  assert.ok(!html.includes('https://simone.dev'), 'No outdated domain');
  assert.ok(html.includes('property="og:image"'), 'Open Graph image');
  assert.ok(html.includes('name="twitter:image"'), 'Social card image');
  assert.ok(html.includes(`${url}social-preview.jpg`), 'Absolute image URL with project path');
  assert.ok(html.includes('name="robots" content="index, follow"'), 'Indexable page');
  const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  assert.ok(match, 'JSON-LD exists');
  const data = JSON.parse(match[1]);
  assert.deepEqual(
    data['@graph'].map((item) => item['@type']),
    ['Person', 'WebSite', 'WebPage'],
  );
  assert.equal(data['@graph'][2].url, url, 'Schema URL matches canonical');
  const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 1, 'Only real page in sitemap');
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), 'Sitemap URL');
  assert.ok(fs.readFileSync('out/robots.txt', 'utf8').includes(`Sitemap: ${url}sitemap.xml`));
  const image = await sharp('out/social-preview.jpg').metadata();
  assert.equal(image.width, 1200);
  assert.equal(image.height, 630);
  console.log(
    'SEO export checks passed: canonical, metadata, JSON-LD, H1, sitemap, robots and social image.',
  );
}
check().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
