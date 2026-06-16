import React from 'react'
import './style.css'
import { chairColors, cushionColors, leglist, materiallist } from '../../utils'
import SelectOption from '../SelectOption'
import RadioOption from '../RadioOption'

const Configurator = () => {
  return (
    <div className='mainWrapper'>
      <div className='title'>chair material</div>
      <div className='radio-section'>
        {materiallist.map((element, key) => (
          <RadioOption key={key} style={'material'} name={element.name} />
        ))}
      </div>
      <div className='title'>chair color</div>
      <div className='select-wrapper'>
        {chairColors.map((element, key) => (
          <SelectOption key={key} style={'chair'} name={element.name} color={element.color} />
        ))}
      </div>
      <div className='title'>cushion color</div>
      <div className='select-wrapper'>
        {cushionColors.map((element, key) => (
          <SelectOption key={key} style={'cushion'} name={element.name} color={element.color} />
        ))}
      </div>
      <div className='title'>legs</div>
      <div className='radio-section'>
        {leglist.map((element, key) => (
          <RadioOption key={key} style={'legs'} name={element.name} />
        ))}
      </div>
    </div>
  )
}

export default Configurator