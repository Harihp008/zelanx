import { Link, useLoaderData } from "react-router-dom";
import ProductCard from" E:\zealnex\my-app\src\components\productCard.tsx";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default function Products() {
  const products = useLoaderData() as any[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}