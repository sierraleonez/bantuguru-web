import { useState, useCallback, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import CartPanel from '@/Components/CartPanel';
import SearchOverlay from '@/Components/SearchOverlay';
import Toast from '@/Components/Toast';
import Footer from '@/Components/Footer';

const CART_KEY = 'bantuguru_cart';

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export default function ClientLayout({ children, products = [] }) {
  const [cart, setCart] = useState(loadCart);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      if (prev.find((c) => c.id === product.id)) {
        showToast('Produk sudah ada di keranjang!');
        return prev;
      }
      showToast('✓ Ditambahkan ke keranjang!');
      return [...prev, product];
    });
  }, [showToast]);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const cartCount = cart.length;
  const cartTotal = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div className="min-h-screen bg-[#F2F3FA]">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
      />

      <main>
        {children({
          addToCart,
          openModal: setModalProduct,
          modalProduct,
          closeModal: () => setModalProduct(null),
          showToast,
          cart,
        })}
      </main>

      <Footer />

      <CartPanel
        open={cartOpen}
        items={cart}
        total={cartTotal}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        onProductClick={(p) => {
          setSearchOpen(false);
          setModalProduct(p);
        }}
      />

      {toast && <Toast message={toast} />}
    </div>
  );
}
