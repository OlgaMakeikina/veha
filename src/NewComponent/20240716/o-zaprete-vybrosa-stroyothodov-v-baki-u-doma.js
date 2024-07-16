import React from 'react';
import Content from './12_07_2024.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const Stroyothody = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
    <div>
      <h2 className='news_header'>ИНФОРМИРОВАНИЕ ЖИТЕЛЕЙ О НЕОБХОДИМОСТИ НАДЛЕЖАЩЕГО ВЫВОЗА СТРОЙОТХОДОВ</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <p>
        <a href="https://stroyothody.mosreg.ru/" target="_blank" rel="noopener noreferrer">
           Перейти на Портал обращения со стройотходами 
        </a>
      </p>
        <img src={Content} width="60%" alt="Content" />
      </div>
    </div>
    </article>
  );
};

export default Stroyothody;