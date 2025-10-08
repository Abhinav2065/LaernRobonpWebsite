import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Impact from './components/Impact'
import Transparency from './components/Transparency'
import Events from './components/Events'
import Footer from './components/Footer'
import About from './components/About'
import Partner from './components/Partner'
import Team from './components/Team'
import Contact from './components/Contact'
import Donate from './components/Donate'
import "./index.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
            <Route path="/" element={
              <>
              <Hero/>
              <Impact/>
              <Transparency/>
              <Partner/>
              <Events/>
              </>
            }>
            </Route>
            <Route path="/about" element={
              <>
              <About/>
              <Partner/>
              </>
            }>
            </Route>
            <Route path="/team" element={
              <>
              <Team/>
              </>
            }>
            </Route>

            <Route path="/contact" element={
              <>
              <Contact/>
              </>
            }> 
            </Route>
            <Route path="/donate" element={
              <>
              <Donate/>
              </>
            }>
            </Route>
        </Routes>
          <Footer/>
      </div>
    </Router>
  )
}

export default App


// https://coolors.co/acbdba-cddddd-a599b5-2e2f2f-051014