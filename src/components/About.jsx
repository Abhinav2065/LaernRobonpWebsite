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
        <div class="stats-wrapper">
            <div class="stats-background"></div>
            <div class="container">
                <div class="stats-inner">
                    <dl class="stats-grid">
                        <div class="stat-item">
                            <dt class="stat-label">
                                Students Served
                            </dt>
                            <dd class="stat-number">50+</dd>
                        </div>
                        <div class="stat-item">
                            <dt class="stat-label">
                                Workshops
                            </dt>
                            <dd class="stat-number">2</dd>
                        </div>
                        
                        <div class="stat-item">
                            <dt class="stat-label">
                                Districts
                            </dt>
                            <dd class="stat-number">1</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About