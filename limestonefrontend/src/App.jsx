import './App.css'
import { Routes, Route } from "react-router";
import { useState } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Pages from './pages/Pages';
function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home showNav={showNav} setShowNav={setShowNav}/>} />
        <Route path="/pages/*" element={<Pages showNav={showNav} setShowNav={setShowNav}/>} />
      </Routes>
    </>
  )
}

export default App
