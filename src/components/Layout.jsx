import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddCart = (product, quantity, btnRef) => {
    if (quantity < 1) quantity = 1;
    const { id, title, image, price } = product;
    const copyCart = [...cart];
    if (copyCart.some(pro => pro.title === title)) {
      const item = copyCart.find(pro => pro.title === title);
      item.quantity += quantity;
      item.totalPrice = (+item.quantity * +item.price).toFixed(2);
    } else {
      const totalPrice = (+quantity * +product.price).toFixed(2);
      copyCart.push({ id, title, image, quantity, totalPrice, price });
    }
    let copyCartTotal = 0;
    copyCart.forEach(item => (copyCartTotal += +item.totalPrice));
    setCartTotal(copyCartTotal.toFixed(2));
    setCart(copyCart);
    setCartNumber(prev => prev + quantity);
    btnRef.current.textContent = "Added to cart";
    btnRef.current.style.backgroundColor = "#6a9c89";
    btnRef.current.disabled = true;

    setTimeout(() => {
      btnRef.current.textContent = "Add to Cart";
      btnRef.current.style.backgroundColor = "gainsboro";
      btnRef.current.disabled = false;
    }, 500);
  };

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <main>
        <Outlet
          context={{
            handleAddCart,
            cartState: [cart, setCart],
            setCartNumber,
            cartTotal,
          }}
        />
      </main>
    </>
  );
};
export default Layout;
