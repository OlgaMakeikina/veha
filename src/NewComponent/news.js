import React from 'react';
import NewsList from './newsList';
import { NewsProvider } from './newsContext';
import Footer from '../FooterComponent/footer';
const News = ({ news }) => {

  return (
    <div>
         <NewsProvider>
      <div>
        <h1>Новости компании</h1>
        <NewsList />
      </div>
    </NewsProvider>
    <Footer/>  
    </div>

  );
};

export default News;