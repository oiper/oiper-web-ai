'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Globe, Lock, Mic, Shield, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* ─── OPUS 5: ART DECO ───
   Black & gold, geometric patterns, luxury feel, elegant symmetry.
   Palette: deep black, warm gold, ivory accents.
*/

const gold = 'hsl(43,72%,55%)'
const goldLight = 'hsl(43,60%,70%)'
const ivory = 'hsl(40,30%,90%)'
const darkBg = 'hsl(40,10%,5%)'

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, highlight: true },
  { name: 'Lemonfox API', time: 3.27 },
  { name: 'Python Faster-Whisper', time: 3.55 },
  { name: 'OpenAI Whisper 1 API', time: 6.46 },
]

const features = [
  {
    icon: Mic,
    title: 'Instant Dictation',
    desc: 'Global hotkey captures your voice and injects transcribed text into any application.',
  },
  {
    icon: Shield,
    title: 'Total Privacy',
    desc: 'All processing happens on your machine. No data ever leaves without your explicit consent.',
  },
  {
    icon: Zap,
    title: 'Exceptional Speed',
    desc: '1.5 seconds for 30 seconds of audio. Written in native code for peak performance.',
  },
  {
    icon: Lock,
    title: 'Optional Cloud',
    desc: 'Online services are opt-in only. Use your own API keys. Full control, always.',
  },
  {
    icon: Cpu,
    title: 'Adaptive Engine',
    desc: 'Auto-detects optimal backend. CPU-only or GPU-accelerated — your choice.',
  },
  {
    icon: Globe,
    title: 'LLM Precision',
    desc: 'Route through Gemini or specialized models for flawless technical transcription.',
  },
]

export default function LandingPageOpus5() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        '.deco-ornament',
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'power3.inOut', delay: 0.2 }
      )
      gsap.fromTo(
        '.deco-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      )
      gsap.fromTo(
        '.deco-subtitle',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 1 }
      )
      gsap.fromTo(
        '.deco-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3, stagger: 0.1 }
      )

      // Sections
      gsap.utils.toArray<HTMLElement>('.deco-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          }
        )
      })

      // Diamond pattern
      gsap.utils.toArray<HTMLElement>('.deco-diamond').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0, rotate: 45 },
          {
            opacity: 1,
            scale: 1,
            rotate: 45,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      // Bars
      gsap.utils.toArray<HTMLElement>('.deco-bar').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const DecoLine = () => (
    <div className="my-8 flex items-center justify-center gap-3">
      <div
        className="h-px max-w-24 flex-1"
        style={{ background: `linear-gradient(90deg, transparent, ${gold})` }}
      />
      <div className="h-2 w-2 rotate-45" style={{ background: gold }} />
      <div
        className="h-px max-w-24 flex-1"
        style={{ background: `linear-gradient(90deg, ${gold}, transparent)` }}
      />
    </div>
  )

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{
        background: darkBg,
        color: ivory,
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: `hsla(40,10%,5%,0.9)`,
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid hsla(43,72%,55%,0.15)`,
        }}
      >
        <span
          className="text-xl font-bold tracking-[0.2em] uppercase"
          style={{ color: gold }}
        >
          OiPer
        </span>
        <div
          className="flex gap-8 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'system-ui, sans-serif', color: goldLight }}
        >
          <a
            href="#features"
            className="transition-colors hover:text-[hsl(43,72%,55%)]"
          >
            Features
          </a>
          <a
            href="#performance"
            className="transition-colors hover:text-[hsl(43,72%,55%)]"
          >
            Performance
          </a>
          <a
            href="#privacy"
            className="transition-colors hover:text-[hsl(43,72%,55%)]"
          >
            Privacy
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Geometric border pattern */}
        <div
          className="pointer-events-none absolute inset-8"
          style={{ border: `1px solid hsla(43,72%,55%,0.1)` }}
        >
          <div
            className="absolute -top-px -left-px h-6 w-6"
            style={{
              borderTop: `2px solid ${gold}`,
              borderLeft: `2px solid ${gold}`,
            }}
          />
          <div
            className="absolute -top-px -right-px h-6 w-6"
            style={{
              borderTop: `2px solid ${gold}`,
              borderRight: `2px solid ${gold}`,
            }}
          />
          <div
            className="absolute -bottom-px -left-px h-6 w-6"
            style={{
              borderBottom: `2px solid ${gold}`,
              borderLeft: `2px solid ${gold}`,
            }}
          />
          <div
            className="absolute -right-px -bottom-px h-6 w-6"
            style={{
              borderBottom: `2px solid ${gold}`,
              borderRight: `2px solid ${gold}`,
            }}
          />
        </div>

        <div
          className="deco-ornament mb-8 h-px w-40"
          style={{
            background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
          }}
        />
        <p
          className="mb-6 text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: 'system-ui, sans-serif', color: goldLight }}
        >
          Privacy-First Voice Transcription
        </p>
        <h1 className="deco-title text-[clamp(2.5rem,7vw,6rem)] leading-[1.1] tracking-tight">
          The Art of{' '}
          <span className="italic" style={{ color: gold }}>
            Voice
          </span>
        </h1>
        <DecoLine />
        <p
          className="deco-subtitle max-w-md text-lg"
          style={{ fontFamily: 'system-ui, sans-serif', color: goldLight }}
        >
          Speak. Transcribe. Inject — with elegance, speed, and absolute
          privacy.
        </p>
        <div className="mt-10 flex gap-4">
          <button
            className="deco-cta px-10 py-3 text-xs font-medium tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'system-ui, sans-serif',
              background: gold,
              color: darkBg,
            }}
          >
            Download
          </button>
          <button
            className="deco-cta border px-10 py-3 text-xs font-medium tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'system-ui, sans-serif',
              borderColor: `hsla(43,72%,55%,0.4)`,
              color: goldLight,
            }}
          >
            Explore
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
        <div className="mb-20 text-center">
          <p
            className="deco-reveal mb-4 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'system-ui, sans-serif', color: gold }}
          >
            Craftsmanship
          </p>
          <h2 className="deco-reveal text-4xl italic">
            Engineered with Purpose
          </h2>
          <DecoLine />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="deco-reveal p-8 text-center"
              style={{ border: `1px solid hsla(43,72%,55%,0.12)` }}
            >
              <div
                className="deco-diamond mx-auto mb-6 flex h-12 w-12 items-center justify-center"
                style={{ border: `1px solid ${gold}` }}
              >
                <f.icon
                  size={18}
                  style={{ color: gold, transform: 'rotate(-45deg)' }}
                />
              </div>
              <h3 className="mb-3 text-lg italic" style={{ color: ivory }}>
                {f.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  color: goldLight,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section
        id="performance"
        className="px-6 py-32 md:px-16"
        style={{ background: `hsla(43,72%,55%,0.03)` }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <p
              className="deco-reveal mb-4 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'system-ui, sans-serif', color: gold }}
            >
              Velocity
            </p>
            <h2 className="deco-reveal text-4xl italic">
              Unmatched Performance
            </h2>
            <DecoLine />
            <p
              className="deco-reveal text-sm"
              style={{ fontFamily: 'system-ui, sans-serif', color: goldLight }}
            >
              30 seconds of English audio
            </p>
          </div>
          <div className="space-y-6">
            {benchmarks.map((b, i) => {
              const pct = (b.time / 6.46) * 100
              return (
                <div key={i} className="deco-reveal">
                  <div
                    className="mb-2 flex justify-between text-xs"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    <span style={{ color: b.highlight ? gold : goldLight }}>
                      {b.name}
                    </span>
                    <span
                      style={{ color: b.highlight ? gold : 'hsl(40,20%,40%)' }}
                    >
                      {b.time}s{b.highlight ? ' ★' : ''}
                    </span>
                  </div>
                  <div
                    className="h-1"
                    style={{ background: 'hsla(43,72%,55%,0.08)' }}
                  >
                    <div
                      className="deco-bar h-full origin-left"
                      style={{
                        width: `${pct}%`,
                        background: b.highlight
                          ? `linear-gradient(90deg, ${gold}, hsl(30,70%,50%))`
                          : 'hsla(43,72%,55%,0.2)',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section
        id="privacy"
        className="mx-auto max-w-5xl px-6 py-32 text-center md:px-16"
      >
        <div className="deco-reveal">
          <Lock size={36} className="mx-auto mb-6" style={{ color: gold }} />
          <h2 className="mb-6 text-4xl italic">Privacy as a Principle</h2>
          <p
            className="mx-auto mb-12 max-w-lg text-base"
            style={{ fontFamily: 'system-ui, sans-serif', color: goldLight }}
          >
            Every transcription runs on your hardware. Audio never leaves your
            machine. Online services are optional, using your own credentials.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Local Processing',
                desc: 'Your CPU or GPU handles everything',
              },
              {
                title: 'Zero Telemetry',
                desc: 'No data collection whatsoever',
              },
              {
                title: 'Your Credentials',
                desc: 'Cloud features use your own API keys',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="deco-reveal p-6"
                style={{ borderTop: `2px solid ${gold}` }}
              >
                <h4
                  className="mb-2 text-sm tracking-[0.15em] uppercase"
                  style={{ fontFamily: 'system-ui, sans-serif', color: gold }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    color: goldLight,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-16 text-center"
        style={{ borderTop: `1px solid hsla(43,72%,55%,0.1)` }}
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <div
            className="h-px w-16"
            style={{
              background: `linear-gradient(90deg, transparent, ${gold})`,
            }}
          />
          <div className="h-2 w-2 rotate-45" style={{ background: gold }} />
          <div
            className="h-px w-16"
            style={{
              background: `linear-gradient(90deg, ${gold}, transparent)`,
            }}
          />
        </div>
        <p className="mb-2 text-2xl italic">OiPer Desktop</p>
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{
            fontFamily: 'system-ui, sans-serif',
            color: 'hsl(40,20%,35%)',
          }}
        >
          Voice to text — with distinction
        </p>
      </footer>
    </div>
  )
}
