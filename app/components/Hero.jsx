import AmbientBackground from "./AmbientBackground";
import VinylDisc from "./VinylDisc";
import WaveformBars from "./WaveformBars";
import MusicCTA from "./MusicCTA";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-24 pt-44 sm:px-10 sm:pb-28 sm:pt-48 lg:px-12 lg:pb-20 lg:pt-56">
      <AmbientBackground />

      <div className="relative z-10">
        <p className="animate-fade-up font-music-body text-xs font-semibold uppercase tracking-[0.28em] text-[var(--music-bubblegum)]">
          Feel the music
        </p>

        <h1 className="animate-fade-up mt-4 font-music-display text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="music-gradient-text music-shimmer">Feel</span>
          <br />
          <span className="text-[var(--music-cream)]">the Music</span>
        </h1>

        <p className="animate-fade-up stagger-3 mt-4 max-w-sm font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65 sm:text-base">
          Original tracks, live energy, and the creative pulse of Kaileb Hammontree.
          For fans, collaborators, and anyone who came to vibe.
        </p>
      </div>

      <div className="relative z-10 mt-8 space-y-6">
        <div className="animate-fade-up stagger-3 transition-transform duration-500 hover:scale-105">
          <VinylDisc />
          <div className="mt-4">
            <WaveformBars />
          </div>
        </div>

        <div className="animate-fade-up stagger-4">
          <MusicCTA href="#latest">Explore Music</MusicCTA>
        </div>
      </div>
    </section>
  );
}
