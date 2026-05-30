import React from "react";
import { Helmet } from 'react-helmet-async';
import Footer from './FooterComponent/footer';
import PosBannerWidget from "./Uslugi";
import Carousel from "./Carousel";
import MultipleItems from "./NewsCarouselComponent/multiple";
import CookieBanner from "./CookieBanner";

// Яндекс.Метрика и Google Analytics активируются только после явного
// согласия пользователя — см. <CookieBanner /> и analyticsConsent.js.

const App = () => {
  return (
    <div>
      <Helmet>
        <title>ООО УК «ВЕХА» — управляющая компания ЖКХ Сергиево-Посадского района</title>
        <meta name="description" content="Официальный сайт управляющей компании ВЕХА. ЖКХ-услуги в Сергиево-Посадском районе, п. Софрино. Тарифы, документы, новости, информация по домам." />
      </Helmet>
          <section>
     <Carousel />
<PosBannerWidget />
<h2 className="header_main_page">Последние новости</h2>
<MultipleItems />
    </section>

<footer>
  <Footer />
</footer>
<CookieBanner />
    </div>
  )
};

export default App;
