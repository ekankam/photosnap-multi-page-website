import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Features from './pages/Features'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Stories from './pages/Stories'

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="container">
      <Router>
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
