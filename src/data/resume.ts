export type ResumeRole = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type ResumeCredential = {
  title: string;
  detail: string;
  year: string;
};

export const resume = {
  name: "Dave Wonnah",
  title: "Software Engineer",
  contact: {
    phone: "+231 778 315 083",
    email: "wonnahdave@gmail.com",
    github: "github.com/davewonnah",
    githubUrl: "https://github.com/davewonnah",
  },
  summary:
    "Agile software engineer with 2+ years of experience designing, developing, and deploying scalable software solutions. Strong expertise in JavaScript and Python, with a drive for building innovative, user-friendly applications.",

  experience: [
    {
      role: "Software Engineer",
      company: "Smart Liberia",
      period: "November 2025 – Present",
      points: [
        "Build and maintain digital solutions that support government and public-sector services in Liberia.",
      ],
    },
    {
      role: "Software Engineer, Data",
      company: "OnTime",
      period: "March 2024 – Present",
      points: [
        "Collaborator on OnTime, a visitor-management system used at the Orange Digital Center (ODC), where visitors go through a detailed check-in/check-out process — personal-information collection and item verification — to prevent theft.",
        "Streamlined visitor registration, check-in, and check-out while capturing key details such as name, host, reason for visit, and timestamps.",
        "Built a web-based admin interface for tracking visitor records and generating reports.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Kwagei Group of Companies",
      period: "May 2024 – October 2025",
      points: [
        "Developed and deployed a real-time visitor-management system.",
        "Facilitated a Python course for kids at the Orange Digital Center.",
      ],
    },
    {
      role: "Software Engineering Trainee",
      company: "Kwagei Innovative Training (KIT)",
      period: "2022 – 2025",
      points: [
        "Wrote my first lines of code in 2022 and learned software engineering from the ground up.",
        "Built foundational skills in programming, problem-solving, and algorithms using JavaScript and Python.",
      ],
    },
  ] as ResumeRole[],

  technicalSkills: [
    "JavaScript",
    "Python",
    "React",
    "Vue.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "REST APIs",
    "Git & GitHub",
    "HTML/CSS",
    "Tailwind CSS",
    "Agile",
  ],

  competencies: [
    "Programming Languages & Algorithms",
    "Software Development Practices",
    "Problem-Solving & Analytical Skills",
    "Communication & Collaboration",
    "Adaptability & Continuous Learning",
  ],

  education: [
    {
      title: "Computer Science — CS50x",
      detail: "Harvard University (online)",
      year: "2024",
    },
    {
      title: "High School Diploma",
      detail: "Calvary Baptist Church School System",
      year: "October 2022",
    },
  ] as ResumeCredential[],

  certifications: [
    {
      title: "Certificate of Completion",
      detail: "Kwagei Innovative Training (KIT)",
      year: "2025",
    },
  ] as ResumeCredential[],

  references: [
    { name: "Kpetermeni Siakor", role: "CEO — Kwagei Group" },
    { name: "Nathan T. Siafa", role: "Technology Lead — Kwagei Group" },
    { name: "Marvin R. Tarawally", role: "CEO — Smart Liberia" },
    { name: "Dieudonné Perry", role: "COO — Smart Liberia" },
  ],
};
