import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { newsData } from "../NewComponent/newsData";
import './newsCarousel.css';
const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel
        swipeable={props.swipeable}
        draggable={true}
        showDots={props.showDots}
        responsive={responsive}
        ssr={props.ssr}
        infinite={props.infinite}
        autoPlay={false}
        autoPlaySpeed={props.autoPlaySpeed}
        keyBoardControl={props.keyBoardControl}
        customTransition="transform 500ms ease"
        transitionDuration={500}
        containerClass={props.containerClass}
        removeArrowOnDeviceType={props.removeArrowOnDeviceType}
        deviceType={props.deviceType}
        dotListClass={props.dotListClass}
        itemClass={props.itemClass}
        arrows={true}
        customButtonGroup={<CustomButtonGroup />}
       
      >
        {newsData.map((item, index) => (
          <div className="main_news_box" key={index}>
            <p>{item.date}</p>
            <h3>{item.title}</h3>
            <a href={item.url}>Читать подробнее &raquo;&raquo;</a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomButtonGroup = ({ next, previous, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group">
      <button className="react-multi-carousel-arrow-left" onClick={() => previous()}>{'<'}</button>
      <button onClick={() => next()}>{'>'}</button>
    </div>
  );
};

const CustomDot = ({ index, activeIndex, handleClick }) => {
  return (
    <button
      className={`custom-dot ${index === activeIndex ? 'active' : ''}`}
      onClick={() => handleClick(index)}
    />
  );
};

export default MyCarousel;
