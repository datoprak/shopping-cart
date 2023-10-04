import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="payment-title">Your order has been received.</div>
      <div className="payment desc">Actually it wasn&apos;t taken.</div>
      <Link to="/">Return to HomePage</Link>
    </>
  );
};
export default Payment;
