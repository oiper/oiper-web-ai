'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cinzel_Decorative, Cormorant_Garamond } from 'next/font/google'
import { useEffect, useRef } from 'react'

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', pct: 23.2, best: true },
  { name: 'Lemonfox API', time: '3.27s', pct: 50.6, best: false },
  { name: 'Python Faster-Whisper', time: '3.55s', pct: 55.0, best: false },
  { name: 'OpenAI Whisper API', time: '6.46s', pct: 100, best: false },
]

export default function LandingPageSonnet22() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.nav-wrap', { y: -60, opacity: 0, duration: 0.9 })
        .from(
          '.hero-ornament-top',
          { scaleX: 0, duration: 1, ease: 'power2.inOut' },
          '-=0.3'
        )
        .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from(
          '.hero-title-word',
          { opacity: 0, y: 40, stagger: 0.18, duration: 0.9 },
          '-=0.3'
        )
        .from(
          '.hero-ornament-mid',
          { scaleX: 0, duration: 0.8, ease: 'power2.inOut' },
          '-=0.4'
        )
        .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
        .from('.hero-actions', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
        .from(
          '.hero-stat',
          { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 },
          '-=0.3'
        )

      gsap.from('.pillar-card', {
        scrollTrigger: { trigger: '.pillars-grid', start: 'top 75%' },
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
      })

      gsap.from('.deco-line', {
        scrollTrigger: { trigger: '.pillars-section', start: 'top 80%' },
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })

      document.querySelectorAll('.gold-bar').forEach((bar) => {
        gsap.from(bar, {
          scrollTrigger: { trigger: '.bench-section', start: 'top 75%' },
          width: 0,
          duration: 1.4,
          ease: 'power3.inOut',
          stagger: 0.18,
        })
      })

      gsap.from('.priv-card', {
        scrollTrigger: { trigger: '.priv-grid', start: 'top 75%' },
        y: 50,
        opacity: 0,
        stagger: 0.14,
        duration: 0.8,
      })

      gsap.from('.cta-diamond', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%' },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })

      gsap.from('.cta-text', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%' },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${cinzel.variable} ${cormorant.variable}`}
      style={{
        fontFamily: 'var(--font-cormorant)',
        background: '#07060F',
        color: '#F5EED8',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }

        :root {
          --gold: #C8A951;
          --gold-light: #E6CC7A;
          --ivory: #F5EED8;
          --dark: #07060F;
          --mid: #14121F;
          --cinzel: var(--font-cinzel), 'Cinzel Decorative', serif;
          --corm: var(--font-cormorant), 'Cormorant Garamond', serif;
        }

        .nav-wrap {
          position: sticky; top: 0; z-index: 100;
          background: rgba(7,6,15,0.96); backdrop-filter: blur(12px);
          border-bottom: 1px solid #C8A95130;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%; height: 70px;
        }
        .nav-logo {
          font-family: var(--cinzel); font-size: 1.05rem; font-weight: 900;
          letter-spacing: 0.12em; color: var(--gold); text-transform: uppercase;
        }
        .nav-links { display: flex; gap: 40px; align-items: center; }
        .nav-link {
          font-family: var(--corm); font-size: 1.05rem; letter-spacing: 0.1em;
          color: #F5EED880; transition: color 0.2s;
          font-style: italic;
        }
        .nav-link:hover { color: var(--gold); }
        .nav-cta {
          font-family: var(--cinzel); font-size: 0.58rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--dark); background: var(--gold);
          padding: 9px 22px; transition: background 0.2s;
        }
        .nav-cta:hover { background: var(--gold-light); }

        .hero-section {
          padding: 100px 6% 80px; text-align: center; position: relative;
          border-bottom: 1px solid #C8A95128;
        }
        .hero-ornament-top {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; margin-bottom: 36px;
        }
        .orn-line { flex: 1; max-width: 200px; height: 1px; background: var(--gold); }
        .orn-diamond {
          width: 8px; height: 8px; background: var(--gold);
          transform: rotate(45deg); flex-shrink: 0;
        }
        .orn-diamond-lg {
          width: 12px; height: 12px; border: 2px solid var(--gold);
          transform: rotate(45deg); flex-shrink: 0;
        }
        .hero-eyebrow {
          font-family: var(--cinzel); font-size: 0.58rem; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 28px;
        }
        .hero-title {
          font-family: var(--cinzel);
          font-size: clamp(36px, 6vw, 88px); font-weight: 900;
          letter-spacing: 0.08em; line-height: 1.1; color: var(--ivory);
          max-width: 900px; margin: 0 auto;
        }
        .hero-title-word { display: block; }
        .hero-ornament-mid {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin: 32px auto;
        }
        .orn-line-short { width: 60px; height: 1px; background: var(--gold); }
        .hero-subtitle {
          font-family: var(--corm); font-size: 1.3rem; font-style: italic;
          line-height: 1.8; color: #F5EED8AA; max-width: 580px; margin: 0 auto 40px;
        }
        .hero-actions {
          display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .btn-gold {
          font-family: var(--cinzel); font-size: 0.56rem; letter-spacing: 0.18em;
          text-transform: uppercase; background: var(--gold); color: var(--dark);
          padding: 14px 36px; transition: background 0.2s;
        }
        .btn-gold:hover { background: var(--gold-light); }
        .btn-outline-gold {
          font-family: var(--cinzel); font-size: 0.56rem; letter-spacing: 0.18em;
          text-transform: uppercase; background: transparent; color: var(--gold);
          padding: 13px 36px; border: 1px solid var(--gold);
          transition: background 0.2s, color 0.2s;
        }
        .btn-outline-gold:hover { background: var(--gold); color: var(--dark); }

        .hero-stats {
          display: flex; justify-content: center; gap: 64px; flex-wrap: wrap;
          border-top: 1px solid #C8A95128; padding-top: 40px;
        }
        .hero-stat { text-align: center; }
        .stat-number {
          font-family: var(--cinzel); font-size: clamp(28px, 4vw, 44px);
          font-weight: 900; color: var(--gold); letter-spacing: 0.04em; line-height: 1;
        }
        .stat-deco { width: 24px; height: 1px; background: var(--gold); margin: 8px auto; }
        .stat-label {
          font-family: var(--corm); font-size: 0.85rem; font-style: italic;
          letter-spacing: 0.1em; color: #F5EED870;
        }

        .pillars-section { padding: 100px 6%; max-width: 1440px; margin: 0 auto; }
        .section-eyebrow {
          text-align: center; font-family: var(--cinzel); font-size: 0.52rem;
          letter-spacing: 0.24em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
        }
        .section-heading {
          text-align: center;
          font-family: var(--cinzel); font-size: clamp(28px, 4.5vw, 56px);
          font-weight: 900; letter-spacing: 0.1em; color: var(--ivory); margin-bottom: 20px;
        }
        .deco-line {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin: 0 auto 60px;
        }

        .pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
        .pillar-card {
          background: var(--mid); border: 1px solid #C8A95120;
          padding: 48px 36px; text-align: center;
          transition: border-color 0.3s, transform 0.3s;
          position: relative; overflow: hidden;
        }
        .pillar-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(90deg, transparent, var(--gold), transparent);
          transform: scaleX(0); transition: transform 0.4s;
        }
        .pillar-card:hover { border-color: #C8A95140; transform: translateY(-4px); }
        .pillar-card:hover::before { transform: scaleX(1); }
        .pillar-icon {
          width: 56px; height: 56px; border: 1px solid var(--gold);
          transform: rotate(45deg); display: flex; align-items: center; justify-content: center;
          margin: 0 auto 28px; transition: background 0.3s;
        }
        .pillar-card:hover .pillar-icon { background: #C8A95115; }
        .pillar-icon-inner { transform: rotate(-45deg); color: var(--gold); font-size: 1.2rem; }
        .pillar-title {
          font-family: var(--cinzel); font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold);
          margin-bottom: 16px;
        }
        .pillar-body {
          font-family: var(--corm); font-size: 1.1rem; font-style: italic;
          line-height: 1.75; color: #F5EED880;
        }

        .bench-section {
          background: var(--mid); border-top: 1px solid #C8A95118;
          border-bottom: 1px solid #C8A95118; padding: 100px 6%;
        }
        .bench-inner { max-width: 900px; margin: 0 auto; }
        .bench-note {
          text-align: center; font-family: var(--corm); font-size: 0.95rem; font-style: italic;
          color: #F5EED850; margin-bottom: 56px;
        }
        .bench-row {
          display: grid; grid-template-columns: 1fr auto;
          gap: 20px; align-items: center;
          padding: 18px 0; border-bottom: 1px solid #C8A95115;
        }
        .bench-left { display: flex; flex-direction: column; gap: 10px; }
        .bench-name {
          font-family: var(--corm); font-size: 1.05rem; font-style: italic;
          color: #F5EED890; display: flex; align-items: center; gap: 12px;
        }
        .bench-name.best { color: var(--ivory); font-weight: 600; }
        .gold-crown {
          font-family: var(--cinzel); font-size: 0.48rem; letter-spacing: 0.12em;
          text-transform: uppercase; background: var(--gold); color: var(--dark);
          padding: 2px 7px;
        }
        .bench-track { height: 4px; background: #C8A95115; position: relative; overflow: hidden; }
        .gold-bar { height: 100%; position: absolute; left: 0; top: 0; }
        .gold-bar-best { background: linear-gradient(90deg, var(--gold), var(--gold-light)); }
        .gold-bar-rest { background: #C8A95140; }
        .bench-time {
          font-family: var(--cinzel); font-size: 1.1rem; font-weight: 700;
          letter-spacing: 0.08em; min-width: 60px; text-align: right;
        }
        .bench-time.best { color: var(--gold); }
        .bench-time.rest { color: #C8A95150; }

        .priv-section { padding: 100px 6%; }
        .priv-section-inner { max-width: 1440px; margin: 0 auto; }
        .priv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-top: 60px; }
        .priv-card {
          background: var(--mid); border: 1px solid #C8A95118;
          padding: 40px 32px;
          transition: border-color 0.3s, transform 0.25s;
        }
        .priv-card:hover { border-color: #C8A95138; transform: translateY(-3px); }
        .priv-card-diamond {
          width: 32px; height: 32px; border: 1px solid var(--gold);
          transform: rotate(45deg); margin-bottom: 28px;
          display: flex; align-items: center; justify-content: center;
        }
        .priv-card-diamond-fill {
          width: 12px; height: 12px; background: var(--gold); transform: rotate(0deg);
        }
        .priv-card-title {
          font-family: var(--cinzel); font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold);
          margin-bottom: 14px;
        }
        .priv-card-body {
          font-family: var(--corm); font-size: 1.05rem; font-style: italic;
          line-height: 1.78; color: #F5EED875;
        }

        .cta-section {
          background: linear-gradient(180deg, var(--dark) 0%, #0E0B1E 100%);
          padding: 120px 6%; text-align: center;
          border-top: 1px solid #C8A95120;
        }
        .cta-diamond {
          width: 20px; height: 20px; background: var(--gold);
          transform: rotate(45deg); margin: 0 auto 40px;
        }
        .cta-text {}
        .cta-heading {
          font-family: var(--cinzel);
          font-size: clamp(28px, 5vw, 64px); font-weight: 900;
          letter-spacing: 0.1em; color: var(--ivory);
          line-height: 1.2; margin-bottom: 16px;
        }
        .cta-sub {
          font-family: var(--corm); font-size: 1.2rem; font-style: italic;
          color: #F5EED865; margin-bottom: 48px; max-width: 500px; margin-left: auto; margin-right: auto;
        }
        .cta-actions { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }

        .footer {
          background: var(--mid); border-top: 1px solid #C8A95120;
          padding: 32px 6%; text-align: center;
        }
        .footer-logo {
          font-family: var(--cinzel); font-size: 0.9rem; font-weight: 900;
          letter-spacing: 0.14em; color: var(--gold); margin-bottom: 12px;
        }
        .footer-copy {
          font-family: var(--corm); font-size: 0.9rem; font-style: italic;
          color: #F5EED840; letter-spacing: 0.06em;
        }

        @media (max-width: 800px) {
          .nav-links { gap: 20px; }
          .hero-stats { gap: 36px; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav-wrap">
        <div className="nav-logo">OiPer</div>
        <div className="nav-links">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#performance" className="nav-link">
            Performance
          </a>
          <a href="#privacy" className="nav-link">
            Privacy
          </a>
          <a href="#download" className="nav-cta">
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-ornament-top">
          <div className="orn-line" />
          <div className="orn-diamond" />
          <div className="orn-diamond-lg" />
          <div className="orn-diamond" />
          <div className="orn-line" />
        </div>
        <div className="hero-eyebrow">The Art of Voice Transcription</div>
        <h1 className="hero-title">
          <span className="hero-title-word">Speak.</span>
          <span className="hero-title-word" style={{ color: '#C8A951' }}>
            Release.
          </span>
          <span className="hero-title-word">Transcribed.</span>
        </h1>
        <div className="hero-ornament-mid">
          <div className="orn-line-short" />
          <div className="orn-diamond" />
          <div className="orn-line-short" />
        </div>
        <p className="hero-subtitle">
          OiPer transforms your voice into text with native-code precision —
          entirely on your machine, with unmatched speed and absolute privacy.
        </p>
        <div className="hero-actions">
          <a href="#download" className="btn-gold">
            Begin Your Journey
          </a>
          <a href="#performance" className="btn-outline-gold">
            View Performance
          </a>
        </div>
        <div className="hero-stats">
          {[
            { n: '1.5s', label: 'Transcription Speed' },
            { n: '100%', label: 'Local Processing' },
            { n: '0ms', label: 'Cloud Dependency' },
            { n: '∞', label: 'Privacy Guarantee' },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="stat-number">{s.n}</div>
              <div className="stat-deco" />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <div id="features" className="pillars-section">
        <div className="section-eyebrow">The Three Pillars</div>
        <h2 className="section-heading">Excellence in Every Dimension</h2>
        <div className="deco-line">
          <div className="orn-line" style={{ maxWidth: '120px' }} />
          <div className="orn-diamond" />
          <div className="orn-diamond-lg" />
          <div className="orn-diamond" />
          <div className="orn-line" style={{ maxWidth: '120px' }} />
        </div>
        <div className="pillars-grid">
          {[
            {
              icon: '◈',
              title: 'User Experience',
              body: 'A single hotkey initiates recording. Release to transcribe. The result appears instantly in your active application — no interruptions, no friction.',
            },
            {
              icon: '⚡',
              title: 'Performance',
              body: 'Written in native code with GPU acceleration. 1.5 seconds for 30 seconds of audio. Engineered for speed beyond what cloud services can offer.',
            },
            {
              icon: '⊕',
              title: 'Privacy',
              body: 'Every transcription runs locally on your machine. Your voice, your data, your control. Cloud services are optional and always require your explicit consent.',
            },
          ].map((p) => (
            <div key={p.title} className="pillar-card">
              <div className="pillar-icon">
                <span className="pillar-icon-inner">{p.icon}</span>
              </div>
              <div className="pillar-title">{p.title}</div>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benchmark */}
      <section id="performance" className="bench-section">
        <div className="bench-inner">
          <div className="section-eyebrow">Performance Benchmark</div>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            Superior by Every Measure
          </h2>
          <div className="deco-line" style={{ marginBottom: '16px' }}>
            <div className="orn-line-short" />
            <div className="orn-diamond" />
            <div className="orn-line-short" />
          </div>
          <div className="bench-note">
            30 seconds of English audio — timed to transcription complete
          </div>
          {benchmarks.map((b) => (
            <div key={b.name} className="bench-row">
              <div className="bench-left">
                <div className={`bench-name ${b.best ? 'best' : ''}`}>
                  {b.best && <span className="gold-crown">Fastest</span>}
                  {b.name}
                </div>
                <div className="bench-track">
                  <div
                    className={`gold-bar ${b.best ? 'gold-bar-best' : 'gold-bar-rest'}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
              <span className={`bench-time ${b.best ? 'best' : 'rest'}`}>
                {b.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="priv-section">
        <div className="priv-section-inner">
          <div className="section-eyebrow">Privacy Architecture</div>
          <h2 className="section-heading">Your Data, Your Domain</h2>
          <div className="deco-line">
            <div className="orn-line" style={{ maxWidth: '100px' }} />
            <div className="orn-diamond" />
            <div className="orn-diamond-lg" />
            <div className="orn-diamond" />
            <div className="orn-line" style={{ maxWidth: '100px' }} />
          </div>
          <div className="priv-grid">
            {[
              {
                title: 'Local Transcription',
                body: 'Speech-to-text processing happens entirely on your machine using local AI models, with no data leaving your device.',
              },
              {
                title: 'On-Device Storage',
                body: 'Activity logs and audio recordings remain exclusively on your device. Nothing is transmitted without your knowledge.',
              },
              {
                title: 'Optional Services',
                body: 'Online text optimization is entirely optional, requires your own API key, and can be disabled at any moment.',
              },
              {
                title: 'Zero Analytics',
                body: 'OiPer collects no usage data, no crash reports, no behavioral analytics. Your workflow is entirely your own.',
              },
            ].map((item) => (
              <div key={item.title} className="priv-card">
                <div className="priv-card-diamond">
                  <div className="priv-card-diamond-fill" />
                </div>
                <div className="priv-card-title">{item.title}</div>
                <p className="priv-card-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="cta-section">
        <div className="cta-diamond" />
        <div className="cta-text">
          <h2 className="cta-heading">
            Command Your Voice.
            <br />
            Master Your Words.
          </h2>
          <p className="cta-sub">
            Begin your journey into effortless, private voice transcription.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn-gold">
              Download OiPer
            </a>
            <a href="#" className="btn-outline-gold">
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">OiPer Desktop</div>
        <p className="footer-copy">
          © 2026 — Crafted for Privacy. Built for Speed.
        </p>
      </footer>
    </div>
  )
}
