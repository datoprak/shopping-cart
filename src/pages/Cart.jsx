import { Link, useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartState, cartTotal, setCartNumber } = useOutletContext();
  const [cart, setCart] = cartState;

  const handleEmpty = () => {
    setCart([]);
    setCartNumber(0);
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map(product => {
            return (
              <div className="cart-container" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="item-title">{product.title}</div>
                <div className="item-quantity">{product.quantity}</div>
                <div className="item-total-price">${product.totalPrice}</div>
              </div>
            );
          })}

          <div className="cart-total-price">Total Price: ${cartTotal}</div>
          <button onClick={handleEmpty}>Empty the cart</button>
          <Link to="/payment">
            <button onClick={handleEmpty}>Checkout and Pay</button>
          </Link>
        </>
      ) : (
        <div className="empty-card">Your cart is empty.</div>
      )}
    </>
  );
};
export default Cart;
