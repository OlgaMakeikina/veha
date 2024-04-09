import React from "react";
import { financeData } from './financeData';
import './finance.css';
import invoice from './invoice.png';
import Footer from "../FooterComponent/footer";

const Accounting = () => {
  return (
    <div>
      <div className="cont_header_finance">
        <h2 className="main_header_finance"><span className="span_header">О компании/ </span>Годовая финансовая отчетность</h2>
      </div>

      <div className="box_finance">
        {financeData.map((item, index) => (
           <div className="content_finance" key={index}>  
            <h3 className="finance_year">{item.year}</h3>
            <img src={invoice}  alt="invoice" />
            <p className="">{item.description}</p>
            <a className="finance_btn" href={process.env.PUBLIC_URL + '/' + item.file} target="_blank" rel="noopener noreferrer">Ознакомиться</a>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
};

export default Accounting;
