import "./globals.css";
import Global from "./styleComponents/global";

export const metadata = {
  title: 'Music | Kaileb Hammontree',
  description: 'Discover Kaileb Hammontree and listen to his music now. Connect with him through email and various social platforms.'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Global />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
