"use client";
// src/components/ProductCatalog.tsx

import { useState } from "react";

const categories = [
  { id: "streaming", label: "🎬 Streaming" },
  { id: "music", label: "🎵 Music" },
  { id: "ai", label: "🤖 AI & Software" },
  { id: "games", label: "🎮 Games" },
  { id: "social", label: "📱 Social Media" },
  { id: "cards", label: "💳 Gift Cards" },
];

const products = [
  { id: 1, category: "streaming", name: "Netflix", tag: "Streaming · 4K", img: "/netflix.png", bg: "linear-gradient(135deg,#141414,#E50914)", color: "#E50914", price: "15 TND", per: "/ month", badge: "Save 70%", features: ["Unlimited access", "Ultra HD 4K", "Offline downloads"], popular: true },
  { id: 2, category: "streaming", name: "Prime Video", tag: "Streaming · HD", img: "/primevideo.png", bg: "linear-gradient(135deg,#001a2e,#00A8E1)", color: "#00A8E1", price: "10 TND", per: "/ month", badge: "Save 65%", features: ["Amazon Originals", "HD quality", "Fast delivery bonus"], popular: false },
  { id: 3, category: "streaming", name: "Disney+", tag: "Streaming · 4K", img: "/disney.png", bg: "linear-gradient(135deg,#000820,#0063e5)", color: "#0063e5", price: "12 TND", per: "/ month", badge: "Save 60%", features: ["Marvel & Star Wars", "Pixar collection", "4K HDR"], popular: false },
  { id: 4, category: "music", name: "Spotify Premium", tag: "Music · Offline", img: "/spotify.png", bg: "linear-gradient(135deg,#0f1f0f,#1DB954)", color: "#1DB954", price: "8 TND", per: "/ month", badge: "Save 70%", features: ["Ad-free music", "Offline listening", "HiFi audio quality"], popular: true },
  { id: 5, category: "music", name: "YouTube Premium", tag: "Music + Video", img: "/youtube.png", bg: "linear-gradient(135deg,#1a0000,#FF0000)", color: "#FF0000", price: "10 TND", per: "/ month", badge: "Save 65%", features: ["No ads on YouTube", "Background play", "YouTube Music included"], popular: false },
  { id: 6, category: "ai", name: "ChatGPT Plus", tag: "AI · GPT-4", img: "/chatgpt.png", bg: "linear-gradient(135deg,#0a1a14,#10A37F)", color: "#10A37F", price: "25 TND", per: "/ month", badge: "Save 60%", features: ["Full GPT-4 access", "Image generation", "Priority speed"], popular: true },
  { id: 7, category: "ai", name: "Adobe Creative", tag: "Software · All Apps", img: "/adobe.png", bg: "linear-gradient(135deg,#1a0800,#FF0000)", color: "#FF9A00", price: "35 TND", per: "/ month", badge: "Save 75%", features: ["Photoshop + Illustrator", "Premiere + After Effects", "Full Creative Cloud"], popular: false },
  { id: 8, category: "ai", name: "Canva Pro", tag: "Design · All Features", img: "/canva.png", bg: "linear-gradient(135deg,#0a001a,#7D2AE8)", color: "#00C4CC", price: "12 TND", per: "/ month", badge: "Save 65%", features: ["All premium templates", "Background remover", "Brand kit included"], popular: false },
  { id: 9, category: "ai", name: "CapCut Pro", tag: "Video Editing", img: "/capcut.png", bg: "linear-gradient(135deg,#0a0a0a,#000000)", color: "#ffffff", price: "10 TND", per: "/ month", badge: "Save 60%", features: ["No watermark", "All premium effects", "Auto captions"], popular: false },
  { id: 10, category: "games", name: "Steam Wallet", tag: "Gaming · Top-up", img: "/steam.png", bg: "linear-gradient(135deg,#0a0f1a,#1b2838)", color: "#66c0f4", price: "From 15 TND", per: "", badge: "Instant", features: ["Any amount available", "All regions", "Instant delivery"], popular: true },
  { id: 11, category: "games", name: "PlayStation Plus", tag: "Gaming · PS4/PS5", img: null, bg: "linear-gradient(135deg,#00004a,#003791)", color: "#003791", price: "28 TND", per: "/ month", badge: "Save 55%", features: ["Free monthly games", "Online multiplayer", "Cloud storage"], popular: false },
  { id: 12, category: "social", name: "Instagram Followers", tag: "Growth · Real", img: "/instagram.png", bg: "linear-gradient(135deg,#3a0020,#833ab4)", color: "#f56040", price: "From 5 TND", per: "", badge: "Real accounts", features: ["10K to 1M followers", "Gradual delivery", "No password needed"], popular: false },
  { id: 13, category: "social", name: "Facebook Likes", tag: "Growth · Page", img: "/facebook.png", bg: "linear-gradient(135deg,#001428,#1877f2)", color: "#1877f2", price: "From 5 TND", per: "", badge: "Real accounts", features: ["Page or post likes", "Fast delivery", "No password needed"], popular: false },
  { id: 14, category: "cards", name: "Google Play Card", tag: "Gift Card · Any App", img: null, bg: "linear-gradient(135deg,#0a1a0a,#34A853)", color: "#34A853", price: "From 15 TND", per: "", badge: "Instant code", features: ["Apps, games & more", "Any amount", "Works worldwide"], popular: false },
  { id: 15, category: "cards", name: "iTunes / App Store", tag: "Gift Card · Apple", img: null, bg: "linear-gradient(135deg,#1a0a1a,#555555)", color: "#aaaaaa", price: "From 15 TND", per: "", badge: "Instant code", features: ["Apps, music & movies", "Any amount", "All Apple devices"], popular: false },
];

function openWA(productName: string) {
  const msg = encodeURIComponent(`Hi PrimeSpace! I want to order: ${productName}`);
  window.open(`https://wa.me/21658872007?text=${msg}`, "_blank");
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{
      background: "#1a1340",
      border: "1px solid #2a1f4a",
      borderRadius: 16,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minWidth: 200,
      maxWidth: 220,
      flexShrink: 0,
      transition: "all 0.25s ease",
      position: "relative",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.border = "1px solid #8906e6";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(137,6,230,0.25)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.border = "1px solid #2a1f4a";
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {product.popular && (
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: "linear-gradient(135deg,#8906e6,#ff00e2)",
          color: "#fff", fontSize: 9, fontWeight: 700,
          padding: "2px 8px", borderRadius: 9999,
        }}>★ Popular</div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: product.bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, overflow: "hidden", padding: product.img ? 5 : 0,
        }}>
          {product.img ? (
            <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "screen" }} />
          ) : (
            <span style={{ fontSize: 20, fontWeight: 900, color: product.color }}>{product.name[0]}</span>
          )}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{product.name}</div>
          <div style={{ fontSize: 11, color: "#a0a0b8" }}>{product.tag}</div>
        </div>
      </div>

      <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
        {product.price}
        {product.per && <span style={{ fontSize: 12, color: "#a0a0b8" }}> {product.per}</span>}
      </div>

      <div style={{
        display: "inline-block", alignSelf: "flex-start",
        background: "rgba(0,235,209,0.1)",
        border: "1px solid rgba(0,235,209,0.25)",
        color: "#00ebd1", fontSize: 10, fontWeight: 600,
        padding: "2px 8px", borderRadius: 9999,
      }}>{product.badge}</div>

      <button onClick={() => setExpanded(!expanded)} style={{
        background: "none", border: "none", cursor: "pointer",
        color: "#a0a0b8", fontSize: 11, textAlign: "left",
        padding: 0, fontFamily: "inherit",
        display: "flex", alignItems: "center", gap: 4,
      }}>
        {expanded ? "▲ Hide features" : "▼ See features"}
      </button>

      {expanded && (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {product.features.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#a0a0b8" }}>
              <span style={{ color: "#00ebd1", fontWeight: 700 }}>✓</span>{f}
            </div>
          ))}
        </div>
      )}

      <button onClick={() => openWA(product.name)} style={{
        marginTop: "auto", width: "100%", padding: "10px",
        background: "linear-gradient(135deg, #8906e6, #ff00e2)",
        color: "#fff", border: "none", borderRadius: 9999,
        fontSize: 12, fontWeight: 600, fontFamily: "inherit",
        cursor: "pointer", transition: "all 0.2s ease",
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "none"; }}
      >
        💬 Order
      </button>
    </div>
  );
}

export default function ProductCatalog() {
  const [search, setSearch] = useState("");

  const searchResults = search
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <section id="products" style={{ padding: "96px 0", background: "#100d28" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(137,6,230,0.1)", border: "1px solid rgba(137,6,230,0.3)", color: "#ff00e2", fontSize: 12, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", padding: "6px 16px", borderRadius: 9999, marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ebd1", display: "inline-block" }} />
            Our Products
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
            Everything you need, <span style={{ color: "#ff00e2" }}>one place.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 520, margin: "0 auto" }}>
            From streaming to AI tools, all delivered instantly to Tunisia at unbeatable local prices.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", maxWidth: 400,
              padding: "12px 20px", borderRadius: 9999,
              border: "1px solid #2a1f4a",
              background: "#1a1340", color: "#fff",
              fontSize: 15, outline: "none",
            }}
          />
        </div>

        {/* Search Results */}
        {searchResults ? (
          <div>
            <div style={{ color: "#a0a0b8", fontSize: 14, marginBottom: 16 }}>
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{search}"
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {searchResults.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        ) : (
          /* Netflix-style rows */
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {categories.map(cat => {
              const catProducts = products.filter(p => p.category === cat.id);
              if (catProducts.length === 0) return null;
              return (
                <div key={cat.id}>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700, color: "#fff",
                    marginBottom: 16,
                  }}>{cat.label}</h3>
                  <div style={{
                    display: "flex", gap: 16,
                    overflowX: "auto", paddingBottom: 12,
                    scrollbarWidth: "none",
                  }}>
                    {catProducts.map(p => <ProductCard key={p.id} product={p} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ color: "#a0a0b8", fontSize: 15, marginBottom: 16 }}>Don't see what you're looking for? We have even more products!</p>
          <a href="https://wa.me/21658872007?text=Hi%20PrimeSpace!%20I'm%20looking%20for%20a%20product." target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "14px 32px", borderRadius: 9999, fontSize: 15, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1ebe59"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25d366"; }}
          >
            💬 Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}