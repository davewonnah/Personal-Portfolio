"use client";

import { useState } from "react";

export function ResumeActions() {
  const [generating, setGenerating] = useState(false);

  async function downloadPdf() {
    if (generating) return;
    setGenerating(true);
    try {
      // Loaded on demand so the PDF engine stays out of the initial bundle.
      const [{ pdf }, { ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./resume-pdf"),
      ]);
      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Dave-Wonnah-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Résumé download failed:", err);
      // Fall back to the browser print dialog if generation fails for any reason.
      window.print();
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div
      data-no-print
      className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6"
    >
      <a
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <span aria-hidden>&larr;</span> Back to site
      </a>

      <div className="flex items-center gap-2.5">
        {/* Print */}
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
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
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Print
        </button>

        {/* Download — real file, generated client-side */}
        <button
          type="button"
          onClick={downloadPdf}
          disabled={generating}
          aria-busy={generating}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {generating ? (
            <svg
              className="animate-spin"
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
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
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
          )}
          {generating ? "Generating…" : "Download PDF"}
        </button>
      </div>
    </div>
  );
}
