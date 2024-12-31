import React from 'react'
import './About.css'
import image1 from '../assets/AboutPhotos/DJI_0913_batcheditor_fotor.jpg'
import image2 from '../assets/AboutPhotos/DSC00681_batcheditor_fotor.jpg'
import image3 from '../assets/AboutPhotos/DJI_0903_batcheditor_fotor.jpg'
import logo from '../assets/HD LIMESTONE LOGO.png'

const About = () => {
  return (
    // general className for this page is 'about'
    <div className='about'>

      <div className='header'>
        <h1 className='about-h1'>ABOUT</h1>

        <div> Limestone Concrete <br /> "A little hint of Limestone" </div>

        <h1><img className='image1' src={image1} alt="" width='1020' height='540'></img></h1> <br /><br />

        <div><img className='logo' src={logo} alt=""></img></div>

        <div className='about-text'>

          <h1>ABOUT LIMESTONE CONCRETE</h1>

          <p className='firstP'>Limestone Concrete is a family-owned business in London, Ontario,<br />
            specializing in foundations for private properties. We take pride in <br />
            delivering quality work and reliable service for every project we take on.</p>

        </div>
      </div>

      <div className='tempBlock1'>

        <div className='ourStandards'>

          <h1>OUR STANDARDS</h1>

          <p>We provide durable and reliable foundation solutions <br />
            tailored to your project's needs. From start to finish, we focus on quality <br />
            craftsmanship, timely service, and clear communication to ensure your property is <br />
            built on a strong and lasting foundation.</p>
        </div>

      </div>

      {/* <div> 4 images go here and then we put text (quality, professionalism, efficiency, integrity)</div> */}

      <div className='tempBlock2'>

        {/* we put an image here and then all the text will be on the right */}
        <img className='oVphoto' src={image2} alt=""></img>

        <div className='ourVis'>

          <h1>OUR VISION</h1>

          <p className='ourVisText'> Our vision is to build more than just foundations—we  
            aim to lay the groundwork for trust, innovation, and enduring partnerships. We 
            strive to set the standard for excellence in our industry by combining modern 
            techniques with timeless craftsmanship. Driven by a passion for quality and a 
            commitment to our community, we envision a future where every project we complete 
            becomes a testament to our dedication and values.</p>
        </div>

      </div>

      <div className='tempBlock3'>

        <div className='ourDut'>

          <h1>OUR DUTIES</h1>

          <p className='ourDutiesText'> At Limestone Concrete, our duties go beyond delivering exceptional foundations. <br />
            We are committed to maintaining the highest standards of safety, precision, and <br />
            professionalism on every job site. Our team takes pride in clear communication, <br />
            environmental responsibility, and ensuring each project is completed on time and <br />
            within budget. By prioritizing customer satisfaction and upholding our <br />
            reputation for quality, we ensure every detail reflects our unwavering <br />
            dedication to excellence.</p>

        </div>

        {/* we put an image here but all the text will be to the left of it */}
        <img className='oVphoto' src={image3} alt=""></img>

      </div>

    </div>
  )
}

export default About