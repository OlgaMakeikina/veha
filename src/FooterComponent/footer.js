import './footer.css'
import React from 'react';
import FooterItem from './footerItem';
import { FooterData } from './footerData';
import FooterMap from './footerMap';


const Footer = () => {
    return (
<footer>
<div className='cont_footer'>
           
    <div className='footer_content'>      
        <div className='mobile_footer_item'>
        {FooterData.map((item, index) => (
        <FooterItem key={index} item={item} />
      ))}
        </div>
            <FooterMap />
    </div>

    <hr></hr>
    <p className='last_string' style={{ marginTop: '1.2em' }}>Copyright © {new Date().getFullYear()}. ООО Управляющая компания "ВЕХА" (<a href="https://ooovexa.ru/">https://ooovexa.ru/</a>)</p>
            <p className='last_string' style={{ marginTop: '1.2em' }}>Сайт разработан и сопровождается техническим партнёром&nbsp;— <a href="https://hhivp.com/" target="_blank" rel="noopener">ООО «АйТи Решения»</a></p>
    </div>
    </footer>
)
};



export default Footer;