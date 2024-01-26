"use client";

import { ScrollArea } from "../ui/scroll-area";

interface CreateProjectProps {
  closeModal: any;
  children: React.ReactNode;
}

export function ModalCreateProject({ closeModal, children }: CreateProjectProps) {
  return (
    <div className="absolute w-full flex items-center justify-center bg-[#00000069] backdrop-blur-sm inset-0 z-10">
      <div className="duration-500 transition bg-white dark:bg-gray-400 border border-gray-300 p-5 m-auto p-auto rounded-2xl drop-shadow-2xl">
        <button
          className="absolute bg-red-200 text-white my-2 p-2 px-5 text-base uppercase font-bold rounded-xl hover:bg-red-100"
          onClick={closeModal}
        >
          fechar
        </button>
        <ScrollArea className="w-full mt-[100px] rounded-2xl">{children}</ScrollArea>
      </div>
    </div>
  );
}
