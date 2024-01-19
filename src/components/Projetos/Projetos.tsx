"use client";

import { ProjetoLoading } from "../Loading";
import { ProjetoProps } from "@/types";
import CardProjeto from "./CardProjeto";
import { useFetchProject } from "@/hooks/useFetchProjects";

export function Projetos() {
  const { Projects, Loading } = useFetchProject();
  const projetosPublicados = Projects.filter((projetos) => projetos.published === true);

  return (
    <section className="container m-auto p-auto flex flex-col items-center justify-center py-[156px]" id="projects">
      <div className="w-full flex items-center pl-5 gap-[15px] md:gap-[5px]">
        <h1 className="text-3xl uppercase font-bold ">Projetos</h1>
        <div className="w-[180px] md:w-[522px] h-[2px] bg-red-100" />
      </div>

      {Loading ? (
        <div className="grid grid-rows-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
          {Array.from({ length: 8 }, (_, index) => (
            <ProjetoLoading key={index} />
          ))}
        </div>
      ) : (
        <>
          {projetosPublicados.length === 0 ? (
            <h1 className="text-4xl font-bold py-10">Nenhum projeto encontrado</h1>
          ) : (
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
              {projetosPublicados.slice(0, 8).map((item: ProjetoProps, index) => (
                <CardProjeto key={index} projeto={item} />
              ))}
            </div>
          )}

          <a
            href="https://github.com/cheeviz?tab=repositories"
            target="_blank"
            className="text-3xl font-bold text-white bg-red-200 p-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-100 mt-10"
          >
            Todos Projetos
          </a>
        </>
      )}
    </section>
  );
}
