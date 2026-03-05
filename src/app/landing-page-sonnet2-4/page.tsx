'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bebas_Neue, Source_Serif_4 } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

function useCounter(target: number, start: boolean, duration = 1.4) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(ease * target * 10) / 10)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [start, target, duration])
  return val
}

export default function LandingPageSonnet24() {
  const containerRef = useRef<HTMLDivElement>(null)
  const benchRef = useRef<HTMLDivElement>(null)
  const [countersStarted, setCountersStarted] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.nav-swiss', {
        y: -70,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.hero-issue', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: 0.1,
      })
      gsap.from('.hero-big-title span', {
        y: '105%',
        stagger: 0.06,
        duration: 1.0,
        ease: 'power4.out',
        delay: 0.2,
      })
      gsap.from('.hero-deck', { opacity: 0, y: 24, duration: 0.7, delay: 0.8 })
      gsap.from('.hero-cta-row', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.0,
      })
      gsap.from('.hero-side-stat', {
        opacity: 0,
        x: 40,
        stagger: 0.12,
        duration: 0.7,
        delay: 0.5,
      })

      gsap.from('.grid-line-h', {
        scrollTrigger: { trigger: '.features-swiss', start: 'top 80%' },
        scaleX: 0,
        transformOrigin: 'left',
        stagger: 0.08,
        duration: 0.8,
        ease: 'power2.inOut',
      })
      gsap.from('.swiss-feature', {
        scrollTrigger: { trigger: '.features-swiss', start: 'top 75%' },
        y: 50,
        opacity: 0,
        stagger: 0.13,
        duration: 0.75,
        ease: 'power3.out',
      })

      gsap.from('.section-rule', {
        scrollTrigger: { trigger: '.bench-swiss', start: 'top 80%' },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.9,
        ease: 'power2.inOut',
      })

      ScrollTrigger.create({
        trigger: benchRef.current,
        start: 'top 75%',
        onEnter: () => setCountersStarted(true),
      })

      document.querySelectorAll('.swiss-bar').forEach((bar) => {
        gsap.from(bar, {
          scrollTrigger: { trigger: '.bench-swiss', start: 'top 72%' },
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.2,
          ease: 'power3.inOut',
          stagger: 0.16,
        })
      })

      gsap.from('.privacy-swiss-item', {
        scrollTrigger: { trigger: '.privacy-swiss', start: 'top 78%' },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.cta-swiss-text', {
        scrollTrigger: { trigger: '.cta-swiss', start: 'top 78%' },
        y: 60,
        opacity: 0,
        duration: 1.0,
        ease: 'power4.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const c1 = useCounter(1.5, countersStarted)
  const c2 = useCounter(3.27, countersStarted)
  const c3 = useCounter(3.55, countersStarted)
  const c4 = useCounter(6.46, countersStarted)
  const counterVals = [c1, c2, c3, c4]

  return (
    <div
      ref={containerRef}
      className={`${bebas.variable} ${sourceSerif.variable}`}
      style={{
        fontFamily: 'var(--font-serif)',
        background: '#F8F5EE',
        color: '#0D0D0D',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }

        :root {
          --paper: #F8F5EE;
          --ink: #0D0D0D;
          --red: #DC1E00;
          --mid-gray: #666;
          --light-gray: #E8E4DC;
          --bebas: var(--font-bebas), 'Bebas Neue', sans-serif;
          --serif: var(--font-serif), 'Source Serif 4', serif;
        }

        .nav-swiss {
          position: sticky; top: 0; z-index: 100;
          background: var(--ink); color: var(--paper);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 5%; height: 56px;
        }
        .nav-swiss-logo {
          font-family: var(--bebas); font-size: 1.6rem; letter-spacing: 0.08em;
          color: var(--paper); display: flex; align-items: center; gap: 0;
        }
        .logo-red { color: var(--red); }
        .nav-swiss-links { display: flex; gap: 36px; align-items: center; }
        .nav-swiss-link {
          font-family: var(--serif); font-size: 0.78rem; letter-spacing: 0.06em;
          color: rgba(248,245,238,0.6); transition: color 0.18s;
        }
        .nav-swiss-link:hover { color: var(--paper); }
        .nav-swiss-cta {
          font-family: var(--bebas); font-size: 0.9rem; letter-spacing: 0.1em;
          background: var(--red); color: white; padding: 7px 20px;
          transition: background 0.18s;
        }
        .nav-swiss-cta:hover { background: #B81800; }

        .hero-swiss {
          display: grid; grid-template-columns: 1fr 240px;
          gap: 0; min-height: calc(100vh - 56px);
          border-bottom: 2px solid var(--ink);
        }
        .hero-main {
          padding: 60px 5%; border-right: 2px solid var(--ink);
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .hero-issue {
          font-family: var(--serif); font-size: 0.72rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--red); font-weight: 600;
          border-left: 3px solid var(--red); padding-left: 10px; margin-bottom: 40px;
        }
        .hero-big-title {
          font-family: var(--bebas);
          font-size: clamp(80px, 12vw, 160px); line-height: 0.92;
          letter-spacing: 0.02em; overflow: hidden;
        }
        .hero-big-title span { display: block; }
        .hero-title-red { color: var(--red); }
        .hero-lower { padding-top: 40px; border-top: 1.5px solid var(--ink); margin-top: 40px; }
        .hero-deck {
          font-family: var(--serif); font-size: 1.1rem; font-style: italic;
          line-height: 1.78; color: var(--mid-gray); max-width: 520px; margin-bottom: 32px;
        }
        .hero-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-swiss-solid {
          font-family: var(--bebas); font-size: 1rem; letter-spacing: 0.1em;
          background: var(--ink); color: var(--paper); padding: 12px 28px;
          transition: background 0.18s;
        }
        .btn-swiss-solid:hover { background: var(--red); }
        .btn-swiss-outline {
          font-family: var(--bebas); font-size: 1rem; letter-spacing: 0.1em;
          background: transparent; color: var(--ink); padding: 11px 28px;
          border: 2px solid var(--ink); transition: background 0.18s, color 0.18s;
        }
        .btn-swiss-outline:hover { background: var(--ink); color: var(--paper); }

        .hero-side {
          padding: 60px 28px; display: flex; flex-direction: column;
          justify-content: flex-start; gap: 0;
        }
        .hero-side-label {
          font-family: var(--serif); font-size: 0.65rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--mid-gray); margin-bottom: 40px;
          border-bottom: 1.5px solid var(--light-gray); padding-bottom: 12px;
        }
        .hero-side-stat {
          padding: 20px 0; border-bottom: 1.5px solid var(--light-gray);
        }
        .side-stat-number {
          font-family: var(--bebas); font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.02em; color: var(--red); line-height: 1;
        }
        .side-stat-label {
          font-family: var(--serif); font-size: 0.72rem; color: var(--mid-gray);
          margin-top: 4px; font-style: italic;
        }

        .features-swiss {
          max-width: 1440px; margin: 0 auto; padding: 80px 5%;
        }
        .features-header {
          display: grid; grid-template-columns: auto 1fr;
          align-items: baseline; gap: 24px; margin-bottom: 56px;
        }
        .section-h2-bebas {
          font-family: var(--bebas); font-size: clamp(36px, 5.5vw, 68px);
          letter-spacing: 0.04em; line-height: 1;
        }
        .section-intro {
          font-family: var(--serif); font-size: 0.95rem; font-style: italic;
          color: var(--mid-gray); line-height: 1.7; padding-top: 8px;
        }
        .grid-line-h { height: 2px; background: var(--ink); margin-bottom: 40px; }
        .swiss-features-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .swiss-feature {
          padding: 32px 28px; border-right: 1.5px solid var(--light-gray);
          border-bottom: 1.5px solid var(--light-gray);
        }
        .swiss-feature:nth-child(3n) { border-right: none; }
        .swiss-feature:nth-child(n+4) { border-bottom: none; }
        .swiss-feat-num {
          font-family: var(--bebas); font-size: 2.8rem; color: var(--red);
          letter-spacing: 0.04em; line-height: 1; margin-bottom: 12px;
        }
        .swiss-feat-title {
          font-family: var(--bebas); font-size: 1.4rem; letter-spacing: 0.06em;
          margin-bottom: 12px;
        }
        .swiss-feat-body {
          font-family: var(--serif); font-size: 0.85rem; line-height: 1.72;
          color: var(--mid-gray);
        }

        .bench-swiss {
          background: var(--ink); color: var(--paper); padding: 80px 5%;
        }
        .bench-swiss-inner { max-width: 1440px; margin: 0 auto; }
        .bench-swiss-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 0; padding-bottom: 20px;
        }
        .section-rule {
          height: 3px; background: var(--red); margin-bottom: 48px;
        }
        .bench-swiss-note {
          font-family: var(--serif); font-size: 0.75rem; font-style: italic;
          color: rgba(248,245,238,0.4); align-self: flex-end; padding-bottom: 4px;
        }
        .bench-swiss-rows { display: flex; flex-direction: column; gap: 0; }
        .bench-swiss-row {
          display: grid; grid-template-columns: 240px 1fr 100px;
          gap: 24px; align-items: center;
          padding: 20px 0; border-bottom: 1px solid rgba(248,245,238,0.08);
        }
        .bench-swiss-name {
          font-family: var(--serif); font-size: 0.88rem;
          display: flex; align-items: center; gap: 12px;
        }
        .bench-swiss-name.best { color: var(--paper); font-weight: 700; }
        .bench-swiss-name.rest { color: rgba(248,245,238,0.45); }
        .swiss-badge {
          font-family: var(--bebas); font-size: 0.72rem; letter-spacing: 0.08em;
          background: var(--red); color: white; padding: 1px 8px; flex-shrink: 0;
        }
        .bench-track-swiss { height: 3px; background: rgba(248,245,238,0.1); position: relative; overflow: hidden; }
        .swiss-bar { height: 100%; position: absolute; left: 0; top: 0; }
        .swiss-bar-best { background: var(--red); }
        .swiss-bar-rest { background: rgba(248,245,238,0.25); }
        .bench-swiss-time {
          font-family: var(--bebas); font-size: 1.8rem; letter-spacing: 0.04em; text-align: right;
        }
        .bench-swiss-time.best { color: var(--red); }
        .bench-swiss-time.rest { color: rgba(248,245,238,0.3); }

        .privacy-swiss {
          max-width: 1440px; margin: 0 auto; padding: 80px 5%;
        }
        .privacy-swiss-layout {
          display: grid; grid-template-columns: 380px 1fr; gap: 80px; align-items: start;
        }
        .privacy-swiss-left {}
        .privacy-swiss-eyebrow {
          font-family: var(--serif); font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--red);
          margin-bottom: 16px;
        }
        .privacy-swiss-h2 {
          font-family: var(--bebas); font-size: clamp(40px, 5vw, 60px);
          letter-spacing: 0.04em; line-height: 1; margin-bottom: 24px;
        }
        .privacy-swiss-body {
          font-family: var(--serif); font-size: 0.95rem; font-style: italic;
          line-height: 1.78; color: var(--mid-gray);
        }
        .privacy-swiss-items {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
        }
        .privacy-swiss-item {
          padding: 28px; border: 1px solid var(--light-gray);
          margin: -1px 0 0 -1px;
          transition: background 0.2s;
        }
        .privacy-swiss-item:hover { background: #F0ECE2; }
        .ps-item-num {
          font-family: var(--bebas); font-size: 1.6rem; color: var(--red);
          letter-spacing: 0.04em; margin-bottom: 8px;
        }
        .ps-item-title {
          font-family: var(--bebas); font-size: 1.1rem; letter-spacing: 0.06em; margin-bottom: 8px;
        }
        .ps-item-body {
          font-family: var(--serif); font-size: 0.8rem; line-height: 1.65; color: var(--mid-gray);
        }

        .cta-swiss {
          background: var(--red); padding: 100px 5%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .cta-swiss-inner { max-width: 1440px; margin: 0 auto; width: 100%; grid-column: 1/-1;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .cta-swiss-text {}
        .cta-swiss-h2 {
          font-family: var(--bebas);
          font-size: clamp(52px, 8vw, 100px); letter-spacing: 0.02em; line-height: 0.9;
          color: white; margin-bottom: 24px;
        }
        .cta-swiss-sub {
          font-family: var(--serif); font-size: 1.05rem; font-style: italic;
          line-height: 1.7; color: rgba(255,255,255,0.7);
        }
        .cta-swiss-right {
          display: flex; flex-direction: column; gap: 16px;
        }
        .btn-cta-white {
          font-family: var(--bebas); font-size: 1.1rem; letter-spacing: 0.1em;
          background: white; color: var(--red); padding: 14px 36px; text-align: center;
          transition: background 0.2s, color 0.2s;
        }
        .btn-cta-white:hover { background: var(--ink); color: white; }
        .btn-cta-border-white {
          font-family: var(--bebas); font-size: 1.1rem; letter-spacing: 0.1em;
          background: transparent; color: white; padding: 13px 36px; text-align: center;
          border: 2px solid rgba(255,255,255,0.6); transition: border-color 0.2s, background 0.2s;
        }
        .btn-cta-border-white:hover { background: rgba(255,255,255,0.12); border-color: white; }
        .cta-pull-quote {
          margin-top: 32px; padding-left: 20px; border-left: 3px solid rgba(255,255,255,0.4);
        }
        .pull-text {
          font-family: var(--serif); font-size: 1.1rem; font-style: italic;
          color: rgba(255,255,255,0.6); line-height: 1.65;
        }
        .pull-attr {
          font-family: var(--serif); font-size: 0.72rem; color: rgba(255,255,255,0.4);
          margin-top: 8px; text-transform: uppercase; letter-spacing: 0.1em;
        }

        .footer-swiss {
          background: var(--ink); padding: 24px 5%;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-swiss-logo {
          font-family: var(--bebas); font-size: 1.5rem; letter-spacing: 0.08em;
          color: var(--paper);
        }
        .footer-swiss-copy {
          font-family: var(--serif); font-size: 0.7rem; font-style: italic;
          color: rgba(248,245,238,0.35);
        }

        @media (max-width: 960px) {
          .hero-swiss { grid-template-columns: 1fr; }
          .hero-side { flex-direction: row; flex-wrap: wrap; gap: 20px; padding: 32px 5%; border-top: 2px solid var(--ink); }
          .hero-side-stat { min-width: 120px; }
          .swiss-features-grid { grid-template-columns: 1fr 1fr; }
          .swiss-feature:nth-child(3n) { border-right: 1.5px solid var(--light-gray); }
          .swiss-feature:nth-child(2n) { border-right: none; }
          .privacy-swiss-layout { grid-template-columns: 1fr; }
          .cta-swiss-inner { grid-template-columns: 1fr; }
          .bench-swiss-row { grid-template-columns: 160px 1fr 80px; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav-swiss">
        <div className="nav-swiss-logo">
          <span className="logo-red">Oi</span>Per
        </div>
        <div className="nav-swiss-links">
          <a href="#features" className="nav-swiss-link">
            Features
          </a>
          <a href="#performance" className="nav-swiss-link">
            Performance
          </a>
          <a href="#privacy" className="nav-swiss-link">
            Privacy
          </a>
          <a href="#download" className="nav-swiss-cta">
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-swiss">
        <div className="hero-main">
          <div>
            <div className="hero-issue">
              Voice Transcription · Privacy-First · Desktop
            </div>
            <h1 className="hero-big-title">
              <span>Hold.</span>
              <span>Speak.</span>
              <span className="hero-title-red">Done.</span>
            </h1>
          </div>
          <div className="hero-lower">
            <p className="hero-deck">
              OiPer converts voice to text through a single hotkey — running
              entirely on your machine at speeds that cloud services cannot
              match.
            </p>
            <div className="hero-cta-row">
              <a href="#download" className="btn-swiss-solid">
                Download Free
              </a>
              <a href="#performance" className="btn-swiss-outline">
                Benchmarks
              </a>
            </div>
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-side-label">Key Metrics</div>
          {[
            { n: '1.5s', label: 'Transcription, 30s audio' },
            { n: '100%', label: 'Local processing' },
            { n: '0', label: 'Cloud dependencies' },
          ].map((s) => (
            <div key={s.label} className="hero-side-stat">
              <div className="side-stat-number">{s.n}</div>
              <div className="side-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div id="features" className="features-swiss">
        <div className="features-header">
          <h2 className="section-h2-bebas">
            Core
            <br />
            <span style={{ color: '#DC1E00' }}>Features</span>
          </h2>
          <p className="section-intro">
            Designed around a single principle: get out of your way. Every
            feature serves the goal of frictionless, private voice
            transcription.
          </p>
        </div>
        <div className="grid-line-h" />
        <div className="swiss-features-grid">
          {[
            {
              n: '01',
              title: 'Global Hotkey',
              body: 'One key combo to rule them all. Works in every application without configuration.',
            },
            {
              n: '02',
              title: 'Instant Injection',
              body: 'Text appears directly in your active window. No clipboard, no paste required.',
            },
            {
              n: '03',
              title: 'Local Models',
              body: 'Whisper-based transcription runs fully on-device. Multiple model sizes available.',
            },
            {
              n: '04',
              title: 'GPU Acceleration',
              body: 'Auto-detects your hardware. Uses GPU when available for maximum throughput.',
            },
            {
              n: '05',
              title: 'Text Cleanup',
              body: 'Optional LLM-based text polishing — locally or via your own API key.',
            },
            {
              n: '06',
              title: 'Full Control',
              body: 'Backend selection, model choice, language setting. Configure what matters to you.',
            },
          ].map((f) => (
            <div key={f.n} className="swiss-feature">
              <div className="swiss-feat-num">{f.n}</div>
              <div className="swiss-feat-title">{f.title}</div>
              <p className="swiss-feat-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benchmark */}
      <section id="performance" className="bench-swiss" ref={benchRef}>
        <div className="bench-swiss-inner">
          <div className="bench-swiss-header">
            <h2 className="section-h2-bebas" style={{ color: 'var(--paper)' }}>
              Speed
              <br />
              <span style={{ color: 'var(--red)' }}>Comparison</span>
            </h2>
            <span className="bench-swiss-note">
              30 seconds English audio · time to complete
            </span>
          </div>
          <div className="section-rule" />
          <div className="bench-swiss-rows">
            {[
              { name: 'OiPer Desktop', pct: 23.2, best: true, i: 0 },
              { name: 'Lemonfox API', pct: 50.6, best: false, i: 1 },
              { name: 'Python Faster-Whisper', pct: 55.0, best: false, i: 2 },
              { name: 'OpenAI Whisper API', pct: 100, best: false, i: 3 },
            ].map((b) => (
              <div key={b.name} className="bench-swiss-row">
                <div className={`bench-swiss-name ${b.best ? 'best' : 'rest'}`}>
                  {b.best && <span className="swiss-badge">Fastest</span>}
                  {b.name}
                </div>
                <div className="bench-track-swiss">
                  <div
                    className={`swiss-bar ${b.best ? 'swiss-bar-best' : 'swiss-bar-rest'}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <div className={`bench-swiss-time ${b.best ? 'best' : 'rest'}`}>
                  {counterVals[b.i].toFixed(2)}s
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="privacy-swiss">
        <div className="privacy-swiss-layout">
          <div className="privacy-swiss-left">
            <div className="privacy-swiss-eyebrow">Privacy Architecture</div>
            <h2 className="privacy-swiss-h2">
              Local.
              <br />
              <span style={{ color: '#DC1E00' }}>Private.</span>
              <br />
              Yours.
            </h2>
            <p className="privacy-swiss-body">
              Every design decision in OiPer starts with a single question: does
              this require sending data anywhere? If yes, it does not ship as a
              default.
            </p>
          </div>
          <div className="privacy-swiss-items">
            {[
              {
                n: '01',
                title: 'Local Transcription',
                body: 'Speech-to-text runs on-device. No exceptions, no fallbacks to cloud.',
              },
              {
                n: '02',
                title: 'On-Device Storage',
                body: 'All logs and audio stay on your machine. We have no access.',
              },
              {
                n: '03',
                title: 'Optional Cloud',
                body: 'Online features require your own API key and explicit consent.',
              },
              {
                n: '04',
                title: 'Zero Telemetry',
                body: 'No analytics, no usage data, no behavioral tracking of any kind.',
              },
            ].map((item) => (
              <div key={item.n} className="privacy-swiss-item">
                <div className="ps-item-num">{item.n}</div>
                <div className="ps-item-title">{item.title}</div>
                <p className="ps-item-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="cta-swiss">
        <div className="cta-swiss-inner">
          <div className="cta-swiss-text">
            <h2 className="cta-swiss-h2">
              Stop
              <br />
              Typing.
              <br />
              Start
              <br />
              Speaking.
            </h2>
            <p className="cta-swiss-sub">
              OiPer is free. No subscriptions, no accounts required. Download
              and start transcribing in under a minute.
            </p>
          </div>
          <div className="cta-swiss-right">
            <a href="#" className="btn-cta-white">
              Download OiPer — Free
            </a>
            <a href="#" className="btn-cta-border-white">
              Read the Documentation
            </a>
            <div className="cta-pull-quote">
              <p className="pull-text">
                &ldquo;The fastest local transcription available. 1.5s for 30s
                of audio, with your data never leaving your device.&rdquo;
              </p>
              <p className="pull-attr">Performance Benchmark, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-swiss">
        <span className="footer-swiss-logo">
          <span style={{ color: '#DC1E00' }}>Oi</span>Per Desktop
        </span>
        <span className="footer-swiss-copy">
          © 2026 — Privacy-First Voice Transcription
        </span>
      </footer>
    </div>
  )
}
