import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as TMDB from '../../../api-service/film-service';
import {ReviewsList, TextReviews} from "./Reviews.styled"

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) {
        return;
      }
      try {
        const data = await TMDB.getMovieReviews(movieId);
        // console.log(data);

        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <TextReviews>{content}</TextReviews>
          </li>
        ))
      ) : (
        <TextReviews>We don`t have any reviews for this movie.</TextReviews>
      )}
    </ReviewsList>
  );
};

export default Reviews; 