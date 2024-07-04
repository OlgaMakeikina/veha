import React, { useState } from "react";
import { tarifDocData } from './tarifDocData';
import { waterData } from "./waterData";
import { warmData } from "./warmData";
import { gazData } from "./gazData";
import { energyData } from "./energyData";
import { tboData } from "./tboData";
import { housesData } from "./housesData";
import WaterDataComponent from './waterDataComponent';
import './tarifs.css';
import GazDataComponent from "./gazDataComponent";
import EnergyDataComponent from "./energyDataComponent";
import TboDataComponent from "./tboDataComponent";
import WarmDataComponent from "./warmDataComponent";
import Footer from "../FooterComponent/footer";
import HousesDataComponent from "./housesDataComponent";

const Tarifs = () => {
  const [showDocs, setShowDocs] = useState(false);

  const openDocument = (url) => {
    window.open(url, '_blank');
  };

  const toggleDocsVisibility = () => {
    setShowDocs(!showDocs);
  };

  return (
    <section>
       <div>
      <div className="cont_header_tarifs">
        <h2 className="main_header_tarifs"><span className="span_header_tarifs">Жителям/ </span>Тарифы на ЖКХ</h2>
      </div>
      <h2 className="tarif_information_header">ИНФОРМАЦИЯ О ТАРИФАХ НА КОММУНАЛЬНЫЕ УСЛУГИ, ДЕЙСТВУЮЩИЕ НА ТЕРРИТОРИИ ПУШКИНСКОГО ГОРОДСКОГО ОКРУГА С 01.07.2024Г.</h2>
      <div className="documents_tarifs_cont">
        <div>
        <h3>Распоряжения и Постановления</h3>
        <p>Официальная документация по ценам и тарифам</p>     
        </div>
        <button className="tarifs_btn" onClick={toggleDocsVisibility}>
          {showDocs ? 'Скрыть документы \u25B2' : 'Ознакомиться \u25BC'}
        </button> 
      </div>
      {showDocs && (
        <div className="documents_tarifs_list">
          {tarifDocData.map(item => (
            <div key={item.id} onClick={() => openDocument(item.url)} target="_blank" rel="noopener noreferrer">
            <p>{item.docName}</p>
            </div>
          ))}
        </div>
      )}
      <h3 className="header_table_tarifs">1. ТАРИФЫ НА УСЛУГИ ПИТЬЕВОЙ ВОДЫ, ВОДООТВЕДЕНИЯ И ОЧИСТКИ СТОЧНЫХ ВОД</h3>
      <WaterDataComponent waterData={waterData} />
      <h3 className="header_table_tarifs">2. ТАРИФЫ НА УСЛУГИ ТЕПЛОСНАБЖЕНИЯ</h3>
      <WarmDataComponent warmData={warmData} />
      <h3 className="header_table_tarifs">3. ТАРИФЫ НА УТИЛИЗАЦИЮ ТБО</h3>
      <TboDataComponent tboData={tboData} />
      <h3 className="header_table_tarifs">4. ЦЕНЫ (ТАРИФЫ ОДНОСТАВОЧНЫЕ) НА ЭЛЕКТРОЭНЕРГИЮ ДЛЯ НАСЕЛЕНИЯ МОСКОВСКОЙ ОБЛАСТИ C 01.07.2024Г.</h3>
      <EnergyDataComponent energyData={energyData} />
      <h3 className="header_table_tarifs">5. РАЗМЕР ПЛАТЫ ЗА ГАЗ ДЛЯ НАСЕЛЕНИЯ МОСКОВСКОЙ ОБЛАСТИ C 01.07.2024Г.</h3>
      <GazDataComponent gazData={gazData} />
      <h3 className="header_table_tarifs">6. РАЗМЕР ПЛАТЫ ЗА СОДЕРЖАНИЕ ЖИЛОГО ПОМЕЩЕНИЯ ДЛЯ НАНИМАТЕЛЕЙ ЖИЛЫХ ПОМЕЩЕНИЙ, СОГЛАСНО ПОСТАНОВЛЕНИЮ АДМИНИСТРАЦИИ Г.О. ПУШКИНСКИЙ МО ОТ 06.06.2024Г. №2327-ПА</h3>
      <HousesDataComponent housesData={housesData} />
      <Footer />
    </div>
    </section>
   
  );
};

export default Tarifs;

