import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const CoursesPage = () => {
  const courses = [
    {
      title: "Python Programming",
      level: "Beginner",
      duration: "16 credit hours",
      description: "Learn Python from basics, be able to do projects and explore programming on your own.",
      topics: ["Variables & Data Types", "Functions & Modules", "Python Packages"],
      image: "/python.jpg"
    },
    {
      title: "Arduino & Robotics",
      level: "Beginner",
      duration: "12 credit hours",
      description: "Hands-on robotics course covering Arduino programming, sensors, motors.",
      topics: ["Ohm's law", "Arduino Basics", "Serial Monitor in Arudino" ,"Sensor Integration", "Actuator Integration"],
      image: "/microcontroller.jpg"
    },
    {
      title: "Web Development",
      level: "Beginner",
      duration: "10 credit hours",
      description: "Basics of Web Development using HTML, CSS and JS.",
      topics: ["HTML", "Basic CSS", "JavaScript Fundamentals", "AI in frontend", "Project Deployment"],
      image: "/webdev.jpg"
    }
  ]

  return (
    <div className="courses-page">
      {/* Hero Section for Courses Page */}
      <section className="courses-hero">
        <div className="courses-hero-content">
          <h1>View What We Teach!</h1>
          <p>We offer courses that empower teenagers to learn independently, giving them the foundational skills to get started .</p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="courses-list-section">
        <div className="courses-container">
          <div className="courses-header">
            <h2>Available Courses</h2>
            <p>These are the courses we teach on different schools all over Nepal for free :)</p>
          </div>
          
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-level">{course.level}</div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-duration">Duration: {course.duration}</p>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-topics">
                    <h4>What You'll Learn:</h4>
                    <ul>
                      {course.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="courses-cta">
        <div className="cta-container">
          <h2>Want to have these workshops on your School?</h2>
          <p>Are you from a school adminstration? Do you want these courses taught in your School? If Yes then feel free to           \
           <br /> <br /><Link to='/contact' className="cta-primary">Reach us out!</Link></p>

        </div>
      </section>
    </div>
  )
}

export default CoursesPage