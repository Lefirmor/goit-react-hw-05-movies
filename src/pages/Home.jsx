import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=2ead4d55a2c7da4f5313610b563685be`
    )
      .then(res => res.json())
      .then(({ results }) => {
        setIsLoading(false);
        setTitles(results);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}

      {titles.length > 0 && (
        <ul>
          {titles.map(title => (
            <li key={title.id}>
              <Link to={`/movies/${title.id}`} state={{ from: location }}>
                {title.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
