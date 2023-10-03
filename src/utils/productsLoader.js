import { fetchData } from "./fetchData";

export default async function loader() {
  return await fetchData("https://fakestoreapi.com/products");
}
