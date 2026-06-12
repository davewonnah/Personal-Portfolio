export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Smart Liberia",
    period: "November 2025 – Present",
    description:
      "Building and maintaining digital solutions that support government and public-sector services in Liberia.",
    highlights: [
      "Develop and maintain web applications using modern frontend and backend technologies",
      "Collaborate with cross-functional teams to design, implement, and improve software solutions",
      "Build and integrate RESTful APIs for data management and system interoperability",
      "Contribute to database design, optimization, and application performance improvements",
    ],
  },
  {
    role: "Software Engineer, Data",
    company: "OnTime",
    period: "March 2024 – Present",
    description:
      "Collaborator on OnTime, a real-time visitor-management system used at the Orange Digital Center (ODC).",
    highlights: [
      "Streamlined visitor registration, check-in, and check-out while capturing key details like name, host, reason for visit, and timestamps",
      "Replaced a manual check-in/item-verification process built to prevent theft with a faster digital flow",
      "Built a web-based admin interface for tracking visitor records and generating reports",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Kwagei Group of Companies",
    period: "May 2024 – October 2025",
    description:
      "Gained hands-on, full-stack experience while supporting the development of web-based applications.",
    highlights: [
      "Developed and deployed a real-time visitor-management system",
      "Facilitated a Python course for kids at the Orange Digital Center",
      "Worked with PostgreSQL databases and assisted in building backend services and API integrations",
      "Participated in code reviews, testing, and bug fixing to improve application quality",
    ],
  },
  {
    role: "Software Engineering Trainee",
    company: "Kwagei Innovative Training (KIT)",
    period: "2022 – 2025",
    description:
      "Where it all started — I wrote my first lines of code here in 2022 and learned software engineering from the ground up.",
    highlights: [
      "Built up the fundamentals: programming, problem-solving, and algorithms",
      "Started with JavaScript and Python and built my first real projects",
      "Earned a Certificate of Completion in 2025",
    ],
  },
];
