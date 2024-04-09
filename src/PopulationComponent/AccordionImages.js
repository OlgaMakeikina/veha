import React, { useState } from 'react';
import up from './up.png';
import downButton from './down-button.png';
import './accordion.css'

const AccordionImages = ({ images }) => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleClick = (index) => {
    setOpenPanel(index === openPanel ? null : index);
  };

  const handleImageClick = (event) => {
    event.target.classList.toggle('zoomed'); 
  };

  return (
    <div className='accordion_panel'>
      {images.map((panel, index) => (
        <div key={index}>
          <button className="accordion_title" onClick={() => handleClick(index)}>
            {openPanel === index ? <img src={up} width="30px" alt="up" className="arrow" /> : <img src={downButton} width="30px" alt="downButton" className="arrow" />}
            {panel.title} 
          </button>

          {openPanel === index && (
            <div className="accordion_content">
              <p className='accordion_text'>{panel.description}</p> 
              {panel.images.map((image, imageIndex) => (
                <img 
                  key={imageIndex} 
                  src={image.src} 
                  alt={image.alt} 
                  onClick={handleImageClick} 
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionImages;
