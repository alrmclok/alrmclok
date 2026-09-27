import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import MusicBox from "@/components/musicBox";

export const metadata = {
  title: "About · Almira",
  description: "Metadata description, nothing here.",
};

const INTERESTS = [
  // mix your actual interests + fandoms here, in whatever order feels right
  "geometry dash",
  "illustration",
  "fantube",
  "3d modeling",
  "something in godot",
  "ren'py too",
  "undertale n' deltarune",
  "fantube",
  "bfdi",
  "inanimate insanity",
  "specific but icedcave",
  "fantube",
  "grief 97%",
  "logitech k120 keyboard",
  "hatsune miku",
  "did i already mentioned fantube?",
  "sandrone (never played the game)",
  "larp something",
  "primadona",
  "████",
];

const FUN_FACTS = [
  "// my favorite gd level is future funk, the first and ii. it has cool deco, cool creator, and cool gameplay",
  "// i don't really have much friends (maybe not even a single bit :cry:), BUT i could say, well, say something! yeah...",
  "// I FUCKING LOVE ORANGES, not really much as i got it from mbg and it is pretty much not the best orange you could have, might considering to buy some when groceries time",
  "// when i was working on something, i don't go outside to buy something, i would just starve to sleep if my parents does not come home bringing me something to eat or drink, but pretty much a chips is to go",
  "// to clarify that i STILL go outside, just not when coming back home from school, maybe weekend, maybe not, depends",
  "// the main page formerly had a fading checkerboard background, but was scrapped since... since when? gasp*, mandildo effect"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#fffaf1] font-mono text-[#4d2b19] selection:bg-[#e85d04] selection:text-white md:flex">
      <Sidebar />

      <div className="relative min-w-0 flex-1 overflow-hidden">
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

        <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-3 pt-5 pb-0 sm:gap-8 sm:px-7 sm:pt-7 sm:pb-0 lg:px-10 lg:pt-10 lg:pb-0">
          {/* ---- 1. Profile banner card ---- */}
          <section className="relative">
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#8f3600] bg-[#fffdf7] shadow-[6px_7px_0_#d8bba0]">
              {/* banner image / gradient */}
              <div className="relative w-full aspect-[4/1] overflow-hidden border-b-2 border-[#8f3600]">
                <img
                  src="/images/banner.png"
                  alt="FanTube"
                  className="h-full w-full max-w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        90deg,
                        transparent 0,
                        transparent 10px,
                        rgba(232,93,4,.05) 10px,
                        rgba(232,93,4,.05) 20px
                      )
                    `,
                  }}
                />

                <div className="absolute right-3 top-3 rotate-3 rounded-sm border border-[#d7b99c] bg-[#fff3d8] px-2 py-1.5 text-[8px] font-black uppercase tracking-widest text-[#9d3c00] shadow-sm sm:right-5 sm:top-5 sm:rotate-6 sm:px-3 sm:py-2 sm:text-[9px]">
                  about me
                </div>
              </div>

              <div className="relative flex flex-col items-center gap-4 px-4 pb-6 pt-0 sm:flex-row sm:items-end sm:gap-6 sm:px-8">
                {/* pfp, overlapping the banner */}
                <div className="relative -mt-12 h-24 w-24 shrink-0 sm:-mt-14 sm:h-32 sm:w-32">
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-full bg-[#e85d04]/20" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#e85d04] bg-white">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Rzh9tdKflcBfT6USteYSoe1sQpjGvuywhCv1YFO-gw&s"
                      alt="FanTube"
                      className="h-full w-full max-w-full object-cover"
                    />
                  </div>
                </div>

                {/* 🌟 SPACING FIX: Added 'sm:pt-6' here to give the text layout space on top exclusively on desktop windows */}
                <div className="flex flex-1 flex-col items-center gap-3 pt-2 text-center sm:items-start sm:pt-6 sm:text-left">
                  <div>
                    <h1 className="text-2xl font-black tracking-[-0.05em] text-[#572300] sm:text-3xl">
                      Almira
                    </h1>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-[#e85d04]">
                      dev · artist · builder
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
                    <span className="rounded border border-[#e85d04] bg-[#e85d04] px-2 py-1 text-[9px] font-black text-white">
                      she/they/any
                    </span>
                    <span className="rounded border border-[#d7b99d] bg-white px-2 py-1 text-[9px] font-black text-[#70432a]">
                      {/* add another tag, e.g. age range, timezone, "chronically online" etc */}
                      17+
                    </span>
                    <span className="rounded border border-[#d7b99d] bg-white px-2 py-1 text-[9px] font-black text-[#70432a]">
                      UTC/GMT +7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ---- 2. "a lil more about me" — continues home's 01–04 card ---- */}
          <section className="relative">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#f0ddc8]" />

            <div className="relative rounded-2xl border-2 border-[#d8b99d] bg-[#fffdf7] p-4 shadow-sm sm:p-7">
              <div className="mb-5 flex items-end justify-between gap-3 border-b-2 border-dashed border-[#e4cdb8] pb-4 sm:mb-6 sm:gap-4">
                <div>
                  <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#e85d04]">
                    field notes (again)
                  </p>
                  <h3 className="text-xl font-black tracking-tight text-[#592a10] sm:text-2xl">
                    a lil more about me
                  </h3>
                </div>

                <span className="rotate-3 text-2xl text-[#e85d04]">✦</span>
              </div>

              <div className="space-y-4 text-xs font-semibold leading-6 text-[#69412b] sm:text-sm">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                    05
                  </span>
                  <p>
                    <strong className="text-[#e85d04]">
                      How I got into stuff like this
                    </strong>
                    <br />
                    started coding because of a school project and it turned out
                    to be as easy as peeling oranges ig... for drawing and
                    design, honestly no idea when it started exactly, maybe
                    somewhere between 2019-2022 idk
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                    06
                  </span>
                  <p>
                    <strong className="text-[#e85d04]">
                      How I actually work
                    </strong>
                    <br />i don't just magically get ideas and code them lol i
                    dump everything into a random markdown file for reference,
                    and then either completely forget it exists forever OR
                    fixate on it months after that depending on the mood
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                    07
                  </span>
                  <p>
                    <strong className="text-[#e85d04]">Right now I'm...</strong>
                    <br />
                    {/* learning / working on / into */}
                    gooning
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ---- 3. Interests & fandoms (combined tags) ---- */}
          <div className="relative">
            <section className="relative overflow-hidden rounded-2xl border-2 border-[#d8b99d] bg-[#f7ecdc] p-4 sm:p-7">
              {/* Decorative top-right circle */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-[#e85d04]/10" />

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a2633d]">
                currently into
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#572300] sm:text-3xl">
                interests &amp; maybe fandom too
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {INTERESTS.map((item, idx) => (
                  <span
                    key={`${item}-${idx}`}
                    className="rounded-md border border-[#d8b99e] bg-[#fff8ec] px-3 py-2 text-[10px] font-bold text-[#71452d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Sticker is outside the clipped section */}
            <div className="absolute -bottom-3 -right-1 z-20 h-14 w-14 rotate-12 transition-transform duration-200 hover:scale-110 active:scale-95 sm:-bottom-5 sm:-right-5 sm:h-18 sm:w-18">
              <img
                src="/images/stickers/fan.png"
                alt="Fan"
                className="h-full w-full object-contain drop-shadow-[3px_4px_0px_rgba(143,54,0,0.2)]"
              />
            </div>
          </div>

          {/* ---- 3.5. Music section!! ---- */}
          <section className="relative">
            {/* Dynamic Header Counter */}
            <div className="mb-6 flex items-center justify-between border-b border-dashed border-[#ddc5ad] pb-2">
              <div className="flex items-center gap-2">
                <span className="animate-spin [animation-duration:6s] text-[#e85d04]">
                  ✦
                </span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#4d2b19]">
                  Fav Music!
                </h3>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#a87856] bg-[#4d2b19]/5 px-2 py-0.5 rounded border border-[#ddc5ad]/40">
                Total: 3 Tracks
              </span>
            </div>

            {/* Smart grid stretches the last item if total count is odd */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              <div className="w-full flex justify-center">
                <MusicBox
                  title="Foto Kita Blur"
                  artist="Sal Priadi"
                  trackId="0qbRvZ1alpPGmV52wKb2gJ"
                  badge="Favorite #1"
                  accentColor="#481800"
                />
              </div>
              <div className="w-full flex justify-center">
                <MusicBox
                  title="Katakan Saja"
                  artist="Adikara"
                  trackId="6bIQQJk47tJsUmlqd1hEUW"
                  badge="Favorite #2"
                  accentColor="#535353"
                />
              </div>
              <div className="w-full flex justify-center md:col-span-2 md:max-w-none">
                <MusicBox
                  title="Lalu Biru"
                  artist="Eleanor Whisper"
                  trackId="3iC60wudai0qrFnkFUDHSs"
                  badge="Favorite #3"
                  accentColor="#9F1302"
                />
              </div>
            </div>
          </section>

          {/* ---- 4. Fun / random facts (numbered) ---- */}
          {/* 🌟 CRITICAL FIX: Keeping this outer layout block relative so our breakout targets the card box wrapper */}
          <section className="relative">
            <div className="mb-5">
              <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#a2633d]">
                bonus content
              </p>
              <h3 className="flex items-center gap-2 text-xl font-black tracking-tight text-[#592a10] sm:text-2xl">
                <span className="text-[#e85d04]">✦</span>
                random facts about me
              </h3>
            </div>

            {/* 🌟 CRITICAL FIX: The card box itself must NOT have 'overflow-hidden' so the image can bleed out.
      Added position 'relative' right here to make sure it acts as the exact bounding frame for our sticker! */}
            <div className="relative rounded-2xl border-2 border-[#d8b99d] bg-[#fffdf7] p-4 shadow-[3px_4px_0_#ead7c3] sm:p-7">
              <div className="space-y-4 text-xs font-semibold leading-6 text-[#69412b] sm:text-sm">
                {FUN_FACTS.map((fact, index) => (
                  <div key={`fact-${index}`} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{fact}</p>
                  </div>
                ))}
              </div>

              {/* 🌟 FLOATING OVERLAPPING STICKER IMAGE (Bottom-Left Corner Breakout) */}
              {/* Uses negative bottom and left positioning to pop clean out of the box borders with a reverse tilt (-rotate-12) */}
              <div className="absolute -bottom-3 -left-3 z-20 w-14 h-14 -rotate-12 transition-transform duration-200 hover:scale-110 active:scale-95 sm:-bottom-5 sm:-left-5 sm:w-18 sm:h-18">
                <img
                  src="/images/stickers/testtube.png"
                  alt="Test Tube"
                  className="h-full w-full max-w-full object-contain filter drop-shadow-[2px_3px_0px_rgba(143,54,0,0.2)]"
                />
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
