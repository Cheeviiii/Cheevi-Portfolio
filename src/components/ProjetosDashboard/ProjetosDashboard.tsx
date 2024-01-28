"use client";

import React from "react";
import { ModalCreateProject, ModalEditProject, ModalViewProject } from "@/components/Modal";
import { LoadingSpinner } from "@/components/Loading";
import { TableProjetos } from "./TableProjetos";
import { DeleteDialog } from "@/components/Dialog";
import { useFetchProject } from "@/hooks/useFetchProjects";
import useProjectModals from "@/hooks/useProjectsModal";

export function ProjetosDashboard() {
  const { Projects, Loading, updateProjects } = useFetchProject();
  const {
    isDeleteDialogOpen,
    isCreateModalOpen,
    isViewModalOpen,
    currentProjectId,
    handleDelete,
    handleCloseDeleteDialog,
    toggleCreateModal,
    openViewModal,
    handleCloseViewModal,
    openEditModal,
    isEditModalOpen,
    handleCloseEditModal,
  } = useProjectModals();

  return (
    <div className="h-screen px-10 pt-5 w-full m-auto p-auto overflow-y-auto">
      {isDeleteDialogOpen && <DeleteDialog closeModal={handleCloseDeleteDialog} id={currentProjectId} getProjects={updateProjects} />}

      <ModalViewProject open={isViewModalOpen} onOpen={handleCloseViewModal} currentProjectId={currentProjectId} />
      <ModalEditProject open={isEditModalOpen} onOpen={handleCloseEditModal} currentProjectId={currentProjectId} updateProjects={updateProjects} />

      <div className="h-full flex flex-col gap-5">
        {Loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ModalCreateProject open={isCreateModalOpen} onOpen={toggleCreateModal} updateProjects={updateProjects}>
              Criar Novo Projeto
            </ModalCreateProject>
            {Projects.length > 0 ? (
              <TableProjetos Projetos={Projects} handleDelete={handleDelete} isViewModal={openViewModal} isEditModal={openEditModal} />
            ) : (
              <h1 className="text-2xl font-medium">Nenhum projeto encontrado!</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
}
