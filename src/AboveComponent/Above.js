import logo from './logo.png';
import './above.css';
import { Link } from "react-router-dom";

function sendEmail() {
    window.location.href = 'mailto:vexa2008@mail.ru?subject=Вопрос с сайта&body=Здравствуйте, я хотел(а) бы задать вам вопрос:';
}
function Above() {
  return (
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

      <div>
      <p><a href="tel:8-800-550-14-12" className="phone">8-800-550-14-12 (бесплатно)</a></p>
      <p className='text_header'>Аварийная диспетчерская служба </p> 
      </div>

      <div>
      <p> <a href="tel:+7-915-068-15-45" className="phone">+7-915-068-15-45</a></p>
      <p className='text_header'>Аварийная диспетчерская служба </p>
      </div>    
      <div>
      <button className='header_btn' onClick={sendEmail}>Напишите нам</button>
      </div>
      </div>
  );
}

export default Above;
