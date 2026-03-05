const displayFont = {
  fontFamily: '"Impact", "Haettenschweiler", sans-serif',
}

const bodyFont = {
  fontFamily: '"Century Gothic", "Gill Sans", sans-serif',
}

const monoFont = {
  fontFamily: '"Courier New", monospace',
}

const cards = [
  {
    title: 'Global hotkey capture',
    copy: 'Press and hold anywhere. The recorder is attached to your desktop flow instead of a separate app ritual.',
    tone: 'bg-[#ff7d33] text-[#111111]',
  },
  {
    title: 'Instant text injection',
    copy: 'Release to transcribe and drop the result into the focused application immediately.',
    tone: 'bg-[#111111] text-[#f5efe2]',
  },
  {
    title: 'Local by default',
    copy: 'Audio, logs, and transcription stay on-device unless you deliberately choose an online provider.',
    tone: 'bg-[#1467ff] text-[#f6f3ec]',
  },
]

const stickers = [
  'Auto / CPU / GPU backends',
  'Speech model downloads',
  'Base URL and API key control',
  'Local or online text cleanup',
  'LLM mode for technical language',
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s' },
  { name: 'Lemonfox API', time: '3.27s' },
  { name: 'Python Faster-Whisper', time: '3.55s' },
  { name: 'OpenAI Whisper 1 API', time: '6.46s' },
]

export default function LandingPageGpt545() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#f7f1e6] text-[#111111]"
      style={bodyFont}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(20, 103, 255, 0.18), transparent 24%), radial-gradient(circle at 88% 14%, rgba(255, 125, 51, 0.22), transparent 24%), radial-gradient(circle at 68% 72%, rgba(17, 17, 17, 0.08), transparent 34%)',
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pt-8 pb-40 md:px-10 lg:gap-14">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rotate-45 bg-[#ff7d33]" />
            <p className="text-sm tracking-[0.38em] uppercase" style={monoFont}>
              OiPer Desktop
            </p>
          </div>
          <div
            className="rounded-full border-2 border-[#111111] px-4 py-2 text-[11px] tracking-[0.3em] uppercase"
            style={monoFont}
          >
            privacy first poster cut
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-2 rotate-[-6deg] bg-[#111111] px-4 py-2 text-xs tracking-[0.28em] text-[#f7f1e6] uppercase">
              hold to record
            </div>
            <h1
              className="animate-in fade-in slide-in-from-bottom-4 mt-8 max-w-4xl text-[clamp(4rem,12vw,9rem)] leading-[0.88] uppercase duration-700"
              style={displayFont}
            >
              Speak fast.
              <br />
              Stay local.
              <br />
              Ship text.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#222222]">
              OiPer is a privacy-first voice-to-text desktop app built for speed
              and user control. Hold a global hotkey, talk, release, and watch
              the result land inside the active application.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rotate-[-3deg] rounded-[1.7rem] border-2 border-[#111111] bg-[#ffec9c] px-5 py-4">
                <p
                  className="text-xs tracking-[0.26em] uppercase"
                  style={monoFont}
                >
                  benchmark leader
                </p>
                <p className="mt-2 text-5xl leading-none" style={displayFont}>
                  1.5s
                </p>
              </div>
              <div className="rotate-[2deg] rounded-[1.7rem] border-2 border-[#111111] bg-[#d6f0de] px-5 py-4 text-sm leading-7">
                Native code. GPU acceleration where available. Very low latency.
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border-2 border-[#111111] bg-[#111111] p-6 text-[#f7f1e6] sm:col-span-2">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={monoFont}
              >
                the loop
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  'Hold global hotkey',
                  'Release to transcribe',
                  'Inject text into active app',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-[#3b3b3b] bg-[#171717] p-4 text-sm leading-7"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {cards.map((card) => (
              <article
                key={card.title}
                className={`rounded-[2rem] border-2 border-[#111111] p-6 ${card.tone}`}
              >
                <h2
                  className="text-4xl leading-none uppercase"
                  style={displayFont}
                >
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 opacity-90">{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.3rem] border-2 border-[#111111] bg-[#fff8ef] p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={monoFont}
              >
                speed chart
              </p>
              <h2
                className="mt-3 text-6xl leading-none uppercase"
                style={displayFont}
              >
                30 second benchmark shootout
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7">
              OiPer delivers the fastest time in the provided comparison while
              preserving a local-first default path.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {benchmarks.map((item) => (
              <div
                key={item.name}
                className={`rounded-[1.6rem] border-2 border-[#111111] p-5 ${
                  item.name === 'OiPer Desktop'
                    ? 'bg-[#ff7d33] text-[#111111]'
                    : 'bg-[#f0eadf]'
                }`}
              >
                <p className="text-sm">{item.name}</p>
                <p
                  className="mt-6 text-5xl leading-none uppercase"
                  style={displayFont}
                >
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2.2rem] border-2 border-[#111111] bg-[#111111] p-7 text-[#f7f1e6]">
            <p className="text-xs tracking-[0.3em] uppercase" style={monoFont}>
              privacy and security
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.6rem] border border-[#333333] bg-[#181818] p-5">
                <h2
                  className="text-4xl leading-none uppercase"
                  style={displayFont}
                >
                  Local processing
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#d9d0c3]">
                  Activity logs and audio stay on-device. OiPer gives you full
                  control over your transcription data.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-[#5f4b35] bg-[#2a2118] p-5">
                <h2
                  className="text-4xl leading-none text-[#ffcf9b] uppercase"
                  style={displayFont}
                >
                  Optional online services
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#efd3af]">
                  Remote optimization is opt-in, requires your API key, and can
                  be enabled or disabled whenever you want.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2.2rem] border-2 border-[#111111] bg-[#eaf0ff] p-7">
            <p className="text-xs tracking-[0.3em] uppercase" style={monoFont}>
              settings wall
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {stickers.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.5rem] border-2 border-[#111111] px-5 py-4 text-sm leading-7 ${
                    index % 3 === 0
                      ? 'rotate-[-2deg] bg-[#fff8ef]'
                      : index % 3 === 1
                        ? 'rotate-[2deg] bg-[#ffd9c2]'
                        : 'rotate-[-1deg] bg-[#d5f0de]'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.8rem] border-2 border-[#111111] bg-[#fff8ef] p-5">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={monoFont}
              >
                advanced option
              </p>
              <p className="mt-3 text-sm leading-8">
                Route transcription through lightweight LLMs such as Gemini 2.5
                Flash Lite or other smaller specialized models when technical
                terminology or unusual proper nouns need extra precision.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
