import { Link, useLoaderData, useLocation } from "react-router-dom";
import Card from "./Card";

const Product = () => {
  const product = useLoaderData();
  const location = useLocation();

  const backLink = location.state?.search || "";
  const category = location.state?.category || "products";

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
};
export default Product;
