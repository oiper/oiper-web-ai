'use client'

import {
  Cpu,
  Diamond,
  Lock,
  Mic,
  Settings,
  Shield,
  Star,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Global Hotkey',
    description:
      'Press and hold to record, release to transcribe. Instant text injection.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'Transcription runs locally. Your data never leaves your device.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    description: '1.5 seconds to transcribe 30 seconds of audio. Native code.',
  },
  {
    icon: Cpu,
    title: 'GPU Accelerated',
    description: 'Auto-detect and utilize GPU for maximum performance.',
  },
  {
    icon: Settings,
    title: 'Full Control',
    description: 'Choose backend, models, and optional online services.',
  },
  {
    icon: Lock,
    title: 'On-Device Logs',
    description: 'Activity logs and audio stay local. Complete sovereignty.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', fastest: true },
  { name: 'Lemonfox API', time: '3.27s', fastest: false },
  { name: 'Python Faster-Whisper', time: '3.55s', fastest: false },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', fastest: false },
]

export default function LandingPageGLM5() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#fafaf9]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-900/10 to-transparent blur-3xl" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rotate-45 border border-amber-500/10" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rotate-45 border border-amber-500/10" />
      </div>

      <nav className="relative z-10 border-b border-amber-500/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Diamond className="h-10 w-10 fill-amber-400 text-amber-400" />
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#0c0a09]">
                O
              </span>
            </div>
            <div>
              <span className="text-xl font-semibold tracking-wide">OiPer</span>
              <span className="ml-2 text-sm tracking-widest text-amber-400/60">
                DESKTOP
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm tracking-wide text-stone-400 transition-colors hover:text-amber-400"
            >
              Features
            </a>
            <a
              href="#performance"
              className="text-sm tracking-wide text-stone-400 transition-colors hover:text-amber-400"
            >
              Performance
            </a>
            <a
              href="#privacy"
              className="text-sm tracking-wide text-stone-400 transition-colors hover:text-amber-400"
            >
              Privacy
            </a>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-[#0c0a09] transition-colors hover:from-amber-400 hover:to-amber-500">
              Download
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 pt-20 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-8 inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/5 px-4 py-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm tracking-widest text-amber-400">
                    VOICE-TO-TEXT REIMAGINED
                  </span>
                </div>
                <h1 className="mb-8 text-5xl leading-[1.1] font-light tracking-tight md:text-6xl lg:text-7xl">
                  <span className="text-stone-300">Speak.</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text font-normal text-transparent">
                    Transcribe.
                  </span>
                  <br />
                  <span className="text-stone-300">Done.</span>
                </h1>
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-stone-400">
                  A privacy-first voice-to-text desktop application designed for
                  speed, efficiency, and complete user control.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 font-semibold tracking-wide text-[#0c0a09] transition-all hover:from-amber-400 hover:to-amber-500">
                    Download OiPer
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <button className="border border-amber-500/30 px-8 py-4 font-medium tracking-wide text-amber-400 transition-colors hover:bg-amber-500/10">
                    View Demo
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 border border-amber-500/10" />
                  <div className="border border-amber-500/20 bg-gradient-to-b from-stone-900/80 to-stone-900/40 p-8">
                    <div className="mb-8 text-center">
                      <p className="mb-4 text-xs tracking-[0.3em] text-amber-500/60">
                        TRANSCRIPTION TIME
                      </p>
                      <div className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-7xl font-light text-transparent">
                        1.5s
                      </div>
                      <p className="mt-2 text-stone-500">
                        for 30 seconds of audio
                      </p>
                    </div>
                    <div className="space-y-4 border-t border-amber-500/10 pt-6">
                      {benchmarks.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <span
                            className={`flex-1 text-sm ${item.fastest ? 'text-amber-400' : 'text-stone-500'}`}
                          >
                            {item.name}
                          </span>
                          <div className="h-1 w-24 bg-stone-800">
                            <div
                              className={`h-full ${item.fastest ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-stone-600'}`}
                              style={{
                                width: `${(parseFloat(item.time) / 6.46) * 100}%`,
                              }}
                            />
                          </div>
                          <span
                            className={`font-mono text-sm ${item.fastest ? 'text-amber-400' : 'text-stone-500'}`}
                          >
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-amber-500/10 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-px bg-amber-500/10 md:grid-cols-4">
              <div className="bg-[#0c0a09] p-8 text-center">
                <div className="mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-4xl font-light text-transparent">
                  1.5s
                </div>
                <p className="text-xs tracking-widest text-stone-500">
                  TRANSCRIPTION
                </p>
              </div>
              <div className="bg-[#0c0a09] p-8 text-center">
                <div className="mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-4xl font-light text-transparent">
                  4x
                </div>
                <p className="text-xs tracking-widest text-stone-500">FASTER</p>
              </div>
              <div className="bg-[#0c0a09] p-8 text-center">
                <div className="mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-4xl font-light text-transparent">
                  100%
                </div>
                <p className="text-xs tracking-widest text-stone-500">LOCAL</p>
              </div>
              <div className="bg-[#0c0a09] p-8 text-center">
                <div className="mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-4xl font-light text-transparent">
                  0
                </div>
                <p className="text-xs tracking-widest text-stone-500">
                  DATA SENT
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
                <Diamond className="h-4 w-4 fill-amber-400 text-amber-400" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
              </div>
              <h2 className="mb-4 text-4xl font-light md:text-5xl">
                <span className="text-stone-300">Core</span>
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  {' '}
                  Features
                </span>
              </h2>
              <p className="mx-auto max-w-xl text-stone-400">
                Everything you need for seamless voice transcription
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-amber-500/10 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group bg-[#0c0a09] p-8 transition-colors hover:bg-gradient-to-b hover:from-amber-500/5 hover:to-transparent"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-amber-500/30 transition-colors group-hover:border-amber-400">
                    <feature.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-stone-200 transition-colors group-hover:text-amber-300">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-stone-500 transition-colors group-hover:text-stone-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="performance"
          className="border-t border-amber-500/10 px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-400" />
                  <span className="text-sm tracking-widest text-amber-400">
                    PERFORMANCE
                  </span>
                </div>
                <h2 className="mb-6 text-4xl font-light text-stone-200 md:text-5xl">
                  Speed & Efficiency
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-stone-400">
                  Written in native code for maximum performance. GPU
                  acceleration, low latency, minimal resources.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-amber-500/30">
                      <span className="font-semibold text-amber-400">1</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-stone-200">
                        Hold Global Hotkey
                      </h4>
                      <p className="text-sm text-stone-500">
                        Press your configured hotkey to start recording
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-amber-500/30">
                      <span className="font-semibold text-amber-400">2</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-stone-200">
                        Speak Naturally
                      </h4>
                      <p className="text-sm text-stone-500">
                        Talk in your natural voice, OiPer captures everything
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-amber-500/30">
                      <span className="font-semibold text-amber-400">3</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-stone-200">
                        Release to Transcribe
                      </h4>
                      <p className="text-sm text-stone-500">
                        Let go and transcription begins instantly
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-amber-500/30">
                      <span className="font-semibold text-amber-400">4</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-stone-200">
                        Text Injected
                      </h4>
                      <p className="text-sm text-stone-500">
                        Transcribed text appears in your active application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-px border border-amber-500/20" />
                <div className="border border-amber-500/10 bg-gradient-to-b from-stone-900/60 to-stone-900/30 p-8">
                  <div className="mb-8 text-center">
                    <p className="mb-4 text-xs tracking-[0.3em] text-amber-500/60">
                      BENCHMARK: 30 SEC AUDIO
                    </p>
                    <div className="space-y-4">
                      {benchmarks.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 border-b border-amber-500/10 p-3 last:border-0"
                        >
                          <span
                            className={`flex-1 text-sm ${item.fastest ? 'font-medium text-amber-400' : 'text-stone-500'}`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`font-mono text-lg ${item.fastest ? 'text-amber-400' : 'text-stone-600'}`}
                          >
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="privacy"
          className="border-t border-amber-500/10 px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
                <Lock className="h-5 w-5 text-amber-400" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
              </div>
              <h2 className="mb-6 text-4xl font-light text-stone-200 md:text-5xl">
                Privacy & Security
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-stone-400">
                OiPer runs entirely on your machine by default. Your voice,
                transcripts, and logs never leave your device.
              </p>
              <div className="grid grid-cols-1 gap-px bg-amber-500/10 md:grid-cols-3">
                <div className="group bg-[#0c0a09] p-8 transition-colors hover:bg-gradient-to-b hover:from-amber-500/5 hover:to-transparent">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-amber-500/30">
                    <Shield className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-stone-200">
                    Local Processing
                  </h3>
                  <p className="text-sm text-stone-500">
                    All transcription happens on your device. No cloud
                    dependencies.
                  </p>
                </div>
                <div className="group bg-[#0c0a09] p-8 transition-colors hover:bg-gradient-to-b hover:from-amber-500/5 hover:to-transparent">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-amber-500/30">
                    <Settings className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-stone-200">
                    Your Choice
                  </h3>
                  <p className="text-sm text-stone-500">
                    Online optimization is optional. You decide what runs where.
                  </p>
                </div>
                <div className="group bg-[#0c0a09] p-8 transition-colors hover:bg-gradient-to-b hover:from-amber-500/5 hover:to-transparent">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-amber-500/30">
                    <Lock className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-stone-200">
                    Data Sovereignty
                  </h3>
                  <p className="text-sm text-stone-500">
                    Activity logs and audio stay on-device. Full control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-amber-500/10 px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
              <Diamond className="h-4 w-4 fill-amber-400 text-amber-400" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            <h2 className="mb-6 text-4xl font-light text-stone-200 md:text-5xl">
              Transform Your Workflow
            </h2>
            <p className="mb-10 text-lg text-stone-400">
              Download OiPer Desktop and experience the fastest, most private
              voice-to-text solution.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-semibold tracking-wide text-[#0c0a09] transition-all hover:from-amber-400 hover:to-amber-500">
              Download for Windows, macOS & Linux
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </section>

        <footer className="border-t border-amber-500/10 px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Diamond className="h-6 w-6 fill-amber-400 text-amber-400" />
              <span className="text-sm text-stone-500">
                © 2024 OiPer Desktop. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm text-stone-500">
              <button
                type="button"
                className="transition-colors hover:text-amber-400"
              >
                Privacy
              </button>
              <button
                type="button"
                className="transition-colors hover:text-amber-400"
              >
                Terms
              </button>
              <button
                type="button"
                className="transition-colors hover:text-amber-400"
              >
                GitHub
              </button>
              <button
                type="button"
                className="transition-colors hover:text-amber-400"
              >
                Docs
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
