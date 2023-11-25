import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/"> &#8592; Back to the home page</Link>
      <p>Page not found!</p>
    </div>
  );
};

export default NotFound;
