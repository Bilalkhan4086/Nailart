import Image from 'next/image';
import { cn } from '@/lib/utils';

type BlogImageProps = {
  index: number;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function BlogImage({ index, alt, className, priority = false }: BlogImageProps) {
  const column = index % 6;
  const row = Math.floor(index / 6);

  return (
    <div className={cn('relative aspect-square overflow-hidden bg-muted', className)}>
      <Image
        src="/blog-nail-art-30.png"
        alt={alt}
        width={1374}
        height={1145}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        unoptimized
        className="absolute max-w-none select-none"
        style={{ width: '600%', height: '500%', left: `-${column * 100}%`, top: `-${row * 100}%` }}
      />
    </div>
  );
}
