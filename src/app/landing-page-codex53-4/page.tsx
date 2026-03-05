'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Karla, Syne } from 'next/font/google'
import { useEffect, useRef } from 'react'

const display = Syne({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const body = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const pillars = [
  {
    title: 'Experience',
    text: 'Global hotkey workflow designed for uninterrupted thought.',
  },
  {
    title: 'Performance',
    text: 'Native speed with low latency and optional hardware acceleration.',
  },
  {
    title: 'Privacy',
    text: 'On-device default architecture with explicit online opt-in only.',
  },
]

const features = [
  {
    heading: 'Quick Recording & Transcription',
    items: [
      'Hold hotkey to record voice input immediately.',
      'Release to transcribe and inject text into active apps.',
      'Choose local or online cleanup after conversion.',
    ],
  },
  {
    heading: 'Flexible Runtime Control',
    items: [
      'Backend selection: auto detection, cpu, or gpu.',
      'Model choices for speed, quality, and footprint.',
      'Multiple LLM options for highly technical vocabulary.',
    ],
  },
]

const settings = [
  'Speech model library with simple downloads and quick switching.',
  'Provider settings for API key, custom base URL, and model names.',
  'Optimization mode routing between local and online pathways.',
  'Advanced LLM transcription for domain-heavy terminology.',
]

const benchmarks = [
  {
    name: 'OiPer Desktop',
    value: '1.5s',
    width: '100%',
    best: true,
  },
  {
    name: 'Lemonfox API',
    value: '3.27s',
    width: '46%',
    best: false,
  },
  {
    name: 'Python Faster-Whisper',
    value: '3.55s',
    width: '42%',
    best: false,
  },
  {
    name: 'OpenAI Whisper 1 API',
    value: '6.46s',
    width: '23%',
    best: false,
  },
] as const

export default function LandingPageCodex534() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

      intro
        .from('.hero-kicker', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-title', { y: 55, opacity: 0, duration: 0.95 }, '-=0.2')
        .from('.hero-copy', { y: 25, opacity: 0, duration: 0.8 }, '-=0.55')
        .from(
          '.float-card',
          { y: 22, opacity: 0, duration: 0.65, stagger: 0.12 },
          '-=0.45'
        )

      gsap.to('.float-card', {
        y: -14,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      })

      gsap.to('.halo-ring', {
        rotate: 360,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })

      gsap.utils.toArray<HTMLElement>('.glass-reveal').forEach((element) => {
        gsap.from(element, {
          y: 56,
          opacity: 0,
          duration: 0.95,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 83%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.bench-fill').forEach((fill) => {
        const width = fill.dataset.width ?? '0%'

        gsap.fromTo(
          fill,
          { width: '0%' },
          {
            width,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: fill,
              start: 'top 92%',
            },
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className={`${body.className} page`}>
      <div className="halo halo-a" />
      <div className="halo halo-b" />

      <header className="header">
        <span className={`${display.className} brand`}>OiPer Desktop</span>
        <span className="header-chip">privacy-first voice to text</span>
      </header>

      <section className="hero">
        <div className="hero-center">
          <div className="halo-ring" />
          <p className="hero-kicker">Fast dictation for focused desktop work</p>
          <h1 className={`${display.className} hero-title`}>
            Speak once, transcribe instantly, and stay in flow
          </h1>
          <p className="hero-copy">
            Hold a global hotkey to record and release to transcribe. OiPer
            injects text into your active app with local processing by default
            and optional online services when you choose.
          </p>
        </div>

        <article className="float-card card-a">
          <p>Default Mode</p>
          <strong>On-Device Transcription</strong>
        </article>

        <article className="float-card card-b">
          <p>Latency</p>
          <strong>1.5s / 30 sec audio</strong>
        </article>

        <article className="float-card card-c">
          <p>Backends</p>
          <strong>Auto, CPU, GPU</strong>
        </article>
      </section>

      <section className="pillars glass-reveal">
        {pillars.map((pillar) => (
          <article key={pillar.title}>
            <h2 className={`${display.className}`}>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="feature-lanes glass-reveal">
        {features.map((feature) => (
          <article key={feature.heading}>
            <h3 className={`${display.className}`}>{feature.heading}</h3>
            <ul>
              {feature.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="privacy glass-reveal">
        <article>
          <p>Local Processing</p>
          <h3 className={`${display.className}`}>
            Audio and logs remain on-device
          </h3>
          <span>
            OiPer keeps your transcription workflow private by running on your
            machine, preserving user control and reducing exposure.
          </span>
        </article>
        <article>
          <p>Online Services (Optional)</p>
          <h3 className={`${display.className}`}>
            Enable with your own API key
          </h3>
          <span>
            Configure base URL, model name, and key when needed, then disable
            online optimization any time from settings.
          </span>
        </article>
      </section>

      <section className="settings glass-reveal">
        <div className="settings-head">
          <p>Settings & Configuration</p>
          <h3 className={`${display.className}`}>
            Deep control, clear interface
          </h3>
        </div>
        <div className="settings-grid">
          {settings.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="bench glass-reveal">
        <div className="settings-head">
          <p>Performance</p>
          <h3 className={`${display.className}`}>
            Benchmark: 30 sec English audio
          </h3>
        </div>
        <div className="bench-grid">
          {benchmarks.map((item) => (
            <div
              className={`bench-row ${item.best ? 'best' : ''}`}
              key={item.name}
            >
              <div className="bench-meta">
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
              <div className="bench-track">
                <i className="bench-fill" data-width={item.width} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final glass-reveal">
        <p>
          OiPer delivers the fastest results while keeping user control and
          privacy central.
        </p>
        <h2 className={`${display.className}`}>
          Your voice workflow, tuned to your machine.
        </h2>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f0f8f6;
          color: #11232d;
        }

        .page {
          --ink: #11232d;
          --muted: #34515f;
          --glass: rgba(243, 253, 255, 0.58);
          min-height: 100vh;
          padding: 2.2rem 6vw 5rem;
          position: relative;
          overflow: hidden;
          display: grid;
          gap: 1.25rem;
          background:
            radial-gradient(
              circle at 12% 18%,
              rgba(131, 225, 205, 0.56),
              transparent 33%
            ),
            radial-gradient(
              circle at 89% 12%,
              rgba(255, 197, 136, 0.58),
              transparent 30%
            ),
            radial-gradient(
              circle at 60% 84%,
              rgba(141, 191, 255, 0.5),
              transparent 36%
            ),
            linear-gradient(160deg, #ecfbf6 0%, #ebf3ff 58%, #f7f5ef 100%);
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(47, 88, 109, 0.18) 0.5px,
            transparent 0.5px
          );
          background-size: 10px 10px;
          opacity: 0.28;
          pointer-events: none;
        }

        .halo {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(22px);
        }

        .halo-a {
          width: 320px;
          height: 320px;
          left: -140px;
          top: 160px;
          background: rgba(84, 220, 188, 0.55);
        }

        .halo-b {
          width: 380px;
          height: 380px;
          right: -180px;
          top: 300px;
          background: rgba(126, 177, 247, 0.42);
        }

        .header,
        .pillars article,
        .feature-lanes article,
        .privacy article,
        .settings,
        .bench,
        .final {
          backdrop-filter: blur(18px);
          background: var(--glass);
          border: 1px solid rgba(54, 111, 140, 0.28);
          box-shadow: 0 16px 34px rgba(45, 84, 102, 0.12);
        }

        .header {
          position: relative;
          z-index: 2;
          border-radius: 999px;
          padding: 0.58rem 0.95rem;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .brand {
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-size: 0.96rem;
        }

        .header-chip {
          text-transform: uppercase;
          letter-spacing: 0.11em;
          font-size: 0.74rem;
          color: #2f5060;
        }

        .hero {
          position: relative;
          z-index: 2;
          min-height: 520px;
          border-radius: 1.4rem;
          border: 1px solid rgba(54, 110, 136, 0.22);
          background: rgba(238, 250, 255, 0.4);
          display: grid;
          place-items: center;
          padding: 1.2rem;
          overflow: hidden;
        }

        .hero-center {
          position: relative;
          z-index: 2;
          max-width: 840px;
          text-align: center;
        }

        .halo-ring {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 999px;
          border: 1px solid rgba(55, 115, 146, 0.22);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .hero-kicker {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.77rem;
          color: #355466;
        }

        .hero-title {
          margin: 0.8rem 0 0;
          font-size: clamp(2.3rem, 7vw, 5.6rem);
          line-height: 0.88;
          letter-spacing: 0.01em;
        }

        .hero-copy {
          margin: 1rem auto 0;
          max-width: 690px;
          font-size: 1.1rem;
          color: var(--muted);
          line-height: 1.64;
        }

        .float-card {
          position: absolute;
          z-index: 2;
          border-radius: 0.95rem;
          border: 1px solid rgba(55, 109, 136, 0.24);
          background: rgba(255, 255, 255, 0.74);
          backdrop-filter: blur(16px);
          padding: 0.72rem 0.78rem;
          box-shadow: 0 13px 28px rgba(47, 88, 109, 0.14);
          max-width: 210px;
        }

        .float-card p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #3f6071;
          font-size: 0.68rem;
        }

        .float-card strong {
          margin-top: 0.24rem;
          display: block;
          font-size: 0.95rem;
          color: #163545;
          line-height: 1.28;
        }

        .card-a {
          left: 3.5%;
          top: 12%;
        }

        .card-b {
          right: 4%;
          top: 22%;
        }

        .card-c {
          right: 12%;
          bottom: 15%;
        }

        .pillars {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .pillars article {
          border-radius: 1.1rem;
          padding: 0.9rem;
        }

        .pillars h2 {
          margin: 0;
          font-size: 1.55rem;
        }

        .pillars p {
          margin: 0.48rem 0 0;
          color: #365567;
          line-height: 1.5;
        }

        .feature-lanes {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .feature-lanes article {
          border-radius: 1rem;
          padding: 0.95rem;
        }

        .feature-lanes h3 {
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          line-height: 0.93;
        }

        .feature-lanes ul {
          margin: 0.7rem 0 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.44rem;
          color: #355265;
          line-height: 1.48;
        }

        .privacy {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .privacy article {
          border-radius: 1rem;
          padding: 0.95rem;
        }

        .privacy p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.11em;
          font-size: 0.72rem;
          color: #406378;
        }

        .privacy h3 {
          margin: 0.55rem 0 0;
          font-size: clamp(1.55rem, 3.5vw, 2.2rem);
          line-height: 0.93;
        }

        .privacy span {
          margin-top: 0.6rem;
          display: block;
          color: #365567;
          line-height: 1.55;
        }

        .settings,
        .bench,
        .final {
          position: relative;
          z-index: 2;
          border-radius: 1.2rem;
          padding: 1rem;
        }

        .settings-head p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.11em;
          font-size: 0.72rem;
          color: #3f6073;
        }

        .settings-head h3 {
          margin: 0.46rem 0 0;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          line-height: 0.94;
        }

        .settings-grid {
          margin-top: 0.8rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
        }

        .settings-grid div {
          border-radius: 0.8rem;
          border: 1px solid rgba(56, 114, 140, 0.24);
          background: rgba(255, 255, 255, 0.62);
          padding: 0.7rem;
          color: #385669;
          line-height: 1.5;
        }

        .bench-grid {
          margin-top: 0.78rem;
          display: grid;
          gap: 0.58rem;
        }

        .bench-row {
          border-radius: 0.85rem;
          border: 1px solid rgba(57, 114, 142, 0.26);
          padding: 0.62rem;
          background: rgba(255, 255, 255, 0.62);
          display: grid;
          gap: 0.42rem;
        }

        .bench-row.best {
          border-color: rgba(34, 92, 118, 0.5);
          background: linear-gradient(
            94deg,
            rgba(255, 255, 255, 0.68),
            rgba(214, 245, 249, 0.84)
          );
        }

        .bench-meta {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.94rem;
          color: #1f3f4f;
        }

        .bench-meta strong {
          color: #12384a;
        }

        .bench-track {
          width: 100%;
          height: 8px;
          border-radius: 999px;
          background: rgba(31, 72, 92, 0.14);
          overflow: hidden;
        }

        .bench-fill {
          display: block;
          width: 0;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #2f8598, #7db3b4);
        }

        .final p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.72rem;
          color: #3b6072;
        }

        .final h2 {
          margin: 0.48rem 0 0;
          font-size: clamp(1.8rem, 4.6vw, 3.8rem);
          line-height: 0.9;
          max-width: 980px;
        }

        @media (max-width: 1080px) {
          .pillars,
          .feature-lanes,
          .privacy,
          .settings-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: 560px;
          }
        }

        @media (max-width: 760px) {
          .page {
            padding: 1.2rem 0.9rem 3rem;
          }

          .hero {
            min-height: 540px;
          }

          .float-card {
            position: static;
            max-width: none;
            width: 100%;
          }

          .hero {
            gap: 0.55rem;
            align-content: center;
          }

          .hero-center {
            margin-bottom: 0.5rem;
          }

          .halo-ring {
            width: 330px;
            height: 330px;
          }

          .header {
            border-radius: 1rem;
          }
        }
      `}</style>
    </main>
  )
}
