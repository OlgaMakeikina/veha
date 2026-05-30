import React from 'react';
import { Helmet } from 'react-helmet-async';
import YouTube from 'react-youtube';
import '../news.css';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';


const Ozhkh = () => {
  // SSR / react-snap: window отсутствует — fallback на pathname по URL слугу страницы.
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/prosto-o-zhkh';
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex !== -1 && currentNewsIndex < newsData.length - 1
    ? currentNewsIndex + 1
    : null;

  const currentNews = newsData[currentNewsIndex];


 const getVideoWidth = () => {
  if (typeof window === 'undefined') return 800;
  const screenWidth = window.innerWidth;
  switch (true) {
    case screenWidth > 1200:
      return 800;
    case screenWidth > 900:
      return 600;
    case screenWidth > 600:
      return 400;
    default:
      return screenWidth - 40;
  }
};


const opts = {
  width: getVideoWidth(),
  playerVars: {
    // Дополнительные параметры для видеоплеера YouTube, если необходимо
  },
};

  return (
    <article>
      <Helmet defer={false}>
        <title>Просто о ЖКХ | ООО УК «ВЕХА»</title>
        <meta name="description" content="Простые ответы на вопросы о жилищно-коммунальном хозяйстве от управляющей компании ВЕХА." />
      </Helmet>
    <div>
     <h2 className='news_header'>ПРОСТО О ЖКХ</h2>
    <div className='news_content'>
    <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
    {currentNews && <p>Опубликовано {currentNews.date}</p>}
    <YouTube videoId="FjfmDNtKch8" opts={opts} />
    </div>
</div>
</article>
  );
};

export default Ozhkh;