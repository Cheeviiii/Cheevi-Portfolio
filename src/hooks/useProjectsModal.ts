import React from "react";

const useProjectModals = () => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = React.useState(false);
  const [isViewModalOpen, setViewModalOpen] = React.useState(false);
  const [isEditModalOpen, setEditModalOpen] = React.useState(false);
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

  // Function for open edit modal and set id for project
  const openEditModal = async (id: string) => {
    setEditModalOpen(!isEditModalOpen);
    setCurrentProjectId(id);
  };

  // Function for close edit modal and remove id for project
  const handleCloseEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
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
    openEditModal,
    isEditModalOpen,
    handleCloseEditModal
  };
};

export default useProjectModals;
