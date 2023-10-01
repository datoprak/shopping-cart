import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>{error.status}</p>
      <pre>{error.statusText || error.message}</pre>
      <button>
        <Link to="/">Return to Homepage</Link>
      </button>
    </div>
  );
};
export default ErrorPage;
