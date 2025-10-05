import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Impact = () => {
  const [isHovering, setIsHovering] = useState(false)
  const impactCards = [
    {
      amount: "$50",
      description: "Funds a Python workshop for 20 students"
    },
    {
      amount: "$100",
      description: "Funds a Microcontroller workshop for 30 students"
    },
    {
      amount: "$500",
      description: "Educates 200+ students across various STEM topics",
      highlight: true
    }
  ]

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="impact" className="impact-section">
      <div className="impact-container">
        <div className="impact-content">
          <div className="impact-text">
            <h2>Your Donation Creates Real Change</h2>
            <p>Every contribution directly fuels STEM education for underprivileged youth in Nepal. See how your support translates into tangible impact:</p>
            
            {/* Donate Button with Dropdown */}
            <div 
              className="donate-dropdown-container"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Link
                to="/donate" 
                className="impact-donate-btn"
              >
                Donate Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`dropdown-arrow ${isHovering ? 'rotated' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {isHovering && (
                <div className="donate-dropdown-menu">
                  <div className="dropdown-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    Support Our Mission
                  </div>
                  
                  <a 
                    href="https://hcb.hackclub.com/donations/start/learn-robo-nepal" 
                    className="dropdown-item primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="item-content">
                      <div className="item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                      <div className="item-text">
                        <div className="item-title">Donate via HCB</div>
                        <div className="item-description">Secure, tax-deductible donations through our fiscal sponsor</div>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>

                  <Link
                    to="/donate" 
                    className="dropdown-item secondary"
                  >
                    <div className="item-content">
                      <div className="item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </div>
                      <div className="item-text">
                        <div className="item-title">Learn About Donations</div>
                        <div className="item-description">See impact breakdown and partnership opportunities</div>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="impact-table">
            {impactCards.map((card, index) => (
              <div 
                key={index} 
                className={`impact-card ${card.highlight ? 'highlight' : ''}`}
              >
                <div className="impact-amount">{card.amount}</div>
                <div className="impact-desc">{card.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="course-details-text">
          <p>
            Want to see what students learn in our courses?{' '}
            <Link 
              to="/courses" 
              className="course-details-link"
            >
              View detailed curriculum and course outlines →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Impact