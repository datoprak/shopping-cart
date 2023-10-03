import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ title, price, desc, img }) => {
  const { handleAddCart } = useOutletContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="title">{title}</div>
      <div className="price">${price}</div>
      <div className="desc">{desc}</div>
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
          handleAddCart(title, img, quantity, price);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
