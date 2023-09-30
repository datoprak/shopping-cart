import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Products = () => {
  const products = useLoaderData();

  return (
    <div className="products">
      {products.map(product => {
        return (
          <div key={product.id} className="product">
            <Card
              title={product.title}
              price={product.price}
              desc={product.description}
              img={product.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
