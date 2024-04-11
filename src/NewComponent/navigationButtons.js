import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from './newsData';
import './news.css';
const NavigationButtons = ({ prevNewsIndex, nextNewsIndex }) => {
  return (
    <div className='navigation_news'>
      {prevNewsIndex !== null && <Link to={newsData[prevNewsIndex].url}><button className='navigation_news_btn'>&lt;&lt; Следующая новость</button></Link>}
      {nextNewsIndex !== null && <Link to={newsData[nextNewsIndex].url}><button className='navigation_news_btn'>Предыдущая новость &gt;&gt;</button></Link>}
    </div>
  );
};

export default NavigationButtons;