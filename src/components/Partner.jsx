import React from 'react'
import { Link } from 'react-router-dom'

const Partner = () => {
  const partners = [
    {
      name: "HCB",
      logo: "https://hcb.hackclub.com/brand/hcb-icon-icon-dark.png",
      description: "Fiscal sponsorship and financial infrastructure for our nonprofit operations",
      website: "https://hcb.hackclub.com",
      type: "Fiscal Sponsor"
    },
    {
      name: "Jukebox Print",
      logo: "https://storage.jukeboxprint.com/s/images/jukebox-logo.svg",
      description: "Providing custom stickers and promotional materials for our workshops",
      website: "https://www.jukeboxprint.com",
      type: "Print Partner"
    }
  ]

  const partnershipLevels = [
    {
      level: "Strategic Partners",
      description: "Long-term collaborators who share our vision and provide core support"
    },
    {
      level: "Community Partners", 
      description: "Organizations working together on specific programs and events"
    },
    {
      level: "Supporting Partners",
      description: "Companies and organizations providing resources and services"
    }
  ]

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="partner-hero-content">
          <h1>Our Partners</h1>
          <p className="partner-tagline">
            Building the future of STEM education in Nepal through strategic partnerships and collaborations.
          </p>
          <p className="partner-subtitle">
            Together with our partners, we're creating opportunities for Nepali youth to excel in 
            technology, innovation, and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Partnership Info Section */}
      <section className="partnership-info">
        <div className="partnership-container">
          <h2>Why Partner With Us?</h2>
          <div className="partnership-grid">
            <div className="partnership-card">
              <div className="partnership-icon">🎯</div>
              <h3>Direct Impact</h3>
              <p>Your support directly funds STEM education for underprivileged youth across Nepal.</p>
            </div>
            <div className="partnership-card">
              <div className="partnership-icon">🌟</div>
              <h3>Visibility</h3>
              <p>Get featured across our platforms and reach thousands of aspiring young technologists!</p>
            </div>
            <div className="partnership-card">
              <div className="partnership-icon">🤝</div>
              <h3>Community</h3>
              <p>Join a network of organizations committed to educational transformation in Nepal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="partners-grid-section">
        <div className="partners-container">
          <h2>Our Valued Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <span className="partner-type">{partner.type}</span>
                  <p>{partner.description}</p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="partner-website"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="partnership-levels">
        <div className="levels-container">
          <h2>Partnership Opportunities</h2>
          <div className="levels-grid">
            {partnershipLevels.map((level, index) => (
              <div key={index} className="level-card">
                <h3>{level.level}</h3>
                <p>{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta">
        <div className="cta-container">
          <h2>Interested in Partnering With Us?</h2>
          <p>
            Join us in our mission to democratize STEM education in Nepal. 
            Whether you're a company, educational institution, or individual donor, 
            there are many ways to collaborate and make a difference.
          </p>
          <div className="cta-buttons">
            <Link to="/become-partner" className="cta-primary">
              Become a Partner
            </Link>
            <a href="/#contact" className="cta-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partner