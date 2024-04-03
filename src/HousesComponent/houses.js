import React from "react";
import './houses.css'
import HousesDataTabs from './housesDataTabs'; // Путь к вашему компоненту с вкладками
import { KomsomolskayaData } from './komsomolskaya';
import { ShkolnayaData } from "./shkolnaya";
import { SetevayaData } from './setevaya';
import { KlubnayaData } from "./klubnaya";
import { ShosseynayaData } from "./shosseynaya";
import { MogiltsiData } from "./mogiltsi";
import { TalitsiData } from "./talitsi";
import { ZavoodskayaData } from "./zavodskaya";
import { SrednayaData } from "./srednaya";
import { MendeleevaData } from "./mendeleeva";
import { KraynyayaData } from "./kraynyaya";
import { DurovaData } from "./durova";
import { LeninaData } from "./lenina";
import { YuzhnayaData } from "./yuzhnaya";
import { DalnyayaData } from "./dalnyaya";
import { EksperimantalnayaData } from "./eksperimentalnaya";
import { OrdzhonikidzeData } from "./ordzhonikidze";
import Footer from "../FooterComponent/footer";

const Houses = () => {
  return (
  <div>
 <div className="cont_header_houses">
       <h2 className="main_header_houses"><span className="span_header_houses">Жителям/ </span>МКД и договора управления</h2>
    </div>
<h3 className="street_houses">Софрино, ул. Дальняя</h3>
<HousesDataTabs data={DalnyayaData} />
<h3 className="street_houses">Софрино, ул. Дурова</h3>
<HousesDataTabs data={DurovaData} />
<h3 className="street_houses">Софрино, ул. Заводская</h3>
<HousesDataTabs data={ZavoodskayaData} />
<h3 className="street_houses">Софрино, ул. Клубная</h3>
<HousesDataTabs data={KlubnayaData} />
<h3 className="street_houses">Софрино, ул. Комсомольская</h3>
<HousesDataTabs data={KomsomolskayaData} />
<h3 className="street_houses">Софрино, ул. Крайняя</h3>
<HousesDataTabs data={KraynyayaData} />
<h3 className="street_houses">Софрино, ул. Ленина</h3>
<HousesDataTabs data={LeninaData} />
<h3 className="street_houses">Софрино, ул. Менделеева</h3>
<HousesDataTabs data={MendeleevaData} />
<h3 className="street_houses">Софрино, ул. Орджоникидзе</h3>
<HousesDataTabs data={OrdzhonikidzeData} />

<h3 className="street_houses">Софрино, ул. Сетевая</h3>
<HousesDataTabs data={SetevayaData} />
<h3 className="street_houses">Софрино, ул. Средняя</h3>
<HousesDataTabs data={SrednayaData} />
<h3 className="street_houses">Софрино, ул. Школьная</h3>
<HousesDataTabs data={ShkolnayaData} />
<h3 className="street_houses">Софрино, ул. Шоссейная</h3>
<HousesDataTabs data={ShosseynayaData} />
<h3 className="street_houses">Софрино, ул. 1-ая Южная</h3>
<HousesDataTabs data={YuzhnayaData} />
<h3 className="street_houses">Софрино, ул. Экспериментальная</h3>
<HousesDataTabs data={EksperimantalnayaData} />
<h3 className="street_houses">д. Могильцы</h3>
<HousesDataTabs data={MogiltsiData} />
<h3 className="street_houses">д. Талицы</h3>
<HousesDataTabs data={TalitsiData} />
<Footer />
  </div>
    )
};

export default Houses;
