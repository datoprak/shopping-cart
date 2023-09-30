import useFetchData from "../hooks/useFetchData";
import Card from "./Card";

const Products = () => {
  const [products, loading, error] = useFetchData(
    "https://fakestoreapi.com/products"
  );
  return (
    <>
      {loading ? (
        <h1>LOADING</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
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
      )}
    </>
  );
};

export default Products;
