import React from "react";
import './responsibility.css'
import {RespData} from './respData';
const Responsibility = () => {
  return (
    <div>
          <div className="cont_header_resp">
       <h2 className="main_header_resp"><span className="span_header_resp">Жителям/ </span>Сведения о привлечении к ответственности</h2>
    </div>
    <div className="resp_cont">
      <div className="resp_box">
        <h4>№ п/п</h4>
        <h4>Дата проведения проверки</h4>
        <h4>Адрес</h4>
        <h4>Причина</h4>
        <h4>Принятые меры</h4>
        <h4>Сумма штрафа т.руб.</h4>
        <h4>Оплата штрафа</h4>
        <h4>Документ</h4>
      </div>
      {RespData.map(item => (
        <div className="resp_box" key={item.id}>
          <p>{item.id}</p>
          <p>{item.date}</p>
          <p>{item.address}</p>
          <p>{item.reason}</p>
          <p>{item.measure}</p>
          <p>{item.amount}</p>
          <p>{item.payment}</p>
          <p>{item.document}</p>
        </div>
      ))}
    </div>
    </div>
  )
  

};

export default Responsibility;
