const displayFont = {
  fontFamily: '"Copperplate", "Avenir Next", "Trebuchet MS", sans-serif',
}

const bodyFont = {
  fontFamily: '"Verdana", "Trebuchet MS", sans-serif',
}

const monoFont = {
  fontFamily: '"Consolas", "Lucida Console", monospace',
}

const stages = [
  {
    index: '01',
    title: 'Capture',
    copy: 'A global hotkey arms recording immediately from anywhere in the desktop environment.',
  },
  {
    index: '02',
    title: 'Transcribe',
    copy: 'Release the key and OiPer pushes the clip through the chosen local backend with low latency.',
  },
  {
    index: '03',
    title: 'Inject',
    copy: 'Text appears in the focused application so the spoken sentence becomes part of the working draft.',
  },
  {
    index: '04',
    title: 'Polish',
    copy: 'Choose local cleanup or optional online optimization when the task calls for it.',
  },
]

const featureBands = [
  {
    title: 'User experience',
    copy: 'The product gets out of the way. The interaction is short enough to feel closer to a keyboard shortcut than a recording session.',
  },
  {
    title: 'Performance',
    copy: 'Native implementation, backend selection, and GPU acceleration where available keep turnaround fast.',
  },
  {
    title: 'Privacy',
    copy: 'Speech stays on the machine unless the user explicitly enables a provider and supplies their own credentials.',
  },
]

const benchmarks = [
  { label: 'OiPer Desktop', time: '1.5s', height: '100%' },
  { label: 'Lemonfox API', time: '3.27s', height: '46%' },
  { label: 'Python Faster-Whisper', time: '3.55s', height: '42%' },
  { label: 'OpenAI Whisper 1 API', time: '6.46s', height: '24%' },
]

const config = [
  'Speech model management with easy downloads',
  'Backend choice across auto, CPU, and GPU',
  'Custom base URL, API key, and model fields',
  'Optional online cleanup and local rewrite paths',
  'LLM transcription for high-precision terminology',
]

export default function LandingPageGpt543() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#09080f] text-[#f4ede4]"
      style={bodyFont}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 20%, rgba(43, 192, 255, 0.22), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255, 122, 62, 0.18), transparent 26%), radial-gradient(circle at 56% 78%, rgba(255, 194, 72, 0.14), transparent 34%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pt-8 pb-40 md:px-10 lg:gap-14">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-14 rounded-full bg-[#f6a34e]" />
            <p
              className="text-sm tracking-[0.42em] text-[#d8d0c4] uppercase"
              style={displayFont}
            >
              OiPer Desktop
            </p>
          </div>
          <div
            className="rounded-full border border-[#264e68] bg-[#0f1620]/80 px-4 py-2 text-[11px] tracking-[0.28em] text-[#7fdfff] uppercase"
            style={monoFont}
          >
            privacy-first signal chain
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-7">
            <p
              className="animate-in fade-in slide-in-from-bottom-4 text-xs tracking-[0.36em] text-[#89dfff] uppercase duration-700"
              style={monoFont}
            >
              global hotkey / low latency / optional cloud cleanup
            </p>
            <h1
              className="animate-in fade-in slide-in-from-bottom-6 max-w-4xl text-[clamp(3.3rem,8vw,6.7rem)] leading-[0.92] text-[#fff6e8] uppercase duration-700"
              style={displayFont}
            >
              The local transcription engine that keeps pace with thought
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#cfc4b8] md:text-lg">
              OiPer is built for people who want voice input to behave like an
              extension of the keyboard. Record by holding a hotkey, release to
              transcribe, then let the text appear directly inside the app in
              focus.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 rounded-[2rem] border border-[#213549] bg-[#0b1017]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] duration-700">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-[11px] tracking-[0.3em] text-[#8ad9f6] uppercase"
                  style={monoFont}
                >
                  live sequence
                </p>
                <h2
                  className="mt-2 text-3xl text-[#fff3e1] uppercase"
                  style={displayFont}
                >
                  Release to transcribe
                </h2>
              </div>
              <div
                className="rounded-2xl border border-[#3b6177] bg-[#101923] px-4 py-3 text-3xl text-[#7fe2ff]"
                style={displayFont}
              >
                1.5s
              </div>
            </div>

            <div
              aria-hidden
              className="mt-6 h-28 rounded-[1.5rem] border border-[#1d2d3c] bg-[#070b11]"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(20,130,167,0.1) 0, rgba(20,130,167,0.1) 10%, transparent 10%, transparent 18%, rgba(255,153,72,0.15) 18%, rgba(255,153,72,0.15) 26%, transparent 26%, transparent 36%, rgba(20,130,167,0.1) 36%, rgba(20,130,167,0.1) 50%, transparent 50%, transparent 58%, rgba(255,153,72,0.12) 58%, rgba(255,153,72,0.12) 66%, transparent 66%, transparent 100%)',
              }}
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['local logs', 'on-device audio', 'optional providers'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#223648] bg-[#0d141d] px-4 py-4 text-center text-xs tracking-[0.22em] text-[#d9c8ae] uppercase"
                    style={monoFont}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-4">
          {stages.map((stage) => (
            <article
              key={stage.index}
              className="rounded-[1.8rem] border border-[#223649] bg-[#0d1219]/88 p-5"
            >
              <p
                className="text-[11px] tracking-[0.28em] text-[#87dbf8] uppercase"
                style={monoFont}
              >
                stage {stage.index}
              </p>
              <h2
                className="mt-4 text-2xl text-[#fff3e1] uppercase"
                style={displayFont}
              >
                {stage.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#d1c4b5]">
                {stage.copy}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            {featureBands.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#203346] bg-[#0b1118]/90 p-6"
              >
                <div className="h-1 w-20 rounded-full bg-[#7fe2ff]" />
                <h2
                  className="mt-4 text-3xl text-[#fff4e5] uppercase"
                  style={displayFont}
                >
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#d1c4b6]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>

          <article className="rounded-[2rem] border border-[#213447] bg-[#0c1118]/92 p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p
                  className="text-[11px] tracking-[0.3em] text-[#f6a34e] uppercase"
                  style={monoFont}
                >
                  benchmark wall
                </p>
                <h2
                  className="mt-2 text-3xl text-[#fff4e4] uppercase"
                  style={displayFont}
                >
                  30-second audio
                </h2>
              </div>
              <p className="max-w-[12rem] text-right text-xs leading-6 text-[#c3b7a8]">
                Lowest time wins. OiPer finishes first.
              </p>
            </div>

            <div className="mt-8 grid h-[20rem] grid-cols-4 items-end gap-4">
              {benchmarks.map((item) => (
                <div
                  key={item.label}
                  className="flex h-full flex-col justify-end"
                >
                  <div
                    className={`rounded-t-[1.4rem] border border-[#32536b] bg-gradient-to-t from-[#0f3247] to-[#7fe2ff] ${
                      item.label === 'OiPer Desktop'
                        ? 'shadow-[0_0_30px_rgba(127,226,255,0.25)]'
                        : 'opacity-80'
                    }`}
                    style={{ height: item.height }}
                  />
                  <div className="mt-3">
                    <p className="text-sm text-[#fff1dd]">{item.time}</p>
                    <p className="mt-1 text-xs leading-5 text-[#b9ad9f]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-[#23384a] bg-[#0a1017]/88 p-7">
            <p
              className="text-[11px] tracking-[0.3em] text-[#8ad9f6] uppercase"
              style={monoFont}
            >
              privacy and services
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.6rem] border border-[#27455d] bg-[#0f1b25] p-5">
                <h2
                  className="text-2xl text-[#fff3e1] uppercase"
                  style={displayFont}
                >
                  Local processing
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#d2c6b8]">
                  Audio and logs remain on-device. The default route keeps data
                  entirely on your machine.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-[#684728] bg-[#21150d] p-5">
                <h2
                  className="text-2xl text-[#ffe0b7] uppercase"
                  style={displayFont}
                >
                  Online options
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#efcfa4]">
                  Enable cleanup only if you want it. Supply your own API key,
                  base URL, and model choice.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#24384b] bg-[#0c1118]/92 p-7">
            <p
              className="text-[11px] tracking-[0.3em] text-[#f6a34e] uppercase"
              style={monoFont}
            >
              configuration matrix
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {config.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[#203347] bg-[#0a1016] p-5 text-sm leading-7 text-[#d0c4b6]"
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
