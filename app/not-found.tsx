import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { Terminal } from "lucide-react";

export const metadata = {
  title: "404 · Almira",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#fffaf1] font-mono text-[#4d2b19] selection:bg-[#e85d04] selection:text-white md:flex">
      <Sidebar />

      <div className="relative min-w-0 flex-1 overflow-hidden flex flex-col justify-between min-h-screen">
        {/* Background grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(232,93,4,.08) 1px, transparent 1px),
              linear-gradient(rgba(232,93,4,.08) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 82%)",
          }}
        />

        <main className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-12 sm:px-6">
          {/* Main Container - No tilt angle, matched standard project box offsets */}
          <div className="relative rounded-2xl border-2 border-[#8f3600] bg-[#fffdf7] p-5 shadow-[4px_5px_0_#d9b899] sm:p-8">
            {/* Terminal Style Header Row */}
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#d8b99d] pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#e85d04]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#9d3c00]">
                  terminal type shi
                </span>
              </div>
              <span className="rounded bg-[#fff0dd] px-2 py-0.5 text-[9px] font-black uppercase text-[#e85d04]">
                404
              </span>
            </div>

            {/* Error Headers */}
            <div className="mt-6 flex flex-col items-start gap-1">
              <div className="text-3xl font-black leading-none tracking-tighter text-[#572300] sm:text-4xl">
                404 / Not Found
              </div>
            </div>

            {/* Clean, Grounded Explanation Text */}
            <p className="mt-4 text-xs font-semibold leading-6 text-[#70432a] sm:text-sm">
              so you came here either the URL is completely mistyped or i
              deleted this file to fix the layout and completely forgot it
              existed. or you just hit some button that i forgot to link it
              somewhere, am i right or am i right lads
            </p>

            {/* Link Wrapper - Uses your exact clean project button styling parameters */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-[#d8b99e] bg-[#fff8ec] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-wider text-[#71452d] transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
              >
                ← Back to Home
              </Link>
            </div>

            {/* Bottom Status Info Strip */}
            <div className="mt-8 border-t border-[#ead7c3] pt-4 text-center">
              <div className="inline-block border border-dashed border-[#b47b57] bg-[#fffaf1] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#a2633d]">
                Error Reference: Route Missing
              </div>
            </div>

            {/* 🌟 FLOATING STICKER (Bottom Right Corner) */}
            <div className="absolute -bottom-3 -right-3 z-20 w-14 h-14 rotate-12 transition-transform duration-200 hover:scale-110 active:scale-95 sm:-bottom-5 sm:-right-5 sm:w-16 sm:h-16">
              <label className="block cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <div className="transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] peer-checked:rotate-360">
                  <img
                    src="/images/stickers/testtube.png"
                    alt="Decorative Sticker"
                    className="h-full w-full max-w-full object-contain filter drop-shadow-[0px_4px_0px_rgba(143,54,0,0.15)]"
                  />
                </div>
              </label>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
