// Run from the repository root: node scripts/generate-social-preview.cjs
const sharp = require('sharp');
const fs = require('node:fs/promises');

const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="shade"><stop stop-color="#050709" stop-opacity=".95"/><stop offset=".65" stop-color="#050709" stop-opacity=".7"/><stop offset="1" stop-color="#050709" stop-opacity=".15"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <g font-family="Arial, sans-serif">
    <circle cx="90" cy="80" r="32" fill="#130b11" stroke="#ff2858"/>
    <text x="90" y="89" fill="#f5f5f7" font-size="24" font-weight="700" text-anchor="middle">SB</text>
    <text x="64" y="192" fill="#ff6487" font-size="17" letter-spacing="3">SIMONE BORIN</text>
    <text x="60" y="283" fill="#f5f5f7" font-size="66" font-weight="700">Siti web</text>
    <text x="60" y="362" fill="#ff2858" font-size="66" font-weight="700">su misura.</text>
    <text x="64" y="426" fill="#c8c8d1" font-size="24">Web designer &amp; developer freelance</text>
    <path d="M64 482H130" stroke="#ff2858" stroke-width="3"/>
    <text x="64" y="548" fill="#c8c8d1" font-size="18">Design curato. Sviluppo solido.</text>
  </g>
</svg>`);

async function generate() {
  await fs.mkdir('public', { recursive: true });
  await sharp('src/app/home/herobg-personal.webp')
    .resize(1200, 630, { fit: 'cover' })
    .composite([{ input: overlay }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile('public/social-preview.jpg');
}
generate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
