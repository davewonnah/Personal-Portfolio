import { siteConfig } from "@/lib/constants";
import { FadeIn } from "./motion";

export function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        {/* Meta row — availability + location, like a letterhead */}
        <FadeIn delay={0}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new work
            </span>
            <span className="hidden text-border sm:inline">/</span>
            <span>{siteConfig.location}</span>
          </div>
        </FadeIn>

        {/* Name + role */}
        <FadeIn delay={0.1}>
          <h1 className="font-serif mt-8 text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
            {siteConfig.name}.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-foreground sm:text-2xl">
            {siteConfig.title} who builds the{" "}
            <span className="font-serif italic text-accent">
              quiet, dependable
            </span>{" "}
            parts of the web — the bits people never notice because they just
            work.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
        </FadeIn>

        {/* CTA + socials on one editorial line */}
        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              See what I&apos;ve built
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Or just say hello
            </a>

            <div className="ml-auto flex items-center gap-1">
              <SocialLink href={siteConfig.links.github} label="GitHub">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </SocialLink>
              <SocialLink href={siteConfig.links.linkedin} label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </SocialLink>
              <SocialLink href={siteConfig.links.twitter} label="Twitter">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </SocialLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {children}
      </svg>
    </a>
  );
}
