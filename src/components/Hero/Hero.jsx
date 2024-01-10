import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png' 
import hero_img from '../Assets/hero_image.png'
const Hero = () => 
{
    
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only!</h2>
        <div>
            <div className="hand-hand-icon">
                <img src={hand_icon} alt="" />
                <p>New</p>
                
            </div>
            <p>Collections</p>
            <p>For EVERYONE!</p>
        </div>
        <div className="hero-latest-btn">
            <div>
                Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero