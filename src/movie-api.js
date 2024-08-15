import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDNiNDBkMTRlNjg3ZWJkNTI3MDQxZDI5OGVkZjZmZiIsIm5iZiI6MTcyMzQwMzE1MC4xNTU3MTEsInN1YiI6IjY2YjkwMjNlNzliZWMxYzM3OTFhMjg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWLBbCF8hEunsPFQuo7TKDv8ykvXwbpWAg27sdqWbtQ";

const getTrendingMovies = async () => {
  const res = await axios.get("trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.data.results;
};

const searchMovies = async (query) => {
  const res = await axios.get(`search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.data.results;
};

const getMovieId = async (id) => {
  const res = await axios.get(`/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.data;
};

const getMovieCast = async (id) => {
  const res = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.data.cast;
};

const getMovieReviews = async (id) => {
  const res = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res.data.results;
};

export {
  getTrendingMovies,
  getMovieCast,
  getMovieReviews,
  searchMovies,
  getMovieId,
};
