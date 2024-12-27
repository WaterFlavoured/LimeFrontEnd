import React, { useEffect } from 'react'
import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const[top, setTop] = useState(0);
  const[transp, setTransp] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if(prevScrollPos > currentScrollPos) {
        setTop(0);
      }else {
        setTop(-70);
      }
      setPrevScrollPos(currentScrollPos);
      if(currentScrollPos === 0) {
        setTransp('transparent');
      }else {
        setTransp('black');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    backgroundColor: `${transp}`,
    position: 'fixed',
    top: `${top}px`,
    width: '100%',
    display: 'block',
    transition: 'top 0.3s',
    transition: 'background-color 0.3s',
    height: '70px',
  };
  return (
    <div className='navbar' style={navbarStyle}>
      Navbar
    </div>
  )
}

export default Navbar