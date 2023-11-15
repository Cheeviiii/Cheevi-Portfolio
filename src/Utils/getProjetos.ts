import Gerador_de_senha from "../../public/images/Gerador_de_senha.png";
import Weather_app from "../../public/images/Weather_app.png";
import Lista_de_tarefa from "../../public/images/Lista_de_tarefa.png";
import PortfolioImg from "../../public/images/Portfolio.png";
import { StaticImageData } from "next/image";

export type ProjetosProps = {
  name: string;
  description: string;
  project_img: StaticImageData;
  tags: string[];
  repository: string;
};
export const getProjetos = [
  {
    name: "Portfolio pessoal",
    description:
      "Meu portfólio pessoal de desenvolvedor front-end destaca minha paixão por criar experiências web envolventes, equilibrando habilidades técnicas com uma estética refinada.",
    project_img: PortfolioImg,
    tags: ["NextJS", "TailwindCSS", "Typescript"],
    repository: "https://github.com/Cheeviiii/Portfolio",
  },
  {
    name: "Gerador de senha",
    description:
      "Meu aplicativo de gerador de senhas proporciona uma maneira fácil e segura de criar senhas robustas. Com uma interface intuitiva, os usuários podem personalizar a composição das senhas, garantindo segurança sem complicações.",
    project_img: Gerador_de_senha,
    tags: ["NextJS", "CSS", "Typescript"],
    repository: "https://github.com/Cheeviiii/password-generator",
  },
  {
    name: "Lista de Tarefas",
    description:
      "Meu aplicativo de lista de tarefas simplifica sua rotina diária, permitindo adicionar, concluir e remover tarefas de forma direta e eficiente, proporcionando uma experiência descomplicada de gerenciamento de afazeres.",
    project_img: Lista_de_tarefa,
    tags: ["NextJS", "TailwindCSS", "Typescript"],
    repository: "https://github.com/Cheeviiii/lista-de-tarefas",
  },
  {
    name: "Aplicativo de clima",
    description:
      "Meu aplicativo de clima utiliza a API do Weather para fornecer informações precisas e em tempo real sobre as condições meteorológicas. Com uma interface intuitiva, os usuários podem acessar facilmente previsões detalhadas, incluindo temperatura, umidade e condições climáticas, garantindo uma experiência confiável e atualizada sobre o tempo.",
    project_img: Weather_app,
    tags: ["React", "TailwindCSS", "Javascript"],
    repository: "https://github.com/Cheeviiii/Weather-App",
  },
] as ProjetosProps[];
