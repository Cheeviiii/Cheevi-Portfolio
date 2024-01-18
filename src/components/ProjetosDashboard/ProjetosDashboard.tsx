"use client";

import React from "react";
import { ModalCreateProject, ModalViewProject } from "@/components/Modal";
import { LoadingSpinner } from "@/components/Loading";
import { TableProjetos } from "./TableProjetos";
import { DeleteDialog } from "@/components/Dialog";
import { FormCreateProject } from "@/components/Form";
import { CardProject } from ".";
import { useFetchProject } from "@/hooks/useFetchProjects";
import useProjectModals from "@/hooks/useProjectsModal";

export function ProjetosDashboard() {
  const { Projects, Loading, updateProjects } = useFetchProject();
  const { OpenDeleteDialog, CreateModal, ViewModal, idProject, onDelete, DeleteDialogClose, OpenAndCloseCreateModal, OpenViewModal, ViewModalClose } = useProjectModals();

  return (
    <div className="h-screen px-10 pt-5 w-full m-auto p-auto overflow-y-auto">
      <DeleteDialog isOpen={OpenDeleteDialog} closeModal={DeleteDialogClose} id={idProject} getProjects={updateProjects} />

      <ModalCreateProject isOpen={CreateModal} closeModal={OpenAndCloseCreateModal}>
        <FormCreateProject closeModal={OpenAndCloseCreateModal} getProjects={updateProjects} />
      </ModalCreateProject>

      <ModalViewProject isOpen={ViewModal} closeModal={ViewModalClose}>
        <CardProject id={idProject} />
      </ModalViewProject>

      <div className="h-full flex flex-col gap-5 overflow-y-auto">
        <button className="sticky w-32 text-center text-white font-medium text-xl p-2 rounded  bg-red-900 transition-colors hover:bg-red-500" onClick={OpenAndCloseCreateModal}>
          Criar projeto
        </button>
        {Loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {Projects.length > 0 ? (
              <TableProjetos Projetos={Projects} onDelete={onDelete} viewModal={OpenViewModal} />
            ) : (
              <h1 className="text-2xl font-medium">Nenhum projeto encontrado!</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
