import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, Sparkles } from 'lucide-react';
import { BlogImage } from '@/components/blog-image';
import { blogPosts, blogPublished, getBlogPost, getRelatedBlogPosts } from '@/lib/blogs';
import { siteUrl } from '@/lib/trends';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = getBlogPost((await params).slug);
  if (!item) return {};
  const url = `${siteUrl}/blog/${item.slug}`;
  return {
    title: item.seoTitle,
    description: item.description,
    keywords: [item.keyword, 'nail art designs UK', item.category.toLowerCase(), 'NailMuse'],
    alternates: { canonical: url },
    openGraph: { type: 'article', locale: 'en_GB', url, title: item.seoTitle, description: item.description, publishedTime: blogPublished, modifiedTime: blogPublished, images: [{ url: '/blog-nail-art-30.png', width: 1374, height: 1145, alt: `${item.title} visual guide` }] },
    twitter: { card: 'summary_large_image', title: item.seoTitle, description: item.description, images: ['/blog-nail-art-30.png'] },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const item = getBlogPost((await params).slug);
  if (!item) notFound();
  const related = getRelatedBlogPosts(item);
  const url = `${siteUrl}/blog/${item.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'NailMuse', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Nail art blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: item.title, item: url },
        ],
      },
      {
        '@type': 'Article', headline: item.title, description: item.description, image: `${siteUrl}/blog-nail-art-30.png`,
        datePublished: blogPublished, dateModified: blogPublished, inLanguage: 'en-GB', mainEntityOfPage: url,
        author: { '@type': 'Organization', name: 'NailMuse editorial team', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'NailMuse by BookMyLook', url: siteUrl },
        citation: item.sourceUrl, keywords: item.keyword, articleSection: item.category,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <header className="border-b border-border/75 bg-background/95">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="NailMuse UK home"><span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="size-4" /></span><span><span className="block text-lg font-semibold leading-4 tracking-[-.04em]">NailMuse</span><span className="text-[9px] font-medium uppercase tracking-[.16em] text-muted-foreground">by BookMyLook</span></span></Link>
          <Link href="/blog" className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium shadow-xs transition hover:bg-accent"><ArrowLeft className="size-4" /> All guides</Link>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb"><Link href="/">NailMuse</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span aria-current="page">{item.title}</span></nav>
          <div className="grid gap-10 lg:grid-cols-[1.06fr_.94fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-primary">{item.category} · UK nail guide</p>
              <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{item.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{item.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground"><span className="rounded-full bg-secondary px-3 py-1.5">Primary topic: {item.keyword}</span><span className="flex items-center gap-1.5"><CalendarDays className="size-4" /> Reviewed 27 September 2026</span></div>
            </div>
            <BlogImage index={item.image} alt={`${item.title}: original NailMuse manicure inspiration`} priority className="rounded-[2rem] shadow-[0_25px_80px_rgba(80,45,55,.14)]" />
          </div>
        </div>

        <div className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="text-lg leading-8">If you are deciding what to save for your next appointment, start with the overall colour and finish, then use the ideas below to choose a design that fits your nail length, daily routine and preferred level of detail.</p>
              <section className="mt-12" aria-labelledby="ideas-heading">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">The NailMuse edit</p>
                <h2 id="ideas-heading" className="mt-2 text-3xl font-semibold tracking-[-.04em]">Five ideas to try</h2>
                <div className="mt-7 divide-y divide-border border-y border-border">
                  {item.ideas.map((idea, index) => <section key={idea.name} className="grid gap-3 py-6 sm:grid-cols-[52px_1fr]"><span className="text-sm font-semibold text-primary">0{index + 1}</span><div><h3 className="text-lg font-semibold">{idea.name}</h3><p className="mt-2 leading-7 text-muted-foreground">{idea.detail}</p></div></section>)}
                </div>
              </section>
              <section className="mt-12" aria-labelledby="salon-heading"><p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Salon-ready brief</p><h2 id="salon-heading" className="mt-2 text-3xl font-semibold tracking-[-.04em]">What to ask for</h2><blockquote className="mt-6 rounded-2xl border border-border bg-background p-6 text-lg leading-8">“{item.salonBrief}”</blockquote></section>
              <section className="mt-12" aria-labelledby="note-heading"><h2 id="note-heading" className="text-2xl font-semibold tracking-tight">Useful note</h2><p className="mt-4 leading-8 text-muted-foreground">{item.note}</p></section>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-background p-6 lg:sticky lg:top-6">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">Research source</p>
              <h2 className="mt-3 text-lg font-semibold">{item.sourceName}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">This is original NailMuse editorial content informed by reputable reporting. The source link provides further context and credited contributors.</p>
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-9 w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium shadow-xs transition hover:bg-accent">Read the source <ExternalLink className="size-4" /></a>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">Generated manicure photography is illustrative. For product suitability, enhancement services or skin reactions, speak with an appropriately qualified professional.</p>
            </aside>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="related-heading">
          <div className="mb-7 flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Keep exploring</p><h2 id="related-heading" className="mt-2 text-3xl font-semibold tracking-[-.04em]">Related nail art guides</h2></div><Link href="/blog" className="hidden items-center gap-1 text-sm font-semibold sm:flex">All 30 guides <ArrowRight className="size-4" /></Link></div>
          <div className="grid gap-6 sm:grid-cols-3">{related.map((relatedItem) => <article key={relatedItem.slug}><Link href={`/blog/${relatedItem.slug}`} className="group block"><BlogImage index={relatedItem.image} alt={`${relatedItem.title} guide`} className="rounded-2xl transition group-hover:opacity-90" /><p className="mt-4 text-xs font-semibold uppercase tracking-[.14em] text-primary">{relatedItem.category}</p><h3 className="mt-1 font-semibold group-hover:underline">{relatedItem.title}</h3></Link></article>)}</div>
        </section>
      </article>
    </main>
  );
}
