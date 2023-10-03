import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  const handleAddCart = (title, img, quantity, price) => {
    if (quantity < 1) return;
    const totalPrice = quantity * price;
    const copyCart = [...cart];
    copyCart.push({ title, img, quantity, totalPrice, price });
    setCart(copyCart);
    setCartNumber(copyCart.length);
    console.log(copyCart);
  };

  return (
    <>
      <Navbar />
      <main>
        <Outlet
          context={{
            handleAddCart,
            cartNumber,
          }}
        />
      </main>
    </>
  );
};
export default Layout;
