"use client";

import React from "react";
interface DeleteProps {
  closeModal: () => void;
  updateProjects: () => void;
  id: string;
}

export function DeleteDialog({ id, closeModal, updateProjects }: DeleteProps) {
  const [loadingDelete, setLoadingDelete] = React.useState(false);

  const handleConfirm = async (id: string) => {
    setLoadingDelete(true);
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    });

    setLoadingDelete(false);
    closeModal();
    updateProjects();
  };

  return (
    <div className="absolute w-full h-screen bg-[#00000069] backdrop-blur-sm inset-0 z-10">
      <div className="bg-gray-400 relative border border-gray-300 w-[650px] py-10 m-auto top-5 rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-5 p-10">
          <h1 className="font-bold text-2xl">Realmente deseja deletar esse projeto?</h1>
          <div className="absolute bottom-0 my-4 flex gap-5">
            <button
              className="bg-gray-300 text-white text-xl font-medium p-2 px-5 rounded transition-colors hover:bg-[#832424]"
              onClick={() => handleConfirm(id)}
              disabled={loadingDelete}
            >
              {loadingDelete ? "Deletando..." : "Continuar"}
            </button>
            <button className="bg-blue-300 text-white text-xl font-medium p-2 px-5 rounded transition-colors hover:bg-blue-200" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
