import CountdownTimer from "../common/Countdown";

export default function Upcoming({ songName, artist, presave, date, time, img }) {
    return (
        <section className="isolate overflow-hidden bg-black px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,var(--primary4),white)] opacity-20 lg:left-36" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-[var(--p4-25)] ring-1 ring-[var(--primary4)] sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <svg
                            aria-hidden="true"
                            className="absolute -top-12 left-0 -z-10 h-32 stroke-[var(--p4-25)]" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                            <path fill="var(--primary4)" d="M228 48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V52h-20a4 4 0 0 1 0-8h20V24a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-16 64v52a32.06 32.06 0 1 1-8-21.13V112a4 4 0 0 1 8 0m-8 52a24 24 0 1 0-24 24a24 24 0 0 0 24-24M84 107.12V196a32.06 32.06 0 1 1-8-21.13V56a4 4 0 0 1 3-3.88l56-14a4 4 0 0 1 2 7.76L84 59.12v39.76l75-18.76a4 4 0 0 1 2 7.76ZM76 196a24 24 0 1 0-24 24a24 24 0 0 0 24-24" />
                        </svg>

                        <blockquote className="text-xl/8 font-semibold text-[var(--foreground)] sm:text-2xl/9">
                            <p>Upcoming Releases</p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <img
                            alt=""
                            src={img}
                            className="rounded-xl bg-[var(--primary1)] lg:rounded-3xl"
                        />
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-[var(--foreground)]">"{songName}" by {artist}</div>
                        <div className="mt-1 text-[var(--alt2)]">
                            <a href={presave} className="text-[var(--primary5)]">
                                Spotify Pre-Save With <span className="font-bold">DISTRO</span>KID<span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="mt-1 text-[var(--alt2)]">
                            <p>Release Date: {date}</p>
                            <p>Release Time: {time}</p>
                        </div>
                        <div className="mt-1">
                            <CountdownTimer
                                targetDate={`02/07/2025`}
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
} 
