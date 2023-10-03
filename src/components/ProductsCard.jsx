import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const ProductsCard = ({ product, to, stateSearch, stateCategory }) => {
  const { handleAddCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="products-card">
      <Link to={to} state={{ search: stateSearch, category: stateCategory }}>
        <img src={product.image} alt={product.title} />
        <div className="products-title">{product.title}</div>
        <div className="products-price">${product.price}</div>
        <div className="products-desc">{product.desc}</div>
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
      <button onClick={() => handleAddCart(product, quantity)}>
        Add to Cart
      </button>
    </div>
  );
};
export default ProductsCard;
