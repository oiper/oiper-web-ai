import { Manrope, Orbitron } from 'next/font/google'

const heading = Orbitron({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
})

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const pillars = [
  {
    title: 'User Experience',
    text: 'Hold a global hotkey to talk, release to transcribe, and keep writing without breaking focus.',
  },
  {
    title: 'Performance',
    text: 'Native code, GPU acceleration where available, and very low latency for daily heavy usage.',
  },
  {
    title: 'Privacy',
    text: 'Speech processing runs on-device by default with optional online services only when you decide.',
  },
]

const settings = [
  'Speech model selection with one-click downloads',
  'Backend preferences: auto, cpu, or gpu',
  'Custom base URL, model name, and API key support',
  'Text cleanup using local or online processing',
  'Advanced LLM transcription for technical vocabulary',
]

export default function LandingPageCodex1() {
  return (
    <main
      className={`${body.className} relative min-h-screen overflow-hidden bg-[#02060c] text-[#d7ebf4]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(4,214,255,0.2),transparent_36%),radial-gradient(circle_at_80%_15%,rgba(255,159,64,0.2),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(23,137,255,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 [background-size:72px_72px] opacity-30 [background:linear-gradient(to_right,rgba(94,162,195,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(94,162,195,0.08)_1px,transparent_1px)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-8 pb-20 md:px-10 md:pt-10">
        <header className="flex items-center justify-between">
          <div
            className={`${heading.className} text-lg tracking-[0.26em] text-[#82e9ff]`}
          >
            OIPER DESKTOP
          </div>
          <div className="rounded-full border border-[#2f7f96] bg-[#0a1a28]/80 px-4 py-2 text-xs tracking-[0.2em] text-[#a8d8e7] uppercase">
            Privacy-first voice workflow
          </div>
        </header>

        <section className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <p className="max-w-2xl text-xs tracking-[0.22em] text-[#8ed6eb] uppercase">
              Press hotkey. Speak naturally. Release. Text appears instantly.
            </p>
            <h1
              className={`${heading.className} max-w-3xl text-4xl leading-[0.95] font-black text-[#ebfbff] uppercase md:text-6xl`}
            >
              Desktop dictation built for speed, focus, and full user control
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#b6d5df] md:text-lg">
              OiPer turns your voice into text in moments and injects it into
              the active app. It keeps speech processing local by default, then
              lets you selectively enable online optimization with your own API
              key.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[#1a7d9e] bg-[#062130] px-5 py-3 text-sm font-semibold text-[#9ce9ff]">
                Native performance
              </span>
              <span className="rounded-full border border-[#90571f] bg-[#271909] px-5 py-3 text-sm font-semibold text-[#ffd7a2]">
                Local-first privacy
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#1f4a5d] bg-[#061621]/90 p-6 shadow-[0_0_0_1px_rgba(127,225,255,0.08),0_25px_70px_rgba(0,0,0,0.45)]">
            <p className="text-xs tracking-[0.2em] text-[#89d0e4] uppercase">
              30-second audio benchmark
            </p>
            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-2xl border border-[#25637a] bg-[#0a2635] p-4">
                <div className="flex items-center justify-between text-[#d9f8ff]">
                  <span className="font-semibold">OiPer Desktop</span>
                  <span className="text-xl font-black text-[#66f1ff]">
                    1.5s
                  </span>
                </div>
                <p className="mt-2 text-[#9fc7d4]">
                  Fastest result with high-quality output and local processing.
                </p>
              </div>
              <div className="rounded-2xl border border-[#2d4759] bg-[#0a1822] p-4 text-[#a9c5d0]">
                Lemonfox API 3.27s · Python Faster-Whisper 3.55s · OpenAI
                Whisper 1 API 6.46s
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              className="rounded-3xl border border-[#20495e] bg-[#071a27]/80 p-6 shadow-[0_15px_45px_rgba(1,8,16,0.45)]"
              key={pillar.title}
            >
              <h2
                className={`${heading.className} text-xl text-[#e5f8ff] uppercase`}
              >
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#a9c8d4]">
                {pillar.text}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-[#1d4151] bg-[#051520]/75 p-8 lg:grid-cols-2">
          <div>
            <h2
              className={`${heading.className} text-3xl text-[#dff6ff] uppercase`}
            >
              Quick recording flow
            </h2>
            <ol className="mt-6 space-y-3 text-sm text-[#afcdd8]">
              <li className="rounded-xl border border-[#234d61] bg-[#0a202f] p-4">
                1. Hold global hotkey and start speaking.
              </li>
              <li className="rounded-xl border border-[#234d61] bg-[#0a202f] p-4">
                2. Release key to transcribe immediately.
              </li>
              <li className="rounded-xl border border-[#234d61] bg-[#0a202f] p-4">
                3. Inject text into your active application.
              </li>
              <li className="rounded-xl border border-[#234d61] bg-[#0a202f] p-4">
                4. Optionally run local or online text cleanup.
              </li>
            </ol>
          </div>

          <div className="space-y-5">
            <h3
              className={`${heading.className} text-2xl text-[#dff6ff] uppercase`}
            >
              Privacy and security
            </h3>
            <div className="rounded-2xl border border-[#255068] bg-[#081e2d] p-5 text-sm text-[#a6c5d1]">
              Transcription, logs, and audio stay on-device by default. No data
              is sent anywhere unless you explicitly switch on an online
              provider.
            </div>
            <div className="rounded-2xl border border-[#65451f] bg-[#24190d] p-5 text-sm text-[#e5c79a]">
              Online optimization is optional and reversible at any time. You
              control API key usage, base URL, and model settings.
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#22485a] bg-[#081825]/90 p-7">
            <h2
              className={`${heading.className} text-3xl text-[#ebfaff] uppercase`}
            >
              Settings and configuration
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-[#abccd9]">
              {settings.map((item) => (
                <li
                  className="rounded-xl border border-[#28566b] bg-[#0b2232] p-4"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#244151] bg-[#091723]/90 p-7">
            <h2
              className={`${heading.className} text-2xl text-[#e5f6ff] uppercase`}
            >
              Accuracy upgrades
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#b0ceda]">
              Route transcription through an LLM when you need extra precision
              for technical terms, specialized jargon, or domain-heavy writing.
              OiPer supports lightweight options like Gemini 2.5 Flash Lite and
              other compact models.
            </p>
            <div className="mt-6 rounded-2xl border border-[#2f5a6f] bg-[#0d2636] p-5 text-sm text-[#a8d0dd]">
              Local for privacy, online for additional cleanup, or hybrid for
              the best of both worlds.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
