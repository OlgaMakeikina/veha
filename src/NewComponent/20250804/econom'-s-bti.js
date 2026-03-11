import { Helmet } from 'react-helmet';
import { newsData } from '../newsData';
import NavigationButtons from '../navigationButtons';
import Content from './bti.jpg';

const EconomSBTI = () => {
  const pathname = window.location.pathname;
  const currentNewsIndex = newsData.findIndex(item => pathname.includes(item.url));

  const prevNewsIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : null;
  const nextNewsIndex = currentNewsIndex < newsData.length - 1 ? currentNewsIndex + 1 : null;

  const currentNews = newsData[currentNewsIndex];

  return (
    <article>
      <Helmet>
        <title>Решайте вопросы с недвижимостью в БТИ | ООО УК «ВЕХА»</title>
        <meta name="description" content="Информация о сотрудничестве с БТИ для решения вопросов с недвижимостью." />
      </Helmet>
         <div>
      <h2 className='news_header'>Экономьте свое время – решайте вопросы с недвижимостью в БТИ Московской области!</h2>
      <div className='news_content'>
        <NavigationButtons prevNewsIndex={prevNewsIndex} nextNewsIndex={nextNewsIndex} />
       <p>Опубликовано {currentNews.date}</p>
        <img src={Content} width="60%" alt="Content" />
      <p><b>‼️ Избегайте проблем – оформляйте документы с профессионалами!</b></p>

      <h3>🏢 Наша работа:</h3>
      <ul>
        <li>Межевые планы</li>
        <li>Технические планы</li>
        <li>Технические паспорта</li>
        <li>Акты обследования</li>
        <li>Вынос точек в натуру</li>
        <li>Технические заключения на перевод садового дома в жилой</li>
        <li>Топографическая съёмка</li>
        <li>Технические заключения на выдачу материнского капитала</li>
        <li>Судебные и несудебные экспертизы</li>
      </ul>
<br></br>
      <h3>⬇ Ближайшие к Вам:</h3>
         <ul>
  <li>📍 Пушкинский отдел Мытищинского филиала ГБУ «БТИ Московской области»<br />
      г. Пушкино, ул. Лесная, д.1<br />
      Тел.: <a href="tel:+74985688888">+7 (498) 568-88-88</a>, доб. 1619</li>
      <br></br>
           <li>📍 Окна приема БТИ в МФЦ:<br />
      г. Пушкино, Московский проспект, д.54а, окно 22<br />
      Тел.: <a href="tel:+74985688888">+7 (498) 568-88-88</a>, доб. 1620<br />
      г. Мытищи, ул. Карла Маркса, д. 4, окно 22<br />
      Тел.: <a href="tel:+74985688888">+7 (498) 568-88-88</a>, доб. 2108</li>    </ul>
    



      <p>☎ Информация обо всех услугах БТИ Московской области доступна на <a href="https://mobti.ru/" target="_blank" rel="noopener noreferrer">
       официальном сайте</a> учреждения через форму обратной связи и в окнах БТИ в МФЦ МО,
      а также по телефону горячей линии <a href="tel:+74985688888">+7 (498) 568-88-88</a>.</p>
<a href="https://t.me/mobti_official" target="_blank" rel="noopener noreferrer">
  БТИ Московской области
</a>
      </div>
    </div> 
    </article>

  );
};

export default EconomSBTI;