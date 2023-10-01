import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import productsLoader from "./utils/productsLoader";
import Product from "./components/Product";
import { fetchData } from "./utils/fetchData";

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
        loader: ({ params }) => {
          return fetchData(`https://fakestoreapi.com/products/${params.id}`);
        },
      },
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
