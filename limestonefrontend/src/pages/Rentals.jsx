import React from 'react'
import './Rentals.css'
import image1 from '../assets/RentalsPhotos/ConcreteStamp.jpg'
import image2 from '../assets/RentalsPhotos/WireMesh.jpg'


const Rentals = () => {
  return (
    <div className='rentals'>

      <h1 style={{ fontSize: '45px' }} className='header'>RENTALS</h1>

      <div className='main-body'>

        <div className='leftSide'>
          <img className='imgs' src={image1}></img>
          <p>This concrete stamp does a lot of stuff but idrk what</p>
        </div>

        <div className='rightSide'>
          <img className='imgs' src={image2}></img>
          <p>This is some wire mesh and it also does stuff but again idk what it is</p>

        </div>


      </div>



    </div>
  )
}

export default Rentals