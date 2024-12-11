import React from 'react';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';

const Novogonie = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'>СРОКИ ВЫПУСКА ПЛАТЕЖНЫХ ДОКУМЕНТОВ В ПРЕДВЕРИИ НОВОГО ГОДА</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
<p><b>Уважаемые жители Московской области!</b><p></p>
<p>В преддверии новогодних праздников срок выпуска платёжных документов ООО «МосОблЕИРЦ» традиционно сдвигается на более ранний период для того, чтобы жители могли рассчитаться за коммунальные услуги до наступления Нового года.</p>
<p>Счета с начислениями за декабрь большинство жителей Московской области получат <b>до 24 декабря.</b></p>
<p>Обращаем внимание, что приём показаний индивидуальных приборов учета (ИПУ) воды и тепловой энергии завершится <b>12 декабря.</b> В том случае, 
если вы не успели передать показания, плата за декабрь будет рассчитана по замещающей информации - среднемесячному потреблению либо нормативу.</p>
<p>Начисления за электро- и газоснабжение в декабре будут произведены без учёта показаний ИПУ.</p>
<p>В платёжном документе за январь 2025 года, с учётом показаний ИПУ, переданных в январе, будет произведен перерасчет платы за декабрь 2024 года.</p>
<p>На территориях, где применяется авансовый метод расчёта, сроки выпуска платёжных документов и передачи показаний не меняются.</p>

      </p>
      </div>
    </div> 
    </article>

  );
};

export default Novogonie;