import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email Us",
      detail: "abhinavsl511@gmail.com",
      link: "mailto:abhinavsl511@gmail.com",
      description: "Send us an email for any inquiries, partnerships, or any questions"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      title: "Instagram",
      detail: "@learnrobo.np",
      link: "https://instagram.com/learnrobo.np",
      description: "Follow us for updates, events, and behind-the-scenes content!"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      title: "LinkedIn",
      detail: "Learn Robo Nepal",
      link: "https://linkedin.com/company/learn-robo-nepal",
      description: "Connect with us professionally and stay updated on our initiatives!"
    }
  ]

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, calling us directly is the fastest way to get assistance."
    },
    {
      question: "Do you offer custom workshops for schools or organizations?",
      answer: "Yes! We offer customized STEM workshops tailored to your organization's needs. Contact us to discuss your requirements and we'll create a program that fits for you and your students!"
    },
    {
      question: "How can I volunteer with Learn Robo Nepal?",
      answer: "We're always looking for passionate volunteers! Visit our Get Involved page or email us directly to learn about current opportunities :D"
    },
    {
      question: "Are your programs really free for students?",
      answer: "Yes, all our workshops and programs are completely free for students all thanks to our donors. We're committed to making STEM education accessible to all Nepali youth."
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from the Learn Robo Nepal contact form.
    `.trim())

    window.location.href = `mailto:abhinavsl511@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch!</h1>
          <p className="hero-tagline">
            We'd love to hear from you! Whether you're a student, educator, potential partner, 
            or just curious about our work - let's start a conversation!
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="contact-methods-section">
        <div className="contact-container">
          <div className="section-header">
            <h2>Ways to Reach Us</h2>
            <p>Choose the method that works best for you. Feel free to contact us, we're here to help!</p>
          </div>
          
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                className="contact-method-card"
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="method-icon">
                  {method.icon}
                </div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p className="method-detail">{method.detail}</p>
                  <p className="method-description">{method.description}</p>
                </div>
                <div className="method-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-content">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>
                Have a specific question or want to discuss a partnership? Fill out this form 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Volunteer Application">Volunteer Application</option>
                  <option value="Workshop Registration">Workshop Registration</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you, ask about our programs, or share your ideas for collaboration..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="faq-container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about Learn Robo Nepal</p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Support CTA */}
      <section className="support-cta">
        <div className="support-container">
          <div className="support-content">
            <div className="support-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
            </div>
            <h2>Need Immediate Assistance?</h2>
            <p>For urgent matters or time-sensitive inquiries, calling us directly is the fastest way to get help. <span className='footer-description'><br />(If we are unable to answer your call then please leave a message and email us)</span></p>
            <a href="tel:+9779813127946" className="cta-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us Now: +977 9813127946
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage