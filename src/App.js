import React from "react";
import Carousel from './Carousel';
import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';
import Footer from './FooterComponent/footer';
import NewsApp from "./newsApp";


const App = () => {

  const images = [One, Two, Three];


  return (
    <div>
      
<Carousel images={images}/>  
<h2 className="header_main_page">Последние новости</h2>  
<NewsApp />
<Footer />
</div>


  ) 
};

export default App;
