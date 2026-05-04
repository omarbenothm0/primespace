"use client";
// src/components/Hero.tsx
 
import { useEffect, useState } from "react";
import Image from "next/image";
 
const brandLogos = [
  { name: "Netflix", file: "/netflix.png", bg: "linear-gradient(135deg,#141414,#1a0000)", delay: 0, productId: "product-1" },
  { name: "ChatGPT", file: "/chatgpt.png", bg: "linear-gradient(135deg,#0a1a14,#0d2318)", delay: 0.3, productId: "product-6" },
  { name: "Discord", file: "/discord.png", bg: "linear-gradient(135deg,#1e2057,#404EBD)", delay: 1.0, productId: "product-7" },
  { name: "Disney+", file: "/disney.png", bg: "linear-gradient(135deg,#000820,#001040)", delay: 1.4, productId: "product-3" },
  { name: "Steam", file: "/steam.png", bg: "linear-gradient(135deg,#0a0f1a,#1b2838)", delay: 0.5, productId: "product-10" },
  { name: "Spotify", file: "/spotify.png", bg: "linear-gradient(135deg,#0a1a0a,#0d2b0d)", delay: 0.8, productId: "product-4" },
  { name: "CapCut", file: "/capcut.png", bg: "linear-gradient(135deg,#0a0a0a,#1a1a1a)", delay: 0.6, productId: "product-9" },
  { name: "Canva", file: "/canva.png", bg: "linear-gradient(135deg,#0a001a,#120028)", delay: 1.2, productId: "product-8" },
];
 
export default function Hero() {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);
 
  function scrollToProduct(productId: string) {
    const el = document.getElementById(productId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.transition = "box-shadow 0.3s ease";
      el.style.boxShadow = "0 0 0 3px #ff00e2, 0 8px 40px rgba(255,0,226,0.5)";
      setTimeout(() => {
        el.style.boxShadow = "";
      }, 2000);
    }
  }
 
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        background: `
          radial-gradient(ellipse at 25% 50%, rgba(137,6,230,0.28) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 15%, rgba(255,0,226,0.12) 0%, transparent 55%),
          #100d28
        `,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(137,6,230,0.07) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
 
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 20px", width: "100%", overflow: "hidden" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "center",
        }} className="hero-grid">
 
          {/* LEFT */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,0,226,0.08)",
              border: "1px solid rgba(255,0,226,0.25)",
              color: "#ff00e2",
              fontSize: 13, fontWeight: 500,
              padding: "8px 18px", borderRadius: 9999,
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#ff00e2", display: "inline-block",
                animation: "pulseGlow 2s ease-in-out infinite",
              }} />
              Tunisia&apos;s #1 Digital Store
            </div>
 
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 700, lineHeight: 1.08,
              color: "#fff", marginBottom: 24,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.2s",
            }}>
              Your favorite apps.<br />
              <em style={{ color: "#ff00e2" }}>Delivered in hours.</em>
            </h1>
 
            <p style={{
              fontSize: 18, color: "#a0a0b8",
              lineHeight: 1.7, marginBottom: 40, maxWidth: 480,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.3s",
            }}>
              Netflix, Spotify, Steam, ChatGPT & more,{" "}
              <strong style={{ color: "#fff" }}>available in Tunisia</strong> at local prices.
              No international card needed.
            </p>
 
            <div className="hero-buttons" style={{
              display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center",
              marginBottom: 48,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.4s",
            }}>
              <button
                onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: "linear-gradient(135deg, #8906e6, #ff00e2)",
                  color: "#fff", border: "none",
                  padding: "14px 28px", borderRadius: 9999,
                  fontSize: 15, fontWeight: 600,
                  fontFamily: "inherit", cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  transition: "all 0.2s ease",
                  display: "flex", alignItems: "center", gap: 8,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,0,226,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.filter = "none";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                ✦ Browse Products
              </button>
 
              <a
                href="https://wa.me/21658872007?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
                target="_blank" rel="noopener noreferrer"
                style={{
                  background: "transparent", color: "#fff",
                  border: "1px solid #8906e6",
                  padding: "14px 28px", borderRadius: 9999,
                  fontSize: 15, fontWeight: 600,
                  textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#1a1340";
                  (e.currentTarget as HTMLElement).style.borderColor = "#ff00e2";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "#8906e6";
                }}
              >
                💬 Order on WhatsApp
              </a>
            </div>
 
            {/* Stats */}
            <div style={{
              display: "flex", gap: 32,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.5s",
            }}>
              {[
                { num: "100%", label: "Tunisian trusted" },
                { num: "50+", label: "Products available" },
                { num: "<3h", label: "Delivery time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: 28, fontWeight: 700,
                    background: "linear-gradient(135deg, #8906e6, #ff00e2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>{stat.num}</div>
                  <div style={{ fontSize: 13, color: "#a0a0b8", marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
 
          {/* RIGHT — Real Brand Logos */}
          <div className="hero-visual" style={{
            position: "relative", height: 500,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
          }}>
            {/* Glow */}
            <div style={{
              position: "absolute",
              width: 380, height: 380, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(137,6,230,0.22) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
 
            {/* Logo Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gridTemplateRows: "auto",
              gap: 12,
              width: "100%",
              maxWidth: 380,
              position: "relative", zIndex: 1,
            }}>
              {brandLogos.map((logo, i) => (
                <div
                  key={logo.name}
                  title={`View ${logo.name}`}
                  onClick={() => scrollToProduct(logo.productId)}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: 20,
                    background: logo.bg,
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    animation: `floatIcon${i % 3} ${3.5 + (i % 3) * 0.5}s ease-in-out infinite`,
                    animationDelay: `${logo.delay}s`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    overflow: "hidden",
                    padding: 12,
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(137,6,230,0.5)";
                    (e.currentTarget as HTMLElement).style.zIndex = "10";
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
                    (e.currentTarget as HTMLElement).style.zIndex = "";
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                  }}
                >
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={68}
                    height={68}
                    style={{ objectFit: "contain", width: "100%", height: "100%", mixBlendMode: "screen" as const }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px rgba(255,0,226,0.6); }
          50%       { box-shadow: 0 0 16px rgba(255,0,226,1); }
        }
        @keyframes floatIcon0 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes floatIcon1 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50%       { transform: translateY(-18px) rotate(-2deg); }
        }
        @keyframes floatIcon2 {
          0%, 100% { transform: translateY(-6px) rotate(-1deg); }
          50%       { transform: translateY(8px) rotate(1deg); }
        }
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
  .hero-visual { height: 280px !important; }
  .hero-buttons { justify-content: center !important; }
}
            padding: 20px 0;
          }
        }
      `}</style>
    </section>
  );
}