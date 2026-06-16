import React, { useContext, useEffect } from 'react'
import './style.css'
import { AppContext } from '../../contexts/contextProvider'

const SelectOption = ({ style, name, color }) => {

  const { setSelectedChairColor, setSelectedCushionColor, selectedChairColor, selectedCushionColor } = useContext(AppContext)

  return (
    <div
      className='select-btn'
      onClick={() => {
        if (style === 'chair') setSelectedChairColor(color)
        else setSelectedCushionColor(color)
      }}
    >
      <div className='select-option' style={{ backgroundColor: `${color}`, borderColor: (style === 'chair' && selectedChairColor === color || style === 'cushion' && selectedCushionColor === color) ? '#ffffff' : '#c2bfbf' }} ></div>
      <div className='lettercolor-option' style={{ color: (style === 'chair' && selectedChairColor === color || style === 'cushion' && selectedCushionColor === color ? 'white' : 'grey') }}>{name}</div>
    </div >
  )
}

export default SelectOption