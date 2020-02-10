import axios from 'axios';

const getLexperContent = async (urlFromNewsApi) => {
  try {
    const { data: { article: { text } } } = await axios.get('https://lexper.p.rapidapi.com/v1.1/extract', {
      headers: { 'x-rapidapi-host': 'lexper.p.rapidapi.com', 'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY },
      params: { language: 'en', media: '1', url: urlFromNewsApi },
    });

    return text;
  } catch (e) {
    return e;
  }
};

export default getLexperContent;