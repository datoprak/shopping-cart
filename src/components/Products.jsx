import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Card from "./Card";

const Products = () => {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");

  const displayedProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  const handleFilter = (key, value) => {
    setSearchParams(prev => {
      if (!value) prev.delete(key);
      else prev.set(key, value);
      return prev;
    });
  };

  return (
    <div className="products-container">
      <div className="filter-btns">
        <button onClick={() => handleFilter("category", "electronics")}>
          Electronics
        </button>
        <button onClick={() => handleFilter("category", "jewelery")}>
          Jewelery
        </button>
        <button onClick={() => handleFilter("category", "men's clothing")}>
          Men&apos;s Clothing
        </button>
        <button onClick={() => handleFilter("category", "women's clothing")}>
          Women&apos;s Clothing
        </button>
        {categoryFilter && (
          <button onClick={() => handleFilter("category", null)}>
            Reset filter
          </button>
        )}
      </div>
      <div className="products">
        {displayedProducts.map(product => {
          return (
            <div key={product.id} className="product">
              <Link
                to={`/products/${product.id}`}
                state={{
                  search: `?${searchParams.toString()}`,
                  category: categoryFilter,
                }}
              >
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
    </div>
  );
};

export default Products;
