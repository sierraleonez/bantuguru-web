export default function FilterChips({ label, options, active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-none flex-nowrap px-4">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`flex-none px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap ${
            active === opt
              ? 'bg-[#3D3BF3] text-white border-[#3D3BF3]'
              : 'bg-white text-[#555577] border-[#D8D8EE] hover:border-[#3D3BF3] hover:text-[#3D3BF3]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
