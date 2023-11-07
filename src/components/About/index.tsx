"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Foto from "../../../public/images/Rectangle 4.svg";

interface SkillsProps {
  [key: string]: string[];
}

const SkillsData: SkillsProps = {
  Web: ["HTML", "CSS", "Javascript"],
  Linguagens: ["Javascript", "Typescript"],
  Frameworks: ["React", "Next.js", "Prisma"],
  Banco_de_dados: ["PostgreSQL", "MongoDB"],
};

export default function About() {
  const [selected, setSelected] = useState<string | null>("Web");

  const handleCategoryChange = (category: string) => {
    setSelected(category);
  };

  return (
    <section
      className="container h-[650px] m-auto p-auto flex flex-col items-center justify-center my-[156px]"
      id="about"
    >
      <div className="w-full flex items-center pl-5 md:pl-[120px] gap-[15px] md:gap-[5px]">
        <h1 className="text-2xl uppercase font-bold ">Sobre</h1>
        <div className="w-[180px] md:w-[522px] h-[2px] bg-blue" />
      </div>

      <div className="w-full flex text-left pl-3 md:pl-[120px] mt-5">
        <div className="w-[32rem] flex flex-col gap-5">
          <p className="text-gray font-bold text-xl">
            Sou desenvolvedor web em busca de constante de aprimoramento e aprendizado, estou constantemente procurando
            a melhorar minhas habilidades
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                className={`px-5 py-1 text-white rounded transition-colors ${
                  selected === "Web" ? "bg-blue" : "bg-gray"
                }`}
                onClick={() => handleCategoryChange("Web")}
              >
                Web
              </button>
              <button
                className={`px-5 py-1 text-white rounded ${selected === "Linguagens" ? "bg-blue" : "bg-gray"}`}
                onClick={() => handleCategoryChange("Linguagens")}
              >
                Linguagens
              </button>
              <button
                className={`px-5 py-1 text-white rounded ${selected === "Banco_de_dados" ? "bg-blue" : "bg-gray"}`}
                onClick={() => handleCategoryChange("Banco_de_dados")}
              >
                Databases
              </button>
            </div>

            {selected && (
              <div className="mt-3">
                <ul>
                  {SkillsData[selected].map((skill: any, index: any) => (
                    <li className="text-xl font-medium text-gray" key={index}>
                      - {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <Image className="hidden md:block" width={320} src={Foto} alt="test" />
      </div>
    </section>
  );
}
