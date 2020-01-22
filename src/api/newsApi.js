import axios from 'axios';

const getArticles = async () => {
  try {
    const url = `https://newsapi.org/v2/everything?q=Tech&from=2020-01-01&sortBy=popularity&pageSize=10&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    const { data: { articles } } = await axios.get(url);

    return articles;
  } catch (e) {
    return e;
  }
};

export default getArticles;
