'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Globe, Lock, Mic, Shield, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* ─── OPUS 3: EDITORIAL / MAGAZINE ───
   Warm cream bg, serif display type, refined grid layout, editorial photography feel.
   Palette: warm cream, deep charcoal, terracotta accent.
*/

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, highlight: true },
  { name: 'Lemonfox API', time: 3.27 },
  { name: 'Python Faster-Whisper', time: 3.55 },
  { name: 'OpenAI Whisper 1 API', time: 6.46 },
]

export default function LandingPageOpus3() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.fromTo(
        '.ed-hero-line',
        { y: '100%', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power4.out',
          delay: 0.3,
        }
      )
      gsap.fromTo(
        '.ed-hero-body',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 1 }
      )
      gsap.fromTo(
        '.ed-hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.3 }
      )

      // Sections
      gsap.utils.toArray<HTMLElement>('.ed-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        )
      })

      // Stats counter
      gsap.utils.toArray<HTMLElement>('.ed-stat-num').forEach((el) => {
        const target = parseFloat(el.dataset.value || '0')
        gsap.fromTo(
          el,
          { innerText: '0' },
          {
            innerText: target,
            duration: 1.5,
            ease: 'power2.out',
            snap: { innerText: target < 10 ? 0.1 : 1 },
            scrollTrigger: { trigger: el, start: 'top 85%' },
            onUpdate: function () {
              const val = parseFloat(el.innerText)
              el.innerText =
                target < 10
                  ? val.toFixed(1) + 's'
                  : val.toFixed(0) + (el.dataset.suffix || '')
            },
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
        background: 'hsl(38,30%,93%)',
        color: 'hsl(20,10%,15%)',
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-10 py-6"
        style={{
          background: 'hsla(38,30%,93%,0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid hsla(20,10%,15%,0.08)',
        }}
      >
        <span
          className="text-2xl font-bold italic"
          style={{ color: 'hsl(12,55%,48%)' }}
        >
          OiPer
        </span>
        <div
          className="flex gap-8 text-sm"
          style={{
            fontFamily: 'system-ui, sans-serif',
            color: 'hsl(20,10%,40%)',
          }}
        >
          <a
            href="#story"
            className="transition-colors hover:text-[hsl(12,55%,48%)]"
          >
            The Story
          </a>
          <a
            href="#craft"
            className="transition-colors hover:text-[hsl(12,55%,48%)]"
          >
            The Craft
          </a>
          <a
            href="#numbers"
            className="transition-colors hover:text-[hsl(12,55%,48%)]"
          >
            Numbers
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen flex-col justify-center px-10 pt-24 md:px-20">
        <div className="max-w-4xl">
          <p
            className="mb-8 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: 'hsl(12,55%,48%)',
            }}
          >
            Privacy-First Voice Transcription
          </p>
          <div className="overflow-hidden">
            <h1 className="ed-hero-line text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-normal italic">
              Your voice, your words,
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="ed-hero-line text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-normal italic">
              your machine —{' '}
              <span
                className="font-bold not-italic"
                style={{ color: 'hsl(12,55%,48%)' }}
              >
                always.
              </span>
            </h1>
          </div>
          <p
            className="ed-hero-body mt-10 max-w-xl text-lg leading-relaxed"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: 'hsl(20,10%,40%)',
            }}
          >
            OiPer Desktop turns speech into text with a single hotkey. Hold to
            record, release to transcribe, and your words appear right where you
            need them — instantly and privately.
          </p>
          <button
            className="ed-hero-cta mt-10 px-10 py-4 text-sm font-medium tracking-widest uppercase"
            style={{
              fontFamily: 'system-ui, sans-serif',
              background: 'hsl(12,55%,48%)',
              color: 'hsl(38,30%,93%)',
            }}
          >
            Download OiPer
          </button>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-6xl px-10 py-32 md:px-20">
        <div className="ed-reveal grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p
              className="mb-4 text-xs tracking-[0.3em] uppercase"
              style={{
                fontFamily: 'system-ui, sans-serif',
                color: 'hsl(12,55%,48%)',
              }}
            >
              The Story
            </p>
            <h2 className="text-4xl leading-tight italic">
              Designed for those who value their words
            </h2>
          </div>
          <div
            className="space-y-6 text-base leading-relaxed md:col-span-7 md:col-start-6"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: 'hsl(20,10%,35%)',
            }}
          >
            <p>
              In an era where every keystroke is tracked and every voice
              recording uploaded to distant servers, OiPer takes a different
              path. Built from the ground up with native code, it delivers
              transcription that stays on your machine.
            </p>
            <p>
              No cloud dependencies. No accounts required. No data leaving your
              device. Just pure, local voice-to-text that works as fast as you
              can speak.
            </p>
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section
        id="craft"
        className="px-10 py-32 md:px-20"
        style={{ background: 'hsl(20,10%,12%)', color: 'hsl(38,30%,88%)' }}
      >
        <div className="mx-auto max-w-6xl">
          <p
            className="ed-reveal mb-4 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: 'hsl(12,55%,55%)',
            }}
          >
            The Craft
          </p>
          <h2 className="ed-reveal mb-16 text-4xl leading-tight italic">
            Six pillars of thoughtful engineering
          </h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Mic,
                title: 'Effortless Capture',
                desc: 'A single hotkey triggers recording. Release to transcribe. Text appears in your active window instantly.',
              },
              {
                icon: Shield,
                title: 'Privacy by Design',
                desc: 'Your audio and transcriptions never leave your device. No telemetry, no tracking, no compromise.',
              },
              {
                icon: Zap,
                title: 'Native Performance',
                desc: 'Written in native code for maximum speed. 1.5 seconds for 30 seconds of audio.',
              },
              {
                icon: Lock,
                title: 'Opt-in Online',
                desc: 'Cloud services are entirely optional. Use your own API keys. Disable at any time.',
              },
              {
                icon: Cpu,
                title: 'Hardware Aware',
                desc: 'Automatically detects your hardware. Choose CPU, GPU, or let OiPer pick the optimal path.',
              },
              {
                icon: Globe,
                title: 'LLM Enhanced',
                desc: 'Route through advanced models like Gemini for specialized terminology and perfect accuracy.',
              },
            ].map((f, i) => (
              <div key={i} className="ed-reveal">
                <f.icon
                  size={24}
                  className="mb-4"
                  style={{ color: 'hsl(12,55%,55%)' }}
                />
                <h3 className="mb-3 text-xl italic">{f.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    color: 'hsl(38,20%,55%)',
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section id="numbers" className="mx-auto max-w-6xl px-10 py-32 md:px-20">
        <p
          className="ed-reveal mb-4 text-xs tracking-[0.3em] uppercase"
          style={{
            fontFamily: 'system-ui, sans-serif',
            color: 'hsl(12,55%,48%)',
          }}
        >
          The Numbers
        </p>
        <h2 className="ed-reveal mb-16 text-4xl leading-tight italic">
          Performance, measured
        </h2>
        <div className="ed-reveal grid grid-cols-2 gap-8 md:grid-cols-4">
          <div
            className="border-t-2 pt-6"
            style={{ borderColor: 'hsl(12,55%,48%)' }}
          >
            <div
              className="ed-stat-num text-5xl font-bold"
              data-value="1.5"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              0
            </div>
            <p
              className="mt-2 text-xs tracking-wide uppercase"
              style={{
                fontFamily: 'system-ui, sans-serif',
                color: 'hsl(20,10%,45%)',
              }}
            >
              Transcription Time
            </p>
          </div>
          <div
            className="border-t-2 pt-6"
            style={{ borderColor: 'hsl(20,10%,25%)' }}
          >
            <div
              className="text-5xl font-bold"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              100%
            </div>
            <p
              className="mt-2 text-xs tracking-wide uppercase"
              style={{
                fontFamily: 'system-ui, sans-serif',
                color: 'hsl(20,10%,45%)',
              }}
            >
              Local by Default
            </p>
          </div>
          <div
            className="border-t-2 pt-6"
            style={{ borderColor: 'hsl(20,10%,25%)' }}
          >
            <div
              className="text-5xl font-bold"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              0
            </div>
            <p
              className="mt-2 text-xs tracking-wide uppercase"
              style={{
                fontFamily: 'system-ui, sans-serif',
                color: 'hsl(20,10%,45%)',
              }}
            >
              Data Sent
            </p>
          </div>
          <div
            className="border-t-2 pt-6"
            style={{ borderColor: 'hsl(20,10%,25%)' }}
          >
            <div
              className="text-5xl font-bold"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              4.3×
            </div>
            <p
              className="mt-2 text-xs tracking-wide uppercase"
              style={{
                fontFamily: 'system-ui, sans-serif',
                color: 'hsl(20,10%,45%)',
              }}
            >
              Faster than API
            </p>
          </div>
        </div>

        <div className="ed-reveal mt-20">
          <h3 className="mb-8 text-2xl italic">Benchmark comparison</h3>
          <div
            className="space-y-4"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {benchmarks.map((b, i) => (
              <div key={i} className="flex items-center gap-6">
                <span
                  className="w-48 text-sm"
                  style={{
                    color: b.highlight ? 'hsl(12,55%,48%)' : 'hsl(20,10%,40%)',
                  }}
                >
                  {b.name}
                </span>
                <div
                  className="h-1 flex-1 rounded-full"
                  style={{ background: 'hsl(20,10%,85%)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(b.time / 6.46) * 100}%`,
                      background: b.highlight
                        ? 'hsl(12,55%,48%)'
                        : 'hsl(20,10%,70%)',
                    }}
                  />
                </div>
                <span
                  className="w-16 text-right text-sm font-medium"
                  style={{
                    color: b.highlight ? 'hsl(12,55%,48%)' : 'hsl(20,10%,50%)',
                  }}
                >
                  {b.time}s
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-10 py-16 text-center"
        style={{ borderTop: '1px solid hsla(20,10%,15%,0.1)' }}
      >
        <p className="mb-4 text-3xl italic">OiPer Desktop</p>
        <p
          className="text-sm"
          style={{
            fontFamily: 'system-ui, sans-serif',
            color: 'hsl(20,10%,50%)',
          }}
        >
          Voice to text, privately and beautifully.
        </p>
      </footer>
    </div>
  )
}
