import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import * as TMDB from '../../api-service/film-service';
import defaulImage from '../../helpers/dog-loader.jpg';
import { useState, useEffect } from 'react';
import {
  StyledLink,
  BackLink,
  MovieCard,
  MovieDescription,
  TextDescription,
  DetalisList,
} from './MovieDetalis.styled';

const CurrentMovie = () => {
  const [detalisMovie, setDetalisMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) {
        return;
      }
      try {
        const data = await TMDB.getMovieDetails(movieId);
        // console.log(data);
        setDetalisMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = detalisMovie;

  return (
    <main>
      <BackLink to={backLinkHref}>
        <TiArrowBackOutline size={24} />
        Go to back
      </BackLink>

      {
        <>
          <MovieCard>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w500${poster_path}`
                  : defaulImage
              }
              width="340px"
              alt={title}
            />
            <MovieDescription>
              <h2>{title}</h2>
              <TextDescription>
                User score: <span>{vote_average} %</span>
              </TextDescription>
              <h3>Overview</h3>
              <TextDescription>{overview}</TextDescription>
              <h3>Genres</h3>
              {genres && (
                <TextDescription>
                  {genres.map(({ name }) => name).join(' ')}
                </TextDescription>
              )}
            </MovieDescription>
          </MovieCard>
          <TextDescription>Additional information</TextDescription>
        </>
      }
      <DetalisList>
        <li key="cast">
          <StyledLink to="cast" state={{ from: '/' }}>
            Cast
          </StyledLink>
        </li>
        <li key="reviews">
          <StyledLink to="reviews" state={{ from: '/' }}>
            Reviews
          </StyledLink>
        </li>
      </DetalisList>
      <Suspense fallback={<div>Loading detalis...</div>}>
        <Outlet id={movieId} />
      </Suspense>
    </main>
  );
};

export default CurrentMovie;
