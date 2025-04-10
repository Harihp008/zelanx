export default function ProductCard({ product }: { product: any }) {
    return (
      <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-sm">${product.price}</p>
      </div>
    );
  }