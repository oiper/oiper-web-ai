export default function LandingPage4() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans md:flex-row">
      {/* Left Panel (Content) */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-center bg-white px-8 py-20 shadow-[20px_0_40px_-10px_rgba(0,0,0,0.05)] md:w-1/2 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <div className="mb-16 flex items-center space-x-2 text-xl font-bold tracking-tight text-indigo-600">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <span>OiPer</span>
          </div>

          <div className="space-y-6">
            <div className="inline-block rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
              Available for Windows & macOS
            </div>

            <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-slate-900 lg:text-7xl">
              Instant text,
              <br />
              <span className="text-indigo-600">absolute privacy.</span>
            </h1>

            <p className="text-lg leading-relaxed font-medium text-slate-500 lg:text-xl">
              A blazing-fast native desktop application that converts your voice
              into text and instantly injects it wherever you type. All entirely
              on your device by default.
            </p>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <button className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-95">
                Download Free
              </button>
              <button className="rounded-xl bg-slate-100 px-8 py-4 text-lg font-bold text-slate-700 transition hover:bg-slate-200 active:scale-95">
                View Documentation
              </button>
            </div>
          </div>

          <div className="mt-20 space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <svg
                  className="h-6 w-6 text-indigo-600"
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
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  Global Hotkey Workflow
                </h3>
                <p className="leading-relaxed font-medium text-slate-500">
                  Simply hold a global hotkey to record and release to
                  transcribe. The text is seamlessly injected into your active
                  application window, keeping you in the flow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <svg
                  className="h-6 w-6 text-indigo-600"
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
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  100% On-Device by Default
                </h3>
                <p className="leading-relaxed font-medium text-slate-500">
                  Zero data sent to the cloud. Audio and activity logs never
                  leave your machine unless you explicitly configure optional
                  online services via your own API keys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (Visuals/Stats) */}
      <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-slate-900 px-8 py-20 text-white md:w-1/2 md:px-16 lg:px-24">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(slate-100 1px, transparent 1px), linear-gradient(90deg, slate-100 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="relative z-10 max-w-xl space-y-20">
          <div>
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
              <svg
                className="h-8 w-8 text-indigo-400"
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
              Benchmark Leaders
            </h2>
            <div className="space-y-6 rounded-3xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-xl">
              <p className="mb-6 font-medium text-slate-400">
                Processing 30s of English Audio (Equal Hardware)
              </p>

              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm font-bold text-white">
                    <span className="flex items-center gap-2">
                      OiPer Desktop (Native){' '}
                      <span className="text-yellow-400">★</span>
                    </span>
                    <span className="text-indigo-400">1.5s</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                    <div className="relative h-full w-[20%] overflow-hidden rounded-full bg-indigo-500">
                      <div className="absolute inset-0 animate-pulse bg-white/20"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-slate-400">
                    <span>Lemonfox API</span>
                    <span>3.27s</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                    <div className="h-full w-[45%] rounded-full bg-slate-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-slate-400">
                    <span>Python Faster-Whisper</span>
                    <span>3.55s</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                    <div className="h-full w-[50%] rounded-full bg-slate-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm font-semibold text-slate-400">
                    <span>OpenAI Whisper API</span>
                    <span>6.46s</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                    <div className="h-full w-[95%] rounded-full bg-slate-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
              <svg
                className="h-8 w-8 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              Ultimate Flexibility
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 transition hover:bg-slate-800/50">
                <div className="mb-2 font-bold text-white">
                  Hardware Acceleration
                </div>
                <div className="text-sm leading-relaxed text-slate-400">
                  Auto-detect backend, force CPU mode, or leverage native GPU
                  acceleration.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 transition hover:bg-slate-800/50">
                <div className="mb-2 font-bold text-white">
                  Bring Your Own LLM
                </div>
                <div className="text-sm leading-relaxed text-slate-400">
                  Connect to Gemini 2.5 Flash Lite or custom endpoints for
                  online text optimization.
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 transition hover:bg-slate-800/50 sm:col-span-2">
                <div>
                  <div className="mb-1 font-bold text-white">
                    Model Management
                  </div>
                  <div className="text-sm text-slate-400">
                    Download, select, and manage local models inside the app.
                  </div>
                </div>
                <button className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-400">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
