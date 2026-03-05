'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Fraunces, Nunito } from 'next/font/google'
import { useEffect, useRef } from 'react'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
})

export default function LandingPageSonnet23() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.nav-wrap', {
        y: -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from('.blob-hero', {
        scale: 0.5,
        opacity: 0,
        duration: 2.4,
        ease: 'power2.out',
        stagger: 0.3,
        delay: 0.1,
      })

      gsap.from('.hero-eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
      })
      gsap.from('.hero-h1', {
        opacity: 0,
        y: 50,
        duration: 1.1,
        delay: 0.6,
        ease: 'power3.out',
      })
      gsap.from('.hero-body', { opacity: 0, y: 30, duration: 0.8, delay: 1.0 })
      gsap.from('.hero-btns', { opacity: 0, y: 24, duration: 0.7, delay: 1.2 })

      gsap.to('.blob-float-1', {
        y: -30,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
      gsap.to('.blob-float-2', {
        y: 24,
        duration: 6.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      })
      gsap.to('.blob-float-3', {
        y: -18,
        duration: 4.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      })

      gsap.from('.feature-leaf', {
        scrollTrigger: { trigger: '.features-row', start: 'top 78%' },
        opacity: 0,
        y: 60,
        stagger: 0.16,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from('.process-step', {
        scrollTrigger: { trigger: '.process-section', start: 'top 78%' },
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.4)',
      })

      gsap.from('.bench-organic-row', {
        scrollTrigger: { trigger: '.bench-organic', start: 'top 78%' },
        opacity: 0,
        x: -60,
        stagger: 0.14,
        duration: 0.7,
        ease: 'power3.out',
      })

      document.querySelectorAll('.organic-bar').forEach((bar) => {
        gsap.from(bar, {
          scrollTrigger: { trigger: '.bench-organic', start: 'top 75%' },
          width: 0,
          duration: 1.3,
          ease: 'power3.inOut',
          stagger: 0.15,
        })
      })

      gsap.from('.priv-leaf', {
        scrollTrigger: { trigger: '.priv-leaves', start: 'top 78%' },
        opacity: 0,
        y: 50,
        stagger: 0.14,
        duration: 0.85,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${fraunces.variable} ${nunito.variable}`}
      style={{
        fontFamily: 'var(--font-nunito)',
        background: '#FAF8F3',
        color: '#2A2318',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }

        :root {
          --cream: #FAF8F3;
          --forest: #2A4A1C;
          --terra: #C4602A;
          --sage: #7AB89A;
          --sand: #D4B896;
          --ink: #2A2318;
          --fraunces: var(--font-fraunces), 'Fraunces', serif;
          --sans: var(--font-nunito), 'Nunito', sans-serif;
        }

        .nav-wrap {
          position: sticky; top: 0; z-index: 100;
          background: rgba(250,248,243,0.94); backdrop-filter: blur(16px);
          border-bottom: 1.5px solid #D4B89640;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%; height: 68px;
        }
        .nav-logo {
          font-family: var(--fraunces); font-size: 1.55rem; font-weight: 700;
          color: var(--forest); letter-spacing: -0.01em;
        }
        .nav-links { display: flex; gap: 36px; align-items: center; }
        .nav-link {
          font-family: var(--sans); font-size: 0.82rem; font-weight: 500;
          color: #2A231870; transition: color 0.2s; letter-spacing: 0.02em;
        }
        .nav-link:hover { color: var(--forest); }
        .btn-nav {
          font-family: var(--sans); font-size: 0.78rem; font-weight: 700;
          background: var(--forest); color: var(--cream); padding: 9px 22px;
          border-radius: 100px; letter-spacing: 0.03em; transition: background 0.2s;
        }
        .btn-nav:hover { background: var(--terra); }

        .hero-section {
          padding: 80px 6% 60px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
          max-width: 1440px; margin: 0 auto;
          min-height: 90vh; position: relative;
        }
        .hero-blobs {
          position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0;
        }
        .blob-hero {
          position: absolute; border-radius: 50%;
          filter: blur(0px);
        }
        .blob-1 {
          width: 520px; height: 440px; top: -80px; right: -100px;
          background: radial-gradient(ellipse, #7AB89A30 0%, transparent 70%);
        }
        .blob-2 {
          width: 360px; height: 320px; bottom: 0; left: -80px;
          background: radial-gradient(ellipse, #C4602A20 0%, transparent 70%);
        }
        .blob-3 {
          width: 280px; height: 240px; top: 40%; right: 30%;
          background: radial-gradient(ellipse, #D4B89630 0%, transparent 70%);
        }

        .hero-content { position: relative; z-index: 1; }
        .hero-eyebrow {
          font-family: var(--sans); font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--terra);
          margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
        }
        .eyebrow-dot { width: 6px; height: 6px; background: var(--terra); border-radius: 50%; }
        .hero-h1 {
          font-family: var(--fraunces);
          font-size: clamp(44px, 6vw, 80px); font-weight: 900;
          line-height: 1.08; letter-spacing: -0.02em; color: var(--forest);
          margin-bottom: 24px;
        }
        .hero-h1 em { font-style: italic; color: var(--terra); }
        .hero-body {
          font-family: var(--sans); font-size: 1rem; line-height: 1.78;
          color: #2A231875; max-width: 420px; margin-bottom: 36px;
        }
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-forest {
          font-family: var(--sans); font-size: 0.82rem; font-weight: 700;
          background: var(--forest); color: var(--cream); padding: 14px 30px;
          border-radius: 100px; letter-spacing: 0.03em;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-forest:hover { background: #1E3614; transform: translateY(-2px); }
        .btn-terra-outline {
          font-family: var(--sans); font-size: 0.82rem; font-weight: 600;
          background: transparent; color: var(--terra); padding: 13px 30px;
          border-radius: 100px; border: 1.5px solid var(--terra);
          transition: background 0.2s, color 0.2s;
        }
        .btn-terra-outline:hover { background: var(--terra); color: white; }

        .hero-visual {
          position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: center;
        }
        .hero-card-organic {
          background: white; border-radius: 28px;
          padding: 40px; width: 100%; max-width: 400px;
          box-shadow: 0 24px 64px rgba(42,35,24,0.12), 0 4px 16px rgba(42,35,24,0.06);
          position: relative; overflow: hidden;
        }
        .card-organic-bg {
          position: absolute; bottom: -40px; right: -40px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, #7AB89A20, transparent 70%);
          border-radius: 50%;
        }
        .waveform {
          display: flex; align-items: center; justify-content: center;
          gap: 4px; height: 56px; margin-bottom: 24px;
        }
        .wave-bar {
          border-radius: 100px; background: var(--forest); width: 4px;
          animation: waveAnim 1.2s ease-in-out infinite;
        }
        @keyframes waveAnim {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .card-status {
          font-family: var(--sans); font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--terra);
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .status-dot {
          width: 7px; height: 7px; background: var(--terra); border-radius: 50%;
          animation: statusPulse 2s ease-in-out infinite;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .card-text {
          font-family: var(--fraunces); font-size: 1.3rem; font-style: italic;
          line-height: 1.6; color: var(--ink);
        }
        .card-meta {
          margin-top: 20px; padding-top: 16px; border-top: 1px solid #2A231812;
          display: flex; justify-content: space-between; align-items: center;
        }
        .card-meta-label { font-family: var(--sans); font-size: 0.7rem; color: #2A231850; }
        .card-meta-time { font-family: var(--fraunces); font-size: 0.9rem; font-weight: 700; color: var(--forest); }

        .floating-blobs {
          position: absolute; inset: -40px; pointer-events: none; z-index: 0;
        }
        .blob-float-1 {
          position: absolute; top: -20px; right: -30px;
          width: 120px; height: 100px; border-radius: 50%;
          background: radial-gradient(ellipse, #7AB89A50, transparent 70%);
        }
        .blob-float-2 {
          position: absolute; bottom: 20px; left: -20px;
          width: 80px; height: 70px; border-radius: 50%;
          background: radial-gradient(ellipse, #C4602A40, transparent 70%);
        }
        .blob-float-3 {
          position: absolute; top: 40%; right: 10%;
          width: 60px; height: 50px; border-radius: 50%;
          background: radial-gradient(ellipse, #D4B89660, transparent 70%);
        }

        .features-section {
          padding: 100px 6%; background: var(--forest);
          position: relative; overflow: hidden;
        }
        .features-bg-blob {
          position: absolute; top: -100px; right: -100px;
          width: 500px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(122,184,154,0.15), transparent 70%);
          pointer-events: none;
        }
        .features-inner { max-width: 1440px; margin: 0 auto; position: relative; z-index: 1; }
        .section-label {
          font-family: var(--sans); font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #7AB89A; margin-bottom: 16px; display: block;
        }
        .section-title-organic {
          font-family: var(--fraunces); font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 900; letter-spacing: -0.02em; line-height: 1.1;
          color: var(--cream); margin-bottom: 60px;
        }
        .section-title-organic em { font-style: italic; color: var(--sage); }

        .features-row {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px;
        }
        .feature-leaf {
          background: rgba(255,255,255,0.06); border-radius: 20px;
          padding: 36px 32px; border: 1px solid rgba(255,255,255,0.1);
          transition: background 0.3s, transform 0.3s;
        }
        .feature-leaf:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
        .leaf-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; margin-bottom: 20px;
        }
        .leaf-title {
          font-family: var(--fraunces); font-size: 1.4rem; font-weight: 700;
          color: var(--cream); margin-bottom: 12px; letter-spacing: -0.01em;
        }
        .leaf-body {
          font-family: var(--sans); font-size: 0.88rem; line-height: 1.72;
          color: rgba(250,248,243,0.6);
        }

        .process-section { padding: 100px 6%; max-width: 1440px; margin: 0 auto; }
        .process-heading {
          font-family: var(--fraunces); font-size: clamp(32px, 5vw, 60px);
          font-weight: 900; color: var(--forest); letter-spacing: -0.02em;
          line-height: 1.1; margin-bottom: 16px;
        }
        .process-heading em { font-style: italic; color: var(--terra); }
        .process-sub {
          font-family: var(--sans); font-size: 1rem; color: #2A231860;
          line-height: 1.7; max-width: 520px; margin-bottom: 60px;
        }
        .process-steps { display: flex; gap: 0; flex-wrap: wrap; position: relative; }
        .process-steps::before {
          content: ''; position: absolute; top: 28px; left: 28px; right: 28px;
          height: 1.5px; background: linear-gradient(90deg, var(--sage), var(--terra));
          z-index: 0;
        }
        .process-step {
          flex: 1; min-width: 180px; text-align: center; padding: 0 16px;
          position: relative; z-index: 1;
        }
        .step-circle {
          width: 56px; height: 56px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; font-family: var(--fraunces);
          font-size: 1.2rem; font-weight: 900;
        }
        .step-label {
          font-family: var(--fraunces); font-size: 1.1rem; font-weight: 700;
          color: var(--forest); margin-bottom: 8px;
        }
        .step-body { font-family: var(--sans); font-size: 0.8rem; color: #2A231865; line-height: 1.6; }

        .bench-section-organic { padding: 100px 6%; background: #F4F0E8; }
        .bench-organic-inner { max-width: 900px; margin: 0 auto; }
        .bench-organic { margin-top: 56px; }
        .bench-organic-row { padding: 20px 0; border-bottom: 1.5px solid #D4B89640; }
        .bench-row-top {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
        }
        .bench-row-name {
          font-family: var(--sans); font-size: 0.88rem; font-weight: 600; color: var(--ink);
          display: flex; align-items: center; gap: 10px;
        }
        .bench-row-name.is-best { color: var(--forest); font-weight: 700; }
        .best-pill {
          font-family: var(--sans); font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--forest); color: white; padding: 2px 8px; border-radius: 100px;
        }
        .bench-row-time {
          font-family: var(--fraunces); font-size: 1.1rem; font-weight: 900;
        }
        .bench-row-time.is-best { color: var(--forest); }
        .bench-row-time.not-best { color: #2A231840; }
        .organic-track { height: 8px; background: #D4B89640; border-radius: 100px; overflow: hidden; }
        .organic-bar { height: 100%; border-radius: 100px; position: relative; }
        .organic-bar-best { background: linear-gradient(90deg, var(--forest), var(--sage)); }
        .organic-bar-rest { background: #D4B89680; }

        .priv-section-organic { padding: 100px 6%; max-width: 1440px; margin: 0 auto; }
        .priv-organic-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .priv-organic-left {}
        .priv-left-title {
          font-family: var(--fraunces); font-size: clamp(36px, 5vw, 60px);
          font-weight: 900; color: var(--forest); letter-spacing: -0.02em; line-height: 1.1;
          margin-bottom: 20px;
        }
        .priv-left-title em { font-style: italic; color: var(--terra); }
        .priv-left-body {
          font-family: var(--sans); font-size: 0.95rem; line-height: 1.75; color: #2A231870;
        }
        .priv-leaves { display: flex; flex-direction: column; gap: 20px; }
        .priv-leaf {
          background: white; border-radius: 16px; padding: 28px;
          border: 1.5px solid #D4B89630;
          transition: border-color 0.25s, transform 0.25s;
        }
        .priv-leaf:hover { border-color: var(--sage); transform: translateX(6px); }
        .priv-leaf-head { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
        .priv-leaf-dot { width: 10px; height: 10px; background: var(--sage); border-radius: 50%; }
        .priv-leaf-title {
          font-family: var(--fraunces); font-size: 1.1rem; font-weight: 700; color: var(--forest);
        }
        .priv-leaf-body {
          font-family: var(--sans); font-size: 0.82rem; line-height: 1.65; color: #2A231860; padding-left: 22px;
        }

        .cta-organic {
          background: var(--terra); padding: 100px 6%; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta-bg-blob1 {
          position: absolute; top: -80px; left: -80px;
          width: 400px; height: 300px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(250,248,243,0.15), transparent 70%);
          pointer-events: none;
        }
        .cta-bg-blob2 {
          position: absolute; bottom: -60px; right: -60px;
          width: 300px; height: 280px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(250,248,243,0.12), transparent 70%);
          pointer-events: none;
        }
        .cta-inner-organic { position: relative; z-index: 1; }
        .cta-organic-heading {
          font-family: var(--fraunces); font-size: clamp(40px, 7vw, 88px);
          font-weight: 900; color: var(--cream); letter-spacing: -0.02em;
          line-height: 1.05; margin-bottom: 20px;
        }
        .cta-organic-heading em { font-style: italic; }
        .cta-organic-sub {
          font-family: var(--sans); font-size: 1rem; color: rgba(250,248,243,0.75);
          line-height: 1.7; max-width: 480px; margin: 0 auto 44px;
        }
        .cta-organic-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .btn-cream {
          font-family: var(--sans); font-size: 0.82rem; font-weight: 700;
          background: var(--cream); color: var(--terra); padding: 14px 32px;
          border-radius: 100px; transition: background 0.2s, transform 0.15s;
        }
        .btn-cream:hover { background: white; transform: translateY(-2px); }
        .btn-outline-cream {
          font-family: var(--sans); font-size: 0.82rem; font-weight: 600;
          background: transparent; color: var(--cream); padding: 13px 32px;
          border-radius: 100px; border: 1.5px solid rgba(250,248,243,0.6);
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-outline-cream:hover { background: rgba(250,248,243,0.15); border-color: var(--cream); }

        .footer-organic {
          background: var(--forest); padding: 32px 6%;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .footer-org-logo {
          font-family: var(--fraunces); font-size: 1.4rem; font-weight: 700;
          color: var(--sage); letter-spacing: -0.01em;
        }
        .footer-org-copy {
          font-family: var(--sans); font-size: 0.72rem;
          color: rgba(250,248,243,0.4); letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr; min-height: auto; }
          .priv-organic-grid { grid-template-columns: 1fr; }
          .process-steps::before { display: none; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav-wrap">
        <div className="nav-logo">
          Oi<em>Per</em>
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#process" className="nav-link">
            How It Works
          </a>
          <a href="#privacy" className="nav-link">
            Privacy
          </a>
          <a href="#download" className="btn-nav">
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-blobs">
          <div className="blob-hero blob-1" />
          <div className="blob-hero blob-2" />
          <div className="blob-hero blob-3" />
        </div>
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              Privacy-First Voice to Text
            </div>
            <h1 className="hero-h1">
              Your voice,
              <br />
              <em>naturally</em>
              <br />
              transcribed.
            </h1>
            <p className="hero-body">
              Hold a hotkey. Speak freely. Release. OiPer turns your words into
              text instantly — running entirely on your machine, without ever
              touching the cloud.
            </p>
            <div className="hero-btns">
              <a href="#download" className="btn-forest">
                Download Free
              </a>
              <a href="#performance" className="btn-terra-outline">
                See Benchmarks
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div style={{ position: 'relative' }}>
              <div className="floating-blobs">
                <div className="blob-float-1" />
                <div className="blob-float-2" />
                <div className="blob-float-3" />
              </div>
              <div className="hero-card-organic">
                <div className="card-organic-bg" />
                <div className="waveform">
                  {[
                    0.3, 0.7, 0.5, 1.0, 0.6, 0.8, 0.4, 0.9, 0.5, 0.7, 0.3, 0.6,
                    0.8, 0.4, 0.7,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="wave-bar"
                      style={{
                        height: `${h * 52}px`,
                        animationDelay: `${i * 0.08}s`,
                        opacity: 0.7 + h * 0.3,
                      }}
                    />
                  ))}
                </div>
                <div className="card-status">
                  <span className="status-dot" />
                  Transcribing…
                </div>
                <p className="card-text">
                  &ldquo;Meeting notes for the product review — remember to
                  follow up with the design team about the new onboarding
                  flow…&rdquo;
                </p>
                <div className="card-meta">
                  <span className="card-meta-label">Processing time</span>
                  <span className="card-meta-time">1.5s ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="features-section">
        <div className="features-bg-blob" />
        <div className="features-inner">
          <span className="section-label">Core Features</span>
          <h2 className="section-title-organic">
            Everything you need,
            <br />
            <em>nothing you don&apos;t.</em>
          </h2>
          <div className="features-row">
            {[
              {
                bg: '#7AB89A25',
                icon: '🎙',
                title: 'Global Hotkey',
                body: 'Hold any key combo to record, release to transcribe. Works across every app, every window, every context.',
              },
              {
                bg: '#C4602A20',
                icon: '⚡',
                title: 'Native Speed',
                body: '1.5 seconds for 30 seconds of audio. Written in native code with GPU acceleration — the fastest transcription available.',
              },
              {
                bg: '#D4B89630',
                icon: '🔒',
                title: 'Local First',
                body: 'Every transcription stays on your device. No cloud, no subscriptions, no privacy trade-offs. Your voice, your machine.',
              },
              {
                bg: '#7AB89A20',
                icon: '✨',
                title: 'Text Cleanup',
                body: 'Optional AI-powered text optimization to polish grammar and formatting — locally or via your own API key.',
              },
              {
                bg: '#C4602A15',
                icon: '🖥',
                title: 'Instant Injection',
                body: 'Text is inserted directly into your focused application. No copy-paste, no switching windows.',
              },
              {
                bg: '#D4B89625',
                icon: '⚙',
                title: 'Full Control',
                body: 'Choose your model, backend, language. Configure everything or nothing — OiPer works beautifully out of the box.',
              },
            ].map((f) => (
              <div key={f.title} className="feature-leaf">
                <div className="leaf-icon" style={{ background: f.bg }}>
                  <span>{f.icon}</span>
                </div>
                <div className="leaf-title">{f.title}</div>
                <p className="leaf-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="process-section">
        <span className="section-label" style={{ color: 'var(--terra)' }}>
          How It Works
        </span>
        <h2 className="process-heading">
          Three steps to
          <br />
          <em>effortless transcription</em>
        </h2>
        <p className="process-sub">
          OiPer is designed to get out of your way. The workflow is as natural
          as speaking itself.
        </p>
        <div className="process-steps">
          {[
            {
              n: '1',
              color: '#2A4A1C',
              text: '#FAF8F3',
              label: 'Hold',
              body: 'Press and hold your configured hotkey to begin recording.',
            },
            {
              n: '2',
              color: '#C4602A',
              text: '#FAF8F3',
              label: 'Speak',
              body: 'Speak naturally. OiPer captures your audio locally in real time.',
            },
            {
              n: '3',
              color: '#7AB89A',
              text: '#FAF8F3',
              label: 'Release',
              body: 'Release the key. Transcription runs locally and text is injected instantly.',
            },
          ].map((s) => (
            <div key={s.n} className="process-step">
              <div
                className="step-circle"
                style={{ background: s.color, color: s.text }}
              >
                {s.n}
              </div>
              <div className="step-label">{s.label}</div>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmark */}
      <section id="performance" className="bench-section-organic">
        <div className="bench-organic-inner">
          <span className="section-label" style={{ color: 'var(--terra)' }}>
            Performance
          </span>
          <h2 className="process-heading">
            Faster than <em>every</em>
            <br />
            cloud alternative.
          </h2>
          <p className="process-sub">
            30 seconds of English audio — time to complete transcription
          </p>
          <div className="bench-organic">
            {[
              { name: 'OiPer Desktop', time: '1.5s', pct: 23, best: true },
              { name: 'Lemonfox API', time: '3.27s', pct: 50.6, best: false },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                pct: 55,
                best: false,
              },
              {
                name: 'OpenAI Whisper API',
                time: '6.46s',
                pct: 100,
                best: false,
              },
            ].map((b) => (
              <div key={b.name} className="bench-organic-row">
                <div className="bench-row-top">
                  <div className={`bench-row-name ${b.best ? 'is-best' : ''}`}>
                    {b.best && <span className="best-pill">Fastest</span>}
                    {b.name}
                  </div>
                  <div
                    className={`bench-row-time ${b.best ? 'is-best' : 'not-best'}`}
                  >
                    {b.time}
                  </div>
                </div>
                <div className="organic-track">
                  <div
                    className={`organic-bar ${b.best ? 'organic-bar-best' : 'organic-bar-rest'}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="priv-section-organic">
        <div className="priv-organic-grid">
          <div className="priv-organic-left">
            <span className="section-label" style={{ color: 'var(--terra)' }}>
              Privacy
            </span>
            <h2 className="priv-left-title">
              Your data
              <br />
              <em>never leaves</em>
              <br />
              your machine.
            </h2>
            <p className="priv-left-body">
              OiPer was built from the ground up with privacy as the primary
              constraint. No accounts, no subscriptions, no telemetry. Just you
              and your words.
            </p>
          </div>
          <div className="priv-leaves">
            {[
              {
                title: 'Local Transcription',
                body: 'All speech-to-text processing happens on your device using local AI models. No data ever leaves.',
              },
              {
                title: 'On-Device Logs',
                body: 'Recordings, history, and activity logs live exclusively on your machine.',
              },
              {
                title: 'Optional Cloud',
                body: 'Text cleanup via cloud requires your own API key and explicit opt-in. Always your choice.',
              },
              {
                title: 'Zero Tracking',
                body: 'No analytics, no usage monitoring, no behavioral data. What you say stays with you.',
              },
            ].map((item) => (
              <div key={item.title} className="priv-leaf">
                <div className="priv-leaf-head">
                  <span className="priv-leaf-dot" />
                  <span className="priv-leaf-title">{item.title}</span>
                </div>
                <p className="priv-leaf-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="cta-organic">
        <div className="cta-bg-blob1" />
        <div className="cta-bg-blob2" />
        <div className="cta-inner-organic">
          <h2 className="cta-organic-heading">
            Start speaking,
            <br />
            <em>freely.</em>
          </h2>
          <p className="cta-organic-sub">
            Download OiPer for free and experience voice transcription the way
            it should be — fast, private, and completely yours.
          </p>
          <div className="cta-organic-actions">
            <a href="#" className="btn-cream">
              Download for Free
            </a>
            <a href="#" className="btn-outline-cream">
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-organic">
        <div className="footer-org-logo">OiPer</div>
        <span className="footer-org-copy">
          © 2026 — Privacy-First Voice Transcription
        </span>
      </footer>
    </div>
  )
}
