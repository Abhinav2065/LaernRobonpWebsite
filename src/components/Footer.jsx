import React from 'react'
import "../style/Footer.css"


const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="first">
            <img src="dark-logo.png" alt="" className="logo"/>
            <p>Learn Robo Nepal is a non profit initiative in Nepal that works on providing free education to students in Nepal.</p>
            </div>            
            <ul>
                <li>
                    <ul className='list'>
                        <li>
                            <h4>Home</h4>
                        </li>
                        <li>
                            Impact
                        </li>
                        <li>
                            Events
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>About</h4>
                </li>
                <li>
                    <h4>Team</h4>
                </li>
                <li>
                    <h4>Contact</h4>
                </li>
                <li>
                    <h4>Join Us</h4>
                </li> 
            </ul>

            <div className="donate">
                Donate Us
            </div>
        </div>
    </div>
  )
}

export default Footer