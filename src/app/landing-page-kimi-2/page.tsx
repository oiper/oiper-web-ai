'use client'

import {
  Cpu,
  Database,
  Fingerprint,
  Mic,
  Radio,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LandingPageKimi2() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleMouseMove(e: MouseEvent) {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Animated grid background */}
      <div className="fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 127, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 127, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${(mousePos.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 50}px, ${(mousePos.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 50}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]"></div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-emerald-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-emerald-500/20 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            className="flex items-center gap-3 text-xl font-bold tracking-wider"
            href="/"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <Mic size={20} className="text-black" />
            </div>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              OiPer
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {['Features', 'Privacy', 'Performance', 'Download'].map((item) => (
              <Link
                key={item}
                className="group relative text-sm tracking-widest text-gray-400 uppercase transition-colors hover:text-emerald-400"
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs tracking-wider text-emerald-400 uppercase">
                  System Online
                </span>
              </div>
              <h1 className="text-5xl leading-none font-bold tracking-tighter lg:text-7xl">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Voice
                </span>
                <br />
                <span className="text-white">to text.</span>
                <br />
                <span className="text-gray-500">Reimagined.</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-gray-400">
                A privacy-first desktop application that transforms your voice
                into text with unprecedented speed and accuracy. Native code.
                Zero compromises.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="group relative overflow-hidden rounded bg-emerald-500 px-8 py-4 font-mono text-sm font-bold tracking-wider text-black uppercase transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Initialize
                    <Terminal size={16} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </button>
                <button className="rounded border border-gray-700 bg-gray-900/50 px-8 py-4 font-mono text-sm tracking-wider text-gray-400 uppercase backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:text-emerald-400">
                  View Source
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 shadow-2xl backdrop-blur-sm">
                <div className="flex h-10 items-center gap-2 border-b border-gray-800 bg-gray-900 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-4 font-mono text-xs text-gray-500">
                    oiper --status
                  </span>
                </div>
                <div className="space-y-4 p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <Radio
                        className="animate-pulse text-emerald-400"
                        size={28}
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-emerald-400">
                          [ACTIVE]
                        </span>
                        <span className="text-sm text-gray-400">
                          Recording Session
                        </span>
                      </div>
                      <div className="h-2 w-64 overflow-hidden rounded-full bg-gray-800">
                        <div className="h-full w-4/5 animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black/50 p-4 font-mono text-sm">
                    <p className="text-emerald-400">$</p>
                    <p className="mt-2 text-gray-300">
                      &ldquo;OiPer Desktop delivers sub-2 second transcription
                      for 30 seconds of audio with local
                      processing&hellip;&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '<2s', label: 'Transcription Time' },
              { value: '100%', label: 'Local Processing' },
              { value: '3x', label: 'Faster Than API' },
              { value: '0', label: 'Data Sent Away' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-mono text-3xl font-bold text-emerald-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs tracking-wider text-gray-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24" id="features">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs tracking-widest text-emerald-400 uppercase">
              Core Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Built for <span className="text-emerald-400">performance</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Instant Activation',
                desc: 'Global hotkey works anywhere. Press, speak, release. Text appears instantly.',
              },
              {
                icon: Cpu,
                title: 'Native Code',
                desc: 'Written in native code for maximum speed and minimal resource usage.',
              },
              {
                icon: Shield,
                title: 'Privacy First',
                desc: 'Everything stays on your device. No cloud dependency by default.',
              },
              {
                icon: Database,
                title: 'Model Flexibility',
                desc: 'Support for various model sizes. Choose what works for your hardware.',
              },
              {
                icon: Sparkles,
                title: 'Text Optimization',
                desc: 'Optional local or online cleanup. Your choice, your API key.',
              },
              {
                icon: Fingerprint,
                title: 'Full Control',
                desc: 'Customize hotkeys, backends, providers. Make it truly yours.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-emerald-500/50 hover:bg-gray-900"
              >
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-all group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <feature.icon size={26} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="relative py-24" id="privacy">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <Shield className="text-emerald-400" size={24} />
                    <span className="font-mono text-sm text-emerald-400">
                      SECURITY_STATUS
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Local_Transcription', status: 'ENABLED' },
                      { label: 'Audio_Storage', status: 'ON_DEVICE' },
                      { label: 'Network_Access', status: 'OPTIONAL' },
                      { label: 'Data_Collection', status: 'DISABLED' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded border border-gray-800 bg-black/30 p-4 font-mono text-sm"
                      >
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-emerald-400">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="inline-block font-mono text-xs tracking-widest text-emerald-400 uppercase">
                Privacy Architecture
              </span>
              <h2 className="text-4xl leading-tight font-bold lg:text-5xl">
                Your data never leaves your machine
              </h2>
              <p className="text-lg leading-relaxed text-gray-400">
                Privacy isn&apos;t an optional setting — it&apos;s the default.
                OiPer runs entirely locally. Your voice, your transcripts, your
                control.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
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
                  <span className="text-gray-300">
                    Transcription runs entirely on-device
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
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
                  <span className="text-gray-300">
                    Activity logs stored locally
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
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
                  <span className="text-gray-300">
                    Online features require your explicit API key
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-24" id="performance">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs tracking-widest text-emerald-400 uppercase">
              Benchmark Results
            </span>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Speed comparison
            </h2>
            <p className="mt-4 text-gray-400">
              30 seconds of English audio transcription
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50">
            <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
              <div className="grid grid-cols-3 gap-4 font-mono text-xs tracking-wider text-gray-500 uppercase">
                <span>Solution</span>
                <span>Time (s)</span>
                <span>Performance</span>
              </div>
            </div>
            {[
              {
                name: 'OiPer Desktop',
                time: 1.5,
                width: '20%',
                highlight: true,
              },
              {
                name: 'Lemonfox API',
                time: 3.27,
                width: '45%',
                highlight: false,
              },
              {
                name: 'Python Faster-Whisper',
                time: 3.55,
                width: '50%',
                highlight: false,
              },
              {
                name: 'OpenAI Whisper 1 API',
                time: 6.46,
                width: '90%',
                highlight: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 border-b border-gray-800 px-6 py-5 last:border-0 ${item.highlight ? 'bg-emerald-500/10' : 'hover:bg-gray-800/50'}`}
              >
                <span
                  className={`font-medium ${item.highlight ? 'text-emerald-400' : 'text-gray-300'}`}
                >
                  {item.name}
                  {item.highlight && (
                    <span className="ml-2 text-xs">★ WINNER</span>
                  )}
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-800">
                    <div
                      className={`h-full rounded-full ${item.highlight ? 'bg-emerald-400' : 'bg-gray-600'}`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                  <span className="font-mono text-sm text-gray-400">
                    {item.time}s
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {item.highlight
                    ? 'Fastest + Local'
                    : `${(item.time / 1.5).toFixed(1)}x slower`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="border-y border-gray-800 bg-gray-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs tracking-widest text-emerald-400 uppercase">
              Configuration
            </span>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Complete customization
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'SPEECH_MODELS',
                items: ['Multiple sizes', 'Easy download', 'Custom support'],
              },
              {
                title: 'BACKEND_OPTIONS',
                items: ['Auto detection', 'CPU-only mode', 'GPU acceleration'],
              },
              {
                title: 'ONLINE_PROVIDERS',
                items: [
                  'Custom base URLs',
                  'API key config',
                  'Model selection',
                ],
              },
              {
                title: 'ADVANCED_FEATURES',
                items: [
                  'LLM transcription',
                  'Gemini 2.5 Flash',
                  'Specialized models',
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-emerald-500/30"
              >
                <h3 className="mb-4 font-mono text-xs tracking-wider text-emerald-400 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-emerald-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" id="download">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-gray-900 px-8 py-20 text-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            <div className="relative">
              <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
                Initialize your workflow
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
                Download OiPer Desktop and experience the fastest, most private
                voice transcription available.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="flex items-center gap-2 rounded bg-emerald-500 px-8 py-4 font-bold text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for macOS
                </button>
                <button className="flex items-center gap-2 rounded border border-gray-700 bg-gray-900/50 px-8 py-4 font-bold text-gray-300 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:text-emerald-400">
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
              <div className="mt-6 text-xs text-gray-500">
                Also available for Linux • Free and open source
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link
              className="flex items-center gap-2 text-lg font-bold tracking-wider"
              href="/"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500">
                <Mic size={16} className="text-black" />
              </div>
              <span className="text-emerald-400">OiPer</span>
            </Link>
            <p className="font-mono text-xs text-gray-500">
              © 2026 OiPer. Privacy-first voice transcription.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'GitHub'].map((item) => (
                <Link
                  key={item}
                  className="font-mono text-xs tracking-wider text-gray-500 uppercase transition-colors hover:text-emerald-400"
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
