export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#2A28D4] text-white px-5 py-3 rounded-full text-sm font-semibold z-[300] shadow-[0_4px_24px_rgba(61,59,243,0.3)] animate-[toast-in_0.3s_ease]">
      {message}
    </div>
  );
}
