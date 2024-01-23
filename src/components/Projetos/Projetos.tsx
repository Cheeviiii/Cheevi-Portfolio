"use client";

import { ProjetoLoading } from "../Loading";
import { ProjetoProps } from "@/types";
import CardProjeto from "./CardProjeto";
import { useFetchProject } from "@/hooks/useFetchProjects";
import React from "react";
import { Button } from "../ui/button";

export function Projetos() {
  const [numberPage, setNumberPage] = React.useState(8);
  const [Filtro, setFiltro] = React.useState("");

  const { Projects, Loading } = useFetchProject();

  const projetosPublicados = Projects.filter((projetos) => projetos.published === true);
  const projetosFiltrados = projetosPublicados.filter((projeto) => projeto.types.find((type) => type === Filtro));

  const handleFiltro = (name: string) => {
    setFiltro(name);
  };

  const filtroActive = (name: string) => {
    return `${
      Filtro === name
        ? "bg-red-900 hover:bg-red-900 text-white"
        : "bg-[#2b2b2b] hover:bg-[#000] dark:bg-[#252729] text-white"
    }`;
  };

  const Buttons = () => {
    return (
      <>
        {projetosPublicados.length >= numberPage ? (
          <Button onClick={() => setNumberPage(numberPage + 8)} className="mt-10 text-xl">
            Mais projetos
          </Button>
        ) : (
          <Button onClick={() => setNumberPage(numberPage - 8)} className="mt-10 text-xl">
            Menos projetos
          </Button>
        )}
      </>
    );
  };

  return (
    <section className="container m-auto p-auto flex flex-col items-center justify-center pt-10" id="projects">
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
          <div className="flex gap-5 p-5">
            <Button className={`${filtroActive("")}`} onClick={() => handleFiltro("")}>
              Todos
            </Button>
            <Button className={`${filtroActive("React")}`} onClick={() => handleFiltro("React")}>
              React
            </Button>
            <Button className={`${filtroActive("Next")}`} onClick={() => handleFiltro("Next")}>
              Next
            </Button>
            <Button className={`${filtroActive("Vite")}`} onClick={() => handleFiltro("Vite")}>
              Vite
            </Button>
          </div>
          {projetosPublicados.length === 0 ? (
            <h1 className="text-4xl font-bold py-10">Nenhum projeto encontrado</h1>
          ) : (
            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
              {Filtro === "" ? (
                <>
                  {projetosPublicados.slice(0, numberPage).map((item: ProjetoProps, index) => (
                    <CardProjeto key={index} projeto={item} />
                  ))}
                </>
              ) : (
                <>
                  {projetosFiltrados.slice(0, numberPage).map((item: ProjetoProps, index) => (
                    <CardProjeto key={index} projeto={item} />
                  ))}
                </>
              )}
            </div>
          )}

          {Filtro === "" && projetosPublicados.length > 8 ? (
            <Buttons />
          ) : Filtro !== "" && projetosFiltrados.length > 8 ? (
            <Buttons />
          ) : null}
        </>
      )}
    </section>
  );
}
