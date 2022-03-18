import { createContext, useState } from 'react'

export const CDSContext = createContext()

export function AppProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)

  const openSidebar = async () => {
    setShowSidebar(!showSidebar)
  }

  return <CDSContext.Provider value={{ openSidebar, showSidebar }}>{children}</CDSContext.Provider>
}
