import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { handleAddCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-card">
      <section className="img-section">
        <div className="img-container">
          <img src={product.image} alt={product.title} />
        </div>
      </section>
      <section className="info-section">
        <div className="product-title">{product.title}</div>
        <div className="product-desc">{product.description}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-inputs">
          <div className="product-inputs-container">
            <button
              className="minus-btn"
              onClick={() => setQuantity(prev => (prev === 0 ? 0 : prev - 1))}
            >
              -
            </button>
            <input
              type="number"
              name="quantity"
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
            className="product-add-btn"
            onClick={() => {
              handleAddCart(product, quantity);
            }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};
export default ProductCard;
