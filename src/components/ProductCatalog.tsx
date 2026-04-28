"use client";
// src/components/ProductCatalog.tsx

import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────
const categories = [
  { id: "all", label: "All Products", emoji: "✦" },
  { id: "streaming", label: "Streaming", emoji: "🎬" },
  { id: "music", label: "Music", emoji: "🎵" },
  { id: "ai", label: "AI & Software", emoji: "🤖" },
  { id: "games", label: "Games", emoji: "🎮" },
  { id: "social", label: "Social Media", emoji: "📱" },
  { id: "cards", label: "Gift Cards", emoji: "💳" },
];

const products = [
  {
    id: 1, category: "streaming",
    name: "Netflix", tag: "Streaming · 4K",
    emoji: "N", bg: "linear-gradient(135deg,#141414,#E50914)", color: "#E50914",
    price: "15 TND", per: "/ month", badge: "Save 70%",
    features: ["Unlimited access", "Ultra HD 4K", "Offline downloads"],
    popular: true,
  },
  {
    id: 2, category: "streaming",
    name: "Prime Video", tag: "Streaming · HD",
    emoji: "★", bg: "linear-gradient(135deg,#001a2e,#00A8E1)", color: "#00A8E1",
    price: "10 TND", per: "/ month", badge: "Save 65%",
    features: ["Amazon Originals", "HD quality", "Fast delivery bonus"],
    popular: false,
  },
  {
    id: 3, category: "streaming",
    name: "Disney+", tag: "Streaming · 4K",
    emoji: "D", bg: "linear-gradient(135deg,#000820,#0063e5)", color: "#0063e5",
    price: "12 TND", per: "/ month", badge: "Save 60%",
    features: ["Marvel & Star Wars", "Pixar collection", "4K HDR"],
    popular: false,
  },
  {
    id: 4, category: "music",
    name: "Spotify Premium", tag: "Music · Offline",
    emoji: "♫", bg: "linear-gradient(135deg,#0f1f0f,#1DB954)", color: "#1DB954",
    price: "8 TND", per: "/ month", badge: "Save 70%",
    features: ["Ad-free music", "Offline listening", "HiFi audio quality"],
    popular: true,
  },
  {
    id: 5, category: "music",
    name: "YouTube Premium", tag: "Music + Video",
    emoji: "▶", bg: "linear-gradient(135deg,#1a0000,#FF0000)", color: "#FF0000",
    price: "10 TND", per: "/ month", badge: "Save 65%",
    features: ["No ads on YouTube", "Background play", "YouTube Music included"],
    popular: false,
  },
  {
    id: 6, category: "ai",
    name: "ChatGPT Plus", tag: "AI · GPT-4",
    emoji: "✦", bg: "linear-gradient(135deg,#0a1a14,#10A37F)", color: "#10A37F",
    price: "25 TND", per: "/ month", badge: "Save 60%",
    features: ["Full GPT-4 access", "Image generation", "Priority speed"],
    popular: true,
  },
  {
    id: 7, category: "ai",
    name: "Adobe Creative", tag: "Software · All Apps",
    emoji: "Ai", bg: "linear-gradient(135deg,#1a0800,#FF0000)", color: "#FF9A00",
    price: "35 TND", per: "/ month", badge: "Save 75%",
    features: ["Photoshop + Illustrator", "Premiere + After Effects", "Full Creative Cloud"],
    popular: false,
  },
  {
    id: 8, category: "ai",
    name: "Canva Pro", tag: "Design · All Features",
    emoji: "C", bg: "linear-gradient(135deg,#0a001a,#7D2AE8)", color: "#00C4CC",
    price: "12 TND", per: "/ month", badge: "Save 65%",
    features: ["All premium templates", "Background remover", "Brand kit included"],
    popular: false,
  },
  {
    id: 9, category: "ai",
    name: "CapCut Pro", tag: "Video Editing",
    emoji: "✂", bg: "linear-gradient(135deg,#0a0a0a,#000000)", color: "#ffffff",
    price: "10 TND", per: "/ month", badge: "Save 60%",
    features: ["No watermark", "All premium effects", "Auto captions"],
    popular: false,
  },
  {
    id: 10, category: "games",
    name: "Steam Wallet", tag: "Gaming · Top-up",
    emoji: "◈", bg: "linear-gradient(135deg,#0a0f1a,#1b2838)", color: "#66c0f4",
    price: "From 15 TND", per: "", badge: "Instant",
    features: ["Any amount available", "All regions", "Instant delivery"],
    popular: true,
  },
  {
    id: 11, category: "games",
    name: "PlayStation Plus", tag: "Gaming · PS4/PS5",
    emoji: "⬡", bg: "linear-gradient(135deg,#00004a,#003791)", color: "#003791",
    price: "28 TND", per: "/ month", badge: "Save 55%",
    features: ["Free monthly games", "Online multiplayer", "Cloud storage"],
    popular: false,
  },
  {
    id: 12, category: "social",
    name: "Instagram Followers", tag: "Growth · Real",
    emoji: "📸", bg: "linear-gradient(135deg,#3a0020,#833ab4)", color: "#f56040",
    price: "From 5 TND", per: "", badge: "Real accounts",
    features: ["1K to 100K followers", "Gradual delivery", "No password needed"],
    popular: false,
  },
  {
    id: 13, category: "social",
    name: "Facebook Likes", tag: "Growth · Page",
    emoji: "👍", bg: "linear-gradient(135deg,#001428,#1877f2)", color: "#1877f2",
    price: "From 5 TND", per: "", badge: "Real accounts",
    features: ["Page or post likes", "Fast delivery", "No password needed"],
    popular: false,
  },
  {
    id: 14, category: "cards",
    name: "Google Play Card", tag: "Gift Card · Any App",
    emoji: "▷", bg: "linear-gradient(135deg,#0a1a0a,#34A853)", color: "#34A853",
    price: "From 15 TND", per: "", badge: "Instant code",
    features: ["Apps, games & more", "Any amount", "Works worldwide"],
    popular: false,
  },
  {
    id: 15, category: "cards",
    name: "iTunes / App Store", tag: "Gift Card · Apple",
    emoji: "", bg: "linear-gradient(135deg,#1a0a1a,#555555)", color: "#aaaaaa",
    price: "From 15 TND", per: "", badge: "Instant code",
    features: ["Apps, music & movies", "Any amount", "All Apple devices"],
    popular: false,
  },
];

// ─── HELPERS ──────────────────────────────────────────────────
function openWA(productName: string) {
  const msg = encodeURIComponent(`Hi PrimeSpace! I want to order: ${productName}`);
  window.open(`https://wa.me/21658872007?text=${msg}`, "_blank");
}

// ─── COMPONENT ────────────────────────────────────────────────
export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered = activeTab === "all"
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section
      id="products"
      style={{
        padding: "96px 0",
        background: "#100d28",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(171,14,255,0.1)",
            border: "1px solid rgba(171,14,255,0.3)",
            color: "#eb75ff",
            fontSize: 12, fontWeight: 600, letterSpacing: "1.5px",
            textTransform: "uppercase", padding: "6px 16px",
            borderRadius: 9999, marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ebd1", display: "inline-block" }} />
            Our Products
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16,
          }}>
            Everything you need, <span style={{ color: "#eb75ff" }}>one place.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 520, margin: "0 auto" }}>
            From streaming to AI tools, all delivered instantly to Tunisia at unbeatable local prices.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: "flex", gap: 8, flexWrap: "wrap",
          justifyContent: "center", marginBottom: 48,
        }}>
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "10px 20px", borderRadius: 9999,
                  fontSize: 14, fontWeight: 500,
                  fontFamily: "inherit", cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: isActive
                    ? "linear-gradient(135deg, #ab0eff, #eb75ff)"
                    : "#1a1340",
                  color: isActive ? "#fff" : "#a0a0b8",
                  border: isActive
                    ? "1px solid transparent"
                    : "1px solid #2a1f4a",
                  boxShadow: isActive ? "0 4px 20px rgba(171,14,255,0.35)" : "none",
                  transform: isActive ? "translateY(-1px)" : "none",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = "#510c6e";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2a1f4a";
                    (e.currentTarget as HTMLElement).style.color = "#a0a0b8";
                  }
                }}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}>
          {filtered.map((product) => {
            const isHovered = hoveredCard === product.id;
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered ? "#221a52" : "#1a1340",
                  border: isHovered ? "1px solid #510c6e" : "1px solid #2a1f4a",
                  borderRadius: 20, padding: 24,
                  display: "flex", flexDirection: "column", gap: 14,
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  boxShadow: isHovered ? "0 4px 24px rgba(171,14,255,0.25)" : "none",
                  transform: isHovered ? "translateY(-4px)" : "none",
                  position: "relative", overflow: "hidden",
                }}
              >


                {/* Card top */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: product.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: product.name === "Adobe" ? 16 : 26,
                    fontWeight: 900, color: product.color,
                    flexShrink: 0,
                    boxShadow: `0 4px 16px rgba(0,0,0,0.3)`,
                    textShadow: `0 0 12px ${product.color}80`,
                    fontFamily: product.name === "Adobe" ? "serif" : "inherit",
                  }}>
                    {product.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{product.name}</div>
                    <div style={{ fontSize: 12, color: "#a0a0b8", marginTop: 2 }}>{product.tag}</div>
                  </div>
                </div>

                {/* Price */}
                <div style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>
                  {product.price}
                  {product.per && <span style={{ fontSize: 14, fontWeight: 400, color: "#a0a0b8" }}> {product.per}</span>}
                </div>

                {/* Save badge */}
                <div style={{
                  display: "inline-block", alignSelf: "flex-start",
                  background: "rgba(0,235,209,0.1)",
                  border: "1px solid rgba(0,235,209,0.25)",
                  color: "#00ebd1",
                  fontSize: 11, fontWeight: 600,
                  padding: "3px 10px", borderRadius: 9999,
                }}>
                  {product.badge}
                </div>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {product.features.map((f) => (
                    <div key={f} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      fontSize: 13, color: "#a0a0b8",
                    }}>
                      <span style={{ color: "#00ebd1", fontWeight: 700, fontSize: 14 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* Popular badge */}
                {product.popular && (
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 6,
                    background: "rgba(137,6,230,0.1)",
                    border: "1px solid #8906e6",
                    color: "#ff00e2", fontSize: 12, fontWeight: 700,
                    padding: "6px 12px", borderRadius: 9999,
                    letterSpacing: "0.5px", textAlign: "center",
                  }}>
                    ★ Most Popular
                  </div>
                )}

                {/* WhatsApp Button */}
                <button
                  onClick={() => openWA(product.name)}
                  style={{
                    marginTop: "auto",
                    width: "100%", padding: "12px",
                    background: "linear-gradient(135deg, #ab0eff, #eb75ff)",
                    color: "#fff", border: "none",
                    borderRadius: 9999,
                    fontSize: 14, fontWeight: 600,
                    fontFamily: "inherit", cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 6,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(171,14,255,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.filter = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  💬 Order on WhatsApp
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ color: "#a0a0b8", fontSize: 15, marginBottom: 16 }}>
            Don't see what you're looking for? We have even more products!
          </p>
          <a
            href="https://wa.me/21658872007?text=Hi%20PrimeSpace!%20I'm%20looking%20for%20a%20product."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#25d366", color: "#fff",
              padding: "14px 32px", borderRadius: 9999,
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#1ebe59";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#25d366";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            💬 Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
