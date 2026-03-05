'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  Cpu,
  Download,
  Mic,
  Play,
  Shield,
  Zap,
} from 'lucide-react'

export default function LandingPageQwen4() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500">
            <Mic className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-wider">OiPER</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            About
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Specs
          </Button>
          <Button className="bg-orange-500 font-semibold text-black hover:bg-orange-600">
            Download
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <main className="px-8">
        <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center">
          <div className="w-full">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h1 className="mb-8 text-6xl leading-none font-black tracking-tighter lg:text-8xl">
                  VOICE
                  <br />
                  <span className="text-orange-500">&rarr;</span>
                  <br />
                  TEXT
                </h1>

                <p className="mb-10 max-w-lg text-xl text-gray-400">
                  The fastest way to transcribe your voice. Hold. Speak.
                  Release. Done in 1.5 seconds.
                </p>

                <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-orange-500 px-8 py-6 text-lg font-semibold text-black hover:bg-orange-600"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Free
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 px-8 py-6 text-lg"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    See It Work
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span>100% Local</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span>Open Source</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span>No Account</span>
                  </div>
                </div>
              </div>

              {/* Right side - Terminal style */}
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-orange-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-[#0d0d0d]">
                  <div className="flex items-center gap-2 border-b border-gray-800 bg-[#0d0d0d] px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-gray-700" />
                    <div className="h-3 w-3 rounded-full bg-gray-700" />
                    <div className="h-3 w-3 rounded-full bg-gray-700" />
                    <span className="ml-4 font-mono text-xs text-gray-500">
                      oiper — transcription
                    </span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-green-500">$</span>
                      <span className="text-gray-300">
                        oiper record --hotkey=space
                      </span>
                    </div>
                    <div className="mb-4 text-gray-500">
                      Waiting for input... Press SPACE to record
                    </div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="animate-pulse text-orange-500">●</span>
                      <span className="text-gray-300">
                        Recording... (release to transcribe)
                      </span>
                    </div>
                    <div className="mb-4 text-gray-500">
                      Processing with local model...
                    </div>
                    <div className="rounded border border-gray-800 bg-gray-900 p-4">
                      <div className="mb-2 text-gray-500">// Output:</div>
                      <div className="text-green-400">
                        "The quick brown fox jumps over the lazy dog.
                        Performance benchmark: 1.5 seconds elapsed."
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-green-500">$</span>
                      <span className="text-gray-300">
                        echo "Transcription complete in 1.5s"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-gray-800 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '1.5s', label: 'Avg. Transcription' },
                { value: '10x', label: 'Faster Than API' },
                { value: '0%', label: 'Cloud Dependency' },
                { value: '100%', label: 'Privacy' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mb-2 text-4xl font-black text-orange-500 lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - brutalist cards */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-20 text-5xl font-black tracking-tighter lg:text-7xl">
              FEATURES
            </h2>

            <div className="grid gap-px border border-gray-800 bg-gray-800 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: 'Instant Injection',
                  description:
                    'Text appears directly in your active application. No copy-paste needed.',
                },
                {
                  icon: Shield,
                  title: 'Privacy Locked',
                  description:
                    'Audio stays on device. Logs stay on device. Period.',
                },
                {
                  icon: Cpu,
                  title: 'Native Speed',
                  description:
                    'Written in native code. GPU acceleration. Minimal resources.',
                },
                {
                  icon: Mic,
                  title: 'Global Hotkey',
                  description:
                    'Works everywhere. Configurable key. Press and hold workflow.',
                },
                {
                  icon: Cpu,
                  title: 'Backend Choice',
                  description:
                    'Auto, CPU-only, or GPU. Pick what suits your hardware.',
                },
                {
                  icon: Shield,
                  title: 'LLM Optional',
                  description:
                    'Enhance accuracy with specialized models for technical terms.',
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-[#1a1a1a] p-8 transition-colors hover:bg-[#222]"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-orange-500">
                    <feature.icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison - minimal table */}
        <section className="py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-16 text-5xl font-black tracking-tighter lg:text-7xl">
              SPEED
            </h2>

            <div className="border border-gray-800">
              {[
                { name: 'OiPer Desktop', time: 1.5, best: true },
                { name: 'Lemonfox API', time: 3.27 },
                { name: 'Python Faster-Whisper', time: 3.55 },
                { name: 'OpenAI Whisper 1 API', time: 6.46 },
              ].map((item, index) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between p-6 ${index !== 3 ? 'border-b border-gray-800' : ''} ${item.best ? 'bg-orange-500/10' : ''}`}
                >
                  <span
                    className={`font-semibold ${item.best ? 'text-orange-500' : 'text-gray-400'}`}
                  >
                    {item.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-32 bg-gray-800">
                      <div
                        className={`h-full ${item.best ? 'bg-orange-500' : 'bg-gray-700'}`}
                        style={{ width: `${(item.time / 7) * 100}%` }}
                      />
                    </div>
                    <span
                      className={`text-xl font-bold ${item.best ? 'text-orange-500' : 'text-gray-600'}`}
                    >
                      {item.time}s
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg bg-orange-500 p-16 text-center">
              <h2 className="mb-6 text-5xl font-black tracking-tighter text-black lg:text-7xl">
                GET IT NOW
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-black/70">
                Free. Fast. Private. No strings attached.
              </p>
              <Button
                size="lg"
                className="bg-black px-10 py-6 text-lg font-semibold text-white hover:bg-gray-900"
              >
                <Download className="mr-2 h-5 w-5" />
                Download OiPer Desktop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-orange-500">
              <Mic className="h-3 w-3 text-black" />
            </div>
            <span className="font-bold tracking-wider">OiPER</span>
          </div>
          <p className="text-sm text-gray-600">Voice-to-text at native speed</p>
        </div>
      </footer>
    </div>
  )
}
