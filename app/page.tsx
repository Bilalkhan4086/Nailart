'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Bookmark, Check, ExternalLink, Search, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

type Design = {
  id: number; title: string; description: string; image: string; category: string;
  shape: string; colors: string[]; signal: string; sourceName: string; sourceUrl: string;
};

const designs: Design[] = [
  {
    id: 1, title: 'Watercolor wash',
    description: 'Translucent color drifts across a sheer base for a soft, painterly manicure that still feels polished.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85',
    category: 'Artistic', shape: 'Almond', colors: ['Rose', 'Cream'], signal: 'Summer 2026',
    sourceName: 'Allure', sourceUrl: 'https://www.allure.com/story/2026-summer-nail-art-trends',
  },
  {
    id: 2, title: 'Champagne cat-eye',
    description: 'A magnetic metallic glow over a barely-there neutral—the kind of dimensional detail that changes in every light.',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85',
    category: 'Chrome', shape: 'Oval', colors: ['Champagne', 'Nude'], signal: 'Editor watch',
    sourceName: 'Good Housekeeping', sourceUrl: 'https://www.goodhousekeeping.com/beauty/nails/a70244342/2026-nail-trends/',
  },
  {
    id: 3, title: 'Micro French lines',
    description: 'A clean sheer base edged with ultra-fine color. Precise, modern, and especially good on shorter nails.',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1000&q=85',
    category: 'French', shape: 'Short', colors: ['Milky', 'Berry'], signal: 'Quiet luxury',
    sourceName: 'Woman & Home', sourceUrl: 'https://www.womanandhome.com/beauty/2026-nail-trends/',
  },
  {
    id: 4, title: 'Juicy color play',
    description: 'Glossy, mismatched brights bring a joyful graphic energy to a neat, wearable silhouette.',
    image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?auto=format&fit=crop&w=1000&q=85',
    category: 'Colorful', shape: 'Squoval', colors: ['Citrus', 'Cobalt'], signal: 'Search breakout',
    sourceName: 'Pinterest Predicts', sourceUrl: 'https://business.pinterest.com/pdf/pinterest-predicts/2026-trend-report/',
  },
  {
    id: 5, title: 'Molten metal accents',
    description: 'Sculptural silver and gold details turn a minimal manicure into tiny, jewelry-inspired objects.',
    image: 'https://images.unsplash.com/photo-1599206676335-193c82b13c9e?auto=format&fit=crop&w=1000&q=85',
    category: 'Chrome', shape: 'Almond', colors: ['Silver', 'Black'], signal: 'Runway mood',
    sourceName: 'Marie Claire', sourceUrl: 'https://www.marieclaire.com/beauty/nails/nail-trends-2026/',
  },
  {
    id: 6, title: 'Sheer floral detail',
    description: 'Fine botanical marks float over a milky base for a delicate design with plenty of negative space.',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=1000&q=85',
    category: 'Floral', shape: 'Oval', colors: ['Blush', 'Green'], signal: 'Salon favorite',
    sourceName: 'Who What Wear', sourceUrl: 'https://www.whowhatwear.com/beauty/nails/bridal-nail-trends-2026',
  },
];

const filters = ['All', 'Chrome', 'French', 'Artistic', 'Floral', 'Colorful'];

export default function Home() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Design | null>(null);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return designs.filter((design) => {
      const matchesFilter = filter === 'All' || design.category === filter;
      const haystack = [design.title, design.description, design.category, design.shape, ...design.colors].join(' ').toLowerCase();
      return matchesFilter && (!term || haystack.includes(term));
    });
  }, [filter, query]);

  function toggleSaved(id: number) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/75 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="NailMuse home">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="size-4" /></span>
            <span className="font-heading text-xl font-semibold tracking-[-0.04em]">NailMuse</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex" aria-label="Main navigation">
            <a href="#discover" className="text-foreground">Discover</a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#sources" className="transition-colors hover:text-foreground">Sources</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-muted-foreground md:inline">{saved.length} saved</span>
            <Button className="rounded-full px-4" size="lg" onClick={() => document.querySelector('#discover')?.scrollIntoView()}>Browse designs</Button>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <div className="pointer-events-none absolute -right-40 top-0 size-[440px] rounded-full bg-[radial-gradient(circle,rgba(151,76,96,.14),transparent_68%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="size-1.5 rounded-full bg-primary" /> The weekly trend edit</p>
            <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[5.25rem]">
              Your next manicure,<span className="block font-serif font-normal italic text-primary">beautifully discovered.</span>
            </h1>
          </div>
          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-7 text-muted-foreground">Fresh nail-art references gathered from beauty editors and trend reports, organized so you can find the look that feels like you.</p>
            <div className="mt-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"><span>6 fresh ideas</span><span className="h-px w-8 bg-border" /><span>5 sources</span></div>
          </div>
        </div>
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="sticky top-[72px] z-30 -mx-5 border-y border-border/80 bg-background/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:rounded-2xl lg:border lg:bg-card/60 lg:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 rounded-full border-0 bg-secondary/75 pl-10 pr-10 shadow-none" placeholder="Search color, shape, or style..." aria-label="Search nail art" />
              {query && <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Clear search"><X className="size-4" /></button>}
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Design filters">
              {filters.map((item) => (
                <Button key={item} onClick={() => setFilter(item)} variant={filter === item ? 'default' : 'secondary'} className="rounded-full px-4" aria-pressed={filter === item}>{item}</Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-7 mt-10 flex items-end justify-between">
          <div><p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Updated September 2026</p><h2 className="font-heading text-2xl font-semibold tracking-tight">Trending now</h2></div>
          <p className="text-sm text-muted-foreground">{visible.length} {visible.length === 1 ? 'design' : 'designs'}</p>
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((design, index) => (
              <article key={design.id} className="group">
                <div className={`relative overflow-hidden rounded-[1.75rem] bg-muted ${index % 3 === 1 ? 'aspect-[4/5] lg:mt-10' : 'aspect-[4/5]'}`}>
                  <img src={design.image} alt={`${design.title} nail art reference`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#542f3d] shadow-sm backdrop-blur">{design.signal}</span>
                    <button onClick={() => toggleSaved(design.id)} aria-label={`${saved.includes(design.id) ? 'Remove' : 'Save'} ${design.title}`} className={`grid size-10 place-items-center rounded-full shadow-sm backdrop-blur transition hover:scale-105 ${saved.includes(design.id) ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-[#542f3d]'}`}>
                      {saved.includes(design.id) ? <Check className="size-4" /> : <Bookmark className="size-4" />}
                    </button>
                  </div>
                  <button onClick={() => setSelected(design)} className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between rounded-full bg-[#2d1f23]/90 px-5 py-3 text-left text-sm font-medium text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    See the details <ArrowRight className="size-4" />
                  </button>
                </div>
                <div className="px-1 pt-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.11em] text-muted-foreground"><span>{design.category}</span><span className="size-1 rounded-full bg-border" /><span>{design.shape}</span></div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">{design.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{design.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid min-h-80 place-items-center rounded-[2rem] border border-dashed border-border bg-card/50 text-center">
            <div><Sparkles className="mx-auto mb-4 size-6 text-primary" /><h3 className="text-lg font-semibold">No exact match—yet.</h3><p className="mt-2 text-sm text-muted-foreground">Try a different color, shape, or category.</p><Button variant="outline" className="mt-5 rounded-full" onClick={() => { setQuery(''); setFilter('All'); }}>Clear filters</Button></div>
          </div>
        )}
      </section>

      <section id="how-it-works" className="bg-[#35252a] px-5 py-20 text-[#fbf4ef] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#dcb0ba]">Built for fresh inspiration</p><h2 className="max-w-sm font-heading text-4xl font-semibold leading-tight tracking-[-0.045em]">A clean home for an ever-changing feed.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[['01', 'Collect', 'Bring in public trend signals and properly attributed design references.'], ['02', 'Curate', 'Review, tag, and describe each look before it reaches the gallery.'], ['03', 'Discover', 'Search by finish, color, shape, or mood—and save what you love.']].map(([number, title, detail]) => (
              <div key={number} className="border-t border-white/20 pt-5"><span className="text-xs text-[#dcb0ba]">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{detail}</p></div>
            ))}
          </div>
        </div>
      </section>

      <footer id="sources" className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div><div className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /><span className="font-semibold">NailMuse</span></div><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">Trend descriptions are editorial summaries. Original reporting is linked on every design; images are illustrative references.</p></div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">{[...new Map(designs.map((design) => [design.sourceName, design])).values()].map((design) => <a key={design.sourceName} href={design.sourceUrl} target="_blank" rel="noreferrer" className="transition hover:text-foreground">{design.sourceName}</a>)}</div>
      </footer>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[1.75rem] p-0 sm:max-w-3xl">
            <div className="grid md:grid-cols-[.9fr_1.1fr]">
              <img src={selected.image} alt={`${selected.title} manicure`} className="h-64 w-full object-cover md:h-full md:min-h-[470px]" />
              <div className="flex flex-col p-7 sm:p-9">
                <DialogHeader>
                  <div className="mb-2 flex flex-wrap gap-2"><span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{selected.category}</span><span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{selected.shape}</span></div>
                  <DialogTitle className="text-3xl font-semibold tracking-[-0.04em]">{selected.title}</DialogTitle>
                  <DialogDescription className="pt-2 text-base leading-7">{selected.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-8"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Palette</p><div className="mt-3 flex flex-wrap gap-2">{selected.colors.map((color) => <span key={color} className="rounded-full border border-border px-3 py-1.5 text-xs">{color}</span>)}</div></div>
                <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
                  <Button className="h-11 flex-1 rounded-full" onClick={() => toggleSaved(selected.id)}>{saved.includes(selected.id) ? <><Check /> Saved</> : <><Bookmark /> Save design</>}</Button>
                  <Button variant="outline" className="h-11 flex-1 rounded-full" render={<a href={selected.sourceUrl} target="_blank" rel="noreferrer" />}>Source: {selected.sourceName} <ExternalLink /></Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
