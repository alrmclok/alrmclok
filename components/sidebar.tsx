"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
      </svg>
    ),
  },
];

function ProfileCard() {
  return (
    <div className="relative rounded-2xl border-2 border-[#d3ad8c] bg-[#fffaf1] p-5 shadow-[4px_5px_0_#e2cdb6]">
      <div className="absolute -right-2 -top-3 rotate-6 rounded bg-[#e85d04] px-2 py-1 text-[8px] font-black uppercase tracking-widest text-white shadow-sm">
        hello!
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-full bg-[#e85d04]/20" />

          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#e85d04] bg-white">
            <img
              src="/images/fantube.png"
              alt="Almira"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#fffaf1] bg-[#e85d04] text-white shadow-sm">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <circle cx="12" cy="14" r="8" />
              <path d="M12 6 C12 3, 15 2, 16 2 C16 4, 14 6, 12 6 Z" />
            </svg>
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#572300]">
          Almira
        </h1>

        <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-[#e85d04]">
          dev · artist · builder
        </p>

        <p className="mt-4 max-w-[220px] text-[10px] font-semibold leading-5 text-[#805238]">
          making websites or drawing stuff &amp; occasionally GD level.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-1.5">
          <span className="rounded border border-[#e85d04] bg-[#e85d04] px-2 py-1 text-[9px] font-black text-white">
            she/they
          </span>

          <span className="flex items-center gap-1 rounded border border-[#d7b99d] bg-white px-2 py-1 text-[9px] font-black text-[#70432a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#63a65d]" />
            online
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-dashed border-[#ddc5ad] pt-4 text-center text-[8px] font-bold uppercase tracking-[0.15em] text-[#b08362]">
        portfolio / something else
      </div>
    </div>
  );
}

function NavList({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav>
      <p className="mb-2 px-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#a2633d]">
        navigation
      </p>

      <div className="space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`group flex items-center justify-between rounded-xl border-2 px-4 py-3 text-xs font-black transition-all duration-200 ${
                isActive
                  ? "translate-x-1 -translate-y-[2px] border-[#e85d04] bg-[#e85d04] text-white shadow-[3px_3px_0_#9d3c00]"
                  : "border-[#dcc2aa] bg-[#fffaf1] text-[#673619] hover:translate-x-1 hover:border-[#e85d04] hover:text-[#e85d04] hover:shadow-[3px_3px_0_#ead7c3]"
              }`}
            >
              {/* Added active text color styling right on this text+icon layout box */}
              <span
                className={`flex items-center gap-2.5 ${isActive ? "text-white" : ""}`}
              >
                {item.icon}
                {item.label}
              </span>

              <span
                className={`transition-transform ${
                  isActive ? "text-white" : "text-[#c08a65]"
                }`}
              >
                →
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function NowPlaying() {
  const [data, setData] = useState<{
    playing: boolean;
    title?: string;
    artist?: string;
    albumArt?: string | null;
    url?: string;
  } | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/nowplaying");
        const json = await res.json();
        setData(json);
      } catch {
        setData({ playing: false });
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000); // poll every 15s
    return () => clearInterval(interval);
  }, []);

  const isPlaying = data?.playing;
  const title = data?.title ?? "nothing playing";
  const artist = data?.artist ?? "check back later";

  const content = (
    <div className="rounded-xl border-2 border-[#d8b99d] bg-[#fffaf1] p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#e85d04]">
          now playing
        </span>

        {isPlaying && (
          <div className="flex items-end gap-[2px]">
            <span className="h-2 w-[2px] animate-pulse bg-[#e85d04]" />
            <span className="h-3 w-[2px] animate-pulse bg-[#e85d04] [animation-delay:150ms]" />
            <span className="h-1.5 w-[2px] animate-pulse bg-[#e85d04] [animation-delay:300ms]" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {data?.albumArt ? (
          <img
            src={data.albumArt}
            alt={title}
            className="h-11 w-11 shrink-0 rounded-lg border border-[#e1c5a7] object-cover"
          />
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e1c5a7] bg-[#fff0dd] text-lg text-[#e85d04]">
            ♫
          </div>
        )}

        <div className="min-w-0">
          <p className="truncate text-[10px] font-black text-[#643318]">
            {title}
          </p>
          <p className="mt-0.5 truncate text-[9px] font-semibold text-[#a2633d]">
            {artist}
          </p>
        </div>
      </div>
    </div>
  );

  if (data?.url && isPlaying) {
    return (
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <aside className="relative z-20 w-full shrink-0 md:min-h-screen md:w-[310px]">
      {/* ---- Mobile: slim sticky header bar, tap to expand ---- */}
      <div className="sticky top-0 z-30 border-b-2 border-[#d8b99d] bg-[#f8ecdc] md:hidden">
        <div className="h-1.5 bg-[#e85d04]" />

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between gap-3 px-4 py-3"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#e85d04] bg-white">
              <img
                src="/images/fantube.png"
                alt="Almira"
                className="h-full w-full object-cover"
              />
            </span>

            <span className="min-w-0 text-left">
              <span className="block truncate text-sm font-black text-[#572300]">
                Almira
              </span>
              <span className="block truncate text-[9px] font-black uppercase tracking-widest text-[#e85d04]">
                dev · artist · builder
              </span>
            </span>
          </span>

          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-[#dcc2aa] text-[#e85d04] transition-transform duration-200 ${
              mobileOpen
                ? "rotate-180 border-[#e85d04] bg-white"
                : "bg-[#fffaf1]"
            }`}
          >
            ▾
          </span>
        </button>

        {mobileOpen && (
          <div className="space-y-5 border-t border-dashed border-[#ddc5ad] px-4 pb-5 pt-4">
            <ProfileCard />
            <NavList
              pathname={pathname}
              onNavigate={() => setMobileOpen(false)}
            />
            <NowPlaying />
          </div>
        )}
      </div>

      {/* ---- Desktop: full sidebar, sticky + its own scrollbar ---- */}
      <div className="relative hidden border-r-2 border-[#d8b99d] bg-[#f8ecdc] md:sticky md:top-0 md:block md:h-screen md:overflow-y-auto">
        <div
          className="absolute left-0 right-0 top-0 h-3 border-b-2 border-[#8f3600]"
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

        {/* Changed min-h-full back to h-full and added pb-8 to control space at the bottom */}
        <div className="flex h-full flex-col justify-between p-7 pt-9 pb-8">
          <div className="space-y-6">
            <ProfileCard />
            <NavList pathname={pathname} />
            <NowPlaying />
          </div>

          {/* Removed mb-6 so it stays fixed inside the padded container */}
          <div className="mt-7 border-t border-dashed border-[#d8b99d] pt-5 pb-6 text-center text-[8px] font-black uppercase tracking-[0.18em] text-[#a87856]">
            <span>made with love this time and still some oranges</span>
          </div>
        </div>
      </div>
    </aside>
  );
}