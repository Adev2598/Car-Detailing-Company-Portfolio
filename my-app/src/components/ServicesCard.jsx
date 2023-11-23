import React from 'react'
import '../styles/ServicesCard.css'

const ServicesCard = () => {
  return (
    <>
            <h1 className='text-gray-800 text-center text-4xl pb-12 font-bold tracking-tight text-gray-800 sm:text-6xl'>Our Services</h1>
    <div className='bg-[#103025] px-56'>
        <div className="wrapper">
           <div className="container">
                <input type="radio" name="slide" id="c1" checked />
                <label htmlFor="c1" className='card'>
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" checked />
                <label htmlFor="c2" className='card'>
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" checked />
                <label htmlFor="c3" className='card'>
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Lorem ipsum </h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" checked />
                <label htmlFor="c4" className='card'>
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </label>
            </div>  
        </div>
    </div>
    </>
  )
}

export default ServicesCard