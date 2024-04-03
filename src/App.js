import React from "react";
import Carousel from './Carousel';
import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';

const App = () => {

  const images = [One, Two, Three];


  return (
    <div>
<Carousel images={images}/>  
<h2 className="header_contact">Последние новости</h2>  

</div>
   

  ) 
};

export default App;
