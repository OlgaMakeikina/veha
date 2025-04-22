import React from 'react';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const OtopitelnyyPeriodKonec = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'>ОБ ОКОНЧАНИИ ОТОПИТЕЛЬНОГО ПЕРИОДА 2024-2025 ГГ.</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <a href="/news/Otopitelnyy period okonchanie 24-25.pdf" target="_blank" rel="noopener noreferrer">Скачать Постановление</a>
      </div>
    </div> 
    </article>

  );
};

export default OtopitelnyyPeriodKonec;