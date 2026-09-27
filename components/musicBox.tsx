"use client";

interface MusicBoxProps {
  title: string;
  artist: string;
  trackId: string; // Spotify track ID
  badge?: string;
  accentColor?: string;
  compact?: boolean; // true = 80px/152px slim card, false = 352px
}

export default function MusicBox({
  title,
  artist,
  trackId,
  badge = "Track",
  accentColor = "#e85d04",
  compact = true,
}: MusicBoxProps) {
  const embedSrc = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

  return (
    <div
      className="group relative w-full max-w-sm md:max-w-none rounded-xl border border-[#ddc5ad] bg-[#fffaf1] p-3.5 shadow-[4px_4px_0_#ddc5ad] transition-all duration-200 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:border-[var(--hover-accent)]"
      /* 👇 Pass the dynamic color as CSS variables to handle the custom hover effect 👇 */
      style={{
        ["--hover-accent" as any]: accentColor,
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--box-shadow-state, 4px 4px 0 #ddc5ad)"
      }}
      // Use standard mouse events to cleanly update the shadow color variable on hover
      onMouseEnter={(e) => e.currentTarget.style.setProperty('--box-shadow-state', `6px 6px 0 ${accentColor}`)}
      onMouseLeave={(e) => e.currentTarget.style.setProperty('--box-shadow-state', '4px 4px 0 #ddc5ad')}
    >
      {/* Interactive Header */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="rounded px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white select-none whitespace-nowrap"
            style={{ backgroundColor: accentColor }}
          >
            {badge}
          </span>
        </div>

        {/* Clean, right-aligned meta text */}
        <span className="truncate text-[10px] font-bold tracking-tight text-[#c19a7c] group-hover:text-[#4d2b19] transition-colors">
          {title} <span className="font-normal opacity-60">by</span> {artist}
        </span>
      </div>

      {/* Spotify Native Iframe Integration Container */}
      <div className="relative overflow-hidden rounded-lg bg-[#4d2b19]/5 p-1 border border-[#ddc5ad]/40">
        <iframe
          title={`${title} — ${artist}`}
          src={embedSrc}
          width="100%"
          height={compact ? 152 : 352}
          style={{ borderRadius: "6px", border: "none" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}
