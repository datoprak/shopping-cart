import { useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../styles/ProductsCard.css";

const ProductsCard = ({ product, to, stateSearch, stateCategory }) => {
  const { handleAddCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);
  const btnRef = useRef(null);

  return (
    <div className="products-card">
      <Link to={to} state={{ search: stateSearch, category: stateCategory }}>
        <img src={product.image} alt={product.title} />
        <div className="products-info">
          <div className="products-title">{product.title}</div>
          <div className="products-price">${product.price}</div>
        </div>
      </Link>
      <div className="inputs-container">
        <div className="products-inputs">
          <button
            className="minus-btn"
            onClick={() => setQuantity(prev => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          <input
            type="number"
            name="products-quantity"
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
          />
          <button
            className="plus-btn"
            onClick={() => setQuantity(prev => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          className="products-add-btn"
          onClick={() => handleAddCart(product, quantity, btnRef)}
          ref={btnRef}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductsCard;
