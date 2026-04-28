"use client";
// src/components/Footer.tsx

const footerLinks = {
  Products: [
    { label: "Streaming", href: "#products" },
    { label: "Music", href: "#products" },
    { label: "AI Tools", href: "#products" },
    { label: "Games", href: "#products" },
    { label: "Gift Cards", href: "#products" },
    { label: "Social Media", href: "#products" },
  ],
  Info: [
    { label: "How It Works", href: "#how" },
    { label: "Payment Methods", href: "#payment" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "WhatsApp", href: "https://wa.me/21600000000" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

function scrollTo(href: string) {
  if (href.startsWith("#")) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.open(href, "_blank");
  }
}

export default function Footer() {
  return (
    <footer style={{
      background: "#1a1340",
      borderTop: "1px solid #2a1f4a",
      padding: "64px 0 32px",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 64,
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              fontSize: 20, fontWeight: 700, color: "#fff",
              marginBottom: 16, letterSpacing: "-0.5px",
            }}>
              <img src="/logo.png" alt="PrimeSpace Logo" style={{ width: 40, height: 40, objectFit: "contain" }} />
              Prime<span style={{ color: "#ff00e2" }}>Space</span>
            </div>
            <p style={{
              fontSize: 14, color: "#a0a0b8",
              lineHeight: 1.75, maxWidth: 260, marginBottom: 24,
            }}>
              Your digital world, delivered locally. Tunisia's trusted reseller for subscriptions, software, games, and more.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { img: "/instagram.png", href: "#", title: "Instagram" },
                { img: "/facebook.png", href: "#", title: "Facebook" },
                { img: "/whatsapp.png", href: "https://wa.me/21600000000", title: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: "#100d28",
                    border: "1px solid #2a1f4a",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", overflow: "hidden",
                    transition: "all 0.2s ease",
                    padding: 6,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#8906e6";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2a1f4a";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div style={{
                fontSize: 12, fontWeight: 600, color: "#fff",
                letterSpacing: "1.5px", textTransform: "uppercase",
                marginBottom: 20,
              }}>
                {title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        fontSize: 14, color: "#a0a0b8",
                        fontFamily: "inherit", padding: 0,
                        transition: "color 0.2s",
                        textAlign: "left",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#eb75ff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#a0a0b8")}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 24,
          borderTop: "1px solid #2a1f4a",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "#52527a", margin: 0 }}>
            © 2025 PrimeSpace. All rights reserved. 🇹🇳
          </p>
          <p style={{
            fontSize: 13, fontWeight: 600, margin: 0,
            background: "linear-gradient(135deg, #ab0eff, #eb75ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Your digital world, delivered locally. 🪐
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
