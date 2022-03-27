import {React, createContext, useState } from "react";

export const DataContext = createContext();




const DataProvider = ({children}) => {

  const [contextSkin, setContextSkin] = useState(false)

  return (
    <DataContext.Provider value={{contextSkin, setContextSkin}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider