import { useContext } from "react"
import { AppContext } from "../../contexts/contextProvider"
import './style.css'

const RadioOption = ({ style, name }) => {

  const { selectedMaterial, selectedLegType, setSelectedLegType, setSelectedMaterial } = useContext(AppContext)

  return (
    <div
      onClick={() => {
        if (style === 'material') {
          setSelectedMaterial(name)
        } else {
          setSelectedLegType(name)
        }
      }}
    >
      <div className="RadioOption" style={{ color: (style === 'material' && selectedMaterial === name || style === 'legs' && selectedLegType === name ? 'white' : 'grey') }}>{name}</div>
    </div >
  )
}

export default RadioOption