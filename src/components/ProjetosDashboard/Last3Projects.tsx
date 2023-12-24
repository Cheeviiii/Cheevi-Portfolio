/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjetoProps } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Last3Projects() {
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

        if (!response.ok) {
          throw new Error("Erro ao buscar projetos na API");
        }

        const data = await response.json();
        setProjetos(data);
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
          className={`flex items-center gap-5 bg-gray-300 rounded-xl p-5 h-16 shadow-xl cursor-pointer transition-transform duration-200 hover:scale-110 ${
            index === 1 ? "m-3" : ""
          }`}
        >
          <div className="w-full flex items-center justify-between gap-5">
            <img className="w-[40%] h-14 rounded drop-shadow-xl" src={item.image} alt={item.title} />
            <h1 className="text-xl font-bold">{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
