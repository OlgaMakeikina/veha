import React from 'react';

const AccordionPanel = ({ title, content, isOpen, togglePanel }) => {


    
    return (
      <div className='accordion_panel'>
        <button className='accordion_toggle' onClick={togglePanel}>{title}</button>
        {isOpen && <div className='content_accordion '>{content}</div>}
      </div>
    );
  };

export default AccordionPanel