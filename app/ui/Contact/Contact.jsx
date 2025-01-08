import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 id='contact' className="title-text text-2xl font-bold text-[var(--primary2)] sm:text-3xl sm:tracking-tight">Contact Information</h2>
                        <div className="mt-3">
                            <p className="text-lg text-[var(--primary1)]">
                                For business inquiries, collabs, or booking information please send an email to the email address provided.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="mt-6 flex">
                                <div className="shrink-0">
                                    <EnvelopeIcon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                <div className="ml-3 text-base text-white title-text">
                                    <p>Music@KailebHammontree.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 id='socials' className="title-text text-2xl font-bold text-[var(--primary2)] sm:text-3xl sm:tracking-tight">Social Links</h2>
                        <div className="mt-3">
                            <p className="text-lg text-[var(--primary1)]">
                                Click on the social links below to connect with Kaileb and stay engaged in his community.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="shrink-0">
                                    <img className='size-6' alt='instagram' src='/img/insta.png' />
                                </div>
                                <div className="ml-3 text-base text-white title-text">
                                    <a href='https://www.instagram.com/kaileb_hammontree/' className='hover:text-[#de4381]'>Instagram</a>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <div className="shrink-0">
                                    <img className='size-6' alt='tiktok' src='/img/tiktok.png' />
                                </div>
                                <div className="ml-3 text-base text-white title-text">
                                    <a href='https://www.tiktok.com/@kailebjth' className='hover:text-[#4bf4ee]'>TikTok</a>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <div className="shrink-0">
                                    <img className='size-6' alt='facebook' src='/img/facebook.png' />
                                </div>
                                <div className="ml-3 text-base text-white title-text">
                                    <a href='https://www.facebook.com/KailebJTH' className='hover:text-[#3167FF]'>Facebook</a>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <div className="shrink-0">
                                    <img className='size-6' alt='youtube' src='/img/yt.png' />
                                </div>
                                <div className="ml-3 text-base text-white title-text">
                                    <a href='https://www.youtube.com/@kailebhammontree' className='hover:text-[#FF0000]'>YouTube</a>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <div className="shrink-0">
                                    <img className='size-6' alt='twitch' src='/img/twitch.png' />
                                </div>
                                <div className="ml-3 text-base text-white title-text">
                                    <a href='https://www.twitch.tv/kailebjth' className='hover:text-[#8E43FF]'>Twitch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}