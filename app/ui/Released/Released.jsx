export default function Released({ songs }) {
    return (
        <section id="latest" className="isolate overflow-hidden mb-12 bg-black px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,var(--primary3),var(--alt3))] opacity-20 lg:left-36" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-[var(--p4-25)] ring-1 ring-[var(--primary2)] sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
                <figure className="grid grid-cols-1 gap-y-8 lg:gap-y-10 justify-items-center">
                    {/* Blockquote Title + SVG (Stays at the Top and Centers) */}
                    <div className="relative col-span-1 text-center">
                        <svg
                            aria-hidden="true"
                            className="absolute -top-12 left-1/2 -translate-x-1/2 -z-10 h-32 stroke-[var(--p4-25)]"
                            xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                            <path fill="var(--primary2)" d="M228 48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V52h-20a4 4 0 0 1 0-8h20V24a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-16 64v52a32.06 32.06 0 1 1-8-21.13V112a4 4 0 0 1 8 0m-8 52a24 24 0 1 0-24 24a24 24 0 0 0 24-24M84 107.12V196a32.06 32.06 0 1 1-8-21.13V56a4 4 0 0 1 3-3.88l56-14a4 4 0 0 1 2 7.76L84 59.12v39.76l75-18.76a4 4 0 0 1 2 7.76ZM76 196a24 24 0 1 0-24 24a24 24 0 0 0 24-24" />
                        </svg>
                        <blockquote className="text-xl/8 font-semibold text-[var(--foreground)] sm:text-2xl/9">
                            <p>Latest Releases</p>
                        </blockquote>
                    </div>

                    {/* Songs List - Centering for Small Screens */}
                    {songs.map((song, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-6 w-full justify-items-center">
                            {/* Image (Centered on Small Screens, Left on Large Screens) */}
                            <div className="w-full flex justify-center lg:justify-start">
                                <img
                                    alt=""
                                    src={song.img}
                                    className="w-72 rounded-xl bg-[var(--primary1)] lg:rounded-3xl"
                                />
                            </div>
                            {/* Text (Centered on Small Screens, Left on Large Screens) */}
                            <figcaption className="text-base text-center lg:text-left w-full">
                                <div className="font-semibold text-[var(--foreground)]">"{song.songName}" by {song.artist}</div>
                                <div className="mt-1 text-[var(--alt2)]">
                                    <a href={song.songLink} className="text-[var(--primary1)]">
                                        Listen to <span className="font-bold text-[var(--primary2)]">{song.songName}</span> NOW on <span className="text-[var(--primary2)]">Spotify</span> <span className="text-[var(--primary2)]" aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                                <div className="mt-1 text-[var(--alt2)]">
                                    <p>Released On: {song.date}</p>
                                </div>
                            </figcaption>
                        </div>
                    ))}
                </figure>
            </div>
        </section>
    );
} 
