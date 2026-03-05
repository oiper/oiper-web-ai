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

export default function LandingPageOpus4() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cyber-title', {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
      })

      gsap.from('.cyber-sub', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1,
      })

      gsap.from('.neon-sun', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
        delay: 0.3,
      })

      gsap.from('.grid-floor', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.6,
      })

      gsap.to('.scanline', {
        y: '100vh',
        duration: 8,
        ease: 'none',
        repeat: -1,
      })

      gsap.to('.neon-pulse', {
        boxShadow:
          '0 0 30px rgba(255, 45, 120, 0.6), 0 0 60px rgba(255, 45, 120, 0.3)',
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      gsap.utils.toArray<HTMLElement>('.cyber-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.cyber-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.bar-animate').forEach((bar, i) => {
        gsap.from(bar, {
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          duration: 1,
          delay: i * 0.12,
          ease: 'power3.out',
          transformOrigin: 'left center',
        })
      })

      gsap.utils.toArray<HTMLElement>('.terminal-line').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -20,
          duration: 0.4,
          delay: i * 0.08,
          ease: 'power2.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden selection:bg-[#FF2D78]/30 selection:text-[#FF2D78]"
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        backgroundColor: '#0a0a1a',
        color: '#c4c9e2',
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Scanline effect */}
      <div
        className="scanline pointer-events-none fixed right-0 left-0 z-50 h-[2px] opacity-[0.03]"
        style={{ background: 'white', top: '-2px' }}
      />

      {/* CRT vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Nav */}
      <nav
        className="fixed top-0 right-0 left-0 z-40"
        style={{
          backgroundColor: '#0a0a1aee',
          borderBottom: '1px solid #FF2D7830',
        }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor: '#FF2D78',
                boxShadow: '0 0 10px #FF2D78, 0 0 20px #FF2D7866',
              }}
            />
            <span
              className="text-sm font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#FF2D78' }}
            >
              OiPer
            </span>
          </div>
          <div
            className="hidden items-center gap-8 text-xs tracking-[0.2em] uppercase md:flex"
            style={{ color: '#c4c9e266' }}
          >
            <a
              href="#features"
              className="transition-colors hover:text-[#00F0FF]"
            >
              Systems
            </a>
            <a href="#speed" className="transition-colors hover:text-[#00F0FF]">
              Benchmarks
            </a>
            <a
              href="#privacy"
              className="transition-colors hover:text-[#00F0FF]"
            >
              Security
            </a>
          </div>
          <button
            className="neon-pulse rounded border px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-colors"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              borderColor: '#FF2D78',
              color: '#FF2D78',
              boxShadow: '0 0 15px rgba(255, 45, 120, 0.3)',
            }}
          >
            Download
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-14">
        {/* Perspective grid floor */}
        <div
          className="grid-floor absolute right-0 bottom-0 left-0 h-[40%]"
          style={{
            background: 'linear-gradient(transparent, #FF2D7808)',
            backgroundImage: `
            linear-gradient(90deg, #FF2D7815 1px, transparent 1px),
            linear-gradient(0deg, #FF2D7815 1px, transparent 1px)
          `,
            backgroundSize: '80px 40px',
            transform: 'perspective(500px) rotateX(45deg)',
            transformOrigin: 'bottom center',
          }}
        />

        {/* Synthwave sun */}
        <div className="neon-sun absolute top-[15%] left-1/2 -translate-x-1/2">
          <div
            className="h-48 w-48 rounded-full md:h-72 md:w-72"
            style={{
              background:
                'linear-gradient(180deg, #FF2D78 0%, #8B5CF6 50%, transparent 100%)',
              opacity: 0.15,
              filter: 'blur(2px)',
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-2 overflow-hidden rounded-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-full"
                style={{
                  height: '3px',
                  backgroundColor: '#0a0a1a',
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="overflow-hidden">
            <p
              className="cyber-title mb-8 text-xs tracking-[0.5em] uppercase"
              style={{ color: '#00F0FF', fontFamily: "'Orbitron', sans-serif" }}
            >
              // Privacy-First Voice Engine
            </p>
          </div>
          <div className="overflow-hidden">
            <h1
              className="cyber-title text-5xl leading-[0.85] font-black tracking-tight uppercase md:text-7xl lg:text-[6.5rem]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #FF2D78, #8B5CF6, #00F0FF)',
                }}
              >
                Voice
              </span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="cyber-title text-5xl leading-[0.85] font-black tracking-tight uppercase md:text-7xl lg:text-[6.5rem]"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#e4e6f0' }}
            >
              Decoded
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="cyber-title text-5xl leading-[0.85] font-black tracking-tight uppercase md:text-7xl lg:text-[6.5rem]"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#00F0FF' }}
            >
              Locally
            </h1>
          </div>
          <p
            className="cyber-sub mx-auto mt-8 max-w-xl text-sm leading-relaxed md:text-base"
            style={{ color: '#c4c9e280' }}
          >
            Hold a hotkey. Speak. Release. Instant transcription on your device
            — no cloud, no latency, no compromise.
          </p>
          <div className="cyber-sub mt-10 flex justify-center gap-4">
            <button
              className="rounded px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all hover:scale-105"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)',
                color: 'white',
                boxShadow: '0 0 20px #FF2D7844, 0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              Initialize Download
            </button>
            <button
              className="rounded border px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all hover:scale-105"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                borderColor: '#00F0FF40',
                color: '#00F0FF',
              }}
            >
              View Specs
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p
              className="cyber-reveal mb-4 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#FF2D78' }}
            >
              // Core Systems
            </p>
            <h2
              className="cyber-reveal text-3xl font-black tracking-tight uppercase md:text-5xl"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#e4e6f0' }}
            >
              System <span style={{ color: '#00F0FF' }}>Architecture</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                tag: 'SYS.REC',
                title: 'Hotkey Recording',
                desc: 'Global hotkey activation. Press to record, release to transcribe. Text injected directly into your active application.',
                color: '#FF2D78',
              },
              {
                tag: 'SYS.SEC',
                title: 'Local Processing',
                desc: 'All transcription runs on-device. Audio, logs, and data never leave your machine. Zero cloud dependency.',
                color: '#00F0FF',
              },
              {
                tag: 'SYS.PER',
                title: 'Native Engine',
                desc: 'Written in native code with GPU acceleration. 30 seconds of audio in 1.5 seconds. No runtime overhead.',
                color: '#8B5CF6',
              },
              {
                tag: 'SYS.CFG',
                title: 'Full Control',
                desc: 'Choose backends, models, and providers. Configure LLM routing. Local or online text cleanup. Your rules.',
                color: '#FF2D78',
              },
            ].map((f) => (
              <div
                key={f.tag}
                className="cyber-card group relative overflow-hidden rounded-lg p-8"
                style={{
                  backgroundColor: '#0f0f2a',
                  border: `1px solid ${f.color}20`,
                }}
              >
                <div
                  className="absolute top-0 right-0 left-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${f.color}40, transparent)`,
                  }}
                />
                <span
                  className="text-[10px] font-bold tracking-[0.3em] uppercase"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: f.color + '80',
                  }}
                >
                  {f.tag}
                </span>
                <h3
                  className="mt-3 mb-3 text-lg font-bold tracking-wide uppercase"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#e4e6f0',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#c4c9e266' }}
                >
                  {f.desc}
                </p>
                <div
                  className="absolute right-0 bottom-0 left-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${f.color}60, transparent)`,
                  }}
                />
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
              className="cyber-reveal mb-4 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#00F0FF' }}
            >
              // Performance Metrics
            </p>
            <h2
              className="cyber-reveal text-3xl font-black tracking-tight uppercase md:text-5xl"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#e4e6f0' }}
            >
              Speed <span style={{ color: '#FF2D78' }}>Analysis</span>
            </h2>
            <p
              className="cyber-reveal mt-3 text-xs"
              style={{
                color: '#c4c9e240',
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              BENCHMARK: 30 SEC ENGLISH AUDIO
            </p>
          </div>

          {/* Terminal-style benchmark */}
          <div
            className="overflow-hidden rounded-lg"
            style={{
              backgroundColor: '#0f0f2a',
              border: '1px solid #FF2D7820',
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ borderBottom: '1px solid #FF2D7815' }}
            >
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: '#FF2D78' }}
              />
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: '#8B5CF6' }}
              />
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: '#00F0FF' }}
              />
              <span
                className="ml-2 text-[10px] tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#c4c9e230',
                }}
              >
                oiper --benchmark
              </span>
            </div>
            <div className="space-y-4 p-6">
              {benchmarks.map((b) => (
                <div key={b.name} className="terminal-line">
                  <div className="mb-1.5 flex items-center gap-4">
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: b.highlight ? '#00F0FF' : '#c4c9e240',
                        minWidth: '200px',
                      }}
                    >
                      {b.highlight && (
                        <span style={{ color: '#00F0FF' }}>&gt; </span>
                      )}
                      {b.name}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: b.highlight ? '#FF2D78' : '#c4c9e230',
                      }}
                    >
                      {b.time}s
                    </span>
                  </div>
                  <div
                    className="h-4 overflow-hidden rounded-sm"
                    style={{ backgroundColor: '#1a1a3a' }}
                  >
                    <div
                      className="bar-animate h-full rounded-sm"
                      style={{
                        width: `${(b.time / 6.46) * 100}%`,
                        background: b.highlight
                          ? 'linear-gradient(90deg, #FF2D78, #8B5CF6, #00F0FF)'
                          : '#c4c9e210',
                        boxShadow: b.highlight ? '0 0 10px #FF2D7844' : 'none',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p
              className="cyber-reveal mb-4 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#8B5CF6' }}
            >
              // Security Protocol
            </p>
            <h2
              className="cyber-reveal text-3xl font-black tracking-tight uppercase md:text-5xl"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#e4e6f0' }}
            >
              Data <span style={{ color: '#00F0FF' }}>Sovereignty</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="cyber-card relative overflow-hidden rounded-lg p-8"
              style={{
                backgroundColor: '#0f0f2a',
                border: '1px solid #00F0FF20',
              }}
            >
              <div
                className="absolute top-0 right-0 left-0 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, #00F0FF40, transparent)',
                }}
              />
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: '#00F0FF10',
                  border: '1px solid #00F0FF30',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  style={{ color: '#00F0FF' }}
                >
                  <path
                    d="M12 2L4 7v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3
                className="mb-4 text-lg font-bold tracking-wide uppercase"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#e4e6f0',
                }}
              >
                Local Fortress
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: '#c4c9e260' }}>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 text-[10px]"
                    style={{ color: '#00F0FF' }}
                  >
                    [+]
                  </span>
                  Transcription processed entirely on-device
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 text-[10px]"
                    style={{ color: '#00F0FF' }}
                  >
                    [+]
                  </span>
                  Audio and activity logs stay local
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 text-[10px]"
                    style={{ color: '#00F0FF' }}
                  >
                    [+]
                  </span>
                  No data transmitted without explicit consent
                </li>
              </ul>
            </div>
            <div
              className="cyber-card relative overflow-hidden rounded-lg p-8"
              style={{
                backgroundColor: '#0f0f2a',
                border: '1px solid #8B5CF620',
              }}
            >
              <div
                className="absolute top-0 right-0 left-0 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, #8B5CF640, transparent)',
                }}
              />
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: '#8B5CF610',
                  border: '1px solid #8B5CF630',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  style={{ color: '#8B5CF6' }}
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
                className="mb-2 text-lg font-bold tracking-wide uppercase"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#e4e6f0',
                }}
              >
                Online Mode
              </h3>
              <p
                className="mb-4 text-[10px] tracking-[0.3em] uppercase"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#8B5CF640',
                }}
              >
                Optional Protocol
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#c4c9e260' }}>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 text-[10px]"
                    style={{ color: '#8B5CF6' }}
                  >
                    [~]
                  </span>
                  Online optimization fully opt-in
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 text-[10px]"
                    style={{ color: '#8B5CF6' }}
                  >
                    [~]
                  </span>
                  Your API keys, your infrastructure
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 text-[10px]"
                    style={{ color: '#8B5CF6' }}
                  >
                    [~]
                  </span>
                  Toggle at any time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="relative py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p
              className="cyber-reveal mb-4 text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#FF2D78' }}
            >
              // Configuration Matrix
            </p>
            <h2
              className="cyber-reveal text-3xl font-black tracking-tight uppercase md:text-5xl"
              style={{ fontFamily: "'Orbitron', sans-serif", color: '#e4e6f0' }}
            >
              System <span style={{ color: '#8B5CF6' }}>Tuning</span>
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                tag: 'MDL',
                title: 'Speech Models',
                desc: 'Download and swap models for your hardware profile.',
                color: '#FF2D78',
              },
              {
                tag: 'BKD',
                title: 'Backend',
                desc: 'Auto / CPU / GPU compute path selection.',
                color: '#00F0FF',
              },
              {
                tag: 'LLM',
                title: 'LLM Routing',
                desc: 'Gemini Flash, specialized models for extreme accuracy.',
                color: '#8B5CF6',
              },
              {
                tag: 'API',
                title: 'Provider Config',
                desc: 'Custom URLs, API keys, model names.',
                color: '#00F0FF',
              },
              {
                tag: 'TXT',
                title: 'Text Processing',
                desc: 'Local or online post-processing pipeline.',
                color: '#FF2D78',
              },
              {
                tag: 'ADV',
                title: 'Specialization',
                desc: 'Technical terminology and domain tuning.',
                color: '#8B5CF6',
              },
            ].map((item) => (
              <div
                key={item.tag}
                className="cyber-card group rounded-lg p-5"
                style={{
                  backgroundColor: '#0f0f2a',
                  border: `1px solid ${item.color}15`,
                }}
              >
                <span
                  className="text-[10px] font-bold tracking-[0.3em]"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: item.color + '60',
                  }}
                >
                  {item.tag}
                </span>
                <h4
                  className="mt-2 mb-2 text-xs font-bold tracking-wide uppercase"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#e4e6f0',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: '#c4c9e240' }}
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
          <div className="cyber-reveal">
            <h2
              className="mb-6 text-3xl font-black tracking-tight uppercase md:text-5xl"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #FF2D78, #8B5CF6, #00F0FF)',
                }}
              >
                Initialize
              </span>
              <br />
              <span style={{ color: '#e4e6f0' }}>OiPer Desktop</span>
            </h2>
            <p
              className="mx-auto mb-10 max-w-md text-sm"
              style={{ color: '#c4c9e240' }}
            >
              Voice-to-text with native performance, local privacy, and zero
              compromise. Download now.
            </p>
            <button
              className="rounded px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all hover:scale-105"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)',
                color: 'white',
                boxShadow: '0 0 30px #FF2D7833, 0 0 60px #8B5CF622',
              }}
            >
              Download Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #FF2D7815' }} className="py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: '#FF2D78',
                boxShadow: '0 0 6px #FF2D78',
              }}
            />
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#c4c9e240',
              }}
            >
              OiPer Desktop
            </span>
          </div>
          <span className="text-[10px]" style={{ color: '#c4c9e220' }}>
            Privacy-first voice transcription. Native performance.
          </span>
        </div>
      </footer>
    </div>
  )
}
