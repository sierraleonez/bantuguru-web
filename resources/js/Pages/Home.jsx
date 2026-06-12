import { useState } from 'react';
import { router } from '@inertiajs/react';
import ClientLayout from '@/Layouts/ClientLayout';
import HeroSection from '@/Components/HeroSection';
import SubjectCard from '@/Components/SubjectCard';
import ProductCard from '@/Components/ProductCard';
import CtaBanner from '@/Components/CtaBanner';
import AboutSection from '@/Components/AboutSection';
import ProductDetailModal from '@/Components/ProductDetailModal';

export default function Home({ products: initialProducts }) {
  const [modalProduct, setModalProduct] = useState(null);

  return (
    <ClientLayout products={initialProducts}>
      {(ctx) => (
        <>
          <HeroSection onCtaClick={() => router.visit('/products')} />

          <div className="flex gap-3 px-4 pb-1 overflow-x-auto scrollbar-none">
            <SubjectCard name="IPA" emoji="🧪" bgClass="bg-[#EEEEFF]" onClick={() => router.visit('/products?subject=IPA')} />
            <SubjectCard name="MATEMATIKA" emoji="🧮" bgClass="bg-[#FAFFD6]" onClick={() => router.visit('/products?subject=Matematika')} />
            <SubjectCard name="BAHASA INGGRIS" emoji="💬" bgClass="bg-white shadow-[0_4px_24px_rgba(61,59,243,0.08)]" onClick={() => router.visit('/products?subject=Bahasa+Inggris')} />
          </div>

          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <h2 className="text-[17px] font-extrabold">Perangkat Pembelajaran</h2>
            <a href="/products" className="text-[13px] font-semibold text-[#3D3BF3] flex items-center gap-1 no-underline">
              Lihat Semua →
            </a>
          </div>

          <div className="flex gap-3 px-4 pb-2 overflow-x-auto scrollbar-none">
            {initialProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(p) => ctx.addToCart(p)}
                onClick={setModalProduct}
              />
            ))}
          </div>

          <CtaBanner onCtaClick={() => ctx.showToast('Menghubungi tim BantuGuru...')} />
          <AboutSection />

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
