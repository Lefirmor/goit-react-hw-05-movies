import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2ead4d55a2c7da4f5313610b563685be&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(result => {
        setReviews(result.results);
      });
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </ReviewsItem>
          ))
        : 'There is no review yet'}
    </ul>
  );
};

export default Reviews;
