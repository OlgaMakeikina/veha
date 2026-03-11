
import React from 'react';
import { Helmet } from 'react-helmet';
import { newsData } from '../newsData';
import Content from './zastavka.jpg';
import NavigationButtons from '../navigationButtons';

const EcoIgry = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
      <Helmet>
        <title>Старт первых экологических игр в Подмосковье | ООО УК «ВЕХА»</title>
        <meta name="description" content="Анонс первых экологических игр в Московской области для жителей Пушкинского района." />
      </Helmet>
         <div>
      <h2 className='news_header'>ПЕРВЫЕ ЭКОЛОГИЧЕСКИЕ ИГРЫ В ПОДМОСКОВЬЕ</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
       <p><strong>🌱 Экологические игры 2025 стартуют в Подмосковье</strong></p>
    
       <img src={Content} alt="Content" width="80%"/> 
         <a href="/news/ecoigry_2025.pdf" target="_blank" rel="noopener noreferrer">СКАЧАТЬ ПРЕЗЕНТАЦИЮ</a>
<p>
  31 марта в Московской области стартует новый экологический проект — <strong>«Экологические игры 2025»</strong>, запущенный Министерством по содержанию территорий и государственному жилищному надзору Московской области совместно с Российским экологическим оператором (<a href="https://t.me/reo_ru" target="_blank" rel="noopener noreferrer">REO в Telegram</a>).
</p>

<p>
  Подробнее на сайте: <a href="https://eco-games.ru/" target="_blank" rel="noopener noreferrer">eco-games.ru</a>
</p>

<p>
  🖥 Каждую неделю участники будут получать задания, за выполнение которых начисляются баллы. Примеры заданий:
</p>
<ul>
  <li>поиск ближайших пунктов приёма текстиля, батареек, фандоматов и их отметка на карте;</li>
  <li>сдача вторсырья;</li>
  <li>поиск и фиксация несанкционированных свалок;</li>
  <li>другие простые действия, способствующие экологии региона.</li>
</ul>

<p>
  «Мы впервые запускаем в регионе проект такого масштаба в цифровом формате. Задания рассчитаны на широкую аудиторию — от детей до пожилых. Цель — вовлечение жителей в экологическую повестку и рост объёма перерабатываемых отходов», — отметил Владислав Мурашов, заместитель председателя Правительства МО.
</p>

<p><strong>Как стать участником:</strong></p>
<ol>
  <li>
    Скачать приложение <strong>«Уберу»</strong>:
    <ul>
      <li><a href="https://apps.apple.com/ru/app/uberu/id6462873502" target="_blank" rel="noopener noreferrer">App Store</a></li>
      <li><a href="https://play.google.com/store/apps/details?id=com.uberu" target="_blank" rel="noopener noreferrer">Google Play</a></li>
      <li><a href="https://apps.rustore.ru/app/com.uberu" target="_blank" rel="noopener noreferrer">Rustore</a></li>
      <li><a href="https://appgallery.huawei.ru/app/C109031345" target="_blank" rel="noopener noreferrer">AppGallery</a></li>
    </ul>
  </li>
  <li>Зарегистрироваться</li>
  <li>Проходить еженедельные задания</li>
  <li>Прикладывать фотоотчёты</li>
</ol>

<p>
  💬 «Экопросвещение помогает людям менять образ жизни, вырабатывать привычки сортировки и переработки отходов. Важно, чтобы и дети, и взрослые понимали, как работает экономика замкнутого цикла и как они лично могут повлиять на состояние окружающей среды», — подчёркивают организаторы.
</p>

      </div>
    </div> 
    </article>

  );
};

export default EcoIgry;














