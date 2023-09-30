import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul className="links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
