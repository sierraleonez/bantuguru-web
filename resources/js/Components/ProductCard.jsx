export default function ProductCard({ product, onAddToCart, onClick, variant = 'scroll' }) {
  const isYellow = product.icon === '📋';

  if (variant === 'grid') {
    return (
      <div
        onClick={() => onClick?.(product)}
        className={`flex flex-col bg-white rounded-[18px] p-3.5 shadow-[0_4px_24px_rgba(61,59,243,0.08)] cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(61,59,243,0.16)] ${isYellow ? 'bg-[#FAFFD6]' : ''}`}
      >
        <div className="w-full h-[100px] flex items-center justify-center text-5xl rounded-xl mb-2.5">{product.icon}</div>
        <div className="text-xs font-bold leading-[1.2] line-clamp-2 h-[30px] overflow-hidden">{product.name}</div>
        <div className="text-[11px] text-[#8888AA] mb-2 mt-[2px]">{product.type}</div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[13px] font-extrabold text-[#3D3BF3]">Rp {product.price.toLocaleString('id-ID')}</span>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-7 h-7 bg-[#EEEEFF] rounded-lg border-none cursor-pointer flex items-center justify-center hover:bg-[#3D3BF3] transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#3D3BF3] fill-none stroke-2 group-hover:stroke-white transition-colors">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onClick?.(product)}
      className={`flex-none w-[152px] flex flex-col bg-white rounded-[18px] p-3.5 shadow-[0_4px_24px_rgba(61,59,243,0.08)] cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(61,59,243,0.16)] ${isYellow ? 'bg-[#FAFFD6]' : ''}`}
    >
      <div className="w-full h-[90px] flex items-center justify-center text-5xl rounded-xl mb-2.5">{product.icon}</div>
        <div className="text-xs font-bold leading-[1.2] line-clamp-2 h-[30px] overflow-hidden">{product.name}</div>
        <div className="text-[11px] text-[#8888AA] mb-2 mt-[2px]">{product.type}</div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-[13px] font-extrabold text-[#3D3BF3]">Rp {product.price.toLocaleString('id-ID')}</span>
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="w-7 h-7 bg-[#EEEEFF] rounded-lg border-none cursor-pointer flex items-center justify-center hover:bg-[#3D3BF3] transition-colors group"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#3D3BF3] fill-none stroke-2 group-hover:stroke-white transition-colors">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}
