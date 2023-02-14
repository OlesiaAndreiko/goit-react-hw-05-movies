import { useParams } from 'react-router-dom';
import defaulImage from '../../../helpers/cats-4945658_960_720.png';
import { useEffect, useState } from 'react';
import * as TMDB from '../../../api-service/film-service';
import { CastList, CastDescription } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) {
        return;
      }
      try {
        const data = await TMDB.getMovieRoles(movieId);
        // console.log(data);

        setCasts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <CastList>
      {casts
        ? casts.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500${profile_path}`
                    : defaulImage
                }
                width="100px"
                alt={original_name}
              />
              <CastDescription>{original_name}</CastDescription>
              <CastDescription>{character}</CastDescription>
            </li>
          ))
        : null}
    </CastList>
  );
};

export default Cast;
