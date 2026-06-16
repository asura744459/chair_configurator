import { createContext, useState } from "react";

const initialValue = {
  selectedMaterial: 'Leather',
  selectedChairColor: '#683434',
  selectedCushionColor: '#683434',
  selectedLegType: 'Design',
}

export const AppContext = createContext(initialValue)

export default function ContextProvider({ children }) {

  const [selectedMaterial, setSelectedMaterial] = useState(initialValue.selectedMaterial);
  const [selectedCushionColor, setSelectedCushionColor] = useState(initialValue.selectedCushionColor);
  const [selectedChairColor, setSelectedChairColor] = useState(initialValue.selectedChairColor);
  const [selectedLegType, setSelectedLegType] = useState(initialValue.selectedLegType);
  return (
    <AppContext.Provider
      value={{
        selectedMaterial,
        selectedChairColor,
        selectedCushionColor,
        selectedLegType,
        setSelectedMaterial,
        setSelectedChairColor,
        setSelectedCushionColor,
        setSelectedLegType,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}