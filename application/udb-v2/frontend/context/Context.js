import React, { createContext, useContext, useState } from 'react'

export const CreateContext = createContext()

export const useAppContext = () => useContext(CreateContext)

const Context = ({ children }) => {
  const [showItem, setShowItem] = useState(true)
  const [activeMobileMenu, setActiveMobileMenu] = useState(true)

  return (
    <CreateContext.Provider
      value={{
        showItem,
        setShowItem,
        activeMobileMenu,
        setActiveMobileMenu,
      }}
    >
      {children}
    </CreateContext.Provider>
  )
}

export default Context
