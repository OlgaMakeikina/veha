import React from 'react';
import ContentTwo from './contentTwo.jpg';
import ContentOne from './contentOne.jpg';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const EdinyyPlatezhnyy = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
    <div>
      <h2 className='news_header'>ИНФОРМИРОВАНИЕ НАСЕЛЕНИЯ О ПОЛУЧЕНИИ ЭЛЕКТРОННОГО ЕДИНОГО ПЛАТЕЖНОГО ДОКУМЕНТА (ЭЕПД)</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <p><b> Единый платежный документ (ЕПД) используется для оплаты предоставленных гражданам коммунальных услуг, услуг по ремонту  
и содержанию жилого помещения и иных услуг (взносов), предоставленных гражданам в рамках эксплуатации жилого помещения и общего имущества  
в МКД.</b></p>
<p><b>Единая система расчетов за коммунальные услуги имеет ряд преимуществ:</b></p>
<ul className='system'>
  <li>удобные онлайн сервисы (платежи без комиссии при оплате картой любого банка, передача показаний счетчиков, получение ответов специалистов на вопросы по расчетам и начислениям, автоматический расчёт льгот); </li>
  <li>коммунальный «Кэшбэк» 1% при оплате картой МИР; </li>
  <li>программа лояльности коммунальный бонус – акции и скидки у партнеров программы (различные кафе, магазины, онлайн кинотеатры и др.); </li>
  <li>управление своим лицевым счетом за ЖКУ со смартфона; </li>
  <li>прозрачность и законность начислений (тарифы, нормативы, применяемые правила расчетов); </li>
  <li>гарантированное поступление платежей на Ваш лицевой счет и перечисление денежных средств поставщикам услуг и ресурсов, обслуживающих Ваш дом.  </li>
</ul>
<p>Теперь можно полностью отказаться от бумажных квитанций и получать квитанции только в электронном виде. Благодаря цифровизации Вы сможете оплачивать услуги более оперативно и при этом помогать экологии. Подписаться на получение электронного ЕПД можно на сайте и в мобильном приложении «МосОблЕИРЦ Онлайн». После успешного оформления подписки электронный платежный документ будет направлен по адресу электронной почты, указанной при регистрации. 
ЕПД позволит Вам планировать свой бюджет, экономить время и получать выгоды.
      </p>
        <img src={ContentOne} width="60%" alt="Content" />
        <img src={ContentTwo} width="60%" alt="Content" />

      </div>
    </div>
    </article>
  );
};

export default EdinyyPlatezhnyy;