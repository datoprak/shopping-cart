import { Link, NavLink } from "react-router-dom";

const Navbar = ({ cartNumber }) => {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <nav>
        <ul className="links">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/products">PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="/cart">CART({cartNumber})</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
