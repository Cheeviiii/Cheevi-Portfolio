"use client";

import { useEffect, useState } from "react";
import { ProjetoCard } from "./components/ProjetoCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function ProjetosList() {
  const [projetos, setProjetos] = useState<any>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/projetos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjetos(data);
      });
  }, []);

  return (
    <div className="w-full md:w-[1200px] m-auto mt-5 flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:gap-3">
      {projetos.map((item: any, index: any) => (
        <ProjetoCard
          key={index}
          title={item.title}
          img={item.thumbnail}
          description={item.description}
          github={item.github_link}
        />
      ))}
    </div>
  );
}
