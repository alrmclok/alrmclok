import Sidebar from "@/components/sidebar";
import MusicBox from "@/components/musicBox";

export const metadata = {
  title: "Home · Almira",
  description: "Almira's personal corner and project showcase.",
};

export default function HomePage() {
  return (
    // 1. Replaced 'md:flex' with 'flex flex-col md:flex-row' to make sure your Sidebar layout stacks beautifully on mobile screens.
    <div className="flex min-h-screen w-full flex-col bg-[#fffaf1] font-mono text-[#4d2b19] selection:bg-[#e85d04] selection:text-white md:flex-row">

      {/* Optional: Drop <Sidebar /> here if your layout requires it */}
      {/* <Sidebar /> */}

      {/* 2. Removed secondary 'min-h-screen' to fix nested viewport layout issues. Added 'justify-between' to anchor content. */}
      <div className="relative flex min-w-0 flex-1 flex-col justify-between overflow-hidden">

        {/* 3. Consolidated background grids and radial masks entirely into Tailwind utility properties */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(232,93,4,0.08)_1px,transparent_1px),linear-gradient(rgba(232,93,4,0.08)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
          aria-hidden="true"
        />

        {/* 4. Keeps the compact 'max-w-2xl' width and handles optimal flex distribution */}
        <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 px-4 py-8 sm:px-8">

          {/* Centered target layout block */}
          <div className="flex flex-1 items-center justify-center py-6">
            <MusicBox
              title="Akad"
              artist="Payung Teduh"
              trackId="5CwcXgsF9jcyqwkl5uxKnD"
              badge=". . ."
              accentColor="#535353"
            />
          </div>

          {/* 5. Refined the interaction physics: focus rings, smoother click transformations, and clean padding boundaries */}
          <div className="mt-auto flex justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#4d2b19] outline-none transition-all duration-200 hover:-translate-y-0.5 hover:text-[#e85d04] focus-visible:ring-2 focus-visible:ring-[#e85d04] active:translate-y-0"
            >
              ← It's Time to Let Go
            </a>
          </div>

        </main>
      </div>
    </div>
  );
}
