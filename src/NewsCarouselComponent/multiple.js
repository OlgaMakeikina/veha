import React from "react";
import Slider from "react-slick";
import { newsData } from "../NewComponent/newsData";
import './newsCarousel.css';

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
    <div className="slider-container">
      <Slider {...settings}>
      {newsData.map((item, index) => (
  <div className="slick-slide" key={index}>
    <div className="main_news_box">
      <p>{item.date}</p>
      <h3>{item.title}</h3>
      <a href={item.url}>Читать подробнее &raquo;&raquo;</a>
    </div>
  </div>

))}

      </Slider>
    </div>  
    </section>
  );
}

export default MultipleItems;