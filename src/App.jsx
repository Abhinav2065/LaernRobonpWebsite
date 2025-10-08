import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Impact from './components/Impact'
import Transparency from './components/Transparency'
import Events from './components/Events'
import Footer from './components/Footer'
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
              <Events/>
              <Footer/>
              </>
            }>

            </Route>

        </Routes>

      </div>
    </Router>
  )
}

export default App