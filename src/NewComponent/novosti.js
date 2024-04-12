import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './news.css';
import { newsData } from './newsData';
import Footer from '../FooterComponent/footer';

const News = () => {
  return (
    <div>
      <div className="cont_header_news">
        <h2 className="main_header_news"><span className="span_header_news">Главная/ </span>Новости</h2>
      </div>
      <div className='news_container'>
        {newsData.map(newsItem => (
          <div className='news_box' key={newsItem.id}>
            <p>{newsItem.date}</p>
            <h3>{newsItem.title}</h3>
            <button className='news_btn' onClick={() => navigateToNews(newsItem.url)}>Подробнее &gt;&gt;</button>
          </div>
        ))}
      </div>
      <Routes> 
        {newsData.map(newsItem => (
          <Route key={newsItem.id} path={newsItem.url} element={<NewsItemContent title={newsItem.title} />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

const NewsItemContent = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

// Функция для перехода на страницу новости
const navigateToNews = (url) => {
  window.location.href = url; // Перенаправляем на указанный URL
};

export default News;
