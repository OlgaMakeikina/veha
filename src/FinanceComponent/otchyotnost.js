import React from "react";
import { financeData } from './financeData';
import './finance.css';
import invoice from './invoice.png';
import Footer from "../FooterComponent/footer";

const Accounting = () => {
  return (
    <section>
    <div>
      <div className="cont_header_finance">
        <h2 className="main_header_finance"><span className="span_header">О компании/ </span>Годовая финансовая отчетность</h2>
      </div>

      <div className="box_finance">
        {financeData.map((item, index) => (
           <div className="content_finance" key={index}>  
            <h3 className="finance_year">{item.year}</h3>
            <img src={invoice}  alt="invoice" />
            <div className="finance_buttons">
            <a className="finance_btn" href={process.env.PUBLIC_URL + '/' + item.file1} target="_blank" rel="noopener noreferrer">{item.description1}</a>
            <a className="finance_btn" href={process.env.PUBLIC_URL + '/' + item.file2} target="_blank" rel="noopener noreferrer">{item.description2}</a>
          </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    </section>
  )
};

export default Accounting;
