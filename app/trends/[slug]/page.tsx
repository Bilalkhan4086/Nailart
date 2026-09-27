import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrendImage } from '@/components/trend-image';
import { getTrend, lastUpdated, siteUrl, trends } from '@/lib/trends';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trends.map((trend) => ({ slug: trend.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trend = getTrend(slug);
  if (!trend) return {};
  const url = `${siteUrl}/trends/${trend.slug}`;
  return {
    title: trend.seoTitle,
    description: trend.metaDescription,
    alternates: { canonical: url },
    keywords: [trend.title, 'nail art designs UK', 'nail trends 2026', `${trend.category.toLowerCase()} nails`, trend.shape],
    openGraph: {
      type: 'article',
      locale: 'en_GB',
      url,
      title: trend.seoTitle,
      description: trend.metaDescription,
      images: [],
      publishedTime: '2026-09-27',
      modifiedTime: lastUpdated,
    },
    twitter: { card: 'summary', title: trend.seoTitle, description: trend.metaDescription, images: [] },
  };
}

export default async function TrendPage({ params }: PageProps) {
  const { slug } = await params;
  const trend = getTrend(slug);
  if (!trend) notFound();
  const related = trend.related.map(getTrend).filter((item) => item !== undefined);
  const pageUrl = `${siteUrl}/trends/${trend.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Nail art trends', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: trend.title, item: pageUrl },
        ],
      },
      {
        '@type': 'Article',
        headline: trend.seoTitle,
        description: trend.metaDescription,
        datePublished: '2026-09-27',
        dateModified: lastUpdated,
        inLanguage: 'en-GB',
        mainEntityOfPage: pageUrl,
        author: { '@type': 'Organization', name: 'NailMuse editorial team', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'NailMuse by BookMyLook', url: siteUrl },
        citation: trend.sourceUrl,
        about: [trend.category, trend.shape, ...trend.colours],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <header className="border-b border-border/75 bg-background/95">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="NailMuse UK home"><span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="size-4" /></span><span><span className="block font-heading text-lg font-semibold leading-4 tracking-[-.04em]">NailMuse</span><span className="text-[9px] font-medium uppercase tracking-[.16em] text-muted-foreground">by BookMyLook</span></span></a>
          <Button variant="outline" className="rounded-full" render={<a href="/#designs" />}><ArrowLeft /> All UK trends</Button>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
          <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb"><a href="/" className="hover:text-foreground">Nail art trends</a><span>/</span><span aria-current="page">{trend.title}</span></nav>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-primary">{trend.signal} · UK 2026</p>
              <h1 className="font-heading text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl">{trend.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{trend.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{[trend.category, trend.shape, ...trend.colours].map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">{tag}</span>)}</div>
            </div>
            <TrendImage title={trend.title} column={trend.grid.column} row={trend.grid.row} priority className="rounded-[2rem] shadow-[0_25px_80px_rgba(80,45,55,.14)]" />
          </div>
        </div>

        <div className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-10">
              <section aria-labelledby="why-heading"><h2 id="why-heading" className="font-heading text-2xl font-semibold tracking-tight">Why {trend.title.toLowerCase()} are trending</h2><p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{trend.whyTrending}</p></section>
              <section aria-labelledby="salon-heading"><h2 id="salon-heading" className="font-heading text-2xl font-semibold tracking-tight">What to ask for at the salon</h2><div className="mt-4 rounded-2xl border border-border bg-background p-6"><p className="leading-8">“{trend.salonBrief}”</p></div></section>
              <section aria-labelledby="wear-heading"><h2 id="wear-heading" className="font-heading text-2xl font-semibold tracking-tight">Shape, finish and wear notes</h2><p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{trend.wearNotes}</p></section>
            </div>
            <aside className="h-fit rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">Trend source</p>
              <h2 className="mt-3 text-lg font-semibold">{trend.sourceName}</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" /> {trend.sourceDate}</p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">This page is an original NailMuse summary. Read the publisher’s reporting for its full editorial context and credited nail artists.</p>
              <Button variant="outline" className="mt-5 w-full rounded-full" render={<a href={trend.sourceUrl} target="_blank" rel="noreferrer" />}>Read original source <ExternalLink /></Button>
            </aside>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="related-heading">
          <div className="mb-7 flex items-end justify-between"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-primary">Keep exploring</p><h2 id="related-heading" className="font-heading text-3xl font-semibold tracking-tight">Related nail trends</h2></div><a href="/#designs" className="hidden items-center gap-1 text-sm font-semibold sm:flex">View all <ArrowRight className="size-4" /></a></div>
          <div className="grid gap-5 sm:grid-cols-3">{related.map((item) => <article key={item.slug}><a href={`/trends/${item.slug}`} className="group block"><TrendImage title={item.title} column={item.grid.column} row={item.grid.row} className="rounded-2xl transition group-hover:opacity-90" /><h3 className="mt-4 font-semibold group-hover:underline">{item.title}</h3><p className="mt-1 text-sm text-muted-foreground">{item.category} · {item.shape}</p></a></article>)}</div>
        </section>
      </article>
    </main>
  );
}
