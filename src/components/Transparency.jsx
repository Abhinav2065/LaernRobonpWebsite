import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Transparency.css"

const Transparency = () => {
  return (
    <div>
        <div className="trans">
            <div className="text">
                <h3>We are Financially Transparent!</h3>
                <p>Each and Every one of our financial transaction is out there acessable for everyone to see. We believe in full transparency.</p>
                <Link className='button' to="https://hcb.hackclub.com/learn-robo-nepal/transactions">Check It Yourself!</Link>
            </div>
            <div className="image">
                <img src="transparency.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Transparency