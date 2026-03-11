import React from "react";
import { Helmet } from 'react-helmet';
import Footer from './FooterComponent/footer';
import PosBannerWidget from "./Uslugi";
import Carousel from "./Carousel";
import MultipleItems from "./NewsCarouselComponent/multiple";
import { useEffect } from "react";

const App = () => {


  useEffect(() => {
    // Создаем и вставляем скрипт Яндекс.Метрики
    (function(m, e, t, r, i, k, a) {
      m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments);
      };
      m[i].l = 1 * new Date();
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // Исключение для ESLint, чтобы определить глобальную переменную ym
    // eslint-disable-next-line no-undef
    ym(87981216, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }, []);



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
    </div>




  ) 
};

export default App;
