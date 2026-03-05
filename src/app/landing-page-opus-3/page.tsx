'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, highlight: true },
  { name: 'Lemonfox API', time: 3.27, highlight: false },
  { name: 'Python Faster-Whisper', time: 3.55, highlight: false },
  { name: 'OpenAI Whisper 1 API', time: 6.46, highlight: false },
]

const features = [
  {
    title: 'Effortless Recording',
    desc: 'Hold your hotkey. Speak naturally. Release. Your words flow into any application, as if you typed them yourself.',
  },
  {
    title: 'Rooted Locally',
    desc: 'Everything runs on your machine. Your voice, your data, your logs never travel beyond your device.',
  },
  {
    title: 'Swift as Thought',
    desc: 'Native code, GPU acceleration. 30 seconds of speech becomes text in 1.5 seconds.',
  },
  {
    title: 'Shaped by You',
    desc: 'Select models, choose backends, configure providers. Local or online optimization. You shape every detail.',
  },
]

export default function LandingPageOpus3() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.organic-hero-text', {
        y: 80,
        opacity: 0,
        stagger: 0.18,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.2,
      })

      gsap.from('.hero-blob', {
        scale: 0,
        opacity: 0,
        duration: 2.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.4,
      })

      gsap.to('.hero-blob', {
        y: 15,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      })

      gsap.to('.blob-rotate', {
        rotate: 360,
        duration: 60,
        ease: 'none',
        repeat: -1,
      })

      gsap.utils.toArray<HTMLElement>('.organic-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-text').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.bench-grow').forEach((bar, i) => {
        gsap.from(bar, {
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scaleY: 0,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
          transformOrigin: 'bottom center',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen selection:bg-[#C4553A]/20 selection:text-[#C4553A]"
      style={{
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: '#FDF6EC',
        color: '#3D4A3C',
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700&family=Outfit:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Subtle texture */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Nav */}
      <nav
        className="fixed top-0 right-0 left-0 z-40 backdrop-blur-xl"
        style={{ backgroundColor: '#FDF6EC' + 'dd' }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-8 w-8">
              <circle cx="16" cy="16" r="14" fill="#C4553A" opacity="0.15" />
              <circle cx="16" cy="16" r="8" fill="#C4553A" opacity="0.3" />
              <circle cx="16" cy="16" r="4" fill="#C4553A" />
            </svg>
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
            >
              OiPer
            </span>
          </div>
          <div
            className="hidden items-center gap-8 text-sm md:flex"
            style={{ color: '#3D4A3C99' }}
          >
            <a
              href="#features"
              className="transition-colors hover:text-[#C4553A]"
            >
              Features
            </a>
            <a href="#speed" className="transition-colors hover:text-[#C4553A]">
              Speed
            </a>
            <a
              href="#privacy"
              className="transition-colors hover:text-[#C4553A]"
            >
              Privacy
            </a>
          </div>
          <button
            className="rounded-full px-5 py-2 text-sm font-medium transition-all hover:shadow-lg"
            style={{ backgroundColor: '#C4553A', color: '#FDF6EC' }}
          >
            Download
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="hero-blob blob-rotate absolute top-[10%] right-[-10%] h-[600px] w-[600px] opacity-30">
          <svg viewBox="0 0 500 500" className="h-full w-full">
            <path
              d="M440,310Q420,370,370,420Q310,480,240,460Q170,440,110,390Q50,340,50,260Q50,180,100,120Q150,60,230,40Q310,20,370,80Q440,140,450,220Q460,300,440,310Z"
              fill="#C4553A"
              opacity="0.15"
            />
          </svg>
        </div>
        <div className="hero-blob absolute bottom-[5%] left-[-5%] h-[400px] w-[400px] opacity-20">
          <svg viewBox="0 0 500 500" className="h-full w-full">
            <path
              d="M420,290Q400,350,340,380Q280,410,220,400Q160,390,110,340Q60,290,60,230Q60,170,110,120Q160,70,230,50Q300,30,360,80Q420,130,430,200Q440,270,420,290Z"
              fill="#3D4A3C"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <p
              className="organic-hero-text mb-6 text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: '#C4553A' }}
            >
              Voice to Text, Naturally
            </p>
            <h1
              className="organic-hero-text mb-2"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              <span
                className="text-5xl leading-[1] font-bold tracking-tight md:text-7xl lg:text-8xl"
                style={{ color: '#2A332A' }}
              >
                Your voice,
              </span>
            </h1>
            <h1
              className="organic-hero-text mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              <span className="text-5xl leading-[1] font-bold tracking-tight md:text-7xl lg:text-8xl">
                <em className="font-normal" style={{ color: '#C4553A' }}>
                  your device.
                </em>
              </span>
            </h1>
            <p
              className="organic-hero-text mb-10 max-w-xl text-lg leading-relaxed md:text-xl"
              style={{ color: '#3D4A3C99' }}
            >
              OiPer transforms your speech into text with a simple hotkey —
              running entirely on your machine. Fast, private, and remarkably
              simple.
            </p>
            <div className="organic-hero-text flex flex-wrap gap-4">
              <button
                className="rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#C4553A]/20"
                style={{ backgroundColor: '#C4553A', color: '#FDF6EC' }}
              >
                Download for Free
              </button>
              <button
                className="rounded-full border-2 px-8 py-3.5 text-sm font-medium transition-all hover:scale-[1.02]"
                style={{ borderColor: '#3D4A3C33', color: '#3D4A3C' }}
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p
              className="reveal-text mb-4 text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: '#C4553A' }}
            >
              Thoughtfully crafted
            </p>
            <h2
              className="reveal-text text-4xl font-bold tracking-tight md:text-6xl"
              style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
            >
              Simple by{' '}
              <em className="font-normal" style={{ color: '#C4553A' }}>
                design
              </em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="organic-card rounded-3xl p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#3D4A3C]/5 md:p-10"
                style={{
                  backgroundColor: '#F5EBD9',
                  border: '1px solid #3D4A3C10',
                }}
              >
                <div
                  className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold"
                  style={{
                    backgroundColor:
                      i === 0
                        ? '#C4553A'
                        : i === 1
                          ? '#3D4A3C'
                          : i === 2
                            ? '#D4883A'
                            : '#6B7F6B',
                    color: '#FDF6EC',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="mb-3 text-xl font-bold tracking-tight"
                  style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#3D4A3C88' }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section id="speed" className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p
              className="reveal-text mb-4 text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: '#C4553A' }}
            >
              Performance
            </p>
            <h2
              className="reveal-text text-4xl font-bold tracking-tight md:text-6xl"
              style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
            >
              Remarkably{' '}
              <em className="font-normal" style={{ color: '#C4553A' }}>
                swift
              </em>
            </h2>
            <p
              className="reveal-text mt-4 text-sm"
              style={{ color: '#3D4A3C66' }}
            >
              30-second English audio benchmark
            </p>
          </div>
          <div className="flex h-72 items-end justify-center gap-6 md:gap-10">
            {benchmarks.map((b) => (
              <div key={b.name} className="flex flex-col items-center gap-3">
                <span
                  className="text-xs font-bold"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: b.highlight ? '#C4553A' : '#3D4A3C66',
                  }}
                >
                  {b.time}s
                </span>
                <div
                  className="bench-grow w-14 rounded-t-2xl md:w-20"
                  style={{
                    height: `${(b.time / 6.46) * 200}px`,
                    backgroundColor: b.highlight ? '#C4553A' : '#3D4A3C15',
                  }}
                />
                <span
                  className="max-w-[80px] text-center text-[10px] font-medium md:text-xs"
                  style={{ color: b.highlight ? '#2A332A' : '#3D4A3C66' }}
                >
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p
              className="reveal-text mb-4 text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: '#C4553A' }}
            >
              Privacy & Security
            </p>
            <h2
              className="reveal-text text-4xl font-bold tracking-tight md:text-6xl"
              style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
            >
              Rooted in{' '}
              <em className="font-normal" style={{ color: '#3D4A3C' }}>
                trust
              </em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="organic-card rounded-3xl p-10"
              style={{ backgroundColor: '#3D4A3C', color: '#FDF6EC' }}
            >
              <svg
                viewBox="0 0 48 48"
                className="mb-6 h-12 w-12"
                style={{ color: '#C4553A' }}
              >
                <path
                  d="M24 4L8 14v10c0 11.1 7.68 21.48 16 24 8.32-2.52 16-12.9 16-24V14L24 4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M18 24l4 4 8-8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <h3
                className="mb-4 text-2xl font-bold tracking-tight"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Local Processing
              </h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#C4553A' }}
                  />
                  Transcription runs entirely on your machine
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#C4553A' }}
                  />
                  Activity logs and audio stay on-device
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#C4553A' }}
                  />
                  Complete control over your data
                </li>
              </ul>
            </div>
            <div
              className="organic-card rounded-3xl p-10"
              style={{
                backgroundColor: '#F5EBD9',
                border: '1px solid #3D4A3C10',
              }}
            >
              <svg
                viewBox="0 0 48 48"
                className="mb-6 h-12 w-12"
                style={{ color: '#3D4A3C66' }}
              >
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M6 24h36M24 6a30.6 30.6 0 0 1 8 18 30.6 30.6 0 0 1-8 18 30.6 30.6 0 0 1-8-18A30.6 30.6 0 0 1 24 6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <h3
                className="mb-2 text-2xl font-bold tracking-tight"
                style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
              >
                Online Services
              </h3>
              <p
                className="mb-4 text-xs tracking-[0.2em] uppercase"
                style={{ color: '#3D4A3C44' }}
              >
                Optional
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#3D4A3C88' }}>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#3D4A3C33' }}
                  />
                  Online optimization is completely opt-in
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#3D4A3C33' }}
                  />
                  Uses your own API key
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#3D4A3C33' }}
                  />
                  Enable or disable whenever you choose
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p
              className="reveal-text mb-4 text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: '#C4553A' }}
            >
              Configuration
            </p>
            <h2
              className="reveal-text text-4xl font-bold tracking-tight md:text-6xl"
              style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
            >
              Grow your{' '}
              <em className="font-normal" style={{ color: '#C4553A' }}>
                workflow
              </em>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Speech Models',
                desc: 'Select and download models sized for your machine.',
              },
              {
                title: 'Backend Choice',
                desc: 'Auto, CPU, or GPU acceleration.',
              },
              {
                title: 'LLM Routing',
                desc: 'Gemini Flash, custom models, extreme accuracy.',
              },
              {
                title: 'Provider Setup',
                desc: 'Custom URLs, API keys, model names.',
              },
              {
                title: 'Text Refinement',
                desc: 'Local or online post-processing.',
              },
              {
                title: 'Specialization',
                desc: 'Technical terminology and domain tuning.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="organic-card rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-[#3D4A3C]/5"
                style={{
                  backgroundColor: '#F5EBD9',
                  border: '1px solid #3D4A3C10',
                }}
              >
                <div
                  className="mb-4 flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold"
                  style={{ backgroundColor: '#C4553A20', color: '#C4553A' }}
                >
                  {i + 1}
                </div>
                <h4
                  className="mb-2 text-sm font-bold"
                  style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#3D4A3C66' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="reveal-text">
            <h2
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              style={{ fontFamily: "'Fraunces', serif", color: '#2A332A' }}
            >
              Let your voice{' '}
              <em className="font-normal" style={{ color: '#C4553A' }}>
                bloom
              </em>
            </h2>
            <p
              className="mx-auto mb-10 max-w-md text-sm"
              style={{ color: '#3D4A3C66' }}
            >
              Download OiPer Desktop and experience voice-to-text that is fast,
              private, and built around you.
            </p>
            <button
              className="rounded-full px-10 py-4 font-semibold transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#C4553A]/20"
              style={{ backgroundColor: '#C4553A', color: '#FDF6EC' }}
            >
              Download OiPer Desktop
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ borderTop: '1px solid #3D4A3C10' }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <circle cx="12" cy="12" r="5" fill="#C4553A" />
            </svg>
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "'Fraunces', serif", color: '#3D4A3C66' }}
            >
              OiPer Desktop
            </span>
          </div>
          <p className="text-xs" style={{ color: '#3D4A3C44' }}>
            Privacy-first voice-to-text. Rooted in performance.
          </p>
        </div>
      </footer>
    </div>
  )
}
