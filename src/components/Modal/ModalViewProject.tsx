"use client";

import { Dialog, DialogContent } from "../ui/dialog";
import { CardProject } from "../ProjetosDashboard";

interface CreateProjectProps {
  open: boolean;
  currentProjectId: string;
  onOpen: () => void;
}

export function ModalViewProject({ open, onOpen, currentProjectId }: CreateProjectProps) {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogContent className="max-w-[50%] bg-white dark:bg-gray-400 border border-gray-300">
        <CardProject id={currentProjectId} />
      </DialogContent>
    </Dialog>
  );
}
