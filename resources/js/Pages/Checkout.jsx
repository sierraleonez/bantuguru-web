import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Checkout() {
  const { allProducts, order, adminPhone } = usePage().props;
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const params = new URLSearchParams(window.location.search);
  const itemIds = params.get('items')?.split(',').filter(Boolean).map(Number) || [];

  if (order) {
    const total = order.total_amount;
    const waMessage = encodeURIComponent(
      `Halo BantuGuru, saya telah melakukan pembayaran.\n\n` +
      `Invoice: ${order.invoice_number}\n` +
      `Total: Rp ${total.toLocaleString('id-ID')}\n` +
      `No. HP: ${order.whatsapp_number}\n\n` +
      `Mohon konfirmasi dan kirimkan file ke nomor ini. Terima kasih.`
    );
    const waUrl = `https://api.whatsapp.com/send?phone=${adminPhone || '6281234567890'}&text=${waMessage}`;

    return (
      <div className="min-h-screen bg-[#F2F3FA]">
        <Navbar cartCount={0} onCartClick={() => {}} onSearchClick={() => {}} />
        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-64px)]">
          <div className="w-full max-w-md bg-white rounded-[18px] p-6 shadow-[0_4px_24px_rgba(61,59,243,0.08)]">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🧾</div>
              <h2 className="text-xl font-extrabold mb-1">Konfirmasi Pembayaran</h2>
              <p className="text-sm text-[#555577]">Scan QRIS atau hubungi via WhatsApp</p>
            </div>
            <div className="bg-[#F2F3FA] rounded-xl p-4 mb-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#555577]">Invoice</span>
                <span className="font-bold">#{order.invoice_number}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#555577]">WhatsApp</span>
                <span className="font-bold">{order.whatsapp_number}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#555577]">Status</span>
                <span className="font-bold text-yellow-600">{order.status}</span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="text-[#555577]">Total Pembayaran</span>
                <span className="text-lg font-extrabold text-[#3D3BF3]">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="inline-block bg-white border-2 border-[#E0E0EE] rounded-xl p-3 mb-2">
                <div className="w-[180px] h-[180px] bg-[#F2F3FA] flex items-center justify-center text-sm text-[#8888AA]">
                  [QRIS Placeholder]
                </div>
              </div>
              <p className="text-[11px] text-[#8888AA]">Scan QRIS untuk melakukan pembayaran</p>
            </div>
            <div className="space-y-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-[#25D366] text-white rounded-full text-sm font-bold text-center no-underline hover:bg-[#20bd5a] transition-colors">
                Konfirmasi via WhatsApp
              </a>
              <button onClick={() => router.visit('/')} className="w-full py-3 bg-[#F2F3FA] text-[#555577] rounded-full text-sm font-bold border-none cursor-pointer hover:bg-[#E0E0EE] transition-colors">
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const products = allProducts || [];
  const cartItems = itemIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const total = cartItems.reduce((s, p) => s + p.price, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!whatsapp.match(/^08\d{8,12}$/) && !whatsapp.match(/^\+62\d{8,12}$/) && !whatsapp.match(/^62\d{8,12}$/)) {
      setError('Masukkan nomor WhatsApp yang valid (contoh: 081234567890)');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') },
        body: JSON.stringify({ whatsapp_number: whatsapp, items: cartItems.map((p) => ({ id: p.id })) }),
      });
      const data = await res.json();
      if (data.invoice_number) {
        window.location.href = `/checkout/${data.invoice_number}`;
      } else {
        setError('Gagal memproses pesanan. Silakan coba lagi.');
      }
    } catch {
      setError('Gagal memproses pesanan. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-[#F2F3FA]">
        <Navbar cartCount={0} onCartClick={() => {}} onSearchClick={() => {}} />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-64px)]">
          <div className="text-5xl mb-4">🛒</div>
          <p className="text-[#555577] mb-4">Tidak ada produk untuk checkout.</p>
          <button onClick={() => router.visit('/products')} className="px-6 py-3 bg-[#3D3BF3] text-white rounded-full text-sm font-bold cursor-pointer hover:bg-[#2A28D4]">
            Lihat Produk
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F3FA]">
      <Navbar cartCount={0} onCartClick={() => {}} onSearchClick={() => {}} />
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-md bg-white rounded-[18px] p-6 shadow-[0_4px_24px_rgba(61,59,243,0.08)]">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🛒</div>
            <h2 className="text-xl font-extrabold mb-1">Checkout</h2>
            <p className="text-sm text-[#555577]">Masukkan nomor WhatsApp Anda</p>
          </div>

          <div className="space-y-3 mb-4 max-h-[200px] overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 bg-[#F2F3FA] rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate">{item.name}</div>
                  <div className="text-[11px] text-[#8888AA]">{item.type}</div>
                  <div className="text-[13px] font-extrabold text-[#3D3BF3]">Rp {item.price.toLocaleString('id-ID')}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-4 p-3 bg-[#EEEEFF] rounded-xl">
            <span className="text-sm font-bold">Total</span>
            <span className="text-lg font-extrabold text-[#3D3BF3]">Rp {total.toLocaleString('id-ID')}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-[#555577] mb-1 block">Nomor WhatsApp</label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="081234567890"
                className="w-full border border-[#E0E0EE] rounded-xl px-4 py-3 text-sm font-sans outline-none focus:border-[#3D3BF3] transition-colors"
                required
              />
              {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-[#3D3BF3] text-white rounded-full text-sm font-bold border-none cursor-pointer hover:bg-[#2A28D4] transition-colors disabled:opacity-50"
            >
              {submitting ? 'Memproses...' : 'Buat Pesanan →'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
