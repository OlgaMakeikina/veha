import React from "react";
import { aboutItems } from "./aboutItems";
import './aboutCompany.css'

const AboutCompany = () => {
  return (
    <div>

        <div className='header_about'>
        <h1 className='heading_about'>Управляющая компания "ВЕХА"</h1> 
         <p className='header_text_about'>рада видеть Вас в числе наших новых заказчиков!</p> 
        </div>

         <div className="container_about">
        
         {aboutItems.map((item, index) => (
  <div className={`block_about ${item.layout === 'right' ? 'block_about_right' : ''}`} key={index}>
    {item.layout === 'left' && (
      <img className="img_about" src={item.picture} width="500px" alt={item.picture} />
    )}
    <div className="text_about">
      <h3>{item.slogan}</h3>
      <p>{item.textAbout}</p>
    </div>
    {item.layout === 'right' && (
      <img className="img_about" src={item.picture} width="500px" alt={item.picture} />
    )}
  </div>
))}
    

    </div>
    </div>

    );
  }

export default AboutCompany;

