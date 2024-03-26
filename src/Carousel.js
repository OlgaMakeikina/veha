import React, { useState, useEffect } from 'react';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';

const Carousel = () => {
    const [images, setImages] = useState([image1, image2, image3]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Интервал смены изображений (в миллисекундах)
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              display: index === currentIndex ? 'block' : 'none',
              width: '100%' // Измените это значение на желаемую ширину, например, '50%' или '200px'
            }}
          />
        ))}
      </div>
    );
  };
  
  export default Carousel;