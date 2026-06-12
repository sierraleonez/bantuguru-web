export default function CartPanel({ open, items, total, onClose, onRemove }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-[200] bg-[rgba(26,26,46,0.45)] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed right-0 top-0 bottom-0 w-[min(340px,100vw)] bg-white z-[201] flex flex-col shadow-[-8px_0_40px_rgba(61,59,243,0.12)] transition-transform duration-[350ms] ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5 border-b border-[#eee] flex items-center justify-between">
          <h3 className="text-[17px] font-extrabold">🛒 Keranjang Belanja</h3>
          <button onClick={onClose} className="w-8 h-8 bg-[#F2F3FA] rounded-full border-none cursor-pointer flex items-center justify-center text-base">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          {!items.length ? (
            <div className="py-10 px-5 text-center text-[#8888AA]">
              🛒<br /><br />Keranjang masih kosong.<br />Tambahkan produk untuk memulai.
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 bg-[#F2F3FA] rounded-xl mb-2 items-center">
                <span className="text-[32px] shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold mb-0.5 truncate">{item.name}</div>
                  <div className="text-[11px] text-[#8888AA]">{item.type}</div>
                  <div className="text-[13px] font-extrabold text-[#3D3BF3]">Rp {item.price.toLocaleString('id-ID')}</div>
                </div>
                <button onClick={() => onRemove(item.id)} className="bg-none border-none cursor-pointer text-base text-[#8888AA] p-1">
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-[#eee]">
          <div className="flex justify-between items-center mb-3.5">
            <span className="text-[13px] text-[#555577]">Total Pembayaran</span>
            <span className="text-lg font-extrabold text-[#3D3BF3]">Rp {total.toLocaleString('id-ID')}</span>
          </div>
          <button
            onClick={() => {
              if (!items.length) return;
              window.location.href = `/checkout?items=${items.map(i => i.id).join(',')}`;
            }}
            className="w-full py-3.5 bg-[#3D3BF3] text-white rounded-full text-sm font-bold border-none cursor-pointer hover:bg-[#2A28D4] transition-colors disabled:opacity-50"
            disabled={!items.length}
          >
            Lanjut ke Pembayaran →
          </button>
        </div>
      </div>
    </>
  );
}
