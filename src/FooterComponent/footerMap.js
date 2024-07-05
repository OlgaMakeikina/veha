import './footer.css'
import React from 'react';
import { Link } from 'react-router-dom';


const FooterMap = () => {
    return (
    <div className='footer_map'>
        <div>
              <h3>КАРТА САЙТА</h3>
        <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/kontakty">Контакты</Link></li>
        <li><Link to="/novosti">Новости</Link></li>
        </ul>      
        </div>
    <div>
        <h3>О КОМПАНИИ</h3>
        <ul>
        <li><Link to="/o-kompanii">О компании</Link></li>
        <li><Link to="/dokumenty">Учредительные документы и свидетельства</Link></li>
        <li><Link to="/dokumenty">Платежные реквизиты</Link></li>
        </ul>
    </div>
<div>
        <h3>ЖИТЕЛЯМ</h3>
        <ul>
        <li><Link to="/doma-v-upravlenii">Дома в управлении</Link></li>
        <li><Link to="/informatsiya-dlya-naseleniya">Информация для населения</Link></li>
        <li><Link to="/tarify-na-zhkh">Тарифы ЖКХ</Link></li>
        </ul>
</div>

        </div>
)
};



export default FooterMap;