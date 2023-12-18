"use client";

import { FormCreateProject } from "../Form";

interface CreateProjectProps {
  isOpen: boolean;
  closeModal: () => void;
  getProjects: () => void;
}

export function ModalCreateProject({ isOpen, closeModal, getProjects }: CreateProjectProps) {
  return (
    <div className={isOpen ? "absolute w-full h-screen overflow-y-auto bg-[#00000069] backdrop-blur-sm inset-0 z-10" : "hidden"}>
      <div className="bg-gray-800 w-[1000px] p-5 m-auto p-auto rounded-2xl shadow-2xl">
        <button className="bg-red text-white my-2 p-2 px-5 text-base uppercase font-bold rounded-xl" onClick={closeModal}>
          fechar
        </button>
        <div className="w-full mx-[120px]">
          <FormCreateProject closeModal={closeModal} getProjects={getProjects} />
        </div>
      </div>
    </div>
  );
}
