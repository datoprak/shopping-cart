import { Link } from "react-router-dom";

const Navbar = ({ cartNumber }) => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <ul className="links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/cart">CART({cartNumber})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
