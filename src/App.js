import React from "react";
import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';
import Footer from './FooterComponent/footer';
import PosBannerWidget from "./Uslugi";
import Carousel from "./Carousel";
import MultipleItems from "./NewsCarouselComponent/multiple";

const App = () => {

  const images = [One, Two, Three];


  return (
    <div>
          <section>
     <Carousel />
<PosBannerWidget />
<h2 className="header_main_page">Последние новости</h2>  
<MultipleItems /> 
    </section>
  
<footer>
  <Footer />
</footer>
    </div>




  ) 
};

export default App;
