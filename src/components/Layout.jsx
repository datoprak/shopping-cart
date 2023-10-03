import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  const handleAddCart = (product, quantity) => {
    if (quantity < 1) return;
    const { id, title, image, price } = product;
    const totalPrice = quantity * product.price;
    const copyCart = [...cart];
    copyCart.push({ id, title, image, quantity, totalPrice, price });
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
            cartState: [cart, setCart],
          }}
        />
      </main>
    </>
  );
};
export default Layout;
