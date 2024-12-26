import React from 'react';
import video1 from '../assets/italy.mp4';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import './Home.css'
const Home = () => {
  return (
    <div className="main">
      <video className="background-video" src={video1} autoPlay loop muted />
      <div className='content'>
        <h1><img src={logo} alt="" /></h1>
        <button className='plus'><FontAwesomeIcon icon={faSquarePlus} /></button>
      </div>
    </div>
  );
};

export default Home;
