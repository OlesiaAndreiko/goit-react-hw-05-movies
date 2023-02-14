import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { StyledLink } from './CurrentMovie.styled';
import * as TMDB from '../../api-service/film-service';
import defaulImage from '../../helpers/dog-loader.jpg';
import { useState, useEffect } from 'react';

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
      <Link to={backLinkHref}>&#8678;Go to back</Link>
      {
        <>
          <h2>{title}</h2>
          <img
            src={
              poster_path
                ? `http://image.tmdb.org/t/p/w500${poster_path}`
                : defaulImage
            }
            width="340px"
            alt={title}
          />
          <p>
            User score: <span>{vote_average} %</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
          <p>Additional information</p>
        </>
      }
      <ul>
        <li>
          <StyledLink to="cast" state={{ from: '/' }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: '/' }}>
            Reviews
          </StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading detalis...</div>}>
        <Outlet id={movieId} />
      </Suspense>
    </main>
  );
};

export default CurrentMovie;