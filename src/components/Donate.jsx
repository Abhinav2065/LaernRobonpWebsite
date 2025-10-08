import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/Donate.css"

const Donate = () => {
  const [customAmount, setCustomAmount] = useState('')

  const donationTiers = [
    { amount: 25, description: "Funds Workshops for 10 students" },
    { amount: 50, description: "Funds Workshops for 20 students" },
    { amount: 100, description: "Funds Workshops for 50 students" },
    { amount: 500, description: "Funds Workshops for 400+ students" },
    { amount: 1000, description: "Helps us run Learn Robo Nepal for 3 months" },
    { amount: 2500, description: "Helps us conduct national events like hackathons" }
  ]

  const handleDonateClick = (amount) => {
    // Redirect to your donation platform with amount as parameter
    const donationLink = `https://hcb.hackclub.com/donations/start/learn-robo-nepal?amount=${amount}00`
    window.open(donationLink, '_blank')
  }

  const handleCustomDonate = () => {
    if (customAmount && !isNaN(customAmount) && customAmount > 0) {
      const donationLink = `https://hcb.hackclub.com/donations/start/learn-robo-nepal?amount=${customAmount}00`
      window.open(donationLink, '_blank')
      setCustomAmount('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCustomDonate()
    }
  }

  return (
    <div>
        <div className="donate-hero">
            <h1>Support Our Mission</h1>
            <p>Help us empower Nepal's future innovators by donating!</p>
            <p>Donations from the US are tax deductible!</p>
        </div>

        <div className="donate-selection">
            <h1>Select Donation Amount</h1>
            <div className="selection">
                {donationTiers.map((tier, index) => (
                    <div 
                        key={index} 
                        className="package"
                        onClick={() => handleDonateClick(tier.amount)}
                    >
                        <h3>${tier.amount}</h3>
                        <p>{tier.description}</p>
                    </div>
                ))}
                
                <div className="package custom-amount">
                    <h3>Custom Amount</h3>
                    <p>Choose your own donation amount</p>
                    <div className="custom-input">
                        <input 
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            onKeyPress={handleKeyPress}
                            min="1"
                        />
                        
                        <button 
                            className="custom-donate-btn"
                            onClick={handleCustomDonate}
                            disabled={!customAmount || isNaN(customAmount) || customAmount <= 0}
                        >
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donate