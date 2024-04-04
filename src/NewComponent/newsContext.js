import React, { createContext, useContext, useState } from 'react';
import { newsData } from './newsData';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news] = useState(newsData);

  return (
    <NewsContext.Provider value={{ news }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);