import logo from './logo.png';
import './above.css';
import { Link } from "react-router-dom";
import mail from './icons8-mail-96.png';
import vk from './icons8-vk-96.png';
import telegram from './icons8-telegram-96.png';


function sendEmail() {
    window.location.href = 'mailto:vexa2008@mail.ru?subject=Вопрос с сайта&body=Здравствуйте, я хотел(а) бы задать вам вопрос:';
}
function Above() {
  return (
    <header>
     <div className='header'>
      <div className='logo'>
      <Link to="/" className="logo">
      <img src={logo} width="150px" alt="Logo" />  
      <div className='logo_name'>
     <p className='company_name'>УПРАВЛЯЮЩАЯ КОМПАНЯ</p>
     <p className='company_name'>ООО ВЕХА</p> 
      </div>
      </Link>
      </div>

      <div className='emergency_contacts_main'>
      <p><a href="tel:8-800-550-14-12" className="phone">8-800-550-14-12</a></p>
      <p className='text_header'>Аварийная диспетчерская служба </p> 
      </div>

      <div className='emergency_contacts_main'>
      <p> <a href="tel:+7-915-068-15-45" className="phone">+7-915-068-15-45</a></p>
      <p className='text_header'>Аварийная диспетчерская служба </p>
      </div>    

      <div className='buttons_above'>
      <div className='emergency_contacts_main_btn'>
      <a href="https://t.me/veha_sofrino" target="_blank" title="Открыть в Telegram">
         <button className='header_btn'>
            <img src={telegram} width="40px" alt="Telegram"/>
         </button>
      </a>
      </div>  
      <div className='emergency_contacts_main_btn'>
      <button className='header_btn' onClick={sendEmail} title="Отправить e-mail"><img src={mail} width="40px"/></button>
      </div>
      <div className='emergency_contacts_main_btn'>
      <a href="https://vk.com/ooovexa" target="_blank" title="Открыть ВКонтакте">
      <button className='header_btn'>
         <img src={vk} width="40px" alt="VK"/>
      </button>
      </a>
      </div>

      </div>
      </div> 
    </header>
    
  );
}

export default Above;
