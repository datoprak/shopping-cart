import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Product = () => {
  const product = useLoaderData();

  return (
    <Card
      title={product.title}
      price={product.price}
      desc={product.description}
      img={product.image}
    />
  );
};
export default Product;
