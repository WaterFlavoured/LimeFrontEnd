import React from 'react'
import { Routes, Route } from "react-router";
import About from './About'
import Navbar from '../components/Navbar'
const Pages = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Pages