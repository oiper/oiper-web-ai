import { Archivo_Black, Nunito_Sans } from 'next/font/google'

const display = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
})

const body = Nunito_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

const speedData = [
  { name: 'OiPer Desktop', value: '1.5s', width: '100%' },
  { name: 'Lemonfox API', value: '3.27s', width: '46%' },
  { name: 'Python Faster-Whisper', value: '3.55s', width: '42%' },
  { name: 'OpenAI Whisper 1 API', value: '6.46s', width: '24%' },
]

export default function LandingPageCodex3() {
  return (
    <main
      className={`${body.className} min-h-screen bg-[#f5edd4] text-[#1b130b]`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 md:px-10 md:py-10">
        <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-4 border-[#1b130b] bg-[#ff6b2b] p-8 shadow-[10px_10px_0_0_#1b130b]">
            <p className="text-xs font-extrabold tracking-[0.22em] text-[#fff0d6] uppercase">
              Voice to text. No delay.
            </p>
            <h1
              className={`${display.className} mt-5 text-4xl leading-[0.93] text-[#fff5e8] uppercase md:text-6xl`}
            >
              OiPer Desktop is built for relentless typing speed
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed font-semibold text-[#ffe0bf]">
              Hold your global hotkey, speak, release, and your words appear in
              the app you are already using. No context switch, no cloud
              lock-in, no hidden trade-offs.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="border-4 border-[#1b130b] bg-[#1b130b] p-6 text-[#f5edd4] shadow-[8px_8px_0_0_#ff6b2b]">
              <h2 className={`${display.className} text-2xl uppercase`}>
                Core philosophy
              </h2>
              <ul className="mt-4 space-y-2 text-sm font-bold">
                <li>UX: Press, speak, release, done.</li>
                <li>Performance: Native code for real responsiveness.</li>
                <li>Privacy: Local-first architecture by default.</li>
              </ul>
            </div>
            <div className="border-4 border-[#1b130b] bg-[#ffcc28] p-6 shadow-[8px_8px_0_0_#1b130b]">
              <h2 className={`${display.className} text-2xl uppercase`}>
                Fastest benchmark
              </h2>
              <p className="mt-2 text-sm font-extrabold uppercase">
                30 sec English audio
              </p>
              <p className="mt-3 text-3xl font-black">OiPer Desktop: 1.5s</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="border-4 border-[#1b130b] bg-[#fff7e6] p-6 shadow-[8px_8px_0_0_#1b130b]">
            <h2 className={`${display.className} text-2xl uppercase`}>
              Quick workflow
            </h2>
            <ol className="mt-4 space-y-2 text-sm leading-relaxed font-semibold">
              <li>1) Hold the global hotkey.</li>
              <li>2) Speak naturally.</li>
              <li>3) Release to transcribe.</li>
              <li>4) Text injects into your active app.</li>
              <li>5) Optional local or online cleanup.</li>
            </ol>
          </article>

          <article className="border-4 border-[#1b130b] bg-[#c9f07c] p-6 shadow-[8px_8px_0_0_#1b130b]">
            <h2 className={`${display.className} text-2xl uppercase`}>
              Privacy and security
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed font-semibold">
              <li>Local transcription on your machine.</li>
              <li>Audio and logs stay on-device.</li>
              <li>No silent data transfer.</li>
              <li>Online mode is optional and explicit.</li>
              <li>API key remains user-controlled.</li>
            </ul>
          </article>

          <article className="border-4 border-[#1b130b] bg-[#9cd8ff] p-6 shadow-[8px_8px_0_0_#1b130b]">
            <h2 className={`${display.className} text-2xl uppercase`}>
              Configuration depth
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed font-semibold">
              <li>Speech model downloads and sizing options.</li>
              <li>Backend control: auto, cpu, gpu.</li>
              <li>Custom base URL and model name setup.</li>
              <li>Local or online optimization switching.</li>
              <li>Advanced LLM transcription for difficult terms.</li>
            </ul>
          </article>
        </section>

        <section className="border-4 border-[#1b130b] bg-[#fff7e6] p-6 shadow-[10px_10px_0_0_#1b130b] md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={`${display.className} text-3xl uppercase`}>
              Performance chart
            </h2>
            <p className="text-sm font-extrabold tracking-[0.18em] uppercase">
              Lower is faster
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {speedData.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex justify-between text-sm font-bold uppercase">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-5 border-2 border-[#1b130b] bg-[#f5edd4]">
                  <div
                    className="h-full bg-[#ff6b2b]"
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed font-semibold">
            OiPer stays ahead with extremely fast local transcription, high
            quality output, and full user authority over privacy choices.
          </p>
        </section>
      </div>
    </main>
  )
}
