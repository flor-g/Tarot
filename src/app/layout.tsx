import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
