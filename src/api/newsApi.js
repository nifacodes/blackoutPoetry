import axios from 'axios';

const getArticles = async () => {
  const today = new Date();
  // get yesterdays date
  const date = `${today.getFullYear()}/${(today.getMonth() + 1)}/${(today.getDate() - 1)}`;

  try {
    const url = `https://newsapi.org/v2/everything?q=Tech&from=${date}&sortBy=popularity&pageSize=10&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    const { data: { articles } } = await axios.get(url);

    return articles;
  } catch (e) {
    return [];
  }
};

export default getArticles;
