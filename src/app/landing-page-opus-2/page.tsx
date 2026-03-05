'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const benchmarks = [
  { name: 'OIPER DESKTOP', time: 1.5, highlight: true },
  { name: 'LEMONFOX API', time: 3.27, highlight: false },
  { name: 'PYTHON FASTER-WHISPER', time: 3.55, highlight: false },
  { name: 'OPENAI WHISPER 1 API', time: 6.46, highlight: false },
]

export default function LandingPageOpus2() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brutalist-hero-text', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1,
        stagger: 0.2,
        ease: 'power4.inOut',
        delay: 0.2,
      })

      gsap.from('.brutalist-counter', {
        textContent: 0,
        duration: 2,
        snap: { textContent: 0.1 },
        ease: 'power2.out',
        delay: 0.8,
      })

      gsap.from('.brutalist-label', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 1,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
        })
      })

      gsap.utils.toArray<HTMLElement>('.slide-up').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.bench-fill').forEach((bar, i) => {
        gsap.from(bar, {
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          width: 0,
          duration: 1.2,
          delay: i * 0.15,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-black selection:bg-[#39FF14] selection:text-black"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 right-0 left-0 z-40 border-b-4 border-black bg-white">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 border-2 border-black bg-[#39FF14]" />
            <span
              className="text-base font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              OiPer
            </span>
          </div>
          <div className="hidden items-center gap-6 text-xs font-bold tracking-[0.15em] uppercase md:flex">
            <a
              href="#features"
              className="border-b-2 border-transparent transition-colors hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              Features
            </a>
            <a
              href="#speed"
              className="border-b-2 border-transparent transition-colors hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              Speed
            </a>
            <a
              href="#privacy"
              className="border-b-2 border-transparent transition-colors hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              Privacy
            </a>
          </div>
          <button className="border-2 border-black bg-black px-5 py-2 text-xs font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#39FF14] hover:text-black">
            Download
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col justify-center border-b-4 border-black pt-14">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <p
                className="brutalist-hero-text mb-6 text-xs tracking-[0.3em] text-black/50 uppercase"
                style={{ clipPath: 'inset(0 0 0 0)' }}
              >
                Privacy-First Voice-To-Text
              </p>
              <h1
                className="brutalist-hero-text"
                style={{
                  clipPath: 'inset(0 0 0 0)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span className="block text-5xl leading-[0.85] font-extrabold tracking-tighter uppercase md:text-7xl lg:text-[6rem]">
                  SPEAK.
                </span>
              </h1>
              <h1
                className="brutalist-hero-text"
                style={{
                  clipPath: 'inset(0 0 0 0)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span className="block text-5xl leading-[0.85] font-extrabold tracking-tighter uppercase md:text-7xl lg:text-[6rem]">
                  TRANSCRIBE.
                </span>
              </h1>
              <h1
                className="brutalist-hero-text"
                style={{
                  clipPath: 'inset(0 0 0 0)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span
                  className="block text-5xl leading-[0.85] font-extrabold tracking-tighter text-[#39FF14] uppercase md:text-7xl lg:text-[6rem]"
                  style={{ WebkitTextStroke: '2px black' }}
                >
                  LOCALLY.
                </span>
              </h1>
              <p
                className="brutalist-hero-text mt-8 max-w-xl text-sm leading-relaxed text-black/60 md:text-base"
                style={{ clipPath: 'inset(0 0 0 0)' }}
              >
                Hold a hotkey. Speak. Release. Your words appear instantly in
                any application. No cloud. No data collection. No compromise.
              </p>
              <div
                className="brutalist-hero-text mt-10 flex gap-4"
                style={{ clipPath: 'inset(0 0 0 0)' }}
              >
                <button className="border-2 border-black bg-black px-8 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#39FF14] hover:text-black">
                  Get OiPer
                </button>
                <button className="border-2 border-black bg-transparent px-8 py-4 text-xs font-bold tracking-[0.2em] text-black uppercase transition-colors hover:bg-black hover:text-white">
                  Source Code
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 pb-4 md:col-span-4">
              <div className="border-4 border-black p-6">
                <div
                  className="brutalist-counter text-5xl font-extrabold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  1.5
                </div>
                <div className="brutalist-label mt-1 text-xs tracking-[0.2em] text-black/50 uppercase">
                  Seconds / 30s audio
                </div>
              </div>
              <div className="border-4 border-black bg-[#39FF14] p-6">
                <div className="brutalist-label text-xs font-bold tracking-[0.2em] uppercase">
                  100% Local
                </div>
                <div className="brutalist-label mt-1 text-xs tracking-[0.2em] text-black/50 uppercase">
                  Zero cloud dependency
                </div>
              </div>
              <div className="border-4 border-black p-6">
                <div className="brutalist-label text-xs font-bold tracking-[0.2em] uppercase">
                  GPU Accelerated
                </div>
                <div className="brutalist-label mt-1 text-xs tracking-[0.2em] text-black/50 uppercase">
                  Native performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-4 border-black p-6">
            <span className="text-xs tracking-[0.3em] text-black/40 uppercase">
              01 / Features
            </span>
          </div>
          <div className="grid md:grid-cols-2">
            {[
              {
                num: '001',
                title: 'HOLD TO RECORD',
                desc: 'Press your global hotkey to start. Release to transcribe. Text is injected directly into your active application with zero friction.',
              },
              {
                num: '002',
                title: 'LOCAL PROCESSING',
                desc: 'Transcription runs entirely on your machine. Audio and logs never leave your device. Privacy is the default, not an option.',
              },
              {
                num: '003',
                title: 'NATIVE SPEED',
                desc: 'Written in native code with GPU acceleration. Transcribes 30 seconds of speech in 1.5 seconds. No Python. No Electron.',
              },
              {
                num: '004',
                title: 'FULL CONTROL',
                desc: 'Choose your backend (auto/CPU/GPU). Configure API keys. Select models. Local or online text cleanup. Your workflow, your rules.',
              },
            ].map((f, i) => (
              <div
                key={f.num}
                className={`slide-up p-8 md:p-12 ${i < 2 ? 'border-b-4 border-black' : ''} ${i % 2 === 0 ? 'border-black md:border-r-4' : ''}`}
              >
                <span
                  className="text-xs font-bold text-black/30"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {f.num}
                </span>
                <h3
                  className="mt-4 mb-4 text-xl font-extrabold tracking-tight uppercase md:text-2xl"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/60">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section id="speed" className="border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-4 border-black p-6">
            <span className="text-xs tracking-[0.3em] text-black/40 uppercase">
              02 / Performance
            </span>
          </div>
          <div className="p-8 md:p-16">
            <h2
              className="section-reveal mb-4 text-3xl font-extrabold tracking-tight uppercase md:text-5xl"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                clipPath: 'inset(0 0 0 0)',
              }}
            >
              BENCHMARK: 30S ENGLISH AUDIO
            </h2>
            <p className="slide-up mb-12 max-w-lg text-sm text-black/50">
              Raw transcription speed comparison. OiPer runs natively with GPU
              acceleration — no Python runtime, no API latency.
            </p>
            <div className="space-y-4">
              {benchmarks.map((b) => (
                <div key={b.name} className="slide-up">
                  <div className="mb-1 flex items-center justify-between">
                    <span
                      className={`text-xs font-bold tracking-[0.15em] uppercase ${b.highlight ? 'text-black' : 'text-black/40'}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {b.name}
                    </span>
                    <span
                      className={`text-xs font-bold ${b.highlight ? 'bg-black px-2 py-0.5 text-[#39FF14]' : 'text-black/40'}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {b.time}s
                    </span>
                  </div>
                  <div className="relative h-8 border-2 border-black bg-white">
                    <div
                      className={`bench-fill h-full ${b.highlight ? 'bg-[#39FF14]' : 'bg-black/10'}`}
                      style={{ width: `${(b.time / 6.46) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-4 border-black p-6">
            <span className="text-xs tracking-[0.3em] text-black/40 uppercase">
              03 / Privacy
            </span>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="border-black p-8 md:border-r-4 md:p-16">
              <div
                className="section-reveal"
                style={{ clipPath: 'inset(0 0 0 0)' }}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center bg-black">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8 text-[#39FF14]"
                  >
                    <path
                      d="M12 2L4 7v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-6 text-2xl font-extrabold tracking-tight uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  LOCAL BY DEFAULT
                </h3>
                <ul className="space-y-4 text-sm text-black/60">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-[#39FF14]" />
                    Transcription runs entirely on your machine
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-[#39FF14]" />
                    Activity logs and audio stay on-device
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-[#39FF14]" />
                    No data sent anywhere without your choice
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t-4 border-black p-8 md:border-t-0 md:p-16">
              <div
                className="section-reveal"
                style={{ clipPath: 'inset(0 0 0 0)' }}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center border-4 border-black">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8 text-black/40"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 8v4l3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3
                  className="mb-2 text-2xl font-extrabold tracking-tight uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  ONLINE: OPTIONAL
                </h3>
                <p className="mb-6 text-xs tracking-[0.2em] text-black/30 uppercase">
                  Your API keys. Your decision.
                </p>
                <ul className="space-y-4 text-sm text-black/60">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-black/20" />
                    Online optimization is completely opt-in
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-black/20" />
                    Uses your own API key — we have no access
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-black/20" />
                    Toggle on or off at any time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-4 border-black p-6">
            <span className="text-xs tracking-[0.3em] text-black/40 uppercase">
              04 / Configuration
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {[
              {
                title: 'SPEECH MODELS',
                desc: 'Download and select models sized for your hardware.',
              },
              {
                title: 'BACKEND',
                desc: 'Auto / CPU / GPU — choose your compute path.',
              },
              {
                title: 'LLM ROUTING',
                desc: 'Gemini Flash, custom models for extreme accuracy.',
              },
              {
                title: 'API CONFIG',
                desc: 'Custom URLs, keys, model names. Full control.',
              },
              {
                title: 'TEXT CLEANUP',
                desc: 'Local or online post-processing of transcriptions.',
              },
              {
                title: 'TERMINOLOGY',
                desc: 'Fine-tune for technical and specialized content.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`slide-up border-r-2 border-b-2 border-black p-6 md:p-8 ${i >= 3 ? 'border-b-0' : ''}`}
              >
                <span
                  className="text-[10px] font-bold text-black/20"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  CFG.{String(i + 1).padStart(2, '0')}
                </span>
                <h4
                  className="mt-3 mb-2 text-xs font-bold tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-black/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1400px] p-8 md:p-16">
          <div className="slide-up grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2
                className="text-3xl font-extrabold tracking-tight uppercase md:text-5xl"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                DOWNLOAD
                <br />
                <span className="text-[#39FF14]">OIPER DESKTOP</span>
              </h2>
            </div>
            <div className="flex md:col-span-4 md:justify-end">
              <button className="border-2 border-[#39FF14] bg-[#39FF14] px-10 py-5 text-xs font-bold tracking-[0.2em] text-black uppercase transition-colors hover:bg-transparent hover:text-[#39FF14]">
                Get It Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black p-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 border border-black bg-[#39FF14]" />
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              OiPer Desktop
            </span>
          </div>
          <span className="text-[10px] tracking-[0.15em] text-black/30 uppercase">
            Privacy-first voice transcription. Native performance.
          </span>
        </div>
      </footer>
    </div>
  )
}
