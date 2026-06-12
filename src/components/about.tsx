import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import { SectionHeader } from "./section-header";

const figures = [
  { label: "Years writing code", value: "2+" },
  { label: "Things shipped", value: "20+" },
  { label: "Tools in rotation", value: "15+" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="01" eyebrow="About" title="A little about me" />

        <div className="grid gap-12 md:grid-cols-[260px_1fr] md:items-start md:gap-16">
          {/* Profile image — offset, with a caption like a magazine plate */}
          <figure className="mx-auto w-full max-w-[260px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-muted">
              <Image
                src="/dave-image.png"
                alt={siteConfig.name}
                fill
                className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                priority
              />
            </div>
            <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
              {siteConfig.name} — at the desk, mid-thought.
            </figcaption>
          </figure>

          {/* Bio */}
          <div>
            <p className="text-lg leading-relaxed text-foreground [&::first-letter]:font-serif [&::first-letter]:mr-1 [&::first-letter]:float-left [&::first-letter]:text-6xl [&::first-letter]:font-medium [&::first-letter]:leading-[0.8] [&::first-letter]:text-accent">
              I&apos;m an engineer who got into this work because I liked taking
              a vague idea and pushing on it until it became something real you
              could click. That hasn&apos;t changed. I care about clean code,
              but mostly because it&apos;s how you keep a product honest as it
              grows.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Away from the keyboard I&apos;m usually reading about how other
              people build things, poking at an open-source repo, or writing up
              what I&apos;ve learned on the blog. I think out loud — it&apos;s
              how the lessons stick.
            </p>

            {/* Figures — set as editorial numerals, not boxed stat cards */}
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-6">
              {figures.map((item) => (
                <div key={item.label}>
                  <dt className="font-serif text-3xl font-medium text-foreground">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Resume link */}
            <a
              href="/resume"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              <span className="border-b border-border pb-0.5 group-hover:border-accent">
                View my résumé
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
