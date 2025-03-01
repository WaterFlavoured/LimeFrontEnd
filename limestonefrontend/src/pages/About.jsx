  import React, { useEffect, useRef } from 'react';
  import './About.css';
  import image1 from '../assets/AboutPhotos/photo3.jpg';
  import image2 from '../assets/AboutPhotos/DSC00681_batcheditor_fotor.jpg';
  import image3 from '../assets/AboutPhotos/DJI_0903_batcheditor_fotor.jpg';
  import image4 from '../assets/AboutPhotos/photo4.jpg';
  import image5 from '../assets/AboutPhotos/photo5.jpg';
  import logo from '../assets/HD LIMESTONE LOGO.png';

  const About = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        { threshold: 0.2 }
      );

      sectionsRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        sectionsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    }, []);

    return (
      <div className='about'>
        <div className='header fade-in' ref={(el) => sectionsRef.current[0] = el}>
          <h1 className='about-h1'>ABOUT</h1>
            <div className='imageHeaders'>

              <img src={image1} alt =''></img>
              <img src={image4} alt =''></img>
              <img src={image5} alt =''></img>

            </div>

          <div><img className='logo' src={logo} alt='' /></div>
          <div className='about-text'>
            <h1>ABOUT LIMESTONE CONCRETE</h1>
            <p>Limestone Concrete is a family-owned business in London, Ontario,<br />
              specializing in commercial and residential concrete projects. We take pride in <br />
              delivering quality work and reliable service for every project we take on.</p>
          </div>
        </div>
        
        <div className='tempBlock1 section slide-in-left' ref={(el) => sectionsRef.current[1] = el}>
          <div className='ourStandards'>
            <h1>OUR STANDARDS</h1>
            <p className='ourStanText'>We provide durable concrete services tailored to your project's <br />
            needs. From start to finish, we focus on quality craftsmanship, timely <br />
            service, and clear communication to ensure your property is <br />
              built on a strong and lasting foundation.</p>
          </div>
        </div>

        
        <div className='tempBlock2 section' ref={(el) => sectionsRef.current[2] = el}>
          <img className='oVphoto slide-in-right' src={image2} alt='' ref={(el) => sectionsRef.current[3] = el} />
          <div className='ourVis slide-in-left' ref={(el) => sectionsRef.current[4] = el}>
            <h1>OUR VISION</h1>
            <p className='ourVisText'> Our vision is to build more than just pouring concrete — we  
              aim to lay the groundwork for trust, innovation, and enduring partnerships. We 
              strive to set the standard for excellence in our industry by combining modern 
              techniques with timeless craftsmanship. Driven by a passion for quality and a 
              commitment to our community, we envision a future where every project we complete 
              becomes a testament to our dedication and values.</p>
          </div>
        </div>

        <div className='tempBlock3 section' ref={(el) => sectionsRef.current[5] = el}>
          <div className='ourDut slide-in-left' ref={(el) => sectionsRef.current[6] = el}>
            <h1>OUR VALUES</h1>
            <p className='ourDutiesText'> At Limestone Concrete, our duties go beyond delivering exceptional concrete services.
              We are committed to maintaining the highest standards of safety, precision, and 
              professionalism on every job site. Our team takes pride in clear communication, 
              environmental responsibility, and ensuring each project is completed on time and 
              within budget. By prioritizing customer satisfaction and upholding our 
              reputation for quality, we ensure every detail reflects our unwavering
              dedication to excellence.</p>
          </div>
          <img className='oVphoto slide-in-right' src={image3} alt='' ref={(el) => sectionsRef.current[7] = el} />
        </div>
      </div>
    );
  };

  export default About;
