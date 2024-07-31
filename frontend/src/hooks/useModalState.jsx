import { useState } from "react";

const useModalState = () => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [itemToAction, setItemToAction] = useState(null);

  const toggleModal = (modalType) => {
    switch (modalType) {
      case "register":
        setRegisterOpen(!isRegisterOpen);
        break;
      case "edit":
        setEditOpen(!isEditOpen);
        break;
      case "delete":
        setDeleteOpen(!isDeleteOpen);
        break;
      default:
        break;
    }
  };

  return {
    isRegisterOpen,
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  };
};

export default useModalState;
