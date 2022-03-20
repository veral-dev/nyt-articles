import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
  headers: {
    'content-type': 'application/json'
  }
});

export default axiosInstance;
