import '../styles/hero.css'

import React from "react";

function Hero () {
  return (
    <div className='container-fluid hero'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6'>
        <div className='hero-text p-lg-5 p-md-3 p-sm-2'>
            <h1 className='display-1 hero-heading'>Don't miss this amazing offer</h1>
            <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aliquam beatae voluptatum nisi commodi doloribus. Sit animi, excepturi nam similique facere placeat reprehenderit delectus molestias repellendus? Quasi autem nesciunt facere?</p>
            
            <div className='btns d-flex gap-2 flex-wrap'>
            <button className="btn-outline">Learn More</button>
            <button className="btn-solid">BUY NOW OR NEVER</button>
            </div>
            
        </div>
      </div>
      <div className='col-12 col-sm-12 col-md-6'>
        <div className='hero-image'>
            <img src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/headphones.png" alt="hero-image" className='w-100 mt-4' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
