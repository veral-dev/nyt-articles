import axiosInstance from './config-axios';

export const getArticles = async () => {
  return axiosInstance
    .get(`?${process.env.REACT_APP_APIKEY}`)
    .then((response) => {
      const { data } = response;
      return data.response;
    })
    .catch(() => {
      throw new Error('Error');
    });
};

export const getArticlesWithFilters = async (searchWord, beginDate, endDate, order, page) => {
  if (!searchWord && !beginDate && !endDate && !order && !page) return;
  let query = '';
  if (searchWord) query = `q=${searchWord}&`;
  if (beginDate) query = query + `begin_date=${beginDate}&end_date=${endDate}&`;
  if (order) query = query + `sort=${order}&`;
  if (page && page > 1) query = query + `page=${page}&`;

  return axiosInstance
    .get(`?${query}${process.env.REACT_APP_APIKEY}`)
    .then((response) => {
      const { data } = response;
      return data.response;
    })
    .catch(() => {
      throw new Error('Error');
    });
};
