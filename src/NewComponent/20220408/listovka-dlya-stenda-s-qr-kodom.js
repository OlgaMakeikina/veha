import React from 'react';
import '../news.css';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const Listovka = () => {
    const pathname = window.location.pathname;
    const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));
  
    const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
    const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

    const currentNews = newsData[currentNewsIndex];

  return (
    <div>
     <h2 className='news_header'>{currentNews.title}</h2>
    <div className='news_content'>
    <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
    <p>Опубликовано {currentNews.date}</p>
    <a href="/news/listovka_dlya_stenda.pdf" target="_blank" rel="noopener noreferrer">Листовка для стенда с QR-кодом (скачать)</a>
    </div>
    </div>
  );
};

export default Listovka;