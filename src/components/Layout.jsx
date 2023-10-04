import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddCart = (product, quantity) => {
    if (quantity < 1) return;
    const { id, title, image, price } = product;
    const copyCart = [...cart];
    if (copyCart.some(pro => pro.title === title)) {
      const item = copyCart.find(pro => pro.title === title);
      item.quantity += quantity;
      item.totalPrice = item.quantity * item.price;
    } else {
      const totalPrice = quantity * product.price;
      copyCart.push({ id, title, image, quantity, totalPrice, price });
    }
    let copyCartTotal = 0;
    copyCart.forEach(item => (copyCartTotal += item.totalPrice));
    setCartTotal(copyCartTotal);
    setCart(copyCart);
    setCartNumber(prev => prev + quantity);
  };

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <main>
        <Outlet
          context={{
            handleAddCart,
            cartState: [cart, setCart],
            cartTotal,
          }}
        />
      </main>
    </>
  );
};
export default Layout;
