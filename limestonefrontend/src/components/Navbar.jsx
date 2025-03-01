import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/HD LIMESTONE LOGO.png'
import SideBar from './SideBar'
import './Navbar.css'
const Navbar = ({ showNav, setShowNav }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  const [transp, setTransp] = useState('transparent');

  const slogoRef = useRef(null);
  const stextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Smoothly transition the navbar position
      if (prevScrollPos > currentScrollPos) {
        setTop(0); // Show the navbar
      } else {
        setTop(-(window.innerHeight * 0.17)); // Hide the navbar
      }

      // Update the background color based on scroll position
      if (currentScrollPos === 0) {
        setTransp('transparent');
      } else {
        setTransp('#faeecd');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (slogoRef.current && stextRef.current) {
      slogoRef.current.style.transition = 'opacity 0.5s ease-in-out';
      slogoRef.current.style.opacity = 1;
      stextRef.current.style.transition = 'opacity 0.5s ease-in-out';
      stextRef.current.style.opacity = 0;
    }
  }, []);

  useEffect(() => {
    if (slogoRef.current && stextRef.current) {
      slogoRef.current.style.opacity = showNav ? 0 : 1;
      stextRef.current.style.opacity = showNav ? 1 : 0;
    }
  }, [showNav]);

  const navbarStyle = {
    backgroundColor: transp,
    position: 'fixed',
    top: `${top}px`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'top 0.3s ease, background-color 0.3s ease', // Ensure smooth transition
    height: `${window.innerHeight * 0.17}px`,
    zIndex: 1000,
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="navbar-logo">
        <h1>
          <Link to="/">
            <img src={logo} alt="Logo" ref={slogoRef} id="logoImage" />
          </Link>
        </h1>
        <h2 ref={stextRef}>
          <Link to="/">
            LimeStone <br /> Concrete
          </Link>
        </h2>
      </div>
      <button className="nplus" onClick={() => setShowNav(!showNav)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`floatRight ${showNav ? 'active' : ''}`}>
        {showNav && <SideBar setShowNav={setShowNav} />}
      </div>
    </div>
  );
};

export default Navbar