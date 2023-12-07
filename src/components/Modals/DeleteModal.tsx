"use client";

import { useState } from "react";
import { toast } from "react-toastify";

interface DeleteProps {
  isOpen: boolean;
  closeModal: () => void;
  getProjects: () => void;
  id: string;
}

export function DeleteModal({ isOpen, id, closeModal, getProjects }: DeleteProps) {
  const [confirmText, setConfirmText] = useState("Confirmar");

  const handleConfirm = async (id: string) => {
    setConfirmText("Confirmando...");
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    });
    
    toast.success("Projeto deletado.");
    setConfirmText("Confirmar");
    closeModal();
    getProjects();
  };

  return (
    <div className={isOpen ? "absolute w-full h-screen bg-[#00000069] backdrop-blur-sm inset-0 z-10" : "hidden"}>
      <div className="bg-white w-[650px] p-5 m-auto p-auto rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-5 p-10">
          <h1 className="font-bold text-2xl">Realmente deseja deletar esse projeto?</h1>
          <h1>ID: {id}</h1>
          <div className="flex gap-5">
            <button
              className="bg-[#ff0000] text-white text-xl font-medium p-2 px-5 rounded transition-colors hover:bg-[#832424]"
              onClick={() => handleConfirm(id)}
            >
              {confirmText}
            </button>
            <button className="bg-blue text-white text-xl font-medium p-2 px-5 rounded transition-colors hover:bg-blue-dark" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
