export default function CtaBanner({ onCtaClick }) {
  return (
    <div className="mx-4 my-5 bg-gradient-to-r from-[#3D3BF3] to-[#5B59FF] rounded-[18px] p-5 flex items-center gap-4 relative overflow-hidden">
      <div className="absolute -right-5 -top-5 w-[120px] h-[120px] rounded-full bg-white/8" />
      <span className="text-4xl shrink-0">🎧</span>
      <div className="flex-1">
        <h3 className="text-sm font-extrabold text-white mb-0.5">Perlu perangkat pembelajaran khusus?</h3>
        <p className="text-[11px] text-white/75">Hubungi untuk custom perangkat pembelajaran</p>
      </div>
      <button onClick={onCtaClick} className="shrink-0 bg-white text-[#3D3BF3] px-3.5 py-2 rounded-full text-xs font-bold border-none cursor-pointer whitespace-nowrap shadow-[0_2px_12px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform">
        Hubungi Kami →
      </button>
    </div>
  );
}
