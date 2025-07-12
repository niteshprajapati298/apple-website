import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
    </div>
  )
}

export default App
