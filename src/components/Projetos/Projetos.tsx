"use client";

/* import { ProjetosProps } from "@/Utils/getProjetos"; */
import Image from "next/image";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../Loading";

type ProjetosType = {
  projetos: ProjetosProps[];
};

interface ProjetosProps {
  title: string;
  description: string;
  image: string;
  published: boolean;
  repository: string;
}

export function Projetos() {
  const [projetos, setProjetos] = useState<ProjetosProps[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);

  const getProjects = async () => {
    try {
      const response = await fetch("/api/projects", {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProjetos(data);
        setLoading(false);
      } else {
        console.log(response);
      }
    } catch (error) {}
  };

  const projetosPublicados = projetos.filter((projetos) => projetos.published === true);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="container m-auto p-auto flex flex-col items-center justify-center py-[156px]" id="projects">
      <div className="w-full flex items-center pl-5 gap-[15px] md:gap-[5px]">
        <h1 className="text-2xl uppercase font-bold ">Projetos</h1>
        <div className="w-[180px] md:w-[522px] h-[2px] bg-blue" />
      </div>

      {Loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 mt-5">
            {projetosPublicados.slice(0, 4).map((item: ProjetosProps, index) => (
              <div key={index} className="bg-[#f1f1f1] rounded-xl flex flex-col items-center p-5 gap-3 shadow-xl">
                <Image
                  className="w-[350px] h-[200px] md:w-[658px] md:h-[340px] rounded"
                  width={658}
                  height={340}
                  src={item.image}
                  alt={item.title}
                />
                <h1 className="w-full text-4xl font-bold text-left">{item.title}</h1>
                <p className=" text-lg font-medium">{item.description}</p>

                <div className="w-full md:left-0 mt-3">
                  <a
                    href={item.repository}
                    target="_blank"
                    className="bg-gray mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-dark shadow-lg"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/cheeviz?tab=repositories"
            target="_blank"
            className="text-3xl font-bold text-white bg-gray p-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-blue mt-10"
          >
            Todos Projetos
          </a>
        </>
      )}
    </section>
  );
}
