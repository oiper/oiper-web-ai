'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', ratio: 23, highlight: true },
  { name: 'Lemonfox API', time: '3.27s', ratio: 50, highlight: false },
  { name: 'Python Faster-Whisper', time: '3.55s', ratio: 55, highlight: false },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', ratio: 100, highlight: false },
]

export default function LandingPageOpus5() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.editorial-masthead', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      })

      gsap.from('.hero-headline-word', {
        y: 120,
        rotateX: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'power4.out',
        delay: 0.4,
      })

      gsap.from('.hero-rule', {
        scaleX: 0,
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.8,
        transformOrigin: 'left center',
      })

      gsap.from('.hero-deck', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.1,
      })

      gsap.from('.hero-byline', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 1.3,
      })

      gsap.utils.toArray<HTMLElement>('.ed-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.ed-rule').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          duration: 0.8,
          ease: 'power3.inOut',
          transformOrigin: 'left center',
        })
      })

      gsap.utils.toArray<HTMLElement>('.ed-stagger').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
        })
      })

      gsap.utils.toArray<HTMLElement>('.bar-reveal').forEach((bar, i) => {
        gsap.from(bar, {
          scrollTrigger: {
            trigger: bar,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          transformOrigin: 'left center',
        })
      })

      gsap.utils.toArray<HTMLElement>('.pull-quote').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen selection:bg-[#E63B2E]/15 selection:text-[#E63B2E]"
      style={{
        fontFamily: "'Libre Franklin', sans-serif",
        backgroundColor: '#FAFAF8',
        color: '#1a1a1a',
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Masthead / Nav */}
      <nav className="editorial-masthead fixed top-0 right-0 left-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-8">
          <div
            className="flex h-12 items-center justify-between text-xs tracking-[0.2em] uppercase"
            style={{ borderBottom: '1px solid #1a1a1a15', color: '#1a1a1a60' }}
          >
            <span>Est. 2024</span>
            <span>Privacy-First Voice Technology</span>
            <span className="hidden md:block">Desktop Application</span>
          </div>
          <div
            className="flex items-center justify-between py-4"
            style={{ borderBottom: '2px solid #1a1a1a' }}
          >
            <h1
              className="text-3xl tracking-[-0.02em] md:text-4xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              OiPer
            </h1>
            <div
              className="hidden items-center gap-8 text-xs tracking-[0.15em] uppercase md:flex"
              style={{ color: '#1a1a1a80' }}
            >
              <a
                href="#features"
                className="transition-colors hover:text-[#E63B2E]"
              >
                Features
              </a>
              <a
                href="#benchmarks"
                className="transition-colors hover:text-[#E63B2E]"
              >
                Benchmarks
              </a>
              <a
                href="#privacy"
                className="transition-colors hover:text-[#E63B2E]"
              >
                Privacy
              </a>
            </div>
            <button
              className="px-5 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors"
              style={{ backgroundColor: '#1a1a1a', color: '#FAFAF8' }}
            >
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-9">
              <div className="overflow-hidden">
                <h2
                  className="text-6xl leading-[0.88] tracking-[-0.03em] md:text-8xl lg:text-[7.5rem]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                  }}
                >
                  <span className="hero-headline-word inline-block">
                    Your&nbsp;
                  </span>
                  <span className="hero-headline-word inline-block">
                    Voice,&nbsp;
                  </span>
                  <br />
                  <span
                    className="hero-headline-word inline-block"
                    style={{ fontWeight: 700 }}
                  >
                    Your&nbsp;
                  </span>
                  <span
                    className="hero-headline-word inline-block"
                    style={{ fontWeight: 700 }}
                  >
                    Machine,&nbsp;
                  </span>
                  <br />
                  <em
                    className="hero-headline-word inline-block"
                    style={{ color: '#E63B2E', fontWeight: 300 }}
                  >
                    Your Rules.
                  </em>
                </h2>
              </div>
              <div className="hero-rule mt-8 mb-6 h-[2px] bg-[#1a1a1a]" />
              <p
                className="hero-deck max-w-2xl text-lg leading-relaxed md:text-xl"
                style={{ color: '#1a1a1a80' }}
              >
                OiPer Desktop is a privacy-first voice-to-text application that
                runs entirely on your machine. Hold a hotkey, speak, release —
                and your words appear instantly in any application. No cloud. No
                latency. No compromise.
              </p>
            </div>
            <div className="flex flex-col justify-end md:col-span-3">
              <div className="hero-byline space-y-6">
                <div>
                  <p
                    className="mb-1 text-xs tracking-[0.2em] uppercase"
                    style={{ color: '#1a1a1a40' }}
                  >
                    Speed
                  </p>
                  <p
                    className="text-3xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    1.5
                    <span
                      className="ml-1 text-base"
                      style={{ color: '#1a1a1a40' }}
                    >
                      sec
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className="mb-1 text-xs tracking-[0.2em] uppercase"
                    style={{ color: '#1a1a1a40' }}
                  >
                    Processing
                  </p>
                  <p
                    className="text-3xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    100
                    <span
                      className="ml-1 text-base"
                      style={{ color: '#1a1a1a40' }}
                    >
                      % local
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className="mb-1 text-xs tracking-[0.2em] uppercase"
                    style={{ color: '#1a1a1a40' }}
                  >
                    Engine
                  </p>
                  <p
                    className="text-3xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Native
                  </p>
                </div>
                <button
                  className="mt-4 w-full py-3 text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:bg-[#c42e22]"
                  style={{ backgroundColor: '#E63B2E', color: '#FAFAF8' }}
                >
                  Download Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section
        className="py-16"
        style={{
          borderTop: '1px solid #1a1a1a10',
          borderBottom: '1px solid #1a1a1a10',
        }}
      >
        <div className="mx-auto max-w-[1200px] px-8">
          <blockquote className="pull-quote text-center">
            <p
              className="text-3xl leading-[1.2] tracking-[-0.01em] italic md:text-5xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                color: '#1a1a1a',
              }}
            >
              &ldquo;The fastest transcription while maintaining high quality
              <br className="hidden md:block" />
              and keeping{' '}
              <span style={{ color: '#E63B2E' }}>all data on your device</span>
              .&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="ed-reveal mb-12 flex items-baseline gap-4">
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#E63B2E' }}
            >
              I
            </span>
            <h3
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: '#1a1a1a60' }}
            >
              Core Features
            </h3>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: '#1a1a1a15' }}
            />
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-12">
            {/* Feature 1 - spans 7 columns */}
            <div className="ed-stagger md:col-span-7">
              <h4
                className="mb-4 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Hold. Speak.{' '}
                <em style={{ fontWeight: 300, color: '#E63B2E' }}>Release.</em>
              </h4>
              <div className="ed-rule mb-4 h-px w-16 bg-[#1a1a1a]" />
              <p
                className="max-w-md text-sm leading-relaxed"
                style={{ color: '#1a1a1a70' }}
              >
                Global hotkey activation turns speech into text and injects it
                directly into your active application. No copy-paste. No
                switching windows. Just speak.
              </p>
            </div>

            {/* Feature 2 - spans 5 columns, offset down */}
            <div className="ed-stagger md:col-span-5 md:pt-12">
              <h4
                className="mb-4 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Privacy by{' '}
                <em style={{ fontWeight: 300, color: '#E63B2E' }}>Design</em>
              </h4>
              <div className="ed-rule mb-4 h-px w-16 bg-[#1a1a1a]" />
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#1a1a1a70' }}
              >
                Everything runs on your machine. Audio recordings, activity
                logs, transcription data — none of it leaves your device unless
                you explicitly choose otherwise.
              </p>
            </div>

            {/* Feature 3 - spans 5 columns */}
            <div className="ed-stagger md:col-span-5">
              <h4
                className="mb-4 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Native{' '}
                <em style={{ fontWeight: 300, color: '#E63B2E' }}>Speed</em>
              </h4>
              <div className="ed-rule mb-4 h-px w-16 bg-[#1a1a1a]" />
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#1a1a1a70' }}
              >
                Written in native code. GPU-accelerated where available.
                Transcribes 30 seconds of speech in 1.5 seconds. No Python
                runtime. No Electron.
              </p>
            </div>

            {/* Feature 4 - spans 7 columns, offset down */}
            <div className="ed-stagger md:col-span-7 md:pt-8">
              <h4
                className="mb-4 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Total{' '}
                <em style={{ fontWeight: 300, color: '#E63B2E' }}>Control</em>
              </h4>
              <div className="ed-rule mb-4 h-px w-16 bg-[#1a1a1a]" />
              <p
                className="max-w-lg text-sm leading-relaxed"
                style={{ color: '#1a1a1a70' }}
              >
                Select speech models, configure backends (auto/CPU/GPU), set up
                online providers with your own API keys, and route through LLMs
                like Gemini Flash for extreme accuracy. Every detail is
                configurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section
        id="benchmarks"
        className="py-24"
        style={{ borderTop: '1px solid #1a1a1a10' }}
      >
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="ed-reveal">
                <div className="mb-6 flex items-baseline gap-4">
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ color: '#E63B2E' }}
                  >
                    II
                  </span>
                  <h3
                    className="text-sm font-medium tracking-[0.2em] uppercase"
                    style={{ color: '#1a1a1a60' }}
                  >
                    Benchmarks
                  </h3>
                </div>
                <h4
                  className="mb-4 text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  Unreasonably{' '}
                  <em style={{ fontWeight: 300, color: '#E63B2E' }}>Fast</em>
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#1a1a1a60' }}
                >
                  Transcription speed for 30 seconds of English audio.
                  OiPer&apos;s native implementation outperforms cloud APIs and
                  Python-based alternatives by a wide margin.
                </p>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-5">
                {benchmarks.map((b) => (
                  <div key={b.name} className="ed-stagger">
                    <div className="mb-2 flex items-baseline justify-between">
                      <span
                        className={`text-sm ${b.highlight ? 'font-semibold' : ''}`}
                        style={{ color: b.highlight ? '#1a1a1a' : '#1a1a1a50' }}
                      >
                        {b.name}
                      </span>
                      <span
                        className="text-sm tabular-nums"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: b.highlight ? 700 : 400,
                          color: b.highlight ? '#E63B2E' : '#1a1a1a40',
                          fontSize: b.highlight ? '1.25rem' : '0.875rem',
                        }}
                      >
                        {b.time}
                      </span>
                    </div>
                    <div
                      className="h-2 overflow-hidden rounded-full"
                      style={{ backgroundColor: '#1a1a1a08' }}
                    >
                      <div
                        className="bar-reveal h-full rounded-full"
                        style={{
                          width: `${b.ratio}%`,
                          backgroundColor: b.highlight
                            ? '#E63B2E'
                            : '#1a1a1a15',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section
        id="privacy"
        className="py-24"
        style={{ borderTop: '1px solid #1a1a1a10' }}
      >
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="ed-reveal mb-16 flex items-baseline gap-4">
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#E63B2E' }}
            >
              III
            </span>
            <h3
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: '#1a1a1a60' }}
            >
              Privacy & Security
            </h3>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: '#1a1a1a15' }}
            />
          </div>
          <div className="grid gap-16 md:grid-cols-2">
            <div className="ed-stagger">
              <div
                className="mb-6"
                style={{
                  borderLeft: '3px solid #1a1a1a',
                  paddingLeft: '1.5rem',
                }}
              >
                <h4
                  className="mb-4 text-3xl leading-[1.1] tracking-[-0.02em] md:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  Local Processing
                </h4>
                <p
                  className="mb-4 text-xs tracking-[0.2em] uppercase"
                  style={{ color: '#1a1a1a40' }}
                >
                  Default Mode
                </p>
              </div>
              <ul className="space-y-4 text-sm" style={{ color: '#1a1a1a70' }}>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E63B2E]" />
                  Transcription runs entirely on your machine
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E63B2E]" />
                  Activity logs and audio recordings remain on-device
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E63B2E]" />
                  Full control over every piece of data
                </li>
              </ul>
            </div>
            <div className="ed-stagger">
              <div
                className="mb-6"
                style={{
                  borderLeft: '3px solid #1a1a1a20',
                  paddingLeft: '1.5rem',
                }}
              >
                <h4
                  className="mb-4 text-3xl leading-[1.1] tracking-[-0.02em] md:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    color: '#1a1a1a80',
                  }}
                >
                  Online Services
                </h4>
                <p
                  className="mb-4 text-xs tracking-[0.2em] uppercase"
                  style={{ color: '#1a1a1a30' }}
                >
                  Optional
                </p>
              </div>
              <ul className="space-y-4 text-sm" style={{ color: '#1a1a1a50' }}>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: '#1a1a1a30' }}
                  />
                  Online optimization is completely opt-in
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: '#1a1a1a30' }}
                  />
                  Requires your own API key for any cloud service
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: '#1a1a1a30' }}
                  />
                  Enable or disable at any time — your choice entirely
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="py-24" style={{ borderTop: '1px solid #1a1a1a10' }}>
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="ed-reveal mb-16 flex items-baseline gap-4">
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#E63B2E' }}
            >
              IV
            </span>
            <h3
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: '#1a1a1a60' }}
            >
              Configuration
            </h3>
            <div
              className="h-px flex-1"
              style={{ backgroundColor: '#1a1a1a15' }}
            />
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {[
              {
                title: 'Speech Models',
                desc: 'Select and download models. Choose sizes and types that match your hardware profile.',
              },
              {
                title: 'Backend Preferences',
                desc: 'Auto detection, CPU-only mode, or GPU acceleration where available.',
              },
              {
                title: 'LLM Transcription',
                desc: 'Route through Gemini Flash or specialized models for extreme accuracy on technical content.',
              },
              {
                title: 'Provider Setup',
                desc: 'Custom base URLs, API key management, model name configuration.',
              },
              {
                title: 'Text Optimization',
                desc: 'Choose between local and online post-processing for transcription cleanup.',
              },
              {
                title: 'Advanced Tuning',
                desc: 'Fine-tune for technical terminology, specialized domains, and unique vocabulary.',
              },
            ].map((item, i) => (
              <div key={item.title} className="ed-stagger">
                <p
                  className="mb-3 text-xs"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#E63B2E',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h5
                  className="mb-2 text-lg font-semibold tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h5>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#1a1a1a50' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32" style={{ borderTop: '2px solid #1a1a1a' }}>
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <div className="ed-reveal">
            <h2
              className="mb-8 text-5xl leading-[0.9] tracking-[-0.03em] md:text-7xl lg:text-8xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span style={{ fontWeight: 300 }}>Start speaking</span>
              <br />
              <em style={{ fontWeight: 300, color: '#E63B2E' }}>freely.</em>
            </h2>
            <p
              className="mx-auto mb-10 max-w-md text-sm leading-relaxed"
              style={{ color: '#1a1a1a60' }}
            >
              Download OiPer Desktop and experience voice-to-text that is fast,
              private, and built entirely around your workflow.
            </p>
            <button
              className="px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:bg-[#c42e22]"
              style={{ backgroundColor: '#E63B2E', color: '#FAFAF8' }}
            >
              Download OiPer Desktop
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '2px solid #1a1a1a' }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-8 py-8 md:flex-row">
          <span
            className="text-lg tracking-[-0.02em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              color: '#1a1a1a40',
            }}
          >
            OiPer
          </span>
          <p className="text-xs" style={{ color: '#1a1a1a30' }}>
            Privacy-first voice-to-text. Native performance. Your data, your
            device.
          </p>
        </div>
      </footer>
    </div>
  )
}
