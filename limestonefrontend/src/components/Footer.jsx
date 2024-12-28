import React from 'react'
import './Footer.css'
import logo from '../assets/HD LIMESTONE LOGO.png'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h1>
          <Link to="/" className='footer-logo'>
            LimeStone <br />
            Concrete
          </Link>
        </h1>
        <div className='footer-columns'>
          <div className='footer-column1'>
            <h2>Communities</h2>
            <ul className='footer-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pages/about">About</Link></li>
              <li><Link to="/pages/portfolio">Portfolio</Link></li>
              <li><Link to="/pages/rentals">Rentals</Link></li>
            </ul>
          </div>
          <div className='footer-column2'>
            <h2>Contact</h2>
            <ul>
              <li><Link to="/pages/contact">Contact</Link></li>
              <li>
                <div className='fsocial'>
                  <a href="https://www.instagram.com/limestone_concrete?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram}/></a>
                  <a href="https://www.tiktok.com/@limestone_concreteltd?is_from_webapp=1&sender_device=pc"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>COPYRIGHT © LIMESTONE CONCRETE LTD.</p>
        <img src={logo} alt='Limestone Concrete Logo' />
        <p>DESIGNED BY LIMESTONE</p>
      </div>
    </footer>
  )
}

export default Footer