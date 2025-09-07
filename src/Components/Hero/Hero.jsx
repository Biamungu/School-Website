import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to Our University</h1>
            <p>Empowering Minds, Shaping Futures</p>
            <button className='btn'>Get Started <img src={dark_arrow} alt='' /></button>
        </div>
    </div>
  )
}

export default Hero