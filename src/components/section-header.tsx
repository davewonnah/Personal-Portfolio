type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * Left-aligned, numbered section header — the editorial spine of the page.
 * Numerals are mono, the title is the display serif, and a short accent rule
 * sits under the eyebrow instead of the usual centered uppercase label.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="text-sm tracking-wide text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <div className="rule mt-3 w-24" />
      <h2 className="font-serif mt-5 text-3xl font-medium tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
