"use client";
// src/components/Reviews.tsx

import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    name: "Ahmed B.",
    initial: "A",
    product: "Netflix",
    productEmoji: "🎬",
    rating: 5,
    text: "I've been using PrimeSpace for 6 months now. Netflix delivered in under 3 minutes after payment. Seriously the best service in Tunisia.",
    color: "#E50914",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Sara M.",
    initial: "S",
    product: "Adobe Creative Cloud",
    productEmoji: "🎨",
    rating: 5,
    text: "Got Adobe Creative Cloud for a fraction of the price. The process was super easy — just WhatsApp and pay with D17. Done in 5 minutes.",
    color: "#FF9A00",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Yassine K.",
    initial: "Y",
    product: "Spotify + ChatGPT",
    productEmoji: "🎵",
    rating: 5,
    text: "Finally a Tunisian store that has everything! Ordered Spotify, ChatGPT Plus, and Canva Pro all in one chat. Super fast and trustworthy.",
    color: "#1DB954",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Rania F.",
    initial: "R",
    product: "Steam Wallet",
    productEmoji: "🎮",
    rating: 5,
    text: "Bought Steam wallet 3 times already. Always instant, always the correct amount. The best for gamers in Tunisia without a doubt.",
    color: "#66c0f4",
    date: "2 months ago",
  },
  {
    id: 5,
    name: "Mohamed T.",
    initial: "M",
    product: "YouTube Premium",
    productEmoji: "▶️",
    rating: 5,
    text: "I was skeptical at first but they earned my trust. Fast replies on WhatsApp and the product arrived before I even expected it.",
    color: "#FF0000",
    date: "1 month ago",
  },
  {
    id: 6,
    name: "Leila H.",
    initial: "L",
    product: "Canva Pro",
    productEmoji: "✨",
    rating: 5,
    text: "I use Flouci to pay and it's seamless. Ordered Canva Pro for my freelance work and it's been a game-changer. Worth every dinar.",
    color: "#00C4CC",
    date: "3 weeks ago",
  },
];

const trustStats = [
  { num: "500+", label: "Orders delivered" },
  { num: "4.9★", label: "Average rating" },
  { num: "<5min", label: "Average delivery" },
  { num: "50+", label: "Products available" },
];

// ─── STAR RATING ──────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{
          color: i < count ? "#fbbf24" : "#2a1f4a",
          fontSize: 16,
        }}>★</span>
      ))}
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────
export default function Reviews() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section
      id="reviews"
      style={{
        padding: "96px 0",
        background: "#1a1340",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Social Proof
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16,
          }}>
            Trusted by <span style={{ color: "#eb75ff" }}>hundreds</span> of Tunisians.
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 480, margin: "0 auto" }}>
            Real customers, real orders, real results. See what people say about PrimeSpace.
          </p>
        </div>

        {/* Trust Stats Bar */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 48, flexWrap: "wrap",
          padding: "40px 0",
          borderTop: "1px solid #2a1f4a",
          borderBottom: "1px solid #2a1f4a",
          marginBottom: 64,
        }}>
          {trustStats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: 32, fontWeight: 700,
                background: "linear-gradient(135deg, #ab0eff, #eb75ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {stat.num}
              </div>
              <div style={{ fontSize: 13, color: "#a0a0b8", marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
          marginBottom: 48,
        }}>
          {reviews.slice(0, visibleCount).map((review) => {
            const isHovered = hoveredCard === review.id;
            return (
              <div
                key={review.id}
                onMouseEnter={() => setHoveredCard(review.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered ? "#221a52" : "#100d28",
                  border: isHovered ? "1px solid #510c6e" : "1px solid #2a1f4a",
                  borderRadius: 20,
                  padding: 28,
                  transition: "all 0.25s ease",
                  boxShadow: isHovered ? "0 4px 24px rgba(171,14,255,0.2)" : "none",
                  transform: isHovered ? "translateY(-4px)" : "none",
                  display: "flex", flexDirection: "column", gap: 0,
                }}
              >
                {/* Stars */}
                <Stars count={review.rating} />

                {/* Review text */}
                <p style={{
                  fontSize: 15, color: "#a0a0b8",
                  lineHeight: 1.75, fontStyle: "italic",
                  marginBottom: 24, flex: 1,
                }}>
                  "{review.text}"
                </p>

                {/* Divider */}
                <div style={{ height: 1, background: "#2a1f4a", marginBottom: 20 }} />

                {/* Author row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Avatar */}
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #ab0eff, #eb75ff)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, color: "#fff",
                    flexShrink: 0,
                    boxShadow: isHovered ? "0 0 16px rgba(171,14,255,0.4)" : "none",
                    transition: "box-shadow 0.25s",
                  }}>
                    {review.initial}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
                      {review.name}
                    </div>
                    <div style={{
                      fontSize: 12, color: "#00ebd1", marginTop: 2,
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <span>{review.productEmoji}</span>
                      {review.product} · Verified buyer
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: "#52527a" }}>
                    {review.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load more / WhatsApp CTA */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <p style={{ color: "#a0a0b8", fontSize: 14 }}>
            Join 500+ happy Tunisian customers 🇹🇳
          </p>
          <a
            href="https://wa.me/21600000000?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #ab0eff, #eb75ff)",
              color: "#fff", padding: "14px 32px",
              borderRadius: 9999, fontSize: 15, fontWeight: 600,
              textDecoration: "none", transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(235,117,255,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.filter = "none";
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            ✦ Become our next happy customer
          </a>
        </div>

      </div>
    </section>
  );
}
