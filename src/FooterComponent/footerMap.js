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
        <li><Link to="/contact">Контакты</Link></li>
        <li><Link to="/news">Новости</Link></li>
        </ul>      
        </div>
    <div>
        <h3>О КОМПАНИИ</h3>
        <ul>
        <li><Link to="/aboutCompany">О компании</Link></li>
        <li><Link to="/documents">Учредительные документы и свидетельства</Link></li>
        <li><Link to="/documents">Платежные реквизиты</Link></li>
        </ul>
    </div>
<div>
        <h3>ЖИТЕЛЯМ</h3>
        <ul>
        <li><Link to="/houses">Дома в управлении</Link></li>
        <li><Link to="/people">Информация для населения</Link></li>
        <li><Link to="/tarifs">Тарифы ЖКХ</Link></li>
        </ul>
</div>

        </div>
)
};



export default FooterMap;