import React from 'react'

const About = () => {
  const stats = [
    { number: "50+", label: "Students Trained" },
    { number: "2", label: "Workshops Conducted" },
    { number: "1", label: "Cities Reached" },
    { number: "10+", label: "Volunteers" }
  ]

  const values = [
    {
      icon: "🎯",
      title: "Accessibility",
      description: "Making STEM education free and accessible to all Nepali youth, regardless of their background or financial situation."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Encouraging creative thinking and problem-solving through hands-on projects and real-world applications."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive network of learners, mentors, and innovators who grow together and help each other succeed."
    },
    {
      icon: "💡",
      title: "Practical Learning",
      description: "Focusing on project-based education where students learn by doing and creating tangible solutions."
    }
  ]

  const milestones = [
    { year: "2025", event: "Learn Robo Nepal Founded", description: "Started with a vision to democratize STEM education in Nepal" },
    { year: "2025", event: "First Workshops", description: "Conducted our first free workshop for 30+ students" },
    { year: "2025", event: "Hardware Hackathon", description: "Planing to organize Ironbyte, Nepal's first Hardware Hackathon for Teens" }  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About</h1>
          <p className="about-tagline">
            Empowering Nepal's youth with cutting-edge STEM education to build the next generation of innovators and problem-solvers.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To provide free, high-quality STEM education to Nepali Teens, equipping them with 
                the technical skills and innovative mindset needed to solve local and global challenges 
                through technology.
              </p>
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                We envision a Nepal where every young person has access to quality STEM education, 
                creating a thriving ecosystem of innovators, entrepreneurs, and technical leaders 
                who drive the nation's technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Learn Robo Nepal was born from a simple observation: while the world was rapidly advancing 
              in technology, many young Nepali students lacked access to practical STEM education. 
              Founded in 2025 by Abhinav Siluwal.
            </p>
            <p>
              We are now just a small movement, just a couple of high school students working for a Change.
              We imagine Learn Robo Nepal to be a national wide movement, helping thousands of students in Nepal 
              and making dreams come true!
            </p>
            <p>
              Today, we continue to grow our community of learners and mentors, constantly evolving 
              our programs to meet the changing needs of the tech landscape while staying true to 
              our core mission of making STEM education accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-container">
          <h2>Join Our Mission</h2>
          <p>Whether you're a student eager to learn, a volunteer wanting to mentor, or a supporter who believes in our cause - there's a place for you in our community.</p>
          <div className="cta-buttons">
            <a href="/get-involved" className="cta-primary">Get Involved</a>
            <a href="/courses" className="cta-secondary">Explore Courses</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About