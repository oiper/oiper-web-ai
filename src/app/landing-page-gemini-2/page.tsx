export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans tracking-tight text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"
              />
            </svg>
            OiPer
          </div>
          <div className="hidden gap-8 text-sm font-medium text-slate-500 md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-slate-900"
            >
              Experience
            </a>
            <a
              href="#privacy"
              className="transition-colors hover:text-slate-900"
            >
              Privacy
            </a>
            <a
              href="#performance"
              className="transition-colors hover:text-slate-900"
            >
              Performance
            </a>
          </div>
          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800">
            Get Started
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Hero */}
        <div className="mx-auto max-w-3xl space-y-8 pt-16 pb-20 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-blue-100">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Now entirely local and private
          </div>
          <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-7xl">
            Your voice. <br className="hidden sm:block" />
            <span className="text-slate-400">Instantly typed.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
            Simply hold a global hotkey to record, release to transcribe, and
            the text is instantly injected into your active application. The
            fastest way to write, without sacrificing privacy.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <button className="h-14 w-full rounded-full bg-blue-600 px-8 text-lg font-medium text-white shadow-lg shadow-blue-600/20 transition-transform hover:bg-blue-700 active:scale-95 sm:w-auto">
              Download OiPer
            </button>
            <p className="text-sm font-medium text-slate-400 sm:ml-4">
              Native app • macOS & Windows
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          id="features"
        >
          {[
            {
              title: 'Instant Injection',
              desc: 'Press a hotkey to talk, release to transcribe. The text flows directly into wherever your cursor is.',
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: '100% Private',
              desc: 'Transcription runs locally on your machine. Activity logs and audio stay on-device by default.',
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
            },
            {
              title: 'Native Speed',
              desc: 'Built with highly optimized native code. Leverages GPU acceleration to transcribe almost instantly.',
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              ),
            },
          ].map((feat, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-blue-600">
                {feat.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feat.title}</h3>
              <p className="leading-relaxed text-slate-500">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Benchmarks */}
        <div className="mt-32 border-t border-slate-100 pt-20" id="performance">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-16 md:flex-row">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                Blazing Fast Transcription
              </h2>
              <p className="text-lg leading-relaxed text-slate-500">
                We benchmarked OiPer against leading cloud and local
                alternatives using a 30-second English audio sample. With native
                code and GPU optimization, OiPer leaves the competition behind.
              </p>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Results measured on equal hardware configurations
              </div>
            </div>

            <div className="w-full flex-1 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="space-y-6">
                {[
                  {
                    name: 'OiPer Desktop',
                    time: 1.5,
                    active: true,
                    label: '1.5s',
                  },
                  { name: 'Lemonfox API', time: 3.27, label: '3.27s' },
                  { name: 'Python Faster-Whisper', time: 3.55, label: '3.55s' },
                  { name: 'OpenAI Whisper 1 API', time: 6.46, label: '6.46s' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span
                        className={
                          item.active
                            ? 'font-bold text-blue-600'
                            : 'text-slate-600'
                        }
                      >
                        {item.name} {item.active && '⭐'}
                      </span>
                      <span
                        className={
                          item.active
                            ? 'font-bold text-blue-600'
                            : 'text-slate-500'
                        }
                      >
                        {item.label}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-50">
                      <div
                        className={`h-full rounded-full ${item.active ? 'bg-blue-600' : 'bg-slate-200'}`}
                        style={{ width: `${(item.time / 7) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deep Control */}
        <div className="mt-32 mb-20 border-t border-slate-100 pt-20">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">You're in control</h2>
            <p className="text-xl text-slate-500">
              Configure everything from models to online services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
              <h3 className="mb-4 text-xl font-bold">Local First</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span> Backend Preferences
                  (Auto/CPU/GPU)
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span> Speech Model
                  Management
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span> All activity logs
                  stay on-device
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Optional Online Power</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span> Custom Base URL Setup
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span> Use your own API Keys
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span> LLM Text Optimization
                  (Gemini 2.5 Flash, etc.)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50 py-12 text-center text-sm text-slate-500">
        <p>OiPer Desktop. Built for privacy, speed, and efficiency.</p>
      </footer>
    </div>
  )
}
