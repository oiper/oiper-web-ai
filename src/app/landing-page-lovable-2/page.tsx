'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Globe, Lock, Mic, Shield, Terminal, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* ─── OPUS 2: CYBERPUNK NEON ───
   Deep blue-black bg, cyan/magenta neon accents, monospace type, terminal aesthetic.
*/

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, highlight: true },
  { name: 'Lemonfox API', time: 3.27 },
  { name: 'Python Faster-Whisper', time: 3.55 },
  { name: 'OpenAI Whisper 1 API', time: 6.46 },
]

const features = [
  {
    icon: Mic,
    title: 'Instant Capture',
    desc: 'Global hotkey → record → release → transcribe → inject. Zero friction.',
  },
  {
    icon: Shield,
    title: 'Local-First Privacy',
    desc: 'Audio and transcriptions never leave your machine. Period.',
  },
  {
    icon: Zap,
    title: 'Native Speed',
    desc: '1.5s for 30 seconds of audio. GPU-accelerated when available.',
  },
  {
    icon: Cpu,
    title: 'Configurable Backend',
    desc: 'Auto-detect, CPU-only, or GPU mode. Pick the model size you want.',
  },
  {
    icon: Globe,
    title: 'Optional Cloud',
    desc: 'Use your own API keys for online LLM optimization. Fully opt-in.',
  },
  {
    icon: Terminal,
    title: 'LLM Transcription',
    desc: 'Route through Gemini, GPT, or specialized models for technical accuracy.',
  },
]

export default function LandingPageOpus2() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Glitch title
      const tl = gsap.timeline()
      tl.fromTo(
        '.cyber-title',
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'steps(12)' }
      )
      tl.fromTo(
        '.cyber-subtitle',
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.3'
      )
      tl.fromTo(
        '.cyber-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.2'
      )

      // Scanline
      gsap.to('.scanline', {
        y: '100vh',
        repeat: -1,
        duration: 4,
        ease: 'none',
      })

      // Features
      gsap.utils.toArray<HTMLElement>('.cyber-feat').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      // Benchmark
      gsap.utils.toArray<HTMLElement>('.cyber-bar-fill').forEach((el) => {
        gsap.fromTo(
          el,
          { width: 0 },
          {
            width: el.dataset.width || '0%',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'hsl(230,25%,5%)',
        color: 'hsl(180,80%,85%)',
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      {/* Scanline overlay */}
      <div
        className="scanline pointer-events-none fixed top-0 left-0 z-50 h-[2px] w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, hsla(180,100%,60%,0.08), transparent)',
        }}
      />

      {/* Grid bg */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(180,80%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180,80%,50%) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-8 py-4"
        style={{
          background: 'hsla(230,25%,5%,0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid hsla(180,80%,40%,0.15)',
        }}
      >
        <span
          className="text-lg font-bold"
          style={{ color: 'hsl(180,100%,55%)' }}
        >
          <span style={{ color: 'hsl(320,80%,60%)' }}>&gt;</span> OiPer_
        </span>
        <div
          className="flex gap-6 text-xs tracking-widest uppercase"
          style={{ color: 'hsl(180,30%,45%)' }}
        >
          <a
            href="#features"
            className="transition-colors hover:text-[hsl(180,100%,55%)]"
          >
            sys.features
          </a>
          <a
            href="#bench"
            className="transition-colors hover:text-[hsl(180,100%,55%)]"
          >
            benchmark
          </a>
          <a
            href="#security"
            className="transition-colors hover:text-[hsl(180,100%,55%)]"
          >
            security
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="cyber-title text-[clamp(2.5rem,8vw,7rem)] leading-none font-black tracking-tight">
          <span style={{ color: 'hsl(180,100%,55%)' }}>VOICE</span>
          <span style={{ color: 'hsl(320,80%,60%)' }}>::</span>
          <span>TEXT</span>
        </div>
        <p
          className="cyber-subtitle mt-6 max-w-lg text-sm md:text-base"
          style={{ color: 'hsl(180,30%,45%)' }}
        >
          {
            '// Privacy-first transcription engine. Local processing. Native speed. Your data stays yours.'
          }
        </p>
        <div className="mt-10 flex gap-4">
          <button
            className="cyber-cta px-8 py-3 text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'hsl(180,100%,55%)',
              color: 'hsl(230,25%,5%)',
            }}
          >
            $ install
          </button>
          <button
            className="cyber-cta border px-8 py-3 text-xs font-bold tracking-widest uppercase"
            style={{
              borderColor: 'hsl(320,80%,60%)',
              color: 'hsl(320,80%,60%)',
            }}
          >
            $ docs
          </button>
        </div>

        {/* Terminal preview */}
        <div
          className="mt-16 w-full max-w-md rounded-lg p-6 text-left text-xs"
          style={{
            background: 'hsla(230,30%,8%,0.8)',
            border: '1px solid hsla(180,80%,40%,0.2)',
          }}
        >
          <div className="mb-4 flex gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ background: 'hsl(0,70%,55%)' }}
            />
            <div
              className="h-3 w-3 rounded-full"
              style={{ background: 'hsl(45,80%,55%)' }}
            />
            <div
              className="h-3 w-3 rounded-full"
              style={{ background: 'hsl(140,60%,45%)' }}
            />
          </div>
          <div style={{ color: 'hsl(180,30%,45%)' }}>
            <p>
              <span style={{ color: 'hsl(180,100%,55%)' }}>$</span> oiper
              --record
            </p>
            <p className="mt-1" style={{ color: 'hsl(140,60%,55%)' }}>
              ▶ Recording... (hold hotkey)
            </p>
            <p className="mt-1" style={{ color: 'hsl(45,80%,55%)' }}>
              ⏹ Released. Transcribing...
            </p>
            <p className="mt-1" style={{ color: 'hsl(180,100%,55%)' }}>
              ✓ "Meeting notes transcribed in 1.5s"
            </p>
            <p className="mt-1" style={{ color: 'hsl(320,80%,60%)' }}>
              → Injected into active window
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
        <h2 className="mb-16 text-3xl font-bold">
          <span style={{ color: 'hsl(320,80%,60%)' }}>##</span> System.Features
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="cyber-feat rounded-lg p-6"
              style={{
                background: 'hsla(230,30%,8%,0.6)',
                border: '1px solid hsla(180,80%,40%,0.12)',
              }}
            >
              <f.icon
                size={24}
                className="mb-4"
                style={{ color: 'hsl(180,100%,55%)' }}
              />
              <h3 className="mb-2 text-sm font-bold tracking-wide uppercase">
                {f.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'hsl(180,30%,45%)' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENCHMARKS */}
      <section id="bench" className="mx-auto max-w-5xl px-6 py-32 md:px-16">
        <h2 className="mb-4 text-3xl font-bold">
          <span style={{ color: 'hsl(320,80%,60%)' }}>##</span> Benchmark
        </h2>
        <p className="mb-12 text-xs" style={{ color: 'hsl(180,30%,40%)' }}>
          // 30s English audio sample
        </p>
        <div className="space-y-5">
          {benchmarks.map((b, i) => {
            const pct = (b.time / 6.46) * 100
            return (
              <div key={i}>
                <div className="mb-1 flex justify-between text-xs">
                  <span
                    style={{
                      color: b.highlight
                        ? 'hsl(180,100%,55%)'
                        : 'hsl(180,30%,50%)',
                    }}
                  >
                    {b.name}
                  </span>
                  <span
                    style={{
                      color: b.highlight
                        ? 'hsl(180,100%,55%)'
                        : 'hsl(180,30%,40%)',
                    }}
                  >
                    {b.time}s{b.highlight ? ' ⭐' : ''}
                  </span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full"
                  style={{ background: 'hsl(230,20%,12%)' }}
                >
                  <div
                    className="cyber-bar-fill h-full rounded-full"
                    data-width={`${pct}%`}
                    style={{
                      background: b.highlight
                        ? 'linear-gradient(90deg, hsl(180,100%,55%), hsl(320,80%,60%))'
                        : 'hsl(230,20%,25%)',
                      width: 0,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="mx-auto max-w-5xl px-6 py-32 md:px-16">
        <div
          className="rounded-lg p-10"
          style={{
            background: 'hsla(230,30%,8%,0.6)',
            border: '1px solid hsla(180,80%,40%,0.15)',
          }}
        >
          <Lock
            size={32}
            className="mb-6"
            style={{ color: 'hsl(320,80%,60%)' }}
          />
          <h2 className="mb-6 text-3xl font-bold">
            <span style={{ color: 'hsl(320,80%,60%)' }}>##</span>{' '}
            Security.Protocol
          </h2>
          <div
            className="grid grid-cols-1 gap-8 text-xs md:grid-cols-2"
            style={{ color: 'hsl(180,30%,50%)' }}
          >
            <div>
              <h4
                className="mb-2 text-sm font-bold tracking-wide uppercase"
                style={{ color: 'hsl(180,100%,55%)' }}
              >
                Local Processing
              </h4>
              <ul className="space-y-1">
                <li>→ Transcription runs on your hardware</li>
                <li>→ Audio never leaves your machine</li>
                <li>→ Activity logs stay on-device</li>
              </ul>
            </div>
            <div>
              <h4
                className="mb-2 text-sm font-bold tracking-wide uppercase"
                style={{ color: 'hsl(320,80%,60%)' }}
              >
                Online (Opt-in)
              </h4>
              <ul className="space-y-1">
                <li>→ Requires your API key</li>
                <li>→ Enable/disable at any time</li>
                <li>→ Custom provider configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-10 text-center text-xs"
        style={{
          color: 'hsl(180,30%,30%)',
          borderTop: '1px solid hsla(180,80%,40%,0.1)',
        }}
      >
        &gt; OiPer Desktop — voice::text // privacy::first
      </footer>
    </div>
  )
}
