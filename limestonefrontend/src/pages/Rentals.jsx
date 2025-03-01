import React, { useState, useEffect } from 'react';
import './Rentals.css';
import image1A from '../assets/RentalsPhotos/Stamp 1.jpg';
import image1B from '../assets/RentalsPhotos/Tamper Photo.jpg';
import image2A from '../assets/RentalsPhotos/Stamp 2.jpg';
import image3A from '../assets/RentalsPhotos/Stamp 3.jpg';
import image4A from '../assets/RentalsPhotos/Wire Mesh.jpg';

const rentalItems = [
  { id: 1, images: [image1A, image1B], title: "Brickform 23″ x 23″ Ashlar Cut Slate Mats", description: ["10 Pieces + Tamper", "$160/Day"]},
  { id: 2, images: [image2A, image1B], title: "Brickform Rough Stone Flexible 36x36in Stamp", description: ["10 Pieces + Tamper", "$160/Day"]},
  { id: 3, images: [image3A, image1B], title: "Large Ashlar Cut Slate", description: ["10 Pieces + Tamper", "$160/Day"]},
  { id: 4, images: [image4A, image4A], title: "4ft. x 8ft. 9-Gauge Wire Mesh Sheet", description: ["$10/Sheet", "4 ft. x 8 ft. 9-Gauge Wire Mesh Sheet is made from premium quality materials and the wires are welded together at each intersection for strength and durability."]}
];

const Rentals = () => {
  const [activeImages, setActiveImages] = useState(
    rentalItems.map(() => 0) // Tracks which image is active for each rental item
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages((prevActiveImages) =>
        prevActiveImages.map((index) => (index === 0 ? 1 : 0))
      );
    }, 6500); // Switch images every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rentals">
      <h1 className="header">RENTALS</h1>
      <div className="rental-items">
        {rentalItems.map((item, i) => (
          <div key={item.id} className="rental-box">
            <div className="image-container">
              <img
                src={item.images[0]}
                alt={`${item.title} Image 1`}
                className={`rental-image ${activeImages[i] === 0 ? 'visible' : ''}`}
              />
              <img
                src={item.images[1]}
                alt={`${item.title} Image 2`}
                className={`rental-image ${activeImages[i] === 1 ? 'visible' : ''}`}
              />
            </div>
            <div className="rental-description">
              <h3>{item.title}</h3>
              {item.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rentals;
