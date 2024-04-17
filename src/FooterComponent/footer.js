import './footer.css'
import React from 'react';
import FooterItem from './footerItem';
import { FooterData } from './footerData';
import FooterMap from './footerMap';


const Footer = () => {
    return (

<div className='cont_footer'>
           
    <div className='footer_content'>      
        <div className='mobile_footer_item'>
            {FooterData.map((item, index) => (
            <FooterItem key={index} picture={item.picture} text={item.text} />
            ))}    
        </div>
            <FooterMap />
    </div>

    <hr></hr>
    <p className='last_string'>ООО "Веха" - официальный сайт управляющей компании</p>
    </div>
)
};



export default Footer;