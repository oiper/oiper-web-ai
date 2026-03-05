'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  Cpu,
  Download,
  Mic,
  Settings,
  Shield,
  Zap,
} from 'lucide-react'

export default function LandingPageQwen2() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 shadow-lg shadow-emerald-500/30">
            <Mic className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">OiPer</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-gray-600">
            Documentation
          </Button>
          <Button className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <main className="px-8">
        <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                <Zap className="h-4 w-4" />
                Fastest voice-to-text on your machine
              </div>

              <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 lg:text-7xl">
                Your voice,
                <br />
                <span className="text-emerald-500">transcribed</span>
                <br />
                instantly.
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Hold a hotkey, speak, release — your words appear anywhere. No
                cloud required. No waiting. Just pure speed.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-emerald-500 px-8 text-lg text-white shadow-xl shadow-emerald-500/40 hover:bg-emerald-600"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 px-8 text-lg"
                >
                  View on GitHub
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-500">
                    1.5s
                  </div>
                  <div className="text-sm text-gray-500">Transcription</div>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-emerald-500">
                    100%
                  </div>
                  <div className="text-sm text-gray-500">Local Processing</div>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-emerald-500">0</div>
                  <div className="text-sm text-gray-500">Data Sent</div>
                </div>
              </div>
            </div>

            {/* Right side - App preview */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl" />
              <div className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500">
                      <Mic className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        Hold Space to Record
                      </div>
                      <div className="text-sm text-gray-500">
                        Global hotkey active
                      </div>
                    </div>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <div className="mb-2 text-sm font-medium text-emerald-700">
                      Transcribed Text
                    </div>
                    <div className="text-gray-700">
                      "The quick brown fox jumps over the lazy dog. This is a
                      sample transcription that appears instantly."
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Processed in 1.5s</span>
                    <span className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-emerald-500" />
                      Local processing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Clean cards */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">Everything you need</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Powerful features wrapped in a simple interface
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: 'Privacy by Design',
                  description:
                    'Your audio never leaves your device. Activity logs stay local. Full control over your data.',
                  color: 'emerald',
                },
                {
                  icon: Zap,
                  title: 'Blazing Fast',
                  description:
                    'Native code implementation with GPU acceleration. 10x faster than cloud alternatives.',
                  color: 'amber',
                },
                {
                  icon: Cpu,
                  title: 'Smart Backend',
                  description:
                    'Auto-detects your hardware. Choose CPU or GPU mode. Configure LLMs for accuracy.',
                  color: 'violet',
                },
                {
                  icon: Mic,
                  title: 'Universal Hotkey',
                  description:
                    'Works in any application. Press, speak, release. Text appears like magic.',
                  color: 'cyan',
                },
                {
                  icon: Settings,
                  title: 'Flexible Settings',
                  description:
                    'Model management, backend preferences, online providers. Configure everything.',
                  color: 'pink',
                },
                {
                  icon: Check,
                  title: 'Optional Online',
                  description:
                    'Enable cloud optimization when needed. Your API key, your choice, anytime toggle.',
                  color: 'blue',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-transparent bg-gray-50 p-8 transition-all duration-300 hover:border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50"
                >
                  <div
                    className={`h-12 w-12 rounded-xl bg-${feature.color}-500/10 mb-6 flex items-center justify-center transition-transform group-hover:scale-110`}
                  >
                    <feature.icon
                      className={`h-6 w-6 text-${feature.color}-500`}
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Speed that speaks for itself
              </h2>
              <p className="text-gray-600">
                30 second English audio benchmarks
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50">
              {[
                { name: 'OiPer Desktop', time: 1.5, best: true },
                { name: 'Lemonfox API', time: 3.27 },
                { name: 'Python Faster-Whisper', time: 3.55 },
                { name: 'OpenAI Whisper 1 API', time: 6.46 },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between p-6 ${i !== 3 ? 'border-b border-gray-100' : ''} ${item.best ? 'bg-emerald-50/50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    {item.best && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <span
                      className={`font-medium ${item.best ? 'text-emerald-700' : 'text-gray-900'}`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${item.best ? 'bg-emerald-500' : 'bg-gray-300'}`}
                        style={{ width: `${(item.time / 7) * 100}%` }}
                      />
                    </div>
                    <span
                      className={`font-bold ${item.best ? 'text-emerald-600' : 'text-gray-600'}`}
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
        <section className="bg-emerald-500 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-5xl font-bold text-white">
              Start transcribing at light speed
            </h2>
            <p className="mb-10 text-xl text-emerald-100">
              Free. Private. Lightning fast. What's not to love?
            </p>
            <Button
              size="lg"
              className="bg-white px-10 py-6 text-lg text-emerald-600 shadow-xl hover:bg-gray-100"
            >
              <Download className="mr-2 h-5 w-5" />
              Download OiPer Desktop
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
              <Mic className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">OiPer Desktop</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-900">
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
