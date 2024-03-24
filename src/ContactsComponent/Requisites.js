import React from 'react';
import { data } from './RequisitesData';

function Requisites() {
return (
        <div className='requisites'>
          {data.map((item, index) => (
            <div key={index}>
              <p className='requisites_text'><strong>{item.requisite}</strong> {item.text}</p>
            </div>
          ))}
           <button className='requisites_btn'>Скачать реквизиты в word</button>
        </div>
      );
    };

export default Requisites;
