'use client';
import { useRef, useEffect } from 'react';

export default function InternationalCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    const wrapper = card?.parentElement;
    if (!card || !shimmer || !wrapper) return;

    let isHovered = false;
    let animId: number;
    const base = { rx: 8, ry: -18 };
    let current = { rx: base.rx, ry: base.ry };
    let target = { rx: base.rx, ry: base.ry };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.rx = lerp(current.rx, target.rx, 0.15);
      current.ry = lerp(current.ry, target.ry, 0.15);
      if (isHovered) {
        card.style.transform = `rotateX(${current.rx}deg) rotateY(${current.ry}deg)`;
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    const onEnter = () => {
      isHovered = true;
      card.style.animation = 'none';
    };

    const onLeave = () => {
      isHovered = false;
      target = { rx: base.rx, ry: base.ry };
      shimmer.style.background = 'transparent';
      setTimeout(() => {
        if (!isHovered) card.style.animation = 'ps-float 6s ease-in-out infinite';
      }, 400);
    };

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      target.rx = base.rx + ((y - cy) / cy) * -10;
      target.ry = base.ry + ((x - cx) / cx) * 14;
      shimmer.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.12) 0%, rgba(100,180,255,0.04) 40%, transparent 65%)`;
    };

    wrapper.addEventListener('mouseenter', onEnter);
    wrapper.addEventListener('mouseleave', onLeave);
    wrapper.addEventListener('mousemove', onMove as EventListener);

    return () => {
      cancelAnimationFrame(animId);
      wrapper.removeEventListener('mouseenter', onEnter);
      wrapper.removeEventListener('mouseleave', onLeave);
      wrapper.removeEventListener('mousemove', onMove as EventListener);
    };
  }, []);

  const whatsappMsg = encodeURIComponent('Hi PrimeSpace! I want to order an International Visa Card 💳');

  return (
    <section style={{
      width: '100%',
      padding: '96px 24px',
      background: '#0c0c0f',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle ambient glows */}
      <div style={{ position: 'absolute', top: '-100px', left: '15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(30,80,200,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,160,140,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{
        maxWidth: '1080px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '72px',
        flexWrap: 'wrap',
      }}>

        {/* ── LEFT: 3D Card ── */}
        <div style={{ perspective: '1400px', flexShrink: 0 }}>
          <div
            ref={cardRef}
            style={{
              width: '380px',
              height: '240px',
              borderRadius: '20px',
              position: 'relative',
              cursor: 'pointer',
              transform: 'rotateX(8deg) rotateY(-18deg)',
              transition: 'transform 0.12s ease-out',
              transformStyle: 'preserve-3d',
              animation: 'ps-float 6s ease-in-out infinite',
            }}
          >
            {/* Base face */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '20px', overflow: 'hidden',
              background: 'linear-gradient(135deg, #0a0a14 0%, #0d1a2e 30%, #0a1628 55%, #111827 100%)',
              boxShadow: `
                0 0 0 0.5px rgba(255,255,255,0.08),
                0 30px 80px rgba(0,0,0,0.7),
                0 0 60px rgba(0,120,255,0.12),
                inset 0 0 120px rgba(255,255,255,0.015),
                inset 0 1px 0 rgba(255,255,255,0.12)
              `,
            }}>

              {/* Metallic depth */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `
                  radial-gradient(ellipse at 20% 0%, rgba(30,80,160,0.35) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 100%, rgba(10,40,100,0.4) 0%, transparent 50%),
                  radial-gradient(ellipse at 100% 30%, rgba(0,200,180,0.06) 0%, transparent 40%)
                `,
                pointerEvents: 'none',
              }} />

              {/* Carbon-fiber texture */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.018,
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 8px),
                  repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 8px)
                `,
                pointerEvents: 'none',
              }} />

              {/* Permanent diagonal light sweep */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(
                  115deg,
                  transparent 0%,
                  transparent 30%,
                  rgba(255,255,255,0.055) 38%,
                  rgba(255,255,255,0.13) 43%,
                  rgba(200,220,255,0.07) 48%,
                  transparent 56%,
                  transparent 100%
                )`,
                pointerEvents: 'none',
              }} />

              {/* Holographic foil strip at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '72px',
                background: `linear-gradient(
                  90deg,
                  rgba(0,200,180,0.04) 0%, rgba(100,60,255,0.06) 20%,
                  rgba(0,100,255,0.04) 40%, rgba(200,0,180,0.05) 60%,
                  rgba(0,200,120,0.04) 80%, rgba(0,120,255,0.04) 100%
                )`,
                borderTop: '0.5px solid rgba(255,255,255,0.04)',
                animation: 'ps-holo 4s ease-in-out infinite alternate',
                pointerEvents: 'none',
              }} />

              {/* Scanning line */}
              <div style={{
                position: 'absolute', left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,180,255,0.25), rgba(255,255,255,0.15), rgba(0,180,255,0.25), transparent)',
                animation: 'ps-scan 6s ease-in-out infinite',
                zIndex: 15, pointerEvents: 'none',
              }} />

              {/* EMV Chip */}
              <div style={{
                position: 'absolute', top: '28px', left: '28px',
                width: '48px', height: '38px', borderRadius: '7px',
                background: 'linear-gradient(145deg, #c8a84b 0%, #f0d060 25%, #e8c040 50%, #d4a030 75%, #f5d870 100%)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.3)',
                overflow: 'hidden',
              }}>
                {/* Chip lines */}
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.2)', transform: 'translateY(-5px)' }} />
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.2)', transform: 'translateY(5px)' }} />
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(0,0,0,0.18)', transform: 'translateX(-6px)' }} />
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(0,0,0,0.18)', transform: 'translateX(6px)' }} />
                {/* Chip shine */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 50%)', borderRadius: '7px' }} />
              </div>

              {/* Contactless waves */}
              <div style={{ position: 'absolute', top: '34px', right: '28px', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'center' }}>
                {[{ w: 10, h: 6 }, { w: 15, h: 9 }, { w: 20, h: 12 }].map((s, i) => (
                  <div key={i} style={{
                    width: `${s.w}px`, height: `${s.h}px`,
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    borderLeft: 'none',
                    borderRadius: `0 ${s.w}px ${s.w}px 0`,
                  }} />
                ))}
              </div>

              {/* Brand ghost text */}
              <div style={{
                position: 'absolute', top: '28px', left: '50%', transform: 'translateX(-50%)',
                fontSize: '11px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.14)', whiteSpace: 'nowrap',
                fontFamily: 'system-ui, sans-serif',
              }}>PrimeSpace</div>

              {/* Card number */}
              <div style={{
                position: 'absolute', top: '50%', left: '28px', transform: 'translateY(-50%)',
                fontFamily: 'Courier New, monospace', fontSize: '15px',
                letterSpacing: '3px', color: 'rgba(255,255,255,0.35)',
              }}>•••• &nbsp;•••• &nbsp;•••• &nbsp;••••</div>

              {/* Bottom row */}
              <div style={{ position: 'absolute', bottom: '22px', left: '28px', right: '28px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '6px', color: 'rgba(255,255,255,0.25)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Valid Thru</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Courier New, monospace', letterSpacing: '2px', marginBottom: '4px' }}>12/28</div>
                  <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '3px' }}>Card Holder</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Courier New, monospace' }}>Your Name</div>
                </div>

                {/* VISA — white, premium */}
                <div style={{
                  fontFamily: 'Times New Roman, Georgia, serif',
                  fontStyle: 'italic', fontWeight: 900, fontSize: '30px',
                  color: 'rgba(255,255,255,0.92)',
                  textShadow: '0 0 30px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.8)',
                  lineHeight: 1, letterSpacing: '-1px',
                }}>VISA</div>
              </div>

              {/* Mouse shimmer */}
              <div ref={shimmerRef} style={{ position: 'absolute', inset: 0, borderRadius: '20px', zIndex: 20, pointerEvents: 'none', transition: 'background 0.08s ease' }} />

              {/* Edge glow */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '20px',
                boxShadow: 'inset 0 0 0 0.5px rgba(100,160,255,0.12), inset 0 0 20px rgba(0,100,255,0.04)',
                pointerEvents: 'none', zIndex: 18,
              }} />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div style={{ flex: 1, minWidth: '260px', maxWidth: '420px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            border: '0.5px solid rgba(255,255,255,0.12)',
            borderRadius: '99px', padding: '4px 14px', marginBottom: '20px',
          }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>International · Virtual</span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: 'Georgia, serif', fontStyle: 'italic',
            fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700,
            lineHeight: 1.15, color: '#ffffff', marginBottom: '14px',
          }}>
            Your Visa Card,<br />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'normal' }}>worldwide.</span>
          </h2>

          {/* Subtitle */}
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '24px' }}>
            Shop on <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>Amazon, eBay, AliExpress, Shein</strong> and everywhere else — no restrictions, issued in your name.
          </p>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '26px' }}>
            <span style={{ fontSize: '38px', fontWeight: 700, color: '#fff', letterSpacing: '-1px' }}>49 TND</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>/ card</span>
            <span style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px', color: '#22c55e',
              background: 'rgba(34,197,94,0.1)', border: '0.5px solid rgba(34,197,94,0.2)',
              borderRadius: '99px', padding: '3px 10px', marginLeft: '4px',
            }}>One-time</span>
          </div>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {[
              'Works on any website worldwide',
              'Virtual Visa — issued in YOUR name',
              'Secure, private & fully yours',
              'Available for Tunisians, no bank needed',
              'Powered by RedotPay — trusted globally',
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                <div style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '9px', color: 'rgba(255,255,255,0.5)',
                }}>✓</div>
                {f}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/21658872007?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 28px', borderRadius: '99px',
              background: '#ffffff', color: '#0a0a14',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              letterSpacing: '0.2px', transition: 'opacity 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            Order on WhatsApp ↗
          </a>
        </div>
      </div>

      <style>{`
        @keyframes ps-float {
          0%, 100% { transform: rotateX(8deg) rotateY(-18deg) translateY(0px); }
          50%       { transform: rotateX(8deg) rotateY(-18deg) translateY(-14px); }
        }
        @keyframes ps-holo {
          0%   { opacity: 0.6; filter: hue-rotate(0deg); }
          100% { opacity: 1;   filter: hue-rotate(40deg); }
        }
        @keyframes ps-scan {
          0%        { top: 0%;   opacity: 0; }
          5%        { opacity: 1; }
          95%       { opacity: 1; }
          100%      { top: 100%; opacity: 0; }
        }

        @media (max-width: 768px) {
          section > div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
