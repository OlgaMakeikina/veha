import React from 'react';

const FullNews = ({ newsItem, onClose }) => {
  return (
    <div>
      <h2>{newsItem.title}</h2>
      {newsItem.image && <img src={newsItem.image} alt="News" />}
      <p>{newsItem.content}</p>
      {newsItem.video && <video src={newsItem.video} controls />}
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default FullNews;