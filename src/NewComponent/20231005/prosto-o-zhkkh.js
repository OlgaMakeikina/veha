import React from 'react';
import YouTube from 'react-youtube';
import '../news.css';

const Ozhkh = () => {

  return (
    <div>
     <h2 className='news_header'>ПРОСТО О ЖКХ</h2>
    <div className='news_content'>
    <p>Опубликовано 05.10.2023</p>
    <YouTube videoId="FjfmDNtKch8" />
    </div>
</div>
  );
};

export default Ozhkh;