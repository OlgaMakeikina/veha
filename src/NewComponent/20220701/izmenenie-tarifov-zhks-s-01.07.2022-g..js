import React from 'react';
import '../news.css';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const IzmeneniyaTarifov = () => {
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
    <p><b>Уважаемые жители, уведомляем Вас об изменении тарифов ЖКС с 01.07.2022 г. в соответствии с постановлением № 1686-ПА от 27.05.2022 г.</b></p>
    <a href="/news/Postanovlenie_01_07_2022.pdf" target="_blank" rel="noopener noreferrer">Скачать Распоряжение</a>
    </div>
    </div>
  );
};

export default IzmeneniyaTarifov;