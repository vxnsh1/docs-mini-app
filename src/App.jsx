import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  
  return (
    <div className='w-full h-screen bg-black relative'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App