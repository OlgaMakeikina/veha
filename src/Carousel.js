import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 5000;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Добавляем функцию для переключения слайдов автоматически
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
