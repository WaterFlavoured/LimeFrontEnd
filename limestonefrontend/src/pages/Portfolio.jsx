import React, { useState } from 'react';
import './Portfolio.css';
import image1 from '../assets/PortfolioPhotos/P1.jpg';
import image2 from '../assets/PortfolioPhotos/P2.jpg';
import image3 from '../assets/PortfolioPhotos/P3.jpg';
import image4 from '../assets/PortfolioPhotos/P4.jpg';
import image5 from '../assets/PortfolioPhotos/P5.jpg';
import image6 from '../assets/PortfolioPhotos/P6.jpg';
import image7 from '../assets/PortfolioPhotos/P7.jpg';
import image8 from '../assets/PortfolioPhotos/P8.jpg';
import image9 from '../assets/PortfolioPhotos/P9.jpg';
import image10 from '../assets/PortfolioPhotos/P10.jpg';
import image11 from '../assets/PortfolioPhotos/P11.jpg';
import image12 from '../assets/PortfolioPhotos/P12.jpg';
import image13 from '../assets/PortfolioPhotos/P13.jpg';
import image14 from '../assets/PortfolioPhotos/P14.jpg';

const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [caption, setCaption] = useState('');

  const openModal = (src, alt) => {
    setCurrentImage(src);
    setCaption(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
    setCaption('');
  };

  const images = [
    { src: image1, alt: '' },
    { src: image2, alt: '' },
    { src: image3, alt: '' },
    { src: image4, alt: '' },
    { src: image5, alt: '' },
    { src: image6, alt: '' },
    { src: image7, alt: '' },
    { src: image8, alt: '' },
    { src: image9, alt: '' },
    { src: image10, alt: '' },
    { src: image11, alt: '' },
    { src: image12, alt: '' },
    { src: image13, alt: '' },
    { src: image14, alt: '' },

  ];

  return (
    <div className='portfolio'>
      <header>
        <h1>Our Portfolio</h1>
        <p>Discover our completed projects showcasing quality craftsmanship and design.</p>
      </header>

      <section className='portfolio-grid'>
        {images.map((image, index) => (
          <div className='portfolio-item' key={index}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image.src, image.alt)}
            />
            <div className='portfolio-overlay'></div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal' onClick={closeModal}>
          <span className='close' onClick={closeModal}>&times;</span>
          <img className='modal-content' src={currentImage} alt={caption} />
          <div className='caption'>{caption}</div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
