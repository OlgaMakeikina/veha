import React from 'react';
import Content from './95dcc9326ee0.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const PuteshestviyeVDetstvo = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <div>
      <h2 className='news_header'>ЖИТЕЛЕЙ ОКРУГА ПУШКИНСКИЙ ОЖИДАЕТ УВЛЕКАТЕЛЬНОЕ ПУТЕШЕСТВИЕ В ДЕТСТВО</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <p>1 июня приглашаю всех желающих посетить парки, скверы округа, где ребят и родителей будет увлекать мастер-классы, концертные программы, спортивные соревнования, игры и конкурсы. Представляю вниманию праздничную афишу.</p>
       <p>Встретим это лето ярко, с улыбками, в окружении дорогих детей.</p>
        <img src={Content} alt="Content" />
      </div>
    </div>
  );
};

export default PuteshestviyeVDetstvo;