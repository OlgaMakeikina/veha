import React, { useState } from "react";
import Slider from "react-slick";
import './carousel.css';
import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';

function Fade() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    lazyLoad: true,
    centerMode: true,
    centerPadding: 0,
    arrows: true, 
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={One} alt="Slide 1" />
        </div>
        <div>
          <img src={Two} alt="Slide 2" />
        </div>
        <div>
          <img src={Three} alt="Slide 3" />
        </div>
      </Slider>

    </div>
  );
}

export default Fade;
