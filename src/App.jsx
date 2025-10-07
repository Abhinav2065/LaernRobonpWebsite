import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Transparency from './components/Transparency'
import Programs from './components/Programs'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CoursesPage from './components/CoursesPage'
import About from './components/About'
import TeamPage from './components/TeamPage'
import Partner from './components/Partner'
import Getinvolved from './components/Getinvolved'
import Donate from './components/Donate'
import CorporatePartnerships from './components/CorporatePartnerships'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScroolToTop'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Impact />
              <Transparency />
              <Programs />
              <Events />
              <Contact />
            </>
          } />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/partner" element={<Partner />}></Route>
          <Route path="/get-involved" element={<Getinvolved />}> </Route>
          <Route path="/donate" element={<Donate/>}></Route>
          <Route path="/become-partner" element={<CorporatePartnerships/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App