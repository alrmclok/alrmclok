import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import ImageWithFallback from "@/components/ImageWithFallback";
import { PROJECTS_DATA } from "../data";
import fs from "fs";
import path from "path";

const STICKERS_DIR = path.join(process.cwd(), "public", "images", "stickers");
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"];

function getStickerFiles(): string[] {
  try {
    return fs
      .readdirSync(STICKERS_DIR)
      .filter((file) =>
        IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()),
      )
      .map((file) => `/images/stickers/${file}`);
  } catch {
    return [];
  }
}

const STICKERS = getStickerFiles();

const POSITIONS = ["top-right", "bottom-right"] as const;

function getRandomSticker() {
  if (!STICKERS.length) return null;

  const image = STICKERS[Math.floor(Math.random() * STICKERS.length)];
  const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
  const rotation = Math.random() < 0.5 ? "rotate-6" : "-rotate-6";

  return {
    image,
    position,
    rotation,
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((project) => project.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} · Almira`,
    description: project.description,
  };
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];

  let listBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = (key: string) => {
    if (!listBuffer.length) return;

    const items = listBuffer.map((item, index) => (
      <li key={index} className="pl-1">
        {renderInline(item)}
      </li>
    ));

    blocks.push(
      listType === "ol" ? (
        <ol
          key={key}
          className="ml-5 list-decimal space-y-2 marker:font-black marker:text-[#e85d04]"
        >
          {items}
        </ol>
      ) : (
        <ul
          key={key}
          className="ml-5 list-disc space-y-2 marker:text-[#e85d04]"
        >
          {items}
        </ul>
      ),
    );

    listBuffer = [];
    listType = null;
  };

  function renderInline(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-black text-[#572300]">
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="rounded-md border border-[#e9d4bd] bg-[#f7eadb] px-1.5 py-0.5 text-[11px] font-bold text-[#9d3c00]"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      return part;
    });
  }

  lines.forEach((raw, index) => {
    const line = raw.trim();

    if (line.startsWith("### ")) {
      flushList(`list-${index}`);

      blocks.push(
        <h3
          key={index}
          className="pt-5 text-lg font-black tracking-tight text-[#572300] first:pt-0 sm:text-xl"
        >
          {line.replace("### ", "")}
        </h3>,
      );

      return;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (listType !== "ul") flushList(`list-${index}`);

      listType = "ul";
      listBuffer.push(line.slice(2));
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      if (listType !== "ol") flushList(`list-${index}`);

      listType = "ol";
      listBuffer.push(line.replace(/^\d+\.\s/, ""));
      return;
    }

    if (!line) {
      flushList(`list-${index}`);
      return;
    }

    flushList(`list-${index}`);

    blocks.push(
      <p key={index} className="leading-7">
        {renderInline(line)}
      </p>,
    );
  });

  flushList("list-end");

  return blocks;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = PROJECTS_DATA.find((project) => project.slug === slug);

  if (!project) notFound();

  const sticker = getRandomSticker();

  const currentIndex = PROJECTS_DATA.findIndex(
    (project) => project.slug === slug,
  );

  const next = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div className="min-h-screen w-full bg-[#fffaf1] font-mono text-[#4d2b19] selection:bg-[#e85d04] selection:text-white md:flex">
      <Sidebar />

      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(232,93,4,.1) 1px, transparent 1px),
              linear-gradient(rgba(232,93,4,.1) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse at center, black 5%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 5%, transparent 78%)",
          }}
        />

        <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5 px-3 pt-5 pb-0 sm:gap-7 sm:px-6 sm:pt-8 sm:pb-0 lg:px-10 lg:pt-10 lg:pb-0">
          <div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#dfc6ac] bg-[#fffdf8] px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#8d5738] shadow-[2px_2px_0_#ead7c3] transition-all hover:-translate-x-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">
                ←
              </span>
              all projects
            </Link>
          </div>

          <section className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[1.35rem] bg-[#e85d04]/10"
            />

            <div className="relative overflow-hidden rounded-[1.35rem] border-2 border-[#8f3600] bg-[#fffdf7] shadow-[5px_6px_0_#d8bba0]">
              <div
                aria-hidden="true"
                className="absolute left-0 bottom-0 h-32 w-32 -translate-x-10 translate-y-10 rounded-full border-[16px] border-[#e85d04]/10"
              />

              <div className="relative p-5 sm:p-8 lg:p-9">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-[#ead7c3] bg-[#f7eadb] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#744329]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="max-w-3xl">
                  <h1 className="text-3xl font-black leading-[0.98] tracking-[-0.055em] text-[#572300] sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>

                  <p className="mt-4 max-w-2xl text-xs font-semibold leading-6 text-[#70432a] sm:text-base sm:leading-7">
                    {project.description}
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-dashed border-[#ead7c3] pt-5">
                  <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#b08362]">
                    timeline
                  </p>
                  <span className="h-1 w-1 rounded-full bg-[#dab88f]" />
                  <p className="text-xs font-bold text-[#592a10]">
                    {project.date}
                  </p>
                </div>

                {(project.links?.github || project.links?.live) && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex -translate-y-[2px] items-center gap-2 rounded-lg bg-[#e85d04] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-wider text-white shadow-[3px_3px_0_#9d3c00] transition-all duration-200 hover:-translate-y-[4px] hover:-translate-x-[2px] hover:bg-[#d95000] hover:shadow-[5px_5px_0_#9d3c00] active:translate-y-0 active:shadow-[1px_1px_0_#9d3c00]"
                      >
                        view live
                        <span>↗</span>
                      </a>
                    )}

                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#d8b99e] bg-[#fff8ec] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-wider text-[#71452d] transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
                      >
                        view source
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          <figure className="overflow-hidden rounded-[1.35rem] border-2 border-[#d8b99d] bg-[#f7ecdc] shadow-[4px_5px_0_#ead7c3]">
            <ImageWithFallback
              src={project.cover_image}
              alt={project.title}
              className="h-auto max-h-[650px] w-full object-cover"
              fallbackLabel={project.title}
              fallbackSize="1200x600"
            />
          </figure>

          <section className="relative overflow-visible rounded-[1.35rem] border-2 border-[#d8b99d] bg-[#fffdf7] shadow-[3px_4px_0_#ead7c3]">
            <div className="p-5 sm:p-8 lg:p-9">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e85d04]" />

                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#e85d04]">
                  case study
                </p>

                <span className="h-px flex-1 bg-[#ead7c3]" />
              </div>

              <div className="max-w-3xl space-y-4 text-xs font-semibold leading-7 text-[#70432a] sm:text-sm">
                {renderBody(project.body)}
              </div>
            </div>

            {sticker && (
              <div
                aria-hidden="true"
                className={`absolute z-20 h-14 w-14 sm:h-20 sm:w-20 transition-transform duration-200 hover:scale-110 active:scale-95 ${sticker.rotation} ${
                  sticker.position === "top-right"
                    ? "-right-2 -top-4 sm:-right-5 sm:-top-6"
                    : "-bottom-4 -right-2 sm:-bottom-6 sm:-right-5"
                }`}
              >
                <img
                  src={sticker.image}
                  alt=""
                  className="h-full w-full object-contain drop-shadow-[2px_3px_0_rgba(143,54,0,0.2)]"
                />
              </div>
            )}
          </section>

          <Link
            href={`/projects/${next.slug}`}
            className="group relative overflow-hidden rounded-[1.35rem] border-2 border-[#d8b99d] bg-[#f7ecdc] p-5 shadow-[3px_4px_0_#ead7c3] transition-all hover:-translate-y-1 hover:border-[#e85d04] hover:shadow-[4px_6px_0_#e0c6aa] sm:p-6"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border-16 border-[#e85d04]/10 transition-transform duration-500 group-hover:scale-150"
            />

            <div className="relative flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#a2633d]">
                  next up
                </p>

                <p className="mt-1 truncate text-base font-black text-[#592a10] transition-colors group-hover:text-[#e85d04] sm:text-lg">
                  {next.title}
                </p>

                <p className="mt-1 text-[10px] font-semibold text-[#9a6d4d]">
                  see next
                </p>
              </div>

              <span className="shrink-0 text-2xl font-black text-[#e85d04] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>

          <Footer />
        </main>
      </div>
    </div>
  );
}
