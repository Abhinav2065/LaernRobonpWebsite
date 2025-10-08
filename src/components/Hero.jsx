import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../style/Hero.css"


const Hero = () => {
  return (
    <div>
        <div className="hero">
          <h1>Empowering Nepal's Future Innovators</h1>
          <p>Learn Robo Nepal is an non profit initiative providing free STEM education in Nepal!</p>
          <div className='more'><Link to="/about">Learn More</Link></div>
        </div>
    </div>
  )
}

export default Hero