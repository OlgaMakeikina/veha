import React, { useState } from 'react';
import AccordionPanel from './accordionPanel';
const Accordion = ({ panels }) => {
    const [openPanelIndex, setOpenPanelIndex] = useState(null);
  
    const togglePanel = (index) => {
      setOpenPanelIndex(openPanelIndex === index ? null : index);
    };
  
    return (
      <div>
        {panels.map((panel, index) => (
          <AccordionPanel
            key={index}
            title={panel.title}
            content={panel.content}
            isOpen={openPanelIndex === index}
            togglePanel={() => togglePanel(index)}
          />
        ))}
      </div>
    );
  };
  
  export default Accordion;