export default function Navbar({ cartCount = 0, onCartClick, onSearchClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[rgba(61,59,243,0.07)] px-6 h-16 flex items-center justify-between">
      <a href="/" className="text-xl font-extrabold text-[#3D3BF3] leading-[1.1]">
        bantu<span className="block">guru</span>
      </a>
      <div className="flex items-center gap-5">
        <a href="/products" className="text-sm font-semibold text-[#555577] hover:text-[#3D3BF3] transition-colors no-underline">
          Produk Kami
        </a>
        <button onClick={onSearchClick} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EEEEFF] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#555577]">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
        <button onClick={onCartClick} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EEEEFF] transition-colors relative">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#555577]">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#3D3BF3] rounded-full text-[9px] font-bold text-white flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}
