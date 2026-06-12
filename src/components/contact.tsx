"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/constants";
import { SectionHeader } from "./section-header";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission — replace with your actual API endpoint
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  }

  return (
    <section
      id="contact"
      className="border-t border-border px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="05"
          eyebrow="Say hi"
          title="Let's make something"
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Invitation */}
          <div>
            <p className="font-serif text-2xl leading-snug text-foreground">
              Got a project, a rough idea, or just want to compare notes?
              My inbox is open.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I read everything that comes through and try to reply within a day
              or two. The fastest way to reach me is email — but the form works
              just as well.
            </p>

            <div className="mt-8 space-y-1">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="font-serif text-xl text-foreground underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-accent"
              >
                {siteConfig.links.email}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-1 pt-4 text-sm text-muted-foreground">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Form — underline fields, like a paper form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Field id="name" label="Your name" type="text" placeholder="Jane Doe" />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="jane@company.com"
            />
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium tracking-wide text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="What's on your mind?"
                className="mt-1 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-medium text-foreground transition-colors hover:text-accent disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Thanks — talk soon!"
                  : "Send it over"}
              {status === "idle" && (
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium tracking-wide text-muted-foreground"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        className="mt-1 h-10 w-full border-0 border-b border-border bg-transparent text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}
