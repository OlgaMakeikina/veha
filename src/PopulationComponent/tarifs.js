import React from "react";
import Accordion from "./accordion";
import accordionPanels from './accordionData';
import './population.css';

const Tarifs = () => {
  return (
  <div> 
    <div className="cont_header_services">
       <h2 className="main_header_services"><span className="span_header_services">О компании/ </span>Информация для населения</h2>
    </div>
    <Accordion panels={accordionPanels} />;
  </div>

  )
};

export default () => <Tarifs panels={accordionPanels} />;