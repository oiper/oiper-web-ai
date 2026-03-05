'use client'

import {
  ArrowDown,
  Headphones,
  Mic,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function LandingPageKimi3() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#ff6b6b] text-black">
      {/* Brutalist Grid Background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Bold Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b-4 border-black bg-[#ff6b6b]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            className="flex items-center gap-3 text-3xl font-black tracking-tighter uppercase"
            href="/"
          >
            <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-black text-[#ff6b6b]">
              <Mic size={28} strokeWidth={3} />
            </div>
            <span>OiPer</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {['FEATURES', 'PRIVACY', 'SPEED', 'DOWNLOAD'].map((item, i) => (
              <Link
                key={i}
                className="border-4 border-transparent px-6 py-2 text-sm font-black tracking-tight uppercase transition-all hover:border-black hover:bg-white"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Brutalist Style */}
      <section className="relative pt-32">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-block border-4 border-black bg-white px-4 py-2 font-black tracking-tight uppercase">
                Now Available
              </div>
              <h1 className="text-7xl leading-[0.85] font-black tracking-tighter uppercase lg:text-9xl">
                Voice
                <br />
                <span className="bg-black px-2 text-[#ff6b6b]">2</span>
                <span>Text</span>
              </h1>
              <p className="max-w-md text-xl leading-tight font-bold">
                A privacy-first desktop app that transforms your voice into text
                instantly. No cloud. No compromises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="inline-flex items-center gap-3 border-4 border-black bg-black px-8 py-4 text-xl font-black text-[#ff6b6b] uppercase transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  href="#download"
                >
                  Download
                  <ArrowDown size={24} />
                </Link>
                <Link
                  className="inline-flex items-center gap-3 border-4 border-black bg-white px-8 py-4 text-xl font-black uppercase transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  href="#features"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="relative border-4 border-black bg-white p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <div className="flex h-12 items-center gap-2 border-b-4 border-black bg-[#ff6b6b] px-4">
                  <div className="h-4 w-4 border-2 border-black bg-white"></div>
                  <div className="h-4 w-4 border-2 border-black bg-white"></div>
                  <div className="h-4 w-4 border-2 border-black bg-white"></div>
                  <span className="ml-4 font-mono text-xs font-bold">
                    OiPer Desktop
                  </span>
                </div>
                <div className="space-y-4 bg-black p-6">
                  <div className="flex items-center gap-4 border-4 border-white bg-white p-4">
                    <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-[#ff6b6b]">
                      <Mic size={32} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-6 border-2 border-black bg-[#ff6b6b]"></div>
                      <div className="h-6 w-2/3 border-2 border-black bg-[#ff6b6b]"></div>
                    </div>
                  </div>
                  <div className="border-4 border-white bg-white p-4">
                    <p className="font-mono text-sm leading-relaxed">
                      &ldquo;Hold hotkey → Speak → Release → Text appears
                      instantly&hellip;&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -right-8 -bottom-8 h-32 w-32 border-4 border-black bg-white"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl font-black">1.5s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y-4 border-black bg-black py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { num: '1.5s', label: 'TRANSCRIPTION' },
              { num: '100%', label: 'LOCAL' },
              { num: '3x', label: 'FASTER' },
              { num: '0', label: 'CLOUD' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-[#ff6b6b]">
                  {stat.num}
                </div>
                <div className="mt-1 text-sm font-black tracking-tight text-white uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Brutalist Cards */}
      <section className="py-24" id="features">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <span className="mb-4 inline-block border-4 border-black bg-black px-4 py-2 text-sm font-black tracking-tight text-[#ff6b6b] uppercase">
              Core Features
            </span>
            <h2 className="text-6xl font-black tracking-tighter uppercase">
              Built Different
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Instant',
                desc: 'Global hotkey activation. Press, speak, release. Text appears in your active app.',
              },
              {
                icon: Terminal,
                title: 'Native',
                desc: 'Written in native code. Maximum speed. Minimal resources. Zero bloat.',
              },
              {
                icon: Shield,
                title: 'Private',
                desc: 'Everything stays on your machine. No cloud dependency. Full control.',
              },
              {
                icon: Headphones,
                title: 'Flexible',
                desc: 'Multiple model sizes. CPU or GPU. Local or online. Your choice.',
              },
              {
                icon: Sparkles,
                title: 'Smart',
                desc: 'Optional text optimization. Your API key. Your rules. Your data.',
              },
              {
                icon: ArrowDown,
                title: 'Open',
                desc: 'Free and open source. Community driven. Transparent by design.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative border-4 border-black bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center border-4 border-black bg-[#ff6b6b] transition-colors group-hover:bg-black group-hover:text-[#ff6b6b]">
                  <feature.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="mb-3 text-2xl font-black tracking-tight uppercase">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="border-y-4 border-black bg-white py-24" id="privacy">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-block border-4 border-black bg-black px-4 py-2 text-sm font-black tracking-tight text-[#ff6b6b] uppercase">
                Privacy First
              </span>
              <h2 className="text-6xl leading-[0.9] font-black tracking-tighter uppercase">
                Your Data
                <br />
                <span className="bg-[#ff6b6b] px-2">Stays Yours</span>
              </h2>
              <p className="max-w-md text-xl leading-tight font-bold">
                No cloud by default. No data collection. No tracking. Your voice
                never leaves your machine unless you explicitly choose
                otherwise.
              </p>
              <div className="space-y-3">
                {[
                  'Transcription runs locally',
                  'Audio files stay on-device',
                  'No analytics or telemetry',
                  'Open source & auditable',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center border-4 border-black bg-[#ff6b6b]">
                      <svg
                        className="h-5 w-5"
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
                    <span className="font-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="border-4 border-black bg-black p-6 shadow-[12px_12px_0px_0px_rgba(255,107,107,1)]">
                <div className="mb-6 flex items-center gap-3 border-b-4 border-white pb-4">
                  <Shield className="text-[#ff6b6b]" size={32} />
                  <span className="font-black tracking-tight text-white uppercase">
                    Security Status
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Local Processing', val: 'ENABLED' },
                    { label: 'Cloud Sync', val: 'DISABLED' },
                    { label: 'Data Collection', val: 'NONE' },
                    { label: 'Encryption', val: 'AES-256' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-4 border-white bg-white p-4"
                    >
                      <span className="text-sm font-black">{item.label}</span>
                      <span className="border-2 border-black bg-[#ff6b6b] px-3 py-1 text-xs font-black">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Table */}
      <section className="py-24" id="speed">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <span className="mb-4 inline-block border-4 border-black bg-black px-4 py-2 text-sm font-black tracking-tight text-[#ff6b6b] uppercase">
              Benchmarks
            </span>
            <h2 className="text-6xl font-black tracking-tighter uppercase">
              Speed Comparison
            </h2>
            <p className="mt-4 text-xl font-bold">
              30 seconds of English audio transcription
            </p>
          </div>
          <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-3 gap-4 border-b-4 border-black bg-black px-6 py-4 text-white">
              <span className="font-black tracking-tight uppercase">
                Solution
              </span>
              <span className="font-black tracking-tight uppercase">Time</span>
              <span className="font-black tracking-tight uppercase">
                Status
              </span>
            </div>
            {[
              {
                name: 'OiPer Desktop',
                time: '1.5s',
                status: 'WINNER',
                win: true,
              },
              {
                name: 'Lemonfox API',
                time: '3.27s',
                status: 'SLOWER',
                win: false,
              },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                status: 'SLOWER',
                win: false,
              },
              {
                name: 'OpenAI Whisper 1 API',
                time: '6.46s',
                status: 'SLOWEST',
                win: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 border-b-4 border-black px-6 py-5 last:border-b-0 ${item.win ? 'bg-[#ff6b6b]' : 'hover:bg-gray-100'}`}
              >
                <span className="font-black">{item.name}</span>
                <span className="font-mono text-xl font-black">
                  {item.time}
                </span>
                <span
                  className={`inline-flex w-fit items-center border-4 border-black px-3 py-1 text-xs font-black ${item.win ? 'bg-black text-[#ff6b6b]' : 'bg-white'}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="border-y-4 border-black bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block border-4 border-[#ff6b6b] bg-[#ff6b6b] px-4 py-2 text-sm font-black tracking-tight text-black uppercase">
              Configuration
            </span>
            <h2 className="text-6xl font-black tracking-tighter text-white uppercase">
              Full Control
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Models',
                items: ['Multiple sizes', 'Easy downloads', 'Custom models'],
              },
              {
                title: 'Backends',
                items: ['Auto detection', 'CPU only', 'GPU accel'],
              },
              {
                title: 'Providers',
                items: ['Custom URLs', 'API keys', 'Flexible config'],
              },
              {
                title: 'Advanced',
                items: ['LLM options', 'Gemini Flash', 'Specialized'],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border-4 border-[#ff6b6b] bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,107,107,1)]"
              >
                <h3 className="mb-4 border-b-4 border-black pb-2 text-xl font-black uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 font-mono text-sm"
                    >
                      <span className="h-2 w-2 bg-[#ff6b6b]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" id="download">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative border-4 border-black bg-white p-12 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] lg:p-20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 border-4 border-black bg-[#ff6b6b] px-6 py-2">
              <span className="font-black tracking-tight uppercase">
                Free Download
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-black tracking-tighter uppercase lg:text-7xl">
              Get OiPer Now
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-bold">
              Available for macOS, Windows, and Linux. Free and open source.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-3 border-4 border-black bg-black px-8 py-4 text-xl font-black text-[#ff6b6b] uppercase transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                macOS
              </button>
              <button className="inline-flex items-center gap-3 border-4 border-black bg-white px-8 py-4 text-xl font-black uppercase transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13zM5.5 5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13z" />
                  <path d="M10 8h4v1h-4V8zm-2.5 3h9v1h-9v-1zm0 3h9v1h-9v-1z" />
                </svg>
                Windows
              </button>
              <button className="inline-flex items-center gap-3 border-4 border-black bg-[#ff6b6b] px-8 py-4 text-xl font-black uppercase transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Terminal size={24} />
                Linux
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-[#ff6b6b] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link
              className="flex items-center gap-3 text-2xl font-black tracking-tighter uppercase"
              href="/"
            >
              <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-black text-[#ff6b6b]">
                <Mic size={20} strokeWidth={3} />
              </div>
              <span>OiPer</span>
            </Link>
            <p className="text-sm font-black">
              © 2026 OiPer. Privacy-first voice transcription.
            </p>
            <div className="flex gap-2">
              {['Privacy', 'Terms', 'GitHub'].map((item) => (
                <Link
                  key={item}
                  className="border-4 border-transparent px-4 py-2 text-sm font-black uppercase transition-all hover:border-black hover:bg-white"
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
