const displayFont = {
  fontFamily:
    '"Avenir Next Condensed", "Franklin Gothic Medium", "DIN Condensed", sans-serif',
}

const bodyFont = {
  fontFamily: '"Trebuchet MS", "Gill Sans", sans-serif',
}

const monoFont = {
  fontFamily: '"Lucida Console", "Courier New", monospace',
}

const pillars = [
  {
    title: 'User experience',
    copy: 'Hold a global hotkey, speak naturally, release, and keep working in the same application without context switching.',
  },
  {
    title: 'Performance',
    copy: 'Native code, GPU acceleration where available, and low-latency transcription tuned for heavy daily usage.',
  },
  {
    title: 'Privacy',
    copy: 'Audio, logs, and transcription stay on your machine by default. Online services only run when you opt in.',
  },
]

const steps = [
  {
    label: '01',
    title: 'Hold to record',
    copy: 'A global hotkey starts capture instantly from anywhere on the desktop.',
  },
  {
    label: '02',
    title: 'Release to transcribe',
    copy: 'The moment you release, OiPer processes the clip with your selected backend.',
  },
  {
    label: '03',
    title: 'Inject and refine',
    copy: 'Text lands in the active app and can be cleaned locally or through an optional online model.',
  },
]

const settings = [
  'Speech model selection with simple downloads and size choices',
  'Backend preferences for auto, CPU-only, or GPU acceleration',
  'Provider controls for base URL, API key, and model name',
  'Local or online text cleanup depending on your workflow',
  'LLM-assisted transcription for technical terminology and niche vocabulary',
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', accent: true },
  { name: 'Lemonfox API', time: '3.27s' },
  { name: 'Python Faster-Whisper', time: '3.55s' },
  { name: 'OpenAI Whisper 1 API', time: '6.46s' },
]

export default function LandingPageGpt541() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#071018] text-[#deeff5]"
      style={bodyFont}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(circle at 14% 18%, rgba(46, 181, 198, 0.26), transparent 32%), radial-gradient(circle at 83% 11%, rgba(255, 149, 78, 0.18), transparent 28%), radial-gradient(circle at 72% 78%, rgba(59, 130, 246, 0.18), transparent 35%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(114, 159, 181, 0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(114, 159, 181, 0.11) 1px, transparent 1px)',
          backgroundSize: '84px 84px',
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pt-8 pb-40 md:px-10 lg:gap-14">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#7df2ff] shadow-[0_0_18px_rgba(125,242,255,0.75)]" />
            <span
              className="text-sm tracking-[0.45em] text-[#9ad9e5] uppercase"
              style={displayFont}
            >
              OiPer Desktop
            </span>
          </div>
          <div
            className="rounded-full border border-[#255064] bg-[#091a24]/80 px-4 py-2 text-[11px] tracking-[0.28em] text-[#f4c898] uppercase"
            style={monoFont}
          >
            native voice command center
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-7">
            <p
              className="animate-in fade-in slide-in-from-bottom-4 max-w-xl text-xs tracking-[0.35em] text-[#82c8d4] uppercase duration-700"
              style={monoFont}
            >
              Hold key. Speak. Release. Continue writing.
            </p>
            <h1
              className="animate-in fade-in slide-in-from-bottom-5 max-w-4xl text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] font-semibold text-[#f2fbff] uppercase duration-700"
              style={displayFont}
            >
              Local-first dictation engineered for real desktop speed
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-6 max-w-2xl text-base leading-8 text-[#b4ccd4] duration-700 md:text-lg">
              OiPer turns short recordings into ready-to-insert text with very
              low latency. It stays on-device by default, supports optional
              online cleanup, and keeps the workflow focused on the active app
              instead of another recording window.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full border border-[#1d6078] bg-[#0a202e] px-5 py-3 text-sm font-semibold text-[#8ae7f6]">
                Privacy-first architecture
              </div>
              <div className="rounded-full border border-[#694121] bg-[#25180f] px-5 py-3 text-sm font-semibold text-[#f4ca9b]">
                Fastest benchmarked result
              </div>
            </div>
          </div>

          <aside className="animate-in fade-in slide-in-from-right-8 rounded-[2rem] border border-[#234557] bg-[#091520]/90 p-6 shadow-[0_28px_70px_rgba(1,8,14,0.55)] duration-700">
            <div className="flex items-center justify-between gap-3 border-b border-[#183240] pb-4">
              <div>
                <p
                  className="text-[11px] tracking-[0.3em] text-[#8ecddb] uppercase"
                  style={monoFont}
                >
                  30 sec english audio
                </p>
                <h2
                  className="mt-2 text-2xl text-[#ebfbff] uppercase"
                  style={displayFont}
                >
                  Performance board
                </h2>
              </div>
              <div className="rounded-2xl border border-[#2f6a85] bg-[#0d2634] px-4 py-3 text-right">
                <p className="text-[11px] tracking-[0.24em] text-[#90d9e9] uppercase">
                  best time
                </p>
                <p
                  className="text-4xl leading-none font-semibold text-[#7af0ff]"
                  style={displayFont}
                >
                  1.5s
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {benchmarks.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-2xl border p-4 ${
                    item.accent
                      ? 'border-[#2d7f9d] bg-[#0b2433] text-[#eafaff]'
                      : 'border-[#183545] bg-[#091923] text-[#a9c1ca]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span
                      className={`text-2xl font-semibold ${
                        item.accent ? 'text-[#7af0ff]' : 'text-[#e7c08d]'
                      }`}
                      style={displayFont}
                    >
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-[#1a3746] bg-[#07131b] px-4 py-4 text-sm leading-7 text-[#99bac6]">
              OiPer leads the group while keeping transcription local by
              default, which is the point: speed without surrendering control.
            </p>
          </aside>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#203f50] bg-[#091722]/85 p-7">
            <p
              className="text-xs tracking-[0.32em] text-[#83cbd7] uppercase"
              style={monoFont}
            >
              quick workflow
            </p>
            <h2
              className="mt-3 text-3xl text-[#f1fbff] uppercase"
              style={displayFont}
            >
              One hotkey, no detour
            </h2>
            <div className="mt-6 space-y-4">
              {steps.map((step) => (
                <article
                  key={step.label}
                  className="rounded-[1.6rem] border border-[#254b5f] bg-[#0b1d29] p-5"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="rounded-full border border-[#2c728d] px-3 py-1 text-xs tracking-[0.2em] text-[#88d9e7] uppercase"
                      style={monoFont}
                    >
                      {step.label}
                    </span>
                    <h3
                      className="text-xl text-[#ebfbff] uppercase"
                      style={displayFont}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#a8c4cd]">
                    {step.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[2rem] border border-[#203f50] bg-[#08141d]/90 p-6"
              >
                <div className="h-1 w-16 rounded-full bg-[#78f0ff]" />
                <h3
                  className="mt-5 text-2xl text-[#f0fbff] uppercase"
                  style={displayFont}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#abc6cf]">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-[#27495a] bg-[#0a1821]/85 p-7">
            <p
              className="text-xs tracking-[0.32em] text-[#80c7d3] uppercase"
              style={monoFont}
            >
              privacy and security
            </p>
            <h2
              className="mt-3 text-3xl text-[#f1fbff] uppercase"
              style={displayFont}
            >
              A local core with optional cloud edges
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#28566d] bg-[#0c2230] p-5">
                <p
                  className="text-[11px] tracking-[0.26em] text-[#8fd8e7] uppercase"
                  style={monoFont}
                >
                  local processing
                </p>
                <p className="mt-4 text-sm leading-7 text-[#b3cdd5]">
                  Transcription runs on your machine. Audio clips and activity
                  logs remain on-device, so the default setup does not export
                  your speech anywhere.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#624226] bg-[#23170e] p-5">
                <p
                  className="text-[11px] tracking-[0.26em] text-[#f1c28c] uppercase"
                  style={monoFont}
                >
                  online services
                </p>
                <p className="mt-4 text-sm leading-7 text-[#efd2aa]">
                  Cleanup and optimization are optional. Use your own API key,
                  choose the provider, and switch the feature off whenever you
                  want.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#24465b] bg-[#091723]/90 p-7">
            <p
              className="text-xs tracking-[0.32em] text-[#80c7d3] uppercase"
              style={monoFont}
            >
              advanced accuracy
            </p>
            <h2
              className="mt-3 text-3xl text-[#effaff] uppercase"
              style={displayFont}
            >
              Bring in an LLM when the language gets specialized
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#adc8d2]">
              OiPer can route transcription through lightweight LLMs when you
              need stronger handling for technical terms, product names, or
              domain-specific phrasing. Smaller fast models such as Gemini 2.5
              Flash Lite fit well here.
            </p>
            <div className="mt-6 rounded-[1.75rem] border border-[#1b3948] bg-[#07121a] p-5 text-sm leading-7 text-[#8fb6c4]">
              Choose local-only, online cleanup, or a hybrid stack depending on
              whether privacy, speed, or precision matters most for the task in
              front of you.
            </div>
          </article>
        </section>

        <section className="rounded-[2.25rem] border border-[#244457] bg-[#091721]/85 p-7">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p
                className="text-xs tracking-[0.32em] text-[#81c9d6] uppercase"
                style={monoFont}
              >
                settings and configuration
              </p>
              <h2
                className="mt-3 text-3xl text-[#f0fbff] uppercase"
                style={displayFont}
              >
                Tune models, backends, and providers without losing simplicity
              </h2>
            </div>
            <div className="rounded-[1.8rem] border border-[#2e6781] bg-[#0c2230] p-5">
              <p
                className="text-[11px] tracking-[0.24em] text-[#8dd8e8] uppercase"
                style={monoFont}
              >
                backend selector
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['auto', 'cpu', 'gpu'].map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full border border-[#357997] bg-[#0f2b3d] px-4 py-2 text-xs tracking-[0.2em] text-[#c8f4fb] uppercase"
                    style={monoFont}
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {settings.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-[#21465a] bg-[#0b1b27] p-5 text-sm leading-7 text-[#abc7d0]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
