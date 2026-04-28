"use client";
// src/components/PaymentMethods.tsx

import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────
const paymentMethods = [
  {
    id: "bank",
    name: "Bank Transfer",
    emoji: "🏦",
    detail: "32019788101176749155",
    label: "RIB",
    note: "All Tunisian banks accepted",
    color: "#ab0eff",
    bg: "linear-gradient(135deg, #1a0030, #2d0050)",
  },
  {
    id: "wafacash",
    name: "Wafacash",
    emoji: "💸",
    detail: "+216 58 872 007",
    label: "Phone Number",
    note: "Cash transfer at any Wafacash point",
    color: "#F97316",
    bg: "linear-gradient(135deg, #1a0a00, #3d1500)",
  },
  {
    id: "d17",
    name: "D17",
    emoji: "📱",
    detail: "+216 58 872 007",
    label: "D17 Number",
    note: "Instant transfer via D17 app",
    color: "#00ebd1",
    bg: "linear-gradient(135deg, #001a18, #003d30)",
  },
  {
    id: "flouci",
    name: "Flouci",
    emoji: "📲",
    detail: "primespace.tn",
    label: "Flouci ID",
    note: "Instant transfer via Flouci app",
    color: "#eb75ff",
    bg: "linear-gradient(135deg, #1a0030, #3d0060)",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────
export default function PaymentMethods() {
  const [copied, setCopied] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <section
      id="payment"
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
            How to Pay
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16,
          }}>
            Local payments <span style={{ color: "#eb75ff" }}>only.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 520, margin: "0 auto" }}>
            We accept 4 Tunisian payment methods. No international card, no stress.
            Tap any detail to copy it instantly.
          </p>
        </div>

        {/* Payment Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 48,
        }}>
          {paymentMethods.map((method) => {
            const isHovered = hoveredCard === method.id;
            const isCopied = copied === method.id;

            return (
              <div
                key={method.id}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered ? "#221a52" : "#100d28",
                  border: isHovered
                    ? `1px solid ${method.color}60`
                    : "1px solid #2a1f4a",
                  borderRadius: 20,
                  padding: 28,
                  textAlign: "center",
                  transition: "all 0.25s ease",
                  boxShadow: isHovered
                    ? `0 4px 32px ${method.color}20`
                    : "none",
                  transform: isHovered ? "translateY(-4px)" : "none",
                  cursor: "default",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 72, height: 72,
                  borderRadius: 20,
                  background: method.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 34, margin: "0 auto 20px",
                  border: `1px solid ${method.color}30`,
                  boxShadow: isHovered ? `0 0 24px ${method.color}30` : "none",
                  transition: "all 0.25s ease",
                }}>
                  {method.emoji}
                </div>

                {/* Name */}
                <div style={{
                  fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 16,
                }}>
                  {method.name}
                </div>

                {/* Copyable detail */}
                <button
                  onClick={() => handleCopy(method.id, method.detail)}
                  style={{
                    width: "100%",
                    background: isCopied
                      ? "rgba(0,235,209,0.1)"
                      : "rgba(255,255,255,0.05)",
                    border: isCopied
                      ? "1px solid rgba(0,235,209,0.4)"
                      : "1px dashed #2a1f4a",
                    borderRadius: 12,
                    padding: "12px 16px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    marginBottom: 12,
                    fontFamily: "monospace",
                  }}
                  onMouseEnter={e => {
                    if (!isCopied) {
                      (e.currentTarget as HTMLElement).style.borderColor = method.color + "60";
                      (e.currentTarget as HTMLElement).style.background = `${method.color}10`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isCopied) {
                      (e.currentTarget as HTMLElement).style.borderColor = "#2a1f4a";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                >
                  <div style={{
                    fontSize: 11, color: "#a0a0b8",
                    marginBottom: 4, textTransform: "uppercase",
                    letterSpacing: "1px", fontFamily: "inherit",
                  }}>
                    {method.label}
                  </div>
                  <div style={{
                    fontSize: 15, fontWeight: 600,
                    color: isCopied ? "#00ebd1" : method.color,
                    transition: "color 0.2s",
                  }}>
                    {method.detail}
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: isCopied ? "#00ebd1" : "#a0a0b8",
                    marginTop: 6,
                    display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 4,
                    transition: "color 0.2s",
                    fontFamily: "inherit",
                  }}>
                    {isCopied ? (
                      <><span>✓</span> Copied!</>
                    ) : (
                      <><span>⎘</span> Tap to copy</>
                    )}
                  </div>
                </button>

                {/* Note */}
                <p style={{ fontSize: 12, color: "#a0a0b8", lineHeight: 1.5 }}>
                  {method.note}
                </p>
              </div>
            );
          })}
        </div>

        {/* Info note */}
        <div style={{
          background: "rgba(0,235,209,0.06)",
          border: "1px solid rgba(0,235,209,0.2)",
          borderRadius: 16,
          padding: "20px 28px",
          display: "flex", alignItems: "center", gap: 16,
          maxWidth: 680, margin: "0 auto",
        }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: 14, color: "#a0a0b8", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "#00ebd1" }}>How it works:</strong> Send your payment first,
            then message us on WhatsApp with a screenshot of your transfer.
            Your product will be delivered in minutes after confirmation.
          </p>
        </div>

      </div>
    </section>
  );
}
