import React from 'react';
import '../news.css';
import Content from './955c81631539.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const Nachisleniya = () => {
    const pathname = window.location.pathname;
    const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));
  
    const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
    const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;
  

  return (
    <div>
     <h2 className='news_header'>ВОПРОСЫ О НАЧИЛЕНИЯХ ЗА ЖКУ?</h2>
    <div className='news_content'>
    <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
    <p>Опубликовано 23.09.2022</p>
    <img src={Content} />
    </div>
</div>
  );
};

export default Nachisleniya;