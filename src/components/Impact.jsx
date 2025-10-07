import React, { useEffect } from 'react'
import "../style/Impact.css"


const Impact = () => {
  return (
    <div>
        <div className="impact">
            <div className="text">
                <h3>Your Donation Creates Real Change</h3>
                <p>Each and every contribution fuels STEM education for childrens in Nepal.</p>
            </div>
            <div className="stats">
                <div className="stat">
                    <h5>$50</h5>
                    <p>Funds a workshop for 20 students</p>
                </div>
                <div className="stat">
                    <h5>$100</h5>
                    <p>Funds a workshop for 50 students</p>
                </div>
                <div className="stat">
                    <h5>$500</h5>
                    <p>Funds workshops for 400+ students</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Impact