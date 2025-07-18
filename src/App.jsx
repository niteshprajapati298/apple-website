import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Feature from './components/Feature'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Feature/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Sentry.withProfiler(App);
