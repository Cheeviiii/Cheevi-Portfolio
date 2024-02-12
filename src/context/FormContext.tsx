"use client";

import { useFetchCurrentProject, useFetchProjectID } from "@/hooks/useFetchProjects";
import { ProjetoProps } from "@/types";
import React, { createContext, useContext, useState } from "react";

interface FormContextProps {
  isOpenProjectFormModal: boolean;
  isEdit: boolean;
  currentProjectId: string;
  openFormModal: (id?: string, edit?: boolean) => void;
  closeFormModal: () => void;
  Project: ProjetoProps | null;
  LoadingEditing: boolean;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: FormProviderProps) => {
  const [isOpenProjectFormModal, setProjectFormModal] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState("");
  const [Project, setProject] = useState<ProjetoProps | null>(null);
  const [LoadingEditing, setLoadingEditing] = useState(false);

  const { FetchData } = useFetchCurrentProject();

  const openFormModal = async (id?: string, edit?: boolean) => {
    setProjectFormModal(!isOpenProjectFormModal);

    if (edit) {
      setEdit(true);
      setCurrentProjectId(id as string);
      setLoadingEditing(true);

      try {
        const data: ProjetoProps = await FetchData(id as string);
        setProject(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      } finally {
        setLoadingEditing(false);
      }
    } else {
      setEdit(false);
      setCurrentProjectId("");
      setProject(null);
    }
  };

  const closeFormModal = () => {
    setProjectFormModal(!isOpenProjectFormModal);

    if (isEdit) {
      setEdit(false);
      setCurrentProjectId("");
    }
  };

  const contextValues: FormContextProps = {
    isOpenProjectFormModal,
    isEdit,
    currentProjectId,
    openFormModal,
    closeFormModal,
    Project,
    LoadingEditing,
  };

  return <FormContext.Provider value={contextValues}>{children}</FormContext.Provider>;
};

export const useFormProject = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormProject must be used within a FormProvider");
  }

  return context;
};
