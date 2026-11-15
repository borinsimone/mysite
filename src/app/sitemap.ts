import type { MetadataRoute } from 'next';
import { siteUrl } from './site-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors belong to this single page, not separate indexable URLs.
  return [{ url: siteUrl }];
}
