export default function LandingPage3() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F0A1E] font-sans text-white">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-indigo-600/30 blur-[120px]"></div>
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[50%] w-[50%] rounded-full bg-fuchsia-600/30 blur-[120px]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0F0A1E]/40 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-black text-transparent">
            OIPER
          </div>
          <div className="hidden items-center gap-8 font-medium text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#privacy" className="transition hover:text-white">
              Security
            </a>
            <a href="#performance" className="transition hover:text-white">
              Benchmarks
            </a>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/10 px-6 py-2.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
            Get the App
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-10 text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="relative mr-3 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500"></span>
            </span>
            <span className="text-sm font-medium text-white/80">
              Privacy-first Voice to Text
            </span>
          </div>

          <h1 className="text-6xl leading-[1.1] font-black tracking-tight sm:text-8xl">
            Speak. Release. <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Instant Text.
            </span>
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed font-medium text-white/60 sm:text-2xl">
            A native desktop application that converts your voice to text with
            zero latency. Hold a global hotkey to record, release to transcribe
            straight into your active window.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <button className="h-14 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-8 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] transition-all hover:from-indigo-400 hover:to-fuchsia-400 active:scale-95 sm:w-auto">
              Download for Free
            </button>
            <button className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-8 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto">
              View Benchmarks
            </button>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="mt-32 grid gap-6 md:grid-cols-3" id="features">
          <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl transition-colors hover:border-indigo-500/50 md:col-span-2">
            <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-[#151025] p-8">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-[80px]"></div>
              <h3 className="relative z-10 mb-4 text-3xl font-bold">
                Lightning Fast
              </h3>
              <p className="relative z-10 max-w-lg text-lg leading-relaxed text-white/60">
                Written in native code for maximum speed and efficiency.
                Utilizing GPU acceleration where available, OiPer transcribes
                speech almost instantaneously.
              </p>
            </div>
          </div>

          <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl transition-colors hover:border-fuchsia-500/50">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.8rem] bg-[#151025] p-8">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[80px]"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    className="h-6 w-6 text-fuchsia-400"
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
                </div>
                <h3 className="mb-2 text-2xl font-bold">100% Private</h3>
                <p className="text-white/60">
                  Audio and logs stay on your device.
                </p>
              </div>
            </div>
          </div>

          <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl transition-colors hover:border-purple-500/50">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.8rem] bg-[#151025] p-8">
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Deep Control</h3>
                <p className="text-white/60">
                  Configurable LLMs & local/online optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl transition-colors hover:border-indigo-500/50 md:col-span-2">
            <div className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-[1.8rem] bg-[#151025] p-8 sm:flex-row">
              <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 blur-[80px]"></div>
              <div className="relative z-10 mb-8 max-w-md sm:mb-0">
                <h3 className="mb-4 text-3xl font-bold">Unmatched Speed</h3>
                <p className="text-lg leading-relaxed text-white/60">
                  We benchmarked OiPer against leading cloud and local
                  alternatives. Our native desktop architecture processes a
                  30-second audio clip in just 1.5 seconds.
                </p>
              </div>
              <div className="relative z-10 w-full rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:w-auto">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-bold text-indigo-400">
                    OiPer Desktop
                  </span>
                  <span className="font-bold text-white">1.5s</span>
                </div>
                <div className="mb-4 flex items-center justify-between text-white/50">
                  <span>Lemonfox API</span>
                  <span>3.27s</span>
                </div>
                <div className="mb-4 flex items-center justify-between text-white/50">
                  <span>Python Faster-Whisper</span>
                  <span>3.55s</span>
                </div>
                <div className="flex items-center justify-between text-white/50">
                  <span>OpenAI Whisper API</span>
                  <span>6.46s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configurations List */}
        <div className="mt-32 mb-16 border-t border-white/10 pt-24">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Power User Configuration
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/60">
              OiPer adapts to your workflow. Whether you want a fully offline
              experience or highly accurate LLM-based online text optimization,
              the choice is yours.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/20">
                  <span className="font-bold text-indigo-400">1</span>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold">
                    Speech & Model Management
                  </h4>
                  <p className="text-white/60">
                    Select from various model sizes depending on your hardware
                    capability. Auto-detect, CPU-only, or full GPU acceleration.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-500/30 bg-fuchsia-500/20">
                  <span className="font-bold text-fuchsia-400">2</span>
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold">Bring Your Own Key</h4>
                  <p className="text-white/60">
                    Configure custom base URLs and API keys for online providers
                    if you wish to use cloud models. Enabled only when you
                    choose.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="mb-6 flex items-center gap-2 text-xl font-bold">
                <svg
                  className="h-5 w-5 text-indigo-400"
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
                Advanced LLM Support
              </h4>
              <p className="mb-6 leading-relaxed text-white/60">
                Connect your preferred LLM (like Gemini 2.5 Flash Lite) to
                process transcribed text before injection. Perfect for
                formatting code, specialized terminology, or writing specific
                structures.
              </p>
              <div className="rounded-xl border border-white/5 bg-black/50 p-4 font-mono text-sm text-fuchsia-400">
                {'>'} model: "gemini-2.5-flash-lite"
                <br />
                {'>'} mode: "online-cleanup"
                <br />
                {'>'} status: "ready"
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/20 py-8 text-center font-medium text-white/40 backdrop-blur-lg">
        <p>Built with privacy and performance in mind.</p>
      </footer>
    </div>
  )
}
