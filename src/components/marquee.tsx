export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-background">
      <div className="flex animate-marquee whitespace-nowrap py-6">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="mx-8 font-display text-2xl md:text-3xl text-foreground/80"
          >
            {t}
            <span className="ml-16 text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
