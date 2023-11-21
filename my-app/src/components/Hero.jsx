import React from 'react'
import FerrariYellow from '../assets/images/ferrari-yellow.png'
// import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 mt-[200px] w-full'>
        <div className='pl-24'>
            <h1>Super Luxury</h1>
        </div>
        <div className='pl-24'>
            <img src={FerrariYellow}/>
        </div>
    </div>
  )
}

export default Hero