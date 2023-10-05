import { Link, useRouteError } from "react-router-dom";
import "../styles/Error.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        {error.status} {error.statusText || error.message}
      </p>
      <button className="error-btn">
        <Link to="/">Return to Homepage</Link>
      </button>
    </div>
  );
};
export default ErrorPage;
