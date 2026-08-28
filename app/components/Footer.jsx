export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12 text-center sm:px-10 lg:px-12">
      <a
        href="https://www.kailebhammontree.com/"
        className="font-music-body text-sm text-[var(--music-cream)]/50 transition-colors hover:text-[var(--music-bubblegum)]"
      >
        ← Back to main site
      </a>
      <p className="mt-4 font-music-body text-[11px] text-[var(--music-cream)]/30">
        For fans, collaborators, and anyone who came to vibe.
      </p>
      <p className="mt-1 font-music-body text-[10px] text-[var(--music-cream)]/20">
        © {new Date().getFullYear()} Kaileb Hammontree
      </p>
    </footer>
  );
}
