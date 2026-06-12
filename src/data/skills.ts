export type Skill = {
  name: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "Vue.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML/CSS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Workflow",
    skills: [{ name: "Git & GitHub" }, { name: "Agile" }],
  },
];
