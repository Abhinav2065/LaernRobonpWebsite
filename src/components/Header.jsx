import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleSmoothScroll = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're not on home page, navigate to home first then scroll
      e.preventDefault()
      window.location.href = `/${targetId}`
    }
  }

  const handleDonateClick = (e) => {
    e.preventDefault()
    window.open('https://hcb.hackclub.com/donations/start/learn-robo-nepal', '_blank', 'noopener,noreferrer')
  }

  const handleLogoClick = (e) => {
    // If we're already on home page, scroll to top
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav>
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Learn Robo Nepal Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/partner">Partners</Link>
          </li>
          <li> 
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link
              to="/donate" 
              className="cta-button-donate"
              rel="noopener noreferrer"
            >
              Donate Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header