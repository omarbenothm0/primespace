// src/app/layout.tsx
// Root layout — configures Google Fonts for the entire project
// Playfair Display (italic headlines) + Inter (body/UI text)

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ─── FONTS ────────────────────────────────────────────────────

// Playfair Display — used for dramatic italic headlines (H1, H2)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap", // shows fallback font while loading, then swaps — no blank text
});

// Inter — used for all body text, buttons, labels, UI
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// ─── METADATA ─────────────────────────────────────────────────
// This controls what shows in the browser tab and search results

export const metadata: Metadata = {
  title: "PrimeSpace — Your Digital World, Delivered Locally",
  description:
    "Netflix, Spotify, Adobe, ChatGPT & more — available in Tunisia at local prices. Order instantly via WhatsApp.",
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
