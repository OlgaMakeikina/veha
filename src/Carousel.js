import React, { useState } from "react";
import Slider from "react-slick";
import './carousel.css';
import OneJpg from './1.jpg';
import OneWebp from './1.webp';
import OneAvif from './1.avif';
import TwoJpg from './2.jpg';
import TwoWebp from './2.webp';
import TwoAvif from './2.avif';
import ThreeJpg from './3.jpg';
import ThreeWebp from './3.webp';
import ThreeAvif from './3.avif';

function Slide({ jpg, webp, avif, alt, eager }) {
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={eager ? 'high' : undefined}
      />
    </picture>
  );
}

function Fade() {
  const [, setCurrentSlide] = useState(0);

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
          <Slide jpg={OneJpg} webp={OneWebp} avif={OneAvif} alt="Slide 1" eager />
        </div>
        <div>
          <Slide jpg={TwoJpg} webp={TwoWebp} avif={TwoAvif} alt="Slide 2" />
        </div>
        <div>
          <Slide jpg={ThreeJpg} webp={ThreeWebp} avif={ThreeAvif} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
