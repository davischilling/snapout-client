import React, { createContext, ReactNode, useState } from "react";

type MenuProviderProps = {
  children: ReactNode;
};

interface MenuContextData {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
}

export const MenuContext = createContext({} as MenuContextData);

export const MenuProvider = ({children}: MenuProviderProps) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        toggleMenuOpen
      }}>
      {children}
    </MenuContext.Provider>
  );
};