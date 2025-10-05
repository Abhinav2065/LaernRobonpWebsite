import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CorporatePartnerships = () => {
  const [activeTier, setActiveTier] = useState('strategic')

  const partnershipTiers = [
    {
      id: 'strategic',
      name: 'Strategic Partner',
      investment: 'Monthly $1,000+',
      description: 'Deep, long-term partnership with maximum impact and visibility',
      benefits: [
        'Featured as premier partner across all platforms and events',
        'Executive-level engagement opportunities',
        'Annual impact report with ROI analysis',
        'Speaking opportunities at major events'
      ],
      idealFor: 'Large corporations, tech companies, foundations'
    },
    {
      id: 'impact',
      name: 'Impact Partner',
      investment: 'Monthly $500 - $999',
      description: 'Significant support for specific programs with strong visibility',
      benefits: [
        'Logo placement on website and event materials',
        'Program-specific sponsorship recognition',
        'Social media features and recognition',
        'Impact reports',
      ],
      idealFor: 'Mid-sized companies, regional businesses'
    },
    {
      id: 'community',
      name: 'Community Partner',
      investment: 'Monthly $100 - $499',
      description: 'Support for local initiatives with community recognition',
      benefits: [
        'Recognition on website and social media',
        'Certificate of partnership',
        'Newsletter features'
      ],
      idealFor: 'Small businesses, startups, professional groups'
    },
        {
      id: 'supporting',
      name: 'Supporting Partner',
      investment: 'Monthly < $99',
      description: 'Support for local initiatives with community recognition',
      benefits: [
        'Recognition on website',
        'Certificate of partnership',
      ],
      idealFor: 'Small businesses, startups,'
    }
  ]

  const partnershipAreas = [
    {
      icon: '💻',
      title: 'Technology Sponsorship',
      description: 'Donate equipment, software licenses, or technical resources',
      examples: ['Laptops for workshops', 'Arduino kits', 'Software licenses', 'Cloud credits']
    },
    {
      icon: '👥',
      title: 'Employee Engagement',
      description: 'Engage your team through volunteering and mentorship',
      examples: ['Workshop instructors', 'Career mentors', 'Project judges', 'Skill-based volunteering']
    },
    {
      icon: '🎯',
      title: 'Program Sponsorship',
      description: 'Sponsor specific workshops, hackathons, or educational programs',
      examples: ['Python workshop series', 'IronByte hackathon', 'Robotics competition', 'Summer coding camp']
    },
    {
      icon: '🏆',
      title: 'Scholarship Fund',
      description: 'Support underprivileged students with scholarships and resources',
      examples: ['Need-based scholarships', 'Equipment grants', 'Travel stipends', 'Project materials']
    }
  ]

  const currentPartners = [
    {
      name: 'Hack Club Bank',
      logo: '/hcb.png',
      type: 'Fiscal Sponsor',
      description: 'Providing financial infrastructure and nonprofit expertise'
    },
    {
      name: 'Jukebox Print',
      logo: '/jukebox-logo.png',
      type: 'In-Kind Partner',
      description: 'Supplying custom stickers and promotional materials'
    }
    // Add more as you get them
  ]

  const benefitsForBusiness = [
    {
      icon: '🌟',
      title: 'Brand Visibility',
      description: 'Reach thousands of students, parents, and educators across Nepal'
    },
    {
      icon: '💼',
      title: 'Talent Pipeline',
      description: 'Connect with Nepal\'s future tech leaders and potential hires'
    },

    {
      icon: '📊',
      title: 'Employee Engagement',
      description: 'Boost team morale through meaningful volunteer opportunities'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Conversation',
      description: 'We learn about your goals and explore alignment'
    },
    {
      step: 2,
      title: 'Custom Proposal',
      description: 'We create a tailored partnership package'
    },
    {
      step: 3,
      title: 'Agreement & Onboarding',
      description: 'Formalize partnership and plan activation'
    },
    {
      step: 4,
      title: 'Impact & Reporting',
      description: 'Regular updates on program impact and ROI'
    }
  ]

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    interestArea: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - connect to your backend or email service
    const subject = `Corporate Partnership Inquiry: ${formData.companyName}`
    const body = `
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Size: ${formData.companySize}
Interest Area: ${formData.interestArea}

Message:
${formData.message}
    `.trim()

    window.location.href = `mailto:abhinavsl511@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="corporate-partnerships-page">
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="corporate-hero-content">
          <h1>Corporate Partnerships</h1>
          <p className="hero-tagline">
            Join Us in Building Nepal's Next Generation of Tech Innovators
          </p>
          <p className="hero-subtitle">
            Partner with Learn Robo Nepal to drive STEM education forward while achieving 
            your corporate social responsibility and talent development goals.
          </p>
          <div className="hero-buttons">
            <a href="#partnership-contact" className="cta-primary">Start Partnership Discussion</a>
            <a href="#partnership-tiers" className="cta-secondary">View Partnership Tiers</a>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="why-partner">
        <div className="partner-container">
          <h2>Why Partner With Learn Robo Nepal?</h2>
          <div className="benefits-grid">
            {benefitsForBusiness.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="partnership-tiers" className="partnership-tiers">
        <div className="tiers-container">
          <h2>Partnership Opportunities</h2>
          <p className="section-intro">
            Choose the partnership level that aligns with your organization's goals and capacity! 
            (Prices in USD.)
          </p>

          {/* Tier Selector */}
          <div className="tier-selector">
            {partnershipTiers.map(tier => (
              <button
                key={tier.id}
                className={`tier-tab ${activeTier === tier.id ? 'active' : ''}`}
                onClick={() => setActiveTier(tier.id)}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Details */}
          <div className="tier-details">
            {partnershipTiers
              .filter(tier => tier.id === activeTier)
              .map(tier => (
                <div key={tier.id} className="tier-card">
                  <div className="tier-header">
                    <h3>{tier.name}</h3>
                    <div className="investment">{tier.investment}</div>
                  </div>
                  <p className="tier-description">{tier.description}</p>
                  
                  <div className="benefits-section">
                    <h4>Partnership Benefits:</h4>
                    <ul className="benefits-list">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="ideal-for">
                    <strong>Ideal for:</strong> {tier.idealFor}
                  </div>

                  <a href="#partnership-form" className="tier-cta">
                    Inquire About {tier.name}ship
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

    
            <section id="impact" className="impact-section">
      <div className="impact-container">
        <div className="impact-content">
          <div className="impact-text">
            <h2>Your Donation Creates Real Change</h2>
            <p>Every contribution directly fuels STEM education for underprivileged youth in Nepal. See how your support translates into tangible impact:</p>
            <Link
              to="/donate" 
              className="impact-donate-btn" 
            >
              Donate Now
            </Link>
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
            <a 
              href="/courses" 
              className="course-details-link"            >
              View detailed curriculum and course outlines →
            </a>
          </p>
        </div>
      </div>
    </section>

      {/* Partnership Areas */}
      <section className="partnership-areas">
        <div className="areas-container">
          <h2>Areas of Partnership</h2>
          <div className="areas-grid">
            {partnershipAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="examples">
                  <strong>Examples:</strong>
                  <ul>
                    {area.examples.map((example, exIndex) => (
                      <li key={exIndex}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Partnership Process */}
      <section className="partnership-process">
        <div className="process-container">
          <h2>Our Partnership Process</h2>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            <section className="partner-cta-section" id="partnership-contact">
  <div className="partner-cta-container">
    <div className="partner-cta-content">
      <div className="cta-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      
      <h2 className="cta-title">Ready to be a Partner?</h2>
      <p className="cta-subtitle">Let's build the future of STEM education in Nepal together!</p>
      
      <div className="email-card">
        <div className="email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <div className="email-content">
          <span className="email-label">Email us at:</span>
          <a href="mailto:abhinavsl511@gmail.com" className="email-address">
            abhinavsl511@gmail.com
          </a>
        </div>
        <div className="email-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>

      <div className="response-info">
        <div className="response-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Quick Response
        </div>
        <p className="response-time">We typically respond within 24 business hours</p>
      </div>

      <div className="partnership-benefits">
        <div className="benefit-item">
          <div className="benefit-dot"></div>
          <span>Custom partnership proposals</span>
        </div>
        <div className="benefit-item">
          <div className="benefit-dot"></div>
          <span>Flexible engagement options</span>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default CorporatePartnerships