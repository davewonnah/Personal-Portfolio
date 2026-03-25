import { siteConfig } from "@/lib/constants";

const highlights = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border bg-muted sm:h-80 sm:w-80">
              <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-muted-foreground/30">
                {siteConfig.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a passionate software engineer who loves turning ideas into
              real, impactful products. I specialize in building full-stack web
              applications with modern technologies and a focus on clean,
              maintainable code.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or writing about software
              engineering on my blog.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-muted/50 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">{item.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:bg-muted"
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
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
