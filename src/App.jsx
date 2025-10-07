import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Impact from './components/Impact'
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
              </>
            }>

            </Route>

        </Routes>

      </div>
    </Router>
  )
}

export default App