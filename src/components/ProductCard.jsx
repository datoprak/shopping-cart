const ProductCard = ({ title, price, desc, img }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="title">{title}</div>
      <div className="price">${price}</div>
      <div className="desc">{desc}</div>
      <div className="inputs">
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
