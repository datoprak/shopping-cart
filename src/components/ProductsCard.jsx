import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const Card = ({ title, price, desc, img, to, stateSearch, stateCategory }) => {
  const { handleAddCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="products-card">
      <Link to={to} state={{ search: stateSearch, category: stateCategory }}>
        <img src={img} alt={title} />
        <div className="products-title">{title}</div>
        <div className="products-price">${price}</div>
        <div className="products-desc">{desc}</div>
      </Link>
      <div className="products-inputs">
        <button
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
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      </div>
      <button onClick={() => handleAddCart(title, img, quantity, price)}>
        Add to Cart
      </button>
    </div>
  );
};
export default Card;
