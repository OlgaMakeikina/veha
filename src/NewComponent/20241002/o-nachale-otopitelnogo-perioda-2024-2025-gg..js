import React from 'react';
import Content from './photo_2024-10-02_10-41-44.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const OtopitelnyyPeriodNachalo = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'>О НАЧАЛЕ ОТОПИТЕЛЬНОГО ПЕРИОДА 2024-2025 ГГ.</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <a href="/news/Otopitelnyy period 2024-2025.pdf" target="_blank" rel="noopener noreferrer">Скачать Постановление</a>
        <img src={Content} alt="Content" />
      </div>
    </div> 
    </article>

  );
};

export default OtopitelnyyPeriodNachalo;