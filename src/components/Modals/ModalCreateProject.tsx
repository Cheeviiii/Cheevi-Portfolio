"use client";

import { FormCreateProject } from "../Form";

interface CreateProjectProps {
  isOpen: boolean;
  closeModal: () => void;
  getProjects: () => void;
}

export function ModalCreateProject({ isOpen, closeModal, getProjects }: CreateProjectProps) {
  return (
    <div className={isOpen ? "absolute w-full bg-[#00000069] backdrop-blur-sm inset-0 z-10" : "hidden"}>
      <div className="bg-gray-400 w-[1000px] h-screen border border-gray-300 p-5 m-auto p-auto rounded-2xl shadow-2xl">
        <button className="bg-red-200 text-white my-2 p-2 px-5 text-base uppercase font-bold rounded-xl hover:bg-red-100" onClick={closeModal}>
          fechar
        </button>
        <div className="w-[80%] h-[90%] mx-[120px] overflow-y-auto">
          <FormCreateProject closeModal={closeModal} getProjects={getProjects} />
        </div>
      </div>
    </div>
  );
}
