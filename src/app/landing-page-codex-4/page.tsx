import { IBM_Plex_Mono, Syne_Mono } from 'next/font/google'

const display = Syne_Mono({
  subsets: ['latin'],
  weight: '400',
})

const body = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const setupLines = [
  'model: whisper-large-v3 or lightweight local model',
  'backend: auto | cpu | gpu',
  'cleanup: local or online',
  'online: base_url + api_key + model_name',
  'advanced: llm-transcription for technical content',
]

const bench = [
  ['OiPer Desktop', '1.5s'],
  ['Lemonfox API', '3.27s'],
  ['Python Faster-Whisper', '3.55s'],
  ['OpenAI Whisper 1 API', '6.46s'],
]

export default function LandingPageCodex4() {
  return (
    <main
      className={`${body.className} relative min-h-screen overflow-hidden bg-[#06110d] text-[#b7ffd2]`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-35 [background:repeating-linear-gradient(0deg,rgba(128,255,181,0.08),rgba(128,255,181,0.08)_1px,transparent_1px,transparent_40px)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 md:px-10 md:py-10">
        <header className="rounded-xl border border-[#2f7a58] bg-[#0a1a14] p-4 text-xs tracking-[0.22em] text-[#8afab6] uppercase">
          oiper.desktop :: local-first voice-to-text runtime
        </header>

        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-xl border border-[#2f7a58] bg-[#08150f] p-6 md:p-8">
            <p className="text-xs tracking-[0.2em] text-[#74daa0] uppercase">
              Workflow
            </p>
            <h1
              className={`${display.className} mt-4 text-3xl leading-tight text-[#d9ffe8] uppercase md:text-5xl`}
            >
              hold hotkey then record then release then instant injection
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#9ce6bb]">
              OiPer Desktop is optimized for people who think fast and type
              faster. It captures speech, transcribes with low latency, and
              inserts output directly into the active application.
            </p>
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-lg border border-[#2f7a58] bg-[#0c1f16] p-3">
                ux: minimal friction
              </div>
              <div className="rounded-lg border border-[#2f7a58] bg-[#0c1f16] p-3">
                performance: native speed
              </div>
              <div className="rounded-lg border border-[#2f7a58] bg-[#0c1f16] p-3">
                privacy: local by default
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#2f7a58] bg-[#0b1d15] p-6">
            <h2
              className={`${display.className} text-2xl text-[#d5ffe6] uppercase`}
            >
              Execution log
            </h2>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-[#2a6a4c] bg-[#05100b] p-4 text-xs leading-relaxed text-[#8ee6b0]">
              {`[local] audio capture initialized
[local] whisper engine loaded
[privacy] outbound traffic: disabled
[action] release hotkey -> transcription
[result] injected text in active window
[optional] online cleanup only if enabled`}
            </pre>
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-xl border border-[#2f7a58] bg-[#0b1c15] p-6">
            <h2
              className={`${display.className} text-2xl text-[#d7ffe8] uppercase`}
            >
              Privacy and security policy
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#a1eec2]">
              <li>- Transcription runs locally on your machine.</li>
              <li>- Activity logs and audio remain on-device.</li>
              <li>- Online optimization is optional and user-triggered.</li>
              <li>- API key is required for online providers.</li>
              <li>- Disable online mode at any time from settings.</li>
            </ul>
          </article>

          <article className="rounded-xl border border-[#2f7a58] bg-[#0b1c15] p-6">
            <h2
              className={`${display.className} text-2xl text-[#d7ffe8] uppercase`}
            >
              Config matrix
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#9be5bb]">
              {setupLines.map((line) => (
                <li
                  className="rounded-md border border-[#2a6a4c] bg-[#09160f] px-3 py-2"
                  key={line}
                >
                  {line}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-xl border border-[#2f7a58] bg-[#09170f] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2
              className={`${display.className} text-2xl text-[#d9ffe8] uppercase`}
            >
              Benchmark report
            </h2>
            <span className="text-xs tracking-[0.2em] text-[#7ed6a4] uppercase">
              30s english audio
            </span>
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-[#2a6a4c]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#0d2218] text-[#a3efc4]">
                <tr>
                  <th className="border-b border-[#2a6a4c] px-4 py-3">
                    solution
                  </th>
                  <th className="border-b border-[#2a6a4c] px-4 py-3">time</th>
                </tr>
              </thead>
              <tbody>
                {bench.map(([name, time], index) => (
                  <tr
                    className={
                      index % 2 === 0 ? 'bg-[#0a1912]' : 'bg-[#08130e]'
                    }
                    key={name}
                  >
                    <td className="border-b border-[#1f5039] px-4 py-3">
                      {name}
                    </td>
                    <td className="border-b border-[#1f5039] px-4 py-3 font-bold text-[#95ffbf]">
                      {time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#9adeb8]">
            OiPer records the best speed while keeping transcription local and
            controllable.
          </p>
        </section>
      </div>
    </main>
  )
}
