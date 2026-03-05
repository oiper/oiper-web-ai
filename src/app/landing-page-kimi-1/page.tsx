import { ArrowRight, Cpu, Globe, Mic, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function LandingPageKimi1() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-[#fafafa]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[#1a1a1a]"
            href="/"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a1a] text-white">
              <Mic size={18} strokeWidth={2.5} />
            </div>
            OiPer
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
              href="#privacy"
            >
              Privacy
            </Link>
            <Link
              className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
              href="#performance"
            >
              Performance
            </Link>
            <Link
              className="flex items-center gap-1 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
              href="#download"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-sm text-[#666]">
                  Now available for macOS, Windows & Linux
                </span>
              </div>
              <h1 className="text-5xl leading-[1.1] font-light tracking-tight text-[#1a1a1a] lg:text-7xl">
                Voice to text,{' '}
                <span className="font-normal italic">reimagined</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-[#666]">
                OiPer is a privacy-first voice-to-text application designed for
                speed and efficiency. Hold a global hotkey, speak, release — and
                watch your words appear instantly.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="group flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-4 text-white transition-all hover:bg-[#333] hover:shadow-xl"
                  href="#download"
                >
                  <span className="font-medium">Download for free</span>
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
                <Link
                  className="rounded-full border border-[#d4d4d4] bg-white px-8 py-4 font-medium text-[#1a1a1a] transition-all hover:border-[#1a1a1a]"
                  href="#features"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-100 opacity-50 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-2xl">
                <div className="flex h-10 items-center gap-2 border-b border-[#e5e5e5] bg-[#fafafa] px-4">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="space-y-4 p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a] text-white">
                      <Mic size={24} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[#1a1a1a]">
                        Recording...
                      </p>
                      <div className="h-2 w-48 overflow-hidden rounded-full bg-[#e5e5e5]">
                        <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-4">
                    <p className="text-sm text-[#1a1a1a]">
                      &ldquo;OiPer makes voice transcription incredibly fast and
                      seamless. I can dictate entire documents without ever
                      leaving my workflow.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-4xl font-light tracking-tight text-[#1a1a1a]">
              Built for the way you work
            </h2>
            <p className="text-lg text-[#666]">
              Three core pillars that define every decision we make.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'User Experience',
                description:
                  'Fast, seamless, and intuitive workflow. No context switching, no friction.',
              },
              {
                icon: Cpu,
                title: 'Performance',
                description:
                  'Native code implementation for maximum speed and efficiency.',
              },
              {
                icon: Shield,
                title: 'Privacy',
                description:
                  'Runs entirely on your machine. Your data never leaves your device.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#e5e5e5] bg-white p-8 transition-all hover:border-[#1a1a1a] hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#e5e5e5] bg-[#fafafa] transition-colors group-hover:border-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-medium text-[#1a1a1a]">
                  {feature.title}
                </h3>
                <p className="text-[#666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recording Demo Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-[#1a1a1a] p-12 lg:p-20">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-4xl leading-tight font-light tracking-tight text-white lg:text-5xl">
                  Press, speak, release. That&apos;s it.
                </h2>
                <p className="text-lg leading-relaxed text-gray-400">
                  OiPer&apos;s global hotkey works anywhere on your system. Hold
                  it down to start recording, release to transcribe. The text
                  instantly appears in your active application.
                </p>
                <div className="space-y-4">
                  {[
                    'Global hotkey activation',
                    'Instant text injection',
                    'Optional text cleanup',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50">
                        <Mic className="text-white" size={28} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Hotkey</p>
                      <p className="text-2xl font-medium text-white">
                        Ctrl + Space
                      </p>
                      <p className="text-sm text-gray-400">Customizable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24" id="privacy">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl border border-[#e5e5e5] bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <Shield className="text-emerald-500" size={24} />
                  <span className="font-medium text-[#1a1a1a]">
                    Privacy Shield Active
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Local Processing', status: 'Enabled' },
                    { label: 'Audio Storage', status: 'On-device only' },
                    { label: 'Cloud Sync', status: 'Disabled' },
                    { label: 'Data Collection', status: 'None' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-[#fafafa] p-4"
                    >
                      <span className="text-sm text-[#666]">{item.label}</span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-4xl font-light tracking-tight text-[#1a1a1a] lg:text-5xl">
                Your voice, <span className="font-normal">your data</span>
              </h2>
              <p className="text-lg leading-relaxed text-[#666]">
                Privacy isn&apos;t an afterthought — it&apos;s the foundation.
                OiPer runs entirely on your machine by default. Your voice, your
                transcripts, your control.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a1a1a] text-white">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1a1a1a]">
                      Optional Online Services
                    </h4>
                    <p className="text-sm text-[#666]">
                      Online optimization available only if you choose to enable
                      it with your own API key.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24" id="performance">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-light tracking-tight text-[#1a1a1a]">
              Lightning fast performance
            </h2>
            <p className="text-lg text-[#666]">
              Benchmark results for 30 seconds of English audio
            </p>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">
            <div className="border-b border-[#e5e5e5] bg-[#fafafa] px-6 py-4">
              <div className="grid grid-cols-3 gap-4 text-sm font-medium text-[#666]">
                <span>Solution</span>
                <span>Time</span>
                <span>Speed</span>
              </div>
            </div>
            {[
              { name: 'OiPer Desktop', time: '1.5s', speed: '20x faster' },
              { name: 'Lemonfox API', time: '3.27s', speed: '9.2x faster' },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                speed: '8.5x faster',
              },
              {
                name: 'OpenAI Whisper 1 API',
                time: '6.46s',
                speed: '4.6x faster',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 border-b border-[#e5e5e5] px-6 py-5 transition-colors last:border-0 hover:bg-[#fafafa] ${i === 0 ? 'bg-emerald-50/50' : ''}`}
              >
                <span
                  className={`font-medium ${i === 0 ? 'text-emerald-700' : 'text-[#1a1a1a]'}`}
                >
                  {item.name}
                  {i === 0 && <span className="ml-2 text-xs">★ Fastest</span>}
                </span>
                <span className="font-mono text-[#666]">{item.time}</span>
                <span className="text-[#666]">{item.speed}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-light tracking-tight text-[#1a1a1a]">
              Complete control
            </h2>
            <p className="text-lg text-[#666]">
              Fine-tune every aspect of your transcription experience
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Speech Models',
                items: [
                  'Multiple sizes available',
                  'Easy download & manage',
                  'Custom model support',
                ],
              },
              {
                title: 'Backend Options',
                items: ['Auto detection', 'CPU-only mode', 'GPU acceleration'],
              },
              {
                title: 'Online Providers',
                items: [
                  'Custom base URLs',
                  'API key management',
                  'Flexible configuration',
                ],
              },
              {
                title: 'Advanced Features',
                items: [
                  'LLM transcription',
                  'Technical accuracy',
                  'Specialized models',
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#e5e5e5] bg-white p-6"
              >
                <h3 className="mb-4 font-medium text-[#1a1a1a]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[#666]"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[#1a1a1a]"></span>
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
          <div className="overflow-hidden rounded-3xl bg-[#1a1a1a] px-8 py-20 text-center lg:px-20">
            <h2 className="mb-6 text-4xl font-light tracking-tight text-white lg:text-5xl">
              Ready to transform your workflow?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
              Join thousands of professionals who have made voice their
              preferred input method. Download OiPer today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#1a1a1a] transition-transform hover:scale-105">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for macOS
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[#1a1a1a]"
              href="/"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a1a] text-white">
                <Mic size={18} strokeWidth={2.5} />
              </div>
              OiPer
            </Link>
            <p className="text-sm text-[#666]">
              © 2026 OiPer. Privacy-first voice transcription.
            </p>
            <div className="flex gap-6">
              <Link
                className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="text-sm text-[#666] transition-colors hover:text-[#1a1a1a]"
                href="#"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
