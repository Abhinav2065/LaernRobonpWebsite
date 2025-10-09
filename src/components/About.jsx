import React from 'react'
import { Link } from 'react-router-dom'
import "../style/About.css"


const About = () => {
  return (
    <div>
        <div className="about-hero">

            <h2>About Us</h2>
            <p>Learn Robo Nepal is a non-profit, youth-led initiative founded on the belief that Nepal's youth possess immense potential to shape the nation's future. 
                We are a collective of passionate students, engineers, and educators united by a common goal: to bridge the digital divide and foster a culture of scientific 
                curiosity and technological creativity across the country.</p>
        </div>

 <div class="stats-container">
    <h3>Our Impact</h3>
                <div className="impact">

            <div className="stats">
                <div className="stat">
                    <h5>50+</h5>
                    <p>Students Reached</p>
                </div>
                <div className="stat">
                    <h5>2</h5>
                    <p>Workshops conducted</p>
                </div>
                <div className="stat">
                    <h5>1</h5>
                    <p>District Reached</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About