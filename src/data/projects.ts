export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, cart functionality, payment integration, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/davewonnah/ecommerce-platform",
    live: "https://ecommerce.davewonnah.dev",
  },
  {
    title: "Task Management App",
    description:
      "A real-time collaborative task management tool with drag-and-drop boards, team workspaces, and notifications.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/davewonnah/task-manager",
    live: "https://tasks.davewonnah.dev",
  },
  {
    title: "AI Chat Interface",
    description:
      "An AI-powered chat application with conversation history, multiple model support, and markdown rendering.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Redis", "Vercel AI SDK"],
    github: "https://github.com/davewonnah/ai-chat",
  },
  {
    title: "Developer Blog",
    description:
      "A performant blog built with MDX, featuring syntax highlighting, search functionality, and RSS feed generation.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/davewonnah/dev-blog",
    live: "https://blog.davewonnah.dev",
  },
];
