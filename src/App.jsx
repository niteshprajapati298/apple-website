import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
    </div>
  )
}

export default App
