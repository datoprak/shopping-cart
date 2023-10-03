import { Await, useLoaderData, useSearchParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { Suspense } from "react";

const Products = () => {
  const productsPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");

  const handleFilter = (key, value) => {
    setSearchParams(prev => {
      if (!value) prev.delete(key);
      else prev.set(key, value);
      return prev;
    });
  };

  return (
    <div className="products-container">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={productsPromise.data}>
          {loadedProducts => {
            const displayedProducts = categoryFilter
              ? loadedProducts.filter(
                  product => product.category === categoryFilter
                )
              : loadedProducts;

            return (
              <>
                <div className="filter-btns">
                  <button
                    onClick={() => handleFilter("category", "electronics")}
                  >
                    Electronics
                  </button>
                  <button onClick={() => handleFilter("category", "jewelery")}>
                    Jewelery
                  </button>
                  <button
                    onClick={() => handleFilter("category", "men's clothing")}
                  >
                    Men&apos;s Clothing
                  </button>
                  <button
                    onClick={() => handleFilter("category", "women's clothing")}
                  >
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
                        <ProductsCard
                          product={product}
                          to={`/products/${product.id}`}
                          stateSearch={`?${searchParams.toString()}`}
                          stateCategory={categoryFilter}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Products;
