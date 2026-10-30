import type { Metadata } from "next";
import { Creepster, Cinzel } from "next/font/google";
import "./globals.css";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Halloween Tarot | Ask the Cards",
  description: "A mystical three-card tarot reading under the Halloween moon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${creepster.variable} ${cinzel.variable}`}>
      <body className="antialiased font-cinzel">{children}</body>
    </html>
  );
}
