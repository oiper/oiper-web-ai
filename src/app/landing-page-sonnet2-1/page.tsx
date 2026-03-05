'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Big_Shoulders, IBM_Plex_Mono } from 'next/font/google'
import { useEffect, useRef } from 'react'

const display = Big_Shoulders({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
})

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, pct: 23.2, best: true },
  { name: 'Lemonfox API', time: 3.27, pct: 50.6, best: false },
  { name: 'Python Faster-Whisper', time: 3.55, pct: 55.0, best: false },
  { name: 'OpenAI Whisper API', time: 6.46, pct: 100, best: false },
]

export default function LandingPageSonnet21() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        opacity: 0,
        y: -24,
        stagger: 0.07,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.hero-char', {
        y: '110%',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2,
      })

      gsap.from('.hero-meta', {
        opacity: 0,
        y: 36,
        duration: 0.9,
        delay: 0.9,
        ease: 'power3.out',
      })

      gsap.from('.stat-item', {
        opacity: 0,
        x: 40,
        stagger: 0.12,
        duration: 0.7,
        delay: 0.6,
        ease: 'power3.out',
      })

      gsap.from('.feat-block', {
        scrollTrigger: {
          trigger: '.feat-grid',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
        x: -80,
        opacity: 0,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power3.out',
      })

      document.querySelectorAll('.bar-inner').forEach((bar) => {
        gsap.from(bar, {
          scrollTrigger: {
            trigger: '.bench-rows',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          width: 0,
          duration: 1.3,
          ease: 'power3.inOut',
          stagger: 0.18,
        })
      })

      gsap.from('.priv-row', {
        scrollTrigger: {
          trigger: '.priv-list',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.cta-heading', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${display.variable} ${mono.variable}`}
      style={{
        fontFamily: 'var(--font-display)',
        background: '#F2EDE3',
        color: '#111111',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }

        .nav-wrap {
          position: sticky; top: 0; z-index: 100;
          background: #F2EDE3; border-bottom: 3px solid #111;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 5%; height: 64px;
        }
        .nav-logo { font-family: var(--font-display); font-size: 1.7rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.02em; }
        .nav-links { display: flex; gap: 36px; align-items: center; }
        .nav-link {
          font-family: var(--font-mono); font-size: 0.68rem;
          letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500;
          transition: color 0.15s;
        }
        .nav-link:hover { color: #FF2D00; }
        .btn-nav {
          font-family: var(--font-mono); font-size: 0.68rem;
          letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700;
          background: #111; color: #F2EDE3; padding: 9px 22px;
          transition: background 0.15s;
        }
        .btn-nav:hover { background: #FF2D00; }

        .hero-section {
          padding: 80px 5% 80px; border-bottom: 3px solid #111;
          position: relative; overflow: hidden;
        }
        .hero-top-bar { position: absolute; top: 0; left: 0; width: 38%; height: 8px; background: #FF2D00; }
        .hero-layout {
          display: grid; grid-template-columns: 1fr 280px;
          gap: 60px; align-items: end; max-width: 1440px; margin: 0 auto;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(72px, 10.5vw, 152px);
          font-weight: 900; line-height: 0.86;
          text-transform: uppercase; letter-spacing: -0.02em;
        }
        .hero-line-clip { overflow: hidden; display: block; }
        .hero-char { display: block; }
        .hero-meta {
          font-family: var(--font-mono); font-size: 0.88rem;
          line-height: 1.78; color: #444; max-width: 440px; margin-top: 36px;
        }
        .hero-actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
        .btn-prim {
          font-family: var(--font-mono); font-size: 0.68rem;
          letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700;
          background: #FF2D00; color: #F2EDE3; padding: 14px 32px;
          display: inline-block; transition: transform 0.12s, background 0.15s;
        }
        .btn-prim:hover { transform: translate(-3px, -3px); background: #CC2400; }
        .btn-sec {
          font-family: var(--font-mono); font-size: 0.68rem;
          letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700;
          background: transparent; color: #111; padding: 13px 32px;
          border: 2px solid #111; display: inline-block;
          transition: background 0.15s, color 0.15s;
        }
        .btn-sec:hover { background: #111; color: #F2EDE3; }

        .stats-col { display: flex; flex-direction: column; gap: 24px; }
        .stat-item { border-top: 3px solid #111; padding-top: 14px; }
        .stat-num {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 50px); font-weight: 900;
          color: #FF2D00; letter-spacing: -0.02em; line-height: 1;
        }
        .stat-label {
          font-family: var(--font-mono); font-size: 0.58rem;
          letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin-top: 4px;
        }

        .ticker-band {
          background: #111; color: #F2EDE3;
          padding: 10px 0; overflow: hidden; white-space: nowrap;
        }
        .ticker-inner { display: inline-flex; animation: tickScroll 28s linear infinite; }
        .ticker-chunk {
          display: flex; gap: 40px; align-items: center; padding: 0 20px;
          font-family: var(--font-mono); font-size: 0.62rem;
          letter-spacing: 0.14em; text-transform: uppercase;
        }
        .ticker-dot { width: 6px; height: 6px; background: #FF2D00; flex-shrink: 0; }
        @keyframes tickScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .features-wrap { max-width: 1440px; margin: 0 auto; padding: 96px 5%; }
        .section-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          border-bottom: 3px solid #111; padding-bottom: 20px; margin-bottom: 60px;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 6vw, 80px); font-weight: 900;
          text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.88;
        }
        .section-tag {
          font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.14em;
          text-transform: uppercase; background: #111; color: #F2EDE3;
          padding: 4px 10px; align-self: center;
        }

        .feat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 44px; }
        .feat-block {
          border: 2.5px solid #111; padding: 36px 32px;
          position: relative; transition: transform 0.2s; overflow: hidden;
        }
        .feat-block::after {
          content: ''; position: absolute;
          top: 8px; left: 8px; right: -8px; bottom: -8px;
          border: 2.5px solid #FF2D00; z-index: -1; pointer-events: none;
        }
        .feat-block:hover { transform: translate(-4px, -4px); }
        .feat-ghost-num {
          font-family: var(--font-display);
          position: absolute; top: 4px; right: 14px;
          font-size: 5.5rem; font-weight: 900;
          color: #11111110; line-height: 1; user-select: none; pointer-events: none;
        }
        .feat-tag {
          font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.15em;
          text-transform: uppercase; background: #FF2D00; color: #F2EDE3;
          padding: 3px 8px; display: inline-block; margin-bottom: 14px;
        }
        .feat-h3 {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.8vw, 34px); font-weight: 900;
          text-transform: uppercase; letter-spacing: -0.01em;
          margin-bottom: 12px; position: relative; z-index: 1;
        }
        .feat-body {
          font-family: var(--font-mono); font-size: 0.82rem;
          line-height: 1.72; color: #444; position: relative; z-index: 1;
        }

        .red-band { height: 8px; background: #FF2D00; }

        .bench-section { background: #111; color: #F2EDE3; padding: 96px 5%; }
        .bench-inner { max-width: 1440px; margin: 0 auto; }
        .bench-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 56px; padding-bottom: 20px; border-bottom: 1px solid #ffffff18;
        }
        .bench-note {
          font-family: var(--font-mono); font-size: 0.58rem;
          letter-spacing: 0.14em; text-transform: uppercase; color: #777; align-self: center;
        }
        .bench-row {
          display: grid; grid-template-columns: 220px 1fr 84px;
          gap: 20px; align-items: center;
          padding: 16px 0; border-bottom: 1px solid #ffffff10;
        }
        .bench-name {
          font-family: var(--font-mono); font-size: 0.8rem;
          display: flex; align-items: center; gap: 10px;
        }
        .bench-badge {
          font-family: var(--font-mono); font-size: 0.52rem;
          letter-spacing: 0.12em; text-transform: uppercase;
          background: #FF2D00; color: #F2EDE3; padding: 2px 6px; flex-shrink: 0;
        }
        .bench-track { height: 18px; background: #ffffff10; position: relative; overflow: hidden; }
        .bar-inner { height: 100%; position: absolute; left: 0; top: 0; }
        .bar-best { background: #FF2D00; }
        .bar-rest { background: #444; }
        .bench-time {
          font-family: var(--font-mono); font-size: 1.05rem; font-weight: 700; text-align: right;
        }
        .bench-time-best { color: #FF2D00; }
        .bench-time-rest { color: #666; }

        .priv-section { max-width: 1440px; margin: 0 auto; padding: 96px 5%; }
        .priv-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .priv-tag {
          font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.14em;
          text-transform: uppercase; background: #111; color: #F2EDE3;
          padding: 4px 10px; display: inline-block; margin-bottom: 24px;
        }
        .priv-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 5.5vw, 70px); font-weight: 900;
          text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.88; margin-bottom: 32px;
        }
        .priv-intro {
          font-family: var(--font-mono); font-size: 0.88rem; line-height: 1.72; color: #444;
        }
        .priv-list { margin: 0; }
        .priv-row { padding: 22px 0; border-bottom: 2px solid #11111115; }
        .priv-row-head { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
        .priv-dot { width: 8px; height: 8px; background: #FF2D00; flex-shrink: 0; }
        .priv-name {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.02em;
        }
        .priv-body {
          font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.65; color: #555; padding-left: 20px;
        }

        .cta-section { background: #FF2D00; padding: 100px 5%; text-align: center; }
        .cta-heading {
          font-family: var(--font-display);
          font-size: clamp(52px, 9vw, 116px); font-weight: 900;
          text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.86;
          color: #F2EDE3; margin-bottom: 48px;
        }
        .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .btn-cta-solid {
          font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.15em;
          text-transform: uppercase; font-weight: 700;
          background: #F2EDE3; color: #FF2D00; padding: 14px 36px;
          display: inline-block; transition: opacity 0.15s;
        }
        .btn-cta-solid:hover { opacity: 0.85; }
        .btn-cta-outline {
          font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.15em;
          text-transform: uppercase; font-weight: 700;
          background: transparent; color: #F2EDE3; padding: 13px 36px;
          border: 2px solid #F2EDE3; display: inline-block;
          transition: background 0.15s, color 0.15s;
        }
        .btn-cta-outline:hover { background: #F2EDE3; color: #FF2D00; }

        .footer {
          border-top: 3px solid #111; padding: 28px 5%;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.4rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.04em;
        }
        .footer-copy {
          font-family: var(--font-mono); font-size: 0.62rem;
          letter-spacing: 0.1em; color: #888; text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; }
          .stats-col { flex-direction: row; flex-wrap: wrap; }
          .stat-item { min-width: 130px; }
          .priv-layout { grid-template-columns: 1fr; }
          .bench-row { grid-template-columns: 150px 1fr 70px; gap: 12px; }
          .nav-links { gap: 20px; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav-wrap">
        <div className="nav-logo nav-item">
          <span style={{ color: '#FF2D00' }}>Oi</span>Per
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link nav-item">
            Features
          </a>
          <a href="#performance" className="nav-link nav-item">
            Performance
          </a>
          <a href="#privacy" className="nav-link nav-item">
            Privacy
          </a>
          <a href="#download" className="btn-nav nav-item">
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-top-bar" />
        <div className="hero-layout">
          <div>
            <div style={{ marginBottom: '18px' }}>
              <span className="feat-tag" style={{ background: '#111' }}>
                Privacy-First Voice Transcription
              </span>
            </div>
            <h1 className="hero-title">
              <span className="hero-line-clip">
                <span className="hero-char">Voice</span>
              </span>
              <span className="hero-line-clip">
                <span className="hero-char" style={{ color: '#FF2D00' }}>
                  To Text.
                </span>
              </span>
              <span className="hero-line-clip">
                <span className="hero-char">Your Way.</span>
              </span>
            </h1>
            <p className="hero-meta">
              Hold a hotkey. Speak. Release. Done. OiPer transcribes your voice
              instantly and injects text directly into your active application —
              locally, privately, faster than any cloud alternative.
            </p>
            <div
              className="hero-actions hero-meta"
              style={{ marginTop: '32px' }}
            >
              <a href="#download" className="btn-prim">
                Download Free
              </a>
              <a href="#performance" className="btn-sec">
                View Benchmarks
              </a>
            </div>
          </div>
          <div className="stats-col">
            {[
              { n: '1.5s', label: 'Transcription Speed' },
              { n: '100%', label: 'Local by Default' },
              { n: '0ms', label: 'Cloud Latency' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-band">
        <div className="ticker-inner">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="ticker-chunk">
              <span className="ticker-dot" />
              <span>Global Hotkey</span>
              <span className="ticker-dot" />
              <span>Local Transcription</span>
              <span className="ticker-dot" />
              <span>GPU Acceleration</span>
              <span className="ticker-dot" />
              <span>Zero Cloud Required</span>
              <span className="ticker-dot" />
              <span>Instant Text Injection</span>
              <span className="ticker-dot" />
              <span>Privacy First</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div id="features" className="features-wrap">
        <div className="section-header">
          <h2 className="section-title">
            Built For
            <br />
            <span style={{ color: '#FF2D00' }}>Builders</span>
          </h2>
          <span className="section-tag">03 Core Pillars</span>
        </div>
        <div className="feat-grid">
          {[
            {
              num: '01',
              title: 'Instant Capture',
              body: 'Hold a global hotkey, speak, release. Text appears in your active window immediately — zero friction, zero context switching.',
            },
            {
              num: '02',
              title: 'Total Privacy',
              body: 'All transcription runs on-device. Your voice never leaves your machine unless you explicitly enable cloud optimization.',
            },
            {
              num: '03',
              title: 'Raw Speed',
              body: 'Native code, GPU acceleration, 1.5s for 30 seconds of audio. Faster than every cloud alternative tested. Period.',
            },
          ].map((f) => (
            <div key={f.num} className="feat-block">
              <span className="feat-ghost-num">{f.num}</span>
              <span className="feat-tag">{f.num}</span>
              <h3 className="feat-h3">{f.title}</h3>
              <p className="feat-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="red-band" />

      {/* Benchmark */}
      <section id="performance" className="bench-section">
        <div className="bench-inner">
          <div className="bench-header">
            <h2 className="section-title" style={{ color: '#F2EDE3' }}>
              Numbers
              <br />
              <span style={{ color: '#FF2D00' }}>Don&apos;t Lie</span>
            </h2>
            <span className="bench-note">30 sec English audio</span>
          </div>
          <div className="bench-rows">
            {benchmarks.map((b) => (
              <div key={b.name} className="bench-row">
                <div
                  className="bench-name"
                  style={{
                    color: b.best ? '#F2EDE3' : '#777',
                    fontWeight: b.best ? 700 : 400,
                  }}
                >
                  {b.best && <span className="bench-badge">Fastest</span>}
                  {b.name}
                </div>
                <div className="bench-track">
                  <div
                    className={`bar-inner ${b.best ? 'bar-best' : 'bar-rest'}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <span
                  className={`bench-time ${b.best ? 'bench-time-best' : 'bench-time-rest'}`}
                >
                  {b.time}s
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="priv-section">
        <div className="priv-layout">
          <div>
            <span className="priv-tag">Privacy First</span>
            <h2 className="priv-title">
              Your Data
              <br />
              Stays
              <br />
              <span style={{ color: '#FF2D00' }}>Yours.</span>
            </h2>
            <p className="priv-intro">
              OiPer is built on a simple premise: your recordings belong to you.
              Everything runs locally by default. No subscriptions, no accounts,
              no telemetry.
            </p>
          </div>
          <div className="priv-list">
            {[
              {
                title: 'Local Transcription',
                body: 'All speech-to-text runs on your machine using local AI models. No exceptions.',
              },
              {
                title: 'On-Device Storage',
                body: 'Activity logs, audio files, and transcription history never leave your device.',
              },
              {
                title: 'Optional Cloud',
                body: 'Online text cleanup requires explicit opt-in and your own API key. You stay in control.',
              },
              {
                title: 'Zero Telemetry',
                body: 'We collect nothing. No usage patterns, no analytics sent without your explicit permission.',
              },
            ].map((item) => (
              <div key={item.title} className="priv-row">
                <div className="priv-row-head">
                  <span className="priv-dot" />
                  <span className="priv-name">{item.title}</span>
                </div>
                <p className="priv-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="cta-section">
        <h2 className="cta-heading">
          Start Talking.
          <br />
          Stop Typing.
        </h2>
        <div className="cta-actions">
          <a href="#" className="btn-cta-solid">
            Download Free
          </a>
          <a href="#" className="btn-cta-outline">
            View Documentation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-logo">
          <span style={{ color: '#FF2D00' }}>Oi</span>Per Desktop
        </span>
        <span className="footer-copy">
          © 2026 — Privacy-First Voice Transcription
        </span>
      </footer>
    </div>
  )
}
