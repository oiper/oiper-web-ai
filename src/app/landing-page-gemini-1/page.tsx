export default function LandingPage1() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-cyan-500 selection:text-black">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold tracking-tighter text-transparent">
            OiPer Desktop
          </div>
          <nav className="space-x-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a
              href="#performance"
              className="transition-colors hover:text-white"
            >
              Performance
            </a>
            <button className="rounded-full bg-cyan-500 px-4 py-2 font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              Download Free
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span>Privacy-first voice-to-text</span>
          </div>
          <h1 className="text-6xl leading-tight font-black tracking-tighter md:text-8xl">
            Speak. Release. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Injected.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-400">
            Hold a global hotkey to record, release to transcribe. The result is
            instantly injected into your active application. Designed for speed,
            efficiency, and absolute user control.
          </p>
          <div className="flex items-center justify-center space-x-6 pt-4">
            <button className="flex items-center space-x-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform hover:scale-105">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <span>Download for Windows</span>
            </button>
            <a
              href="#features"
              className="flex items-center space-x-1 font-medium text-zinc-400 hover:text-white"
            >
              <span>View Features</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mt-32 grid gap-8 md:grid-cols-3" id="features">
          {[
            {
              title: 'User Experience',
              desc: 'Fast, seamless, and intuitive workflow. Global hotkey activation lets you transcribe from anywhere.',
              icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            },
            {
              title: 'Native Performance',
              desc: 'Written in native code for maximum speed and efficiency. GPU acceleration where available.',
              icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
            },
            {
              title: 'Absolute Privacy',
              desc: 'Transcription runs locally. No data leaves your machine unless you explicitly choose to use optional online services.',
              icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-800/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={feature.icon}
                  ></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="leading-relaxed text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Benchmarks Section */}
        <div className="mt-32 border-t border-zinc-800 pt-32" id="performance">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Unmatched Speed</h2>
            <p className="text-xl text-zinc-400">
              Benchmark: 30 seconds of English audio
            </p>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="px-6 py-5 font-semibold text-zinc-300">
                    Solution
                  </th>
                  <th className="px-6 py-5 font-semibold text-zinc-300">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                <tr className="relative bg-cyan-500/10">
                  <td className="flex items-center space-x-2 px-6 py-5 font-bold text-cyan-400">
                    <span>OiPer Desktop</span>
                    <span className="text-yellow-400">⭐</span>
                  </td>
                  <td className="px-6 py-5 font-bold text-cyan-400">1.5s</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 text-zinc-300">Lemonfox API</td>
                  <td className="px-6 py-5 text-zinc-400">3.27s</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 text-zinc-300">
                    Python Faster-Whisper
                  </td>
                  <td className="px-6 py-5 text-zinc-400">3.55s</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 text-zinc-300">
                    OpenAI Whisper 1 API
                  </td>
                  <td className="px-6 py-5 text-zinc-400">6.46s</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-500">
            OiPer achieves the fastest transcription while maintaining high
            quality and keeping data entirely on your device.
          </p>
        </div>

        {/* Settings & Config */}
        <div className="mt-32 grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Flexibility & Control</h2>
            <ul className="space-y-6">
              {[
                {
                  title: 'Model Management',
                  desc: 'Easily download and manage different speech model sizes.',
                },
                {
                  title: 'Hardware Choice',
                  desc: 'Auto detect, CPU-only mode, or GPU acceleration.',
                },
                {
                  title: 'Bring Your Own API',
                  desc: 'Custom base URLs and API keys for optional online processing.',
                },
                {
                  title: 'LLM Processing',
                  desc: 'Use models like Gemini 2.5 Flash Lite for specialized terminology.',
                },
              ].map((item, i) => (
                <li key={i} className="flex space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="font-semibold">Preferences</span>
                <span className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
                  Settings
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">
                    Transcription Mode
                  </span>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                    Local (Fastest)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">
                    Hardware Acceleration
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                    GPU Detected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">
                    LLM Optimization
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                    Disabled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-800 bg-black py-12 text-center text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} OiPer Desktop. Privacy-first by
          design.
        </p>
      </footer>
    </div>
  )
}
