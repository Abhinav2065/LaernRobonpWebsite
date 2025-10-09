import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/Contact.css"

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <p>Feel free to contact us if you have any questions regarding us via email or call.</p>
                    <p className="email"><Link to="mailto:abhinavsl511@gmail.com" className="email">abhinavsl511@gmail.com</Link></p>
                    <p className="phone">+977 9813127946</p>
                </div>

                <div className="contact-form">
                    <div className="container">
                        <form>
                            <label htmlFor="fname">First Name</label>
                            <input 
                                type="text" 
                                id="fname" 
                                name="firstName" 
                                placeholder="Your name.."
                            />

                            <label htmlFor="lname">Last Name</label>
                            <input 
                                type="text" 
                                id="lname" 
                                name="lastName" 
                                placeholder="Your last name.."
                            />

                            <label htmlFor="country">Country</label>
                            <input 
                                type="text" 
                                id="country" 
                                name="country" 
                                placeholder="Your country.."
                            />

                            <label htmlFor="subject">Message</label>
                            <textarea 
                                id="subject" 
                                name="subject" 
                                placeholder="Write your message here.." 
                                style={{height: "200px"}}
                            ></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Contact