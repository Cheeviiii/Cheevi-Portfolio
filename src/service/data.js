import Pokedex from "../assets/Pokedex.png";
import WeatherApp from "../assets/WeatherApp.png";
import ControleFinanceiro from "../assets/ControleFinanceiro.png";
import Portfolio from "../assets/CheeviPortfolio.png";

export const ProjetosData = [
  {
    title: "Pokedex",
    description: "Database de pokemons.",
    slug: "database-de-pokemons",
    img: Pokedex,
    link: "https://pokedex-eight-green.vercel.app",
    github_link: "https://github.com/Cheeviiii/pokedex",
  },
  {
    title: "Aplicativo de controle financeiro",
    slug: "aplicativo-de-controle-financeiro",
    description: "Aplicativo simples para controle de gastos.",
    img: ControleFinanceiro,
    link: "https://controle-financeiro-weld.vercel.app/",
    github_link: "https://github.com/Cheeviiii/controle-financeiro",
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    description: "Projeto do meu portfolio!",
    img: Portfolio,
    link: "https://cheevi-portfolio.vercel.app",
    github_link: "https://github.com/Cheeviiii/Cheevi-Portfolio",
  },
  {
    title: "Aplicativo de Clima",
    slug: "aplicativo-de-clima",
    description: "Um aplicativo para ver clima do dia.",
    img: WeatherApp,
    link: "",
    github_link: "https://github.com/Cheeviiii/Weather-App",
  },
];

export const SkillsData = [
  {
    title: "Languages",
    skills: [
      {
        title: "Html",
      },
      {
        title: "CSS",
      },
      {
        title: "Javascript",
      },
      {
        title: "Typescript",
      },
      {
        title: "Python",
      },
    ],
  },
  {
    title: "frameworks",
    skills: [
      {
        title: "React",
      },
      {
        title: "Vue",
      },
      {
        title: "Discord.js",
      },
      {
        title: "Express.js",
      },
      {
        title: "TailwindCSS",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        title: "SQLite",
      },
      {
        title: "MongoDB",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        id: 1,
        title: "Prisma",
      },
    ],
  },
];
