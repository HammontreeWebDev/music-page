import AmbientBackground from "../../components/AmbientBackground";
import PanelCard from "../../components/PanelCard";

const platforms = [
  { name: "iHeartRadio", href: "https://www.iheart.com/artist/kaileb-hammontree-45243051/", img: "/img/iHeart.png" },
  { name: "Spotify", href: "https://open.spotify.com/artist/3L3Cxw0CBvdawpRzXlN0bc", img: "/img/spotify.png" },
  { name: "Apple Music", href: "https://music.apple.com/us/artist/kaileb-hammontree/1787616864", img: "/img/apple.png" },
  { name: "YouTube", href: "https://www.youtube.com/@KailebHammontree", img: "/img/youtube.png" },
  { name: "Amazon Music", href: "https://www.amazon.com/music/player/artists/B0DRRC1KCC/kaileb-hammontree", img: "/img/amazon.png" },
  { name: "Pandora", href: "https://www.pandora.com/artist/kaileb-hammontree/AR7JPqb65ghg6Pq", img: "/img/pandora.png" },
  { name: "Deezer", href: "https://www.deezer.com/us/artist/295699521", img: "/img/deezer.png" },
];

export default function Music() {
  return (
    <section id="music" className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="font-music-body text-xs font-semibold uppercase tracking-[0.28em] text-[var(--music-bubblegum)]">
          Now streaming
        </p>
        <h2 className="mt-3 font-music-display text-4xl leading-none tracking-wide text-[var(--music-cream)] sm:text-5xl">
          Stream <span className="music-gradient-text">Everywhere</span>
        </h2>
        <p className="mt-4 max-w-sm font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65 sm:text-base">
          Find me on your favorite platform and press play.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <PanelCard className="flex h-24 items-center justify-center p-4 transition-all duration-300 hover:border-[var(--music-bubblegum)]/30 hover:shadow-[0_0_30px_rgba(241,91,181,0.15)]">
                <img
                  alt={platform.name}
                  src={platform.img}
                  className="max-h-10 w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
              </PanelCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
