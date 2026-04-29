"use client";
// src/components/LiveActivity.tsx

import { useEffect, useState } from "react";

const names = [
  { name: "Mohamed", city: "Tunis" },
  { name: "Yasmine", city: "Sfax" },
  { name: "Karim", city: "Sousse" },
  { name: "Amira", city: "Bizerte" },
  { name: "Ahmed", city: "Nabeul" },
  { name: "Fatma", city: "Monastir" },
  { name: "Youssef", city: "Gabès" },
  { name: "Sana", city: "Ariana" },
  { name: "Omar", city: "Ben Arous" },
  { name: "Rania", city: "Manouba" },
  { name: "Amine", city: "Tunis" },
  { name: "Nour", city: "Sousse" },
  { name: "Hamza", city: "Sfax" },
  { name: "Lina", city: "Tunis" },
  { name: "Bilel", city: "Bizerte" },
  { name: "Malek", city: "Nabeul" },
  { name: "Chaima", city: "Monastir" },
  { name: "Zied", city: "Tunis" },
  { name: "Ines", city: "Ariana" },
  { name: "Fares", city: "Sfax" },
  { name: "Mariem", city: "Sousse" },
  { name: "Wassim", city: "Tunis" },
  { name: "Salma", city: "Gabès" },
  { name: "Aziz", city: "Ben Arous" },
  { name: "Hajer", city: "Bizerte" },
  { name: "Oussama", city: "Tunis" },
  { name: "Dorra", city: "Nabeul" },
  { name: "Skander", city: "Sfax" },
  { name: "Rim", city: "Monastir" },
  { name: "Tarek", city: "Tunis" },
  { name: "Wafa", city: "Sousse" },
  { name: "Badr", city: "Ariana" },
  { name: "Sabrine", city: "Tunis" },
  { name: "Mehdi", city: "Sfax" },
  { name: "Asma", city: "Bizerte" },
  { name: "Chaker", city: "Nabeul" },
  { name: "Hana", city: "Tunis" },
  { name: "Riadh", city: "Monastir" },
  { name: "Cyrine", city: "Sousse" },
  { name: "Walid", city: "Gabès" },
];

const products = [
  { name: "Netflix", emoji: "🎬" },
  { name: "Spotify Premium", emoji: "🎵" },
  { name: "ChatGPT Plus", emoji: "🤖" },
  { name: "Disney+", emoji: "🎬" },
  { name: "Adobe Creative", emoji: "💻" },
  { name: "YouTube Premium", emoji: "▶️" },
  { name: "Canva Pro", emoji: "🎨" },
  { name: "Steam Wallet", emoji: "🎮" },
  { name: "Prime Video", emoji: "🎬" },
  { name: "CapCut Pro", emoji: "✂️" },
];

const times = ["just now", "1 min ago", "2 min ago", "3 min ago", "5 min ago", "7 min ago"];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function LiveActivity() {
  const [visible, setVisible] = useState(false);
  const [sliding, setSliding] = useState(false);
  const [current, setCurrent] = useState({ name: "", city: "", product: "", emoji: "", time: "" });

  const showNext = () => {
    const person = getRandom(names);
    const product = getRandom(products);
    const time = getRandom(times);
    setCurrent({ name: person.name, city: person.city, product: product.name, emoji: product.emoji, time });
    setSliding(true);
    setVisible(true);
    setTimeout(() => setSliding(false), 500);
    setTimeout(() => {
      setSliding(true);
      setTimeout(() => setVisible(false), 500);
    }, 5000);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const scheduleNext = (delay: number) => {
      timeout = setTimeout(() => {
        showNext();
        scheduleNext(Math.random() * 15000 + 30000);
      }, delay);
    };

    scheduleNext(999999999);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 9999,
        transform: sliding ? "translateY(100px)" : "translateY(0)",
        opacity: sliding ? 0 : 1,
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        maxWidth: 320,
        width: "calc(100vw - 48px)",
      }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(26,19,64,0.98), rgba(34,26,82,0.98))",
          border: "1px solid rgba(137,6,230,0.4)",
          borderRadius: 18,
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(137,6,230,0.1)",
          backdropFilter: "blur(20px)",
        }}>
          {/* Avatar */}
          <div style={{
            width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #8906e6, #ff00e2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, color: "#fff",
            boxShadow: "0 4px 16px rgba(137,6,230,0.4)",
          }}>
            {current.name[0]}
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{current.name}</span>
              <span style={{ fontSize: 11, color: "#a0a0b8" }}>· {current.city}</span>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#00ebd1", display: "inline-block", flexShrink: 0,
                boxShadow: "0 0 8px rgba(0,235,209,0.8)",
                animation: "livePulse 1.5s ease-in-out infinite",
              }} />
            </div>
            <div style={{ fontSize: 12, color: "#a0a0b8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {current.emoji} just ordered <span style={{ color: "#ff00e2", fontWeight: 600 }}>{current.product}</span>
            </div>
            <div style={{ fontSize: 11, color: "#6a6a8a", marginTop: 3 }}>{current.time}</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes livePulse {
          0%, 100% { box-shadow: 0 0 6px rgba(0,235,209,0.8); }
          50% { box-shadow: 0 0 14px rgba(0,235,209,1); }
        }
      `}</style>
    </>
  );
}