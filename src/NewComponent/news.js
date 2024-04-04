import React from 'react';
import NewsList from './newsList';
import { NewsProvider } from './newsContext';
const News = ({ news }) => {

  return (
    <NewsProvider>
      <div>
        <h1>Новости компании</h1>
        <NewsList />
      </div>
    </NewsProvider>
  );
};

export default News;