"use client";

import { useEffect, useState } from "react";
import { CardProject } from ".";
import Link from "next/link";
import { DeleteModal, ModalCreateProject } from "../Modals";
import { LoadingSpinner } from "@/components/Loading";

interface ProjectsProps {
  id: string;
  title: string;
  image: string;
  description: string;
  published: boolean;
  repository: string;
}

export function Projects() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [OpenCreateModal, setCreateOpenModal] = useState(false);
  const [idDelete, setIDDelete] = useState("");

  const getProjects = async () => {
    try {
      const response = await fetch("/api/projects", {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar projetos na API");
      }

      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error: any) {
      console.error(error);
    }
  };

  const onDelete = async (id: string) => {
    setIsOpen(!isOpen);
    setIDDelete(id);
    getProjects();
  };

  const OpenModalCreate = () => {
    setCreateOpenModal(!OpenCreateModal);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
    setIDDelete("");
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="h-screen mx-10 pt-5 w-full m-auto p-auto overflow-y-auto">
      <DeleteModal isOpen={isOpen} closeModal={closeModal} id={idDelete} getProjects={getProjects} />
      <ModalCreateProject isOpen={OpenCreateModal} closeModal={OpenModalCreate} getProjects={getProjects}/>

      <div className="h-full flex flex-col gap-5 overflow-y-auto">
        <button
          className="sticky w-32 text-center text-white font-medium text-xl p-2 rounded  bg-blue transition-colors hover:bg-blue-dark"
          onClick={OpenModalCreate}
        >
          Criar projeto
        </button>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {projects.length > 0 ? (
              <div className="grid grid-cols-2 2xl:grid-cols-3 gap-5">
                {projects.map((item, index) => (
                  <CardProject key={index} item={item} onDelete={onDelete} />
                ))}
              </div>
            ) : (
              <h1 className="text-2xl font-medium">Nenhum projeto encontrado!</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
