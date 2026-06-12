import { experiences } from "@/data/experience";
import { SectionHeader } from "./section-header";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="04" eyebrow="Track record" title="Where I've worked" />

        <div className="relative ml-2 border-l border-border pl-8 sm:pl-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-12 last:pb-0">
              {/* Marker */}
              <span className="absolute -left-[calc(2rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:-left-[calc(2.5rem+1px)]">
                <span className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
              </span>

              {/* Period as an editorial dateline */}
              <p className="font-mono text-xs tracking-wide text-muted-foreground">
                {exp.period}
              </p>

              <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {exp.role}
                </h3>
                <span className="text-sm text-accent">@ {exp.company}</span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
