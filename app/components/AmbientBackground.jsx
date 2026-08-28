export default function AmbientBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <div className="noise-overlay absolute inset-0" />
      <div
        className="music-blob absolute -left-20 -top-20 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: "var(--music-amethyst)", opacity: 0.35 }}
      />
      <div
        className="music-blob absolute -bottom-16 right-0 h-64 w-64 rounded-full blur-[90px]"
        style={{ background: "var(--music-bubblegum)", opacity: 0.3, animationDelay: "2s" }}
      />
      <div
        className="music-blob absolute right-1/4 top-1/3 h-48 w-48 rounded-full blur-[80px]"
        style={{ background: "var(--music-golden)", opacity: 0.2, animationDelay: "4s" }}
      />
    </div>
  );
}
