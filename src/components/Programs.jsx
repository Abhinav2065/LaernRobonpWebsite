import React, { useState, useEffect, useRef } from 'react'

const Programs = () => {
  const [eyePosition, setEyePosition] = useState({ x: 50, y: 50 })
  const eyeRef = useRef(null)
  const programsRef = useRef(null)

  const programs = [
    {
      title: "Microcontroller Workshops",
      description: "Hands-on sessions building and programming robots using microcontrollers to solve real-world problems.",
      image: "/microcontroller.jpg"
    },
    {
      title: "Programming Courses",
      description: "Intro to coding in languages like Python, tailored for beginners to experts.",
      image: "/python.jpg"
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current || !programsRef.current) return
      
      const programsRect = programsRef.current.getBoundingClientRect()
      const eyeRect = eyeRef.current.getBoundingClientRect()
      
      // Calculate relative mouse position within the programs section
      const relativeX = ((e.clientX - programsRect.left) / programsRect.width) * 100
      const relativeY = ((e.clientY - programsRect.top) / programsRect.height) * 100
      
      // Calculate eye center position
      const eyeCenterX = 50 // Left side of the section
      const eyeCenterY = 50 // Middle of the section
      
      // Calculate angle from eye to mouse
      const deltaX = relativeX - eyeCenterX
      const deltaY = relativeY - eyeCenterY
      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 30) // Limit movement
      const angle = Math.atan2(deltaY, deltaX)
      
      // Calculate pupil position (limited to stay within eye)
      const pupilX = Math.cos(angle) * distance
      const pupilY = Math.sin(angle) * distance
      
      setEyePosition({ x: pupilX, y: pupilY })
    }

    const programsSection = programsRef.current
    if (programsSection) {
      programsSection.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (programsSection) {
        programsSection.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section id="programs" className="programs-section" ref={programsRef}>
      <div className="programs-container">
        <div className="programs-content">
          <div className="programs-text">
            {/* Cute Eye */}


            <h2>Our Programs</h2>
            <p className="programs-intro">
              We offer various comprehensive STEM programs designed to equip Nepali youth with 
              cutting-edge technical skills and practical knowledge for the digital age!
            </p>
            <p className="programs-subtext">
              From foundational programming to robotics, our hands-on approach ensures 
              students gain real-world experience that helps them to get involved in STEM.
            </p>

          </div>
                        <div className="cute-eye-container" ref={eyeRef}>
              <div className="cute-eye">
                <div 
                  className="eye-pupil"
                  style={{
                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                  }}
                ></div>
              </div>
              <div className="eye-sparkle"></div>
            </div>
          
          <div className="programs-cards">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                  <div className="program-overlay"></div>
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a href="/courses" className="program-cta">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs