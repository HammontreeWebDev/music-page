import AmbientBackground from "./AmbientBackground";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="animate-fade-up stagger-2 font-music-display text-3xl leading-[1.1] tracking-wide text-[var(--music-cream)] sm:text-4xl lg:text-5xl">
          Where <span className="music-gradient-text">Words</span> Meet{" "}
          <span className="music-gradient-text music-shimmer">Music</span>,
          <br />
          Stories Find Their <span className="text-[var(--music-golden)]">Rhythm</span>
        </h2>

        <div className="mt-8 max-w-xl">
          <p className="animate-fade-up stagger-3 font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65 sm:text-base">
            I&apos;m Kaileb — a singer, songwriter, and creative who lives at the intersection
            of melody and story. Every track I put out carries a piece of something real:
            late-night sessions, heart-on-sleeve lyrics, and the kind of energy you feel
            standing front row at a show.
          </p>

          <blockquote className="animate-fade-up stagger-4 mt-8 border-l-2 border-[var(--music-bubblegum)]/40 pl-6">
            <p className="font-music-display text-xl leading-snug music-gradient-text sm:text-2xl">
              &ldquo;Music isn&apos;t just what I make — it&apos;s how I connect.&rdquo;
            </p>
          </blockquote>

          <p className="animate-fade-up stagger-4 mt-6 font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65 sm:text-base">
            Whether you&apos;re here to stream the latest single, pitch a collab, or just
            vibe — welcome to the stage.
          </p>
        </div>
      </div>
    </section>
  );
}
