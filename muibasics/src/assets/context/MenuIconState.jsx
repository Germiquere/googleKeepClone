import React, { createContext, useState } from "react";

export const MenuIconContext = createContext();

const MenuIconState = ({ children }) => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <MenuIconContext.Provider value={{ menuIcon, setMenuIcon }}>
      {children}
    </MenuIconContext.Provider>
  );
};

export default MenuIconState;
