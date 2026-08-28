import "./globals.css";
import { Righteous, Nunito } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-music-display",
  weight: ["400"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-music-body",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Kaileb Hammontree — Music",
  description:
    "Original tracks, live energy, and the creative pulse of Kaileb Hammontree. For fans, collaborators, and anyone who came to vibe.",
  keywords:
    "Kaileb Hammontree, music, singer, songwriter, Spotify, Over You, For You, Hey You, original music",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${nunito.variable}`}
    >
      <body className="font-music-body antialiased">{children}</body>
    </html>
  );
}
