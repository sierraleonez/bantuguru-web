export default function AboutSection() {
  return (
    <div className="px-5 py-4">
      <div className="bg-white rounded-[18px] p-6 shadow-[0_4px_24px_rgba(61,59,243,0.08)]">
        <div className="text-[22px] font-extrabold text-[#3D3BF3] mb-3">
          bantu<span className="inline-block w-6 h-6 bg-[#F0F67A]" style={{ clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)', margin: '0 4px' }} />guru
        </div>
        <p className="text-[13px] text-[#555577]">
          Bantuguru merupakan platform yang menyediakan berbagai kebutuhan proses belajar mengajar guru untuk membantu guru mempersiapkan pembelajaran dengan menarik dan <strong className="text-[#1A1A2E]">efisien waktu</strong>.
        </p>
      </div>
    </div>
  );
}
