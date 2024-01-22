import { BsLinkedin } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";
import { Skills } from ".";
import { scrollTo } from "@/lib/scrollTo";

export function About() {
  return (
    <section className="relative w-full h-[50rem] md:h-[60rem] lg:h-[50rem] bg-cover bg-no-repeat flex justify-center mb-[156px]" id="about">
      <div className="relative md:w-2/3 flex flex-col gap-5 md:gap-10 md:flex-row items-center justify-center md:justify-between text-center md:text-left inset-0 z-20">
        <div className="w-full flex flex-col items-center md:items-start">
          <p className="text-3xl xl:text-4xl font-medium tracking-wider text-red-200">Olá, eu sou</p>
          <h1 className="text-7xl font-bold">Diogo</h1>

          <p className="md:w-2/3 text-base lg:text-xl font-medium mt-3">
            Sou um desenvolvedor frontend em busca de aprendizado e aprimoramento, estou constantemente procurando transformar ideias em codigos.
          </p>

          <button
            className="w-[45%] lg:w-[20%] 2xl:w-[15%] text-center py-2 lg:py-3 mt-5 text-lg lg:text-xl 2xl:text-2xl font-bold border-2 border-red-200 text-red-200 transition duration-300 hover:scale-110 rounded-xl"
            onClick={() => scrollTo("projects")}
          >
            Meus Projetos
          </button>
        </div>

        <div className="flex md:flex-col gap-6">
          <a className="duration-300 hover:-translate-x-4" href="https://www.github.com/cheeviz" target="_blank" aria-label="Github">
            <PiGithubLogoFill className="" size={35} />
          </a>
          <a className="duration-300 hover:-translate-x-4" href="https://www.linkedin.com/in/diogo-souza-alves" target="_blank" aria-label="Linkedin">
            <BsLinkedin className="" size={35} />
          </a>
        </div>

        <div className="md:absolute bottom-0 w-full flex flex-col items-center justify-center md:my-10 gap-3">
          <h1 className="text-4xl font-bold uppercase">Skills</h1>
          <Skills />
        </div>
      </div>
    </section>
  );
}
