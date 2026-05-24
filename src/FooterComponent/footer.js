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
            <p className='last_string' style={{ marginTop: '1.2em' }}>
              <a href="https://hhivp.com/" target="_blank" rel="noopener" className="hhivp-credit" aria-label="Сделано в hhivp.com">
                <span className="hhivp-credit-mark" aria-hidden="true">
                  <img src="/hhivp-mark.svg" alt="" width="20" height="20" />
                </span>
                <span className="hhivp-credit-text">Сделано&nbsp;в&nbsp;hhivp.com</span>
              </a>
            </p>
    </div>
    </footer>
)
};



export default Footer;