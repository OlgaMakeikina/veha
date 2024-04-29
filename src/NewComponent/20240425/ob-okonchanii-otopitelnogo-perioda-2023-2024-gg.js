import React from 'react';
import Content from './38129da9a00b.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const OtopitelnyyPeriodEnd = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <div>
      <h2 className='news_header'>ОБ ОКОНЧАНИИ ОТОПИТЕЛЬНОГО ПЕРИОДА 2023-2024 ГГ.</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
        <img src={Content} alt="Content" />
      </div>
    </div>
  );
};

export default OtopitelnyyPeriodEnd;