import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ cartNumber }) => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <span className="material-symbols-outlined">shopping_bag</span>
          <div>THE SHOP</div>
        </div>
      </Link>
      <nav>
        <ul className="links">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/products">PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <div className="cart-logo">
                {cartNumber > 0 && <span className="count">{cartNumber}</span>}
                <span className="material-symbols-outlined">shopping_cart</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
