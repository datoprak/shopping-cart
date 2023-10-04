import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import productsLoader from "./utils/productsLoader";
import productLoader from "./utils/productLoader";
import Product from "./pages/Product";
import Payment from "./pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products />, loader: productsLoader },
      {
        path: "products/:id",
        element: <Product />,
        loader: productLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
