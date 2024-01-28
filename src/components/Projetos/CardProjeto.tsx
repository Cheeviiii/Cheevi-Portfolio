/* eslint-disable @next/next/no-img-element */
import { ProjetoProps } from "@/types";
import { BsGithub } from "react-icons/bs";

interface Projeto {
  projeto: ProjetoProps;
}

export default function CardProjeto({ projeto }: Projeto) {
  const noRepository = projeto?.repository === "" ? "hidden" : "flex";

  return (
    <div className="relative w-full bg-[#e9e9e9] dark:bg-[#141414] rounded-xl flex flex-col items-center justify-between p-5 gap-3 shadow-xl">
      <div className="flex items-center flex-col gap-3">
        <img
          className="w-[650px] h-[240px] sm:h-[150px] lg:w-[658px] lg:h-[250px] xl:h-[200px] rounded-xl shadow-lg border border-gray-300"
          src={projeto.image}
          alt={projeto.title}
        />
        <h1 className="w-full text-4xl font-bold text-left">{projeto.title}</h1>
        <div className="w-full flex items-start gap-2">
          {projeto.types.slice(0, 4).map((type: string, index: number) => (
            <p className="bg-blue-600 text-white font-bold p-1 rounded" key={index}>
              {type}
            </p>
          ))}
        </div>
        <p className="text-sm lg:text-base font-medium">{projeto.description}</p>
      </div>

      <div className="absolute left-5 md:left-6 flex gap-2">
        <a
          href={projeto.repository}
          target="_blank"
          className={`${noRepository} items-center gap-2  bg-gray-300 mt-2 rounded-xl text-base cursor-pointer text-white px-3 text-center py-2 transition duration-200 hover:bg-blue-600 shadow-lg`}
        >
          <BsGithub size={24} /> Repositório
        </a>
      </div>
    </div>
  );
}
