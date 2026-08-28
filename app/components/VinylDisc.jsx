export default function VinylDisc({ className = "" }) {
  return (
    <div
      className={`relative mx-auto h-28 w-28 opacity-80 sm:h-32 sm:w-32 ${className}`}
      aria-hidden="true"
    >
      <div
        className="vinyl-spin absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--music-amethyst), var(--music-bubblegum), var(--music-golden), var(--music-amethyst))",
        }}
      />
      <div className="absolute inset-[18%] rounded-full bg-[var(--music-wine)]" />
      <div className="absolute inset-[42%] rounded-full bg-[var(--music-bubblegum)]/60" />
      <div className="absolute inset-[46%] rounded-full bg-[var(--music-cream)]" />
    </div>
  );
}
