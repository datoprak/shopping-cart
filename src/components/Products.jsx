import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";

const Products = () => {
  const products = useLoaderData();

  return (
    <div className="products">
      {products.map(product => {
        return (
          <div key={product.id} className="product">
            <Link to={`/products/${product.id}`}>
              <Card
                title={product.title}
                price={product.price}
                desc={product.description}
                img={product.image}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
