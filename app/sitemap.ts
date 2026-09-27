import type { MetadataRoute } from 'next';
import { lastUpdated, siteUrl, trends } from '@/lib/trends';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: lastUpdated, changeFrequency: 'weekly', priority: 1 },
    ...trends.map((trend) => ({
      url: `${siteUrl}/trends/${trend.slug}`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
