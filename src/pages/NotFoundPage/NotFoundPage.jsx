import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Link to="/">Go to homepage</Link>
      <p>Oops! Not found! </p>
    </>
  );
};

export default NotFoundPage;
