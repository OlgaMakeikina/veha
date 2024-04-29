import React from "react";
import { sanitarData } from "./sanitarData";
import './sanitar.css'
import Footer from "../FooterComponent/footer";
const Sanitar = () => {
  return (
  <div>
 <div className="cont_header_sanitar">
       <h2 className="main_header_sanitar"><span className="span_header_sanitar">Жителям/ </span>График санитарной уборки домов</h2>
    </div>

<div className="sanitar">
  <div>
     <h4>Наименование ОМСУ</h4> 
     <p>Пушкинский городской округ Московскй области</p>
  </div>
  <div>
     <h4>Наименование УО</h4> 
     <p>ООО «Веха»</p>
  </div>
  <div>
     <h4>Ответственный</h4>
     <p>Лукоянова Т.Н.</p>
  </div>
  <div>
  <h4>Телефон</h4>
   <p><a href="tel:8-496-531-31-00">8-496-531-31-00</a></p>
  </div>      
  <div>
     <h4>Телефон</h4>
      <p><a href="tel:8-929-555-43-66">8-929-555-43-66</a></p>
  </div>      
      </div>

<div className="sanitar_cont">
<div className="sanitar_box">
        <h4>№ п/п</h4>
        <h4>Адрес МКД</h4>
        <h4>Время проведения ежедневной обработки</h4>
      </div>
    {sanitarData.map((item) => (
        <div className="sanitar_box" key={item.id}>
            <p>{item.id}</p>
            <p>{item.address}</p>
            <p>{item.time}</p>
            </div>
    ))}
</div>
<Footer />
  </div>
    )
};

export default Sanitar;
