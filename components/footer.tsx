export default function Footer() {
  return (
    <footer className="mt-2 border-t border-dashed border-[#ddc5ad] px-2 pb-6 pt-6 text-center">
      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a87856]">
        almira's little corner of the internet
      </p>

      <p className="mt-2 text-[9px] font-semibold text-[#c19a7c]">
        made with stone and stick and a healthy amount of orange
      </p>

      <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.15em] text-[#d0b49d]">
        © {new Date().getFullYear()} · thanks for stopping by
      </p>
    </footer>
  );
}