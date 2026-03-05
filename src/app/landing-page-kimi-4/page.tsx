'use client'

import {
  Cpu,
  Globe,
  Headphones,
  Mic,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LandingPageKimi4() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800">
      {/* Organic blob backgrounds */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex h-16 items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-6 shadow-lg shadow-blue-100/50 backdrop-blur-xl">
            <Link
              className="flex items-center gap-3 text-xl font-bold text-slate-800"
              href="/"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <Mic size={22} />
              </div>
              <span>OiPer</span>
            </Link>
            <div className="hidden items-center gap-2 md:flex">
              {['Features', 'Privacy', 'Performance', 'Download'].map(
                (item) => (
                  <Link
                    key={item}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
            <Link
              className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40"
              href="#download"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-600">
                  Now available for all platforms
                </span>
              </div>
              <h1 className="text-5xl leading-tight font-bold text-slate-800 lg:text-7xl">
                Speak naturally,{' '}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  write instantly
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600">
                OiPer brings the power of voice to your desktop with
                privacy-first design. Your words, your control, your machine.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl"
                  href="#download"
                >
                  <span className="relative z-10">Download for free</span>
                </Link>
                <Link
                  className="rounded-xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                  href="#features"
                >
                  Explore features
                </Link>
              </div>
            </div>
            <div
              className={`relative transition-all delay-300 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blue-200/50 to-indigo-200/50 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-2 shadow-2xl shadow-blue-200/50 backdrop-blur-xl">
                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                      <Mic size={28} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Voice Recording
                      </p>
                      <p className="text-sm text-slate-500">Press and hold</p>
                    </div>
                    <div className="ml-auto">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-full bg-blue-500"
                          style={{
                            height: `${20 + Math.random() * 60}%`,
                            opacity: 0.3 + Math.random() * 0.7,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      &ldquo;OiPer makes voice transcription feel magical. Just
                      press, speak, and your words appear instantly in any
                      application.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
            fillOpacity="0.5"
          ></path>
        </svg>
      </div>

      {/* Features Section */}
      <section className="relative bg-white/50 py-24" id="features">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Core Features
            </span>
            <h2 className="text-4xl font-bold text-slate-800 lg:text-5xl">
              Designed for how you work
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Global hotkey activation with instant text injection into any application.',
                color: 'from-yellow-400 to-orange-500',
              },
              {
                icon: Cpu,
                title: 'Native Performance',
                desc: 'Written in native code for maximum speed and minimal resource usage.',
                color: 'from-blue-400 to-blue-600',
              },
              {
                icon: Shield,
                title: 'Privacy First',
                desc: 'Everything runs locally. Your voice never leaves your device by default.',
                color: 'from-green-400 to-emerald-600',
              },
              {
                icon: Headphones,
                title: 'Flexible Models',
                desc: 'Support for various model sizes. Choose what fits your needs.',
                color: 'from-purple-400 to-purple-600',
              },
              {
                icon: Sparkles,
                title: 'Smart Cleanup',
                desc: 'Optional text optimization. Your API key, your rules.',
                color: 'from-pink-400 to-rose-500',
              },
              {
                icon: Globe,
                title: 'Works Everywhere',
                desc: 'Available for macOS, Windows, and Linux. Consistent experience.',
                color: 'from-cyan-400 to-blue-500',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform group-hover:scale-110`}
                >
                  <feature.icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24" id="privacy">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-200/50 to-emerald-200/50 blur-xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Shield size={24} />
                    </div>
                    <span className="font-semibold text-slate-800">
                      Privacy Dashboard
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        label: 'Local Processing',
                        status: 'On',
                        color: 'green',
                      },
                      {
                        label: 'Data Encryption',
                        status: 'AES-256',
                        color: 'green',
                      },
                      { label: 'Cloud Sync', status: 'Off', color: 'slate' },
                      {
                        label: 'Analytics',
                        status: 'Disabled',
                        color: 'slate',
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
                      >
                        <span className="text-slate-600">{item.label}</span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.color === 'green'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Your Data, Your Rules
              </span>
              <h2 className="text-4xl leading-tight font-bold text-slate-800 lg:text-5xl">
                Privacy built into every pixel
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                We believe privacy isn&apos;t a feature you enable — it&apos;s
                the foundation. OiPer runs entirely on your machine. Your voice,
                your transcripts, your complete control.
              </p>
              <div className="space-y-4">
                {[
                  'Transcription happens locally on your device',
                  'Audio files stored only on your machine',
                  'Optional online features require your API key',
                  'No tracking, no analytics, no compromises',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="bg-white/50 py-24" id="performance">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Benchmarks
            </span>
            <h2 className="text-4xl font-bold text-slate-800 lg:text-5xl">
              Speed that speaks for itself
            </h2>
            <p className="mt-4 text-slate-600">
              30 seconds of English audio transcription
            </p>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
            <div className="border-b border-slate-100 bg-slate-50 px-8 py-5">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-slate-500">
                <span>Solution</span>
                <span>Time</span>
                <span>Speed</span>
              </div>
            </div>
            {[
              {
                name: 'OiPer Desktop',
                time: '1.5s',
                speed: 'Fastest',
                highlight: true,
              },
              {
                name: 'Lemonfox API',
                time: '3.27s',
                speed: '2.2x slower',
                highlight: false,
              },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                speed: '2.4x slower',
                highlight: false,
              },
              {
                name: 'OpenAI Whisper 1 API',
                time: '6.46s',
                speed: '4.3x slower',
                highlight: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 border-b border-slate-100 px-8 py-6 transition-colors last:border-0 hover:bg-slate-50 ${item.highlight ? 'bg-blue-50/50' : ''}`}
              >
                <span
                  className={`font-semibold ${item.highlight ? 'text-blue-600' : 'text-slate-800'}`}
                >
                  {item.name}
                  {item.highlight && (
                    <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs">
                      Winner
                    </span>
                  )}
                </span>
                <span className="font-mono text-slate-600">{item.time}</span>
                <span className="text-slate-600">{item.speed}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Customization
            </span>
            <h2 className="text-4xl font-bold text-slate-800 lg:text-5xl">
              Tailored to your workflow
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Speech Models',
                desc: 'Multiple sizes available with easy download and management.',
                icon: Mic,
                color: 'bg-blue-100 text-blue-600',
              },
              {
                title: 'Backend Options',
                desc: 'Auto detection, CPU-only, or GPU acceleration modes.',
                icon: Cpu,
                color: 'bg-purple-100 text-purple-600',
              },
              {
                title: 'Online Providers',
                desc: 'Custom base URLs, API keys, and flexible model selection.',
                icon: Globe,
                color: 'bg-green-100 text-green-600',
              },
              {
                title: 'Advanced Features',
                desc: 'LLM transcription options including Gemini 2.5 Flash Lite.',
                icon: Sparkles,
                color: 'bg-pink-100 text-pink-600',
              },
            ].map((section, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/30 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${section.color} transition-transform group-hover:scale-110`}
                >
                  <section.icon size={24} />
                </div>
                <h3 className="mb-2 font-bold text-slate-800">
                  {section.title}
                </h3>
                <p className="text-sm text-slate-600">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" id="download">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-12 text-center shadow-2xl shadow-blue-500/30 lg:p-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative">
              <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
                Download OiPer today and transform how you work with voice.
                Free, open source, and privacy-first.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="group flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for macOS
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13zM5.5 5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13z" />
                    <path d="M10 8h4v1h-4V8zm-2.5 3h9v1h-9v-1zm0 3h9v1h-9v-1z" />
                  </svg>
                  Download for Windows
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link
              className="flex items-center gap-3 text-xl font-bold text-slate-800"
              href="/"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <Mic size={22} />
              </div>
              <span>OiPer</span>
            </Link>
            <p className="text-slate-500">
              © 2026 OiPer. Privacy-first voice transcription.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'GitHub'].map((item) => (
                <Link
                  key={item}
                  className="text-slate-500 transition-colors hover:text-blue-600"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
