import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav">
      <h3 className="nav__header">
        <Link className="nav__link" to="/">
          Home
        </Link>
      </h3>

      <h3 className="nav__header">
        <Link className="nav__link" to="/cats">
          List
        </Link>
      </h3>
      <h3 className="nav__header">
        <Link className="nav__link" to="/cats/add">
          Upload
        </Link>
      </h3>
      <h3 className="nav__header">
        <Link className="nav__link" to="/cats/adopted">
          More
        </Link>
      </h3>
    </div>
  );
}
export default Nav;
