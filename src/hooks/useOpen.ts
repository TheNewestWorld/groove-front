import { useState } from "react";

const useOpen = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, onOpen, onClose, onToggle };
};

export default useOpen;
