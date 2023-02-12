import axios from 'axios';

const API_KEY = 'bcffd2e7e681aa94b83a55719216dc7b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {
//     api_key: API_KEY,
//   };

export const getTrandingMovies = async () => {
  const response = await axios.get(
    `trending/all/day?api_key=${API_KEY}`
  );
  console.log(response)
  return response;
}

getTrandingMovies()