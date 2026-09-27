'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Bookmark, Check, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendImage } from '@/components/trend-image';
import { filters, trends } from '@/lib/trends';

export function TrendGallery() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [saved, setSaved] = useState<number[]>([]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return trends.filter((trend) => {
      const matchesFilter = filter === 'All' || trend.category === filter;
      const haystack = [trend.title, trend.description, trend.category, trend.shape, ...trend.colours].join(' ').toLowerCase();
      return matchesFilter && (!term || haystack.includes(term));
    });
  }, [filter, query]);

  function toggleSaved(id: number) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <section id="designs" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="sticky top-[72px] z-30 -mx-5 border-y border-border/80 bg-background/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:rounded-2xl lg:border lg:bg-card/60 lg:px-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 rounded-full border-0 bg-secondary/75 pl-10 pr-10 shadow-none" placeholder="Search nail colour, shape or finish…" aria-label="Search UK nail art trends" />
            {query && <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="Clear search"><X className="size-4" /></button>}
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Nail design filters">
            {filters.map((item) => <Button key={item} onClick={() => setFilter(item)} variant={filter === item ? 'default' : 'secondary'} className="rounded-full px-4" aria-pressed={filter === item}>{item}</Button>)}
          </div>
        </div>
      </div>

      <div className="mb-8 mt-10 flex items-end justify-between">
        <div><p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Updated 27 September 2026</p><h2 className="font-heading text-3xl font-semibold tracking-[-0.035em]">Trending nail designs in the UK</h2></div>
        <p className="hidden text-sm text-muted-foreground sm:block">{visible.length} editor-tracked ideas</p>
      </div>

      {visible.length ? (
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((trend, index) => (
            <article key={trend.slug} className="group">
              <div className={`relative overflow-hidden rounded-[1.75rem] shadow-[0_18px_60px_rgba(80,45,55,.08)] ${index % 3 === 1 ? 'lg:mt-10' : ''}`}>
                <TrendImage title={trend.title} column={trend.grid.column} row={trend.grid.row} priority={index < 3} className="transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#542f3d] shadow-sm backdrop-blur">{trend.signal}</span>
                  <button onClick={() => toggleSaved(trend.id)} aria-label={`${saved.includes(trend.id) ? 'Remove' : 'Save'} ${trend.title}`} className={`grid size-10 place-items-center rounded-full shadow-sm backdrop-blur transition hover:scale-105 ${saved.includes(trend.id) ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-[#542f3d]'}`}>
                    {saved.includes(trend.id) ? <Check className="size-4" /> : <Bookmark className="size-4" />}
                  </button>
                </div>
              </div>
              <div className="px-1 pt-5">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[.11em] text-muted-foreground"><span>{trend.category}</span><span className="size-1 rounded-full bg-border" /><span>{trend.shape}</span></div>
                <h3 className="font-heading text-xl font-semibold tracking-tight"><a href={`/trends/${trend.slug}`} className="underline-offset-4 hover:underline">{trend.title}</a></h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{trend.description}</p>
                <a href={`/trends/${trend.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">See the trend guide <ArrowRight className="size-4" /></a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid min-h-80 place-items-center rounded-[2rem] border border-dashed border-border bg-card/50 text-center">
          <div><Search className="mx-auto mb-4 size-6 text-primary" /><h3 className="text-lg font-semibold">No exact match yet</h3><p className="mt-2 text-sm text-muted-foreground">Try another colour, shape or finish.</p><Button variant="outline" className="mt-5 rounded-full" onClick={() => { setQuery(''); setFilter('All'); }}>Clear filters</Button></div>
        </div>
      )}
    </section>
  );
}
