import { FormEditProject } from "../Form";
import { Dialog, DialogContent } from "../ui/dialog";

interface EditProjectProps {
  open: boolean;
  currentProjectId: string;
  onOpen: () => void;
  updateProjects: () => void;
}

export function ModalEditProject({ open, onOpen, currentProjectId, updateProjects }: EditProjectProps) {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogContent className="max-w-[80%] bg-white dark:bg-gray-400 border border-gray-300">
        <FormEditProject idProject={currentProjectId} closeModal={onOpen} updateProjects={updateProjects}/>
      </DialogContent>
    </Dialog>
  );
}
