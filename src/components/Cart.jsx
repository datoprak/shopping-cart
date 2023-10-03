import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;

  return (
    <>
      {cart.map(product => {
        return (
          <div className="cart-container" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="cart-title">{product.title}</div>
            <div className="cart-quantity">{product.quantity}</div>
            <div className="cart-total-price">{product.totalPrice}</div>
          </div>
        );
      })}
    </>
  );
};
export default Cart;
