import React from "react";
import Accordion from "./AccordionButtons";
import AccordionDataButtons from "./AccordionDataButtons";
import AccordionDataImage from "./AccordionDataImage";
import AccordionImages from "./AccordionImages";
import './population.css';
import Footer from "../FooterComponent/footer";

const People = () => {
  return (
  <div> 
    <div className="cont_header_services">
       <h2 className="main_header_services"><span className="span_header_services">Жителям/ </span>Информация для населения</h2>
    </div>
    <Accordion panels={AccordionDataButtons} />
    <AccordionImages images={AccordionDataImage} />
    <br/><br/>
    <Footer />
  </div>

  )
};

export default () => <People 
panels={AccordionDataButtons} 
images ={AccordionDataImage} />;