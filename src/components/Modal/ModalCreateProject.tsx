"use client";

import { ScrollArea } from "../ui/scroll-area";

interface CreateProjectProps {
  isOpen: boolean;
  closeModal: any;
  children: React.ReactNode;
}

export function ModalCreateProject({
  isOpen,
  closeModal,
  children,
}: CreateProjectProps) {
  return (
    <div
      className={
        isOpen
          ? "absolute w-full flex items-center justify-center bg-[#00000069] backdrop-blur-sm inset-0 z-10"
          : "hidden"
      }
    >
      <div className="bg-white dark:bg-gray-400 w-[50%] h-[90%] border border-gray-300 p-5 m-auto p-auto rounded-2xl drop-shadow-2xl">
        <button
          className="bg-red-200 text-white my-2 p-2 px-5 text-base uppercase font-bold rounded-xl hover:bg-red-100"
          onClick={closeModal}
        >
          fechar
        </button>
        <ScrollArea className="w-[80%] h-[90%] mx-[100px] rounded-2xl">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
