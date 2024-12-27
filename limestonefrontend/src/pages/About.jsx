import React from 'react'
import './About.css'
import image1 from '../assets/stock photo 2.jpg'
import logo from '../assets/HD LIMESTONE LOGO.png'

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>

      <div> Limestone Concrete <br /> "A little hint of Limestone" </div>

      <h1><img src={image1} alt=""></img></h1> <br/><br/>

      <div><img className="logo" src={logo} alt=""></img></div>

      <div>

        <h1>ABOUT LIMESTONE CONCRETE</h1>

        <body className="firstP">At Limestone Concrete, we’re a family-owned business in London, Ontario,<br />
          specializing in foundations for private properties. We take pride in <br />
          delivering quality work and reliable service for every project we take on.</body>


      </div>

      <div>

        <h1>OUR STANDARDS</h1>

        <body>At Limestone Concrete, we provide durable and reliable foundation solutions <br />
          tailored to your project's needs. From start to finish, we focus on quality <br />
          craftsmanship, timely service, and clear communication to ensure your property is <br />
          built on a strong and lasting foundation.</body>

      </div>

      {/* <div> 4 images go here and then we put text (quality, professionalism, efficiency, integrity)</div> */}

      <div>

        {/* we put an image here and then all the text will be on the right */}

        <h1>OUR VISION</h1>

        <body>At Limestone Concrete, our vision is to build more than just foundations—we <br />
          aim to lay the groundwork for trust, innovation, and enduring partnerships. We <br />
          strive to set the standard for excellence in our industry by combining modern <br />
          techniques with timeless craftsmanship. Driven by a passion for quality and a <br />
          commitment to our community, we envision a future where every project we complete <br />
          becomes a testament to our dedication and values.</body>

      </div>

      <div>

        {/* we put an image here but all the text will be to the left of it */}

        <h1>OUR DUTIES</h1>

        <body> At Limestone Concrete, our duties go beyond delivering exceptional foundations. <br />
          We are committed to maintaining the highest standards of safety, precision, and <br />
          professionalism on every job site. Our team takes pride in clear communication, <br />
          environmental responsibility, and ensuring each project is completed on time and <br />
          within budget. By prioritizing customer satisfaction and upholding our <br />
          reputation for quality, we ensure every detail reflects our unwavering <br />
          dedication to excellence.</body>

      </div>

    </div>
  )
}

export default About