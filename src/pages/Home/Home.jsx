import * as TMDB from '../../api-service/film-service';
import defaulImage from '../../helpers/cat-6747298_960_720.jpg';
import { useState, useEffect } from 'react';
import {
  HomeCaption,
  TrendingList,
  TrendingItem,
  StyledLink,
  PreviewPoster,
  NameMovie,
} from './Home.styled';

const Home = () => {
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
      <HomeCaption>Trending today</HomeCaption>
      <TrendingList>
        {trending.map(film => (
          <TrendingItem key={film.id}>
            <StyledLink to={`/movies/${film.id}`} state={{ from: '/' }}>
              <PreviewPoster
                src={
                  film.backdrop_path
                    ? `http://image.tmdb.org/t/p/w500${film.backdrop_path}`
                    : defaulImage
                }
                alt={film.title || film.name}
              />
              <NameMovie>{film.title || film.name}</NameMovie>
            </StyledLink>
          </TrendingItem>
        ))}
      </TrendingList>
    </main>
  );
};

export default Home;
