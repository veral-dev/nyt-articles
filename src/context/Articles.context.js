import React, { createContext, useState, useEffect, useContext } from 'react';
import { getArticles, getArticlesWithFilters } from '../services/articles.service';
import { AlertContext } from './Alert.context';

export const ArticlesContext = createContext();
const ArticlesProvider = (props) => {
  const [articles, setArticles] = useState(null);
  const [maxPages, setMaxPages] = useState(0);

  const [firstLoading, setFirstLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setErrorMsg } = useContext(AlertContext);

  const setData = (articlesData) => {
    setArticles(articlesData.docs);
    const max = articlesData.meta.hits / 10;
    setMaxPages(Math.ceil(max));
  };

  const fetchArticles = async () => {
    setFirstLoading(true);
    try {
      const articlesList = await getArticles();
      if (articlesList) setData(articlesList);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setFirstLoading(false);
    }
  };

  const searchArticles = async (word, begin, end, order, page) => {
    setLoading(true);
    try {
      const articlesList = await getArticlesWithFilters(word, begin, end, order, page);
      if (articlesList) setData(articlesList);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        searchArticles,
        maxPages,
        firstLoading,
        loading
      }}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
