"use client";
// src/components/ProductCatalog.tsx

import { useState, useRef, useEffect } from "react";

const categories = [
  { id: "all",       label: "All Products", emoji: "✦"  },
  { id: "streaming", label: "Streaming",    emoji: "🎬" },
  { id: "music",     label: "Music",        emoji: "🎵" },
  { id: "ai",        label: "AI Tools",     emoji: "🤖" },
  { id: "design",    label: "Design",       emoji: "🎨" },
  { id: "education", label: "Education",    emoji: "📚" },
  { id: "software",  label: "Software",     emoji: "💻" },
  { id: "vpn",       label: "VPN",          emoji: "🔒" },
  { id: "antivirus", label: "Antivirus",    emoji: "🛡️" },
  { id: "gaming",    label: "Gaming",       emoji: "🎮" },
  { id: "social",    label: "Social",       emoji: "💬" },
];

type Denomination = { label: string; tnd: string };

type Product = {
  id: number;
  category: string;
  name: string;
  tag: string;
  img: string;
  bg: string;
  color: string;
  price: string;
  per: string;
  badge: string;
  features: string[];
  popular: boolean;
  denominations?: Denomination[];
};

const products: Product[] = [

  // ── STREAMING ─────────────────────────────────────────────────────────────
  {
    id: 1, category: "streaming",
    name: "Netflix Premium", tag: "Streaming · 4K · Private Profile",
    img: "/netflix.png",
    bg: "linear-gradient(135deg,#141414,#E50914)", color: "#E50914",
    price: "25 TND", per: "/ month", badge: "Save 80%",
    features: ["Your own dedicated private profile", "4K Ultra HD · All devices", "30-day warranty included"],
    popular: true,
  },
  {
    id: 2, category: "streaming",
    name: "Disney+ Premium", tag: "Streaming · 4K · Private Profile",
    img: "/disney.png",
    bg: "linear-gradient(135deg,#000820,#0063e5)", color: "#0063e5",
    price: "20 TND", per: "/ month", badge: "Private Profile",
    features: ["Your own private profile", "Marvel, Star Wars & Pixar in 4K", "Watch on TV, Mobile or PC"],
    popular: false,
  },
  {
    id: 3, category: "streaming",
    name: "Prime Video", tag: "Streaming · HD · Private Profile",
    img: "/primevideo.png",
    bg: "linear-gradient(135deg,#001a2e,#00A8E1)", color: "#00A8E1",
    price: "25 TND", per: "/ month", badge: "Private Profile",
    features: ["Your own private profile", "Unlimited movies & Prime Originals", "Watch on TV, Mobile or PC"],
    popular: false,
  },
  {
    id: 4, category: "streaming",
    name: "Shahid VIP", tag: "Streaming · Arabic · Full Access",
    img: "/shahidvip.png",
    bg: "linear-gradient(135deg,#1a0000,#e63946)", color: "#e63946",
    price: "25 TND", per: "/ month", badge: "Full Access",
    features: ["Full access — Arabic series & movies", "Works on TV, PC & Phone", "Exclusive Arabic Originals"],
    popular: false,
  },
  {
    id: 5, category: "streaming",
    name: "Apple TV+", tag: "Streaming · Originals · Full Access",
    img: "/appletv2.png",
    bg: "linear-gradient(135deg,#111111,#444444)", color: "#ffffff",
    price: "25 TND", per: "/ month", badge: "Full Access",
    features: ["Apple Original series & films", "Watch on Phone, Mac & TV", "Award-winning content"],
    popular: false,
  },

  // ── MUSIC ──────────────────────────────────────────────────────────────────
  {
    id: 6, category: "music",
    name: "Spotify Premium", tag: "Music · Full Access · 1 Month",
    img: "/spotify.png",
    bg: "linear-gradient(135deg,#0f1f0f,#1DB954)", color: "#1DB954",
    price: "25 TND", per: "/ month", badge: "",
    features: ["Ad-free listening experience", "Offline downloads enabled", "Works on all devices (Android, iOS, PC, Mac)"],
    popular: true,
  },
  {
    id: 7, category: "music",
    name: "Deezer", tag: "Music · Family · 3 Months Shared",
    img: "/deezer.png",
    bg: "linear-gradient(135deg,#1a0a00,#ef5466)", color: "#ef5466",
    price: "50 TND", per: "/ 3 months", badge: "Shared Slot",
    features: ["Listen without cutting off other members", "Ad-free music offline", "Works on PC, TV, Mobile, PS, Xbox, Pad"],
    popular: false,
  },
  {
    id: 8, category: "music",
    name: "SoundCloud", tag: "Music · Personal · 1 Month",
    img: "/soundcloud.png",
    bg: "linear-gradient(135deg,#1a0500,#ff5500)", color: "#ff5500",
    price: "35 TND", per: "/ month", badge: "Personal Account",
    features: ["Personal account · Plus plan", "Offline listening on Mobile, PC, Web", "Independent artists & original works"],
    popular: false,
  },
  {
    id: 11, category: "music",
    name: "YouTube Premium", tag: "Music + Video · 1 Year",
    img: "/youtube.png",
    bg: "linear-gradient(135deg,#1a0000,#FF0000)", color: "#FF0000",
    price: "99 TND", per: "/ year", badge: "Best Value",
    features: ["No ads on YouTube", "Background play", "YouTube Music included"],
    popular: false,
  },
  {
    id: 12, category: "music",
    name: "Anghami", tag: "Music · Full Access · 1 Month",
    img: "/anghami.png",
    bg: "linear-gradient(135deg,#0a0a1a,#6c63ff)", color: "#6c63ff",
    price: "15 TND", per: "/ month", badge: "Full Access",
    features: ["Unlimited music without ads", "Download for offline listening", "Works on Android, iOS, PC, Smart TV & more"],
    popular: false,
  },

  // ── AI TOOLS ───────────────────────────────────────────────────────────────
  {
    id: 13, category: "ai",
    name: "ChatGPT & Rita", tag: "AI · ChatGPT + Multi-Model Pack",
    img: "/chatgpt.png",
    bg: "linear-gradient(135deg,#0a1a14,#10A37F)", color: "#10A37F",
    price: "99 TND", per: "/ month", badge: "All-in-One AI",
    features: ["ChatGPT, Gemini, Claude & more in one place", "Text, image, video & audio creation", "Works on Mobile, PC, iPhone, Pad, Web & Mac"],
    popular: true,
  },
  {
    id: 14, category: "ai",
    name: "Claude Pro + Claude Code", tag: "AI · Pro + Code · 1 Month",
    img: "/claude.png",
    bg: "linear-gradient(135deg,#1a0f00,#cc785c)", color: "#cc785c",
    price: "79 TND", per: "/ month", badge: "Full Access",
    features: ["Personal access via your own email", "Claude Code — coding, debugging & automation", "Advanced reasoning & expanded context window"],
    popular: false,
  },
  {
    id: 15, category: "ai",
    name: "Perplexity", tag: "AI · Web Search · Pro · 1 Month",
    img: "/perplexity.png",
    bg: "linear-gradient(135deg,#001a1a,#20b2aa)", color: "#20b2aa",
    price: "29 TND", per: "/ month", badge: "Shared Account",
    features: ["Real-time web search with cited sources", "Access to ChatGPT, Claude, Gemini & Grok models", "Works on PC, Phone & Mac"],
    popular: false,
  },
  {
    id: 16, category: "ai",
    name: "Gemini Advanced", tag: "AI · Google · Full Access · 1 Month",
    img: "/gemini.png",
    bg: "linear-gradient(135deg,#001a3a,#4285F4)", color: "#4285F4",
    price: "30 TND", per: "/ month", badge: "By Google",
    features: ["Advanced AI for writing, research & coding", "File analysis & content generation", "Works on PC, Phone & Mac"],
    popular: false,
  },
  {
    id: 17, category: "ai",
    name: "Grok", tag: "AI · xAI · SuperGrok · 1 Month",
    img: "/grok.png",
    bg: "linear-gradient(135deg,#0a0a0a,#333333)", color: "#ffffff",
    price: "39 TND", per: "/ month", badge: "Private Account",
    features: ["Full private account — not shared with anyone", "AI image & video generation (HD 720p)", "Access to Grok 4 & latest flagship models"],
    popular: false,
  },
  {
    id: 18, category: "ai",
    name: "Midjourney", tag: "AI · Image Gen · Standard · 1 Month",
    img: "/midjourney.png",
    bg: "linear-gradient(135deg,#0a001a,#7928CA)", color: "#9b59b6",
    price: "99 TND", per: "/ month", badge: "Personal Account",
    features: ["Personal account — not shared with anyone", "Unlimited AI image generation + commercial rights", "Works on PC & Mac"],
    popular: false,
  },
  {
    id: 19, category: "ai",
    name: "Seedance 2.0", tag: "AI · Multi-Model · Mega Plan · 1 Month",
    img: "/seedance.png",
    bg: "linear-gradient(135deg,#001a0a,#00b894)", color: "#00b894",
    price: "45 TND", per: "/ month", badge: "Mega Plan",
    features: ["Seedance, ChatGPT, Gemini, Claude & more in one place", "Text, image, video & audio creation", "Works on Mobile, PC, iPhone, Pad, Web & Mac"],
    popular: false,
  },
  {
    id: 20, category: "ai",
    name: "Kling", tag: "AI · Video Gen · Full Access · 1 Month",
    img: "/kling.png",
    bg: "linear-gradient(135deg,#1a0a00,#e17055)", color: "#e17055",
    price: "99 TND", per: "/ month", badge: "Full Access",
    features: ["Individual & confidential access — not shared", "Works on Phone, PC & Mac", "Quick setup once order is confirmed"],
    popular: false,
  },
  {
    id: 21, category: "ai",
    name: "Higgsfield", tag: "AI · Video Gen · Plus Plan · 1 Month",
    img: "/higgsfield.png",
    bg: "linear-gradient(135deg,#00001a,#0984e3)", color: "#0984e3",
    price: "55 TND", per: "/ month", badge: "Full Access",
    features: ["Cinematic AI video generation", "Works on PC & Mac", "Full warranty & support throughout subscription"],
    popular: false,
  },
  {
    id: 22, category: "ai",
    name: "ElevenLabs", tag: "AI · Voice Gen · Creator Plan · 1 Month · 121k Credits",
    img: "/elevenlabs.png",
    bg: "linear-gradient(135deg,#1a1a00,#f9ca24)", color: "#f9ca24",
    price: "35 TND", per: "/ month", badge: "121k Credits",
    features: ["121,000 voice generation credits included", "Full access to Creator plan — PC, Phone & Mac", "Clone voices, generate speech in 30+ languages"],
    popular: false,
  },
  {
    id: 23, category: "ai",
    name: "Cursor", tag: "AI · Coding Assistant · Pro · Full Access · 1 Month",
    img: "/cursor.png",
    bg: "linear-gradient(135deg,#00001a,#6c5ce7)", color: "#6c5ce7",
    price: "65 TND", per: "/ month", badge: "Pro Account",
    features: ["Full private Pro account — not shared with anyone", "AI code generation, bug fixing & auto-complete", "Works on PC & Mac · Warranty included"],
    popular: false,
  },

  // ── DESIGN ─────────────────────────────────────────────────────────────────
  {
    id: 24, category: "design",
    name: "Canva Pro", tag: "Design · Full Access · 1 Month · Login Included",
    img: "/canva.png",
    bg: "linear-gradient(135deg,#0a001a,#7D2AE8)", color: "#00C4CC",
    price: "15 TND", per: "/ month", badge: "Full Access",
    features: ["Premium templates, graphics & advanced design tools", "Background remover + download in any format", "Login credentials delivered instantly · PC & Mac"],
    popular: false,
  },
  {
    id: 25, category: "design",
    name: "CapCut Pro", tag: "Design · Video Editing · Pro · 1 Month",
    img: "/capcut.png",
    bg: "linear-gradient(135deg,#0a0a0a,#000000)", color: "#ffffff",
    price: "35 TND", per: "/ month", badge: "Private Account",
    features: ["Private account — not shared with anyone", "AI-powered video editing & image design tools", "Works on Mobile, PC, Mac & Web"],
    popular: false,
  },
  {
    id: 26, category: "design",
    name: "Freepik", tag: "Design · Premium Assets · 1 Month",
    img: "/freepik.png",
    bg: "linear-gradient(135deg,#001a10,#1abc9c)", color: "#1abc9c",
    price: "35 TND", per: "/ month", badge: "Full Access",
    features: ["600+ downloads/month · 20+ downloads per day", "Full access to all Freepik Premium content", "Private account · Works on PC & Mac"],
    popular: false,
  },

  // ── EDUCATION ──────────────────────────────────────────────────────────────
  {
    id: 27, category: "education",
    name: "Grammarly", tag: "Writing · AI · Premium · 1 Month",
    img: "/grammarly.png",
    bg: "linear-gradient(135deg,#001a05,#15c39a)", color: "#15c39a",
    price: "25 TND", per: "/ month", badge: "Shared Slot",
    features: ["Premium AI grammar & writing assistant", "Works on PC, Web & Mobile · Any app or website", "Tone detection, text suggestions & corrections"],
    popular: false,
  },
  {
    id: 28, category: "education",
    name: "Duolingo", tag: "Education · Languages · Family · 6 Months",
    img: "/duolingo.png",
    bg: "linear-gradient(135deg,#0a1a00,#58cc02)", color: "#58cc02",
    price: "75 TND", per: "/ 6 months", badge: "Family Plan",
    features: ["Family plan · Shared slot · 6 months access", "Ad-free lessons on Mobile, PC, Mac & Web", "All languages · Reading, writing, listening & speaking"],
    popular: false,
  },
  {
    id: 29, category: "education",
    name: "Coursera Bundle", tag: "Education · 8 Platforms · Shared · 1 Month",
    img: "/coursera.png",
    bg: "linear-gradient(135deg,#001530,#0056d2)", color: "#0056d2",
    price: "39 TND", per: "/ month", badge: "8 Platforms",
    features: ["8 platforms: Coursera, Skillshare, Datacamp, Grammarly & more", "Access via Chrome extension on PC, Phone & Mac", "Includes tutorial videos · 24/7 support"],
    popular: false,
  },

  // ── SOFTWARE ───────────────────────────────────────────────────────────────
  {
    id: 30, category: "software",
    name: "Windows 11", tag: "Software · OS · Pro · Lifetime Key",
    img: "/windows11.png",
    bg: "linear-gradient(135deg,#001030,#0078d7)", color: "#0078d7",
    price: "59 TND", per: "", badge: "Lifetime Key",
    features: ["Genuine OEM key · One-time activation · 1 PC", "Compatible with Microsoft Windows 11 Pro", "Global activation · Instant delivery · PC only"],
    popular: false,
  },
  {
    id: 31, category: "software",
    name: "Windows 10", tag: "Software · OS · Pro · Lifetime Key",
    img: "/windows10.png",
    bg: "linear-gradient(135deg,#001030,#00adef)", color: "#00adef",
    price: "59 TND", per: "", badge: "Lifetime Key",
    features: ["Genuine Retail key · Linked to your Microsoft account", "Reinstall anytime · Move to a new PC · 32 & 64-bit", "Global activation · Lifetime updates included"],
    popular: false,
  },

  // ── VPN ────────────────────────────────────────────────────────────────────
  {
    id: 32, category: "vpn",
    name: "CyberGhost VPN", tag: "VPN · Full Access · 1 Month",
    img: "/cyberghost.png",
    bg: "linear-gradient(135deg,#1a1000,#ffcc00)", color: "#ffcc00",
    price: "22 TND", per: "/ month", badge: "Full Access",
    features: ["9000+ servers in 90+ countries · No logs policy", "Fast streaming · Unlimited bandwidth · AES-256", "Works on PC, Phone, Mac & TV · Instant delivery"],
    popular: false,
  },
  {
    id: 33, category: "vpn",
    name: "ExpressVPN", tag: "VPN · Private Account · Full Access · 1 Month",
    img: "/expressvpn.png",
    bg: "linear-gradient(135deg,#1a0000,#da3940)", color: "#da3940",
    price: "25 TND", per: "/ month", badge: "Private Account",
    features: ["Private account — not shared with anyone", "Full access · Works on PC, Phone, Mac & TV", "30-day guarantee · Instant delivery"],
    popular: false,
  },

  // ── ANTIVIRUS ──────────────────────────────────────────────────────────────
  {
    id: 34, category: "antivirus",
    name: "McAfee", tag: "Antivirus · Full Access · 1 Year · PC, Phone & Mac",
    img: "/mcafee.png",
    bg: "linear-gradient(135deg,#001a00,#c0392b)", color: "#c0392b",
    price: "59 TND", per: "/ year", badge: "1 Year · Full Access",
    features: ["Full access — Advanced plan · 1 year duration", "Works on PC, Phone & Mac · Activatable in Tunisia", "Real-time protection · No sharing · Instant delivery"],
    popular: false,
  },

  // ── GAMING ─────────────────────────────────────────────────────────────────
  {
    id: 36, category: "gaming",
    name: "PlayStation Plus Deluxe", tag: "Gaming · PS4/PS5 · Full Access · 1 Month",
    img: "/playstation.png",
    bg: "linear-gradient(135deg,#00003a,#002f6c)", color: "#4e9de0",
    price: "79 TND", per: "/ month", badge: "Best PS Plan",
    features: ["Best PlayStation Plus plan — Full Access", "Global account · 100% guarantee · Works on PS4 & PS5", "Includes game catalog, online play & exclusive perks"],
    popular: false,
  },
  {
    id: 37, category: "gaming",
    name: "Xbox Essential", tag: "Gaming · Xbox Game Pass Essential · 1 Month",
    img: "/xbox.png",
    bg: "linear-gradient(135deg,#001a00,#107c10)", color: "#107c10",
    price: "29 TND", per: "/ month", badge: "Full Access",
    features: ["New Microsoft/Xbox account with active subscription", "Compatible with any country · No region change needed", "Full warranty for the whole period · PC, Phone & Mac"],
    popular: false,
  },
  {
    id: 38, category: "gaming",
    name: "Xbox Premium", tag: "Gaming · Xbox Game Pass Premium · 1 Month",
    img: "/xbox.png",
    bg: "linear-gradient(135deg,#001500,#52b043)", color: "#52b043",
    price: "39 TND", per: "/ month", badge: "Best Value 👑",
    features: ["Compatible with PC, Xbox & Mobile · No card required", "Use your own account via Xbox Home Feature", "Full warranty · Works everywhere · No region change"],
    popular: true,
  },

  // ── STEAM WALLET ───────────────────────────────────────────────────────────
  {
    id: 40, category: "gaming",
    name: "Steam Wallet", tag: "Gaming · Gift Card · Instant Delivery",
    img: "/steam.png",
    bg: "linear-gradient(135deg,#000d1a,#1b2838)", color: "#1b9fff",
    price: "", per: "", badge: "Gift Card",
    features: [
      "Instant digital code — delivered on WhatsApp",
      "Works on PC, Mac & Steam Deck",
      "No expiry · Use on any Steam game or DLC",
    ],
    popular: false,
    denominations: [
      { label: "$20",  tnd: "79 TND"  },
      { label: "$30",  tnd: "119 TND" },
      { label: "$50",  tnd: "190 TND" },
      { label: "$100", tnd: "385 TND" },
    ],
  },

  // ── SOCIAL ─────────────────────────────────────────────────────────────────
  {
    id: 39, category: "social",
    name: "Discord Nitro Basic", tag: "Social · Discord · Nitro Basic · 1 Month",
    img: "/discord.png",
    bg: "linear-gradient(135deg,#0a0a1a,#5865F2)", color: "#5865F2",
    price: "20 TND", per: "/ month", badge: "Nitro Basic",
    features: ["Full access · Activatable in Tunisia · 1 Month", "Works on PC, Phone & Mac", "Animated avatar, custom emoji & bigger file uploads"],
    popular: false,
  },
];

function openWA(productName: string, denomination?: string) {
  const orderText = denomination
    ? `Hi PrimeSpace! I want to order: ${productName} ${denomination}`
    : `Hi PrimeSpace! I want to order: ${productName}`;
  const msg = encodeURIComponent(orderText);
  window.open(`https://wa.me/21658588633?text=${msg}`, "_blank");
}

function ProductCard({
  product,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  selectedDenom,
  onSelectDenom,
  style,
}: {
  product: Product;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  selectedDenom: number;
  onSelectDenom: (i: number) => void;
  style?: React.CSSProperties;
}) {
  const hasDenoms = product.denominations && product.denominations.length > 0;
  const activeDenom = hasDenoms ? product.denominations![selectedDenom] : null;
  const displayPrice = hasDenoms ? activeDenom!.tnd : product.price;
  const displayPer   = hasDenoms ? "" : product.per;

  return (
    <div
      id={`product-${product.id}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: isHovered ? "#221a52" : "#1a1340",
        border: isHovered ? "1px solid #8906e6" : "1px solid #2a1f4a",
        borderRadius: 20,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "all 0.25s ease",
        cursor: "pointer",
        boxShadow: isHovered ? "0 4px 24px rgba(137,6,230,0.25)" : "none",
        transform: isHovered ? "translateY(-4px)" : "none",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: product.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", padding: product.img ? 6 : 0 }}>
          {product.img
            ? <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "screen" }} />
            : <span style={{ fontSize: 26, fontWeight: 900, color: product.color }}>{product.name[0]}</span>}
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{product.name}</div>
          <div style={{ fontSize: 12, color: "#a0a0b8", marginTop: 2 }}>{product.tag}</div>
        </div>
      </div>

      {/* Denomination selector */}
      {hasDenoms && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {product.denominations!.map((d, i) => {
            const isActive = i === selectedDenom;
            return (
              <button
                key={d.label}
                onClick={(e) => { e.stopPropagation(); onSelectDenom(i); }}
                style={{
                  flex: "1 1 calc(50% - 4px)",
                  padding: "8px 0",
                  borderRadius: 10,
                  border: isActive ? "1.5px solid #8906e6" : "1.5px solid #2a1f4a",
                  background: isActive ? "rgba(137,6,230,0.18)" : "rgba(255,255,255,0.04)",
                  color: isActive ? "#fff" : "#a0a0b8",
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  boxShadow: isActive ? "0 0 12px rgba(137,6,230,0.3)" : "none",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: isActive ? "#fff" : "#c0c0d8" }}>{d.label}</span>
                <span style={{ fontSize: 11, color: isActive ? "#00ebd1" : "#666688" }}>{d.tnd}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Price */}
      <div style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>
        {displayPrice}
        {displayPer && <span style={{ fontSize: 14, fontWeight: 400, color: "#a0a0b8" }}> {displayPer}</span>}
      </div>

      {/* Badge */}
      {product.badge && (
        <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(0,235,209,0.1)", border: "1px solid rgba(0,235,209,0.25)", color: "#00ebd1", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 9999 }}>
          {product.badge}
        </div>
      )}

      {/* Features */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {product.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#a0a0b8" }}>
            <span style={{ color: "#00ebd1", fontWeight: 700, fontSize: 14 }}>✓</span>{f}
          </div>
        ))}
      </div>

      {/* Popular badge */}
      {product.popular && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "rgba(137,6,230,0.1)", border: "1px solid #8906e6", color: "#ff00e2", fontSize: 12, fontWeight: 700, padding: "6px 12px", borderRadius: 9999, textAlign: "center" }}>
          ★ Most Popular
        </div>
      )}

      {/* Order button */}
      <button
        onClick={() => openWA(product.name, activeDenom ? activeDenom.label : undefined)}
        style={{ marginTop: "auto", width: "100%", padding: "12px", background: "linear-gradient(135deg, #8906e6, #ff00e2)", color: "#fff", border: "none", borderRadius: 9999, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", transition: "all 0.2s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "none"; }}
      >
        💬 Order on WhatsApp
      </button>
    </div>
  );
}

export default function ProductCatalog() {
  const [activeTab, setActiveTab]     = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [search, setSearch]           = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDenoms, setSelectedDenoms] = useState<Record<number, number>>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const filtered = products.filter((p) =>
    (activeTab === "all" || p.category === activeTab) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const middle = Math.floor(filtered.length / 2);
    setActiveIndex(middle);
    setTimeout(() => {
      if (sliderRef.current) {
        const cardWidth = sliderRef.current.offsetWidth;
        sliderRef.current.scrollLeft = middle * cardWidth;
      }
    }, 50);
  }, [activeTab, search]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.offsetWidth;
    const index = Math.round(sliderRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const getSelectedDenom = (id: number) => selectedDenoms[id] ?? 0;
  const setSelectedDenom = (id: number, i: number) =>
    setSelectedDenoms((prev) => ({ ...prev, [id]: i }));

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
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: "100%", maxWidth: 400, padding: "12px 20px", borderRadius: 9999, border: "1px solid #2a1f4a", background: "#1a1340", color: "#fff", fontSize: 15, outline: "none" }}
          />
        </div>

        {/* Category Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 9999, fontSize: 14, fontWeight: 500, fontFamily: "inherit", cursor: "pointer", transition: "all 0.2s ease", background: isActive ? "linear-gradient(135deg, #8906e6, #ff00e2)" : "#1a1340", color: isActive ? "#fff" : "#a0a0b8", border: "none", boxShadow: isActive ? "0 4px 20px rgba(137,6,230,0.35)" : "none", transform: isActive ? "translateY(-1px)" : "none" }}
                onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = "#fff"; } }}
                onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = "#a0a0b8"; } }}
              >
                <span>{cat.emoji}</span>{cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid — Desktop */}
        <div className="products-grid-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isHovered={hoveredCard === product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              selectedDenom={getSelectedDenom(product.id)}
              onSelectDenom={(i) => setSelectedDenom(product.id, i)}
            />
          ))}
        </div>

        {/* Products Slider — Mobile only */}
        <div className="products-slider-mobile">
          <div style={{ position: "relative" }}>
            <div className="fade-left" />
            <div className="fade-right" />
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", gap: 14, padding: "8px 20px 8px 20px", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" as any }}
            >
              {filtered.map((product) => (
                <div key={product.id} style={{ minWidth: "80vw", maxWidth: "80vw", scrollSnapAlign: "center", flexShrink: 0, boxSizing: "border-box" }}>
                  <ProductCard
                    product={product}
                    isHovered={false}
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                    selectedDenom={getSelectedDenom(product.id)}
                    onSelectDenom={(i) => setSelectedDenom(product.id, i)}
                    style={{ minWidth: "unset", maxWidth: "unset" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {activeTab !== "all" && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 12 }}>
              {filtered.map((_, i) => (
                <div key={i} onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = sliderRef.current.offsetWidth * 0.8 + 14;
                    sliderRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                  }
                }}
                  style={{ width: i === activeIndex ? 24 : 7, height: 7, borderRadius: 9999, background: i === activeIndex ? "linear-gradient(135deg, #8906e6, #ff00e2)" : "rgba(255,255,255,0.2)", transition: "all 0.3s ease", cursor: "pointer", boxShadow: i === activeIndex ? "0 0 10px rgba(255,0,226,0.6)" : "none" }}
                />
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: 8, fontSize: 13, fontWeight: 600, color: "#a0a0b8" }}>
            <span style={{ color: "#fff" }}>{activeIndex + 1}</span>
            <span style={{ margin: "0 4px" }}>/</span>
            <span>{filtered.length}</span>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <p style={{ color: "#a0a0b8", fontSize: 15, marginBottom: 16 }}>Don't see what you're looking for? We have even more products!</p>
          <a href="https://wa.me/21658588633?text=Hi%20PrimeSpace!%20I'm%20looking%20for%20a%20product." target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "14px 32px", borderRadius: 9999, fontSize: 15, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1ebe59"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25d366"; }}
          >💬 Ask us on WhatsApp</a>
        </div>
      </div>

      <style>{`
        .products-slider-mobile { display: none; }

        @media (max-width: 600px) {
          .products-grid-desktop { display: none !important; }
          .products-slider-mobile { display: block; }

          .fade-left {
            position: absolute; left: 0; top: 0; bottom: 0;
            width: 40px; z-index: 2; pointer-events: none;
            background: linear-gradient(to right, #100d28, transparent);
          }
          .fade-right {
            position: absolute; right: 0; top: 0; bottom: 0;
            width: 40px; z-index: 2; pointer-events: none;
            background: linear-gradient(to left, #100d28, transparent);
          }
        }
      `}</style>
    </section>
  );
}