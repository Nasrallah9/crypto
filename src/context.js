import React, { useState, useContext, Children } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [currency, setCurrency] = useState({
    value: "usd",
    label: "US Dollar",
  });

  const [page, setPage] = useState(1);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
        currency,
        setCurrency,
        setPage,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
