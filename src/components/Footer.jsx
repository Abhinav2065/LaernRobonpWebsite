import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to="/">
                    <ul className='list'>
                        <li>
                            <h4>Home</h4>
                        </li>
                        <li>
                            Events
                        </li>
                    </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                    <ul className='list'>
                        <li>
                            <h4>About</h4>
                        </li>
                        <li>
                            Partners
                        </li>
                    </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/team">
                    <ul className='list'>
                        <li>
                            <h4>Team</h4>
                        </li>
                        <li>
                            Our Team
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                    <ul className='list'>
                        <li>
                            <h4>Contact</h4>
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Email
                        </li>
                    </ul>   
                    </Link>             
                    </li>
                <li>
                    <h4>Join Us</h4>
                </li> 
            </ul>

            <Link className="donate" to="/donate"> 
                Donate Us
            </Link>
        </div>
    </div>
  )
}

export default Footer