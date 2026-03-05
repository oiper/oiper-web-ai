const slabFont = {
  fontFamily: '"Rockwell", "Cambria", serif',
}

const uiFont = {
  fontFamily: '"Trebuchet MS", "Gill Sans", sans-serif',
}

const monoFont = {
  fontFamily: '"Lucida Sans Typewriter", "Courier New", monospace',
}

const modules = [
  {
    tag: 'UX',
    title: 'Quick press-and-release recording',
    copy: 'The interaction is compact enough to stay in the flow of coding, writing, support work, or chat.',
  },
  {
    tag: 'PERF',
    title: 'Native execution path',
    copy: 'OiPer is designed for low overhead and fast turnaround, with GPU acceleration where the machine allows it.',
  },
  {
    tag: 'PRIV',
    title: 'On-device by default',
    copy: 'Speech data, audio, and logs remain local unless the user deliberately enables an online provider.',
  },
]

const bays = [
  {
    label: 'Model rack',
    copy: 'Download and switch among speech models sized for speed, quality, or hardware limits.',
  },
  {
    label: 'Backend selector',
    copy: 'Run in auto mode, lock to CPU-only, or push to GPU acceleration when available.',
  },
  {
    label: 'Provider dock',
    copy: 'Enter base URL, API key, and model name only if you want online cleanup or remote processing.',
  },
  {
    label: 'Precision mode',
    copy: 'Use LLM-backed transcription for technical terminology, proper nouns, and industry-specific wording.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', highlight: true },
  { name: 'Lemonfox API', time: '3.27s' },
  { name: 'Python Faster-Whisper', time: '3.55s' },
  { name: 'OpenAI Whisper 1 API', time: '6.46s' },
]

export default function LandingPageGpt544() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#1a1612] text-[#efe1c6]"
      style={uiFont}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 14% 16%, rgba(212, 147, 69, 0.16), transparent 26%), radial-gradient(circle at 82% 18%, rgba(116, 157, 121, 0.16), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 40%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-12"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pt-8 pb-40 md:px-10 lg:gap-14">
        <header className="rounded-[1.8rem] border border-[#4b3d2e] bg-[#201a15]/85 px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#d49345]" />
                <div className="h-3 w-3 rounded-full bg-[#82905e]" />
                <div className="h-3 w-3 rounded-full bg-[#d3c28b]" />
              </div>
              <p
                className="text-sm tracking-[0.36em] text-[#d9c89c] uppercase"
                style={monoFont}
              >
                OiPer workstation
              </p>
            </div>
            <div
              className="rounded-full border border-[#5d4b3a] bg-[#17120f] px-4 py-2 text-[11px] tracking-[0.28em] text-[#cdb480] uppercase"
              style={monoFont}
            >
              native / local / configurable
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.15fr_0.83fr]">
          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-[#4b3d2e] bg-[#221c16]/90 p-6">
              <p
                className="text-[11px] tracking-[0.3em] text-[#cdb480] uppercase"
                style={monoFont}
              >
                mode
              </p>
              <h1
                className="mt-4 text-4xl leading-tight text-[#f3e6ca]"
                style={slabFont}
              >
                Privacy-first voice input for serious desktop work
              </h1>
            </div>
            <div className="rounded-[2rem] border border-[#4b3d2e] bg-[#17120f]/92 p-6">
              <p className="text-sm leading-7 text-[#d8c8ac]">
                Hold a global hotkey to record. Release to transcribe. OiPer
                injects the result into the active application so the machine
                feels responsive instead of interrupted.
              </p>
            </div>
          </aside>

          <div className="rounded-[2.2rem] border border-[#4d3f30] bg-[#201911]/88 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p
                  className="text-xs tracking-[0.32em] text-[#c9af79] uppercase"
                  style={monoFont}
                >
                  recorder deck
                </p>
                <h2
                  className="mt-3 text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] text-[#f4e7cb]"
                  style={slabFont}
                >
                  Speak into the workflow, not around it
                </h2>
              </div>
              <div className="rounded-[1.8rem] border border-[#5f503f] bg-[#17120f] p-5">
                <p
                  className="text-[11px] tracking-[0.3em] text-[#d8c79f] uppercase"
                  style={monoFont}
                >
                  30 sec benchmark
                </p>
                <p
                  className="mt-3 text-5xl leading-none text-[#d49345]"
                  style={slabFont}
                >
                  1.5s
                </p>
                <p className="mt-3 text-sm leading-7 text-[#d6c7ab]">
                  Fast enough to feel immediate while still running locally by
                  default.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                '1. Hold global hotkey',
                '2. Release to transcribe',
                '3. Inject text into active app',
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-[#594a39] bg-[#17120f] p-4 text-sm leading-7 text-[#e7d8bc]"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#4d3f30] bg-[#211a13]/90 p-6">
            <p
              className="text-[11px] tracking-[0.3em] text-[#cdb480] uppercase"
              style={monoFont}
            >
              performance board
            </p>
            <div className="mt-5 space-y-3">
              {benchmarks.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-[1.35rem] border px-4 py-4 ${
                    item.highlight
                      ? 'border-[#7e5b31] bg-[#2a1f15]'
                      : 'border-[#514333] bg-[#18130f]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm">{item.name}</span>
                    <span
                      className={`text-2xl ${
                        item.highlight ? 'text-[#e8a857]' : 'text-[#d7c5a7]'
                      }`}
                      style={slabFont}
                    >
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {modules.map((module) => (
            <article
              key={module.tag}
              className="rounded-[2rem] border border-[#4b3d2e] bg-[#211a14]/90 p-6"
            >
              <span
                className="rounded-full border border-[#6a553d] px-3 py-1 text-[11px] tracking-[0.24em] text-[#d4bb89] uppercase"
                style={monoFont}
              >
                {module.tag}
              </span>
              <h2 className="mt-5 text-3xl text-[#f4e7ca]" style={slabFont}>
                {module.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#d8c8ac]">
                {module.copy}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-[2.1rem] border border-[#4b3d2e] bg-[#221b15]/90 p-7">
            <p
              className="text-xs tracking-[0.32em] text-[#d0b781] uppercase"
              style={monoFont}
            >
              privacy chassis
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[1.5rem] border border-[#5c4c3b] bg-[#17120f] p-5">
                <h2 className="text-2xl text-[#f0e3c7]" style={slabFont}>
                  Local processing
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#d8c8ab]">
                  Audio capture, transcription, and activity history remain on
                  your machine in the default configuration.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[#7b5e40] bg-[#2b1f15] p-5">
                <h2 className="text-2xl text-[#f2c98a]" style={slabFont}>
                  Optional online services
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#f0d4a8]">
                  Remote cleanup is completely optional and requires your own
                  provider credentials. Turn it on only when it serves the task.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2.1rem] border border-[#4b3d2e] bg-[#1d1712]/92 p-7">
            <p
              className="text-xs tracking-[0.32em] text-[#d0b781] uppercase"
              style={monoFont}
            >
              configuration bays
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {bays.map((bay) => (
                <div
                  key={bay.label}
                  className="rounded-[1.5rem] border border-[#564636] bg-[#17120f] p-5"
                >
                  <h3 className="text-2xl text-[#f1e4c8]" style={slabFont}>
                    {bay.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#d6c7ab]">
                    {bay.copy}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
