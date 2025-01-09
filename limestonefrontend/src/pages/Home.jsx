import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import video1 from '../assets/italy.mp4';
import logo from '../assets/HD LIMESTONE LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/SideBar.jsx';
import './Home.css';

const Home = ({ setShowNav, showNav }) => {
  
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.transition = 'opacity 0.5s ease-in-out'; // Initial transition
      logoRef.current.style.opacity = 1; // Start visible (important for initial load)
      textRef.current.style.transition = 'opacity 0.5s ease-in-out'; // Initial transition
      textRef.current.style.opacity = 0; // Start visible (important for initial load)
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.opacity = showNav ? 0 : 1;
      textRef.current.style.opacity = showNav ? 1 : 0;
    }
  }, [showNav]); // Run when showNav changes
  return (
    <div className="main">
      <video className="background-video" src={video1} autoPlay loop muted />
      <div className='content'>
        <h1><Link to="/" onClick={() => setShowNav(false)}><img src={logo} alt="" ref={logoRef}/></Link></h1>
        <h2 ref={textRef}><Link to="/" onClick={() => setShowNav(false)} className='titleLogo'>LimeStone <br /> Concrete</Link></h2>
        <button className='plus' onClick={() => setShowNav(!showNav)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className={`floatRight ${showNav ? 'active' : ''}`}> 
        {showNav && <SideBar setShowNav={setShowNav} />} 
      </div>
    </div>
  );
};

export default Home;