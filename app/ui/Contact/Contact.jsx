import { EnvelopeIcon } from "@heroicons/react/24/outline";
import AmbientBackground from "../../components/AmbientBackground";
import PanelCard from "../../components/PanelCard";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/kaileb_hammontree/", img: "/img/insta.png" },
  { name: "TikTok", href: "https://www.tiktok.com/@kailebjth", img: "/img/tiktok.png" },
  { name: "Facebook", href: "https://www.facebook.com/KailebJTH", img: "/img/facebook.png" },
  { name: "YouTube", href: "https://www.youtube.com/@kailebhammontree", img: "/img/yt.png" },
  { name: "Twitch", href: "https://www.twitch.tv/kailebjth", img: "/img/twitch.png" },
];

export default function Contact() {
  return (
    <section id="socials" className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="font-music-body text-xs font-semibold uppercase tracking-[0.28em] text-[var(--music-bubblegum)]">
          Let&apos;s connect
        </p>
        <h2 className="mt-3 font-music-display text-4xl leading-none tracking-wide text-[var(--music-cream)] sm:text-5xl">
          Get in <span className="music-gradient-text">Touch</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <PanelCard className="p-6 sm:p-8">
            <h3 className="font-music-display text-xl text-[var(--music-cream)]">Contact</h3>
            <p className="mt-3 font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65">
              For business inquiries, collabs, or booking — reach out and let&apos;s make something together.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--music-bubblegum)]/30 bg-[var(--music-bubblegum)]/10">
                <EnvelopeIcon aria-hidden="true" className="size-5 text-[var(--music-bubblegum)]" />
              </div>
              <a
                href="mailto:Music@KailebHammontree.com"
                className="font-music-body text-sm text-[var(--music-cream)]/70 transition-colors hover:text-[var(--music-bubblegum)]"
              >
                Music@KailebHammontree.com
              </a>
            </div>
          </PanelCard>

          <PanelCard className="p-6 sm:p-8">
            <h3 className="font-music-display text-xl text-[var(--music-cream)]">Follow</h3>
            <p className="mt-3 font-music-body text-sm leading-relaxed text-[var(--music-cream)]/65">
              Stay in the loop — new drops, behind-the-scenes, and live moments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--music-bubblegum)]/30 bg-[var(--music-bubblegum)]/10 transition-all duration-300 hover:bg-[var(--music-bubblegum)]/20 hover:shadow-[0_0_20px_rgba(241,91,181,0.2)]"
                >
                  <img alt="" src={social.img} className="size-5" />
                </a>
              ))}
            </div>
          </PanelCard>
        </div>
      </div>
    </section>
  );
}
