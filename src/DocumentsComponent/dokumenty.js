import React from "react";
import { documentsData } from './documentsData';
import { taxesData } from "./taxesData";
import './documents.css'
import RequisitesButton from "./requisitesButton";
import Footer from "../FooterComponent/footer";

const Documents = () => {


  return (
    <section>
    <div>
    <div className="cont_header_documents">
      <h2 className="main_header_documents"><span className="span_header">О компании/ </span>Учредительные документы, лицензии и свидетельства</h2>
    </div>

<div>
  <RequisitesButton />
</div>
<div className="cont_doocuments">  
        {documentsData.map((item, index) => (
          <div key={index}>  
            <h3 className="heading_documents">{item.header}</h3>
            <div className="box_documents">
              <img src={item.image} width="150px" alt={item.header} />
              <p className="text_documents">{item.description}</p>
              <a className="documents_btn" href={process.env.PUBLIC_URL + '/' + item.file} target="_blank" rel="noopener noreferrer">Ознакомиться</a>
            </div>
          </div>
        ))}
    </div>

  <h3 className="heading_documents">СВИДЕТЕЛЬСТВА ФЕДЕРAЛЬНОЙ НАЛОГОВОЙ СЛУЖБЫ</h3>
  <div className="box_taxes">
    {taxesData.map((item, index) => (
          <div className="box_content" key={index}>  
  
              <img src={item.image} width="150px" alt={item.header} />
              <p className="text_documents">{item.description}</p>
              <a className="documents_btn" href={process.env.PUBLIC_URL + '/' + item.file} target="_blank" rel="noopener noreferrer">Ознакомиться</a>
            </div>
       
        ))}
    
      </div>

    <Footer />
    </div>
    </section>
  ) 
};

export default Documents;
