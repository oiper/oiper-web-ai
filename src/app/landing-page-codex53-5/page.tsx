'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bebas_Neue, IBM_Plex_Sans } from 'next/font/google'
import { useEffect, useRef } from 'react'

const display = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
})

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const pillars = [
  {
    number: '01',
    title: 'User Experience',
    copy: 'Single hotkey motion keeps dictation immediate and intuitive.',
  },
  {
    number: '02',
    title: 'Performance',
    copy: 'Native architecture delivers low latency and tight resource usage.',
  },
  {
    number: '03',
    title: 'Privacy',
    copy: 'Local-first processing means your speech stays under your control.',
  },
]

const flow = [
  'Hold global hotkey to start recording',
  'Release key to trigger immediate transcription',
  'Insert output directly into active app',
  'Apply local or online text optimization',
]

const settings = [
  {
    title: 'Speech & Model Management',
    points: [
      'Choose speech models by size and capability',
      'Download and switch models quickly',
    ],
  },
  {
    title: 'Backend Preferences',
    points: [
      'Auto detection for best available runtime',
      'Dedicated CPU-only mode',
      'GPU acceleration where supported',
    ],
  },
  {
    title: 'Online Provider Configuration',
    points: [
      'Custom base URL support',
      'API key management',
      'Model name configuration',
      'Local or online text optimization control',
    ],
  },
  {
    title: 'Advanced Accuracy',
    points: [
      'Route transcripts through LLMs when needed',
      'Useful for technical vocabulary and specialized content',
      'Examples include compact models like Gemini 2.5 Flash Lite',
    ],
  },
]

const benchmark = [
  {
    name: 'OiPer Desktop',
    time: '1.5s',
    width: '100%',
    best: true,
  },
  {
    name: 'Lemonfox API',
    time: '3.27s',
    width: '46%',
    best: false,
  },
  {
    name: 'Python Faster-Whisper',
    time: '3.55s',
    width: '42%',
    best: false,
  },
  {
    name: 'OpenAI Whisper 1 API',
    time: '6.46s',
    width: '23%',
    best: false,
  },
] as const

export default function LandingPageCodex535() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

      intro
        .from('.intro', { y: 30, opacity: 0, duration: 0.75, stagger: 0.1 })
        .from('.hero-main', { x: -60, opacity: 0, duration: 0.95 }, '-=0.5')
        .from('.hero-side', { x: 60, opacity: 0, duration: 0.95 }, '-=0.82')

      gsap.to('.ticker-track', {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      gsap.utils.toArray<HTMLElement>('.panel').forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.bench-fill').forEach((bar) => {
        const width = bar.dataset.width ?? '0%'

        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className={`${body.className} page`}>
      <header className="header intro">
        <span className={`${display.className} brand`}>OIPER DESKTOP</span>
        <span className="badge">VOICE-TO-TEXT / PRIVACY-FIRST</span>
      </header>

      <section className="hero intro">
        <article className="hero-main">
          <p>Built for speed and user control</p>
          <h1 className={`${display.className}`}>
            HOLD. SPEAK. RELEASE. TEXT APPEARS.
          </h1>
        </article>
        <article className="hero-side">
          <h2 className={`${display.className}`}>
            Desktop dictation without cloud lock-in
          </h2>
          <p>
            OiPer transcribes locally by default and injects output into your
            active application. Online services are optional and fully
            user-configured.
          </p>
          <div className="stats">
            <div>
              <strong>1.5s</strong>
              <span>OiPer benchmark</span>
            </div>
            <div>
              <strong>Auto / CPU / GPU</strong>
              <span>backend control</span>
            </div>
          </div>
        </article>
      </section>

      <section className="ticker intro">
        <div className="ticker-track">
          <span>LOCAL TRANSCRIPTION</span>
          <span>GLOBAL HOTKEY FLOW</span>
          <span>OPTIONAL ONLINE OPTIMIZATION</span>
          <span>NATIVE PERFORMANCE</span>
          <span>LOCAL TRANSCRIPTION</span>
          <span>GLOBAL HOTKEY FLOW</span>
          <span>OPTIONAL ONLINE OPTIMIZATION</span>
          <span>NATIVE PERFORMANCE</span>
        </div>
      </section>

      <section className="pillars panel">
        {pillars.map((pillar) => (
          <article key={pillar.title}>
            <span>{pillar.number}</span>
            <h2 className={`${display.className}`}>{pillar.title}</h2>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </section>

      <section className="flow panel">
        <h2 className={`${display.className}`}>
          QUICK RECORDING & TRANSCRIPTION
        </h2>
        <div className="flow-grid">
          {flow.map((step) => (
            <article key={step}>{step}</article>
          ))}
        </div>
      </section>

      <section className="privacy panel">
        <article>
          <p>Local Processing</p>
          <h3 className={`${display.className}`}>
            Your audio and logs stay on-device
          </h3>
          <span>
            Transcription runs entirely on your machine by default for full data
            ownership and predictable privacy boundaries.
          </span>
        </article>
        <article>
          <p>Online Services (Optional)</p>
          <h3 className={`${display.className}`}>
            Enable only when you choose
          </h3>
          <span>
            Add API key, base URL, and model only if online optimization is
            needed. Disable the feature at any time.
          </span>
        </article>
      </section>

      <section className="settings panel">
        <h2 className={`${display.className}`}>SETTINGS & CONFIGURATION</h2>
        <div className="settings-grid">
          {settings.map((section) => (
            <article key={section.title}>
              <h3 className={`${display.className}`}>{section.title}</h3>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bench panel">
        <h2 className={`${display.className}`}>
          PERFORMANCE // 30 SEC ENGLISH AUDIO
        </h2>
        <div className="bench-grid">
          {benchmark.map((row) => (
            <div
              className={`bench-row ${row.best ? 'best' : ''}`}
              key={row.name}
            >
              <div className="bench-head">
                <span>{row.name}</span>
                <strong>{row.time}</strong>
              </div>
              <div className="bench-track">
                <i className="bench-fill" data-width={row.width} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final panel">
        <p>
          OiPer achieves the fastest transcription while preserving privacy and
          user-level control over every processing path.
        </p>
        <h2 className={`${display.className}`}>
          SPEED THAT RESPECTS YOUR DATA.
        </h2>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f6f0e6;
          color: #111214;
        }

        .page {
          --paper: #f6f0e6;
          --ink: #111214;
          --accent: #ff5f10;
          --alt: #008f83;
          min-height: 100vh;
          padding: 1.2rem 4.5vw 3.6rem;
          display: grid;
          gap: 0.85rem;
          background:
            linear-gradient(
              112deg,
              rgba(255, 220, 188, 0.66) 0%,
              transparent 38%
            ),
            linear-gradient(
              250deg,
              rgba(141, 211, 215, 0.5) 0%,
              transparent 35%
            ),
            var(--paper);
        }

        .header,
        .hero,
        .ticker,
        .pillars,
        .flow,
        .privacy,
        .settings,
        .bench,
        .final {
          border: 2px solid #111214;
          background: #fefbf3;
          position: relative;
          overflow: hidden;
        }

        .header {
          padding: 0.6rem 0.72rem;
          display: flex;
          justify-content: space-between;
          gap: 0.9rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .brand {
          font-size: 1.5rem;
          letter-spacing: 0.08em;
          line-height: 0.9;
        }

        .badge {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.11em;
          font-weight: 700;
          border: 2px solid #111214;
          padding: 0.25rem 0.45rem;
          background: #ffde5b;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
        }

        .hero-main,
        .hero-side {
          padding: 0.9rem;
        }

        .hero-main {
          border-right: 2px solid #111214;
          background: #111214;
          color: #f9f5eb;
        }

        .hero-main p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          font-size: 0.72rem;
          color: #f0b18f;
        }

        .hero-main h1 {
          margin: 0.65rem 0 0;
          font-size: clamp(2.5rem, 8.4vw, 6.3rem);
          line-height: 0.8;
          letter-spacing: 0.03em;
        }

        .hero-side {
          background: #f5efe2;
          display: grid;
          gap: 0.62rem;
          align-content: start;
        }

        .hero-side h2 {
          margin: 0;
          font-size: clamp(1.9rem, 5vw, 3.3rem);
          line-height: 0.85;
        }

        .hero-side p {
          margin: 0;
          line-height: 1.56;
          color: #2b2d32;
        }

        .stats {
          display: grid;
          gap: 0.48rem;
        }

        .stats div {
          border: 2px solid #111214;
          padding: 0.45rem;
          background: #fff9ec;
        }

        .stats strong {
          display: block;
          font-size: 1rem;
          line-height: 1.2;
        }

        .stats span {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #3f4146;
          margin-top: 0.18rem;
        }

        .ticker {
          white-space: nowrap;
          background: #111214;
          color: #fef9ef;
          overflow: hidden;
        }

        .ticker-track {
          display: inline-flex;
          min-width: 200%;
          gap: 2rem;
          padding: 0.62rem 0;
          font-size: 0.8rem;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .ticker-track span {
          color: #ffde5b;
        }

        .pillars {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pillars article {
          padding: 0.85rem;
          border-right: 2px solid #111214;
          background: #fffaf0;
        }

        .pillars article:last-child {
          border-right: none;
        }

        .pillars span {
          display: inline-block;
          min-width: 42px;
          text-align: center;
          border: 2px solid #111214;
          padding: 0.1rem 0.35rem;
          font-size: 0.8rem;
          font-weight: 700;
          background: #b8e5df;
        }

        .pillars h2 {
          margin: 0.5rem 0 0;
          font-size: 2.1rem;
          line-height: 0.85;
        }

        .pillars p {
          margin: 0.45rem 0 0;
          color: #2f3136;
          line-height: 1.48;
        }

        .flow,
        .settings,
        .bench,
        .final {
          padding: 0.8rem;
        }

        .flow h2,
        .settings h2,
        .bench h2,
        .final h2,
        .privacy h3,
        .settings h3 {
          margin: 0;
          font-size: clamp(1.9rem, 4.8vw, 3.3rem);
          line-height: 0.84;
        }

        .flow-grid {
          margin-top: 0.65rem;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.55rem;
        }

        .flow-grid article {
          border: 2px solid #111214;
          background: #fff;
          padding: 0.58rem;
          line-height: 1.45;
          min-height: 84px;
          display: grid;
          align-content: center;
          font-size: 0.9rem;
        }

        .privacy {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .privacy article {
          padding: 0.82rem;
          border-right: 2px solid #111214;
        }

        .privacy article:last-child {
          border-right: none;
          background: #eaf8f3;
        }

        .privacy p {
          margin: 0;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 0.72rem;
        }

        .privacy h3 {
          margin-top: 0.45rem;
        }

        .privacy span {
          margin-top: 0.55rem;
          display: block;
          line-height: 1.52;
          color: #2d2f34;
        }

        .settings-grid {
          margin-top: 0.65rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.55rem;
        }

        .settings-grid article {
          border: 2px solid #111214;
          padding: 0.62rem;
          background: #fff9ec;
        }

        .settings h3 {
          font-size: clamp(1.5rem, 3.6vw, 2.4rem);
        }

        .settings ul {
          margin: 0.55rem 0 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.34rem;
          line-height: 1.44;
        }

        .bench-grid {
          margin-top: 0.65rem;
          display: grid;
          gap: 0.52rem;
        }

        .bench-row {
          border: 2px solid #111214;
          background: #fff9ec;
          padding: 0.52rem;
        }

        .best {
          background: linear-gradient(90deg, #fff3c7, #e4fff7);
        }

        .bench-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: baseline;
          font-size: 0.93rem;
        }

        .bench-head strong {
          font-size: 1rem;
        }

        .bench-track {
          margin-top: 0.34rem;
          height: 8px;
          border-radius: 999px;
          background: rgba(18, 20, 25, 0.18);
          overflow: hidden;
        }

        .bench-fill {
          display: block;
          width: 0;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #ff5f10, #008f83);
        }

        .final {
          background: #111214;
          color: #fff7e8;
        }

        .final p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
          color: #f6be98;
        }

        .final h2 {
          margin-top: 0.52rem;
          font-size: clamp(2rem, 5.7vw, 4.6rem);
          max-width: 980px;
        }

        @media (max-width: 1100px) {
          .hero,
          .pillars,
          .privacy,
          .flow-grid,
          .settings-grid {
            grid-template-columns: 1fr;
          }

          .hero-main,
          .privacy article,
          .pillars article {
            border-right: none;
            border-bottom: 2px solid #111214;
          }

          .privacy article:last-child,
          .pillars article:last-child,
          .hero-side {
            border-bottom: none;
          }
        }

        @media (max-width: 720px) {
          .page {
            padding: 0.9rem 0.65rem 2.8rem;
          }

          .brand {
            font-size: 1.28rem;
          }

          .hero-main h1 {
            font-size: clamp(2.4rem, 17vw, 4rem);
          }
        }
      `}</style>
    </main>
  )
}
