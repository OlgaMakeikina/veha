import React from "react";
import { Helmet } from 'react-helmet-async';
import { aboutItems } from "./aboutItems";
import './aboutCompany.css'
import Footer from "../FooterComponent/footer";

const AboutCompany = () => {
  return (
    <section>
      <Helmet>
        <title>О компании | ООО УК «ВЕХА»</title>
        <meta name="description" content="Информация об управляющей компании ВЕХА. История, команда, принципы работы. Управление многоквартирными домами в Сергиево-Посадском районе." />
      </Helmet>
    <div>

        <div className='header_about'>
        <h1 className='heading_about'>Управляющая компания "ВЕХА"</h1> 
         <p className='header_text_about'>рада видеть Вас в числе наших новых заказчиков!</p> 
        </div>

         <div className="container_about">
        
         {aboutItems.map((item, index) => (
  <div className={`block_about ${item.layout === 'right' ? 'block_about_right' : ''}`} key={index}>
    {item.layout === 'left' && (
      <picture>
        <source srcSet={item.picture.avif} type="image/avif" />
        <source srcSet={item.picture.webp} type="image/webp" />
        <img className="img_about" src={item.picture.jpg} width="500" alt={item.slogan} loading="lazy" decoding="async" />
      </picture>
    )}
    <div className={`text_about text_about_${index}`} >
              <h3>{item.slogan}</h3>
              <p className="description_about">{item.textAbout}</p>
            </div>
    {item.layout === 'right' && (
      <picture>
        <source srcSet={item.picture.avif} type="image/avif" />
        <source srcSet={item.picture.webp} type="image/webp" />
        <img className="img_about" src={item.picture.jpg} width="500" alt={item.slogan} loading="lazy" decoding="async" />
      </picture>
    )}
  </div>
))}
 

    </div>
    <Footer />
    </div>
   </section>
    );
  }

export default AboutCompany;

