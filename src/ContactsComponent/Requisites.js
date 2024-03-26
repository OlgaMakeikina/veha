import React from 'react';
import { data } from './RequisitesData';

function Requisites() {
return (
        <div className='requisites'>
          {data.map((item, index) => (
            <ul key={index}>
              <li className='requisites_text'><strong>{item.requisite}</strong> {item.text}</li>
            </ul>
          ))}
           <button className='requisites_btn'>Открыть в pdf</button>
        </div>
      );
    };

export default Requisites;
