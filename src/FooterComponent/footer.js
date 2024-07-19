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
    <p className='last_string'>Copyright © 2024. ООО Управляющая компания "ВЕХА" (<a href="https://ooovexa.ru/">https://ooovexa.ru/</a>)</p>
            <p className='last_string'>All Rights Reserved, никакая часть данного документа не может быть воспроизведена в какой-то бы ни было форме без разрешения владельца авторских прав.</p>
            <p className='last_string'>© 2011-2024 Разработка сайта, поддержка и хостинг - <a href="https://hhivp.com/" target="_blank">ООО "АйТи Решения"</a></p>
    </div>
    </footer>
)
};



export default Footer;