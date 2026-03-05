export default function LandingPage5() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] font-mono text-black selection:bg-black selection:text-[#FFDE00]">
      {/* Navbar - Brutalist */}
      <nav className="fixed top-0 z-50 w-full border-b-4 border-black bg-[#FFFDF5] py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3 text-3xl font-black tracking-tighter uppercase">
            <div className="h-8 w-8 shrink-0 rounded-sm border-2 border-black bg-[#FFDE00]"></div>
            OIPER_
          </div>
          <div className="hidden gap-8 text-sm font-bold tracking-widest uppercase md:flex">
            <a
              href="#fast"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-[#FFDE00]"
            >
              Speed
            </a>
            <a
              href="#private"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-[#FFDE00]"
            >
              Privacy
            </a>
            <a
              href="#flex"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-[#FFDE00]"
            >
              Control
            </a>
          </div>
          <button className="border-2 border-black bg-[#FFDE00] px-6 py-2 text-sm font-black tracking-wide uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Download
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="flex flex-col items-center py-20 text-center">
          <div className="mb-8 -rotate-2 transform border-2 border-black bg-[#FFDE00] px-6 py-2 text-sm font-bold tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Voice-To-Text // Native Desktop App
          </div>

          <h1 className="mb-10 text-7xl leading-[0.9] font-black tracking-tighter text-black uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)] sm:text-[100px]">
            Record.
            <br />
            Release.
            <br />
            <span className="mt-4 inline-block rotate-1 transform border-4 border-black bg-[#FFDE00] px-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Injected.
            </span>
          </h1>

          <p className="mb-12 max-w-3xl border-l-4 border-black bg-white p-6 pl-6 text-left text-xl leading-relaxed font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-2xl">
            A privacy-first desktop application designed for speed, efficiency,
            and absolute user control. Hold a global hotkey to record, release
            to transcribe instantly into your active window.
          </p>

          <div className="flex w-full max-w-2xl flex-col gap-6 sm:flex-row">
            <button className="flex-1 border-2 border-black bg-black py-6 text-xl font-black text-white uppercase shadow-[8px_8px_0px_0px_rgba(255,222,0,1)] transition-colors hover:bg-[#FFDE00] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Get OiPer v1.0
            </button>
            <button className="border-2 border-black bg-white px-10 py-6 text-xl font-black text-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-gray-100 active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              GitHub
            </button>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-8 md:grid-cols-3" id="private">
          {[
            {
              num: '01',
              title: 'Native Perf',
              desc: 'Built in native code. Insanely fast. Auto-detects GPU acceleration or falls back to highly optimized CPU inference.',
            },
            {
              num: '02',
              title: 'Total Privacy',
              desc: 'Transcription runs locally. Period. No data leaves your machine. Logs and audio stay on-device by default.',
            },
            {
              num: '03',
              title: 'Seamless UX',
              desc: 'Press hotkey -> Talk. Release hotkey -> Text flows directly into the text field you were focused on.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2"
            >
              <div className="absolute -top-8 -right-4 z-0 text-[120px] font-black text-gray-100 transition-colors select-none group-hover:text-[#FFDE00]">
                {item.num}
              </div>
              <div className="relative z-10">
                <h3 className="mb-4 inline-block bg-black px-3 py-1 text-3xl font-black text-white uppercase">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benchmarks Table */}
        <div
          className="mt-32 border-4 border-black bg-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] sm:p-12"
          id="fast"
        >
          <div className="mb-12 flex flex-col items-end justify-between border-b-4 border-black pb-8 md:flex-row">
            <div>
              <h2 className="mb-4 text-5xl font-black uppercase">Benchmark</h2>
              <p className="inline-block border-2 border-black bg-[#FFDE00] px-2 text-xl font-bold">
                30 seconds of English audio
              </p>
            </div>
            <div className="mt-6 text-right md:mt-0">
              <span className="mb-1 block text-sm font-bold uppercase">
                Winner
              </span>
              <span className="border-2 border-black bg-black px-4 py-2 text-3xl font-black text-white uppercase">
                OiPer (1.5s)
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-lg font-bold whitespace-nowrap">
              <thead>
                <tr className="border-b-4 border-black uppercase">
                  <th className="px-6 py-4">Solution</th>
                  <th className="px-6 py-4 text-right">Time (s)</th>
                  <th className="hidden w-full px-6 py-4 sm:table-cell">
                    Visual
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="transform border-b-4 border-black bg-[#FFDE00] transition-transform hover:scale-[1.01]">
                  <td className="flex items-center gap-2 px-6 py-6 text-xl font-black">
                    <span className="text-2xl">★</span> OiPer Desktop
                  </td>
                  <td className="px-6 py-6 text-right text-2xl font-black">
                    1.5s
                  </td>
                  <td className="hidden px-6 py-6 sm:table-cell">
                    <div className="h-6 w-[20%] border-2 border-black bg-black"></div>
                  </td>
                </tr>
                <tr className="border-b-4 border-black hover:bg-gray-50">
                  <td className="px-6 py-6">Lemonfox API</td>
                  <td className="px-6 py-6 text-right">3.27s</td>
                  <td className="hidden px-6 py-6 sm:table-cell">
                    <div className="h-6 w-[45%] border-2 border-black bg-gray-300"></div>
                  </td>
                </tr>
                <tr className="border-b-4 border-black hover:bg-gray-50">
                  <td className="px-6 py-6">Python Faster-Whisper</td>
                  <td className="px-6 py-6 text-right">3.55s</td>
                  <td className="hidden px-6 py-6 sm:table-cell">
                    <div className="h-6 w-[50%] border-2 border-black bg-gray-300"></div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-6">OpenAI Whisper API</td>
                  <td className="px-6 py-6 text-right">6.46s</td>
                  <td className="hidden px-6 py-6 sm:table-cell">
                    <div className="h-6 w-[95%] border-2 border-black bg-gray-300"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Features Config */}
        <div className="mt-32 grid gap-12 md:grid-cols-2" id="flex">
          <div className="border-4 border-black bg-black p-12 text-white shadow-[16px_16px_0px_0px_rgba(255,222,0,1)]">
            <h2 className="mb-8 text-4xl font-black uppercase">Hardware</h2>
            <ul className="space-y-6 text-xl font-bold">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-[#FFDE00] text-black">
                  ✓
                </div>
                <div>
                  <div className="mb-1 uppercase">Local Processing</div>
                  <div className="text-sm font-normal text-gray-400">
                    Model management with easy downloads inside the app.
                    Supports different model sizes.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-[#FFDE00] text-black">
                  ✓
                </div>
                <div>
                  <div className="mb-1 uppercase">Backend Choices</div>
                  <div className="text-sm font-normal text-gray-400">
                    Auto-detect, CPU-only, or full GPU acceleration.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-4 border-black bg-white p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-8 text-4xl font-black uppercase">
              Online (Optional)
            </h2>
            <ul className="space-y-6 text-xl font-bold">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-black text-white">
                  +
                </div>
                <div>
                  <div className="mb-1 uppercase">LLM Integration</div>
                  <div className="text-sm font-normal text-gray-600">
                    Transcribe through LLMs for perfect formatting. Supports
                    Gemini 2.5 Flash Lite & specialized models.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-black text-white">
                  +
                </div>
                <div>
                  <div className="mb-1 uppercase">Bring Your Own Key</div>
                  <div className="text-sm font-normal text-gray-600">
                    Custom Base URL setup, API Key management, and specific
                    model name config.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-8 border-black bg-[#FFDE00] px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="-rotate-2 transform border-4 border-black bg-white px-4 py-2 text-4xl font-black tracking-tighter uppercase">
            OIPER
          </div>
          <div className="bg-black px-6 py-3 text-sm font-bold tracking-widest text-white uppercase">
            Privacy First. Always.
          </div>
        </div>
      </footer>
    </div>
  )
}
