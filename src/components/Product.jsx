import { Await, Link, useLoaderData, useLocation } from "react-router-dom";
import Card from "./Card";
import { Suspense } from "react";

const Product = () => {
  const productPromise = useLoaderData();
  const location = useLocation();

  const backLink = location.state?.search || "";
  const category = location.state?.category || "products";

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Await resolve={productPromise.data}>
        {product => {
          return (
            <>
              <Link to={`..${backLink}`} relative="path">
                {`Back to all ${category}`}
              </Link>
              <Card
                title={product.title}
                price={product.price}
                desc={product.description}
                img={product.image}
              />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};
export default Product;
