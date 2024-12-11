import React from 'react';
import call from './24.png';
import phone from './phone.png';
import address from './address.png';
import hours from './hours.png';
import mail from './mail.png';
import telegram from './telegram.png';
import vk from './vk.png';
import './contact.css'
import Map from './map';
import UsefulPhones from './UsefulPhones';
import Footer from '../FooterComponent/footer';
function Contact() {

  return (
    <section>
     <div>
      <Map />  
      <div className='emergency_phones'>
  
    <h3 className="heading_contacts">КРУГЛОСУТОЧНАЯ АВАРИЙНАЯ СЛУЖБА</h3>   
 
    <div className='phone_numbers'>
    <p className='phone_text'><a href="tel:8-800-550-14-12" className="phone_contacts">8-800-550-14-12 (бесплатно)</a> </p> 
      <img src={call} width="75px" alt="call"/>
    <p className='phone_text'><a href="tel:+7-915-068-15-45" className="phone_contacts">+7-915-068-15-45</a></p> 
    </div>
     
      </div>
  
  <hr className='hr_contacts'></hr>
 
 <h2 className="header_contact">Контакты компании</h2>

<div className='box_contacts'>

     <div className='info_contacts'>
        <img src={phone} width="75px" height="75px"  alt="phone number"/>
     <div>
       <p className="text_contacts"><a href="tel:8-800-550-14-12" className="phone_contacts"><span><b>Телефон: </b></span>8-800-550-14-12</a> </p> 
      <p className="text_contacts"><a href="tel:+7-915-068-15-45" className="phone_contacts"><span><b>Телефон: </b></span>+7-915-068-15-45</a></p> 
     </div>
      </div>

      <div className='info_contacts'>
       <img src={hours} width="75px" height="75px"  alt="calendar"/>
        <div>
        <p className="text_contacts"><span><b>ПН-ЧТ: </b></span>08.00 - 17.00</p>
        <p className="text_contacts"><span><b>ПТ: </b></span>08.00 - 15.45</p>
        <p className="text_contacts"><span><b>Перерыв: </b></span>12:00 - 12.45</p> 
        </div>
      </div>

      <div className='info_contacts'>
        <img src={address} width="75px" height="75px"  alt="phone number"/>
        <p className="text_contacts"><span><b>Адрес: </b></span>ул. Ленина, д. 4, п. Софрино, Пушкинский р-он., Московская обл., 141270</p>
      </div>  
      <div className='info_contacts'>
           <img src={mail} width="75px" height="75px"  alt="email"/>
           <div>
  <p className="text_contacts">
    <span><b>E-mail: </b></span>
    <a className="email_link" href="mailto:vexa2008@mail.ru">vexa2008@mail.ru</a>
  </p> 
</div>
      </div>



      <div className='info_contacts'>
           <img src={telegram} width="75px" height="75px"  alt="email"/>
        <div>
            <p className="text_contacts">
            <span><b>Telegram: </b></span>
            <a className="email_link" href="https://t.me/veha_sofrino">Наш Telegram</a>
            </p> 
        </div>
      </div>

      <div className='info_contacts'>
           <img src={vk} width="75px" height="75px"  alt="email"/>
        <div>
            <p className="text_contacts">
            <span><b>VK: </b></span>
            <a className="email_link" href="https://vk.com/ooovexa">Мы ВКонтакте</a>
            </p> 
        </div>
      </div>

</div>
    
   <div className='cont_requisites'>
 <h2 className="header_contact">Реквизиты компании</h2>
 <div className='cont_center_requisites'>
   <p className='actual_requisites'>Актуальные реквизиты организации для выставления счетов </p>
   <a href="requisites.pdf" target="_blank" rel="noopener noreferrer">
  <button className='requisites_btn'>Открыть в PDF</button>
</a>

 </div>
   </div>

<UsefulPhones />
<Footer />

</div> 
    </section>
    


  );
}

export default Contact;