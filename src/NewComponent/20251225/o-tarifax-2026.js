import React from 'react';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const OTarifax2026 = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'> ПОСТАНОВЛЕНИЕ ОБ ИЗМЕНЕНИИ ТАРИФОВ НА 2026Г.</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <a href="/news/Prikaz 2026.pdf" target="_blank" rel="noopener noreferrer">Скачать Приказ №54-пр от 29.12.2025 "О введении в действие тарифов на услуги водоснабжения, водоотведения и теплоснабжения на 2026г."</a>
       <a href="/news/O razmere platy za soderzhanie.doc" target="_blank" rel="noopener noreferrer">Скачать Постановление №8089-ПА от 24.12.2025 Об установлении размера платы за содержание жилого помещения</a>
      </div>
    </div> 
    </article>

  );
};

export default OTarifax2026;