import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Products from "./Products";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <App /> },
        { path: "/products", element: <Products /> },
        { path: "/cart", element: <Cart /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
