import React from 'react';
import NewsPreview from './newsPreview';
import { useNews } from './newsContext';

const NewsList = () => {
  const { news } = useNews();

  return (
    <div>
      {news.map(newsItem => (
        <NewsPreview key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;