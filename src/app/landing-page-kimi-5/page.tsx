'use client'

import {
  ChevronRight,
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

export default function LandingPageKimi5() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const sections = [
        'hero',
        'features',
        'privacy',
        'performance',
        'download',
      ]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = ['Hero', 'Features', 'Privacy', 'Performance', 'Download']

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a]">
      {/* Editorial Navigation */}
      <nav className="fixed top-0 left-0 z-50 hidden h-full w-20 flex-col items-center justify-center gap-8 border-r border-[#e5e0d8] bg-[#faf8f5] lg:flex">
        <Link className="absolute top-8" href="/">
          <div className="flex h-10 w-10 items-center justify-center border border-[#1a1a1a] bg-[#1a1a1a] text-[#faf8f5]">
            <Mic size={18} strokeWidth={1.5} />
          </div>
        </Link>
        <div className="flex flex-col gap-4">
          {sections.map((section, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${activeSection === i ? 'h-8 bg-[#1a1a1a]' : 'bg-[#d4cfc7] hover:bg-[#1a1a1a]'}`}
              onClick={() => {
                const element = document.getElementById(section.toLowerCase())
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            ></button>
          ))}
        </div>
        <div className="absolute bottom-8 rotate-180 text-xs font-medium tracking-widest text-[#999] [writing-mode:vertical-lr]">
          OiPer Desktop
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#e5e0d8] bg-[#faf8f5]/95 backdrop-blur-sm lg:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            className="flex items-center gap-3 text-lg font-medium"
            href="/"
          >
            <div className="flex h-9 w-9 items-center justify-center border border-[#1a1a1a] bg-[#1a1a1a] text-[#faf8f5]">
              <Mic size={16} strokeWidth={1.5} />
            </div>
            <span className="tracking-tight">OiPer</span>
          </Link>
          <Link
            className="rounded-full bg-[#1a1a1a] px-4 py-2 text-sm text-[#faf8f5]"
            href="#download"
          >
            Download
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 lg:pt-0" id="hero">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:pl-28">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-7">
              <div className="space-y-2">
                <p className="text-sm font-medium tracking-[0.2em] text-[#999] uppercase">
                  Voice-to-Text Application
                </p>
                <div className="h-px w-20 bg-[#1a1a1a]"></div>
              </div>
              <h1 className="font-serif text-6xl leading-[1.1] tracking-tight lg:text-8xl">
                The art of
                <br />
                <em className="text-[#c4a574] not-italic">listening</em>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-[#666]">
                OiPer is a privacy-first desktop application that transforms
                your voice into text with elegance and precision. Hold a hotkey,
                speak, release — and watch your words appear.
              </p>
              <div className="flex items-center gap-8">
                <Link
                  className="group flex items-center gap-3 border-b border-[#1a1a1a] pb-2 text-lg font-medium transition-all hover:gap-5"
                  href="#download"
                >
                  Download now
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Link>
                <span className="text-sm text-[#999]">
                  Free for macOS, Windows & Linux
                </span>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f0ebe3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#1a1a1a]">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#c4a574]">
                        <Mic size={32} strokeWidth={1} />
                      </div>
                    </div>
                    <div className="absolute top-0 -right-16 space-y-2">
                      <div className="h-1 w-12 bg-[#1a1a1a]"></div>
                      <div className="h-1 w-8 bg-[#c4a574]"></div>
                      <div className="h-1 w-16 bg-[#1a1a1a]"></div>
                    </div>
                    <div className="absolute bottom-0 -left-20 space-y-2">
                      <div className="h-1 w-16 bg-[#1a1a1a]"></div>
                      <div className="h-1 w-10 bg-[#c4a574]"></div>
                      <div className="h-1 w-14 bg-[#1a1a1a]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 border border-[#e5e0d8] bg-[#faf8f5] p-6">
                <p className="font-serif text-4xl text-[#c4a574]">1.5s</p>
                <p className="text-xs tracking-widest text-[#999] uppercase">
                  Transcription time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="border-y border-[#e5e0d8] bg-[#1a1a1a] py-32 text-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm tracking-[0.2em] text-[#c4a574] uppercase">
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
                Three pillars define everything we create
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'User Experience',
                  desc: 'Fast, seamless, and intuitive workflow that feels invisible.',
                },
                {
                  title: 'Performance',
                  desc: 'Native code implementation for maximum speed and efficiency.',
                },
                {
                  title: 'Privacy',
                  desc: 'Runs entirely on your machine. Your data, your control.',
                },
              ].map((item, i) => (
                <div key={i} className="group flex gap-6">
                  <span className="font-serif text-3xl text-[#c4a574]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                    <p className="text-[#999]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32" id="features">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="mb-20">
            <p className="mb-4 text-sm tracking-[0.2em] text-[#999] uppercase">
              Capabilities
            </p>
            <h2 className="font-serif text-5xl leading-tight">
              Designed with purpose
            </h2>
          </div>
          <div className="grid gap-px bg-[#e5e0d8] md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Instant Activation',
                desc: 'Global hotkey works anywhere on your system. Press, speak, release.',
              },
              {
                icon: Cpu,
                title: 'Native Performance',
                desc: 'Written in native code for unmatched speed and minimal resources.',
              },
              {
                icon: Shield,
                title: 'Privacy First',
                desc: 'Everything runs locally. Your voice never leaves your device.',
              },
              {
                icon: Headphones,
                title: 'Model Flexibility',
                desc: 'Support for various sizes and types. Choose what fits your needs.',
              },
              {
                icon: Sparkles,
                title: 'Smart Cleanup',
                desc: 'Optional text optimization with your own API key and rules.',
              },
              {
                icon: Globe,
                title: 'Universal',
                desc: 'Available for macOS, Windows, and Linux with native feel.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-[#faf8f5] p-10 transition-colors hover:bg-[#f0ebe3]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#1a1a1a] transition-colors group-hover:bg-[#1a1a1a] group-hover:text-[#faf8f5]">
                  <feature.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-lg font-medium">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#666]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="border-y border-[#e5e0d8] py-32" id="privacy">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <p className="mb-4 text-sm tracking-[0.2em] text-[#c4a574] uppercase">
                  Data Sovereignty
                </p>
                <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
                  Your voice belongs to you
                </h2>
              </div>
            </div>
            <div className="space-y-8 lg:col-span-7">
              <p className="text-lg leading-relaxed text-[#666]">
                Privacy isn&apos;t a feature we bolt on — it&apos;s woven into
                the fabric of OiPer. By default, everything happens on your
                machine. Your recordings, your transcripts, your complete
                control.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'Local Processing',
                    desc: 'Transcription runs entirely on your device using local models.',
                  },
                  {
                    title: 'On-Device Storage',
                    desc: 'Audio files and logs remain on your machine, nowhere else.',
                  },
                  {
                    title: 'Optional Cloud',
                    desc: 'Online features only with your explicit API key.',
                  },
                  {
                    title: 'Zero Tracking',
                    desc: 'No analytics, no telemetry, no data collection.',
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#c4a574] pl-6">
                    <h3 className="mb-2 font-medium">{item.title}</h3>
                    <p className="text-sm text-[#666]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-32" id="performance">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="mb-20 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm tracking-[0.2em] text-[#999] uppercase">
                Benchmarks
              </p>
              <h2 className="font-serif text-5xl leading-tight">
                Numbers that speak
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#666]">
                30 seconds of English audio transcription. Lower is better.
              </p>
            </div>
          </div>
          <div className="border border-[#e5e0d8]">
            <div className="grid grid-cols-12 gap-4 border-b border-[#e5e0d8] bg-[#f0ebe3] px-6 py-4 text-sm font-medium tracking-wider text-[#666] uppercase">
              <div className="col-span-5">Solution</div>
              <div className="col-span-3">Time</div>
              <div className="col-span-4">Relative</div>
            </div>
            {[
              {
                name: 'OiPer Desktop',
                time: '1.5s',
                rel: 'Baseline',
                win: true,
              },
              {
                name: 'Lemonfox API',
                time: '3.27s',
                rel: '2.2× slower',
                win: false,
              },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                rel: '2.4× slower',
                win: false,
              },
              {
                name: 'OpenAI Whisper 1 API',
                time: '6.46s',
                rel: '4.3× slower',
                win: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-4 border-b border-[#e5e0d8] px-6 py-6 transition-colors last:border-b-0 hover:bg-[#f0ebe3] ${item.win ? 'bg-[#faf8f5]' : ''}`}
              >
                <div className="col-span-5">
                  <span
                    className={`font-medium ${item.win ? 'text-[#c4a574]' : ''}`}
                  >
                    {item.name}
                  </span>
                  {item.win && (
                    <span className="ml-3 text-xs tracking-wider text-[#c4a574] uppercase">
                      Fastest
                    </span>
                  )}
                </div>
                <div className="col-span-3 font-serif text-xl">{item.time}</div>
                <div className="col-span-4 text-[#666]">{item.rel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="border-y border-[#e5e0d8] bg-[#f0ebe3] py-32">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm tracking-[0.2em] text-[#999] uppercase">
              Configuration
            </p>
            <h2 className="font-serif text-5xl leading-tight">
              Crafted for control
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Speech Models',
                items: ['Multiple sizes', 'Easy download', 'Custom support'],
              },
              {
                title: 'Backend',
                items: ['Auto detection', 'CPU mode', 'GPU acceleration'],
              },
              {
                title: 'Providers',
                items: ['Custom URLs', 'API keys', 'Model selection'],
              },
              {
                title: 'Advanced',
                items: ['LLM options', 'Gemini Flash', 'Specialized models'],
              },
            ].map((section, i) => (
              <div key={i} className="space-y-6">
                <h3 className="border-b border-[#1a1a1a] pb-4 text-lg font-medium">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm text-[#666]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-32" id="download">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <p className="text-sm tracking-[0.2em] text-[#999] uppercase">
                Get Started
              </p>
              <h2 className="font-serif text-5xl leading-tight lg:text-6xl">
                Begin your journey
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-[#666]">
                OiPer is free and open source. Download it today and experience
                voice transcription that respects your privacy and your time.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  platform: 'macOS',
                  version: 'Universal Binary',
                  size: '45 MB',
                },
                {
                  platform: 'Windows',
                  version: '64-bit Installer',
                  size: '42 MB',
                },
                {
                  platform: 'Linux',
                  version: 'AppImage',
                  size: '48 MB',
                },
              ].map((os, i) => (
                <button
                  key={i}
                  className="group flex w-full items-center justify-between border border-[#e5e0d8] bg-white p-6 transition-all hover:border-[#1a1a1a] hover:shadow-lg"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-2xl">{os.platform}</span>
                    <div className="text-sm text-[#999]">
                      <p>{os.version}</p>
                      <p>{os.size}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-2"
                    size={20}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e0d8] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:pl-28">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <Link
              className="flex items-center gap-3 text-lg font-medium"
              href="/"
            >
              <div className="flex h-9 w-9 items-center justify-center border border-[#1a1a1a] bg-[#1a1a1a] text-[#faf8f5]">
                <Mic size={16} strokeWidth={1.5} />
              </div>
              <span>OiPer</span>
            </Link>
            <p className="text-sm text-[#999]">
              © 2026 OiPer. Privacy-first voice transcription.
            </p>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'GitHub'].map((item) => (
                <Link
                  key={item}
                  className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
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
