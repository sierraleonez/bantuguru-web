export default function Footer() {
  return (
    <footer className="bg-[#2A28D4] px-5 py-6 mt-4">
      <div className="flex justify-between items-end">
        <div>
          <div className="text-lg font-extrabold text-white leading-tight">bantu<br />guru</div>
          <div className="text-[11px] text-white/60 mt-3 mb-0.5">Kontak Kami</div>
          <div className="text-[13px] text-white/90">bantuguruide@gmail.com</div>
        </div>
        <div className="flex gap-2.5">
          <span className="w-[38px] h-[38px] bg-white/12 rounded-xl flex items-center justify-center cursor-pointer text-base hover:bg-white/25 transition-colors">📸</span>
          <span className="w-[38px] h-[38px] bg-white/12 rounded-xl flex items-center justify-center cursor-pointer text-base hover:bg-white/25 transition-colors">▶️</span>
        </div>
      </div>
    </footer>
  );
}
