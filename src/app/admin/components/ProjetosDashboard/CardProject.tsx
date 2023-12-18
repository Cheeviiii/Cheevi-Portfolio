/* eslint-disable @next/next/no-img-element */

import { ProjectsProps } from "./Projects";

interface CardProps {
  projeto: ProjectsProps;
  onDelete: (id: string) => void;
}

export function CardProject({ projeto, onDelete }: CardProps) {
  return (
    <div className="w-full bg-gray-800 rounded-xl flex flex-col items-center justify-between p-5 gap-5 shadow-xl">
      <div className="w-full flex flex-col gap-5">
        <img
          className="w-[350px] h-[200px] md:w-full md:h-[200px] rounded"
          src={projeto.image == "" ? "https://i.pinimg.com/564x/b2/94/84/b2948421b6515de63269cd97760ebe10.jpg" : projeto.image}
          alt={projeto.title}
        />
        <h1 className="w-full text-4xl font-bold text-left">{projeto?.title}</h1>

        <div>
          <p className=" text-lg font-medium">{projeto?.description}</p>
        </div>

        <div className="w-full text-lg font-medium text-left flex gap-2">
          Status: {projeto.published ? <p className="text-[#44ff33] font-bold">Publicado</p> : <p className="text-[#ff3333]">Não publicado</p>}
        </div>
      </div>

      <div className="w-full flex gap-2 md:left-0 mt-3">
        {projeto.repository === "" ? (
          <button className="bg-gray opacity-25 mt-2 rounded-xl text-xl cursor-not-allowed text-white px-3 text-center py-2 transition-colors shadow-lg">
            Sem repositório
          </button>
        ) : (
          <a
            href={projeto.repository}
            target="_blank"
            className="bg-gray mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-dark shadow-lg"
          >
            Repositório
          </a>
        )}

        <button
          onClick={() => onDelete(projeto.id)}
          className="bg-[#ff1818] mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-[#571919] shadow-lg"
        >
          Deletar
        </button>

        <a
          href={`/admin/projects/${projeto.id}`}
          className="bg-blue-300 mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-200 shadow-lg"
        >
          Editar
        </a>
      </div>
    </div>
  );
}
