'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bebas_Neue, JetBrains_Mono } from 'next/font/google'
import { useEffect, useRef } from 'react'

const display = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const pipeline = [
  {
    title: 'INPUT',
    body: 'Hold global hotkey and record instantly.',
  },
  {
    title: 'TRANSCRIBE',
    body: 'Release key and execute low-latency local speech pipeline.',
  },
  {
    title: 'INJECT',
    body: 'Insert text into the currently active desktop application.',
  },
  {
    title: 'OPTIMIZE',
    body: 'Apply local cleanup or optional online refinement.',
  },
]

const modules = [
  {
    label: 'MODULE 01',
    title: 'Quick Recording & Transcription',
    points: [
      'Global press-and-release dictation flow',
      'Instant text injection into active apps',
      'Optional local or online text cleanup',
    ],
  },
  {
    label: 'MODULE 02',
    title: 'Privacy-First Architecture',
    points: [
      'Transcription runs locally on your machine',
      'Audio and activity logs stay on-device',
      'No outbound data without explicit choice',
    ],
  },
  {
    label: 'MODULE 03',
    title: 'Flexibility & Control',
    points: [
      'Local or online optimization paths',
      'Backend preference: auto, cpu, gpu',
      'Multiple LLM options for extra accuracy',
    ],
  },
]

const settings = [
  'speech.model = selectable; downloadable; switchable',
  'backend.mode = auto | cpu | gpu',
  'provider.base_url = custom',
  'provider.api_key = user_managed',
  'provider.model_name = configurable',
  'optimization.route = local | online',
  'advanced.llm_transcription = enabled_for_technical_terms',
]

const benchmark = [
  ['OiPer Desktop', '1.5s'],
  ['Lemonfox API', '3.27s'],
  ['Python Faster-Whisper', '3.55s'],
  ['OpenAI Whisper 1 API', '6.46s'],
] as const

export default function LandingPageCodex533() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power2.out' } })

      intro
        .from('.boot', { y: 25, opacity: 0, duration: 0.65, stagger: 0.08 })
        .from('.hero-terminal', { y: 34, opacity: 0, duration: 0.85 }, '-=0.3')
        .from(
          '.metric',
          { x: 35, opacity: 0, duration: 0.65, stagger: 0.08 },
          '-=0.6'
        )

      gsap.to('.cursor', {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.55,
        ease: 'power1.inOut',
      })

      gsap.to('.scan-line', {
        y: 260,
        duration: 2.8,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.signal', {
        scaleY: 1.45,
        transformOrigin: 'bottom',
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
        ease: 'sine.inOut',
        duration: 0.8,
      })

      gsap.utils.toArray<HTMLElement>('.log-block').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className={`${mono.className} page`}>
      <header className="header">
        <span className={`${display.className} brand boot`}>
          OIPER // DESKTOP
        </span>
        <span className="tag boot">privacy-first voice runtime</span>
      </header>

      <section className="hero">
        <div className="hero-terminal">
          <div className="terminal-head">
            <span />
            <span />
            <span />
            <p>oiper-shell v1.0</p>
          </div>
          <div className="terminal-body">
            <div className="scan-line" />
            <p className="boot">$ hotkey --hold --listen</p>
            <p className="boot">recording: active</p>
            <p className="boot">$ hotkey --release</p>
            <p className="boot">transcription: 1.5s</p>
            <p className="boot">injecting text into focused application</p>
            <p className="command">
              result: "Can you share the deployment notes before lunch?"
              <span className="cursor">_</span>
            </p>
          </div>
        </div>

        <aside className="hero-side">
          <h1 className={`${display.className} boot`}>
            SPEAK FAST. STAY LOCAL.
          </h1>
          <p className="boot">
            OiPer turns speech into text through a streamlined global hotkey
            flow, then drops results directly into your active app without
            workflow interruption.
          </p>
          <div className="metrics">
            <article className="metric">
              <strong>1.5s</strong>
              <span>30 sec audio benchmark</span>
            </article>
            <article className="metric">
              <strong>100%</strong>
              <span>on-device by default</span>
            </article>
            <article className="metric">
              <strong>0 forced cloud hops</strong>
              <span>you decide when online is enabled</span>
            </article>
          </div>
          <div className="signals">
            <i className="signal" />
            <i className="signal" />
            <i className="signal" />
            <i className="signal" />
            <i className="signal" />
          </div>
        </aside>
      </section>

      <section className="pipeline log-block">
        {pipeline.map((step) => (
          <article key={step.title}>
            <h2 className={`${display.className}`}>{step.title}</h2>
            <p>{step.body}</p>
          </article>
        ))}
      </section>

      <section className="modules log-block">
        {modules.map((module) => (
          <article key={module.title}>
            <p>{module.label}</p>
            <h3 className={`${display.className}`}>{module.title}</h3>
            <ul>
              {module.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="security log-block">
        <article>
          <p>SECURITY BLOCK // LOCAL PROCESSING</p>
          <h3 className={`${display.className}`}>DATA REMAINS ON DEVICE</h3>
          <span>
            Transcription executes locally. Audio and activity logs are retained
            on your machine for full ownership and predictable privacy.
          </span>
        </article>
        <article>
          <p>SECURITY BLOCK // OPTIONAL ONLINE</p>
          <h3 className={`${display.className}`}>ENABLE WITH YOUR API KEY</h3>
          <span>
            Online optimization stays off until you configure a provider. You
            can set base URL, key, and model name, then disable at any time.
          </span>
        </article>
      </section>

      <section className="config log-block">
        <h2 className={`${display.className}`}>SETTINGS.CONFIG</h2>
        <div className="config-list">
          {settings.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="bench log-block">
        <h2 className={`${display.className}`}>
          PERFORMANCE / 30 SEC ENGLISH AUDIO
        </h2>
        <div className="bench-table">
          {benchmark.map(([name, time], index) => (
            <div
              className={`bench-row ${index === 0 ? 'winner' : ''}`}
              key={name}
            >
              <span>{name}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="final log-block">
        <p>
          OiPer achieves the fastest transcription while keeping your data path
          transparent and user-controlled.
        </p>
        <h2 className={`${display.className}`}>
          VOICE WORKFLOW, OWNED BY YOU.
        </h2>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #07120f;
          color: #d4ffe1;
        }

        .page {
          --bg: #07120f;
          --panel: rgba(7, 25, 19, 0.9);
          --line: rgba(120, 255, 174, 0.28);
          --ink: #d4ffe1;
          --muted: #8cc2a0;
          min-height: 100vh;
          padding: 1.8rem 5vw 4rem;
          display: grid;
          gap: 1.45rem;
          position: relative;
          background:
            radial-gradient(
              circle at 85% 2%,
              rgba(43, 148, 114, 0.18),
              transparent 24%
            ),
            radial-gradient(
              circle at 9% 14%,
              rgba(114, 255, 161, 0.12),
              transparent 28%
            ),
            var(--bg);
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 34px 34px;
          opacity: 0.14;
          pointer-events: none;
        }

        .header {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(130, 248, 170, 0.45);
          border-radius: 0.45rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.7rem;
          flex-wrap: wrap;
          padding: 0.64rem 0.75rem;
          background: rgba(8, 32, 24, 0.88);
        }

        .brand {
          letter-spacing: 0.08em;
          font-size: 1.1rem;
        }

        .tag {
          text-transform: uppercase;
          letter-spacing: 0.11em;
          color: #8dc9a4;
          font-size: 0.74rem;
        }

        .hero {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
        }

        .hero-terminal,
        .hero-side,
        .pipeline article,
        .modules article,
        .security article,
        .config,
        .bench,
        .final {
          border: 1px solid rgba(128, 244, 170, 0.35);
          border-radius: 0.5rem;
          background: var(--panel);
        }

        .terminal-head {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem;
          border-bottom: 1px solid rgba(127, 242, 170, 0.28);
        }

        .terminal-head span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #78ffae;
          opacity: 0.72;
        }

        .terminal-head p {
          margin: 0 0 0 auto;
          color: #8ec6a4;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .terminal-body {
          position: relative;
          padding: 0.85rem;
          overflow: hidden;
          min-height: 260px;
          display: grid;
          gap: 0.42rem;
        }

        .scan-line {
          position: absolute;
          left: 0;
          right: 0;
          top: -18px;
          height: 14px;
          background: linear-gradient(
            180deg,
            rgba(125, 255, 174, 0.3),
            transparent
          );
          pointer-events: none;
        }

        .terminal-body p {
          margin: 0;
          color: #9ad4ae;
          font-size: 0.84rem;
          line-height: 1.48;
        }

        .command {
          color: #dbffe8 !important;
          margin-top: 0.35rem !important;
        }

        .hero-side {
          padding: 0.85rem;
          display: grid;
          align-content: start;
          gap: 0.72rem;
        }

        .hero-side h1 {
          margin: 0;
          font-size: clamp(2.3rem, 7.2vw, 5.5rem);
          line-height: 0.82;
          letter-spacing: 0.03em;
        }

        .hero-side p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          max-width: 560px;
        }

        .metrics {
          display: grid;
          gap: 0.52rem;
        }

        .metric {
          border: 1px solid rgba(127, 242, 170, 0.24);
          border-radius: 0.42rem;
          padding: 0.58rem 0.62rem;
          display: grid;
          gap: 0.2rem;
          background: rgba(10, 38, 28, 0.76);
        }

        .metric strong {
          color: #e4ffee;
          font-size: 1rem;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        .metric span {
          color: #88c09d;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .signals {
          height: 30px;
          display: flex;
          align-items: flex-end;
          gap: 0.28rem;
        }

        .signal {
          width: 7px;
          height: 12px;
          background: #8dffba;
          border-radius: 4px 4px 0 0;
          display: inline-block;
          opacity: 0.78;
        }

        .pipeline {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.72rem;
        }

        .pipeline article,
        .modules article,
        .security article {
          padding: 0.74rem;
        }

        .pipeline h2,
        .modules h3,
        .security h3,
        .config h2,
        .bench h2,
        .final h2 {
          margin: 0;
          letter-spacing: 0.05em;
        }

        .pipeline h2 {
          font-size: 2rem;
          line-height: 0.85;
        }

        .pipeline p {
          margin: 0.45rem 0 0;
          color: #8bc29f;
          line-height: 1.48;
          font-size: 0.84rem;
        }

        .modules {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.72rem;
        }

        .modules p {
          margin: 0;
          color: #85bd99;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          font-size: 0.72rem;
        }

        .modules h3 {
          margin-top: 0.4rem;
          font-size: 2rem;
          line-height: 0.9;
        }

        .modules ul {
          margin: 0.55rem 0 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.36rem;
          color: #8dc4a1;
          font-size: 0.82rem;
          line-height: 1.42;
        }

        .security {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.72rem;
        }

        .security p {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
          color: #86bc99;
        }

        .security h3 {
          margin-top: 0.45rem;
          font-size: 2rem;
          line-height: 0.85;
        }

        .security span {
          margin-top: 0.55rem;
          display: block;
          color: #8dc5a2;
          line-height: 1.5;
          font-size: 0.84rem;
        }

        .config,
        .bench,
        .final {
          position: relative;
          z-index: 1;
          padding: 0.9rem;
        }

        .config h2,
        .bench h2,
        .final h2 {
          font-size: clamp(1.8rem, 4.6vw, 3.2rem);
          line-height: 0.9;
        }

        .config-list {
          margin-top: 0.65rem;
          display: grid;
          gap: 0.38rem;
        }

        .config-list p {
          margin: 0;
          border: 1px solid rgba(127, 242, 170, 0.22);
          border-radius: 0.4rem;
          padding: 0.45rem 0.54rem;
          color: #87bd9a;
          font-size: 0.8rem;
          background: rgba(9, 35, 26, 0.75);
          word-break: break-word;
        }

        .bench-table {
          margin-top: 0.7rem;
          display: grid;
          gap: 0.5rem;
        }

        .bench-row {
          border-radius: 0.45rem;
          border: 1px solid rgba(124, 232, 164, 0.25);
          padding: 0.52rem 0.58rem;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          background: rgba(8, 31, 23, 0.76);
          color: #97cca9;
          font-size: 0.84rem;
        }

        .winner {
          border-color: rgba(143, 255, 183, 0.58);
          background: rgba(12, 49, 35, 0.88);
          color: #e1ffec;
        }

        .bench-row strong {
          color: inherit;
        }

        .final p {
          margin: 0;
          color: #7fb58f;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
        }

        .final h2 {
          margin-top: 0.52rem;
          max-width: 1080px;
        }

        @media (max-width: 1080px) {
          .hero,
          .pipeline,
          .modules,
          .security {
            grid-template-columns: 1fr;
          }

          .hero-side h1 {
            font-size: clamp(2.6rem, 13vw, 4.2rem);
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 1rem 0.8rem 2.7rem;
          }

          .brand {
            font-size: 0.95rem;
          }

          .terminal-body {
            min-height: 230px;
          }
        }
      `}</style>
    </main>
  )
}
