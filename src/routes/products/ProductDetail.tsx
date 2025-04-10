import { useLoaderData } from "react-router-dom";

export async function loader({ params }: any) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  return res.json();
}

export default function ProductDetail() {
  const product = useLoaderData() as any;
  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-48 h-48 object-contain mx-auto mb-4" />
      <p className="mb-2">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
    </div>
  );
}