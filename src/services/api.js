import axios from 'axios';

axios.defaults.baseURL = 'https://644eb1f54e86e9a4d8ff552d.mockapi.io/ap/v1/';

export const fetchTweets = async (page, abort) => {
  try {
    const { data } = await axios.get(`/tweets`, {
      signal: abort.signal,
      params: { p: page, l: 3 },
    });
    return data;
  } catch (error) {}
};
