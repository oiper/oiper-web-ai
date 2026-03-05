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
  Star,
  Zap,
} from 'lucide-react'

export default function LandingPageQwen3() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 text-white">
      {/* Animated grid background */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/50">
            <Mic className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">OiPer Desktop</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-gray-400 hover:bg-white/10 hover:text-white"
          >
            Features
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:bg-white/10 hover:text-white"
          >
            Benchmarks
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-indigo-700">
            Download
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 px-8">
        <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">
              The fastest privacy-first voice-to-text
            </span>
          </div>

          <h1 className="mb-8 text-7xl font-black tracking-tight md:text-9xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              SPEAK.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              TRANSCRIBE.
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              DONE.
            </span>
          </h1>

          <p className="mb-12 max-w-3xl text-2xl text-gray-400">
            Hold hotkey. Release. Text appears.
            <span className="font-semibold text-white"> 1.5 seconds.</span>
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-6 text-lg shadow-xl shadow-purple-500/40 hover:from-purple-700 hover:to-indigo-700"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 px-10 py-6 text-lg text-purple-300 hover:bg-purple-500/20"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Feature pillars */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: 'Lightning Fast',
                  stat: '1.5s',
                  description:
                    'Native code + GPU acceleration = unmatched speed',
                  gradient: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: Shield,
                  title: 'Privacy First',
                  stat: '100%',
                  description:
                    'All processing local. Zero data leaves your machine',
                  gradient: 'from-emerald-500 to-cyan-500',
                },
                {
                  icon: Cpu,
                  title: 'Smart Power',
                  stat: 'Auto',
                  description:
                    'CPU, GPU, or hybrid. Optimized for your hardware',
                  gradient: 'from-purple-500 to-pink-500',
                },
              ].map((pillar) => (
                <div key={pillar.title} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} rounded-3xl opacity-20 blur-xl transition-opacity group-hover:opacity-40`}
                  />
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <div
                      className={`h-16 w-16 bg-gradient-to-r ${pillar.gradient} mb-6 flex items-center justify-center rounded-2xl shadow-lg`}
                    >
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-black text-transparent">
                      {pillar.stat}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">{pillar.title}</h3>
                    <p className="text-lg text-gray-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Three Steps
              </span>{' '}
              to Magic
            </h2>
            <p className="mb-20 text-center text-xl text-gray-400">
              Simplicity engineered to perfection
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Hold',
                  description: 'Press the global hotkey (configurable)',
                  icon: Lock,
                },
                {
                  step: '02',
                  title: 'Speak',
                  description: 'Say what you want to transcribe',
                  icon: Mic,
                },
                {
                  step: '03',
                  title: 'Release',
                  description: 'Text appears instantly in your app',
                  icon: Zap,
                },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  {index < 2 && (
                    <div className="absolute top-16 left-full z-10 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-purple-500/50 to-transparent md:block" />
                  )}
                  <div className="text-center">
                    <div className="mb-4 text-8xl font-black text-purple-500/20">
                      {item.step}
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-xl shadow-purple-500/30">
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="mt-8 mb-2 text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benchmarks */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Benchmarks
              </span>{' '}
              Don't Lie
            </h2>
            <p className="mb-16 text-center text-xl text-gray-400">
              30 second English audio transcription
            </p>

            <div className="space-y-6">
              {[
                { name: 'OiPer Desktop', time: 1.5, accent: 'purple' },
                { name: 'Lemonfox API', time: 3.27 },
                { name: 'Python Faster-Whisper', time: 3.55 },
                { name: 'OpenAI Whisper 1 API', time: 6.46 },
              ].map((item, index) => (
                <div key={item.name} className="group">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`text-lg font-medium ${item.accent ? 'text-white' : 'text-gray-400'}`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`text-2xl font-bold ${item.accent ? 'text-purple-400' : 'text-gray-500'}`}
                    >
                      {item.time}s
                    </span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        item.accent
                          ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500'
                          : 'bg-gray-700'
                      }`}
                      style={{ width: `${(item.time / 7) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features detail */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Globe,
                  title: 'Online Optional',
                  description:
                    'Cloud optimization with your API key. Toggle anytime.',
                },
                {
                  icon: Cpu,
                  title: 'Model Choice',
                  description:
                    'Download speech models. Various sizes available.',
                },
                {
                  icon: Lock,
                  title: 'LLM Enhancement',
                  description:
                    'Gemini, specialized models for technical accuracy.',
                },
                {
                  icon: Shield,
                  title: 'Full Control',
                  description:
                    'Custom base URLs, API keys, backend preferences.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-3xl" />
              <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-600 to-indigo-600 p-16">
                <h2 className="mb-6 text-5xl font-bold">
                  Ready to Experience the Speed?
                </h2>
                <p className="mb-10 text-xl text-purple-200">
                  Free. Private. 10x faster than the competition.
                </p>
                <Button
                  size="lg"
                  className="bg-white px-10 py-6 text-lg text-purple-600 shadow-xl hover:bg-gray-100"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download OiPer Desktop
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
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500">
              <Mic className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">OiPer Desktop</span>
          </div>
          <p className="text-sm text-gray-500">
            Privacy-first voice-to-text. Built for speed.
          </p>
        </div>
      </footer>
    </div>
  )
}
