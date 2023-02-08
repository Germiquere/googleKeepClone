import { createContext, useContext, useState } from "react";

export const NavListContext = createContext();

const NavListProvider = ({ children }) => {
  const [navListt, setNavList] = useState(1);

  return (
    <NavListContext.Provider
      value={{
        navListt,
        setNavList,
      }}
    >
      {children}
    </NavListContext.Provider>
  );
};
export default NavListProvider;
