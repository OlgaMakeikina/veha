import React from 'react';
import YouTube from 'react-youtube';
import '../news.css';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';


const Ozhkh = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;
 
  const currentNews = newsData[currentNewsIndex];

  return (
    <div>
     <h2 className='news_header'>ПРОСТО О ЖКХ</h2>
    <div className='news_content'>
    <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
    <p>Опубликовано {currentNews.date}</p>
    <YouTube videoId="FjfmDNtKch8" />
    </div>
</div>
  );
};

export default Ozhkh;