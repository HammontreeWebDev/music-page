import AmbientBackground from "./AmbientBackground";
import VinylDisc from "./VinylDisc";
import WaveformBars from "./WaveformBars";
import MusicCTA from "./MusicCTA";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-44 sm:px-10 sm:pb-28 sm:pt-48 lg:px-12 lg:pb-20 lg:pt-56">
      <AmbientBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col lg:min-h-[calc(100vh-12rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left — headline, copy, vinyl, CTA */}
        <div className="flex flex-col justify-between lg:flex-1 lg:py-8">
          <div>
            <h1 className="animate-fade-up font-music-display text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="music-gradient-text music-shimmer">Feel</span>
              <br />
              <span className="text-[var(--music-cream)]">the Music</span>
            </h1>

            <p className="animate-fade-up stagger-3 mt-4 max-w-sm font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65 sm:text-base">
              Original tracks, live energy, and the creative pulse of Kaileb Hammontree.
              For fans, collaborators, and anyone who came to vibe.
            </p>
          </div>

          <div className="mt-8 space-y-6 lg:mt-12">
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
        </div>

        {/* Right — artist photo with artsy frame */}
        <div className="animate-fade-up stagger-2 relative mt-12 lg:mt-0 lg:flex-1 lg:max-w-md xl:max-w-lg">
          <div
            className="absolute -inset-6 rounded-[2rem] blur-3xl"
            style={{ background: "var(--music-amethyst)", opacity: 0.3 }}
            aria-hidden="true"
          />
          <div
            className="absolute -right-4 -top-4 h-32 w-32 rounded-full blur-[80px]"
            style={{ background: "var(--music-bubblegum)", opacity: 0.35 }}
            aria-hidden="true"
          />
          <div className="panel-shine relative rotate-2 overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <img
              alt="Kaileb Hammontree performing"
              src="/img/music.jpg"
              className="aspect-[3/4] w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--music-canvas)] via-[var(--music-canvas)]/20 to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-6 left-6 right-6 font-music-display text-lg leading-snug text-[var(--music-cream)] sm:text-xl">
              Where <span className="music-gradient-text">Words</span> Meet{" "}
              <span className="music-gradient-text music-shimmer">Music</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
