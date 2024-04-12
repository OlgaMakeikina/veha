import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { newsData } from './NewComponent/newsData';
import './App.css'


const NewsApp = () => {
    const sliderRef = useRef();
    const PrevArrow = (props) => {
      const { onClick } = props;
      return <button onClick={onClick}>Previous</button>;
    };
    
    const NextArrow = (props) => {
      const { onClick } = props;
      return <button onClick={onClick}>Next</button>;
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
  
    return (
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {newsData.map(newsItem => (
            <div key={newsItem.id}>
              <p>{newsItem.date}</p>
              <h3>{newsItem.title}</h3>
              <button className='news_btn' onClick={() => navigateToNews(newsItem.url)}>Подробнее &gt;&gt;</button>
            </div>
          ))}
        </Slider>

      <Routes> 
        {newsData.map(newsItem => (
          <Route key={newsItem.id} path={newsItem.url} element={<NewsItemContent title={newsItem.title} />} />
        ))}
      </Routes>
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

export default NewsApp;
