const serifFont = {
  fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif',
}

const sansFont = {
  fontFamily: '"Gill Sans", "Trebuchet MS", sans-serif',
}

const noteFont = {
  fontFamily: '"Lucida Sans Typewriter", "Courier New", monospace',
}

const pillars = [
  {
    title: 'A fast writing rhythm',
    copy: 'The core loop is simple enough to become muscle memory: hold a hotkey, speak, release, continue typing.',
  },
  {
    title: 'A native performance profile',
    copy: 'OiPer is written in native code, keeps latency low, and uses GPU acceleration when the machine supports it.',
  },
  {
    title: 'A clear privacy stance',
    copy: 'Speech data stays on-device by default. Online optimization only appears when the user deliberately enables it.',
  },
]

const benchmarks = [
  {
    name: 'OiPer Desktop',
    time: '1.5s',
    width: '100%',
    accent: 'bg-[#244f49]',
  },
  {
    name: 'Lemonfox API',
    time: '3.27s',
    width: '46%',
    accent: 'bg-[#b2693b]',
  },
  {
    name: 'Python Faster-Whisper',
    time: '3.55s',
    width: '43%',
    accent: 'bg-[#7d8261]',
  },
  {
    name: 'OpenAI Whisper 1 API',
    time: '6.46s',
    width: '24%',
    accent: 'bg-[#8a6c58]',
  },
]

const settings = [
  'Speech model downloads and selection by size or purpose',
  'Backend choice for auto, CPU-only, or GPU acceleration',
  'Provider setup with custom base URL, API key, and model name',
  'Text optimization through local processing or online cleanup',
  'LLM transcription mode for technical or specialized language',
]

export default function LandingPageGpt542() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#f4ecdf] text-[#22302a]"
      style={sansFont}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 18% 14%, rgba(94, 137, 123, 0.18), transparent 26%), radial-gradient(circle at 83% 16%, rgba(184, 123, 72, 0.18), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.45), transparent 48%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34, 48, 42, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 48, 42, 0.15) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pt-8 pb-40 md:px-10 lg:gap-14">
        <header className="grid gap-4 border-b border-[#cdbfab] pb-5 md:grid-cols-[0.95fr_1.05fr_0.7fr] md:items-end">
          <div>
            <p
              className="text-xs tracking-[0.35em] text-[#66746c] uppercase"
              style={noteFont}
            >
              OiPer desktop / issue 01
            </p>
            <p className="mt-2 max-w-xs text-sm leading-7 text-[#57645d]">
              A privacy-first voice tool for people who do not want their
              desktop workflow rearranged around transcription.
            </p>
          </div>
          <div>
            <div className="text-sm tracking-[0.3em] text-[#8d7e6b] uppercase">
              Editorial product spread
            </div>
          </div>
          <div className="text-right">
            <p
              className="text-[11px] tracking-[0.3em] text-[#66746c] uppercase"
              style={noteFont}
            >
              benchmark leader
            </p>
            <p className="mt-2 text-4xl text-[#244f49]" style={serifFont}>
              1.5s
            </p>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-[#cec1ae] bg-[#fbf6ee]/80 p-6 shadow-[0_20px_50px_rgba(79,63,42,0.08)]">
              <p
                className="text-[11px] tracking-[0.34em] text-[#66746c] uppercase"
                style={noteFont}
              >
                The promise
              </p>
              <p
                className="mt-4 text-lg leading-8 text-[#314039]"
                style={serifFont}
              >
                Your voice stays yours. The speed stays yours too.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#cec1ae] bg-[#f7f0e5]/90 p-6">
              <p
                className="text-[11px] tracking-[0.34em] text-[#8d7e6b] uppercase"
                style={noteFont}
              >
                Workflow in one sentence
              </p>
              <p className="mt-4 text-sm leading-7 text-[#4f5a55]">
                Hold a global hotkey to capture audio, release to transcribe,
                and inject the result into the app already in front of you.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p
                className="text-xs tracking-[0.36em] text-[#6d7b73] uppercase"
                style={noteFont}
              >
                Privacy-first voice-to-text desktop application
              </p>
              <h1
                className="mt-4 max-w-4xl text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] text-[#1f2e28]"
                style={serifFont}
              >
                The fastest path from spoken thought to finished text.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-[#4c5c55]">
                OiPer keeps the interaction almost invisible: a hold, a short
                phrase, a release, and the copy appears where you were already
                working. Local transcription is the default, not an upsell.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[2rem] border border-[#cdbfab] bg-[#fbf7ef]/85 p-6"
                >
                  <div className="h-px w-20 bg-[#244f49]" />
                  <h2
                    className="mt-5 text-2xl leading-tight text-[#23322c]"
                    style={serifFont}
                  >
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#59655f]">
                    {pillar.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2.2rem] border border-[#cec1ae] bg-[#fbf6ee]/85 p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className="text-xs tracking-[0.34em] text-[#6d7b73] uppercase"
                  style={noteFont}
                >
                  Benchmark spread
                </p>
                <h2 className="mt-3 text-4xl text-[#23332d]" style={serifFont}>
                  Speed without leaving the machine behind
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#59655f]">
                Measured on a 30-second English clip. OiPer finishes first while
                keeping the default path local.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {benchmarks.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm text-[#44524c]">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.time}</span>
                  </div>
                  <div className="h-4 rounded-full bg-[#e2d8c8]">
                    <div
                      className={`h-full rounded-full ${item.accent}`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.2rem] border border-[#cec1ae] bg-[#f8f2e8]/90 p-7">
            <p
              className="text-xs tracking-[0.34em] text-[#8d7e6b] uppercase"
              style={noteFont}
            >
              privacy and optional services
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[1.75rem] border border-[#c8b9a3] bg-[#fffaf3] p-5">
                <h3 className="text-2xl text-[#22312b]" style={serifFont}>
                  Local processing
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5a6660]">
                  Transcription, activity logs, and captured audio remain on the
                  device. That is the baseline, not the premium tier.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#d0b08f] bg-[#fbefe1] p-5">
                <h3 className="text-2xl text-[#5a3f2d]" style={serifFont}>
                  Online optimization
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#74523d]">
                  Optional cleanup uses your API key, your provider choice, and
                  your chosen model. It can be turned off at any time.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2.2rem] border border-[#cec1ae] bg-[#fbf6ee]/85 p-7">
            <p
              className="text-xs tracking-[0.34em] text-[#6d7b73] uppercase"
              style={noteFont}
            >
              advanced accuracy
            </p>
            <h2 className="mt-3 text-4xl text-[#25342d]" style={serifFont}>
              When technical language matters, route through an LLM
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#59655f]">
              OiPer supports transcription through LLMs for stronger handling of
              proper nouns, engineering terms, medical language, or other
              specialized vocabulary. Lightweight options such as Gemini 2.5
              Flash Lite are useful here.
            </p>
          </article>

          <article className="rounded-[2.2rem] border border-[#cec1ae] bg-[#f7f0e5]/90 p-7">
            <p
              className="text-xs tracking-[0.34em] text-[#8d7e6b] uppercase"
              style={noteFont}
            >
              settings and configuration
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {settings.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[#d3c4af] bg-[#fff9f1] p-5 text-sm leading-7 text-[#55615a]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
