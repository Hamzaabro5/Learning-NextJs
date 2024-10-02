import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Practice Project",
  description: "Creater By Muhammad Hamza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="bg-black text-white py-2">

      <h1 className="text-5xl font-bold mt-2 text-center">Navbar | NextJs</h1>
      <ul className="flex justify-center gap-5 my-5 text-2xl underline text-blue-400">
      <Link href={`/`}><li>Home</li></Link>
      <Link href={`about`}><li>About</li></Link>
      <Link href={`services`}><li>Services</li></Link>
      <Link href={`contact`}><li>Contact</li></Link>
      </ul>

      </div>
        {children}
      </body>
    </html>
  );
}
