import React from 'react'
import { Routes, Route } from "react-router";
import About from './About'
import Navbar from '../components/Navbar'
import Portfolio from './Portfolio';
import Rentals from './Rentals';
import Contact from './Contact';
const Pages = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Pages