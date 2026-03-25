import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve Worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border sm:before:left-[19px]">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-14">
                {/* Timeline Dot */}
                <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background sm:left-2 sm:h-6 sm:w-6">
                  <div className="h-2 w-2 rounded-full bg-accent sm:h-2.5 sm:w-2.5" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-muted/30 p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
