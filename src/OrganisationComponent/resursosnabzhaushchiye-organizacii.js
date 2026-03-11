import React from "react";
import { Helmet } from 'react-helmet';
import './organisations.css'
import OrganisationsComponent from "./organisatioinsComponent";
import { organisationsData } from "./organisationsData";
import Footer from "../FooterComponent/footer";

const Organisations = () => {
  return (
    <section>
      <Helmet>
        <title>Ресурсоснабжающие организации | ООО УК «ВЕХА»</title>
        <meta name="description" content="Поставщики коммунальных ресурсов и подрядчики, оказывающие услуги в домах под управлением УК ВЕХА." />
      </Helmet>
      <div>
    <div className="cont_header_organisations">
       <h2 className="main_header_organisations"><span className="span_header_organisations">Жителям/ </span>Ресурсоснабжающие и подрядные организации, поставщики услуг МКД</h2>
    </div>
<OrganisationsComponent organisationsData={organisationsData}/>
<Footer />
  </div>  
    </section>

    )
};

export default Organisations;
