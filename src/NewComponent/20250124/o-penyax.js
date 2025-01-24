import React from 'react';
import { newsData } from '../newsData';
import Content from './attachment (2).jpeg';
import NavigationButtons from '../navigationButtons';

const Peny = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
         <div>
      <h2 className='news_header'>КАК ПЕНИ ЗА НЕСВОЕВРЕМЕННУЮ ОПЛАТУ МОГУТ УВЕЛИЧИТЬ КОММУНАЛЬНЫЙ СЧЕТ</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
<p>С 2022 года Правительство Российской Федерации ограничило размер пени за несвоевременную и неполную оплату ЖКУ и взноса на капремонт. Пени на сумму долга начислялись по фиксированной ключевой ставке 9,5% (ПП РФ от 26.03.2022 № 474). С января 2025 года это ограничение больше не применяется и при начислении пени учитывается текущая ключевая ставка ЦБ РФ. В настоящий момент ее размер - 21%.</p>
<p><b>Как начисляются пени. </b> Рекомендованный срок оплаты ЖКУ - до 10 числа месяца, следующего за расчетным, если иное не установлено договором управления многоквартирным домом. Если счет вовремя не оплачен или оплачен не полностью, начиная с 31 дня просрочки платежа поставщики – управляющие или ресурсоснабжающие организации – могут принять решение о начислении пени. Пени начисляются за каждый день просрочки в процентах от суммы платежа. В первые три месяца это 1/300 ставки рефинансирования ЦБ, с 91 дня просрочки - 1/130 ставки.</p>
<p><b>Как не удорожать платеж.</b> Чем дольше не оплачен счет, тем больше пени.  Каждый день просроченного платежа увеличивает итоговую сумму к оплате. В платежных документах МосОблЕИРЦ указаны рекомендованные сроки и способы оплаты ЖКУ.   </p>
<img src={Content} alt="Content" />
      </div>
    </div> 
    </article>

  );
};

export default Peny;