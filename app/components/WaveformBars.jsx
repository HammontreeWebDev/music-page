const HEIGHTS = [0.35, 0.65, 0.9, 0.5, 1, 0.7, 0.85, 0.45, 0.75, 0.55, 0.95, 0.6, 0.8, 0.4];

export default function WaveformBars() {
  return (
    <div className="flex h-14 items-end justify-center gap-[3px]" aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="wave-bar w-[4px] rounded-full"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${i * 0.07}s`,
            background: "linear-gradient(to top, var(--music-amethyst), var(--music-bubblegum))",
          }}
        />
      ))}
    </div>
  );
}
