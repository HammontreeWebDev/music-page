"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AmbientBackground from "../../components/AmbientBackground";
import PanelCard from "../../components/PanelCard";
import MusicCTA from "../../components/MusicCTA";

export default function Released({ songs }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section id="latest" className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="font-music-body text-xs font-semibold uppercase tracking-[0.28em] text-[var(--music-bubblegum)]">
          Fresh drops
        </p>
        <h2 className="mt-3 font-music-display text-4xl leading-none tracking-wide text-[var(--music-cream)] sm:text-5xl">
          Latest <span className="music-gradient-text">Releases</span>
        </h2>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {songs.map((song, index) => (
              <div key={index} className="min-w-full flex-shrink-0 sm:min-w-[calc(100%-2rem)]">
                <PanelCard className="grid grid-cols-1 items-center gap-8 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                  <div className="relative mx-auto sm:mx-0">
                    <div
                      className="absolute -inset-4 rounded-3xl blur-2xl"
                      style={{ background: "var(--music-amethyst)", opacity: 0.25 }}
                      aria-hidden="true"
                    />
                    <img
                      alt={`${song.songName} album art`}
                      src={song.img}
                      className="relative w-56 rounded-2xl sm:w-64"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="font-music-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--music-golden)]">
                      {song.type}
                    </p>
                    <h3 className="mt-2 font-music-display text-2xl text-[var(--music-cream)] sm:text-3xl">
                      {song.songName}
                    </h3>
                    <p className="mt-1 font-music-body text-sm text-[var(--music-cream)]/50">
                      {song.artist}
                    </p>
                    <p className="mt-2 font-music-body text-sm text-[var(--music-cream)]/50">
                      Released {song.date}
                    </p>

                    <div className="mt-6 flex justify-center sm:justify-start">
                      <MusicCTA href={song.songLink}>Stream Latest</MusicCTA>
                    </div>
                  </div>
                </PanelCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
