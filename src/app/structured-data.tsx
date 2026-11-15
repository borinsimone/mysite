import { siteDescription, siteTitle, siteUrl } from './site-config';

export default function StructuredData() {
  const personId = `${siteUrl}#simone-borin`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Simone Borin',
        url: siteUrl,
        jobTitle: 'Web designer e developer freelance',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Simone Borin — Portfolio',
        inLanguage: 'it-IT',
        publisher: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}#webpage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        inLanguage: 'it-IT',
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': personId },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
