export default function SearchOverlay({ open, onClose, products, onProductClick }) {
  return (
    <div
      className={`fixed inset-0 z-[200] bg-[rgba(26,26,46,0.55)] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`absolute top-3 left-4 right-4 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(61,59,243,0.15)] transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-5'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2.5 items-center">
          <input
            id="search-input"
            placeholder="Cari perangkat pembelajaran..."
            className="flex-1 border border-[#E0E0EE] rounded-xl px-3.5 py-2.5 text-sm font-sans outline-none focus:border-[#3D3BF3] transition-colors"
          />
          <button onClick={onClose} className="bg-none border-none cursor-pointer text-lg text-[#555577]">✕</button>
        </div>
        <div id="search-results" className="mt-3 max-h-[300px] overflow-y-auto">
          {products.map((p) => {
            const q = document.getElementById('search-input')?.value?.toLowerCase() || '';
            if (!q || (!p.name.toLowerCase().includes(q) && !p.type?.toLowerCase().includes(q) && !p.subject?.toLowerCase().includes(q))) {
              return null;
            }
            return (
              <div
                key={p.id}
                onClick={() => onProductClick(p)}
                className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-[#F2F3FA] transition-colors"
              >
                <span className="text-[28px]">{p.icon}</span>
                <div>
                  <div className="text-[13px] font-semibold">{p.name}</div>
                  <div className="text-[11px] text-[#8888AA]">{p.type} · {p.subject}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
