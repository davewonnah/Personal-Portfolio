import type { ReactElement } from "react";

/**
 * A small, hand-authored line-icon set — one coherent visual language instead of
 * a wall of mismatched brand logos. Every glyph is stroked with `currentColor`
 * on a 24×24 grid so it inherits text color and sits on the editorial baseline.
 */

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, ReactElement> = {
  // React — the atom
  React: (
    <svg {...base}>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  // Next.js — the triangular mark
  "Next.js": (
    <svg {...base}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M8.5 8v8M8.5 8l7.5 9M15.5 8.5v5" />
    </svg>
  ),
  // TypeScript — curly braces
  TypeScript: (
    <svg {...base}>
      <path d="M8.5 4c-2 0-2.5 1-2.5 3v2c0 1.4-.5 2.5-2 3 1.5.5 2 1.6 2 3v2c0 2 .5 3 2.5 3" />
      <path d="M15.5 4c2 0 2.5 1 2.5 3v2c0 1.4.5 2.5 2 3-1.5.5-2 1.6-2 3v2c0 2-.5 3-2.5 3" />
    </svg>
  ),
  // JavaScript — square brackets
  JavaScript: (
    <svg {...base}>
      <path d="M9 4H6v16h3M15 4h3v16h-3" />
    </svg>
  ),
  // Tailwind CSS — flowing waves
  "Tailwind CSS": (
    <svg {...base}>
      <path d="M3 11c1.5-3 3.5-4.5 6-4.5 3.5 0 4 3 6.5 3 1.6 0 2.7-.8 3.5-2.5-1.5 3-3.5 4.5-6 4.5-3.5 0-4-3-6.5-3-1.6 0-2.7.8-3.5 2.5Z" />
      <path d="M3 17c1.5-3 3.5-4.5 6-4.5 3.5 0 4 3 6.5 3 1.6 0 2.7-.8 3.5-2.5-1.5 3-3.5 4.5-6 4.5-3.5 0-4-3-6.5-3-1.6 0-2.7.8-3.5 2.5Z" />
    </svg>
  ),
  // HTML/CSS — angle brackets
  "HTML/CSS": (
    <svg {...base}>
      <path d="M8 6 3 12l5 6M16 6l5 6-5 6M13.5 4l-3 16" />
    </svg>
  ),
  // Node.js — hexagon runtime
  "Node.js": (
    <svg {...base}>
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z" />
      <path d="M9.5 14c0 1.2.8 2 2.5 2s2.5-.8 2.5-2-1-1.7-2.5-2-2.5-.8-2.5-2 .8-2 2.5-2 2.4.8 2.5 2" />
    </svg>
  ),
  // Express — routing arrow
  Express: (
    <svg {...base}>
      <path d="M3 8h11a4 4 0 0 1 0 8H6" />
      <path d="m9 13-3 3 3 3" />
      <path d="m18 5 3 3-3 3" />
    </svg>
  ),
  // Python — interlocking loop
  Python: (
    <svg {...base}>
      <path d="M12 3c-3 0-4 1-4 3v2h8" />
      <path d="M8 8c-3 0-4 1-4 4s1 4 4 4h2v-3a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V6c0-2-1-3-4-3" />
      <path d="M16 16c3 0 4-1 4-4M12 21c3 0 4-1 4-3v-2H8" />
      <circle cx="10" cy="5.5" r=".6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18.5" r=".6" fill="currentColor" stroke="none" />
    </svg>
  ),
  // REST APIs — link
  "REST APIs": (
    <svg {...base}>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 1 0-5.66-5.66l-1.5 1.5" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 1 0 5.66 5.66l1.5-1.5" />
    </svg>
  ),
  // GraphQL — connected graph
  GraphQL: (
    <svg {...base}>
      <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z" />
      <circle cx="12" cy="3" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="4" cy="8" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="20" cy="8" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="4" cy="16" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="20" cy="16" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="21" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  // PostgreSQL — database cylinder
  PostgreSQL: (
    <svg {...base}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3 3 7 3s7-1.3 7-3" />
    </svg>
  ),
  // MongoDB — leaf
  MongoDB: (
    <svg {...base}>
      <path d="M12 2c3 4 5 7 5 11a5 5 0 0 1-10 0c0-4 2-7 5-11Z" />
      <path d="M12 6v14" />
    </svg>
  ),
  // Redis — stacked layers
  Redis: (
    <svg {...base}>
      <path d="M3 7l9-4 9 4-9 4-9-4Z" />
      <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
    </svg>
  ),
  // Prisma — faceted prism
  Prisma: (
    <svg {...base}>
      <path d="M13 2.5 20 18a1 1 0 0 1-.7 1.4l-9.5 2.1a1 1 0 0 1-1.2-1.3L11.4 3a1 1 0 0 1 1.6-.5Z" />
      <path d="M11.4 3 9 19.6" />
    </svg>
  ),
  // Git — branch
  Git: (
    <svg {...base}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <path d="M6 8.2v7.6M8 7.6A6 6 0 0 0 16 10.6" />
    </svg>
  ),
  // Docker — container box
  Docker: (
    <svg {...base}>
      <path d="M3 13h15v2a4 4 0 0 1-4 4H8a5 5 0 0 1-5-5v-1Z" />
      <path d="M6 13v-3h3v3M9.5 13v-3h3v3M13 13v-3h3v3M9.5 9.5v-3h3v3" />
      <path d="M18.5 11c1 0 1.8-.5 2.2-1.3.5.8 1.3 1.1 2.3 1" />
    </svg>
  ),
  // AWS — cloud
  AWS: (
    <svg {...base}>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16 9.5a3.5 3.5 0 0 1 .5 8.5H7Z" />
      <path d="M9 21c1.5 1 4.5 1 6 0M5 20c1 .6 2.3.9 3.5.9" />
    </svg>
  ),
  // CI/CD — continuous loop
  "CI/CD": (
    <svg {...base}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  ),
  // Linux — terminal
  Linux: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  ),
  // Vue.js — the nested chevrons
  "Vue.js": (
    <svg {...base}>
      <path d="M2 4h4.5L12 13l5.5-9H22L12 21 2 4Z" />
      <path d="M7.5 4 12 11.5 16.5 4" />
    </svg>
  ),
  // Git & GitHub — branch
  "Git & GitHub": (
    <svg {...base}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <path d="M6 8.2v7.6M8 7.6A6 6 0 0 0 16 10.6" />
    </svg>
  ),
  // Agile — iterative loop
  Agile: (
    <svg {...base}>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 4.5V9h-4.5" />
    </svg>
  ),
};

const fallback = (
  <svg {...base}>
    <path d="m4 17 6-6-6-6M12 19h8" />
  </svg>
);

export function SkillIcon({ name }: { name: string }) {
  return icons[name] ?? fallback;
}
