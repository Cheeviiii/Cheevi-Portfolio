/* eslint-disable @next/next/no-img-element */
import { ProjetoProps } from "@/types";
import { BsGithub } from "react-icons/bs";

interface Projeto {
  projeto: ProjetoProps;
}

export default function CardProjeto({ projeto }: Projeto) {
  const noRepository = projeto?.repository === "" ? "hidden" : "flex";

  return (
    <div className="relative w-full bg-transparent border border-gray-300 rounded-lg flex flex-col items-center justify-between gap-3">
      <div className="flex items-center flex-col gap-3">
        <img className="w-[650px] h-[240px] sm:h-[150px] lg:w-[658px] lg:h-[250px] xl:h-[200px] rounded-t-lg shadow-lg" src={projeto.image} alt={projeto.title} />
        <div className="w-full flex flex-col gap-2 px-2">
          <h1 className="w-full text-2xl font-bold text-left">{projeto.title}</h1>
          <div className="w-full flex items-start gap-2">
            {projeto.types.slice(0, 4).map((type: string, index: number) => (
              <p className="bg-gray-400 dark:bg-white text-white dark:text-black font-bold p-1 rounded" key={index}>
                {type}
              </p>
            ))}
          </div>
          <p className="text-base font-medium text-gray-300 dark:text-gray-200">{projeto.description}</p>
        </div>
      </div>

      <div className="absolute left-0 px-2 flex gap-2">
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
