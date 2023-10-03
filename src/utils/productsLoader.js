import { defer } from "react-router-dom";
import { fetchData } from "./fetchData";

export default async function loader() {
  const data = fetchData("https://fakestoreapi.com/products");
  return defer({ data });
}
