import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-lg font-medium">
            {siteConfig.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built by hand,
            not by template.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
