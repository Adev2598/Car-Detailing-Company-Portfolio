import React from 'react'
import { NavBar, Hero, ServicesCard, Footer } from './components'

const App = () => {
  return (
   <React.Fragment>
    <div className='h-80'>
      <NavBar/>
      <Hero/>
      <ServicesCard/>
      <Footer/>
    </div>
   </React.Fragment>
  )
}

export default App