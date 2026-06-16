import React from 'react'
import Scene from './components/Scene'
import Configurator from './components/Configurator'
import ContextProvider from './contexts/contextProvider'

const App = () => {
  return (
    <ContextProvider >
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'cyan', position: 'relative' }}>
        <Scene />
        <Configurator />
      </div>
    </ContextProvider>
  )
}

export default App