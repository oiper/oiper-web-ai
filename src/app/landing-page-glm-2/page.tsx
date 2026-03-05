'use client'

import { ArrowRight, Cpu, Lock, Mic, Settings, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Global Hotkey Activation',
    description:
      'Press and hold to record, release to transcribe. Text appears instantly in your active application.',
  },
  {
    icon: Shield,
    title: 'Privacy-First Architecture',
    description:
      'Transcription runs locally. Activity logs and audio remain on-device. No data leaves without consent.',
  },
  {
    icon: Zap,
    title: 'Native Performance',
    description:
      'Written in native code for maximum speed. GPU acceleration where available. Minimal resource usage.',
  },
  {
    icon: Cpu,
    title: 'Flexible Backend',
    description:
      'Auto detection, CPU-only mode, or GPU acceleration. Choose your preferred backend configuration.',
  },
  {
    icon: Settings,
    title: 'Model Management',
    description:
      'Speech model selection with easy downloads. Support for various model sizes and specialized types.',
  },
  {
    icon: Lock,
    title: 'Optional Online Services',
    description:
      'Online optimization available when needed. Your API key, your choice, your control.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', position: 1 },
  { name: 'Lemonfox API', time: '3.27s', position: 2 },
  { name: 'Python Faster-Whisper', time: '3.55s', position: 3 },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', position: 4 },
]

export default function LandingPageGLM2() {
  return (
    <div
      className="min-h-screen bg-[#faf8f5] text-[#1a1a1a]"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <nav className="sticky top-0 z-50 border-b border-[#e5e0d5] bg-[#faf8f5]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a]">
              <span className="font-serif text-lg text-white">O</span>
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">
              OiPer Desktop
            </span>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#features"
              className="text-sm tracking-wide text-[#666] transition-colors hover:text-[#1a1a1a]"
            >
              Features
            </a>
            <a
              href="#performance"
              className="text-sm tracking-wide text-[#666] transition-colors hover:text-[#1a1a1a]"
            >
              Performance
            </a>
            <a
              href="#privacy"
              className="text-sm tracking-wide text-[#666] transition-colors hover:text-[#1a1a1a]"
            >
              Privacy
            </a>
          </div>
          <button className="rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]">
            Download
          </button>
        </div>
      </nav>

      <main>
        <section className="px-6 py-20 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="mb-6 text-sm tracking-[0.3em] text-[#888] uppercase">
                  Voice-to-Text Reimagined
                </p>
                <h1 className="mb-8 font-serif text-5xl leading-[1.1] font-semibold md:text-7xl">
                  Speak naturally.
                  <br />
                  <span className="text-[#888]">Transcribe instantly.</span>
                </h1>
                <p className="mb-10 max-w-xl text-lg leading-relaxed font-light text-[#555] md:text-xl">
                  A privacy-first voice-to-text desktop application designed for
                  speed, efficiency, and complete user control. Hold a global
                  hotkey to record, release to transcribe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="group inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#333]">
                    Download OiPer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="rounded-full border border-[#ccc] px-8 py-4 text-base font-medium transition-colors hover:border-[#1a1a1a]">
                    View Documentation
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#e8e4dc] to-[#f5f2ed]" />
                  <div className="relative rounded-2xl border border-[#e5e0d5] bg-white p-8 shadow-xl">
                    <div className="mb-6 text-center">
                      <p className="mb-2 text-sm tracking-wide text-[#888]">
                        TRANSCRIPTION TIME
                      </p>
                      <div className="font-serif text-6xl font-semibold text-[#1a1a1a]">
                        1.5<span className="text-3xl">s</span>
                      </div>
                      <p className="mt-1 text-sm text-[#666]">
                        for 30 seconds of audio
                      </p>
                    </div>
                    <div className="space-y-3">
                      {benchmarks.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between border-b border-[#f0ebe3] py-2 last:border-0"
                        >
                          <span
                            className={`text-sm ${i === 0 ? 'font-medium' : 'text-[#666]'}`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`font-mono text-sm ${i === 0 ? 'font-semibold' : 'text-[#888]'}`}
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

        <section className="bg-[#1a1a1a] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 font-serif text-5xl font-semibold">
                  Local
                </div>
                <p className="text-[#888]">All processing on your machine</p>
              </div>
              <div>
                <div className="mb-2 font-serif text-5xl font-semibold">
                  4x Faster
                </div>
                <p className="text-[#888]">Than OpenAI Whisper API</p>
              </div>
              <div>
                <div className="mb-2 font-serif text-5xl font-semibold">
                  Private
                </div>
                <p className="text-[#888]">Your data never leaves</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm tracking-[0.3em] text-[#888] uppercase">
                Core Features
              </p>
              <h2 className="font-serif text-4xl leading-tight font-semibold md:text-5xl">
                Everything you need for seamless voice transcription
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px bg-[#e5e0d5] md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group bg-[#faf8f5] p-8 transition-colors hover:bg-white"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f2ed] transition-colors group-hover:bg-[#1a1a1a]">
                    <feature.icon className="h-6 w-6 text-[#1a1a1a] transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed font-light text-[#666]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="performance" className="bg-[#f5f2ed] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm tracking-[0.3em] text-[#888] uppercase">
                  Performance
                </p>
                <h2 className="mb-8 font-serif text-4xl leading-tight font-semibold md:text-5xl">
                  Speed & Efficiency by Design
                </h2>
                <p className="mb-8 text-lg leading-relaxed font-light text-[#555]">
                  OiPer is written in native code for maximum performance. GPU
                  acceleration, low latency, minimal resources.
                </p>
                <div className="space-y-4">
                  {benchmarks.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-8 text-sm text-[#888]">
                        #{item.position}
                      </span>
                      <span
                        className={`flex-1 text-sm ${i === 0 ? 'font-medium' : 'text-[#666]'}`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`font-mono text-sm ${i === 0 ? 'font-semibold text-[#1a1a1a]' : 'text-[#888]'}`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-[#888]">
                  * Benchmark: 30 second English audio
                </p>
              </div>
              <div className="rounded-2xl border border-[#e5e0d5] bg-white p-8 shadow-lg">
                <h3 className="mb-6 font-serif text-xl font-semibold">
                  How It Works
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-serif text-white">
                      1
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Hold Global Hotkey</h4>
                      <p className="text-sm text-[#666]">
                        Press your configured hotkey to start recording
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-serif text-white">
                      2
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Speak Naturally</h4>
                      <p className="text-sm text-[#666]">
                        Talk in your natural voice, OiPer handles the rest
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-serif text-white">
                      3
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">
                        Release to Transcribe
                      </h4>
                      <p className="text-sm text-[#666]">
                        Let go and watch your text appear instantly
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-serif text-white">
                      4
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium">Text Injected</h4>
                      <p className="text-sm text-[#666]">
                        Text appears in your active application automatically
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="bg-[#1a1a1a] px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <Lock className="mx-auto mb-6 h-12 w-12 text-white/60" />
              <p className="mb-4 text-sm tracking-[0.3em] text-white/40 uppercase">
                Privacy & Security
              </p>
              <h2 className="mb-8 font-serif text-4xl leading-tight font-semibold md:text-5xl">
                Your Voice, Your Data, Your Control
              </h2>
              <p className="mb-12 text-lg leading-relaxed font-light text-white/60">
                OiPer runs entirely on your machine by default. Transcription
                happens locally, activity logs stay on-device.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <Shield className="mb-4 h-8 w-8 text-white/60" />
                  <h3 className="mb-2 font-serif font-semibold">
                    Local Processing
                  </h3>
                  <p className="text-sm text-white/50">
                    Transcription runs on your machine. No cloud dependencies.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <Settings className="mb-4 h-8 w-8 text-white/60" />
                  <h3 className="mb-2 font-serif font-semibold">
                    Optional Online
                  </h3>
                  <p className="text-sm text-white/50">
                    Online optimization only when you choose to enable it.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <Lock className="mb-4 h-8 w-8 text-white/60" />
                  <h3 className="mb-2 font-serif font-semibold">
                    Data Sovereignty
                  </h3>
                  <p className="text-sm text-white/50">
                    Full control over your data at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-4xl leading-tight font-semibold md:text-5xl">
              Transform Your Workflow Today
            </h2>
            <p className="mb-10 text-lg leading-relaxed font-light text-[#555]">
              Download OiPer Desktop and experience the fastest, most private
              voice-to-text solution available.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-10 py-5 text-lg font-medium text-white transition-colors hover:bg-[#333]">
              Download for Windows, macOS & Linux
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <footer className="border-t border-[#e5e0d5] px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a]">
                <span className="font-serif text-sm text-white">O</span>
              </div>
              <span className="text-sm text-[#888]">
                © 2024 OiPer Desktop. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm text-[#666]">
              <button
                type="button"
                className="transition-colors hover:text-[#1a1a1a]"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="transition-colors hover:text-[#1a1a1a]"
              >
                Terms of Service
              </button>
              <button
                type="button"
                className="transition-colors hover:text-[#1a1a1a]"
              >
                Documentation
              </button>
              <button
                type="button"
                className="transition-colors hover:text-[#1a1a1a]"
              >
                GitHub
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
