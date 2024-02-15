"use client";

import { BsLinkedin } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";
import { Skills } from ".";
import { scrollTo } from "@/lib/scrollTo";
import { Button } from "../ui/button";

export function About() {
  return (
    <section
      className="relative w-full h-[50rem] md:h-[60rem] lg:h-[59rem] bg-cover bg-no-repeat flex justify-center"
      id="about"
    >
      <div className="relative md:w-2/3 flex flex-col gap-5 md:gap-10 md:flex-row items-center justify-center md:justify-between text-center md:text-left inset-0 z-20 md:pb-[250px]">
        <div className="w-full flex flex-col items-center md:items-start p-2">
          <h1 className="text-3xl md:text-7xl font-bold">Desenvolvedor Front-End</h1>

          <p className="max-w-2xl text-lg lg:text-xl font-medium mt-3 text-gray-300 dark:text-gray-200">
            Sou um desenvolvedor frontend em busca de aprendizado e aprimoramento, estou constantemente procurando
            transformar ideias em codigos.
          </p>

          <Button
            className="mt-3 bg-gray-400 dark:bg-white dark:text-black text-base text-white transition-transform hover:scale-110"
            onClick={() => scrollTo("projects")}
          >
            Meus Projetos
          </Button>
        </div>

        <div className="flex md:flex-col gap-6">
          <a
            className="duration-300 hover:-translate-x-4"
            href="https://www.github.com/cheeviz"
            target="_blank"
            aria-label="Github"
          >
            <PiGithubLogoFill className="" size={35} />
          </a>
          <a
            className="duration-300 hover:-translate-x-4"
            href="https://www.linkedin.com/in/diogo-souza-alves"
            target="_blank"
            aria-label="Linkedin"
          >
            <BsLinkedin className="" size={35} />
          </a>
        </div>

        <div className="md:absolute bottom-0 w-full flex flex-col items-center justify-center md:my-[150px] gap-3">
          <h1 className="text-2xl md:text-3xl font-bold uppercase">Habilidades</h1>
          <Skills />
        </div>
      </div>
    </section>
  );
}
