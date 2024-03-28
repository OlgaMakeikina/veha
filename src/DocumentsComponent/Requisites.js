import React from 'react';
import { data } from './RequisitesData';
import './requisitesButton.css';

function Requisites() {
  return (
    <div className='requisites'>
      {data.map((item, index) => (
        <div key={index} className="requisites-item">
          <strong>{item.requisite}</strong> {item.text}
        </div>
      ))}
    </div>
  );
}

export default Requisites;