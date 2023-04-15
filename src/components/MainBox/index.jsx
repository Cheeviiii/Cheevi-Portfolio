import { Link } from "react-scroll";
import MainImage from "../../assets/mainbox.png";
import { LinkedinLogo, GithubLogo } from "phosphor-react";

export function MainBox() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center lg:items-start justify-center">
        <div className="md:w-[600px]">
          <p className=" text-2xl md:text-5xl font-bold text-gray-200 text-center lg:text-start">
            Olá, me chamo <span className="text-blue-500">Diogo</span> sou{" "}
            <span className="text-blue-500">desenvolvedor front-end JR</span>
          </p>
        </div>
        <div className="w-[300px] lg:w-[600px]">
          <p className="text-gray-500 font-bold text-center lg:text-start text-sm md:text-xl">
            estou sempre procurando evoluir e aprender novas tecnologias.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/diogo-souza-alves-77345b220/"
            target="_blank"
            className=" hover:text-blue-500 transition-colors"
          >
            <LinkedinLogo size={42} />
          </a>
          <a
            href="https://github.com/Cheeviiii"
            target="_blank"
            className=" hover:text-blue-500 transition-colors"
          >
            <GithubLogo size={42} />
          </a>
        </div>
        <div className="w-full flex items-center justify-center pt-10">
          <Link
            className="border-2 border-blue-500 px-8 p-2 rounded-lg cursor-pointer transition-colors hover:border-red-500"
            to="contato"
            smooth={true}
            duration={500}
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </div>
  );
}
