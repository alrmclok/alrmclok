import Link from "next/link";
import Sidebar, { StarIcon } from "@/components/sidebar";
import Footer from "@/components/footer";
import { PROJECTS_DATA } from "./data";

export const metadata = {
  title: "Projects · Almira",
  description: "Metadata description, nothing here.",
};

export default function ProjectsPage() {
  const projects = PROJECTS_DATA;

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
          {/* header */}
          <section className="relative mb-2">
            <div className="absolute -left-2 top-4 h-full w-full rotate-1 rounded-2xl bg-[#e85d04]/10" />

            <div className="relative rounded-2xl border-2 border-[#8f3600] bg-[#fffdf7] p-5 shadow-[6px_7px_0_#d8bba0] sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#a45a2b]">
                <Link
                  href="/"
                  className="rounded-full border border-[#e85d04]/30 bg-[#fff4e7] px-3 py-1 transition-colors hover:border-[#e85d04]"
                >
                  ← home
                </Link>
                <span className="text-[#d0a98a]">•</span>
                <span>project archive</span>
              </div>

              <h1 className="max-w-2xl text-3xl font-black leading-[0.98] tracking-[-0.06em] text-[#572300] sm:text-5xl">
                all my{" "}
                <span className="relative inline-block text-[#e85d04]">
                  projects
                  <span className="absolute -bottom-1 left-0 h-1.5 w-full -rotate-1 rounded-full bg-[#e85d04]/20" />
                </span>
                <span className="text-[#572300]">.</span>
              </h1>

              <p className="mt-4 max-w-xl text-xs font-semibold leading-6 text-[#70432a] sm:text-base sm:leading-7">
                every file in the cabinet — web stuff, 3D things, game dev
                experiments, and whatever else I got stuck making at 2 AM.
              </p>

              <div className="mt-5 text-[9px] font-black uppercase tracking-widest text-[#9d3c00]">
                {projects.length} {projects.length === 1 ? "file" : "files"} on record
              </div>
            </div>
          </section>

          {/* grid */}
          <section>
            {projects.length > 0 ? (
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
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

                    <div className="mb-3">
                      <p className="mb-1 text-[8px] font-black uppercase tracking-widest text-[#a2633d]">
                        {project.date} · {project.role}
                      </p>
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
                        {project.client ?? "personal project"}
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