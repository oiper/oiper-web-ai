'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Orbitron, Space_Mono } from 'next/font/google'
import { useEffect, useRef } from 'react'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space',
})

export default function LandingPageSonnet25() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.nav-retro', {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      const heroTl = gsap.timeline({ delay: 0.3 })
      heroTl
        .from('.scan-line', { scaleX: 0, duration: 0.6, ease: 'power2.inOut' })
        .from(
          '.hero-eyebrow-retro',
          { opacity: 0, y: 16, duration: 0.5 },
          '-=0.1'
        )
        .from(
          '.glitch-title',
          { opacity: 0, y: 40, duration: 0.7, ease: 'power3.out' },
          '-=0.2'
        )
        .from('.hero-sub-retro', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
        .from('.hero-cta-retro', { opacity: 0, y: 16, duration: 0.5 }, '-=0.1')
        .from(
          '.hero-stat-retro',
          { opacity: 0, x: 20, stagger: 0.1, duration: 0.5 },
          '-=0.3'
        )

      gsap.to('.neon-pulse-1', {
        boxShadow: '0 0 30px #FF006E, 0 0 60px #FF006E40',
        duration: 1.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
      gsap.to('.neon-pulse-2', {
        boxShadow: '0 0 30px #00FEFF, 0 0 60px #00FEFF40',
        duration: 2.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      })
      gsap.to('.neon-pulse-3', {
        boxShadow: '0 0 30px #9B00FF, 0 0 60px #9B00FF40',
        duration: 1.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      })

      gsap.to('.grid-floor', {
        backgroundPositionY: '+=100px',
        duration: 4,
        ease: 'none',
        repeat: -1,
      })

      gsap.from('.feature-card-retro', {
        scrollTrigger: { trigger: '.features-retro', start: 'top 78%' },
        y: 60,
        opacity: 0,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power3.out',
      })

      document.querySelectorAll('.retro-bar').forEach((bar) => {
        gsap.from(bar, {
          scrollTrigger: { trigger: '.bench-retro', start: 'top 75%' },
          width: 0,
          duration: 1.4,
          ease: 'power3.inOut',
          stagger: 0.18,
        })
      })

      gsap.from('.priv-panel', {
        scrollTrigger: { trigger: '.priv-retro', start: 'top 78%' },
        y: 50,
        opacity: 0,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.settings-row', {
        scrollTrigger: { trigger: '.settings-retro', start: 'top 78%' },
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      })

      setInterval(() => {
        const el = document.querySelector('.glitch-title')
        if (!el) return
        gsap.to(el, {
          x: gsap.utils.random(-4, 4),
          skewX: gsap.utils.random(-3, 3),
          duration: 0.08,
          ease: 'none',
          onComplete: () => gsap.set(el, { x: 0, skewX: 0 }),
        })
      }, 3000)
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${orbitron.variable} ${spaceMono.variable}`}
      style={{
        fontFamily: 'var(--font-space)',
        background: '#050010',
        color: '#E0D8FF',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }

        :root {
          --void: #050010;
          --deep: #0A001F;
          --surface: #0F0028;
          --border: #2A1060;
          --text: #E0D8FF;
          --muted: #7060AA;
          --pink: #FF006E;
          --cyan: #00FEFF;
          --purple: #9B00FF;
          --orbitron: var(--font-orbitron), 'Orbitron', monospace;
          --space: var(--font-space), 'Space Mono', monospace;
        }

        .nav-retro {
          position: sticky; top: 0; z-index: 100;
          background: rgba(5,0,16,0.92); backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 5%; height: 64px;
        }
        .nav-retro-logo {
          font-family: var(--orbitron); font-size: 1.05rem; font-weight: 800;
          letter-spacing: 0.1em; color: var(--text);
        }
        .logo-pink { color: var(--pink); }
        .nav-retro-links { display: flex; gap: 32px; align-items: center; }
        .nav-retro-link {
          font-family: var(--space); font-size: 0.68rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted); transition: color 0.2s;
        }
        .nav-retro-link:hover { color: var(--cyan); }
        .btn-retro-nav {
          font-family: var(--orbitron); font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: transparent; color: var(--pink); padding: 8px 18px;
          border: 1px solid var(--pink);
          box-shadow: 0 0 12px #FF006E40; transition: box-shadow 0.2s, background 0.2s;
        }
        .btn-retro-nav:hover { background: #FF006E18; box-shadow: 0 0 24px #FF006E80; }

        .hero-retro {
          min-height: 100vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: center;
          padding: 80px 5% 120px;
        }
        .grid-floor {
          position: absolute; bottom: 0; left: 0; right: 0; height: 45%;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 40%, black 100%);
          transform: perspective(600px) rotateX(40deg);
          transform-origin: bottom center;
        }
        .hero-bg-glow-pink {
          position: absolute; top: 10%; right: 5%;
          width: 500px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, #FF006E15 0%, transparent 70%);
          filter: blur(40px); pointer-events: none;
        }
        .hero-bg-glow-cyan {
          position: absolute; top: 30%; left: -5%;
          width: 400px; height: 350px; border-radius: 50%;
          background: radial-gradient(ellipse, #00FEFF12 0%, transparent 70%);
          filter: blur(40px); pointer-events: none;
        }
        .hero-bg-glow-purple {
          position: absolute; bottom: 20%; right: 20%;
          width: 300px; height: 280px; border-radius: 50%;
          background: radial-gradient(ellipse, #9B00FF18 0%, transparent 70%);
          filter: blur(30px); pointer-events: none;
        }

        .scan-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          margin-bottom: 36px; position: relative; z-index: 1;
          box-shadow: 0 0 8px var(--cyan);
        }
        .hero-content-retro { position: relative; z-index: 2; max-width: 800px; }
        .hero-eyebrow-retro {
          font-family: var(--space); font-size: 0.65rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--cyan); margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .eyebrow-bracket { color: var(--purple); }

        .glitch-title {
          font-family: var(--orbitron);
          font-size: clamp(40px, 7vw, 96px); font-weight: 900;
          letter-spacing: 0.04em; line-height: 1.05;
          color: var(--text); margin-bottom: 24px;
          text-shadow: 2px 0 var(--pink), -2px 0 var(--cyan);
        }
        .title-pink { color: var(--pink); text-shadow: 0 0 20px var(--pink); }
        .title-cyan { color: var(--cyan); text-shadow: 0 0 20px var(--cyan); }

        .hero-sub-retro {
          font-family: var(--space); font-size: 0.85rem; line-height: 1.8;
          color: var(--muted); max-width: 540px; margin-bottom: 40px;
        }
        .hero-cta-retro { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 60px; }
        .btn-retro-pink {
          font-family: var(--orbitron); font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--pink); color: white; padding: 14px 28px;
          box-shadow: 0 0 20px #FF006E60; transition: box-shadow 0.2s, transform 0.15s;
        }
        .btn-retro-pink:hover { box-shadow: 0 0 40px #FF006E; transform: translateY(-2px); }
        .btn-retro-outline-cyan {
          font-family: var(--orbitron); font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: transparent; color: var(--cyan); padding: 13px 28px;
          border: 1px solid var(--cyan); box-shadow: 0 0 12px #00FEFF30;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .btn-retro-outline-cyan:hover { background: #00FEFF15; box-shadow: 0 0 30px #00FEFF60; }

        .hero-stats-retro {
          display: flex; gap: 32px; flex-wrap: wrap;
          border-top: 1px solid var(--border); padding-top: 32px;
        }
        .hero-stat-retro {
          min-width: 120px;
          padding-right: 32px; border-right: 1px solid var(--border);
        }
        .hero-stat-retro:last-child { border-right: none; }
        .retro-stat-num {
          font-family: var(--orbitron); font-size: clamp(20px, 3vw, 32px);
          font-weight: 900; line-height: 1; margin-bottom: 6px;
        }
        .retro-stat-label {
          font-family: var(--space); font-size: 0.6rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }

        .neon-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--purple), var(--pink), var(--cyan), transparent);
          box-shadow: 0 0 10px var(--purple);
        }

        .features-retro {
          padding: 100px 5%; background: var(--deep);
          position: relative; overflow: hidden;
        }
        .features-retro-inner { max-width: 1440px; margin: 0 auto; position: relative; z-index: 1; }
        .section-eyebrow-retro {
          font-family: var(--space); font-size: 0.62rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--cyan); margin-bottom: 16px; display: block;
        }
        .section-h2-retro {
          font-family: var(--orbitron); font-size: clamp(28px, 4.5vw, 56px);
          font-weight: 900; letter-spacing: 0.06em; color: var(--text);
          margin-bottom: 56px; line-height: 1.1;
        }
        .features-retro-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;
        }
        .feature-card-retro {
          background: var(--surface); border: 1px solid var(--border);
          padding: 32px 28px; position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.25s;
        }
        .feature-card-retro::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--pink), transparent);
          transform: scaleX(0); transition: transform 0.4s;
        }
        .feature-card-retro:hover { border-color: var(--purple); transform: translateY(-4px); }
        .feature-card-retro:hover::before { transform: scaleX(1); }
        .feat-retro-icon {
          font-family: var(--orbitron); font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--pink);
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .feat-retro-icon::before { content: '//'; color: var(--purple); }
        .feat-retro-title {
          font-family: var(--orbitron); font-size: 0.88rem; font-weight: 700;
          letter-spacing: 0.08em; color: var(--text); margin-bottom: 12px;
        }
        .feat-retro-body {
          font-family: var(--space); font-size: 0.78rem; line-height: 1.75; color: var(--muted);
        }

        .bench-retro {
          padding: 100px 5%; background: var(--void); position: relative;
        }
        .bench-retro-inner { max-width: 1000px; margin: 0 auto; }
        .bench-retro-note {
          font-family: var(--space); font-size: 0.68rem; letter-spacing: 0.08em;
          color: var(--muted); margin-bottom: 48px; font-style: italic;
        }
        .bench-retro-rows { display: flex; flex-direction: column; gap: 0; }
        .bench-retro-row {
          padding: 20px 0; border-bottom: 1px solid var(--border);
          display: grid; grid-template-columns: 220px 1fr 80px; gap: 20px; align-items: center;
        }
        .bench-retro-name {
          font-family: var(--space); font-size: 0.75rem;
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .bench-retro-name.best { color: var(--text); font-weight: 700; }
        .bench-retro-name.rest { color: var(--muted); }
        .retro-best-badge {
          font-family: var(--orbitron); font-size: 0.48rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          background: var(--pink); color: white; padding: 2px 7px;
          box-shadow: 0 0 8px var(--pink);
        }
        .retro-track { height: 4px; background: var(--border); position: relative; overflow: hidden; }
        .retro-bar { height: 100%; position: absolute; left: 0; top: 0; }
        .retro-bar-best {
          background: linear-gradient(90deg, var(--pink), var(--purple));
          box-shadow: 0 0 8px var(--pink);
        }
        .retro-bar-rest { background: var(--border); }
        .bench-retro-time {
          font-family: var(--orbitron); font-size: 1rem; font-weight: 700; text-align: right;
        }
        .bench-retro-time.best { color: var(--pink); text-shadow: 0 0 10px var(--pink); }
        .bench-retro-time.rest { color: var(--border); }

        .settings-retro {
          background: var(--deep); padding: 100px 5%;
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
        }
        .settings-retro-inner { max-width: 1440px; margin: 0 auto; }
        .settings-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .settings-left {}
        .settings-right {
          background: var(--surface); border: 1px solid var(--border); padding: 32px;
          font-family: var(--space); font-size: 0.8rem;
        }
        .settings-terminal-bar {
          display: flex; gap: 6px; margin-bottom: 24px;
        }
        .terminal-dot {
          width: 10px; height: 10px; border-radius: 50%;
        }
        .settings-row {
          padding: 10px 0; border-bottom: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
        }
        .settings-row:last-child { border-bottom: none; }
        .settings-key { color: var(--cyan); }
        .settings-val { color: var(--pink); }
        .settings-val.active {
          color: #00FF88;
          text-shadow: 0 0 8px #00FF88;
        }
        .settings-desc {
          font-family: var(--space); font-size: 0.7rem; color: var(--muted); margin-top: 4px;
        }

        .priv-retro {
          padding: 100px 5%; background: var(--void);
        }
        .priv-retro-inner { max-width: 1440px; margin: 0 auto; }
        .priv-retro-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;
          margin-top: 56px;
        }
        .priv-panel {
          background: var(--surface); border: 1px solid var(--border);
          padding: 36px 28px; position: relative; overflow: hidden;
          transition: border-color 0.3s;
        }
        .priv-panel:hover { border-color: var(--cyan); }
        .priv-panel-accent {
          position: absolute; top: 0; left: 0; width: 3px; height: 100%;
        }
        .priv-panel-num {
          font-family: var(--orbitron); font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.12em; color: var(--purple); margin-bottom: 14px;
        }
        .priv-panel-title {
          font-family: var(--orbitron); font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.08em; color: var(--text); margin-bottom: 12px;
        }
        .priv-panel-body {
          font-family: var(--space); font-size: 0.78rem; line-height: 1.75; color: var(--muted);
        }

        .cta-retro {
          padding: 120px 5%; text-align: center; position: relative; overflow: hidden;
          background: linear-gradient(180deg, var(--void) 0%, #0F0030 100%);
        }
        .cta-retro-grid-bg {
          position: absolute; inset: 0;
          background-image: linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.4; pointer-events: none;
        }
        .cta-retro-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, #9B00FF20, transparent 70%);
          filter: blur(40px); pointer-events: none;
        }
        .cta-retro-inner { position: relative; z-index: 1; }
        .cta-retro-eyebrow {
          font-family: var(--space); font-size: 0.65rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--purple); margin-bottom: 24px; display: block;
        }
        .cta-retro-h2 {
          font-family: var(--orbitron);
          font-size: clamp(36px, 6.5vw, 80px); font-weight: 900;
          letter-spacing: 0.06em; line-height: 1.05;
          color: var(--text); margin-bottom: 20px;
          text-shadow: 0 0 40px #9B00FF60;
        }
        .cta-retro-sub {
          font-family: var(--space); font-size: 0.85rem; line-height: 1.8;
          color: var(--muted); max-width: 520px; margin: 0 auto 48px;
        }
        .cta-retro-actions { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .btn-retro-cta-pink {
          font-family: var(--orbitron); font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--pink); color: white; padding: 16px 36px;
          box-shadow: 0 0 24px #FF006E60, inset 0 0 0 1px #FF006E;
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .btn-retro-cta-pink:hover { box-shadow: 0 0 48px #FF006E, inset 0 0 0 1px #FF006E; transform: translateY(-3px); }
        .btn-retro-cta-cyan {
          font-family: var(--orbitron); font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: transparent; color: var(--cyan); padding: 15px 36px;
          border: 1px solid var(--cyan); box-shadow: 0 0 12px #00FEFF30;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .btn-retro-cta-cyan:hover { background: #00FEFF10; box-shadow: 0 0 30px #00FEFF60; }

        .footer-retro {
          background: var(--deep); border-top: 1px solid var(--border);
          padding: 28px 5%; display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .footer-retro-logo {
          font-family: var(--orbitron); font-size: 0.95rem; font-weight: 800;
          letter-spacing: 0.1em; color: var(--text);
        }
        .footer-retro-copy {
          font-family: var(--space); font-size: 0.65rem; color: var(--muted);
          letter-spacing: 0.06em;
        }

        @media (max-width: 900px) {
          .nav-retro-links { gap: 18px; }
          .hero-stats-retro { gap: 20px; }
          .hero-stat-retro { padding-right: 20px; }
          .bench-retro-row { grid-template-columns: 140px 1fr 64px; gap: 12px; }
          .settings-layout { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav-retro">
        <div className="nav-retro-logo">
          <span className="logo-pink">Oi</span>Per
        </div>
        <div className="nav-retro-links">
          <a href="#features" className="nav-retro-link">
            Features
          </a>
          <a href="#performance" className="nav-retro-link">
            Performance
          </a>
          <a href="#settings" className="nav-retro-link">
            Config
          </a>
          <a href="#privacy" className="nav-retro-link">
            Privacy
          </a>
          <a href="#download" className="btn-retro-nav">
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-retro">
        <div className="grid-floor" />
        <div className="hero-bg-glow-pink" />
        <div className="hero-bg-glow-cyan" />
        <div className="hero-bg-glow-purple" />

        <div className="scan-line" />

        <div className="hero-content-retro">
          <div className="hero-eyebrow-retro">
            <span className="eyebrow-bracket">[</span>
            sys.voice_to_text v2.0 — privacy_mode: ON
            <span className="eyebrow-bracket">]</span>
          </div>
          <h1 className="glitch-title">
            VOICE
            <br />
            <span className="title-pink">TO TEXT.</span>
            <br />
            <span className="title-cyan">LOCALLY.</span>
          </h1>
          <p className="hero-sub-retro">
            Hold a hotkey. Speak. Release. OiPer transcribes with native-code
            speed and injects text directly into your active window — zero
            cloud, zero latency, total privacy.
          </p>
          <div className="hero-cta-retro">
            <a href="#download" className="btn-retro-pink">
              Initialize Download
            </a>
            <a href="#performance" className="btn-retro-outline-cyan">
              View Benchmarks
            </a>
          </div>
          <div className="hero-stats-retro">
            {[
              { n: '1.5s', label: 'Transcription Speed', color: 'var(--pink)' },
              { n: '100%', label: 'Local Processing', color: 'var(--cyan)' },
              { n: '0ms', label: 'Cloud Latency', color: 'var(--purple)' },
              { n: '∞', label: 'Privacy Level', color: '#00FF88' },
            ].map((s) => (
              <div key={s.label} className="hero-stat-retro">
                <div
                  className="retro-stat-num"
                  style={{ color: s.color, textShadow: `0 0 16px ${s.color}` }}
                >
                  {s.n}
                </div>
                <div className="retro-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* Features */}
      <section id="features" className="features-retro">
        <div className="features-retro-inner">
          <span className="section-eyebrow-retro">// system.features</span>
          <h2 className="section-h2-retro">
            Engineered for
            <br />
            <span
              style={{
                color: 'var(--pink)',
                textShadow: '0 0 20px var(--pink)',
              }}
            >
              Maximum Velocity
            </span>
          </h2>
          <div className="features-retro-grid">
            {[
              {
                tag: 'HOTKEY',
                title: 'Global Activation',
                body: 'Any key combo, any application. Hold to record, release to transcribe. Zero switching required.',
              },
              {
                tag: 'INJECT',
                title: 'Instant Text Injection',
                body: 'Transcribed text is placed directly into your focused window. No clipboard gymnastics.',
              },
              {
                tag: 'LOCAL',
                title: 'On-Device Models',
                body: 'Whisper runs entirely on your hardware. Multiple model sizes from ultra-fast to ultra-accurate.',
              },
              {
                tag: 'GPU',
                title: 'GPU Acceleration',
                body: 'Auto-detects CUDA and hardware acceleration. Falls back gracefully to CPU mode.',
              },
              {
                tag: 'LLM',
                title: 'AI Text Cleanup',
                body: 'Optional LLM-powered text polishing. Use local models or your own cloud API key.',
              },
              {
                tag: 'CONFIG',
                title: 'Full Control',
                body: 'Backend, model size, language, cleanup mode. Every parameter is configurable.',
              },
            ].map((f) => (
              <div key={f.tag} className="feature-card-retro">
                <div className="feat-retro-icon">{f.tag}</div>
                <div className="feat-retro-title">{f.title}</div>
                <p className="feat-retro-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* Benchmark */}
      <section id="performance" className="bench-retro">
        <div className="bench-retro-inner">
          <span className="section-eyebrow-retro">
            // benchmark.run(30s_english_audio)
          </span>
          <h2 className="section-h2-retro">
            Performance
            <br />
            <span
              style={{
                color: 'var(--cyan)',
                textShadow: '0 0 20px var(--cyan)',
              }}
            >
              Benchmark
            </span>
          </h2>
          <p className="bench-retro-note">
            All tests: 30 seconds of English audio · time measured to
            transcription complete
          </p>
          <div className="bench-retro-rows">
            {[
              { name: 'OiPer Desktop', time: '1.5s', pct: 23.2, best: true },
              { name: 'Lemonfox API', time: '3.27s', pct: 50.6, best: false },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                pct: 55.0,
                best: false,
              },
              {
                name: 'OpenAI Whisper API',
                time: '6.46s',
                pct: 100,
                best: false,
              },
            ].map((b) => (
              <div key={b.name} className="bench-retro-row">
                <div className={`bench-retro-name ${b.best ? 'best' : 'rest'}`}>
                  {b.best && <span className="retro-best-badge">FASTEST</span>}
                  {b.name}
                </div>
                <div className="retro-track">
                  <div
                    className={`retro-bar ${b.best ? 'retro-bar-best' : 'retro-bar-rest'}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <div className={`bench-retro-time ${b.best ? 'best' : 'rest'}`}>
                  {b.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings */}
      <section id="settings" className="settings-retro">
        <div className="settings-retro-inner">
          <div className="settings-layout">
            <div className="settings-left">
              <span className="section-eyebrow-retro">// system.config</span>
              <h2 className="section-h2-retro">
                Total
                <br />
                <span
                  style={{
                    color: 'var(--purple)',
                    textShadow: '0 0 20px var(--purple)',
                  }}
                >
                  Control
                </span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--space)',
                  fontSize: '0.85rem',
                  lineHeight: 1.78,
                  color: 'var(--muted)',
                  maxWidth: '420px',
                }}
              >
                Every parameter is exposed. Choose your model, backend,
                language, and optimization mode. OiPer adapts to your hardware
                and workflow.
              </p>
              <div
                style={{
                  marginTop: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {[
                  {
                    icon: '◆',
                    color: 'var(--pink)',
                    label: 'Backend: Auto / CPU / GPU',
                  },
                  {
                    icon: '◆',
                    color: 'var(--cyan)',
                    label: 'Model: Tiny / Base / Large',
                  },
                  {
                    icon: '◆',
                    color: 'var(--purple)',
                    label: 'Cleanup: Local LLM / API / None',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: item.color,
                        textShadow: `0 0 8px ${item.color}`,
                        fontSize: '0.7rem',
                      }}
                    >
                      {item.icon}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--space)',
                        fontSize: '0.78rem',
                        color: 'var(--muted)',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="settings-right">
              <div className="settings-terminal-bar">
                <div
                  className="terminal-dot"
                  style={{ background: '#FF006E' }}
                />
                <div
                  className="terminal-dot"
                  style={{ background: '#FFB800' }}
                />
                <div
                  className="terminal-dot"
                  style={{ background: '#00FF88' }}
                />
                <span
                  style={{
                    marginLeft: '8px',
                    color: 'var(--muted)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  oiper.config
                </span>
              </div>
              {[
                { key: 'hotkey', val: 'Right Alt', status: 'active' },
                {
                  key: 'backend',
                  val: 'auto (GPU detected)',
                  status: 'active',
                },
                { key: 'model', val: 'whisper-base.en', status: '' },
                { key: 'language', val: 'en', status: '' },
                { key: 'cleanup', val: 'local_llm', status: '' },
                { key: 'llm_model', val: 'gemma-3-4b', status: '' },
                { key: 'cloud_api', val: 'disabled', status: '' },
                { key: 'audio_logs', val: 'on_device_only', status: 'active' },
              ].map((row) => (
                <div key={row.key} className="settings-row">
                  <span className="settings-key">{row.key}</span>
                  <span className={`settings-val ${row.status}`}>
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="priv-retro">
        <div className="priv-retro-inner">
          <span className="section-eyebrow-retro">// privacy.audit()</span>
          <h2 className="section-h2-retro">
            Zero Data.
            <br />
            <span style={{ color: '#00FF88', textShadow: '0 0 20px #00FF88' }}>
              Zero Leaks.
            </span>
          </h2>
          <div className="priv-retro-grid">
            {[
              {
                n: '01',
                accent: 'var(--pink)',
                title: 'Local Transcription',
                body: 'All speech-to-text processing runs on-device via local Whisper models. No network calls, no exceptions.',
              },
              {
                n: '02',
                accent: 'var(--cyan)',
                title: 'On-Device Storage',
                body: 'Audio recordings and transcription logs are stored only on your machine. We have zero access.',
              },
              {
                n: '03',
                accent: 'var(--purple)',
                title: 'Optional Cloud Services',
                body: 'API-based features require your own key and explicit activation. Disabled by default, always.',
              },
              {
                n: '04',
                accent: '#00FF88',
                title: 'Zero Telemetry',
                body: 'No analytics, no crash reporting, no usage monitoring. Your workflow is entirely private.',
              },
            ].map((item) => (
              <div key={item.n} className="priv-panel">
                <div
                  className="priv-panel-accent"
                  style={{
                    background: item.accent,
                    boxShadow: `0 0 8px ${item.accent}`,
                  }}
                />
                <div className="priv-panel-num" style={{ color: item.accent }}>
                  {item.n}/04
                </div>
                <div className="priv-panel-title">{item.title}</div>
                <p className="priv-panel-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="cta-retro">
        <div className="cta-retro-grid-bg" />
        <div className="cta-retro-glow" />
        <div className="cta-retro-inner">
          <span className="cta-retro-eyebrow">// ready_to_initialize</span>
          <h2 className="cta-retro-h2">
            SPEAK.
            <br />
            TRANSCRIBE.
            <br />
            <span
              style={{
                color: 'var(--pink)',
                textShadow: '0 0 30px var(--pink)',
              }}
            >
              DOMINATE.
            </span>
          </h2>
          <p className="cta-retro-sub">
            Download OiPer and experience voice transcription at native-code
            speed — private by design, powerful by default.
          </p>
          <div className="cta-retro-actions">
            <a href="#" className="btn-retro-cta-pink">
              Download Free
            </a>
            <a href="#" className="btn-retro-cta-cyan">
              View Docs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-retro">
        <div className="footer-retro-logo">
          <span
            style={{ color: 'var(--pink)', textShadow: '0 0 10px var(--pink)' }}
          >
            Oi
          </span>
          Per Desktop
        </div>
        <span className="footer-retro-copy">
          © 2026 — Privacy-First Voice Transcription
        </span>
      </footer>
    </div>
  )
}
