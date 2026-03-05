'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Playfair_Display, Work_Sans } from 'next/font/google'
import { useEffect, useRef } from 'react'

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700', '800', '900'],
})

const body = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const pillars = [
  {
    title: 'User Experience',
    copy: 'Hold to record, release to transcribe, and keep momentum inside your current app.',
  },
  {
    title: 'Performance',
    copy: 'Native code and hardware-aware backends deliver very low latency with minimal overhead.',
  },
  {
    title: 'Privacy',
    copy: 'Your speech data stays local by default and only leaves your device when you choose it.',
  },
]

const storyBlocks = [
  {
    title: 'Quick Recording & Transcription',
    points: [
      'Global hotkey activation with press-and-release workflow.',
      'Instant text injection directly into active applications.',
      'Optional local or online text cleanup after transcription.',
    ],
  },
  {
    title: 'Privacy-First Architecture',
    points: [
      'Transcription runs locally on your machine.',
      'Audio and logs stay on-device by default.',
      'Nothing is sent online without explicit consent.',
    ],
  },
  {
    title: 'Flexibility & Control',
    points: [
      'Choose local or online optimization per preference.',
      'Select backend mode: auto, cpu, or gpu.',
      'Use multiple LLMs for specialized vocabulary and precision.',
    ],
  },
]

const benchmarkRows = [
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

const settings = [
  'Speech model downloads with support for different sizes and runtimes.',
  'Backend preference controls for auto detection, cpu, and gpu.',
  'Provider configuration with custom base URL, API key, and model naming.',
  'Text optimization path selection: local correction or online enhancement.',
  'Advanced LLM transcription options for technical and domain-heavy language.',
]

export default function LandingPageCodex532() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

      intro
        .from('.masthead', { y: 24, opacity: 0, duration: 0.65 })
        .from(
          '.lead-reveal',
          { y: 45, opacity: 0, duration: 0.95, stagger: 0.12 },
          '-=0.35'
        )
        .from('.lead-panel', { x: 42, opacity: 0, duration: 0.8 }, '-=0.65')

      gsap.utils.toArray<HTMLElement>('.story-block').forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.bar-fill').forEach((bar) => {
        const width = bar.dataset.width ?? '0%'

        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width,
            duration: 1.05,
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
      <header className="masthead">
        <span className={`${display.className} mark`}>OIPER DESKTOP</span>
        <span className="edition">Issue: Fast Private Dictation</span>
      </header>

      <section className="lead">
        <div className="lead-copy">
          <p className="lead-reveal eyebrow">
            Privacy-first desktop voice to text
          </p>
          <h1 className={`${display.className} lead-reveal title`}>
            The fastest way to speak and keep writing
          </h1>
          <p className="lead-reveal description">
            OiPer lets you hold a global hotkey to record, release to
            transcribe, and instantly inject text into the application you are
            already using. Built for speed, crafted for control.
          </p>
        </div>
        <aside className="lead-panel">
          <h2 className={`${display.className}`}>Core Philosophy</h2>
          <div className="panel-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="narrative story-block">
        <div className="section-head">
          <p>Feature Journal</p>
          <h2 className={`${display.className}`}>
            Built for real daily workflow
          </h2>
        </div>
        <div className="story-grid">
          {storyBlocks.map((story) => (
            <article className="story-card" key={story.title}>
              <h3 className={`${display.className}`}>{story.title}</h3>
              <ul>
                {story.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy story-block">
        <article>
          <p>Local Processing</p>
          <h3 className={`${display.className}`}>Your audio stays with you</h3>
          <p>
            Transcription executes on-device by default, with local logs and
            local storage, so your voice workflow remains private and directly
            under your control.
          </p>
        </article>
        <article>
          <p>Online Services (Optional)</p>
          <h3 className={`${display.className}`}>
            Enabled only with your API key
          </h3>
          <p>
            Online optimization is optional and reversible at any moment.
            Configure your provider, base URL, model, and key only when you
            decide to use it.
          </p>
        </article>
      </section>

      <section className="settings story-block">
        <div className="section-head">
          <p>Settings & Configuration</p>
          <h2 className={`${display.className}`}>
            Precision control without clutter
          </h2>
        </div>
        <div className="settings-list">
          {settings.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="bench story-block">
        <div className="section-head">
          <p>Performance</p>
          <h2 className={`${display.className}`}>
            Benchmark: 30-second English audio
          </h2>
        </div>
        <div className="bench-grid">
          {benchmarkRows.map((row) => (
            <div
              className={`bench-row ${row.best ? 'best' : ''}`}
              key={row.name}
            >
              <div className="bench-meta">
                <span>{row.name}</span>
                <strong>{row.time}</strong>
              </div>
              <div className="bar-shell">
                <span className="bar-fill" data-width={row.width} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="closing story-block">
        <p>
          OiPer achieves the fastest transcription while maintaining quality and
          keeping data on-device.
        </p>
        <h2 className={`${display.className}`}>
          Voice in. Text out. Privacy intact.
        </h2>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f7f2e8;
          color: #1f2023;
        }

        .page {
          --paper: #f7f2e8;
          --ink: #1f2023;
          --muted: #4e4e53;
          --line: rgba(34, 34, 38, 0.16);
          min-height: 100vh;
          padding: 2.2rem 6vw 5rem;
          display: grid;
          gap: 3rem;
          background:
            radial-gradient(
              circle at 14% 12%,
              rgba(255, 242, 217, 0.95),
              transparent 34%
            ),
            radial-gradient(
              circle at 85% 0%,
              rgba(211, 234, 241, 0.62),
              transparent 32%
            ),
            var(--paper);
          position: relative;
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: linear-gradient(var(--line) 1px, transparent 1px);
          background-size: 100% 44px;
          opacity: 0.25;
        }

        .masthead {
          position: relative;
          z-index: 1;
          border-top: 2px solid #1f2023;
          border-bottom: 1px solid #1f2023;
          padding: 0.85rem 0;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .mark {
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .edition {
          font-size: 0.86rem;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: #57575c;
        }

        .lead {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 2.2rem;
          align-items: start;
        }

        .eyebrow {
          margin: 0;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.78rem;
          color: #6a5850;
        }

        .title {
          margin: 0.85rem 0 0;
          font-size: clamp(2.3rem, 6.2vw, 5.2rem);
          line-height: 0.93;
        }

        .description {
          margin: 1.2rem 0 0;
          max-width: 640px;
          color: var(--muted);
          font-size: 1.07rem;
          line-height: 1.7;
        }

        .lead-panel {
          border: 1px solid #2d2e33;
          border-radius: 1rem;
          padding: 1.1rem;
          background: rgba(255, 251, 244, 0.8);
          box-shadow: 0 20px 36px rgba(70, 61, 43, 0.12);
        }

        .lead-panel h2 {
          margin: 0;
          font-size: 1.9rem;
        }

        .panel-grid {
          margin-top: 1rem;
          display: grid;
          gap: 0.9rem;
        }

        .panel-grid article {
          border-top: 1px dashed rgba(36, 37, 43, 0.32);
          padding-top: 0.7rem;
        }

        .panel-grid h3 {
          margin: 0;
          font-size: 1.06rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .panel-grid p {
          margin: 0.42rem 0 0;
          color: #4d4d53;
          line-height: 1.54;
        }

        .narrative,
        .settings,
        .bench {
          position: relative;
          z-index: 1;
          border: 1px solid #2b2c30;
          border-radius: 1.2rem;
          background: rgba(255, 252, 246, 0.78);
          padding: 1.2rem;
        }

        .section-head p {
          margin: 0;
          font-size: 0.76rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #706359;
        }

        .section-head h2 {
          margin: 0.45rem 0 0;
          font-size: clamp(1.6rem, 3.4vw, 2.4rem);
          line-height: 1.06;
        }

        .story-grid {
          margin-top: 1rem;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.95rem;
        }

        .story-card {
          background: #fffaf2;
          border: 1px solid #cebeab;
          border-radius: 0.9rem;
          padding: 0.95rem;
        }

        .story-card h3 {
          margin: 0;
          font-size: 1.35rem;
        }

        .story-card ul {
          margin: 0.7rem 0 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.45rem;
          color: #4d4d53;
          line-height: 1.52;
        }

        .privacy {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .privacy article {
          border: 1px solid #2f3035;
          border-radius: 1.1rem;
          background: rgba(255, 251, 245, 0.86);
          padding: 1rem;
        }

        .privacy article > p {
          margin: 0;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b5c52;
        }

        .privacy h3 {
          margin: 0.5rem 0 0.62rem;
          font-size: clamp(1.5rem, 3vw, 2rem);
          line-height: 1.05;
        }

        .privacy article > :last-child {
          margin: 0;
          color: #4f5056;
          line-height: 1.6;
        }

        .settings-list {
          margin-top: 1rem;
          display: grid;
          gap: 0.6rem;
        }

        .settings-list div {
          border: 1px solid #c7b7a3;
          border-radius: 0.85rem;
          padding: 0.78rem 0.88rem;
          line-height: 1.5;
          color: #4e4e53;
          background: #fffaf2;
        }

        .bench-grid {
          margin-top: 1rem;
          display: grid;
          gap: 0.75rem;
        }

        .bench-row {
          border: 1px solid #ccbaa5;
          border-radius: 0.95rem;
          padding: 0.7rem;
          background: #fffaf2;
          display: grid;
          gap: 0.55rem;
        }

        .bench-row.best {
          border-color: #253a47;
          background: linear-gradient(92deg, #f6eedf, #f1f8ff);
        }

        .bench-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          font-size: 0.96rem;
        }

        .bench-meta strong {
          font-size: 1.08rem;
        }

        .bar-shell {
          width: 100%;
          height: 9px;
          border-radius: 999px;
          background: rgba(70, 71, 77, 0.14);
          overflow: hidden;
        }

        .bar-fill {
          display: block;
          width: 0;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2f4f5d, #7ca7b6);
        }

        .closing {
          position: relative;
          z-index: 1;
          border-top: 2px solid #26272b;
          border-bottom: 1px solid #26272b;
          padding: 1.2rem 0;
        }

        .closing p {
          margin: 0;
          color: #5a5a60;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.74rem;
        }

        .closing h2 {
          margin: 0.6rem 0 0;
          font-size: clamp(1.8rem, 5vw, 3.8rem);
          line-height: 0.95;
          max-width: 980px;
        }

        @media (max-width: 1120px) {
          .lead {
            grid-template-columns: 1fr;
          }

          .story-grid,
          .privacy {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 1.4rem 1rem 3.6rem;
            gap: 2.2rem;
          }

          .mark {
            font-size: 0.95rem;
          }

          .title {
            font-size: clamp(2.2rem, 12vw, 3.7rem);
          }
        }
      `}</style>
    </main>
  )
}
