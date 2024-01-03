/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjetoProps } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function ProjetosRecentes() {
  const [Projetos, setProjetos] = useState<ProjetoProps[]>([]);

  useEffect(() => {
    const getLastProjects = async () => {
      try {
        const response = await fetch("/api/projects/recents", {
          method: "GET",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProjetos(data);
        } else {
          throw new Error("Erro ao buscar projetos na API");
        }
      } catch (error: any) {
        console.error(error);
        toast.error(error.message);
      }
    };

    getLastProjects();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {Projetos.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-5 bg-transparent border border-gray-300 rounded-xl p-5 h-16 shadow-xl cursor-pointer transition-transform duration-200 hover:scale-110 ${
            index === 1 ? "m-3" : ""
          }`}
        >
          <div className="w-full flex items-center justify-between gap-5">
            <img className="w-[100px] h-14 rounded drop-shadow-xl" src={item.image} alt={item.title} />
            <h1 className="text-base font-bold">{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
