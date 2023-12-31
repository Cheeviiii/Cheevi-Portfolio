"use client";

import { ProjetoProps } from "@/types";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../Loading";

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
  const [Projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjetos = async () => {
      const response = await fetch("/api/projects", {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      const data = await response.json();
      setProjetos(data);
      setLoading(false);
    };

    getProjetos();
  }, []);

  const ProjetosPostados = Projetos.filter(
    (projetos) => projetos.published === true,
  );
  const ProjetosNaoPostados = Projetos.filter(
    (projetos) => projetos.published === false,
  );

  return (
    <div className="lg:max-w-full xl:max-w-[65%] m-auto flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-around my-5 font-bold">
      <div className="bg-black w-[250px] md:w-[200px] lg:w-[250px] border border-gray-300 rounded-2xl text-center p-5">
        {Loading ? (
          <LoadingSpinner />
        ) : (
          <Status name="Postados" value={ProjetosPostados.length} />
        )}
      </div>
      <div className="bg-black w-[250px] md:w-[200px] lg:w-[250px] border border-gray-300 rounded-2xl text-center p-5">
        {Loading ? (
          <LoadingSpinner />
        ) : (
          <Status name="Não Postados" value={ProjetosNaoPostados.length} />
        )}
      </div>
      <div className="bg-black w-[250px] md:w-[200px]  lg:w-[250px] border border-gray-300 rounded-2xl text-center p-5">
        {Loading ? (
          <LoadingSpinner />
        ) : (
          <Status name="Total de Projetos" value={Projetos.length} />
        )}
      </div>
    </div>
  );
}
