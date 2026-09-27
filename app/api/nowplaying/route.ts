import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 15 } });
    const data = await res.json();

    const track = data?.recenttracks?.track?.[0];
    if (!track) {
      return NextResponse.json({ playing: false });
    }

    const isNowPlaying = track["@attr"]?.nowplaying === "true";

    return NextResponse.json({
      playing: isNowPlaying,
      title: track.name,
      artist: track.artist?.["#text"],
      albumArt: track.image?.[2]?.["#text"] || null,
      url: track.url,
    });
  } catch (err) {
    return NextResponse.json({ playing: false, error: "fetch_failed" }, { status: 500 });
  }
}