import React from 'react'

const Transparency = () => {
  return (
    <section id="transparency" className="transparency-section">
      <div className="transparency-container">
        <div className="transparency-content">
          <div className="transparency-image">
            <img src="/transparency.png" alt="Screenshot of Financial Transactions" />
          </div>
          <div className="transparency-text">
            <h2>We Are Financially Transparent!</h2>
            <p>
              We believe in full transparency. Every cent of our spending is tracked and 
              publicly available to ensure trust and accountability.
            </p>
            <a 
              href="https://hcb.hackclub.com/learn-robo-nepal/transactions" 
              className="transparency-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Check It Yourself
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transparency