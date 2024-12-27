import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
const SideBar = ({ setShowNav }) => {
  return (
    <div className='sbar'>
      <div className='sbar-content'>
        <button onClick={() => setShowNav(false)} className='plusBar'>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages/about">About</Link></li>
          <li><Link to="/pages/portfolio">Portfolio</Link></li>
          <li><Link to="/pages/rentals">Rentals</Link></li>
          <li><Link to="/pages/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;