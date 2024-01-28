export { About } from "./About";
export { Skills } from "./Skills";

interface Skill {
  title: string;
  icon: string;
}

interface SkillsData {
  [Key: string]: Skill[];
}

export const skills = [
  {
    title: "Web",
    value: "Web",
  },
  {
    title: "Frameworks",
    value: "Frameworks",
  },
  {
    title: "Linguagens",
    value: "Linguagens",
  },
  {
    title: "Database",
    value: "Banco_de_dados",
  },
];

export const SkillsData: SkillsData = {
  Web: [
    {
      title: "Html",
      icon: "/images/html5.svg",
    },
    {
      title: "Css",
      icon: "/images/css-3.svg",
    },
    {
      title: "Javascript",
      icon: "/images/js.svg",
    },
  ],
  Linguagens: [
    {
      title: "Javascript",
      icon: "/images/js.svg",
    },
    {
      title: "Typescript",
      icon: "/images/ts.svg",
    },
  ],
  Frameworks: [
    {
      title: "React",
      icon: "/images/react.svg",
    },
    {
      title: "Nextjs",
      icon: "/images/nextjs.webp",
    },
    {
      title: "Prisma",
      icon: "/images/prisma.svg",
    },
  ],
  Banco_de_dados: [
    {
      title: "MongoDB",
      icon: "/images/mongodb.svg",
    },
    {
      title: "Postgres",
      icon: "/images/Postgresql.png",
    },
  ],
};
