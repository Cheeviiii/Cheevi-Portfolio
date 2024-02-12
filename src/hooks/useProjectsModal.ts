import { useState } from "react";

const useProjectModals = () => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState("");

  // Function for open delete dialog and set id for project
  const handleDelete = async (id: string) => {
    setDeleteDialogOpen(!isDeleteDialogOpen);
    setCurrentProjectId(id);
  };

  // Function for close delete dialog and remove id for project
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(!isDeleteDialogOpen);
    setCurrentProjectId("");
  };

  // Function for open view project modal and set id for project
  const openViewModal = (id: string) => {
    setViewModalOpen(!isViewModalOpen);
    setCurrentProjectId(id);
  };

  // Function for close view modal and remove id for project
  const handleCloseViewModal = () => {
    setViewModalOpen(!isViewModalOpen);
    setCurrentProjectId("");
  };
  

  return {
    isDeleteDialogOpen,
    isViewModalOpen,
    currentProjectId,
    handleDelete,
    handleCloseDeleteDialog,
    openViewModal,
    handleCloseViewModal,
  };
};

export default useProjectModals;
