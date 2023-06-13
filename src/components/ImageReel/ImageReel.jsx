import React from 'react'
import './ImageReel.css';
import { useState, useEffect } from 'react';

const ImageReel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Reel Image" />
    </div>
  );
};

export default ImageReel;