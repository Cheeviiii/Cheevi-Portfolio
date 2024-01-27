import React from "react";

const useProjectModals = () => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = React.useState(false);
  const [isViewModalOpen, setViewModalOpen] = React.useState(false);
  const [currentProjectId, setCurrentProjectId] = React.useState("");

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

  // Function for open and close modal to the create new project
  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
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
    isCreateModalOpen,
    isViewModalOpen,
    currentProjectId,
    handleDelete,
    handleCloseDeleteDialog,
    toggleCreateModal,
    openViewModal,
    handleCloseViewModal,
  };
};

export default useProjectModals;
