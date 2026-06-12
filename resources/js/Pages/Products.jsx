import { useState, useMemo } from 'react';
import { router } from '@inertiajs/react';
import ClientLayout from '@/Layouts/ClientLayout';
import FilterChips from '@/Components/FilterChips';
import ProductGrid from '@/Components/ProductGrid';
import ProductDetailModal from '@/Components/ProductDetailModal';

export default function Products({ products: allProducts }) {
  const [modalProduct, setModalProduct] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    kelas: 'Semua',
    subject: 'Semua',
    type: 'Semua',
  });

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      return (activeFilters.kelas === 'Semua' || p.kelas === activeFilters.kelas) &&
             (activeFilters.subject === 'Semua' || p.subject === activeFilters.subject) &&
             (activeFilters.type === 'Semua' || p.type === activeFilters.type);
    });
  }, [allProducts, activeFilters]);

  const setFilter = (group, val) => {
    setActiveFilters((prev) => ({ ...prev, [group]: val }));
  };

  return (
    <ClientLayout products={allProducts}>
      {(ctx) => (
        <>
          <div className="px-4 pt-4 pb-1">
            <h2 className="text-xl font-extrabold">Produk Kami</h2>
          </div>

          <div className="space-y-1.5 pb-2">
            <FilterChips
              label="Kelas"
              options={['Semua', 'Kelas 7', 'Kelas 8', 'Kelas 9']}
              active={activeFilters.kelas}
              onChange={(v) => setFilter('kelas', v)}
            />
            <FilterChips
              label="Subject"
              options={['Semua', 'IPA', 'Matematika', 'Bahasa Inggris']}
              active={activeFilters.subject}
              onChange={(v) => setFilter('subject', v)}
            />
            <FilterChips
              label="Type"
              options={['Semua', 'Modul Ajar', 'LKPD', 'Asesmen', 'Administrasi']}
              active={activeFilters.type}
              onChange={(v) => setFilter('type', v)}
            />
          </div>

          <ProductGrid
            products={filtered}
            onAddToCart={(p) => ctx.addToCart(p)}
            onProductClick={setModalProduct}
          />

          <ProductDetailModal
            product={modalProduct}
            onClose={() => setModalProduct(null)}
            onAddToCart={(p) => ctx.addToCart(p)}
            cart={ctx.cart}
          />
        </>
      )}
    </ClientLayout>
  );
}
