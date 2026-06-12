export default function SubjectCard({ name, emoji, bgClass = 'bg-[#EEEEFF]', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex-none w-[160px] min-h-[130px] rounded-[18px] p-5 relative overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_8px_36px_rgba(61,59,243,0.16)] flex flex-col ${bgClass}`}
    >
      <h3 className="text-[13px] font-extrabold leading-[1.2] mb-3">{name}</h3>
      <div className="flex items-center justify-between mt-auto">
        <span className="inline-flex items-center gap-1.5 bg-white rounded-full px-2.5 py-1 text-[11px] font-semibold border border-[#E0E0F0] cursor-pointer">
          Jelajahi →
        </span>
        <span className="text-[32px] leading-none shrink-0">{emoji}</span>
      </div>
    </div>
  );
}
