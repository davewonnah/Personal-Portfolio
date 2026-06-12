import type { Metadata } from "next";
import { resume } from "@/data/resume";
import { ResumeActions } from "@/components/resume-actions";

export const metadata: Metadata = {
  // `absolute` skips the "| Dave Wonnah" template so the saved-PDF filename
  // reads cleanly as "Dave Wonnah — Résumé".
  title: { absolute: `${resume.name} — Résumé` },
  description: `${resume.name} — ${resume.title}. ${resume.summary}`,
};

export default function ResumePage() {
  return (
    <div className="px-4 py-10 sm:px-6">
      <ResumeActions />

      {/* The sheet */}
      <article className="mx-auto max-w-3xl rounded-sm border border-border bg-paper p-8 sm:p-12 print:border-0 print:bg-white print:p-0">
        {/* Header */}
        <header className="border-b border-border pb-6">
          <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            {resume.name}
          </h1>
          <p className="mt-1 text-lg text-accent">{resume.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <a
              href={`tel:${resume.contact.phone.replace(/\s/g, "")}`}
              className="hover:text-foreground"
            >
              {resume.contact.phone}
            </a>
            <a
              href={`mailto:${resume.contact.email}`}
              className="hover:text-foreground"
            >
              {resume.contact.email}
            </a>
            <a
              href={resume.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {resume.contact.github}
            </a>
          </div>
        </header>

        {/* Summary */}
        <p className="mt-6 text-[15px] leading-relaxed text-foreground">
          {resume.summary}
        </p>

        {/* Body — main + sidebar */}
        <div className="mt-8 grid gap-10 sm:grid-cols-[1.8fr_1fr] sm:gap-12">
          {/* Main column */}
          <div className="space-y-8">
            <Section title="Experience">
              <div className="space-y-6">
                {resume.experience.map((job) => (
                  <div key={`${job.company}-${job.role}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-serif text-lg font-medium">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent">{job.company}</p>
                    <ul className="mt-2 space-y-1.5">
                      {job.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-px w-2.5 shrink-0 bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <CredentialList items={resume.education} />
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Section title="Technical Skills">
              <ul className="flex flex-wrap gap-1.5">
                {resume.technicalSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Competencies">
              <ul className="space-y-1.5">
                {resume.competencies.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-px w-2.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Certifications">
              <CredentialList items={resume.certifications} />
            </Section>

            <Section title="References">
              <ul className="space-y-3">
                {resume.references.map((ref) => (
                  <li key={ref.name} className="text-sm">
                    <p className="font-medium text-foreground">{ref.name}</p>
                    <p className="text-xs text-muted-foreground">{ref.role}</p>
                  </li>
                ))}
              </ul>
            </Section>
          </aside>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
        {title}
      </h2>
      <div className="rule mb-4 w-12" />
      {children}
    </section>
  );
}

function CredentialList({
  items,
}: {
  items: { title: string; detail: string; year: string }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
            <span className="font-mono text-xs text-muted-foreground">
              {item.year}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
