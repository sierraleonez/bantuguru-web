import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart, onProductClick }) {
  if (!products.length) {
    return (
      <div className="col-span-full text-center py-10 text-[#8888AA]">
        Tidak ada produk ditemukan 😕
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 px-4 pb-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variant="grid"
          onAddToCart={onAddToCart}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
}
