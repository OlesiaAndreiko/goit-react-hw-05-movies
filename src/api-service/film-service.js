import axios from 'axios';

const API_KEY = 'bcffd2e7e681aa94b83a55719216dc7b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
  };

export const getTrandingMovies = async () => {
  const response = await axios.get(
    `trending/all/day`
  );
  console.log(response)
  return response;
}

export const getSearchMovie = async (query) => {
    const response = await axios.get(
        `search/movie?query=${query}`
      );
      console.log(response)
      return response;
}

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(
        `search/movie?movie/${movieId}`
      );
      console.log(response)
      return response;
}

export const getMovieRoles = async (movieId) => {
    const response = await axios.get(
        `movie/${movieId}`
      );
      console.log(response)
      return response;
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(
        `movie/${movieId}/reviews`
      );
      console.log(response)
      return response;
}


getTrandingMovies().then(resp => resp.json).then(data => console.log(data))


async function foo() {
    const a = await getTrandingMovies()
    console.log(a)
}
foo()