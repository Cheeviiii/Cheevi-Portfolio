import React from "react";

const useProjectModals = () => {
  const [OpenDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [CreateModal, setCreateModal] = React.useState(false);
  const [ViewModal, setViewModal] = React.useState(false);
  const [idProject, setIDProject] = React.useState("");

  const onDelete = async (id: string) => {
    setOpenDeleteDialog(!OpenDeleteDialog);
    setIDProject(id);
  };

  const DeleteDialogClose = () => {
    setOpenDeleteDialog(!OpenDeleteDialog);
    setIDProject("");
  };

  const OpenAndCloseCreateModal = () => {
    setCreateModal(!CreateModal);
  };

  const OpenViewModal = (id: string) => {
    setViewModal(!ViewModal);
    setIDProject(id);
  };

  const ViewModalClose = () => {
    setViewModal(!ViewModal);
    setIDProject("");
  };

  return {
    OpenDeleteDialog,
    CreateModal,
    ViewModal,
    idProject,
    onDelete,
    DeleteDialogClose,
    OpenAndCloseCreateModal,
    OpenViewModal,
    ViewModalClose,
  };
};

export default useProjectModals;
