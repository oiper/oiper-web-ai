'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Cpu,
  Globe,
  Lock,
  Mic,
  Play,
  Shield,
  Zap,
} from 'lucide-react'

export default function LandingPageQwen1() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-cyan-600/20 blur-3xl delay-1000" />
        <div className="bg-gradient-radial absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full from-indigo-500/10 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
            <Mic className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            OiPer Desktop
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Features
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Privacy
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
            Download
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 px-8">
        <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-400">
              1.5s transcription — 10x faster than alternatives
            </span>
          </div>

          <h1 className="mb-6 text-6xl leading-tight font-bold md:text-8xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Voice to Text
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              At Light Speed
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl text-gray-400">
            Hold a hotkey. Speak. Release. Your words appear instantly —
            anywhere. Privacy-first, blazing fast, entirely on your machine.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-6 text-lg hover:from-violet-700 hover:to-cyan-700"
            >
              Download Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Quick demo visualization */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
                <span>Hold Space</span>
              </div>
              <ArrowRight className="h-4 w-4" />
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-cyan-400" />
                <span>Speak</span>
              </div>
              <ArrowRight className="h-4 w-4" />
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span>Text appears</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mx-auto max-w-7xl py-32">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Built for{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Speed & Privacy
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
            Every feature designed around your workflow, security, and
            performance
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">
                <Mic className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Instant Transcription
              </h3>
              <p className="text-gray-400">
                Global hotkey activation with seamless text injection into any
                application
              </p>
            </Card>

            <Card className="border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Privacy First</h3>
              <p className="text-gray-400">
                All processing happens locally. Your audio and logs never leave
                your device
              </p>
            </Card>

            <Card className="border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20">
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Native Performance</h3>
              <p className="text-gray-400">
                Written in native code for maximum speed with GPU acceleration
                support
              </p>
            </Card>

            <Card className="border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/20">
                <Cpu className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Flexible Backend</h3>
              <p className="text-gray-400">
                Auto, CPU-only, or GPU modes. Choose what works best for your
                hardware
              </p>
            </Card>

            <Card className="border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-600/20">
                <Globe className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Optional Online</h3>
              <p className="text-gray-400">
                Enable cloud optimization when needed. Your choice, your API key
              </p>
            </Card>

            <Card className="border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20">
                <Lock className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">LLM Enhancement</h3>
              <p className="text-gray-400">
                Ultra-accurate transcription through specialized models for
                technical content
              </p>
            </Card>
          </div>
        </section>

        {/* Performance Benchmarks */}
        <section className="mx-auto max-w-5xl py-32">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Unmatched{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          <p className="mb-16 text-center text-gray-400">
            30 second English audio transcription benchmarks
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            {[
              { name: 'OiPer Desktop', time: 1.5, highlight: true },
              { name: 'Lemonfox API', time: 3.27 },
              { name: 'Python Faster-Whisper', time: 3.55 },
              { name: 'OpenAI Whisper 1 API', time: 6.46 },
            ].map((item, index) => (
              <div key={item.name} className="mb-6 last:mb-0">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={
                      item.highlight
                        ? 'font-semibold text-white'
                        : 'text-gray-400'
                    }
                  >
                    {item.name}
                  </span>
                  <span
                    className={
                      item.highlight
                        ? 'font-bold text-cyan-400'
                        : 'text-gray-400'
                    }
                  >
                    {item.time}s
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.highlight
                        ? 'bg-gradient-to-r from-violet-500 to-cyan-500'
                        : 'bg-gray-600'
                    }`}
                    style={{ width: `${(item.time / 7) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-5xl font-bold">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Workflow?
              </span>
            </h2>
            <p className="mb-10 text-xl text-gray-400">
              Join thousands of users who trust OiPer for fast, private
              voice-to-text
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-600 px-10 py-6 text-lg hover:from-violet-700 hover:to-cyan-700"
            >
              Download OiPer Desktop — Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
              <Mic className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">OiPer Desktop</span>
          </div>
          <p className="text-sm text-gray-500">
            Privacy-first voice-to-text for everyone
          </p>
        </div>
      </footer>
    </div>
  )
}
