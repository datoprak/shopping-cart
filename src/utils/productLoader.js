import { defer } from "react-router-dom";
import { fetchData } from "./fetchData";

export default async function loader({ params }) {
  const data = fetchData(`https://fakestoreapi.com/products/${params.id}`);
  return defer({ data });
}
