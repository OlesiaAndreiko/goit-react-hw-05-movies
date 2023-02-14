import { SearchMovie } from '../components/SearchMovie/SearchBar';
import * as TMDB from '../api-service/film-service';
import defaulImage from '../helpers/cat-6747298_960_720.jpg'
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Movies = () => {

  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  // const [searchParams] = useSearchParams();
  // const name = searchParams.get("name");


  useEffect(() => {
    const fetchData = async () => {
    
      try {
        const data = await TMDB.getSearchMovie(query);
        // console.log(data);

        setMovieList(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      fetchData(query);
    }
    
  }, [query]);

  
  const getQuery = searchWord => {
    setMovieList([]);
    
    if (!searchWord) {;
      setQuery('');
      return;
    }
    setQuery(searchWord);
  };

  return (
    <main>
      <SearchMovie onSearch={getQuery} ></SearchMovie>
      <ul>
        {movieList?
        movieList.map(film =>
          <li key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.title || film.name}
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
          ) : null
        }       
      </ul>
    </main>
  );
};

