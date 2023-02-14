import axios from 'axios';

const API_KEY = 'bcffd2e7e681aa94b83a55719216dc7b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    // limit: 40,
  };

export const getTrandingMovies = async () => {
  const response = await axios.get(
    `trending/all/day`
  );
  // console.log(response)
  return response.data.results;
}

export const getSearchMovie = async (query) => {
    const response = await axios.get(
        `search/movie?query=${query}`
      );
      // console.log(response.data.results)
      return response.data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(
        `movie/${movieId}`
      );
      // console.log(response.data)
      return response.data;
}

export const getMovieRoles = async (movieId) => {
    const response = await axios.get(
        `movie/${movieId}/credits`
      );
      // console.log(response.data.cast)
      return response.data.cast;
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(
        `movie/${movieId}/reviews`
      );
      // console.log(response.data.results)
      return response.data.results;
}