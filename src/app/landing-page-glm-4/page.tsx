'use client'

import { Cpu, Lock, Mic, Settings, Shield, Sparkles, Zap } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Global Hotkey',
    description:
      'Press and hold to record, release to transcribe. Text appears instantly in your active application.',
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'All transcription runs locally on your machine. Your data never leaves your device.',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    description:
      '1.5 seconds to transcribe 30 seconds of audio. Native code for maximum performance.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Cpu,
    title: 'GPU Accelerated',
    description:
      'Auto-detect and utilize GPU acceleration where available for even faster results.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Settings,
    title: 'Full Control',
    description:
      'Choose your backend, models, and whether to use optional online services.',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    icon: Lock,
    title: 'On-Device Logs',
    description:
      'Activity logs and audio stay local. Complete data sovereignty guaranteed.',
    gradient: 'from-indigo-400 to-violet-500',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, fastest: true },
  { name: 'Lemonfox API', time: 3.27, fastest: false },
  { name: 'Python Faster-Whisper', time: 3.55, fastest: false },
  { name: 'OpenAI Whisper 1 API', time: 6.46, fastest: false },
]

export default function LandingPageGLM4() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-fuchsia-50 text-slate-800">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-violet-200/40 to-fuchsia-200/40 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-cyan-200/40 to-blue-200/40 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-100/30 to-orange-100/30 blur-3xl" />
      </div>

      <nav className="relative z-10 border-b border-white/50 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25">
              <span className="text-lg font-bold text-white">O</span>
            </div>
            <div>
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-xl font-bold text-transparent">
                OiPer
              </span>
              <span className="ml-1 text-sm text-slate-400">Desktop</span>
            </div>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#features"
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition-all hover:bg-violet-50 hover:text-violet-600"
            >
              Features
            </a>
            <a
              href="#performance"
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition-all hover:bg-violet-50 hover:text-violet-600"
            >
              Performance
            </a>
            <a
              href="#privacy"
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition-all hover:bg-violet-50 hover:text-violet-600"
            >
              Privacy
            </a>
            <button className="ml-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30">
              Download
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 pt-16 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200/50 bg-gradient-to-r from-violet-100 to-fuchsia-100 px-4 py-2">
                <Sparkles className="h-4 w-4 text-violet-500" />
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-sm font-medium text-transparent">
                  Voice-to-Text Reimagined
                </span>
              </div>

              <h1 className="mb-6 text-5xl leading-[1.1] font-bold md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                  Speak.
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                  Transcribe.
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Done.
                </span>
              </h1>

              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                Privacy-first voice-to-text desktop application designed for
                speed, efficiency, and complete user control. Hold a hotkey to
                record, release to transcribe.
              </p>

              <div className="mb-16 flex flex-wrap justify-center gap-4">
                <button className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-4 font-medium text-white shadow-xl shadow-violet-500/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/30">
                  <span>Download OiPer</span>
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
                <button className="rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 font-medium transition-all hover:border-violet-300 hover:bg-white">
                  View Demo
                </button>
              </div>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-12">
                <div className="mb-8 text-center">
                  <p className="mb-2 text-sm tracking-widest text-slate-400">
                    TRANSCRIPTION TIME
                  </p>
                  <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-7xl font-bold text-transparent md:text-8xl">
                    1.5s
                  </div>
                  <p className="mt-2 text-slate-500">for 30 seconds of audio</p>
                </div>
                <div className="space-y-3">
                  {benchmarks.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span
                        className={`w-44 text-sm ${item.fastest ? 'font-semibold text-violet-600' : 'text-slate-400'}`}
                      >
                        {item.name}
                      </span>
                      <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${item.fastest ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-slate-300'}`}
                          style={{ width: `${(item.time / 6.46) * 100}%` }}
                        />
                      </div>
                      <span
                        className={`font-mono text-sm ${item.fastest ? 'font-semibold text-violet-600' : 'text-slate-400'}`}
                      >
                        {item.time}s
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-100/50 to-fuchsia-100/50 p-6 text-center">
                <div className="mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  1.5s
                </div>
                <p className="text-sm text-slate-500">Transcription Time</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-100/50 to-orange-100/50 p-6 text-center">
                <div className="mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  4x
                </div>
                <p className="text-sm text-slate-500">Faster Than OpenAI</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 p-6 text-center">
                <div className="mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  100%
                </div>
                <p className="text-sm text-slate-500">Local Processing</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 p-6 text-center">
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  0
                </div>
                <p className="text-sm text-slate-500">Data Sent to Cloud</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Core
                </span>
                <span className="text-slate-700"> Features</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg text-slate-500">
                Everything you need for seamless voice transcription
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group rounded-3xl border border-white bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-violet-500/5"
                >
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-5 flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800 transition-colors group-hover:text-violet-600">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="performance" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-violet-200/30 via-fuchsia-200/30 to-violet-200/30 blur-3xl" />
              <div className="relative rounded-3xl border border-white bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2">
                      <Zap className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-amber-700">
                        Performance
                      </span>
                    </div>
                    <h2 className="mb-6 text-4xl font-bold text-slate-800 md:text-5xl">
                      Speed & Efficiency
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-slate-500">
                      Written in native code for maximum performance. GPU
                      acceleration where available. Extremely low latency.
                      Minimal resource usage.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white">
                          1
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">
                            Hold Global Hotkey
                          </div>
                          <div className="text-sm text-slate-500">
                            Press to start recording
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 font-bold text-white">
                          2
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">
                            Speak Naturally
                          </div>
                          <div className="text-sm text-slate-500">
                            Talk in your natural voice
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 font-bold text-white">
                          3
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">
                            Release to Transcribe
                          </div>
                          <div className="text-sm text-slate-500">
                            Let go and watch it work
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 font-bold text-white">
                          4
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">
                            Text Injected
                          </div>
                          <div className="text-sm text-slate-500">
                            Appears in your active app
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <span className="text-sm text-slate-500">
                        30 second English audio benchmark
                      </span>
                    </div>
                    <div className="space-y-4">
                      {benchmarks.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-between rounded-2xl p-4 ${item.fastest ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' : 'bg-slate-50'}`}
                        >
                          <span
                            className={`font-medium ${item.fastest ? 'text-white' : 'text-slate-600'}`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`text-2xl font-bold ${item.fastest ? 'text-white' : 'text-slate-400'}`}
                          >
                            {item.time}s
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

        <section id="privacy" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <Lock className="mx-auto mb-6 h-12 w-12 text-violet-500" />
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="text-slate-700">Privacy &</span>
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {' '}
                  Security
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-500">
                OiPer runs entirely on your machine by default. Your voice, your
                transcripts, your logs never leave your device unless you
                explicitly choose online services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-100/50 to-violet-50 p-8 transition-all hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-800">
                  Local Processing
                </h3>
                <p className="leading-relaxed text-slate-500">
                  All transcription happens on your device. No cloud
                  dependencies. Your data stays with you.
                </p>
              </div>
              <div className="group rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-100/50 to-emerald-50 p-8 transition-all hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-800">
                  Your Choice
                </h3>
                <p className="leading-relaxed text-slate-500">
                  Online optimization is completely optional. Enable or disable
                  at any time.
                </p>
              </div>
              <div className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100/50 to-blue-50 p-8 transition-all hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Lock className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-800">
                  Data Sovereignty
                </h3>
                <p className="leading-relaxed text-slate-500">
                  Activity logs and audio stay on-device. Full control over your
                  data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-800 md:text-5xl">
              Ready to Transform Your Workflow?
            </h2>
            <p className="mb-10 text-lg text-slate-500">
              Download OiPer Desktop and experience the fastest, most private
              voice-to-text solution.
            </p>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-10 py-5 text-lg font-medium text-white shadow-xl shadow-violet-500/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/30">
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

        <footer className="border-t border-slate-200/50 bg-white/50 px-6 py-8 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <span className="text-sm font-bold text-white">O</span>
              </div>
              <span className="text-sm text-slate-500">
                © 2024 OiPer Desktop. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <button
                type="button"
                className="transition-colors hover:text-violet-600"
              >
                Privacy
              </button>
              <button
                type="button"
                className="transition-colors hover:text-violet-600"
              >
                Terms
              </button>
              <button
                type="button"
                className="transition-colors hover:text-violet-600"
              >
                GitHub
              </button>
              <button
                type="button"
                className="transition-colors hover:text-violet-600"
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
