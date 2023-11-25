import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { Form, Button, Input } from './Searchbar.styled';
import { Loader } from 'components/Loader/Loader';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setSearchResult([]);
    setSearchValue('');
    if (query !== '') {
      setIsLoading(true);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2ead4d55a2c7da4f5313610b563685be&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(({ results }) => {
          setIsLoading(false);
          if (results.length === 0) {
            throw new Error('No results. Please, try again');
          }
          setSearchResult(results);
        })
        .catch(({ message }) => toast.error(message));
    }
  }, [query]);

  const handleSubmitQuery = e => {
    e.preventDefault();

    const nextParams =
      searchValue !== '' ? { query: searchValue.toLowerCase() } : {};
    setSearchParams(nextParams);
  };

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmitQuery}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
          value={searchValue}
        />
        <Button>Search</Button>
      </Form>
      <Toaster />

      {isLoading && <Loader />}

      {searchResult.length > 0 && (
        <ul>
          {searchResult.map(result => (
            <li key={result.id}>
              <Link to={`${result.id}`} state={{ from: location }}>
                {result.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Searchbar;
