import React from 'react';
import '../news.css';

import Content from './955c81631539.jpg';
const Nachisleniya = () => {

  return (
    <div>
     <h2 className='news_header'>ВОПРОСЫ О НАЧИЛЕНИЯХ ЗА ЖКУ?</h2>
    <div className='news_content'>
    <p>Опубликовано 23.09.2022</p>
    <img src={Content} />
    </div>
</div>
  );
};

export default Nachisleniya;