export default function HeroSection({ onCtaClick }) {
  return (
    <div className="mx-4 my-4 rounded-2xl bg-gradient-to-br from-[#EEEEFF] via-[#f5f5ff] to-[#FAFFD6] p-7 pt-10 relative overflow-hidden min-h-[300px]">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[rgba(61,59,243,0.18)] blur-[40px]" />
      <div className="absolute bottom-5 right-14 w-[100px] h-[100px] rounded-full bg-[rgba(61,59,243,0.12)] blur-[30px]" />
      <div className="absolute bottom-14 left-1/2 w-9 h-9 bg-[#F0F67A]" style={{ clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)', animation: 'spin 8s linear infinite' }} />
      <div className="relative z-10">
        <h1 className="text-[32px] font-extrabold leading-[1.1] mb-2">
          <span className="text-[#3D3BF3]">bantuguru</span><br />siap mengajar
        </h1>
        <p className="text-sm text-[#555577] mb-6">solusi guru sukses mengajar</p>
        <button onClick={onCtaClick} className="inline-flex items-center gap-2 bg-[#3D3BF3] text-white px-[22px] py-3 rounded-full text-sm font-bold border-none cursor-pointer shadow-[0_4px_16px_rgba(61,59,243,0.3)] hover:bg-[#2A28D4] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(61,59,243,0.4)] transition-all">
          Lihat Produk
          <span className="w-[26px] h-[26px] bg-white/25 rounded-full flex items-center justify-center text-base">→</span>
        </button>
      </div>
      <div className="mt-6 text-right relative h-[200px]">
        <div className="absolute -right-2 bottom-0 w-[200px] h-[200px] bg-gradient-to-br from-[#c8c7ff] to-[#EEEEFF] rounded-t-2xl flex items-center justify-center text-6xl">
          👩‍🏫
        </div>
      </div>
    </div>
  );
}
