"use client";
// src/components/Navbar.tsx

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how" },
  { label: "Payment", href: "#payment" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "12px 0",
        background: scrolled ? "rgba(16,13,40,0.97)" : "rgba(16,13,40,0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #2a1f6a",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
<Link href="/" style={{
  display: "flex", alignItems: "center", gap: 10,
  textDecoration: "none",
}}>
  <span style={{
    fontSize: 28, fontWeight: 900, color: "#fff", 
    letterSpacing: "-1px",
    fontFamily: "var(--font-playfair, serif)",
    textShadow: "0 0 20px rgba(255,0,226,0.4)",
  }}>
    Prime<span style={{ 
      color: "#ff00e2",
      fontStyle: "italic",
    }}>Space</span>
  </span>
</Link>

          {/* Desktop Nav Links */}
          <ul style={{
            display: "flex", alignItems: "center", gap: 32,
            listStyle: "none", margin: 0, padding: 0,
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 14, color: "#a0a0b8",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    transition: "color 0.2s", padding: "4px 0",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#a0a0b8")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/21658872007?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
            target="_blank" rel="noopener noreferrer"
            className="desktop-nav"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "#25d366", color: "#fff",
              padding: "10px 20px", borderRadius: 9999,
              fontSize: 13, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#1ebe59";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#25d366";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            💬 Order Now
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", flexDirection: "column", gap: 5, padding: 4,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 24, height: 2,
                background: "#fff", borderRadius: 2,
                transition: "all 0.3s ease",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{
          maxHeight: menuOpen ? 400 : 0, overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "#110e28",
          borderTop: menuOpen ? "1px solid #2a1f6a" : "none",
        }}>
          <div style={{ padding: menuOpen ? "16px 24px 24px" : "0 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 16, color: "#a0a0b8",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                textAlign: "left", padding: "12px 0",
                borderBottom: "1px solid #2a1f6a", transition: "color 0.2s",
              }}>
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/21658872007?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
              target="_blank" rel="noopener noreferrer"
              onClick={handleLinkClick}
              style={{
                marginTop: 12, display: "flex", alignItems: "center",
                justifyContent: "center", gap: 8,
                background: "#25d366", color: "#fff",
                padding: "14px", borderRadius: 9999,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
              }}
            >
              💬 Order on WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
