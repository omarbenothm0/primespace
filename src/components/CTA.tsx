"use client";
// src/components/CTA.tsx

export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "120px 0",
        textAlign: "center",
        background: `
          radial-gradient(ellipse at 50% 50%, rgba(171,14,255,0.2) 0%, transparent 65%),
          #100d28
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(171,14,255,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(0,235,209,0.08)",
          border: "1px solid rgba(0,235,209,0.25)",
          color: "#00ebd1",
          fontSize: 12, fontWeight: 600, letterSpacing: "1.5px",
          textTransform: "uppercase", padding: "6px 16px",
          borderRadius: 9999, marginBottom: 28,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ebd1", display: "inline-block" }} />
          Ready to order?
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700, color: "#fff",
          lineHeight: 1.1, marginBottom: 20,
        }}>
          We're one message <span style={{ color: "#eb75ff" }}>away.</span>
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: 18, color: "#a0a0b8",
          lineHeight: 1.7, marginBottom: 48,
        }}>
          Join hundreds of Tunisians who access the world's best apps through PrimeSpace.
          No international card. No hassle. Just WhatsApp.
        </p>

        {/* Buttons */}
        <div style={{
          display: "flex", gap: 14,
          justifyContent: "center", flexWrap: "wrap",
          marginBottom: 40,
        }}>
          <a
            href="https://wa.me/21658588633?text=Hi%20PrimeSpace!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#25d366", color: "#fff",
              padding: "16px 36px", borderRadius: 9999,
              fontSize: 17, fontWeight: 600, textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#1ebe59";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#25d366";
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            💬 Chat on WhatsApp
          </a>
          <button
            onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#fff",
              border: "1px solid #510c6e",
              padding: "16px 36px", borderRadius: 9999,
              fontSize: 17, fontWeight: 600,
              fontFamily: "inherit", cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#1a1340";
              (e.currentTarget as HTMLElement).style.borderColor = "#ab0eff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "#510c6e";
            }}
          >
            ✦ Browse Products
          </button>
        </div>

        {/* Social links */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 12,
        }}>
          {[
            { img: "/instagram.png", title: "Instagram", href: "#" },
            { img: "/facebook.png", title: "Facebook", href: "#" },
            { img: "/whatsapp.png", title: "WhatsApp", href: "https://wa.me/21658588633" },
          ].map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.title}
              style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "#1a1340",
                border: "1px solid #2a1f4a",
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", overflow: "hidden",
                transition: "all 0.2s ease",
                padding: 8,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#8906e6";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(137,6,230,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2a1f4a";
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
