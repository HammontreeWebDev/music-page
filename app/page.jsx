import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Music from "./ui/Music/Music";
import Released from "./ui/Released/Released";
import About from "./components/About";
import Contact from "./ui/Contact/Contact";
import Footer from "./components/Footer";

const releasedSongs = [
  {
    songName: "Over You",
    artist: "Kaileb Hammontree",
    songLink: "https://open.spotify.com/track/3BoE1ppxt5gAh3wF9fiLCE",
    date: "02/21/2025",
    img: "/img/OverYou.jpg",
    type: "Single",
  },
  {
    songName: "For You",
    artist: "Kaileb Hammontree",
    songLink: "https://open.spotify.com/track/1t5nEpVOvIhzzuxlSHwxAK",
    date: "02/07/2025",
    img: "/img/forYou.jpg",
    type: "Single",
  },
  {
    songName: "Hey You",
    artist: "Kaileb Hammontree",
    songLink: "https://open.spotify.com/track/68nNyTkpYJQw9AxLVm2URR",
    date: "01/03/2025",
    img: "/img/HeyYou.jpg",
    type: "Single",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--music-canvas)" }}>
      <Navigation />
      <main>
        <Hero />
        <Music />
        <Released songs={releasedSongs} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
