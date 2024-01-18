"use client";
import { LoadingSpinner } from "../Loading";
import { useFetchProject } from "@/hooks/useFetchProjects";

interface StatusProps {
  name: string;
  value: number;
}

const Status = ({ name, value }: StatusProps) => {
  return (
    <>
      <h1 className="text-xl lg:text-2xl">{name}</h1>
      <p className="text-4xl">{value}</p>
    </>
  );
};

export function ProjetosStatus() {
  const { Projects, Loading } = useFetchProject();

  const ProjetosPostados = Projects.filter((projetos) => projetos.published === true);
  const ProjetosNaoPostados = Projects.filter((projetos) => projetos.published === false);

  return (
    <div className="lg:max-w-full xl:max-w-[65%] m-auto flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-around my-5 font-bold">
      <div className="bg-white dark:bg-black w-[250px] md:w-[200px] lg:w-[250px] border border-gray-300 rounded-2xl text-center p-5">
        {Loading ? <LoadingSpinner /> : <Status name="Postados" value={ProjetosPostados.length} />}
      </div>
      <div className="bg-white dark:bg-black w-[250px] md:w-[200px] lg:w-[250px] border border-gray-300 rounded-2xl text-center p-5">
        {Loading ? <LoadingSpinner /> : <Status name="Não Postados" value={ProjetosNaoPostados.length} />}
      </div>
      <div className="bg-white dark:bg-black w-[250px] md:w-[200px]  lg:w-[250px] border border-gray-300 rounded-2xl text-center p-5">
        {Loading ? <LoadingSpinner /> : <Status name="Total de Projetos" value={Projects.length} />}
      </div>
    </div>
  );
}
