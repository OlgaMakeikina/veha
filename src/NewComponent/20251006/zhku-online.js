import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';
import Content from './q59HhFXu6ac.jpg';

const ZhkuOnline = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'> ПЛАТИТЕ ЗА ЖКУ ОНЛАЙН</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
        <img src={Content} width="60%" alt="Content" />
      </div>
    </div> 
    </article>

  );
};

export default ZhkuOnline;