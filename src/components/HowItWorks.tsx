"use client";
// src/components/HowItWorks.tsx

import { useState } from "react";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Browse & Choose",
    desc: "Browse our catalog and find the product you want. From Netflix to Adobe to game keys — it's all here in one place.",
    color: "#ab0eff",
    detail: "Over 50 products across 6 categories. Filter by type to find exactly what you need.",
  },
  {
    num: "02",
    icon: "💬",
    title: "Contact on WhatsApp",
    desc: "Click the order button and WhatsApp opens with your order pre-written. Just hit send — we reply instantly.",
    color: "#25d366",
    detail: "We're available every day. Average reply time is under 5 minutes.",
  },
  {
    num: "03",
    icon: "💳",
    title: "Pay Locally",
    desc: "Send payment via D17, Flouci, Wafacash, or bank transfer. No international card needed — ever.",
    color: "#00ebd1",
    detail: "Send a screenshot of your transfer and we'll confirm right away.",
  },
  {
    num: "✓",
    icon: "✅",
    title: "Receive Within 24h",
    desc: "Your product is delivered within 24 hours after payment — most orders arrive in under 3 hours. We will confirm your order immediately on WhatsApp.",
    color: "#eb75ff",
    detail: "Credentials, codes, or account details sent directly on WhatsApp. You will always receive a confirmation message so you know exactly where your order stands.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="how"
      style={{
        padding: "96px 0",
        background: "#100d28",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, rgba(171,14,255,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
            Le Processus
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic", fontSize: "clamp(32px,5vw,44px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16,
          }}>
            Three steps. <span style={{ color: "#eb75ff" }}>Zero friction.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#a0a0b8", maxWidth: 480, margin: "0 auto" }}>
            Ordering is as easy as sending a WhatsApp message. Here's exactly how it works.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          position: "relative",
        }}
          className="steps-grid"
        >
          {/* Connecting line */}
          <div style={{
            position: "absolute",
            top: 52, left: "12%", right: "12%",
            height: 1,
            background: "linear-gradient(90deg, #ab0eff, #00ebd1)",
            opacity: 0.3,
            zIndex: 0,
          }} className="connector-line" />

          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(isActive ? null : i)}
                style={{
                  background: isActive ? "#221a52" : "#1a1340",
                  border: isActive ? `1px solid ${step.color}60` : "1px solid #2a1f4a",
                  borderRadius: 20,
                  padding: "32px 24px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isActive ? `0 8px 32px ${step.color}20` : "none",
                  transform: isActive ? "translateY(-6px)" : "none",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = step.color + "40";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2a1f4a";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }
                }}
              >
                {/* Step number badge */}
                <div style={{
                  position: "absolute", top: -14, left: "50%",
                  transform: "translateX(-50%)",
                  background: isActive
                    ? `linear-gradient(135deg, ${step.color}, #eb75ff)`
                    : "linear-gradient(135deg, #ab0eff, #eb75ff)",
                  color: "#fff",
                  fontSize: 11, fontWeight: 700, letterSpacing: "1px",
                  padding: "4px 14px", borderRadius: 9999,
                  whiteSpace: "nowrap",
                }}>
                  {step.num === "✓" ? "✓ DONE" : `STEP ${step.num}`}
                </div>

                {/* Icon */}
                <div style={{
                  width: 72, height: 72, borderRadius: 20,
                  background: isActive
                    ? `linear-gradient(135deg, ${step.color}30, ${step.color}10)`
                    : "#510c6e",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 32, margin: "16px auto 20px",
                  border: `1px solid ${step.color}30`,
                  boxShadow: isActive ? `0 0 24px ${step.color}30` : "none",
                  transition: "all 0.3s ease",
                }}>
                  {step.icon}
                </div>

                {/* Title */}
                <div style={{
                  fontSize: 18, fontWeight: 600,
                  color: isActive ? step.color : "#fff",
                  marginBottom: 10,
                  transition: "color 0.3s",
                }}>
                  {step.title}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: 14, color: "#a0a0b8", lineHeight: 1.7, margin: 0,
                }}>
                  {step.desc}
                </p>

                {/* Expanded detail */}
                <div style={{
                  maxHeight: isActive ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}>
                  <div style={{
                    marginTop: 16,
                    padding: "10px 14px",
                    background: `${step.color}10`,
                    border: `1px solid ${step.color}25`,
                    borderRadius: 10,
                    fontSize: 13,
                    color: step.color,
                    lineHeight: 1.6,
                  }}>
                    {step.detail}
                  </div>
                </div>

                {/* Click hint */}
                <div style={{
                  marginTop: 14,
                  fontSize: 11, color: "#52527a",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 4,
                }}>
                  {isActive ? "▲ Less info" : "▼ More info"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: "center", marginTop: 64,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 16,
        }}>
          <p style={{ color: "#a0a0b8", fontSize: 15 }}>
            Ready to place your first order?
          </p>
          <a
            href="https://wa.me/21658872007?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
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
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(37,211,102,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#25d366";
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            💬 Start Ordering on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .connector-line { display: none; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
