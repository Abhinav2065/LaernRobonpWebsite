import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [fireworks, setFireworks] = useState([])
  const footerRef = useRef(null)
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Our Team', path: '/team' },
    { name: 'Partners', path: '/partner' },
    { name: 'Contact', path: '/contact' }
  ]

  const programs = [
    'Python Programming',
    'Robotics Workshops',
    'Arduino Courses',
    'Web Development',
    'Hackathons'
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/learnrobo.np',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:abhinavsl511@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/learn-robo-nepal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ]

  const launchFirework = (e) => {
    e.preventDefault()
    
    // Scroll to top first
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Wait for scroll to complete, then launch firework
    setTimeout(() => {
      const startX = window.innerWidth - 100 // Right side of screen
      const startY = window.innerHeight - 50 // Bottom of screen
      const targetY = 100 // Top of screen (explosion point)
      
      const firework = {
        id: Date.now(),
        startX,
        startY,
        targetY,
        currentY: startY,
        particles: [],
        exploded: false,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`
      }

      setFireworks(prev => [...prev, firework])

      // Animate the rocket flying up
      const rocketInterval = setInterval(() => {
        setFireworks(prev => 
          prev.map(fw => {
            if (fw.id !== firework.id || fw.exploded) return fw
            
            const newY = fw.currentY - 15 // Move up
            const reachedTop = newY <= fw.targetY
            
            if (reachedTop) {
              clearInterval(rocketInterval)
              return { 
                ...fw, 
                exploded: true, 
                particles: createParticles(fw.startX, fw.targetY, fw.color),
                currentY: fw.targetY
              }
            }
            
            return { ...fw, currentY: newY }
          })
        )
      }, 16) // ~60fps

      // Remove firework after explosion
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== firework.id))
        clearInterval(rocketInterval)
      }, 3000)

    }, 800) // Wait for scroll to complete
  }

  const createParticles = (x, y, color) => {
    const particles = []
    const particleCount = 50 + Math.floor(Math.random() * 30)
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount
      const speed = 2 + Math.random() * 4
      const size = 2 + Math.random() * 5
      const life = 0.8 + Math.random() * 0.4
      
      particles.push({
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: size,
        color: color,
        life: life,
        initialLife: life
      })
    }
    
    return particles
  }

  // Update particles animation
  useEffect(() => {
    const updateParticles = () => {
      setFireworks(prev => 
        prev.map(firework => {
          if (!firework.exploded) return firework
          
          const updatedParticles = firework.particles.map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.08, // gravity
            life: particle.life - 0.015
          })).filter(particle => particle.life > 0)
          
          return {
            ...firework,
            particles: updatedParticles
          }
        })
      )
    }

    const interval = setInterval(updateParticles, 16) // 60fps
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="footer" ref={footerRef}>
      {/* Fireworks Container */}
      <div className="fireworks-container">
        {fireworks.map(firework => (
          <div key={firework.id}>
            {/* Rocket */}
            {!firework.exploded && (
              <div
                className="firework-rocket"
                style={{
                  left: `${firework.startX}px`,
                  bottom: `${firework.currentY}px`,
                  '--rocket-color': firework.color
                }}
              >
                <div className="rocket-tail"></div>
                <div className="rocket-sparkle"></div>
              </div>
            )}
            
            {/* Explosion Particles */}
            {firework.exploded && firework.particles.map(particle => (
              <div
                key={particle.id}
                className="firework-particle"
                style={{
                  left: `${firework.startX + particle.x}px`,
                  bottom: `${firework.targetY + particle.y}px`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  opacity: particle.life,
                  transform: `scale(${particle.life})`,
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Firework Launcher Button */}
      <button className="firework-launcher" onClick={launchFirework} aria-label="Launch firework celebration">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4"></path>
          <path d="M10 6h4"></path>
          <path d="M12 2v4"></path>
          <path d="M18 8l-1 1"></path>
          <path d="M6 8l1 1"></path>
          <path d="M4 22h16"></path>
          <path d="M12 22v-8"></path>
          <path d="M8 22v-2a4 4 0 0 1 8 0v2"></path>
        </svg>
        <span>Go to Top</span>
      </button>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Learn Robo Nepal" />
              <h3>Learn Robo Nepal</h3>
            </div>
            <p className="footer-description">
              Empowering Nepal's youth with free STEM education. Building the next generation 
              of innovators, creators, and problem-solvers through hands-on learning.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              {programs.map((program, index) => (
                <li key={index}>
                  <span>{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:abhinavsl511@gmail.com">abhinavsl511@gmail.com</a>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+9779813127946">+977 9813127946</a>
              </div>
            </div>
          </div>
        </div>

        {/* Donation CTA */}
        <div className="donation-cta">
          <div className="cta-content">
            <h3>Support Our Mission</h3>
            <p>Your donation helps us provide free STEM education to underprivileged youth across Nepal</p>
            <a
              href="/donate/#donation" 
              className="donate-btn"
              rel="noopener noreferrer"
            >
              <span>Donate Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Learn Robo Nepal. All rights reserved. A non-profit initiative for STEM education.</p>
              <p className="tax-info">Donations are tax-deductible. Receipts provided.</p>
            </div>
            
            <div className="partnership">
              <p className="fiscal-sponsor">
                fiscally sponsored by{' '}
                <a href="https://hcb.hackclub.com" target="_blank" rel="noopener noreferrer">
                  The Hack Foundation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer