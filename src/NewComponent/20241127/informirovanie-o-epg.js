import React from 'react';
import Content from './content.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const InformirovanieOEPG = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'>  ИНФОРМИРОВАНИЕ ЖИТЕЛЕЙ О ПРЕИМУЩЕСТВАХ ПЕРЕХОДА НА ЭЛЕКТРОННЫЙ ЕДИНЫЙ ПЛАТЕЖНЫЙ ДОКУМЕНТ</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <p><b> Вместо бумажных платежек – электронные: удобно и экологично!</b></p>
<p><b>Единый платежный документ (ЕПД)</b>– новый формат документа для оплаты коммунальных услуг, а также услуг по ремонту и содержанию жилого помещения.</p>
<p>Вы сможете управлять своим лицевым счетом за ЖКУ со смартфона, оплачивать услуги более оперативно и при этом помогать экологии. </p>
<p>Подписаться на получение электронного ЕПД можно на сайте (https://clck.ru/FwK7t) и в мобильном приложении «МосОблЕИРЦ Онлайн». Подробная инструкция - в видео.</p>
<p>Напоминаем, что с 1 июля отменяется банковская комиссия при приеме платежей: в личном кабинете на сайте расчетного центра, в мобильном приложении «МосОблЕИРЦ Онлайн», в терминалах и на приеме у менеджеров в клиентских офисах расчетного центра.
      </p>
        <img src={Content} alt="Content" />
      </div>
    </div> 
    </article>

  );
};

export default InformirovanieOEPG;