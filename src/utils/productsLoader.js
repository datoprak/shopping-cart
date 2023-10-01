import { fetchData } from "./fetchData";

export default function loader() {
  return fetchData("https://fakestoreapi.com/products");
}
