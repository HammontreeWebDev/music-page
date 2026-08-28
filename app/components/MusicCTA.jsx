export default function MusicCTA({ href, children, className = "", onClick }) {
  const Tag = href ? "a" : "button";
  const props = href ? { href } : { onClick, type: "button" };

  return (
    <Tag
      {...props}
      className={`group inline-flex min-h-[44px] items-center gap-2.5 rounded-full px-6 py-3 font-music-body text-sm font-bold text-[var(--music-wine)] transition-all duration-300 hover:gap-3.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--music-bubblegum)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--music-canvas)] ${className}`}
      style={{
        background: "linear-gradient(135deg, var(--music-golden), var(--music-bubblegum))",
      }}
    >
      {children}
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Tag>
  );
}
