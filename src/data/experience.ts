export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "2024 - Present",
    description:
      "Leading frontend architecture and mentoring junior developers on a high-traffic SaaS platform.",
    highlights: [
      "Architected a micro-frontend system serving 100K+ daily users",
      "Reduced page load times by 40% through performance optimization",
      "Mentored a team of 4 junior developers",
    ],
  },
  {
    role: "Software Engineer",
    company: "Startup Inc.",
    period: "2022 - 2024",
    description:
      "Built and shipped full-stack features for a B2B analytics platform from early stage to Series A.",
    highlights: [
      "Developed real-time analytics dashboard with WebSocket integration",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Built RESTful APIs handling 1M+ requests per day",
    ],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description:
      "Developed responsive web applications and landing pages for various clients across industries.",
    highlights: [
      "Delivered 15+ client projects on time and within budget",
      "Introduced component library reducing development time by 30%",
      "Collaborated with design team to implement pixel-perfect UIs",
    ],
  },
];
