"use client";

import React from "react";
import { ModalCreateProject, ModalViewProject } from "@/components/Modal";
import { TableProjetos } from "./TableProjetos";
import { DeleteDialog } from "@/components/Dialog";
import { useFetchProject } from "@/hooks/useFetchProjects";
import useProjectModals from "@/hooks/useProjectsModal";
import { useFormProject } from "@/context/FormContext";

export function ProjetosDashboard() {
  const { Projects, Loading, updateProjects } = useFetchProject();
  const {
    isDeleteDialogOpen,
    isViewModalOpen,
    currentProjectId,
    handleDelete,
    handleCloseDeleteDialog,
    openViewModal,
    handleCloseViewModal,
  } = useProjectModals();

  const { isOpenProjectFormModal, openFormModal } = useFormProject();

  return (
    <div className="h-screen px-10 pt-5 w-full m-auto p-auto overflow-y-auto">
      {isDeleteDialogOpen && (
        <DeleteDialog closeModal={handleCloseDeleteDialog} id={currentProjectId} updateProjects={updateProjects} />
      )}

      <ModalViewProject open={isViewModalOpen} onOpen={handleCloseViewModal} currentProjectId={currentProjectId} />

      <div className="h-full flex flex-col gap-5">
        <ModalCreateProject open={isOpenProjectFormModal} onOpen={openFormModal} updateProjects={updateProjects}>
          Criar Novo Projeto
        </ModalCreateProject>
        <TableProjetos Projetos={Projects} handleDelete={handleDelete} isViewModal={openViewModal} Loading={Loading}/>
      </div>
    </div>
  );
}
