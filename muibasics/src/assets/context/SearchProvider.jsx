import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  return (
    <SearchContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
