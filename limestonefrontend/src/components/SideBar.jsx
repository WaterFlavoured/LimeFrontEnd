import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router';
const SideBar = ({ setShowNav }) => {
  return (
    <div className='sbar'>
      <div className='sbar-content'>
        <button onClick={() => setShowNav(false)} className='plusBar'>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          <li><Link to="/pages/about" onClick={() => setShowNav(false)}>About</Link></li>
          <li><Link to="/pages/portfolio" onClick={() => setShowNav(false)}>Portfolio</Link></li>
          <li><Link to="/pages/rentals" onClick={() => setShowNav(false)}>Rentals</Link></li>
          <li><Link to="/pages/contact" onClick={() => setShowNav(false)}>Contact Us</Link></li>
        </ul>
        <div className='sfooter'>
          <div className='social'>
            <a href="https://www.instagram.com/limestone_concrete?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="https://www.tiktok.com/@limestone_concreteltd?is_from_webapp=1&sender_device=pc"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
          <p>© LIMESTONE CONCRETE LTD.</p>
          <p>DESIGNED BY LIMESTONE CONCRETE LTD</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;