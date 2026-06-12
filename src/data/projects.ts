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
    title: "PowerPicker",
    description:
      "A voting and elections platform for schools, universities, and small organizations — set up a poll, manage candidates, and run a clean, tamper-resistant vote.",
    tags: ["TypeScript", "CSS", "Elections"],
    github: "https://github.com/davewonnah/powerPicker",
  },
  {
    title: "LNRCS Leadership Directory",
    description:
      "A directory presenting the leadership of the LNRCS — a TypeScript site I built and shipped to production on Vercel.",
    tags: ["TypeScript", "CSS", "Vercel"],
    github: "https://github.com/davewonnah/lnrcs-leaderships",
    live: "https://lnrcs-leaderships.vercel.app",
  },
  {
    title: "LNRCS Invoice App",
    description:
      "An invoice generator that turns billing into a quick form-fill — create, preview, and export invoices for the LNRCS workflow with as little friction as possible.",
    tags: ["TypeScript", "CSS"],
    github: "https://github.com/davewonnah/invioce-app-lnrcs",
  },
  {
    title: "OnTime",
    description:
      "A web app built with Vue and SCSS, deployed on Vercel — a project where I leaned into component-driven UI and a clean, responsive layout.",
    tags: ["Vue", "SCSS", "JavaScript"],
    github: "https://github.com/davewonnah/ontime-web",
    live: "https://ontime-web-nine.vercel.app",
  },
  {
    title: "Quiz App",
    description:
      "My CS50 final project — a quiz application with a Python backend and a lightweight front end, deployed live for anyone to try.",
    tags: ["Python", "JavaScript", "HTML"],
    github: "https://github.com/davewonnah/Quiz-App",
    live: "https://quiz-app-self-three.vercel.app",
  },
  {
    title: "Wordle Clone",
    description:
      "A from-scratch take on the Wordle word game — six guesses, an on-screen keyboard, and color feedback on every letter, all in vanilla JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/davewonnah/wordle",
    live: "https://davewonnah.github.io/wordle/",
  },
  {
    title: "Password Generator",
    description:
      "A small tool for generating strong, random passwords — pick a length and character set and copy a secure password in one click.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/davewonnah/Password-Generator",
    live: "https://davewonnah.github.io/Password-Generator/",
  },
  {
    title: "Phone Book",
    description:
      "A simple contact book for adding, searching, and managing phone numbers — built in vanilla JavaScript to keep the logic front and center.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/davewonnah/My_Phone_Book",
    live: "https://davewonnah.github.io/My_Phone_Book/index.html",
  },
  {
    title: "To-Do List",
    description:
      "A classic to-do app — add, check off, and clear tasks — written in plain JavaScript to nail the DOM-and-state fundamentals.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/davewonnah/Todo-list-app",
    live: "https://davewonnah.github.io/Todo-list-app/index.html",
  },
  {
    title: "Registration Form",
    description:
      "An early class project: a styled, validated registration form built with plain HTML and CSS — one of the first things I shipped.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/davewonnah/Registration-form",
    live: "https://davewonnah.github.io/Registration-form/",
  },
];
