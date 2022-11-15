import Pokedex from "../assets/Pokedex.png";
import WeatherApp from "../assets/WeatherApp.png";
import ControleFinanceiro from "../assets/ControleFinanceiro.png";
import Portfolio from "../assets/CheeviPortfolio.png";

export const ProjetosData = [
  {
    id: 1,
    title: "Pokedex",
    description: "Database de pokemons.",
    slug: "database-de-pokemons",
    img: Pokedex,
    link: "https://pokedex-eight-green.vercel.app",
    github_link: "https://github.com/Cheeviiii/pokedex",
  },
  {
    id: 2,
    title: "Aplicativo de controle financeiro",
    slug: "aplicativo-de-controle-financeiro",
    description: "Aplicativo simples para controle de gastos.",
    img: ControleFinanceiro,
    link: "https://controle-financeiro-weld.vercel.app/",
    github_link: "https://github.com/Cheeviiii/controle-financeiro",
  },
  {
    id: 3,
    title: "Portfolio",
    slug: "portfolio",
    description: "Projeto do meu portfolio!",
    img: Portfolio,
    link: "https://cheevi-portfolio.vercel.app",
    github_link: "https://github.com/Cheeviiii/Cheevi-Portfolio",
  },
  {
    id: 4,
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
    id: 1,
    title: "Languages",
    skills: [
      {
        id: 1,
        title: "Html",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "Javascript",
      },
      {
        id: 4,
        title: "Typescript",
      },
      {
        id: 5,
        title: "Python",
      },
    ],
  },
  {
    id: 2,
    title: "frameworks",
    skills: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "Vue",
      },
      {
        id: 3,
        title: "Discord.js",
      },
      {
        id: 4,
        title: "Express.js",
      },
      {
        id: 5,
        title: "TailwindCSS",
      },
    ],
  },
  {
    id: 3,
    title: "Databases",
    skills: [
      {
        id: 1,
        title: "SQLite",
      },
      {
        id: 2,
        title: "MongoDB",
      },
    ],
  },
  {
    id: 4,
    title: "Others",
    skills: [
      {
        id: 1,
        title: "Prisma",
      },
    ],
  },
];
