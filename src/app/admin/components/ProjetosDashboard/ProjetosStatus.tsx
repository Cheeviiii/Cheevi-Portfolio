"use client";

import { useEffect, useState } from "react";

interface ProjetosProps {
  id: string;
  title: string;
  image: string;
  description: string;
  published: boolean;
  repository: string;
}

export function ProjetosStatus() {
  const [Projetos, setProjetos] = useState<ProjetosProps[]>([]);

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
    };

    getProjetos();
  }, []);

  const ProjetosPostados = Projetos.filter((projetos) => projetos.published === true);
  const ProjetosNaoPostados = Projetos.filter((projetos) => projetos.published === false);

  return (
    <div className="flex items-center justify-around my-5 gap-3">
      <div className="bg-[#eafce6] w-[250px] rounded-2xl text-center p-5 shadow-xl">
        <h1 className="text-2xl">Postados</h1>
        <p className="text-4xl">{ProjetosPostados.length}</p>
      </div>
      <div className="bg-[#fce6e6] w-[250px] rounded-2xl text-center p-5 shadow-xl">
        <h1 className="text-2xl">Não postados</h1>
        <p className="text-4xl">{ProjetosNaoPostados.length}</p>
      </div>
      <div className="bg-[#e6f2fc] w-[250px] rounded-2xl text-center p-5 shadow-xl">
        <h1 className="text-2xl">Total de Projetos</h1>
        <p className="text-4xl">{Projetos.length}</p>
      </div>
    </div>
  );
}
