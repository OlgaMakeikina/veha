import React, { useState } from 'react';
import up from './up.png';
import downButton from './down-button.png';
import './accordion.css'

const Accordion = ({ panels }) => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleClick = (index) => {
    setOpenPanel(index === openPanel ? null : index);
  };

  const handleButtonClick = (documentName) => {
    window.open(process.env.PUBLIC_URL + '/' + documentName, '_blank');
  };

  return (
    <div className='accordion_panel'>
      {panels.map((panel, index) => (
        <div key={index}>

          <button className="accordion_title" onClick={() => handleClick(index)}>
            {openPanel === index ? <img src={up} width="30px" alt="up" className="arrow" /> : <img src={downButton} width="30px" alt="downButton" className="arrow" />}
            {panel.title} 
          </button>
          {openPanel === index && (
            <div className="accordion_content">
             <p className='accordion_text'>{panel.description}</p> 
              {panel.buttons.map((button, buttonIndex) => (
                <button key={buttonIndex} className="accordion_btn" onClick={() => handleButtonClick(button.document)}>
                  {button.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
