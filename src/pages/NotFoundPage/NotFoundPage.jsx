import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__title">Page Not Found</h1>
      <p className="notfound__description">We couldn't find the page you were looking for. This is either because:</p>
      <ul className="notfound__list">
        <li className="notfound__list-item">There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
        <li className="notfound__list-item">The page you are looking for has been moved or deleted.</li>
      </ul>
      <p className="notfound__description">You can return to our homepage by <Link to="/">clicking here</Link>.</p>
    </div>
  );
};

export default NotFoundPage;
