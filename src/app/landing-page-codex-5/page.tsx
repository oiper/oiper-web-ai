import { Cardo, Sora } from 'next/font/google'

const display = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const body = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const cards = [
  {
    title: 'Quick recording',
    text: 'Global hotkey capture with release-to-transcribe flow and immediate text injection into active apps.',
  },
  {
    title: 'Privacy-first',
    text: 'Speech processing runs locally by default, and logs plus audio stay on your machine.',
  },
  {
    title: 'Flexible control',
    text: 'Switch between local and online optimization with configurable backends and model preferences.',
  },
]

const advanced = [
  'Speech model selection and download management',
  'Backend mode selection: auto, cpu-only, or gpu acceleration',
  'Online provider setup with custom base URL and model name',
  'API key management for optional online services',
  'LLM-enhanced transcription for technical terminology',
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', accent: true },
  { name: 'Lemonfox API', time: '3.27s', accent: false },
  { name: 'Python Faster-Whisper', time: '3.55s', accent: false },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', accent: false },
]

export default function LandingPageCodex5() {
  return (
    <main
      className={`${body.className} relative min-h-screen overflow-hidden bg-[#eef4f7] text-[#122638]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,173,102,0.45),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(103,198,236,0.5),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(136,228,189,0.45),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-8 pb-16 md:px-10 md:pt-10">
        <header className="rounded-[2rem] border border-[#9bb7c9] bg-white/65 px-6 py-4 shadow-[0_18px_45px_rgba(26,63,88,0.15)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs tracking-[0.22em] text-[#37566b] uppercase">
              OiPer Desktop
            </p>
            <p className="text-xs tracking-[0.22em] text-[#37566b] uppercase">
              Voice workflow for focused teams
            </p>
          </div>
        </header>

        <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2.2rem] border border-[#98b8cb] bg-white/70 p-7 shadow-[0_25px_60px_rgba(18,38,56,0.14)] backdrop-blur-xl md:p-10">
            <p className="text-xs tracking-[0.2em] text-[#3d637b] uppercase">
              Overview
            </p>
            <h1
              className={`${display.className} mt-4 text-4xl leading-tight md:text-6xl`}
            >
              A calm interface for very fast dictation and complete privacy
              control
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#2b4a5f]">
              OiPer is a privacy-first desktop app that transforms speech into
              text quickly. Hold the global hotkey to record, release to
              transcribe, then keep moving while the output is injected into the
              current app.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-[#83a6bc] bg-[#f6fbff] px-4 py-2">
                Native speed
              </span>
              <span className="rounded-full border border-[#83a6bc] bg-[#f6fbff] px-4 py-2">
                Local-first privacy
              </span>
              <span className="rounded-full border border-[#83a6bc] bg-[#f6fbff] px-4 py-2">
                Optional online cleanup
              </span>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#96b7ca] bg-white/72 p-6 shadow-[0_22px_52px_rgba(21,43,62,0.14)] backdrop-blur-xl">
            <h2 className={`${display.className} text-3xl`}>Core philosophy</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#2e4e63]">
              <li>
                <strong>User Experience:</strong> frictionless capture and
                immediate insertion
              </li>
              <li>
                <strong>Performance:</strong> native implementation with
                low-latency behavior
              </li>
              <li>
                <strong>Privacy:</strong> local processing unless you explicitly
                opt in
              </li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              className="rounded-[1.8rem] border border-[#98b7c9] bg-white/68 p-6 shadow-[0_16px_40px_rgba(23,49,68,0.12)] backdrop-blur-xl"
              key={card.title}
            >
              <h2 className={`${display.className} text-2xl`}>{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#2e4f63]">
                {card.text}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#96b6c8] bg-white/70 p-7 shadow-[0_20px_52px_rgba(19,40,57,0.13)] backdrop-blur-xl">
            <h2 className={`${display.className} text-3xl`}>
              Privacy and security
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#2f4f63]">
              Transcription runs on your machine. Activity logs and audio remain
              on-device. Online services are optional, require your API key, and
              can be enabled or disabled whenever you choose.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[#96b6c8] bg-white/70 p-7 shadow-[0_20px_52px_rgba(19,40,57,0.13)] backdrop-blur-xl">
            <h2 className={`${display.className} text-3xl`}>
              Advanced settings
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#2f4f63]">
              {advanced.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-[2rem] border border-[#97b8ca] bg-white/74 p-7 shadow-[0_24px_56px_rgba(19,39,55,0.14)] backdrop-blur-xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={`${display.className} text-3xl`}>
              Performance benchmark
            </h2>
            <p className="text-xs tracking-[0.2em] text-[#3d6278] uppercase">
              30 sec english audio
            </p>
          </div>
          <div className="mt-6 grid gap-3">
            {benchmarks.map((item) => (
              <div
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm ${
                  item.accent
                    ? 'border-[#2f7aa2] bg-[#e5f6ff] text-[#11446b]'
                    : 'border-[#adc5d3] bg-[#f5fbff] text-[#2a4a5f]'
                }`}
                key={item.name}
              >
                <span className="font-semibold">{item.name}</span>
                <span
                  className={`font-bold ${item.accent ? 'text-[#0f4e7c]' : ''}`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#31556c]">
            OiPer delivers the fastest timing while preserving data control and
            high transcription quality.
          </p>
        </section>
      </div>
    </main>
  )
}
