"use client";
// src/components/Reviews.tsx

import { useState } from "react";

const trustStats = [
  { num: "50+", label: "Products available" },
  { num: "100%", label: "Local payments" },
  { num: "<3h", label: "Delivery time" },
  { num: "TN", label: "Made for Tunisia" },
];

const emptySpots = [1, 2, 3, 4, 5, 6];

export default function Reviews() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="reviews" style={{ padding: "96px 0", background: "#1a1340" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(171,14,255,0.1)",
            border: "1px solid rgba(171,14,255,0.3)",
            color: "#eb75ff", fontSize: 12, fontWeight: 600,
            letterSpacing: "1.5px", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: 9999, marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ebd1", display: "inline-block" }} />
            Social Proof
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16,
          }}>
            Be among our <span style={{ color: "#eb75ff" }}>first</span> customers.
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 480, margin: "0 auto" }}>
            We just launched! Early customers get the best prices — and the best experience.
          </p>
        </div>

        {/* Trust Stats */}
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

        {/* Empty Review Spots */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20, marginBottom: 48,
        }}>
          {emptySpots.map((spot) => (
            <div
              key={spot}
              onMouseEnter={() => setHoveredCard(spot)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === spot ? "#221a52" : "#100d28",
                border: hoveredCard === spot ? "1px solid #8906e6" : "1px dashed #2a1f4a",
                borderRadius: 20, padding: 28,
                transition: "all 0.25s ease",
                boxShadow: hoveredCard === spot ? "0 4px 24px rgba(137,6,230,0.2)" : "none",
                transform: hoveredCard === spot ? "translateY(-4px)" : "none",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 14, minHeight: 200, textAlign: "center",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 4 }}>
                {[1,2,3,4,5].map((i) => (
                  <span key={i} style={{
                    color: hoveredCard === spot ? "#fbbf24" : "#2a1f4a",
                    fontSize: 20, transition: "color 0.3s ease",
                  }}>★</span>
                ))}
              </div>

              {/* Pulsing icon */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "rgba(137,6,230,0.1)",
                border: "1px dashed #8906e6",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 20, color: "#8906e6" }}>✦</span>
              </div>

              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6 }}>
                  Your review could be here
                </div>
                <div style={{ fontSize: 12, color: "#a0a0b8" }}>
                  Spot #{spot} — waiting to be filled
                </div>
              </div>

              <div style={{
                fontSize: 11, color: "#8906e6", fontWeight: 600,
                background: "rgba(137,6,230,0.1)",
                border: "1px solid rgba(137,6,230,0.3)",
                padding: "4px 12px", borderRadius: 9999,
              }}>
                Available
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <p style={{ color: "#a0a0b8", fontSize: 14 }}>
            Be among our first customers and leave the first review!
          </p>
          <a
            href="https://wa.me/21658588633?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #8906e6, #ff00e2)",
              color: "#fff", padding: "14px 32px",
              borderRadius: 9999, fontSize: 15, fontWeight: 600,
              textDecoration: "none", transition: "all 0.2s ease",
            }}
          >
            Be our first happy customer
          </a>
        </div>

      </div>
    </section>
  );
}