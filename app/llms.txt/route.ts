import { blogPosts } from '@/lib/blogs';
import { lastUpdated, siteUrl, trends } from '@/lib/trends';

export const dynamic = 'force-static';

function link(title: string, url: string, description: string) {
  return `- [${title}](${url}): ${description}`;
}

export function GET() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const trendLinks = trends.map((trend) =>
    link(trend.title, `${siteUrl}/trends/${trend.slug}`, trend.description),
  );
  const guideSections = categories.flatMap((category) => [
    `### ${category} guides`,
    ...blogPosts
      .filter((post) => post.category === category)
      .map((post) =>
        link(post.title, `${siteUrl}/blog/${post.slug}`, post.description),
      ),
    '',
  ]);

  const body = [
    '# NailMuse by BookMyLook',
    '',
    '> NailMuse is a UK-focused editorial guide to current nail art designs. It turns trends reported by reputable beauty and professional nail publications into original summaries, practical wear notes and salon-ready briefs.',
    '',
    `Last updated: ${lastUpdated}`,
    '',
    '## Main pages',
    '',
    link(
      'NailMuse home',
      siteUrl,
      'The current UK nail trend edit, searchable by colour, shape and finish.',
    ),
    link(
      'Nail art guides',
      `${siteUrl}/blog`,
      'Original guides covering seasons, colours, shapes, beginner techniques and nail care.',
    ),
    link(
      'XML sitemap',
      `${siteUrl}/sitemap.xml`,
      'A complete machine-readable list of canonical site URLs.',
    ),
    '',
    '## Current UK nail trends',
    '',
    ...trendLinks,
    '',
    '## Editorial guides',
    '',
    ...guideSections,
    '## Editorial policy',
    '',
    '- NailMuse writes original summaries and links to the reporting that informed each page.',
    '- Every trend page identifies its source publication and publication date.',
    '- Generated manicure photography is illustrative and is labelled as such on the site.',
    '- Nail and product-safety information is general information, not medical advice. Readers should consult an appropriately qualified professional when needed.',
    '- Content uses British English and is written primarily for UK readers.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
