import { Link, useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartState, cartTotal } = useOutletContext();
  const [cart, setCart] = cartState;

  return (
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
      <Link to="/payment">Checkout and Pay</Link>
    </>
  );
};
export default Cart;
