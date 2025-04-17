import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY_API = '7247464ccb4d2a0111bc22076d51275b';

const getMoviesTrend = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY_API}`);
  return data;
};

const getMovieId = async (id) => {
  const { data } = await axios.get(`/movie/${id}?api_key=${KEY_API}&language=en-US`);
  return data;
};

const getMovieCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${KEY_API}`);
  return data;
};

const getMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${KEY_API}`);
  return data;
};

const getMovieSearch = async (searchName) => {
  const { data } = await axios.get(`/search/movie?query=${searchName}&api_key=${KEY_API}`);
  return data;
};

export {
  getMoviesTrend,
  getMovieId,
  getMovieCast,
  getMovieReviews,
  getMovieSearch,
};
