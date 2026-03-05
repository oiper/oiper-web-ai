'use client'

import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Lock,
  Mic,
  Settings,
  Shield,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'GLOBAL HOTKEY',
    description:
      'Press and hold to record, release to transcribe. Text appears instantly in your active application.',
  },
  {
    icon: Shield,
    title: 'PRIVACY FIRST',
    description:
      'All transcription runs locally on your machine. Your data never leaves your device.',
  },
  {
    icon: Zap,
    title: 'BLAZING FAST',
    description:
      '1.5 seconds to transcribe 30 seconds of audio. Native code for maximum performance.',
  },
  {
    icon: Cpu,
    title: 'GPU POWERED',
    description:
      'Auto-detect and utilize GPU acceleration where available for even faster results.',
  },
  {
    icon: Settings,
    title: 'FULL CONTROL',
    description:
      'Choose your backend, models, and whether to use optional online services.',
  },
  {
    icon: Lock,
    title: 'ON-DEVICE LOGS',
    description:
      'Activity logs and audio stay local. Complete data sovereignty guaranteed.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, fastest: true },
  { name: 'Lemonfox API', time: 3.27, fastest: false },
  { name: 'Python Faster-Whisper', time: 3.55, fastest: false },
  { name: 'OpenAI Whisper 1 API', time: 6.46, fastest: false },
]

export default function LandingPageGLM3() {
  return (
    <div className="min-h-screen bg-[#fffcf5] text-[#1a1a1a]">
      <div className="border-b-4 border-[#1a1a1a]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center bg-[#1a1a1a]">
              <span className="text-xl font-black text-white">O</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight">OiPer</span>
              <span className="block text-xs tracking-widest">DESKTOP</span>
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#features"
              className="px-4 py-2 text-sm font-bold transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              FEATURES
            </a>
            <a
              href="#performance"
              className="px-4 py-2 text-sm font-bold transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              PERFORMANCE
            </a>
            <a
              href="#privacy"
              className="px-4 py-2 text-sm font-bold transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              PRIVACY
            </a>
            <button className="ml-4 border-b-4 border-[#000] bg-[#1a1a1a] px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-[#333]">
              DOWNLOAD
            </button>
          </div>
        </nav>
      </div>

      <main>
        <section className="border-b-4 border-[#1a1a1a]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-6 inline-block bg-[#1a1a1a] px-4 py-2 text-xs font-bold tracking-widest text-white">
                  VOICE-TO-TEXT REIMAGINED
                </div>
                <h1 className="mb-8 text-5xl leading-[0.9] font-black tracking-tight md:text-7xl lg:text-8xl">
                  SPEAK.
                  <br />
                  TRANSCRIBE.
                  <br />
                  <span className="text-[#ff6b35]">DONE.</span>
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed md:text-xl">
                  Privacy-first voice-to-text desktop application. Hold a global
                  hotkey to record, release to transcribe. Text is instantly
                  injected into your active application.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="group inline-flex items-center gap-2 border-b-4 border-[#000] bg-[#1a1a1a] px-8 py-4 font-bold text-white transition-colors hover:bg-[#333]">
                    DOWNLOAD NOW
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="border-4 border-[#1a1a1a] px-8 py-4 font-bold transition-colors hover:bg-[#1a1a1a] hover:text-white">
                    VIEW DEMO
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border-b-4 border-[#000] bg-[#1a1a1a] p-8 text-white">
                  <div className="mb-8 text-center">
                    <p className="mb-2 text-xs tracking-widest text-white/60">
                      BENCHMARK: 30 SEC AUDIO
                    </p>
                    <div className="text-7xl font-black text-[#ff6b35]">
                      1.5s
                    </div>
                    <p className="mt-2 text-white/60">OiPer Desktop</p>
                  </div>
                  <div className="space-y-3">
                    {benchmarks.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="h-4 flex-1 bg-white/10">
                          <div
                            className={`h-full ${item.fastest ? 'bg-[#ff6b35]' : 'bg-white/30'}`}
                            style={{ width: `${(item.time / 6.46) * 100}%` }}
                          />
                        </div>
                        <span
                          className={`font-mono text-sm ${item.fastest ? 'font-bold text-[#ff6b35]' : 'text-white/50'}`}
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
        </section>

        <section className="border-b-4 border-[#1a1a1a] bg-[#1a1a1a] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
              <div className="border-r-0 border-white/20 p-6 last:border-0 md:border-r-4">
                <div className="mb-2 text-5xl font-black">1.5s</div>
                <p className="text-sm text-white/60">Transcription Time</p>
              </div>
              <div className="border-r-0 border-white/20 p-6 last:border-0 md:border-r-4">
                <div className="mb-2 text-5xl font-black">4x</div>
                <p className="text-sm text-white/60">Faster Than OpenAI</p>
              </div>
              <div className="border-r-0 border-white/20 p-6 last:border-0 md:border-r-4">
                <div className="mb-2 text-5xl font-black">100%</div>
                <p className="text-sm text-white/60">Local Processing</p>
              </div>
              <div className="p-6">
                <div className="mb-2 text-5xl font-black">0</div>
                <p className="text-sm text-white/60">Data Sent to Cloud</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-b-4 border-[#1a1a1a]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-4xl leading-tight font-black md:text-5xl">
                  CORE
                  <br />
                  FEATURES
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-xl text-lg text-[#666]">
                  Everything you need for seamless voice transcription, designed
                  with performance and privacy as the core principles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group bg-[#fffcf5] p-8 transition-colors hover:bg-[#1a1a1a] hover:text-white"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#1a1a1a] text-white transition-colors group-hover:bg-white group-hover:text-[#1a1a1a]">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-lg font-black tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] transition-colors group-hover:text-white/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="performance"
          className="border-b-4 border-[#1a1a1a] bg-[#f5f0e8]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-block bg-[#ff6b35] px-4 py-2 text-xs font-bold tracking-widest text-white">
                  PERFORMANCE
                </div>
                <h2 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
                  SPEED &<br />
                  EFFICIENCY
                </h2>
                <p className="mb-8 text-lg text-[#666]">
                  Written in native code for maximum performance. GPU
                  acceleration where available. Extremely low latency. Minimal
                  resource usage. OiPer achieves the fastest transcription while
                  maintaining high quality and keeping data on your device.
                </p>

                <div className="space-y-4">
                  {benchmarks.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-4 border-[#1a1a1a] bg-white p-4"
                    >
                      <span
                        className={`text-2xl font-black ${item.fastest ? 'text-[#ff6b35]' : 'text-[#ccc]'}`}
                      >
                        #{i + 1}
                      </span>
                      <span
                        className={`flex-1 font-bold ${item.fastest ? '' : 'text-[#666]'}`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`font-mono text-xl font-bold ${item.fastest ? 'text-[#ff6b35]' : 'text-[#999]'}`}
                      >
                        {item.time}s
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[#888]">
                  * Benchmark: 30 second English audio transcription
                </p>
              </div>

              <div className="border-b-4 border-[#000] bg-[#1a1a1a] p-8 text-white">
                <h3 className="mb-8 text-2xl font-black">HOW IT WORKS</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#ff6b35] text-xl font-black">
                      1
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold">HOLD GLOBAL HOTKEY</h4>
                      <p className="text-sm text-white/60">
                        Press your configured hotkey to start recording audio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#ff6b35] text-xl font-black">
                      2
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold">SPEAK NATURALLY</h4>
                      <p className="text-sm text-white/60">
                        Talk in your natural voice, OiPer captures everything
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#ff6b35] text-xl font-black">
                      3
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold">RELEASE TO TRANSCRIBE</h4>
                      <p className="text-sm text-white/60">
                        Let go of the hotkey and transcription begins instantly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#ff6b35] text-xl font-black">
                      4
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold">TEXT INJECTED</h4>
                      <p className="text-sm text-white/60">
                        Transcribed text appears in your active application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-4 border-[#1a1a1a]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
                  SETTINGS &<br />
                  CONFIGURATION
                </h2>
                <p className="mb-8 text-lg text-[#666]">
                  Configure every aspect of OiPer to match your workflow. Speech
                  model management, backend preferences, online provider
                  configuration, and advanced options all at your fingertips.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="border-4 border-[#1a1a1a] p-6">
                    <h4 className="mb-2 font-bold">SPEECH MODELS</h4>
                    <p className="text-sm text-[#666]">
                      Select and download models. Various sizes and specialized
                      types available.
                    </p>
                  </div>
                  <div className="border-4 border-[#1a1a1a] p-6">
                    <h4 className="mb-2 font-bold">BACKEND OPTIONS</h4>
                    <p className="text-sm text-[#666]">
                      Auto detection, CPU-only mode, or GPU acceleration.
                    </p>
                  </div>
                  <div className="border-4 border-[#1a1a1a] p-6">
                    <h4 className="mb-2 font-bold">ONLINE PROVIDERS</h4>
                    <p className="text-sm text-[#666]">
                      Custom base URL, API key management, model configuration.
                    </p>
                  </div>
                  <div className="border-4 border-[#1a1a1a] p-6">
                    <h4 className="mb-2 font-bold">LLM TRANSCRIPTION</h4>
                    <p className="text-sm text-[#666]">
                      Enhanced accuracy for technical terminology using LLMs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#ff6b35] p-8 text-white">
                <h3 className="mb-6 text-2xl font-black">QUICK FACTS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Online optimization is completely optional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Requires your own API key for online services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Enable or disable online features anytime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Works with Gemini, specialized models, and more</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="privacy"
          className="border-b-4 border-[#1a1a1a] bg-[#1a1a1a] text-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <Lock className="mx-auto mb-6 h-16 w-16 text-[#ff6b35]" />
              <h2 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
                PRIVACY & SECURITY
              </h2>
              <p className="mb-12 text-lg text-white/60">
                OiPer runs entirely on your machine by default. Your voice, your
                transcripts, your logs never leave your device unless you
                explicitly choose to use online services.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="border-4 border-white/20 bg-white/5 p-8">
                  <Shield className="mb-4 h-10 w-10 text-[#ff6b35]" />
                  <h3 className="mb-2 font-black">LOCAL PROCESSING</h3>
                  <p className="text-sm text-white/50">
                    All transcription happens on your device. No cloud
                    dependencies.
                  </p>
                </div>
                <div className="border-4 border-white/20 bg-white/5 p-8">
                  <Settings className="mb-4 h-10 w-10 text-[#ff6b35]" />
                  <h3 className="mb-2 font-black">YOUR CHOICE</h3>
                  <p className="text-sm text-white/50">
                    Online optimization is optional. You decide what runs where.
                  </p>
                </div>
                <div className="border-4 border-white/20 bg-white/5 p-8">
                  <Lock className="mb-4 h-10 w-10 text-[#ff6b35]" />
                  <h3 className="mb-2 font-black">DATA CONTROL</h3>
                  <p className="text-sm text-white/50">
                    Activity logs and audio stay on-device. Full sovereignty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
              READY TO TRANSFORM
              <br />
              YOUR WORKFLOW?
            </h2>
            <p className="mb-8 text-lg text-[#666]">
              Download OiPer Desktop and experience the fastest, most private
              voice-to-text solution.
            </p>
            <button className="inline-flex items-center gap-2 border-b-4 border-[#000] bg-[#1a1a1a] px-12 py-5 text-lg font-bold text-white transition-colors hover:bg-[#333]">
              DOWNLOAD FOR WINDOWS, MACOS & LINUX
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <footer className="border-t-4 border-[#1a1a1a] px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center bg-[#1a1a1a]">
                <span className="font-black text-white">O</span>
              </div>
              <span className="text-sm text-[#666]">
                © 2024 OiPer Desktop. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm font-bold">
              <button
                type="button"
                className="transition-colors hover:text-[#ff6b35]"
              >
                PRIVACY
              </button>
              <button
                type="button"
                className="transition-colors hover:text-[#ff6b35]"
              >
                TERMS
              </button>
              <button
                type="button"
                className="transition-colors hover:text-[#ff6b35]"
              >
                GITHUB
              </button>
              <button
                type="button"
                className="transition-colors hover:text-[#ff6b35]"
              >
                DOCS
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
