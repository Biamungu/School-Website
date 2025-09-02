import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to Our University</h1>
            <p>Empowering Minds, Shaping Futures</p>
            <button className='btn'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero