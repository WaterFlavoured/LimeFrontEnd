import React, { useState } from 'react';
import video1 from '../assets/italy.mp4';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/SideBar.jsx';
import './Home.css';

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="main">
      <video className="background-video" src={video1} autoPlay loop muted />
      <div className='content'>
        <h1><img src={logo} alt="" /></h1>
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