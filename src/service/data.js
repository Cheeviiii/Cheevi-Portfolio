import AnimeDatabaseImg from "../assets/AnimeDatabase.png";
import WeatherApp from '../assets/WeatherApp.png'
import MangaKari from '../assets/MangaKari.png'

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
    title: "Site de Leitura de Mangas (Não Terminado!)",
    slug: "site-de-leitura-de-mangas",
    img: MangaKari,
    link: 'https://mangakari.vercel.app/'
  },
];
