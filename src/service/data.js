import AnimeDatabaseImg from "../assets/AnimeDatabase.png";
import WeatherApp from '../assets/WeatherApp.png'
import ControleFinanceiro from '../assets/ControleFinanceiro.png'

export const ProjetosMap = [
  {
    id: 1,
    title: "Uma database de animes",
    description: 'Para fazer essa database usei o JikanAPI.',
    slug: "database-de-animes",
    img: AnimeDatabaseImg,
    link: 'https://anime-database-gamma.vercel.app/'
  },
  {
    id: 2,
    title: "Aplicativo simples de previsão do tempo",
    slug: "weather-app",
    img: WeatherApp,
    link: 'https://weather-app-chi-indol.vercel.app/'
  },
  {
    id: 3,
    title: "Aplicativo de controle financeiro",
    slug: "aplicativo-de-controle-financeiro",
    img: ControleFinanceiro,
    link: 'https://controle-financeiro-weld.vercel.app/'
  },
];
