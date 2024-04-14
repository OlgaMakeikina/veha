import React from "react";
import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';
import Footer from './FooterComponent/footer';
import MyCarousel from "./NewsCarouselComponent/newsCarousel";
import PosBannerWidget from "./Uslugi";
import Carousel from "./Carousel";

const App = () => {

  const images = [One, Two, Three];


  return (
    <div>
<Carousel />
<PosBannerWidget />
<h2 className="header_main_page">Последние новости</h2>  
<MyCarousel
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        deviceType="desktop"
      >
      </MyCarousel>
<Footer />
</div>


  ) 
};

export default App;
