import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastImg } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2ead4d55a2c7da4f5313610b563685be&language=en-US`
    )
      .then(res => res.json())
      .then(result => {
        setCast(result.cast);
      });
  }, [movieId]);

  return (
    <>
      {cast.length > 0
        ? cast.map(({ character, name, profile_path, id }) => (
            <CastItem key={id}>
              {profile_path ? (
                <CastImg
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt=""
                />
              ) : (
                <p>No photo</p>
              )}
              <div>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </CastItem>
          ))
        : 'There is no information about cast'}
    </>
  );
};

export default Cast;
