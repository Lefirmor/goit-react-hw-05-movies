import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDetailsSection,
  Title,
  List,
  MovieImg,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const backLinkHref = useRef(state === null ? '/' : state.from);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2ead4d55a2c7da4f5313610b563685be&language=en-US`
    )
      .then(res => res.json())
      .then(result => {
        setMovieInfo(result);
        setIsLoading(false);
        if (result.status_message) {
          setMovieInfo();
        }
      });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref.current}>
        &#8592; Back to previous page
      </BackLink>
      {isLoading && <Loader />}
      {movieInfo ? (
        <>
          <MovieDetailsSection>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
              alt=""
            />
            <div>
              <Title>{`${movieInfo.title} (${movieInfo.release_date})`}</Title>
              <p>User Score: {Math.ceil(movieInfo.vote_average * 10)}%</p>
              <h2>Owerview</h2>
              <p>{movieInfo.overview}</p>
              <h2>Genres</h2>
              <List>
                {movieInfo.genres &&
                  movieInfo.genres.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
              </List>
            </div>
          </MovieDetailsSection>
          <h3>Additional information</h3>

          <List>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </List>

          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <p>The resource you requested could not be found.</p>
      )}
    </>
  );
};

export default MovieDetails;
