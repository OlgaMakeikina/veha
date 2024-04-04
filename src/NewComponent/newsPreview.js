import React, { useState } from 'react';
import FullNews from './newsFull';

const NewsPreview = ({ newsItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReadMore = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>{newsItem.title}</h2>
      {newsItem.image && <img src={newsItem.image} alt="News" />}
      <button onClick={handleReadMore}>Подробнее</button>
      {isOpen && <FullNews newsItem={newsItem} onClose={handleClose} />}
    </div>
  );
};

export default NewsPreview;