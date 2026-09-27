import { ArrowRight, CalendarDays, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrendGallery } from '@/components/trend-gallery';
import { lastUpdated, siteUrl, trends } from '@/lib/trends';

const sources = [...new Map(trends.map((trend) => [trend.sourceName, trend])).values()];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organisation`,
      name: 'NailMuse by BookMyLook',
      url: siteUrl,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'NailMuse',
      inLanguage: 'en-GB',
      publisher: { '@id': `${siteUrl}/#organisation` },
    },
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/#collection`,
      url: siteUrl,
      name: 'Trending Nail Art Designs UK 2026',
      description: 'A regularly updated edit of nail art designs and manicure trends for UK salon clients.',
      inLanguage: 'en-GB',
      dateModified: lastUpdated,
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: trends.length,
        itemListElement: trends.map((trend, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: trend.title,
          url: `${siteUrl}/trends/${trend.slug}`,
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What nail colours are trending in autumn 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Current UK edits are favouring blackberry purple, midnight navy, warm chilli-chocolate brown, translucent spice and muted matcha green.' },
        },
        {
          '@type': 'Question',
          name: 'Which designs work best on short nails?',
          acceptedAnswer: { '@type': 'Answer', text: 'Micro-French tips, chiffon sheer colour, fine dots, one tiny gem and small-scale plaid give short nails detail without crowding the nail bed.' },
        },
        {
          '@type': 'Question',
          name: 'How often is this trend guide updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'The NailMuse UK trend edit is reviewed weekly and each design includes its source publication and date.' },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <header className="sticky top-0 z-40 border-b border-border/75 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="NailMuse UK home">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="size-4" /></span>
            <span><span className="block font-heading text-lg font-semibold leading-4 tracking-[-.04em]">NailMuse</span><span className="text-[9px] font-medium uppercase tracking-[.16em] text-muted-foreground">by BookMyLook</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex" aria-label="Main navigation">
            <a href="#designs" className="text-foreground">UK trends</a>
            <a href="#editorial-method" className="transition-colors hover:text-foreground">Our method</a>
            <a href="#sources" className="transition-colors hover:text-foreground">Sources</a>
          </nav>
          <Button className="rounded-full px-4" size="lg" render={<a href="#designs" />}>Find a nail idea <Search /></Button>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute -right-40 top-0 size-[440px] rounded-full bg-[radial-gradient(circle,rgba(151,76,96,.14),transparent_68%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-primary"><span className="size-1.5 rounded-full bg-primary" /> UK nail trends · Autumn 2026</p>
            <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl lg:text-[5rem]">
              Trending nail art designs,<span className="block font-serif font-normal italic text-primary">curated for the UK.</span>
            </h1>
          </div>
          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-7 text-muted-foreground">Find the nail colours, finishes and short-nail ideas UK beauty editors are watching now. Every trend includes an original summary, a salon-ready brief and a link to the reporting behind it.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[.14em] text-muted-foreground"><span>{trends.length} current ideas</span><span className="h-px w-8 bg-border" /><span>{sources.length} UK sources</span><span className="h-px w-8 bg-border" /><span>Updated weekly</span></div>
          </div>
        </div>
      </section>

      <TrendGallery />

      <section className="border-y border-border bg-card/65 px-5 py-20 sm:px-8" aria-labelledby="autumn-guide-heading">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-primary">The UK autumn edit</p>
            <h2 id="autumn-guide-heading" className="max-w-md font-heading text-4xl font-semibold leading-tight tracking-[-.045em]">What nail designs are trending in the UK right now?</h2>
          </div>
          <div className="grid gap-8 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
            <div><h3 className="mb-2 text-base font-semibold text-foreground">Richer colour, lighter finishes</h3><p>Deep berry, midnight blue and chocolate brown are returning for cooler weather, but sheer spice washes and diffused magnetic shimmer keep them looking current rather than heavy.</p></div>
            <div><h3 className="mb-2 text-base font-semibold text-foreground">Practical lengths are leading</h3><p>Short oval and squoval nails continue to gain ground. Micro-French tips, tiny gems and small-scale print make them feel considered without sacrificing everyday practicality.</p></div>
            <div><h3 className="mb-2 text-base font-semibold text-foreground">Print has softened</h3><p>Fawn markings, fine plaid and controlled mix-and-match sets offer personality in a more wearable way. The best versions repeat a tight palette across the manicure.</p></div>
            <div><h3 className="mb-2 text-base font-semibold text-foreground">Natural is still a statement</h3><p>Chiffon pink, milky matcha and carefully groomed bare-looking nails remain strong alternatives to detailed art, especially when a low-maintenance appointment is the priority.</p></div>
          </div>
        </div>
      </section>

      <section id="editorial-method" className="bg-[#35252a] px-5 py-20 text-[#fbf4ef] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-[#dcb0ba]">How NailMuse works</p><h2 className="max-w-sm font-heading text-4xl font-semibold leading-tight tracking-[-.045em]">Useful inspiration, with the source left intact.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['01', 'Track', 'We monitor recent UK beauty reporting and professional nail coverage for repeated trend signals.'],
              ['02', 'Edit', 'We write original summaries, remove duplicates and turn each idea into a practical salon brief.'],
              ['03', 'Attribute', 'Publication, article date and original link stay visible so you can check the source yourself.'],
            ].map(([number, title, detail]) => <div key={number} className="border-t border-white/20 pt-5"><span className="text-xs text-[#dcb0ba]">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{detail}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8" aria-labelledby="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-primary">Quick answers</p><h2 id="faq-heading" className="font-heading text-3xl font-semibold tracking-tight">UK nail trend FAQs</h2></div>
          <div className="divide-y divide-border border-y border-border">
            {[
              ['What nail colours are trending in autumn 2026?', 'Current UK edits are favouring blackberry purple, midnight navy, warm chilli-chocolate brown, translucent spice and muted matcha green.'],
              ['Which designs work best on short nails?', 'Micro-French tips, chiffon sheer colour, fine dots, one tiny gem and small-scale plaid give short nails detail without crowding the nail bed.'],
              ['How often is this trend guide updated?', 'The edit is reviewed weekly. Each card shows its source publication and date so recent signals are easy to distinguish from longer-running styles.'],
            ].map(([question, answer]) => <article key={question} className="py-6"><h3 className="font-semibold">{question}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p></article>)}
          </div>
        </div>
      </section>

      <footer id="sources" className="border-t border-border px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><div className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /><span className="font-semibold">NailMuse by BookMyLook</span></div><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Independent trend summaries for inspiration, not copied articles. Generated manicure photography is illustrative. Always check product suitability with your nail technician.</p></div>
          <div><p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground"><CalendarDays className="size-3.5" /> Sources monitored</p><div className="flex max-w-xl flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">{sources.map((source) => <a key={source.sourceName} href={source.sourceUrl} target="_blank" rel="noreferrer" className="transition hover:text-foreground">{source.sourceName}</a>)}</div></div>
        </div>
      </footer>
    </main>
  );
}
