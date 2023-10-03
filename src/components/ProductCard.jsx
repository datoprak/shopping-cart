import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { handleAddCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="title">{product.title}</div>
      <div className="price">${product.price}</div>
      <div className="desc">{product.desc}</div>
      <div className="inputs">
        <button
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
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      </div>
      <button
        onClick={() => {
          handleAddCart(product, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
