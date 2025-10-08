import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    subject: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = `Contact Form: ${formData.firstName} ${formData.lastName}`
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Country: ${formData.country}

Message:
${formData.subject}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:abhinavsl511@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      subject: ''
    })
  }

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
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fname">First Name</label>
                            <input 
                                type="text" 
                                id="fname" 
                                name="firstName" 
                                placeholder="Your name.."
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="lname">Last Name</label>
                            <input 
                                type="text" 
                                id="lname" 
                                name="lastName" 
                                placeholder="Your last name.."
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="country">Country</label>
                            <input 
                                type="text" 
                                id="country" 
                                name="country" 
                                placeholder="Your country.."
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="subject">Message</label>
                            <textarea 
                                id="subject" 
                                name="subject" 
                                placeholder="Write your message here.." 
                                style={{height: "200px"}}
                                value={formData.subject}
                                onChange={handleChange}
                                required
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