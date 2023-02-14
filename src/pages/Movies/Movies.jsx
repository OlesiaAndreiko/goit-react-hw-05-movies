import { SearchBar } from '../../components/SearchBar/SearchBar';
import * as TMDB from '../../api-service/film-service';
import defaulImage from '../../helpers/cat-6747298_960_720.jpg';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  SearchList,
  SearchItem,
  StyledLink,
  PreviewPoster,
  NameMovie,
} from './Movies.styled';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('searchWord') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TMDB.getSearchMovie(query);
        // console.log(data);

        setMovieList(data);
      } catch (error) {
        console.log(error);
        toast.error("Something is wrong, try again.");
      }
    };

    if (query) {
      fetchData(query);
    }
  }, [query]);

  const getQuery = searchWord => {
    const nextParams = searchWord !== '' ? { searchWord } : {}
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBar onSearch={getQuery}></SearchBar>
      <SearchList>
        {movieList
          ? movieList.map(film => (
              <SearchItem key={film.id}>
                <StyledLink
                  to={`/movies/${film.id}`}
                  state={{ from: `/movies?searchWord=${query}` }}
                >
                  <PreviewPoster
                    src={
                      film.backdrop_path
                        ? `http://image.tmdb.org/t/p/w500${film.backdrop_path}`
                        : defaulImage
                    }
                    width="150px"
                    alt={film.title || film.name}
                  />
                  <NameMovie>{film.title || film.name}</NameMovie>
                </StyledLink>
              </SearchItem>
            ))
          : null}
      </SearchList>
      <Toaster/> 
    </main>
  );
};

export default Movies;
