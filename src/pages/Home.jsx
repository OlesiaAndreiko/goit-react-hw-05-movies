import { Link } from 'react-router-dom';
import * as TMDB from '../api-service/film-service';
import defaulImage from '../helpers/cat-6747298_960_720.jpg'
import { useState, useEffect } from 'react';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TMDB.getTrandingMovies();
        // console.log(data);
        setTrending(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trending.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: "/"}}>{film.title || film.name}
            <img
                src={
                  film.backdrop_path
                    ? `http://image.tmdb.org/t/p/w500${film.backdrop_path}`
                    : defaulImage
                }
                width="150px"
                alt={film.title || film.name}
              /></Link>
          </li>
        ))}
      </ul>
    </main>
  );
};