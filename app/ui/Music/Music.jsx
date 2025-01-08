export default function Music() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
                <h2 id="music" className="text-center text-lg/8 font-semibold text-white">Now Streaming On All Platforms!</h2>
                <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
                    <a href="https://www.iheart.com/artist/kaileb-hammontree-45243051/">
                        <img
                            alt="iHeartRadio"
                            src="/img/iHeart.png"
                            width={154.45}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                    <a href="https://open.spotify.com/artist/3L3Cxw0CBvdawpRzXlN0bc">
                        <img
                            alt="Spotify"
                            src="/img/spotify.png"
                            width={642.78}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                    <a href="https://music.apple.com/us/artist/kaileb-hammontree/1787616864">
                        <img
                            alt="Apple Music"
                            src="/img/apple.png"
                            width={830.04}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                    <a href="https://www.youtube.com/@KailebHammontree">
                        <img
                            alt="YouTube"
                            src="/img/youtube.png"
                            width={894.29}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                    <a href="https://www.amazon.com/music/player/artists/B0DRRC1KCC/kaileb-hammontree">
                        <img
                            alt="Amazon"
                            src="/img/amazon.png"
                            width={292.6}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                    <a href="https://www.pandora.com/artist/kaileb-hammontree/AR7JPqb65ghg6Pq">
                        <img
                            alt="Pandora"
                            src="/img/pandora.png"
                            width={168.65}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                    <a href="https://www.deezer.com/us/artist/295699521">
                        <img
                            alt="Deezer"
                            src="/img/deezer.png"
                            width={292.6}
                            height={200}
                            className="max-h-12 w-full object-contain"
                        />
                    </a>
                </div>

            </div>
        </div>
    )
}
