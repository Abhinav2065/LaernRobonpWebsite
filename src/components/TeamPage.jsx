import React from 'react'

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Abhinav Siluwal",
      role: "Founder & Executive Director",
      email: "abhinavsl511@gmail.com",
      phone: "+977 9813127946",
      linkedin: "https://linkedin.com/in/abhinavsl",
      image: "/abhinav.jpg",
      description: "Leading the vision and strategy of Learn Robo Nepal, Abhinav is passionate about making STEM education accessible to every Nepali youth."
    },
    {
      name: "Jenith Acharya",
      role: "Deputy Director",
      email: "zenithacharya000@gmail.com",
      phone: "+977 9767834217",
      linkedin: "https://www.linkedin.com/in/zenith-acharya-29853824a/",
      image: "/zenith.png",
      description: "Jenith oversees program operations and ensures the smooth execution of all workshops and educational initiatives."
    },
    {
      name: "Ojas Khatiwada",
      role: "Financial & Marketing Manager",
      email: "ojaskhatiwada09@gmail.com",
      phone: "+977 9765979163",
      linkedin: "https://www.linkedin.com/in/ojas-khatiwada-614629311/",
      image: "/ojas.jpg",
      description: "Ojas manages the organization's finances, partnerships, and marketing strategies to expand our reach across Nepal."
    },
    {
      name: "Saiman Ghimire",
      role: "Technical Lead",
      email: "ghimiresaiman1@gmail.com",
      phone: "+977 9847468742",
      linkedin: "https://www.linkedin.com/in/saiman-ghimire/",
      image: "/samyam.jpg",
      description: "Saiman helps develops curriculum and leads technical workshops, ensuring our content stays current with industry trends."
    },
    {
      name: "Prajwal Chaulagain",
      role: "Content Manager",
      email: "official.prajwolpc@gmail.com",
      phone: "+977 9768995038",
      linkedin: "https://www.linkedin.com/in/prajwol-chamlagain-473584388/",
      image: "/prajwal.jpg",
      description: "Creates engaging videos and designs that bring our STEM programs to life and inspire students across Nepal."
    }
  ]

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1>Our Team</h1>
          <p className="team-tagline">
            Meet the passionate individuals driving Learn Robo Nepal's mission.
          </p>
          <p className="team-subtitle">
            Our team consists of dedicated people from differente background comming together for the same goal, to make STEM education accessible in Nepal.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="team-grid-section">
        <div className="team-container">
          <div className="team-intro">
            <h2>Dedicated to Making a Difference</h2>
            <p>
              Each member of our team brings unique skills and perspectives, united by a common goal: 
              to provide free, quality STEM education and create opportunities for Nepali youth to 
              excel in technology and innovation. Feel Free to contact us if you have questions or need help with anything!
            </p>
          </div>
          
          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href={`mailto:${member.email}`} className="social-link" title="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                      <a href={`tel:${member.phone}`} className="social-link" title="Phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </a>
                      <a href={member.linkedin} className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                  <div className="member-contact">
                    <div className="contact-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span>{member.email}</span>
                    </div>
                    <div className="contact-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-cta">
        <div className="cta-container">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for passionate individuals who want to make a difference in STEM education. Do you want to join our team?</p>
          <div className="cta-buttons">
            <a href="/#contact" className="cta-primary">Volunteer With Us</a>
            <a href="mailto:abhinavsl511@gmail.com" className="cta-secondary">Send Your CV</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage