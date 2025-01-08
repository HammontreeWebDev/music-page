export default function Music() {
    return (
        <div className="bg-[var(--alt4)] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 id="music" className="text-center text-lg/8 font-semibold text-white">Music Available On All Platforms!</h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <a href="https://www.iheart.com/artist/kaileb-hammontree-45243051/">
                        <img
                            alt="iHeartRadio"
                            src="/img/iHeart.png"
                            width={154.45}
                            height={200}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="https://open.spotify.com/artist/3L3Cxw0CBvdawpRzXlN0bc">
                        <img
                            alt="Spotify"
                            src="/img/spotify.png"
                            width={642.78}
                            height={200}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="https://music.apple.com/us/artist/kaileb-hammontree/1787616864">
                        <img
                            alt="Apple Music"
                            src="/img/apple.png"
                            width={830.04}
                            height={200}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="https://www.youtube.com/@KailebHammontree">
                        <img
                            alt="YouTube"
                            src="/img/youtube.png"
                            width={894.29}
                            height={200}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="https://www.amazon.com/music/player/artists/B0DRRC1KCC/kaileb-hammontree">
                        <img
                            alt="Amazon"
                            src="/img/amazon.png"
                            width={894.29}
                            height={200}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
