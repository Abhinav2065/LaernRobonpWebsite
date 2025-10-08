import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Partner.css"

const Partner = () => {
  return (
    <div>
        <div className="partner">
            <h4>Partners</h4>

            <div className="brands">
                <div className="brand">
                    <Link to="https://hcb.hackclub.com">
                    <img src="hcb.png" alt="HCB" />
                    </Link>
                    <p>Fiscal Sponsership Partner.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner