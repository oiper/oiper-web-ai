'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Cpu,
  Download,
  Globe,
  Lock,
  Mic,
  Shield,
  Sparkles,
  Waves,
  Zap,
} from 'lucide-react'

export default function LandingPageQwen5() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white">
      {/* Organic background shapes */}
      <div className="pointer-events-none fixed inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse
            cx="20%"
            cy="30%"
            rx="400"
            ry="300"
            fill="url(#grad1)"
            className="animate-pulse"
          />
          <ellipse
            cx="80%"
            cy="70%"
            rx="500"
            ry="400"
            fill="url(#grad2)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-teal-500/30">
              <Waves className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-teal-400" />
          </div>
          <div>
            <span className="block text-xl leading-tight font-bold">OiPer</span>
            <span className="-mt-1 block text-xs text-teal-400">Desktop</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-gray-400 hover:bg-teal-500/10 hover:text-teal-300"
          >
            How it Works
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:bg-teal-500/10 hover:text-teal-300"
          >
            Privacy
          </Button>
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/30 hover:from-teal-600 hover:to-cyan-600">
            Download
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 px-8">
        <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-sm text-teal-200">
              Privacy-first voice transcription reimagined
            </span>
          </div>

          <h1 className="mb-8 text-6xl font-bold md:text-8xl lg:text-9xl">
            <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Your Voice,
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Amplified
            </span>
          </h1>

          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl">
            Hold a hotkey. Speak naturally. Release.
            <span className="font-semibold text-teal-300">
              {' '}
              1.5 seconds later
            </span>
            , your words appear anywhere.
          </p>

          <div className="mb-16 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 px-10 py-6 text-lg shadow-xl shadow-teal-500/40 hover:from-teal-600 hover:to-cyan-600"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-500/50 px-10 py-6 text-lg text-teal-300 hover:bg-teal-500/20"
            >
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Wave visualization */}
          <div className="flex h-16 items-end gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 animate-pulse rounded-full bg-gradient-to-t from-teal-500 to-cyan-400"
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              />
            ))}
          </div>
        </section>

        {/* Flowing features */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-5xl font-bold">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Crafted
                </span>{' '}
                for Excellence
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-400">
                Every feature designed around speed, privacy, and your workflow
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Mic,
                  title: 'Seamless Recording',
                  description:
                    "Global hotkey activation with instant text injection into any application you're using.",
                  gradient: 'from-teal-500 to-emerald-500',
                },
                {
                  icon: Shield,
                  title: 'Privacy by Default',
                  description:
                    'Transcription runs locally. Activity logs and audio stay on-device. Full control always.',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: Zap,
                  title: 'Native Performance',
                  description:
                    'Written in native code for maximum speed. GPU acceleration where available.',
                  gradient: 'from-amber-500 to-orange-500',
                },
                {
                  icon: Cpu,
                  title: 'Flexible Backend',
                  description:
                    'Auto detection, CPU-only, or GPU modes. Configure for your exact hardware setup.',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Globe,
                  title: 'Optional Online',
                  description:
                    'Enable cloud optimization when needed. Your API key. Toggle anytime.',
                  gradient: 'from-rose-500 to-red-500',
                },
                {
                  icon: Lock,
                  title: 'LLM Enhancement',
                  description:
                    'Ultra-accurate transcription through specialized models for technical content.',
                  gradient: 'from-indigo-500 to-violet-500',
                },
              ].map((feature) => (
                <div key={feature.title} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <div
                      className={`h-14 w-14 bg-gradient-to-r ${feature.gradient} mb-6 flex items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                    <p className="leading-relaxed text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance section */}
        <section className="py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-bold">
                Performance That{' '}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Speaks
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                30 second English audio transcription benchmarks
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                {[
                  { name: 'OiPer Desktop', time: 1.5, highlight: true },
                  { name: 'Lemonfox API', time: 3.27 },
                  { name: 'Python Faster-Whisper', time: 3.55 },
                  { name: 'OpenAI Whisper 1 API', time: 6.46 },
                ].map((item) => (
                  <div key={item.name} className="mb-8 last:mb-0">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {item.highlight && (
                          <div className="h-2 w-2 rounded-full bg-teal-400" />
                        )}
                        <span
                          className={`text-lg ${item.highlight ? 'font-semibold text-white' : 'text-gray-400'}`}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span
                        className={`text-2xl font-bold ${item.highlight ? 'text-teal-400' : 'text-gray-500'}`}
                      >
                        {item.time}s
                      </span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          item.highlight
                            ? 'bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400'
                            : 'bg-gray-700'
                        }`}
                        style={{ width: `${(item.time / 7) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Settings preview */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-5xl font-bold">
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Total Control
                  </span>{' '}
                  Over Everything
                </h2>
                <p className="mb-8 text-xl leading-relaxed text-gray-400">
                  Fine-tune every aspect of your transcription experience. From
                  model selection to backend preferences, you're in command.
                </p>
                <ul className="space-y-4">
                  {[
                    'Speech model selection with easy downloads',
                    'Backend preferences: Auto, CPU, or GPU',
                    'Custom base URL and API key setup',
                    'LLM integration for enhanced accuracy',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20">
                        <svg
                          className="h-4 w-4 text-teal-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <Cpu className="h-5 w-5 text-teal-400" />
                        <span>Backend Mode</span>
                      </div>
                      <span className="font-medium text-teal-400">
                        Auto Detect
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-teal-400" />
                        <span>Processing</span>
                      </div>
                      <span className="font-medium text-teal-400">
                        Local Only
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <Mic className="h-5 w-5 text-teal-400" />
                        <span>Hotkey</span>
                      </div>
                      <span className="font-medium text-teal-400">
                        Space (Hold)
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-teal-400" />
                        <span>Text Cleanup</span>
                      </div>
                      <span className="font-medium text-teal-400">Local</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-teal-500/30 bg-gradient-to-r from-teal-600 to-cyan-600 p-16">
                <h2 className="mb-6 text-5xl font-bold text-white">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-xl text-teal-100">
                  Join thousands who trust OiPer for fast, private, beautiful
                  voice-to-text.
                </p>
                <Button
                  size="lg"
                  className="bg-white px-12 py-6 text-lg text-teal-600 shadow-xl hover:bg-gray-100"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download OiPer Desktop — Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500">
              <Waves className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="block leading-tight font-semibold">OiPer</span>
              <span className="text-xs text-gray-500">Desktop</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Privacy-first voice-to-text. Crafted for speed.
          </p>
        </div>
      </footer>
    </div>
  )
}
