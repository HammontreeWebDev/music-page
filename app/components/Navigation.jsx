"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MusicCTA from "./MusicCTA";

const navigation = [
  { name: "Stream", href: "#music" },
  { name: "Releases", href: "#latest" },
  { name: "About", href: "#about" },
  { name: "Connect", href: "#socials" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[var(--music-canvas)]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12"
      >
        <a href="#" className="font-music-display text-lg tracking-wide sm:text-xl">
          <span className="music-gradient-text music-shimmer">Kaileb</span>{" "}
          <span className="text-[var(--music-cream)]">Hammontree</span>
        </a>

        <div className="hidden items-center gap-x-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-music-body text-sm text-[var(--music-cream)]/70 transition-colors hover:text-[var(--music-cream)]"
            >
              {item.name}
            </a>
          ))}
          <MusicCTA href="https://open.spotify.com/artist/3L3Cxw0CBvdawpRzXlN0bc">
            Listen Now
          </MusicCTA>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 rounded-full p-2.5 text-[var(--music-cream)]/70 transition-colors hover:bg-[var(--music-bubblegum)]/10 hover:text-[var(--music-cream)] lg:hidden"
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-[var(--music-canvas)]/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--music-wine)] px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-full p-2.5 text-[var(--music-cream)]/70 transition-colors hover:bg-[var(--music-bubblegum)]/10 hover:text-[var(--music-cream)]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-music-body text-base font-semibold text-[var(--music-cream)]/70 transition-colors hover:bg-[var(--music-bubblegum)]/10 hover:text-[var(--music-cream)]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <MusicCTA href="https://open.spotify.com/artist/3L3Cxw0CBvdawpRzXlN0bc">
                Listen Now
              </MusicCTA>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
