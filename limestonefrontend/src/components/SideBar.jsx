import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ setShowNav }) => {
  return (
    <div className='sbar'>
      <div className='sbar-content'>
        <button onClick={() => setShowNav(false)} className='plusBar'>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;