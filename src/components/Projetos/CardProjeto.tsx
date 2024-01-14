/* eslint-disable @next/next/no-img-element */
import { ProjetoProps } from "@/types";
import { BsGithub } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";

interface Projeto {
  projeto: ProjetoProps;
}

export default function CardProjeto({ projeto }: Projeto) {
  const noRepository = projeto?.repository === "" ? "hidden" : "flex";

  return (
    <div className="relative w-full bg-[#e9e9e9] dark:bg-[#17181a] rounded-xl flex flex-col items-center justify-between p-5 gap-3 shadow-xl">
      <div className="flex items-center flex-col gap-3">
        <img
          className="w-[350px] h-[200px] md:w-[658px] md:h-[200px] rounded-xl shadow-lg border border-gray-300"
          src={projeto.image}
          alt={projeto.title}
        />
        <h1 className="w-full text-4xl font-bold text-left">{projeto.title}</h1>
        <div className="w-full flex items-start gap-2">
          {projeto.types.map((type, index) => (
            <p
              className="bg-red-200 text-white font-bold p-1 rounded"
              key={index}
            >
              {type}
            </p>
          ))}
        </div>
        <p className="text-base font-medium">{projeto.description}</p>
      </div>

      <div className="absolute left-5 md:left-6 flex gap-2">
        <a
          href={projeto.repository}
          target="_blank"
          className={`${noRepository} items-center gap-2  bg-gray-300 mt-2 rounded-xl text-base cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-red-200 shadow-lg`}
        >
          <BsGithub size={24} /> Repositório
        </a>

        {/* <a
          href="#"
          className={`${noRepository} items-center gap-2  bg-gray-300 mt-2 rounded-xl text-base cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-red-200 shadow-lg`}
        >
          <FaPaperclip size={24} /> Demo
        </a> */}
      </div>
    </div>
  );
}
