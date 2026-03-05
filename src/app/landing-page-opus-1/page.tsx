'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', bar: 23, highlight: true },
  { name: 'Lemonfox API', time: '3.27s', bar: 50, highlight: false },
  { name: 'Python Faster-Whisper', time: '3.55s', bar: 55, highlight: false },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', bar: 100, highlight: false },
]

const features = [
  {
    title: 'Hold to Record',
    description:
      'Press your global hotkey to start recording. Release to transcribe. Text appears instantly in your active app.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <circle cx="24" cy="24" r="12" fill="currentColor" opacity="0.15" />
        <circle cx="24" cy="24" r="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Local by Default',
    description:
      'Transcription runs entirely on your machine. Audio, logs, and data never leave your device unless you choose otherwise.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <rect
          x="10"
          y="18"
          width="28"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M18 18V14a6 6 0 1 1 12 0v4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="29" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Blazing Fast',
    description:
      'Written in native code with GPU acceleration. Transcribes 30 seconds of audio in just 1.5 seconds.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <path
          d="M26 6L14 26h10l-2 16 14-22H26l2-14z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    ),
  },
  {
    title: 'Your Rules',
    description:
      'Choose local or online optimization. Pick your backend. Configure your own API keys and LLM providers.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line
          x1="20"
          y1="16"
          x2="28"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="20"
          y1="32"
          x2="28"
          y2="24"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    ),
  },
]

export default function LandingPageOpus1() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const benchRef = useRef<HTMLDivElement>(null)
  const privacyRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-line', {
        y: 120,
        opacity: 0,
        rotateX: 40,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      })

      gsap.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.9,
      })

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2,
      })

      gsap.from('.hero-glow', {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        delay: 0.5,
      })

      gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.bench-bar').forEach((bar, i) => {
        gsap.from(bar, {
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
          transformOrigin: 'left center',
        })
      })

      gsap.from('.privacy-block', {
        scrollTrigger: {
          trigger: privacyRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from('.cta-section', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#09090b] text-[#e4e4e7] selection:bg-[#00d4ff]/20 selection:text-white"
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;700&display=swap');
      `}</style>

      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-40 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#00d4ff]/20 bg-[#00d4ff]/10">
              <div className="h-3 w-3 rounded-full bg-[#00d4ff]" />
            </div>
            <span className="text-lg font-medium tracking-tight text-white">
              OiPer
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-[#a1a1aa] md:flex">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a
              href="#performance"
              className="transition-colors hover:text-white"
            >
              Performance
            </a>
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
          </div>
          <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10">
            Download
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      >
        <div className="hero-glow absolute h-[800px] w-[800px] rounded-full bg-[#00d4ff]/[0.04] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-2 overflow-hidden">
            <h1
              className="hero-title-line text-6xl leading-[0.9] font-bold tracking-tighter text-white md:text-8xl lg:text-9xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Voice to Text,
            </h1>
          </div>
          <div className="mb-8 overflow-hidden">
            <h1
              className="hero-title-line text-6xl leading-[0.9] font-bold tracking-tighter md:text-8xl lg:text-9xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/60 bg-clip-text text-transparent">
                Privately.
              </span>
            </h1>
          </div>
          <p className="hero-subtitle mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#71717a] md:text-xl">
            Hold a hotkey. Speak. Release. Your words appear instantly —
            transcribed on your machine, never sent to the cloud. That&apos;s
            OiPer.
          </p>
          <div className="hero-cta flex items-center justify-center gap-4">
            <button className="rounded-xl bg-[#00d4ff] px-8 py-3.5 text-sm font-semibold text-[#09090b] transition-colors hover:bg-[#00d4ff]/90">
              Download for Free
            </button>
            <button className="rounded-xl border border-white/10 px-8 py-3.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      </section>

      {/* Features */}
      <section ref={featuresRef} id="features" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
              Core Features
            </p>
            <h2
              className="text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Engineered for <br className="hidden md:block" />
              <span className="text-[#00d4ff]/80 italic">simplicity</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#00d4ff]/10 hover:bg-white/[0.04]"
              >
                <div className="mb-6 text-[#00d4ff]/70 transition-colors group-hover:text-[#00d4ff]">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#71717a]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section ref={benchRef} id="performance" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff]/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
              Performance
            </p>
            <h2
              className="text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Unreasonably <span className="italic">fast</span>
            </h2>
            <p className="mt-4 text-sm text-[#71717a]">
              30-second English audio benchmark
            </p>
          </div>
          <div className="space-y-6">
            {benchmarks.map((b) => (
              <div key={b.name} className="flex items-center gap-6">
                <div className="w-48 shrink-0 text-right">
                  <span
                    className={`text-sm ${b.highlight ? 'font-semibold text-white' : 'text-[#71717a]'}`}
                  >
                    {b.name}
                  </span>
                </div>
                <div className="relative h-10 flex-1 overflow-hidden rounded-lg bg-white/[0.03]">
                  <div
                    className={`bench-bar h-full rounded-lg ${b.highlight ? 'bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/60' : 'bg-white/10'}`}
                    style={{ width: `${b.bar}%` }}
                  />
                </div>
                <div className="w-16 shrink-0">
                  <span
                    className={`font-mono text-sm ${b.highlight ? 'font-bold text-[#00d4ff]' : 'text-[#52525b]'}`}
                  >
                    {b.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section ref={privacyRef} id="privacy" className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
              Privacy & Security
            </p>
            <h2
              className="text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your data stays <span className="italic">yours</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="privacy-block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-[#00d4ff]"
                >
                  <path
                    d="M12 2L4 7v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="mb-4 text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Local Processing
              </h3>
              <ul className="space-y-3 text-sm text-[#71717a]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00d4ff]" />
                  Transcription runs locally on your machine
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00d4ff]" />
                  Activity logs and audio remain on-device
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00d4ff]" />
                  Full control over your data at all times
                </li>
              </ul>
            </div>
            <div className="privacy-block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-[#a1a1aa]"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3
                className="mb-4 text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Online Services
              </h3>
              <p className="mb-4 text-xs tracking-[0.2em] text-[#52525b] uppercase">
                Optional
              </p>
              <ul className="space-y-3 text-sm text-[#71717a]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#52525b]" />
                  Online optimization is completely opt-in
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#52525b]" />
                  Requires your own API key
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#52525b]" />
                  Enable or disable at any time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Settings / Configuration */}
      <section className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
              Configuration
            </p>
            <h2
              className="text-4xl font-bold tracking-tight text-white md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tune every <span className="italic">detail</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Speech Models',
                desc: 'Select and download models. Choose sizes that match your hardware.',
              },
              {
                title: 'Backend Control',
                desc: 'Auto-detect, CPU-only, or GPU acceleration. Your choice.',
              },
              {
                title: 'LLM Transcription',
                desc: 'Route through Gemini Flash, specialized models, or your own provider for extreme accuracy.',
              },
              {
                title: 'Online Providers',
                desc: 'Custom base URLs, API key management, model configuration.',
              },
              {
                title: 'Text Optimization',
                desc: 'Clean up transcriptions locally or with an online service.',
              },
              {
                title: 'Advanced Tuning',
                desc: 'Fine-tune for technical terminology and specialized content.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="feature-card rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#00d4ff]/10"
              >
                <div className="mb-3 font-mono text-xs text-[#00d4ff]/50">
                  0{i + 1}
                </div>
                <h4 className="mb-2 text-sm font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#52525b]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative py-32">
        <div className="cta-section mx-auto max-w-3xl px-6 text-center">
          <h2
            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to speak <span className="text-[#00d4ff] italic">freely</span>
            ?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-[#71717a]">
            Download OiPer Desktop and experience voice-to-text that respects
            your privacy, your time, and your workflow.
          </p>
          <button className="rounded-xl bg-[#00d4ff] px-10 py-4 font-semibold text-[#09090b] transition-colors hover:bg-[#00d4ff]/90">
            Download OiPer Desktop
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#00d4ff]/10">
              <div className="h-2 w-2 rounded-full bg-[#00d4ff]" />
            </div>
            <span className="text-sm text-[#52525b]">OiPer Desktop</span>
          </div>
          <p className="text-xs text-[#3f3f46]">
            Privacy-first voice-to-text. Built with native performance.
          </p>
        </div>
      </footer>
    </div>
  )
}
