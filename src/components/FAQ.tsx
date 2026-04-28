"use client";
// src/components/FAQ.tsx

import { useState } from "react";

const faqs = [
  {
    q: "How do I place an order?",
    a: "It's simple! Browse the products, find what you want, and click the 'Order on WhatsApp' button. WhatsApp will open with your order pre-written. Just hit send and we'll take it from there.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are delivered within a few hours after payment confirmation. In some cases it may take up to 24 hours. We will always send you a confirmation message on WhatsApp so you know exactly where your order stands — no guessing, no stress.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept 4 local Tunisian payment methods: Bank Transfer, Wafacash, D17, and Flouci. No international card needed — ever. Just use whatever you already have on your phone.",
  },
  {
    q: "Is it safe to order from PrimeSpace?",
    a: "Absolutely. We've served hundreds of Tunisian customers and have a 4.9★ rating. We only sell legitimate, working subscriptions and accounts. If something goes wrong, we fix it or refund you — no questions asked.",
  },
  {
    q: "What if I have a problem with my order?",
    a: "Just message us on WhatsApp and we'll fix it immediately. We're available every day and respond fast. Customer satisfaction is our priority — we don't disappear after you pay.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If your product doesn't work or there's an issue on our end, we will either fix it or give you a full refund. We stand behind every order we deliver.",
  },
  {
    q: "Can I order for someone else?",
    a: "Yes! You can order for a friend or family member. Just let us know their email or account details when ordering and we'll deliver directly to them.",
  },
  {
    q: "Do you have more products not listed on the site?",
    a: "Yes! The site shows our most popular products but we have much more. Just message us on WhatsApp and ask — if we don't have it, we'll tell you honestly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
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
            FAQ
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16,
          }}>
            Got <span style={{ color: "#eb75ff" }}>questions?</span>
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 480, margin: "0 auto" }}>
            Everything you need to know before placing your first order.
          </p>
        </div>

        {/* FAQ List */}
        <div style={{
          maxWidth: 720, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? "#221a52" : "#100d28",
                  border: isOpen ? "1px solid #510c6e" : "1px solid #2a1f4a",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? "0 4px 24px rgba(171,14,255,0.15)" : "none",
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none", border: "none",
                    cursor: "pointer", gap: 16, textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{
                    fontSize: 16, fontWeight: 600,
                    color: isOpen ? "#eb75ff" : "#fff",
                    transition: "color 0.25s",
                    lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: 30, height: 30, borderRadius: "50%",
                    background: isOpen ? "#ab0eff" : "#510c6e",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: 18, flexShrink: 0,
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "all 0.3s ease",
                  }}>
                    +
                  </div>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}>
                  <p style={{
                    padding: "0 24px 20px",
                    fontSize: 15, color: "#a0a0b8",
                    lineHeight: 1.75, margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div style={{
          textAlign: "center", marginTop: 48,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 12,
        }}>
          <p style={{ color: "#a0a0b8", fontSize: 15 }}>
            Still have a question? Just ask us directly 👇
          </p>
          <a
            href="https://wa.me/21600000000?text=Hi%20PrimeSpace!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#25d366", color: "#fff",
              padding: "13px 28px", borderRadius: 9999,
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
            💬 Ask on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
