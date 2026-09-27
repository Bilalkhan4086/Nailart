import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { BlogImage } from '@/components/blog-image';
import { blogPosts } from '@/lib/blogs';
import { siteUrl } from '@/lib/trends';

export const metadata: Metadata = {
  title: 'Nail Art Blog: 30 UK Design Guides',
  description: 'Explore 30 original UK nail art guides covering new designs, beginners, short nails, rainbow nails, toenails, techniques and nail care.',
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    type: 'website', locale: 'en_GB', url: `${siteUrl}/blog`,
    title: 'Nail Art Blog: 30 UK Design Guides',
    description: 'Original nail art ideas and practical salon-ready guides for UK readers.',
    images: [{ url: '/blog-nail-art-30.png', width: 1374, height: 1145, alt: 'Thirty original nail art guide images' }],
  },
};

const categories = ['Trends', 'Beginner', 'Colour', 'Shapes', 'Techniques'] as const;

export default function BlogPage() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'NailMuse UK nail art blog',
    url: `${siteUrl}/blog`,
    inLanguage: 'en-GB',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.map((item, index) => ({
        '@type': 'ListItem', position: index + 1, name: item.title, url: `${siteUrl}/blog/${item.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
      <header className="sticky top-0 z-40 border-b border-border/75 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="NailMuse UK home"><span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="size-4" /></span><span><span className="block text-lg font-semibold leading-4 tracking-[-.04em]">NailMuse</span><span className="text-[9px] font-medium uppercase tracking-[.16em] text-muted-foreground">by BookMyLook</span></span></Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex" aria-label="Main navigation"><Link href="/">UK trends</Link><Link href="/blog" className="font-semibold text-foreground">Blog guides</Link></nav>
          <Link href="/#designs" className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium shadow-xs transition hover:bg-accent">Browse designs</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pt-20">
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-primary"><BookOpen className="size-4" /> NailMuse journal</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.055em] sm:text-7xl">Thirty nail art guides,<span className="block font-normal italic text-primary">written for real decisions.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Explore new nail art designs by season, colour, shape and technique. Every guide adds practical difficulty notes, salon wording and transparent research links for UK readers.</p>
        <div className="mt-8 flex flex-wrap gap-2">{categories.map((category) => <a key={category} href={`#${category.toLowerCase()}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">{category}</a>)}</div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-5 pb-24 sm:px-8">
        {categories.map((category) => {
          const posts = blogPosts.filter((item) => item.category === category);
          return (
            <section id={category.toLowerCase()} key={category} className="scroll-mt-24" aria-labelledby={`${category}-heading`}>
              <div className="mb-7 flex items-end justify-between border-b border-border pb-4"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{posts.length} practical guides</p><h2 id={`${category}-heading`} className="mt-2 text-3xl font-semibold tracking-[-.04em]">{category}</h2></div></div>
              <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((item) => (
                  <article key={item.slug} className="group">
                    <Link href={`/blog/${item.slug}`}><BlogImage index={item.image} alt={`${item.title} manicure guide`} className="rounded-[1.75rem] shadow-[0_18px_60px_rgba(80,45,55,.09)] transition duration-500 group-hover:scale-[1.015]" /></Link>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[.14em] text-primary">{item.keyword}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight"><Link href={`/blog/${item.slug}`} className="underline-offset-4 hover:underline">{item.title}</Link></h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <Link href={`/blog/${item.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Read the guide <ArrowRight className="size-4" /></Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
