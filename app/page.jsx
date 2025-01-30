'use client';

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Music from './ui/Music/Music';
import Contact from './ui/Contact/Contact';
import Upcoming from './ui/Upcoming/Upcoming';

const navigation = [
  { name: 'Home', href: 'https://www.kailebhammontree.com/' },
  { name: 'Streaming Platforms', href: '#music' },
  { name: 'Upcoming Music', href: '#upcoming' },
  { name: 'Contact / Socials', href: '#socials' },
]

const songArray = [
  {
    songName: `For You`,
    artist: `Kaileb Hammontree`,
    presave: `https://distrokid.com/hyperfollow/kailebhammontree/for-you`,
    date: `02/07/2025`,
    time: `12:00 AM`,
    img: `/img/forYou.jpg`,
  },
  {
    songName: `Over You`,
    artist: `Kaileb Hammontree`,
    presave: `https://distrokid.com/hyperfollow/kailebhammontree/over-you`,
    date: `02/21/2025`,
    time: `12:00 AM`,
    img: `/img/OverYou.jpg`,
  },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
              <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">

                <img
                  alt="Your Company"
                  src="/img/avatar.jpeg"
                  className="h-8 w-auto rounded-2xl"
                />

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 rounded-md p-2.5 text-white lg:hidden"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
                <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white hover:text-[var(--primary4)]">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-white"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[var(--primary4)]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-[var(--primary3)] ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Now Streaming&nbsp; {' '}
                      <a href="https://open.spotify.com/artist/3L3Cxw0CBvdawpRzXlN0bc" className="whitespace-nowrap font-semibold text-[#39d760]">
                        <span aria-hidden="true" className="absolute inset-0" />
                        on Spotify <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-pretty title-text text-5xl font-semibold tracking-tight text-[var(--primary2)] sm:text-7xl">
                    Where Words Meet Music, Stories Find Their Rhythm
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              alt=""
              src="/img/music.jpg"
              className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
            />
          </div>
        </div>
      </div>

      {/* Streaming Platforms Section */}
      <Music />
      {/* Upcoming Music Section */}
      <Upcoming
        songs={songArray}
      />
      {/* Socials / Contact Section */}
      <Contact />
    </>
  )
}
