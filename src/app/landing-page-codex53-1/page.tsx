'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Orbitron, Source_Sans_3 } from 'next/font/google'
import { useEffect, useRef } from 'react'

const display = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
})

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const pillars = [
  {
    title: 'User Experience',
    text: 'Hold a global hotkey, talk naturally, release, and keep writing without opening another window.',
  },
  {
    title: 'Performance',
    text: 'Native implementation, low latency pipeline, and optional GPU acceleration for demanding workloads.',
  },
  {
    title: 'Privacy',
    text: 'Transcription, activity logs, and audio remain on your machine unless you explicitly enable online services.',
  },
]

const workflow = [
  'Press and hold your global hotkey to start recording instantly.',
  'Release the key to trigger immediate transcription.',
  'OiPer injects text directly into your active application.',
  'Choose local cleanup or optional online optimization.',
]

const settings = [
  'Speech model downloads and switching for different speed and quality profiles.',
  'Backend selection: auto, cpu-only, or gpu acceleration when available.',
  'Provider setup with custom base URL, API key, and preferred model name.',
  'Advanced LLM transcription modes for technical terminology and specialized language.',
]

const benchmark = [
  ['OiPer Desktop', '1.5s', true],
  ['Lemonfox API', '3.27s', false],
  ['Python Faster-Whisper', '3.55s', false],
  ['OpenAI Whisper 1 API', '6.46s', false],
] as const

export default function LandingPageCodex531() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

      intro
        .from('.hero-kicker', { y: 18, opacity: 0, duration: 0.6 })
        .from('.hero-title', { y: 50, opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.hero-copy', { y: 30, opacity: 0, duration: 0.7 }, '-=0.45')
        .from(
          '.hero-chip',
          { scale: 0.9, opacity: 0, duration: 0.45, stagger: 0.08 },
          '-=0.35'
        )
        .from('.hero-panel', { x: 45, opacity: 0, duration: 0.9 }, '-=0.55')

      gsap.to('.float-orb', {
        y: -16,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.95,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className={`${body.className} page`}>
      <div className="ambient ambient-a float-orb" />
      <div className="ambient ambient-b float-orb" />
      <div className="ambient ambient-c" />

      <header className="header">
        <span className={`${display.className} brand`}>OIPER DESKTOP</span>
        <span className="badge">Local-first voice workflow</span>
      </header>

      <section className="hero">
        <div className="hero-left">
          <p className="hero-kicker">Press hotkey. Speak. Release. Continue.</p>
          <h1 className={`${display.className} hero-title`}>
            Built for instant dictation with privacy at the core
          </h1>
          <p className="hero-copy">
            OiPer Desktop captures voice notes and transcribes in moments,
            injecting text into your current app so your hands never leave the
            keyboard. Everything runs locally by default.
          </p>
          <div className="chips">
            <span className="hero-chip">Native speed</span>
            <span className="hero-chip">Optional cloud cleanup</span>
            <span className="hero-chip">User-owned data path</span>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">30-second English audio benchmark</p>
          <div className="panel-table">
            {benchmark.map(([name, time, winner]) => (
              <div className={`panel-row ${winner ? 'winner' : ''}`} key={name}>
                <span>{name}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
          <p className="panel-note">
            Fastest result while maintaining high transcription quality and
            on-device processing.
          </p>
        </aside>
      </section>

      <section className="pillars reveal">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.title}>
            <h2 className={`${display.className} pillar-title`}>
              {pillar.title}
            </h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="workflow reveal">
        <div className="workflow-heading">
          <p className="section-kicker">Quick Recording & Transcription</p>
          <h2 className={`${display.className}`}>One muscle-memory loop</h2>
        </div>
        <ol>
          {workflow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="privacy reveal">
        <article>
          <p className="section-kicker">Privacy & Security</p>
          <h2 className={`${display.className}`}>Local processing first</h2>
          <p>
            Transcription runs directly on your machine. Audio and activity logs
            remain on-device, giving you full control over what is stored and
            where it goes.
          </p>
        </article>
        <article>
          <h3 className={`${display.className}`}>
            Online services are optional
          </h3>
          <p>
            Enable online optimization only when needed. Bring your own API key,
            choose the provider and model, and disable it at any time.
          </p>
        </article>
      </section>

      <section className="settings reveal">
        <div className="workflow-heading">
          <p className="section-kicker">Settings & Configuration</p>
          <h2 className={`${display.className}`}>Control panel depth</h2>
        </div>
        <div className="settings-grid">
          {settings.map((item) => (
            <div className="setting-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="cta reveal">
        <p>OiPer achieves elite speed while your data stays yours.</p>
        <h2 className={`${display.className}`}>
          Voice to text without surrendering privacy
        </h2>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #04070d;
        }

        .page {
          --bg: #04070d;
          --ink: #e7f9ff;
          --muted: #9dc7d8;
          --line: rgba(130, 206, 231, 0.25);
          --glow: #3ce7ff;
          min-height: 100vh;
          color: var(--ink);
          padding: 2.2rem 6vw 5rem;
          background:
            radial-gradient(
              circle at 12% 16%,
              rgba(60, 231, 255, 0.21),
              transparent 30%
            ),
            radial-gradient(
              circle at 86% 12%,
              rgba(249, 186, 85, 0.19),
              transparent 26%
            ),
            linear-gradient(165deg, #050912 8%, #071827 48%, #06101a 100%);
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 3.2rem;
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 52px 52px;
          opacity: 0.24;
        }

        .ambient {
          position: absolute;
          border-radius: 999px;
          filter: blur(12px);
          pointer-events: none;
        }

        .ambient-a {
          width: 220px;
          height: 220px;
          left: -60px;
          top: 190px;
          background: rgba(60, 231, 255, 0.25);
        }

        .ambient-b {
          width: 180px;
          height: 180px;
          right: 16%;
          top: 120px;
          background: rgba(249, 186, 85, 0.23);
        }

        .ambient-c {
          width: 320px;
          height: 320px;
          right: -120px;
          bottom: -80px;
          background: rgba(17, 80, 110, 0.45);
          filter: blur(45px);
        }

        .header {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .brand {
          letter-spacing: 0.18em;
          font-size: 0.94rem;
          color: #a8f2ff;
        }

        .badge {
          border: 1px solid rgba(169, 236, 255, 0.45);
          background: rgba(4, 26, 40, 0.82);
          color: #d4f5ff;
          border-radius: 999px;
          padding: 0.58rem 1rem;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 2rem;
          align-items: stretch;
        }

        .hero-left {
          max-width: 760px;
          padding-right: 1rem;
        }

        .hero-kicker {
          margin: 0 0 0.9rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #85ccdf;
          font-size: 0.8rem;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 4.4rem);
          line-height: 0.94;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          max-width: 760px;
        }

        .hero-copy {
          margin: 1.3rem 0 1.4rem;
          max-width: 620px;
          color: var(--muted);
          font-size: 1.1rem;
          line-height: 1.65;
        }

        .chips {
          display: flex;
          gap: 0.7rem;
          flex-wrap: wrap;
        }

        .hero-chip {
          border-radius: 999px;
          padding: 0.55rem 0.95rem;
          border: 1px solid rgba(123, 216, 244, 0.45);
          background: rgba(8, 28, 42, 0.8);
          font-size: 0.84rem;
          color: #c9f3ff;
        }

        .hero-panel {
          border-radius: 1.4rem;
          padding: 1.2rem;
          border: 1px solid rgba(120, 211, 240, 0.4);
          background: linear-gradient(
            150deg,
            rgba(8, 29, 44, 0.95),
            rgba(5, 15, 24, 0.95)
          );
          box-shadow: 0 26px 58px rgba(1, 10, 18, 0.5);
          align-self: end;
        }

        .panel-label {
          margin: 0;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #8fc2d3;
        }

        .panel-table {
          margin-top: 0.95rem;
          display: grid;
          gap: 0.55rem;
        }

        .panel-row {
          border-radius: 0.9rem;
          padding: 0.72rem 0.86rem;
          border: 1px solid rgba(117, 187, 211, 0.25);
          color: #b7deeb;
          font-size: 0.93rem;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          background: rgba(9, 26, 39, 0.7);
        }

        .panel-row strong {
          color: #dbfbff;
        }

        .winner {
          border-color: rgba(60, 231, 255, 0.65);
          background: linear-gradient(
            90deg,
            rgba(0, 77, 96, 0.55),
            rgba(11, 41, 58, 0.85)
          );
        }

        .winner strong {
          color: var(--glow);
        }

        .panel-note {
          margin: 1rem 0 0;
          color: #8cb9c8;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .pillars {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .pillar-card {
          border: 1px solid rgba(130, 206, 231, 0.35);
          background: rgba(6, 20, 33, 0.82);
          border-radius: 1.2rem;
          padding: 1rem;
          box-shadow: inset 0 0 0 1px rgba(99, 179, 203, 0.08);
        }

        .pillar-title {
          margin: 0 0 0.6rem;
          font-size: 1.25rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .pillar-card p {
          margin: 0;
          color: #9ec5d4;
          line-height: 1.58;
        }

        .workflow {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(126, 198, 221, 0.32);
          border-radius: 1.5rem;
          padding: 1.35rem;
          background: rgba(5, 18, 31, 0.85);
          display: grid;
          gap: 1rem;
          grid-template-columns: 0.82fr 1.18fr;
          align-items: start;
        }

        .workflow-heading h2 {
          margin: 0.35rem 0 0;
          font-size: clamp(1.5rem, 3vw, 2.3rem);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .section-kicker {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-size: 0.76rem;
          color: #82c0d3;
        }

        .workflow ol {
          margin: 0;
          padding-left: 1.1rem;
          display: grid;
          gap: 0.82rem;
          color: #b6d9e6;
        }

        .workflow li {
          line-height: 1.5;
        }

        .privacy {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .privacy article {
          border-radius: 1.2rem;
          border: 1px solid rgba(124, 188, 210, 0.32);
          background: rgba(7, 22, 35, 0.85);
          padding: 1rem;
        }

        .privacy h2,
        .privacy h3 {
          margin: 0.42rem 0 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: clamp(1.25rem, 2.4vw, 1.75rem);
        }

        .privacy p {
          margin: 0;
          color: #a6cedc;
          line-height: 1.6;
        }

        .settings {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(116, 184, 207, 0.34);
          border-radius: 1.5rem;
          background: rgba(5, 18, 30, 0.85);
          padding: 1.25rem;
          display: grid;
          gap: 1rem;
        }

        .settings-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .setting-card {
          border-radius: 1rem;
          border: 1px solid rgba(117, 185, 210, 0.32);
          background: rgba(8, 27, 40, 0.82);
          color: #aed0dd;
          line-height: 1.54;
          padding: 0.95rem;
        }

        .cta {
          position: relative;
          z-index: 1;
          border-radius: 1.5rem;
          border: 1px solid rgba(128, 203, 228, 0.45);
          padding: 1.45rem;
          background: linear-gradient(
            90deg,
            rgba(8, 31, 46, 0.95),
            rgba(8, 56, 73, 0.75)
          );
        }

        .cta p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #92cbde;
          font-size: 0.75rem;
        }

        .cta h2 {
          margin: 0.7rem 0 0;
          text-transform: uppercase;
          font-size: clamp(1.5rem, 4vw, 2.7rem);
          line-height: 1.04;
        }

        @media (max-width: 1080px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .hero-left {
            max-width: none;
            padding-right: 0;
          }

          .hero-panel {
            max-width: 700px;
          }

          .pillars,
          .privacy,
          .settings-grid {
            grid-template-columns: 1fr;
          }

          .workflow {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 1.5rem 1rem 3.2rem;
            gap: 2.4rem;
          }

          .hero-title {
            font-size: clamp(2rem, 11vw, 3.3rem);
          }

          .badge {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </main>
  )
}
