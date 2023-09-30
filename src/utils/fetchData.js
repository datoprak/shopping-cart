export const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok)
    throw new Error("Failed to fetch data", {
      cause: response.status,
    });
  const data = await response.json();
  return data;
};
