import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SidebarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
});

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
