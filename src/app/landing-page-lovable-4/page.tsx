'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Cpu, Globe, Lock, Mic, Shield, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* ─── OPUS 4: AURORA GRADIENT ───
   Deep navy base, flowing aurora gradients (teal → indigo → violet), 
   soft rounded shapes, generous whitespace, modern sans-serif.
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
    title: 'One Key, Infinite Words',
    desc: 'Hold your hotkey, speak naturally, release. Your words flow into any application.',
  },
  {
    icon: Shield,
    title: 'Private by Nature',
    desc: 'Everything stays on your device. No cloud uploads, no tracking, no compromise.',
  },
  {
    icon: Zap,
    title: 'Lightning Local',
    desc: 'Native code delivers 1.5s transcription for 30s audio. GPU acceleration when available.',
  },
  {
    icon: Lock,
    title: 'You Hold the Keys',
    desc: 'Online services need your explicit API key. Enable or disable instantly.',
  },
  {
    icon: Cpu,
    title: 'Smart Hardware Use',
    desc: 'Auto-detect, CPU-only, or GPU mode. Multiple model sizes available.',
  },
  {
    icon: Globe,
    title: 'AI-Enhanced Accuracy',
    desc: 'Route through Gemini or specialized models for technical terminology.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Press',
    desc: 'Hold your global hotkey to start recording',
  },
  {
    num: '02',
    title: 'Speak',
    desc: 'Talk naturally — OiPer captures every word',
  },
  {
    num: '03',
    title: 'Release',
    desc: 'Let go and your text appears instantly',
  },
]

export default function LandingPageOpus4() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        '.aurora-title',
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.aurora-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
      )
      gsap.fromTo(
        '.aurora-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.7, stagger: 0.1 }
      )

      // Floating orbs
      gsap.to('.orb-1', {
        y: -30,
        x: 15,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: 'sine.inOut',
      })
      gsap.to('.orb-2', {
        y: 25,
        x: -20,
        repeat: -1,
        yoyo: true,
        duration: 7,
        ease: 'sine.inOut',
      })
      gsap.to('.orb-3', {
        y: -20,
        x: -10,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: 'sine.inOut',
      })

      // Steps
      gsap.utils.toArray<HTMLElement>('.aurora-step').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      // Features
      gsap.utils.toArray<HTMLElement>('.aurora-feat').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      // Benchmark
      gsap.utils.toArray<HTMLElement>('.aurora-bar').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
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
      className="min-h-screen"
      style={{
        background: 'hsl(225,35%,8%)',
        color: 'hsl(210,30%,92%)',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: 'hsla(225,35%,8%,0.85)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <span
          className="bg-clip-text text-xl font-bold text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(135deg, hsl(170,80%,60%), hsl(260,70%,65%))',
          }}
        >
          OiPer
        </span>
        <div
          className="flex gap-6 text-sm"
          style={{ color: 'hsl(210,20%,50%)' }}
        >
          <a
            href="#how"
            className="transition-colors hover:text-[hsl(170,80%,60%)]"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="transition-colors hover:text-[hsl(170,80%,60%)]"
          >
            Features
          </a>
          <a
            href="#speed"
            className="transition-colors hover:text-[hsl(170,80%,60%)]"
          >
            Speed
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Floating gradient orbs */}
        <div
          className="orb-1 absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'hsl(170,80%,50%)' }}
        />
        <div
          className="orb-2 absolute top-1/3 right-1/4 h-80 w-80 rounded-full opacity-15 blur-[100px]"
          style={{ background: 'hsl(260,70%,55%)' }}
        />
        <div
          className="orb-3 absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full opacity-10 blur-[110px]"
          style={{ background: 'hsl(320,60%,50%)' }}
        />

        <div className="relative z-10">
          <h1 className="aurora-title max-w-4xl text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] font-bold tracking-tight">
            Voice to text,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, hsl(170,80%,60%), hsl(260,70%,65%), hsl(320,60%,60%))',
              }}
            >
              beautifully private
            </span>
          </h1>
          <p
            className="aurora-sub mx-auto mt-8 max-w-lg text-lg"
            style={{ color: 'hsl(210,20%,55%)' }}
          >
            Hold a key, speak, release. Your words appear where you need them —
            fast, accurate, and entirely local.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              className="aurora-cta flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium"
              style={{
                background:
                  'linear-gradient(135deg, hsl(170,80%,50%), hsl(260,70%,55%))',
                color: 'hsl(225,35%,8%)',
              }}
            >
              Download Free <ArrowRight size={16} />
            </button>
            <button
              className="aurora-cta rounded-full border px-8 py-3 text-sm font-medium"
              style={{
                borderColor: 'hsla(210,30%,50%,0.3)',
                color: 'hsl(210,20%,60%)',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-5xl px-6 py-32 md:px-16">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Three steps.{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(170,80%,60%), hsl(260,70%,65%))',
            }}
          >
            Zero friction.
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="aurora-step rounded-2xl p-8 text-center"
              style={{
                background: 'hsla(225,30%,14%,0.6)',
                border: '1px solid hsla(210,30%,30%,0.2)',
              }}
            >
              <div
                className="mb-4 bg-clip-text text-5xl font-bold text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, hsl(170,80%,60%), hsl(260,70%,65%))',
                }}
              >
                {s.num}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
              <p className="text-sm" style={{ color: 'hsl(210,20%,50%)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Built with{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(170,80%,60%), hsl(260,70%,65%))',
            }}
          >
            intention
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="aurora-feat group rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background: 'hsla(225,30%,14%,0.6)',
                border: '1px solid hsla(210,30%,30%,0.15)',
              }}
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background:
                    'linear-gradient(135deg, hsla(170,80%,50%,0.15), hsla(260,70%,55%,0.15))',
                }}
              >
                <f.icon size={20} style={{ color: 'hsl(170,80%,60%)' }} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'hsl(210,20%,50%)' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPEED */}
      <section id="speed" className="mx-auto max-w-5xl px-6 py-32 md:px-16">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, hsl(170,80%,60%), hsl(260,70%,65%))',
            }}
          >
            Fastest
          </span>{' '}
          in class
        </h2>
        <p
          className="mb-16 text-center text-sm"
          style={{ color: 'hsl(210,20%,45%)' }}
        >
          30 seconds of English audio
        </p>
        <div className="space-y-5">
          {benchmarks.map((b, i) => {
            const pct = (b.time / 6.46) * 100
            return (
              <div key={i}>
                <div className="mb-2 flex justify-between text-sm">
                  <span
                    style={{
                      color: b.highlight
                        ? 'hsl(170,80%,60%)'
                        : 'hsl(210,20%,55%)',
                    }}
                  >
                    {b.name}
                  </span>
                  <span
                    style={{
                      color: b.highlight
                        ? 'hsl(170,80%,60%)'
                        : 'hsl(210,20%,45%)',
                    }}
                  >
                    {b.time}s{b.highlight ? ' ⭐' : ''}
                  </span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full"
                  style={{ background: 'hsl(225,25%,14%)' }}
                >
                  <div
                    className="aurora-bar h-full origin-left rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: b.highlight
                        ? 'linear-gradient(90deg, hsl(170,80%,50%), hsl(260,70%,55%))'
                        : 'hsl(225,20%,25%)',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* PRIVACY CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center md:px-16">
        <div
          className="aurora-feat relative overflow-hidden rounded-3xl p-16"
          style={{
            background: 'hsla(225,30%,14%,0.8)',
            border: '1px solid hsla(210,30%,30%,0.15)',
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                'linear-gradient(135deg, hsl(170,80%,50%), hsl(260,70%,55%), hsl(320,60%,50%))',
            }}
          />
          <div className="relative z-10">
            <Lock
              size={40}
              className="mx-auto mb-6"
              style={{ color: 'hsl(170,80%,60%)' }}
            />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Your privacy is not negotiable
            </h2>
            <p
              className="mx-auto mb-8 max-w-lg text-base"
              style={{ color: 'hsl(210,20%,50%)' }}
            >
              Every transcription runs locally. Your audio never leaves your
              machine. Online services are entirely opt-in, using your own API
              keys.
            </p>
            <button
              className="mx-auto flex items-center gap-2 rounded-full px-10 py-3 text-sm font-medium"
              style={{
                background:
                  'linear-gradient(135deg, hsl(170,80%,50%), hsl(260,70%,55%))',
                color: 'hsl(225,35%,8%)',
              }}
            >
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-12 text-center text-sm"
        style={{
          color: 'hsl(210,20%,35%)',
          borderTop: '1px solid hsla(210,30%,30%,0.1)',
        }}
      >
        OiPer Desktop — Voice to text, beautifully private.
      </footer>
    </div>
  )
}
