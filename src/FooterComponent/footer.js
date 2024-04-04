import './footer.css'
import React from 'react';
import FooterItem from './footerItem';
import { FooterData } from './footerData'; // Предполагается, что файл с данными называется footerData.js

const Footer = () => {
    return (
        <div className='cont_footer'>
            {FooterData.map((item, index) => (
                <FooterItem key={index} picture={item.picture} text={item.text} />
            ))}
        </div>
    );
};



export default Footer;