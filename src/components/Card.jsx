const Card = () => {
  return (
    <div className="card">
      <img src="" alt="title" />
      <div className="title">Title</div>
      <div className="price">Price</div>
      <div className="desc">Description</div>
      <div className="inputs">
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};
export default Card;
