"use client";

import { useEffect, useState } from "react";
import { CardProject } from ".";
import Link from "next/link";

interface ProjectsProps {
  id: string;
  title: string;
  image: string;
  description: string;
  publised: boolean;
  repository: string;
}

export function Projects() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const projects = await fetch("/api/projects", {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      const data = await projects.json();

      setProjects(data);
      setLoading(false);
    } catch (error: any) {
      console.error("Erro ao buscar projetos na API:", error.message);
    }
  };

  const onDelete = async (id: string) => {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    });

    getProjects();
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="h-screen mx-10 pt-5 w-full m-auto p-auto overflow-y-auto">
      {loading ? (
        "Carregando..."
      ) : (
        <div className="h-full flex flex-col gap-5 overflow-y-auto">
          <Link
            href="projects/create"
            className="sticky w-32 text-center text-white font-medium text-xl p-2 rounded  bg-blue transition-colors hover:bg-blue-dark"
          >
            Criar projeto
          </Link>
          <div className="grid grid-cols-2 2xl:grid-cols-3 gap-5">
            {projects.map((item, index) => (
              <CardProject key={index} item={item} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
