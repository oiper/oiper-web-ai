'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Cpu, Globe, Lock, Mic, Shield, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* ─── OPUS 1: DARK BRUTALIST ─── 
   Stark monochrome, oversized type, raw industrial energy.
   Palette: almost-black bg, bone-white text, single red accent.
*/

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', highlight: true },
  { name: 'Lemonfox API', time: '3.27s' },
  { name: 'Python Faster-Whisper', time: '3.55s' },
  { name: 'OpenAI Whisper 1 API', time: '6.46s' },
]

const features = [
  {
    icon: Mic,
    title: 'Hold → Speak → Release',
    desc: 'Global hotkey captures audio instantly. Release to transcribe. Text injected into your active app.',
  },
  {
    icon: Shield,
    title: 'Your Machine. Your Data.',
    desc: 'All transcription runs locally. Audio and logs never leave your device unless you explicitly opt in.',
  },
  {
    icon: Zap,
    title: '1.5s for 30s Audio',
    desc: 'Written in native code with GPU acceleration. The fastest local transcription engine available.',
  },
  {
    icon: Lock,
    title: 'Optional Online Services',
    desc: 'Use your own API key for cloud LLMs. Enable or disable at any time — your choice, always.',
  },
  {
    icon: Cpu,
    title: 'Backend Flexibility',
    desc: 'Auto-detect, CPU-only, or GPU acceleration. Choose the model size that fits your hardware.',
  },
  {
    icon: Globe,
    title: 'LLM-Powered Accuracy',
    desc: 'Route audio through Gemini, GPT, or specialized models for ultra-accurate transcription of technical content.',
  },
]

export default function LandingPageOpus1() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const benchRef = useRef<HTMLDivElement>(null)
  const privacyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        '.hero-title span',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: 'power4.out',
          delay: 0.2,
        }
      )
      gsap.fromTo(
        '.hero-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 1.1,
          ease: 'back.out(1.7)',
        }
      )
      gsap.fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, delay: 1.5, duration: 0.5 }
      )
      gsap.to('.hero-scroll', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
        delay: 2,
      })

      // Features
      gsap.utils.toArray<HTMLElement>('.feat-card').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Benchmark bars
      gsap.utils.toArray<HTMLElement>('.bench-bar').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Privacy section
      gsap.fromTo(
        '.privacy-block',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.privacy-block', start: 'top 80%' },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'hsl(0,0%,4%)',
        color: 'hsl(40,20%,88%)',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: 'hsla(0,0%,4%,0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          className="text-xl font-black tracking-widest uppercase"
          style={{ color: 'hsl(0,72%,55%)' }}
        >
          OiPer
        </span>
        <div
          className="flex gap-6 text-sm font-medium tracking-wide uppercase"
          style={{ color: 'hsl(0,0%,50%)' }}
        >
          <a
            href="#features"
            className="transition-colors hover:text-[hsl(40,20%,88%)]"
          >
            Features
          </a>
          <a
            href="#performance"
            className="transition-colors hover:text-[hsl(40,20%,88%)]"
          >
            Speed
          </a>
          <a
            href="#privacy"
            className="transition-colors hover:text-[hsl(40,20%,88%)]"
          >
            Privacy
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="hero-title text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-black tracking-tighter uppercase">
          {'VOICE TO TEXT'.split('').map((c, i) => (
            <span
              key={i}
              className="inline-block"
              style={c === ' ' ? { width: '0.3em' } : undefined}
            >
              {c === ' ' ? '\u00A0' : c}
            </span>
          ))}
        </h1>
        <p
          className="hero-sub mt-8 max-w-xl text-lg md:text-xl"
          style={{ color: 'hsl(0,0%,50%)' }}
        >
          Privacy-first. Blazing fast. Hold a key, speak, release — text appears
          where you need it.
        </p>
        <div className="hero-cta mt-10 flex gap-4">
          <button
            className="rounded-none px-8 py-3 text-sm font-bold tracking-wider uppercase"
            style={{ background: 'hsl(0,72%,55%)', color: 'hsl(0,0%,4%)' }}
          >
            Download Now
          </button>
          <button
            className="rounded-none border px-8 py-3 text-sm font-bold tracking-wider uppercase"
            style={{ borderColor: 'hsl(0,0%,25%)', color: 'hsl(0,0%,60%)' }}
          >
            Learn More
          </button>
        </div>
        <div className="hero-scroll absolute bottom-10">
          <ChevronDown size={28} style={{ color: 'hsl(0,0%,30%)' }} />
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        ref={featuresRef}
        className="mx-auto max-w-6xl px-6 py-32 md:px-16"
      >
        <h2
          className="mb-16 text-4xl font-black tracking-tight uppercase md:text-5xl"
          style={{ color: 'hsl(0,72%,55%)' }}
        >
          Built Different
        </h2>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="feat-card border-t p-8"
              style={{ borderColor: 'hsl(0,0%,12%)' }}
            >
              <f.icon
                size={28}
                className="mb-4"
                style={{ color: 'hsl(0,72%,55%)' }}
              />
              <h3 className="mb-2 text-xl font-bold tracking-wide uppercase">
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'hsl(0,0%,45%)' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENCHMARKS */}
      <section
        id="performance"
        ref={benchRef}
        className="mx-auto max-w-5xl px-6 py-32 md:px-16"
      >
        <h2 className="mb-4 text-4xl font-black tracking-tight uppercase md:text-5xl">
          Raw Speed
        </h2>
        <p className="mb-16 text-sm" style={{ color: 'hsl(0,0%,40%)' }}>
          30 seconds of English audio
        </p>
        <div className="space-y-6">
          {benchmarks.map((b, i) => {
            const maxTime = 6.46
            const pct = (parseFloat(b.time) / maxTime) * 100
            return (
              <div key={i}>
                <div className="mb-2 flex justify-between font-mono text-sm">
                  <span
                    className={b.highlight ? 'font-bold' : ''}
                    style={{
                      color: b.highlight ? 'hsl(0,72%,55%)' : 'hsl(0,0%,50%)',
                    }}
                  >
                    {b.name}
                  </span>
                  <span
                    style={{
                      color: b.highlight ? 'hsl(0,72%,55%)' : 'hsl(0,0%,40%)',
                    }}
                  >
                    {b.time} {b.highlight && '⭐'}
                  </span>
                </div>
                <div className="h-3" style={{ background: 'hsl(0,0%,10%)' }}>
                  <div
                    className="bench-bar h-full origin-left"
                    style={{
                      width: `${pct}%`,
                      background: b.highlight
                        ? 'hsl(0,72%,55%)'
                        : 'hsl(0,0%,22%)',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* PRIVACY */}
      <section
        id="privacy"
        ref={privacyRef}
        className="mx-auto max-w-5xl px-6 py-32 md:px-16"
      >
        <div
          className="privacy-block border p-12"
          style={{ borderColor: 'hsl(0,0%,12%)' }}
        >
          <Lock
            size={40}
            className="mb-6"
            style={{ color: 'hsl(0,72%,55%)' }}
          />
          <h2 className="mb-6 text-4xl font-black tracking-tight uppercase md:text-5xl">
            Privacy Is Not Optional
          </h2>
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: 'hsl(0,0%,50%)' }}
          >
            Every transcription runs on your hardware. Your audio never leaves
            your machine. Activity logs stay local. Online services are
            available — but only when you choose, with your own API keys.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Local Transcription',
                desc: 'Runs entirely on your CPU or GPU',
              },
              {
                title: 'No Telemetry',
                desc: 'Zero data collection by default',
              },
              {
                title: 'Your API Keys',
                desc: 'Online features use your own credentials',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-t pt-4"
                style={{ borderColor: 'hsl(0,0%,15%)' }}
              >
                <h4 className="mb-1 text-sm font-bold tracking-wide uppercase">
                  {item.title}
                </h4>
                <p className="text-xs" style={{ color: 'hsl(0,0%,40%)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-12 text-center text-xs"
        style={{ color: 'hsl(0,0%,25%)', borderTop: '1px solid hsl(0,0%,10%)' }}
      >
        OiPer Desktop — Voice to text, your way.
      </footer>
    </div>
  )
}
