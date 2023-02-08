import React, { createContext, useState } from "react";

export const CheckedContext = createContext();
const CheckedState = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckedContext.Provider value={{ checked, setChecked }}>
      {children}
    </CheckedContext.Provider>
  );
};

export default CheckedState;
