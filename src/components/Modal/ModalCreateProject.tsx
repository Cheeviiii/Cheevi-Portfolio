"use client";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { FormProject } from "../Form";

interface CreateProjectProps {
  currentProjectId?: string;
  open: boolean;
  onOpen: () => void;
  updateProjects: () => void;
  children: React.ReactNode;
}

export function ModalCreateProject({ open, onOpen, children, updateProjects }: CreateProjectProps) {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogTrigger asChild>
        <Button className="w-[12%] bg-gray-400 text-white dark:bg-white dark:text-black hover:bg-blue-500">{children}</Button>
      </DialogTrigger>

      <DialogContent className="max-w-[80%] bg-white dark:bg-gray-400 border border-gray-300">
        <FormProject closeModal={onOpen} updateProjects={updateProjects} />
      </DialogContent>
    </Dialog>
  );
}
