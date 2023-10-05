import { Link } from "react-router-dom";
import "../styles/Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-title">Your order has been received.</div>
      <div className="payment-desc">
        Actually it wasn&apos;t received. This is a demo project.
      </div>
      <Link to="/">
        <button className="payment-home-btn">Return to HomePage</button>
      </Link>
    </div>
  );
};
export default Payment;
