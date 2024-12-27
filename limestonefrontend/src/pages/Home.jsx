import React from 'react';
import video1 from '../assets/italy.mp4';
import './Home.css'
const Home = () => {
  return (
    <div className="main">
      <video className="background-video" src={video1} autoPlay loop muted />
      <div>
        
      </div>
    </div>
  );
};
//who up crankin they hog????

export default Home;
