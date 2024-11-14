import { createContext, ReactNode, useContext, useState } from 'react'

interface ScammerData {
  id: string
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
  images: string[]
  createdAt: string
}

interface ScammerDetail extends ScammerData {
  indexNumber: number
}

interface ScammerContextType {
  searchResults: ScammerDetail[]
  setSearchResults: (data: ScammerDetail[]) => void
  isHome: boolean
  setIsHome: (data: boolean) => void
}

const ScammerContext = createContext<ScammerContextType | undefined>(undefined)

export const ScammerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<ScammerDetail[]>([])
  const [isHome, setIsHome] = useState(false)

  const value = {
    searchResults,
    setSearchResults,
    isHome,
    setIsHome
  }

  return <ScammerContext.Provider value={value}>{children}</ScammerContext.Provider>
}

export const useScammerContext = () => {
  const context = useContext(ScammerContext)
  if (context === undefined) {
    throw new Error('useScammerContext must be used within a ScammerProvider')
  }
  return context
}
