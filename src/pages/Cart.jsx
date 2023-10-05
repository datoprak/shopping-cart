import { Link, useOutletContext } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const { cartState, cartTotal, setCartNumber } = useOutletContext();
  const [cart, setCart] = cartState;

  const handleEmpty = () => {
    setCart([]);
    setCartNumber(0);
  };

  return (
    <div className="cart-page">
      {cart.length > 0 ? (
        <>
          <button className="empty-cart-btn" onClick={handleEmpty}>
            Empty the cart
          </button>
          <div className="cart-table">
            <div className="cart-table-img">Image</div>
            <div>Title</div>
            <div className="cart-table-quantity">Quantity</div>
            <div className="cart-table-price">Total Price</div>
          </div>
          {cart.map(product => {
            return (
              <div className="cart-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <div className="item-title">{product.title}</div>
                  <div className="item-quantity">{product.quantity}</div>
                  <div className="item-total-price">${product.totalPrice}</div>
                </Link>
              </div>
            );
          })}
          <div className="cart-total-price">
            Cart&apos;s Total Price: <span>${cartTotal}</span>
          </div>
          <Link to="/payment">
            <button className="payment-btn" onClick={handleEmpty}>
              Checkout and Pay
            </button>
          </Link>
        </>
      ) : (
        <div className="empty-cart">Your cart is empty.</div>
      )}
    </div>
  );
};
export default Cart;
