import React, { useState } from 'react'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [isRecurring, setIsRecurring] = useState(false)

  const donationTiers = [
    { amount: 25, impact: "Buys Arduino components for 3 students", popular: false },
    { amount: 50, impact: "Funds a Python workshop for 20 students", popular: true },
    { amount: 100, impact: "Sponsors a microcontroller workshop for 30 students", popular: false },
    { amount: 250, impact: "Equips a robotics kit for advanced projects", popular: false },
    { amount: 500, impact: "Educates 200+ students across various STEM topics", popular: false },
    { amount: 1000, impact: "Sponsors an entire hackathon event", popular: false }
  ]

  const impactStats = [
    { number: "50+", label: "Students Educated" },
    { number: "2", label: "Workshops Conducted" },
    { number: "1", label: "Cities Reached" },
    { number: "100%", label: "Free for Students" }
  ]

  const donationUsage = [
    { category: "Workshop Materials", percentage: "50%", description: "Arduino kits, sensors, components" },
    { category: "Venue & Logistics", percentage: "22%", description: "Workshop spaces, transportation" },
    { category: "Volunteer Support", percentage: "18%", description: "Training and resources" },
    { category: "Administrative", percentage: "10%", description: "Website, communication tools" }
  ]

  const successStories = [
    {
      name: "Samantha Rai",
      story: "Thanks to donors, I learned Python and built my first web app. Now I'm pursuing computer science in college!",
      achievement: "Built a portfolio website using Python"
    },
    {
      name: "Amit Thapa",
      story: "The robotics workshop sparked my interest in engineering. I won my school's science fair with an Arduino project!",
      achievement: "Created smart home system with Arduino"
    }
  ]

  const handleCustomAmount = (e) => {
    const value = parseInt(e.target.value) || 0
    setSelectedAmount(value)
  }

  const handleDonateClick = () => {
    const amount = selectedAmount
    const frequency = isRecurring ? 'monthly' : 'one-time'
    const donateUrl = `https://hcb.hackclub.com/donations/start/learn-robo-nepal?amount=${amount}00&${frequency}=True`
    window.open(donateUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <h1>Fuel the Future of STEM in Nepal!</h1>
          <p className="hero-tagline">
            Your donation provides free STEM education to underprivileged youth, 
            creating the next generation of Nepali innovators and problem-solvers.
          </p>
          <div className="impact-stats">
            {impactStats.map((stat, index) => (
              <div key={index} className="impact-stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="donation-options">
        <div className="donation-container">
          <div className="donation-content">
            {/* Left Column - Donation Form */}
            <div className="donation-form-section" >
              <h2>Make a Difference Today</h2>
              
              {/* Amount Selection */}
              <div className="amount-selection">
                <h3>Select Amount (USD)</h3>
                <div className="amount-grid" id="donation">
                  {donationTiers.map((tier, index) => (
                    <button
                      key={index}
                      className={`amount-option ${selectedAmount === tier.amount ? 'selected' : ''} ${tier.popular ? 'popular' : ''}`}
                      onClick={() => setSelectedAmount(tier.amount)}
                    >
                      <div className="amount">${tier.amount}</div>
                      {tier.popular && <div className="popular-badge">Most Value</div>}
                      <div className="impact">{tier.impact}</div>
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="custom-amount">
                  <label htmlFor="customAmount">Or enter custom amount:</label>
                  <div className="custom-input">
                    <span className="currency">$</span>
                    <input
                      type="number"
                      id="customAmount"
                      value={selectedAmount}
                      onChange={handleCustomAmount}
                      min="1"
                      placeholder="50"
                    />
                  </div>
                </div>
              </div>

              {/* Recurring Donation */}
              <div className="recurring-option" >
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Make this a monthly recurring donation
                </label>
                <p className="recurring-note">
                  Monthly donations help us plan long-term programs and reach more students consistently.
                </p>
              </div>

              {/* Donate Button */}
              <button className="donate-main-btn" onClick={handleDonateClick}>
                <span>Donate ${selectedAmount} {isRecurring ? 'Monthly' : 'Once'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              {/* Security & Trust */}
              <div className="security-info">
                <div className="security-badges">
                  <div className="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Secure Payment
                  </div>
                  <div className="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Tax-Deductible
                  </div>
                </div>
                <p className="fiscal-note">
                  Learn Robo Nepal is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit. 
                  Your donation is tax-deductible to the extent permitted by law. EIN: 81-2908499
                </p>
              </div>
            </div>

            {/* Right Column - Impact Visualization */}
            <div className="impact-visualization">
              <h3>How Your Donation Helps</h3>
              
              {/* Usage Breakdown */}
              <div className="usage-breakdown">
                <h4>Where Your Money Goes</h4>
                {donationUsage.map((item, index) => (
                  <div key={index} className="usage-item">
                    <div className="usage-header">
                      <span className="category">{item.category}</span>
                      <span className="percentage">{item.percentage}</span>
                    </div>
                    <div className="usage-bar">
                      <div 
                        className="usage-fill" 
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                    <p className="usage-desc">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Success Stories */}
              {/* <div className="donation-stories">
                <h4>Stories You're Supporting</h4>
                {successStories.map((story, index) => (
                  <div key={index} className="story-card">
                    <p className="story-text">"{story.story}"</p>
                    <div className="story-author">
                      <strong>{story.name}</strong>
                      <span>{story.achievement}</span>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="transparency-section">
        <div className="transparency-container">
          <h2>Complete Financial Transparency</h2>
          <p>
            We believe in full transparency. Every dollar is accounted for and publicly visible 
            to ensure your donation creates maximum impact.
          </p>
          <a 
            href="https://hcb.hackclub.com/learn-robo-nepal/transactions" 
            className="transparency-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Our Financial Records
          </a>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="other-support">
        <div className="support-container">
          <h2>Other Ways to Support</h2>
          <div className="support-options">
            <div className="support-option">
              <div className="support-icon">🤝</div>
              <h3>Corporate Sponsorship</h3>
              <p>Partner with us as a corporate sponsor and support STEM education while building your brand.</p>
              <a href="mailto:abhinavsl511@gmail.com">Contact Us</a>
            </div>
            <div className="support-option">
              <div className="support-icon">🎁</div>
              <h3>In-Kind Donations</h3>
              <p>Donate equipment, books, or services that can help our programs run more effectively.</p>
              <a href="mailto:abhinavsl511@gmail.com">Learn More</a>
            </div>
            <div className="support-option">
              <div className="support-icon">👥</div>
              <h3>Become a Volunteer</h3>
              <p>Share your skills and time to help teach the next generation of innovators.</p>
              <a href="/get-involved">Volunteer Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate