import React from 'react'
import { Link } from 'react-router-dom'

const Getinvolved = () => {
  const volunteerRoles = [
    {
      title: "Workshop Instructor",
      description: "Teach basic programming, robotics, or electronics to students",
      requirements: ["Good knowledge of Python/Arduino", "Good communication skills", "Passion for teaching", "Experience in Arduino or Python"],
      timeCommitment: "4-6 hours per week",
      icon: "👨‍🏫"
    },
    {
      title: "Teaching Assistant",
      description: "Support instructors during workshops and help students with hands-on activities",
      requirements: ["Interest in STEM", "Patience and enthusiasm", "Basic Python", "Basic C/C++"],
      timeCommitment: "3-5 hours per week",
      icon: "🤝"
    },
    {
      title: "Event Coordinator",
      description: "Help organize workshops, hackathons, and STEM events",
      requirements: ["Organizational skills", "Team player", "Creative thinking","Willing to create an impact"],
      timeCommitment: "2-4 hours per week",
      icon: "📅"
    },
    {
      title: "Content Creator",
      description: "Create educational materials, tutorials, and social media content",
      requirements: ["Writing/design skills", "Social media savvy", "Creative mindset"],
      timeCommitment: "3-6 hours per week",
      icon: "✍️"
    }
  ]

  const benefits = [
    {
      icon: "📚",
      title: "Skill Development",
      description: "Enhance your technical, teaching, and leadership skills"
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Connect with like-minded students and professionals in STEM"
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Receive volunteer certificates and recommendation letters!"
    },
    {
      icon: "💼",
      title: "Experience",
      description: "Gain valuable experience for your college applications and resume"
    }
  ]

  const testimonials = [
    {
      name: "Sofia Shrestha",
      role: "High School Volunteer",
      quote: "Volunteering with Learn Robo Nepal helped me discover my passion for teaching coding while making a real impact in my community.",
      school: "Kathmandu Model College"
    },
    {
      name: "Rohan Basnet",
      role: "College Volunteer",
      quote: "The experience I gained as a workshop instructor was invaluable for my computer science degree and future career.",
      school: "Tribhuvan University"
    }
  ]

  return (
    <div className="getinvolved-page">
      {/* Hero Section */}
      <section className="involved-hero">
        <div className="involved-hero-content">
          <h1>Get Involved</h1>
          <p className="hero-tagline">
            Join Our Mission to Bring STEM Education in Nepal for Teens
          </p>
          <p className="hero-subtitle">
            We're looking for passionate high school and college students to volunteer 
            in our workshops and help us bring STEM education to every corner of Nepal.
          </p>
          <div className="hero-buttons">
            <a href="#volunteer-form" className="cta-primary">Apply to Volunteer</a>
            <a href="#roles" className="cta-secondary">Learn About Roles</a>
          </div>
        </div>
      </section>    

      {/* Why Volunteer Section */}
      <section className="why-volunteer">
        <div className="volunteer-container">
          <h2>Why Volunteer With Us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section id="roles" className="volunteer-roles">
        <div className="roles-container">
          <h2>Volunteer Opportunities</h2>
          <p className="roles-intro">
            Whether you're a coding enthusiast, a robotics geek, or just passionate about education, 
            there's a place for you in our team! No prior teaching experience required, just passion!
          </p>
          
          <div className="roles-grid">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="role-card">
                <div className="role-header">
                  <div className="role-icon">{role.icon}</div>
                  <h3>{role.title}</h3>
                </div>
                <p className="role-description">{role.description}</p>
                <div className="time-commitment">
                  <strong>Time: {role.timeCommitment}</strong>
                </div>
                <div className="requirements">
                  <h4>What We're Looking For:</h4>
                  <ul>
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="looking-for">
        <div className="looking-container">
          <div className="looking-content">
            <h2>Who We're Looking For</h2>
            <div className="looking-grid">
              <div className="looking-card">
                <h3>🏫 High School Students</h3>
                <p>
                  Are you a High School Student intrested in STEM? Have you worked with Arduino or Python? If Yes then feel free to apply for Volunteering in Learn Robo Nepal!
                </p>
              </div>
              <div className="looking-card">
                <h3>🎓 College Students</h3>
                <p>
                  Studying computer science, engineering, or other STEM related subjects? Put your skills 
                  to use as a workshop instructor or event coordinator. Great for 
                  practical experience and professional development.
                </p>
              </div>
              <div className="looking-card">
                <h3>🌟 Anyone Passionate</h3>
                <p>
                  You don't need to be a tech expert! If you're enthusiastic about 
                  education and want to make a difference, we'll provide the training 
                  and support you need. Just fill out the form and join us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Application Form Section */}
      <section id="volunteer-form" className="volunteer-form-section">
        <div className="form-container">
          <h2>Ready to Make a Difference?</h2>
          <p>Fill out our volunteer application form and we'll get back to you within 24-48 business hours. <br /> <br />
          <Link className='cta-button'>Apply Here</Link>
          </p>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="volunteer-faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do I need prior teaching experience?</h3>
              <p>No! We provide training and support for all our volunteers. What matters most is your passion and willingness to learn.</p>
            </div>
            <div className="faq-item">
              <h3>How much time do I need to commit?</h3>
              <p>Most roles require under 2-6 hours per week, depending on the position. We're flexible and understand you have academic commitments.</p>
            </div>
            <div className="faq-item">
              <h3>Is there any age requirement?</h3>
              <p>We welcome high school students (Grade 9 and above) and college students. Younger students may be considered on a case-by-case basis.</p>
            </div>
            <div className="faq-item">
              <h3>Will I receive any training?</h3>
              <p>Yes! All volunteers receive orientation and ongoing training. Workshop instructors get specific training on our curriculum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Getinvolved