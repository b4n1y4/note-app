import React from "react";
import { useState, useContext } from "react";

import data from "./data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [notes, setNotes] = useState(data.notes);
  console.log(notes);

  return (
    <AppContext.Provider value={{ notes, setNotes }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
