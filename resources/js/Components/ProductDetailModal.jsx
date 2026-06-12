export default function ProductDetailModal({ product, onClose, onAddToCart, cart }) {
  if (!product) return null;

  const inCart = cart?.find((c) => c.id === product.id);

  return (
    <div
      className="fixed inset-0 z-[200] bg-[rgba(26,26,46,0.55)] flex items-end sm:items-center justify-center transition-opacity"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full sm:max-w-md bg-white rounded-[24px_24px_0_0] sm:rounded-2xl p-6 pb-9 max-h-[80vh] overflow-y-auto translate-y-0 transition-transform duration-[350ms]">
        <div className="w-10 h-1 bg-[#E0E0EE] rounded-full mx-auto mb-5 sm:hidden" />

        <div className="text-7xl text-center py-4 bg-[#F2F3FA] rounded-xl mb-4">{product.icon}</div>
        <h3 className="text-xl font-extrabold mb-1">{product.name}</h3>
        <p className="text-sm text-[#8888AA] mb-3">{product.type} · {product.subject}</p>

        <div className="flex gap-2 flex-wrap mb-4">
          {[product.kelas, product.subject, product.type].filter(Boolean).map((tag) => (
            <span key={tag} className="px-3 py-1 bg-[#EEEEFF] text-[#3D3BF3] rounded-full text-[11px] font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-[#555577] mb-5">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-[22px] font-extrabold text-[#3D3BF3]">Rp {product.price.toLocaleString('id-ID')}</span>
          <button
            onClick={() => { onAddToCart(product); }}
            className="px-6 py-3 bg-[#3D3BF3] text-white rounded-full text-sm font-bold border-none cursor-pointer hover:bg-[#2A28D4] transition-colors"
          >
            {inCart ? '✓ Sudah di Keranjang' : '+ Tambah ke Keranjang'}
          </button>
        </div>
      </div>
    </div>
  );
}
