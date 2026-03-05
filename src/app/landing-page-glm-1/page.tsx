'use client'

import { Cpu, Lock, Mic, Settings, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Global Hotkey',
    description:
      'Press and hold to record, release to transcribe. Instant text injection into any app.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'All processing runs locally on your machine. Your data never leaves your device.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    description:
      'Native code implementation. 1.5s for 30 seconds of audio. No cloud delays.',
  },
  {
    icon: Cpu,
    title: 'GPU Accelerated',
    description:
      'Auto-detect and utilize GPU for maximum performance where available.',
  },
  {
    icon: Settings,
    title: 'Full Control',
    description:
      'Choose your backend, models, and whether to use optional online services.',
  },
  {
    icon: Lock,
    title: 'On-Device Logs',
    description:
      'Activity logs and audio stay local. Complete data sovereignty.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', highlight: true },
  { name: 'Lemonfox API', time: '3.27s', highlight: false },
  { name: 'Python Faster-Whisper', time: '3.55s', highlight: false },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', highlight: false },
]

export default function LandingPageGLM1() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-[128px]" />
      <div
        className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-fuchsia-500/10 blur-[128px]"
        style={{ animationDelay: '1s' }}
      />

      <nav className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-lg font-bold">
            O
          </div>
          <span className="text-xl font-bold tracking-tight">
            OiPer<span className="text-cyan-400">Desktop</span>
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#features"
            className="text-sm tracking-wide text-gray-400 transition-colors hover:text-cyan-400"
          >
            FEATURES
          </a>
          <a
            href="#performance"
            className="text-sm tracking-wide text-gray-400 transition-colors hover:text-cyan-400"
          >
            PERFORMANCE
          </a>
          <a
            href="#privacy"
            className="text-sm tracking-wide text-gray-400 transition-colors hover:text-cyan-400"
          >
            PRIVACY
          </a>
          <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25">
            DOWNLOAD
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-8 pt-24 pb-32">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm tracking-wide text-cyan-300">
                VOICE-TO-TEXT REIMAGINED
              </span>
            </div>

            <h1 className="mb-6 text-7xl leading-tight font-bold">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Speak. Transcribe.
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Done.
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-400">
              Privacy-first voice transcription that runs entirely on your
              machine.
              <br />
              <span className="text-cyan-300">
                Hold hotkey. Speak. Release. Text appears.
              </span>
            </p>

            <div className="flex items-center justify-center gap-4">
              <button className="group rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-8 py-4 text-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30">
                <span className="flex items-center gap-2">
                  Download Now
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
                </span>
              </button>
              <button className="rounded-xl border border-fuchsia-500/50 px-8 py-4 text-lg font-semibold text-fuchsia-300 transition-all hover:bg-fuchsia-500/10">
                View Demo
              </button>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-4xl">
            <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/5 to-transparent p-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0f] px-4 py-1 text-xs tracking-widest text-cyan-400">
                WORKFLOW
              </div>
              <div className="rounded-xl bg-[#0d0d15] p-8">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-500/50 bg-cyan-500/20">
                      <span className="text-2xl">⌨️</span>
                    </div>
                    <span className="text-sm text-gray-400">Hold Hotkey</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-fuchsia-500/50" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-fuchsia-500/50 bg-fuchsia-500/20">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <span className="text-sm text-gray-400">Speak</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-500/50 bg-cyan-500/20">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <span className="text-sm text-gray-400">Release</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-fuchsia-500/50" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20">
                      <span className="text-2xl">✨</span>
                    </div>
                    <span className="text-sm text-cyan-300">Text Injected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-cyan-500/10 px-8 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                <span className="text-cyan-400">Core</span> Features
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need for seamless voice transcription
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent p-6 transition-all duration-300 hover:border-cyan-500/50 hover:from-cyan-500/10"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 transition-colors group-hover:border-cyan-400">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-cyan-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="performance"
          className="border-t border-cyan-500/10 px-8 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold">
                  <span className="text-fuchsia-400">Speed</span> Matters
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-400">
                  Written in native code for maximum performance. OiPer achieves
                  the fastest transcription while maintaining high quality and
                  keeping your data on your device.
                </p>
                <div className="space-y-4">
                  {benchmarks.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span
                        className={`w-40 text-sm ${item.highlight ? 'font-semibold text-cyan-300' : 'text-gray-500'}`}
                      >
                        {item.name}
                      </span>
                      <div className="h-8 flex-1 overflow-hidden rounded-lg bg-cyan-500/10">
                        <div
                          className={`h-full rounded-lg ${item.highlight ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : 'bg-gray-700'}`}
                          style={{
                            width: item.highlight
                              ? '23%'
                              : `${(parseFloat(item.time) / 6.46) * 100}%`,
                          }}
                        />
                      </div>
                      <span
                        className={`font-mono text-sm ${item.highlight ? 'text-cyan-400' : 'text-gray-500'}`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  * Benchmark: 30 second English audio transcription
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
                <div className="relative rounded-3xl border border-cyan-500/30 bg-[#0d0d15] p-8">
                  <div className="text-center">
                    <div className="mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-8xl font-bold text-transparent">
                      1.5s
                    </div>
                    <p className="text-gray-400">
                      to transcribe 30 seconds of audio
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          4x
                        </div>
                        <div className="text-xs text-gray-500">
                          faster than OpenAI
                        </div>
                      </div>
                      <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 p-4">
                        <div className="text-2xl font-bold text-fuchsia-400">
                          Local
                        </div>
                        <div className="text-xs text-gray-500">
                          processing only
                        </div>
                      </div>
                      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          GPU
                        </div>
                        <div className="text-xs text-gray-500">accelerated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="privacy"
          className="border-t border-cyan-500/10 px-8 py-24"
        >
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-3">
              <Lock className="h-8 w-8 text-cyan-400" />
              <h2 className="text-4xl font-bold">
                Privacy <span className="text-fuchsia-400">First</span>
              </h2>
            </div>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">
              OiPer runs entirely on your machine. Your voice, your transcripts,
              your logs never leave your device unless you explicitly choose to
              use online services.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                  <Shield className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Local Processing</h3>
                <p className="text-gray-400">
                  All transcription happens on your device. No cloud
                  dependencies.
                </p>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/20 bg-gradient-to-b from-fuchsia-500/5 to-transparent p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-500/20">
                  <Settings className="h-8 w-8 text-fuchsia-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Your Choice</h3>
                <p className="text-gray-400">
                  Online optimization is optional. You decide what runs where.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                  <Lock className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Data Sovereignty</h3>
                <p className="text-gray-400">
                  Activity logs and audio stay on-device. Full control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-500/10 px-8 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to <span className="text-cyan-400">Transform</span> Your
              Workflow?
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              Download OiPer Desktop and experience the fastest, most private
              voice-to-text solution.
            </p>
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-12 py-5 text-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30">
              Download for Windows
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Also available for macOS and Linux
            </p>
          </div>
        </section>

        <footer className="border-t border-cyan-500/10 px-8 py-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-gray-500">
            <span>© 2024 OiPer Desktop. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="transition-colors hover:text-cyan-400"
              >
                Privacy
              </button>
              <button
                type="button"
                className="transition-colors hover:text-cyan-400"
              >
                Terms
              </button>
              <button
                type="button"
                className="transition-colors hover:text-cyan-400"
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
