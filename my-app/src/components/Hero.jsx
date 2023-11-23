import React from 'react'
import FerrariYellow from '../assets/images/ferrari-yellow.png'
// import '../styles/Hero.css'

const Hero = () => {
  return (
    <>   
      
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:px-24'>
        <div className='text-left pt-56 '>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
              Crafting Brilliance<br/>One Car at a Time
            </h1>
        </div>
        <div className='py-72'>
            <img className="" src={FerrariYellow}/>
        </div>
    </div>

    </>
  )
}

export default Hero