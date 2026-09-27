import { cn } from '@/lib/utils';

type TrendImageProps = {
  title: string;
  column: number;
  row: number;
  className?: string;
  priority?: boolean;
};

export function TrendImage({ title, column, row, className, priority = false }: TrendImageProps) {
  return (
    <div className={cn('relative aspect-[9/8] overflow-hidden bg-muted', className)}>
      <img
        src="/uk-nail-trends-2026.png"
        alt={`${title} manicure inspiration for 2026`}
        width={1536}
        height={1024}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className="absolute max-w-none select-none"
        style={{
          width: '400%',
          height: '300%',
          left: `-${column * 100}%`,
          top: `-${row * 100}%`,
        }}
      />
    </div>
  );
}
