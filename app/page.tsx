import Link from "next/link";
import Sidebar, { StarIcon } from "@/components/sidebar";
import { PROJECTS_DATA } from "./projects/data";
import Footer from "@/components/footer";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

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

        <div className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full border-[40px] border-[#e85d04]/5 sm:block" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 hidden h-80 w-80 rounded-full border-[50px] border-[#c96b32]/5 sm:block" />

        <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-3 pt-5 pb-0 sm:gap-8 sm:px-7 sm:pt-7 sm:pb-0 lg:px-10 lg:pt-10 lg:pb-0">
          <section className="relative mb-8 sm:mb-10">
            {/* ↑ added mb-8/sm:mb-10 so the breakout sticker at the bottom
      has room and doesn't collide with whatever comes next */}

            <div className="absolute -left-2 top-5 h-full w-full rotate-1 rounded-2xl bg-[#e85d04]/10" />

            <div className="relative rounded-2xl border-2 border-[#8f3600] bg-[#fffdf7] shadow-[6px_7px_0_#d8bba0]">
              <div
                className="h-3 rounded-t-2xl border-b-2 border-[#8f3600]"
                style={{
                  backgroundColor: "#e85d04",
                  backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 10px,
            rgba(255,255,255,.2) 10px,
            rgba(255,255,255,.2) 20px
          )
        `,
                }}
              />

              <div className="md:hidden absolute right-3 top-6 rotate-3 rounded-sm border border-[#d7b99c] bg-[#fff3d8] px-2 py-1.5 text-[8px] font-black uppercase tracking-widest text-[#9d3c00] shadow-sm sm:right-5 sm:top-5 sm:rotate-6 sm:px-3 sm:py-2 sm:text-[9px]">
                personal archive
              </div>

              <div className="grid gap-6 p-4 pt-14 sm:gap-8 sm:p-8 sm:pt-16 lg:grid-cols-[1fr_auto] lg:p-10">
                <div className="max-w-3xl">
                  <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#a45a2b]">
                    <span className="rounded-full border border-[#e85d04]/30 bg-[#fff4e7] px-3 py-1">
                      Home
                    </span>
                    <span className="text-[#d0a98a]">•</span>
                    <span>developer · artist · builder</span>
                  </div>

                  <h2 className="max-w-2xl text-3xl font-black leading-[0.98] tracking-[-0.06em] text-[#572300] sm:text-5xl lg:text-6xl">
                    hiya! i'm{" "}
                    <span className="relative inline-block text-[#e85d04]">
                      Almira
                      <span className="absolute -bottom-1 left-0 h-1.5 w-full -rotate-1 rounded-full bg-[#e85d04]/20" />
                    </span>
                    <span className="text-[#572300]">.</span>
                  </h2>

                  <p className="mt-5 max-w-xl text-xs font-semibold leading-6 text-[#70432a] sm:mt-6 sm:text-base sm:leading-7">
                    Blah blah blah, description here.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    <span className="rounded-md -translate-y-[2px] bg-[#e85d04] px-3 py-2 text-[10px] font-black uppercase tracking-wider text-white shadow-[3px_3px_0_#9d3c00]">
                      currently building
                    </span>
                    <span className="rounded-md border border-[#d8b99e] bg-[#fff8ec] px-3 py-2 text-[10px] font-bold text-[#71452d]">
                      web stuff
                    </span>
                    <span className="rounded-md border border-[#d8b99e] bg-[#fff8ec] px-3 py-2 text-[10px] font-bold text-[#71452d]">
                      3D
                    </span>
                    <span className="rounded-md border border-[#d8b99e] bg-[#fff8ec] px-3 py-2 text-[10px] font-bold text-[#71452d]">
                      game dev
                    </span>
                  </div>
                </div>

                <div className="relative hidden min-w-[180px] lg:block">
                  <div className="absolute right-0 top-3 rotate-6 rounded-xl border-2 border-[#9d3c00] bg-[#fff4df] p-4 shadow-[4px_5px_0_#d9b899]">
                    <div className="mb-3 flex items-center justify-between gap-8">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#9d3c00]">
                        desk note
                      </span>
                      <StarIcon className="h-4 w-4 fill-[#e85d04]" />
                    </div>

                    <div className="space-y-2 text-[10px] font-bold text-[#6a3218]">
                      <p>✦ make weird things</p>
                      <p>✦ learn something new</p>
                      <p>✦ ship the silly idea</p>
                      <p>✦ repeat</p>
                    </div>

                    <div className="mt-4 border-t border-dashed border-[#d8b899] pt-3 text-[8px] uppercase tracking-widest text-[#b47b57]">
                      last edited: recently-ish
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 rounded-b-2xl border-t border-[#ead7c3] bg-[#fff8ed] px-4 py-3 text-[8px] font-bold uppercase tracking-widest text-[#a2633d] sm:px-8 sm:text-[9px]">
                <span>am i here?</span>
                <span>no i'm here!</span>
              </div>

              {/* 🌟 FLOATING OVERLAPPING STICKER IMAGE (Bottom-Middle Breakout) */}
              {/* Pins the sticker exactly to the horizontal center line of the bottom archive stripe */}
              <div className="absolute -bottom-4 left-1/2 z-20 w-16 h-16 -translate-x-1/2 rotate-3 transition-transform duration-200 hover:scale-110 active:scale-95 sm:-bottom-5 sm:w-20 sm:h-20">
                <label className="block cursor-pointer">
                  {/* Hidden checkbox that tracks the click state */}
                  <input type="checkbox" className="peer hidden" />

                  {/* The container that handles the smooth 360-degree spin */}
                  <div className="transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] peer-checked:rotate-360">
                    <img
                      src="/images/stickers/fantube_st.png"
                      alt="Almira"
                      className="h-full w-full max-w-full object-contain filter drop-shadow-[0px_4px_0px_rgba(143,54,0,0.15)]"
                    />
                  </div>
                </label>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative">
              {/* Background decorative offset shadow */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#f0ddc8]" />

              <div className="relative rounded-2xl border-2 border-[#d8b99d] bg-[#fffdf7] p-4 shadow-sm sm:p-7">
                <div className="mb-5 flex items-end justify-between gap-3 border-b-2 border-dashed border-[#e4cdb8] pb-4 sm:mb-6 sm:gap-4">
                  <div>
                    <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#e85d04]">
                      field notes
                    </p>
                    <h3 className="text-xl font-black tracking-tight text-[#592a10] sm:text-2xl">
                      A lil about me
                    </h3>
                  </div>

                  <span className="rotate-3 text-2xl text-[#e85d04]">✦</span>
                </div>

                <div className="space-y-4 text-xs font-semibold leading-6 text-[#69412b] sm:text-sm">
                  <div className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                      01
                    </span>
                    <p>
                      <strong className="text-[#e85d04]">
                        Name / Pronouns
                      </strong>
                      <br />
                      Almira (she/her)
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                      02
                    </span>
                    <p>
                      <strong className="text-[#e85d04]">
                        Things I like doing
                      </strong>
                      <br />
                      web dev, illustration, 3D sculpting & music
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                      03
                    </span>
                    <p>
                      <strong className="text-[#e85d04]">Current stack</strong>
                      <br />
                      Next.js, React, TypeScript, Tailwind CSS
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0dd] text-[10px] font-black text-[#e85d04]">
                      04
                    </span>
                    <p>
                      <strong className="text-[#e85d04]">Current goal</strong>
                      <br />
                      building cool personal projects & open source tools
                    </p>
                  </div>
                </div>

                <div className="w-full text-right">
                  <div className="mt-6 inline-block max-w-full rotate-2 border border-[#d6b58f] bg-[#fff1cf] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#9d3c00] shadow-sm">
                    &lt;&lt;&lt;&lt; fantube
                  </div>
                </div>

                {/* 🌟 FLOATING OVERLAPPING STICKER IMAGE (Bottom-Left Corner Breakout) */}
                {/* Uses negative bottom and left coordinates to break through the card borders with a reverse tilt (-rotate-12) */}
                <div className="absolute -bottom-3 -left-1 z-20 w-14 h-14 -rotate-12 transition-transform duration-200 hover:scale-110 active:scale-95 sm:-bottom-5 sm:-left-5 sm:w-18 sm:h-18">
                  <label className="block cursor-pointer">
                    {/* Hidden checkbox that tracks the click state */}
                    <input type="checkbox" className="peer hidden" />

                    {/* The container that handles the smooth 360-degree spin */}
                    <div className="transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] peer-checked:rotate-360">
                      <img
                        src="/images/stickers/fan_bowtie.png"
                        alt="Almira"
                        className="h-full w-full max-w-full object-contain filter drop-shadow-[0px_4px_0px_rgba(143,54,0,0.15)]"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl border-2 border-[#d8b99d] bg-[#f7ecdc] p-4 pb-16 sm:p-7">
              {/* clipping layer — ONLY wraps the decorative circle, matches the
      card's own rounded-2xl so the circle gets clipped to the card shape */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-[#e85d04]/10" />
              </div>

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a2633d]">
                tiny manifesto
              </p>

              <h3 className="mt-3 max-w-sm text-2xl font-black leading-tight tracking-[-0.04em] text-[#572300] sm:text-3xl">
                make things you'd want to stumble across.
              </h3>

              <div className="my-6 h-px bg-[#d8b99d]" />

              <div className="space-y-3 text-xs font-semibold leading-6 text-[#70432a]">
                <p>
                  This site is part portfolio, part archive, and part evidence
                  that I actually finished some of those projects.
                </p>
                <p>
                  Some parts are totally finished, but others will probably need
                  to be rebuilt a few times.
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#e85d04]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[#9d3c00]">
                  no perfect projects required
                </span>
              </div>

              {/* sticker is a sibling of the clipping layer, not inside it —
      so it still bleeds past the card edge freely */}
              <div className="absolute -bottom-3 -right-3 z-20 w-14 h-14 rotate-12 transition-transform duration-200 hover:scale-110 active:scale-95 sm:-bottom-5 sm:-right-5 sm:w-20 sm:h-20">
                <label className="block cursor-pointer">
                  {/* Hidden checkbox that tracks the click state */}
                  <input type="checkbox" className="peer hidden" />

                  {/* The container that handles the smooth 360-degree spin */}
                  <div className="transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] peer-checked:rotate-360">
                    <img
                      src="/images/stickers/testtube.png"
                      alt="Almira"
                      className="h-full w-full max-w-full object-contain filter drop-shadow-[0px_4px_0px_rgba(143,54,0,0.15)]"
                    />
                  </div>
                </label>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#a2633d]">
                  selected files
                </p>

                <h3 className="flex items-center gap-2 text-xl font-black tracking-tight text-[#592a10] sm:text-2xl">
                  <span className="text-[#e85d04]">✦</span>
                  some of my fav projects
                </h3>
              </div>

              <Link
                href="/projects"
                className="group rounded-md border border-[#d8b99d] bg-[#fff8ec] px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#8b4b29] transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
              >
                view all
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {featuredProjects.length > 0 ? (
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`group relative min-w-0 overflow-hidden rounded-2xl border-2 border-[#d8b99d] bg-[#fffdf7] p-4 shadow-[3px_4px_0_#ead7c3] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[5px_7px_0_#d8b99d] sm:p-5 ${
                      index % 3 === 1 ? "sm:rotate-[0.5deg]" : ""
                    } ${index % 3 === 2 ? "sm:-rotate-[0.5deg]" : ""}`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0dd] text-xs font-black text-[#e85d04]">
                        0{index + 1}
                      </span>

                      <span className="text-[9px] font-black uppercase tracking-widest text-[#b08362] transition-colors group-hover:text-[#e85d04]">
                        open file →
                      </span>
                    </div>

                    <div className="mb-5">
                      <h4 className="break-words text-base font-black leading-tight text-[#592a10] transition-colors group-hover:text-[#e85d04] sm:text-lg">
                        {project.title}
                      </h4>

                      <p className="mt-2 line-clamp-3 text-xs font-medium leading-5 text-[#805238]">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-[#f4e5d3] px-2 py-1 text-[9px] font-bold text-[#744329]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#ead7c3] pt-3">
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#b08362]">
                        project archive
                      </span>

                      <StarIcon className="h-3.5 w-3.5 fill-[#e85d04] transition-transform duration-200 group-hover:rotate-45" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-[#d8b99d] bg-[#fffdf7] p-12 text-center text-xs font-bold text-[#a2633d]">
                no projects pinned up yet! (´w`)
              </div>
            )}
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
