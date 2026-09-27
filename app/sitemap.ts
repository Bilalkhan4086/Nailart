import type { MetadataRoute } from 'next';
import { lastUpdated, siteUrl, trends } from '@/lib/trends';
import { blogPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: lastUpdated, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: lastUpdated, changeFrequency: 'weekly', priority: 0.9 },
    ...trends.map((trend) => ({
      url: `${siteUrl}/trends/${trend.slug}`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogPosts.map((item) => ({
      url: `${siteUrl}/blog/${item.slug}`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: item.slug === 'new-nail-art-designs-uk' ? 0.9 : 0.75,
    })),
  ];
}
