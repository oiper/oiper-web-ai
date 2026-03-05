import { Libre_Baskerville, Work_Sans } from 'next/font/google'

const display = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const body = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const features = [
  {
    title: 'Quick Recording and Transcription',
    points: [
      'Global hotkey activation with simple press and release workflow',
      'Instant text injection into whichever application is active',
      'Optional text cleanup through local or online processing',
    ],
  },
  {
    title: 'Privacy-First Architecture',
    points: [
      'Transcription runs locally on your machine',
      'Audio and activity logs remain on-device',
      'No outbound data transfer without explicit user choice',
    ],
  },
  {
    title: 'Flexibility and Control',
    points: [
      'Choose backend mode: auto, cpu, or gpu',
      'Connect your preferred online provider with custom base URL',
      'Support for multiple LLMs for highly accurate specialized text',
    ],
  },
]

export default function LandingPageCodex2() {
  return (
    <main
      className={`${body.className} min-h-screen bg-[#f7f0e3] text-[#1e2833]`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <header className="border-y-2 border-[#2c3e4f] py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.2em] text-[#405464] uppercase">
            <span>OiPer Journal</span>
            <span>Desktop Edition</span>
            <span>Privacy and Performance Issue</span>
          </div>
        </header>

        <section className="mt-10 grid gap-8 border-b-2 border-[#2c3e4f] pb-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm tracking-[0.18em] text-[#4a6072] uppercase">
              Overview
            </p>
            <h1
              className={`${display.className} mt-3 text-4xl leading-tight md:text-6xl`}
            >
              The fastest way to dictate text without giving up control of your
              data
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#304353]">
              OiPer is a privacy-first voice-to-text desktop app built for speed
              and flow. Hold your global hotkey to record, release to
              transcribe, and watch text instantly appear in your active
              application.
            </p>
          </div>

          <aside className="rounded-sm border-2 border-[#2c3e4f] bg-[#efe4d1] p-5">
            <h2 className={`${display.className} text-2xl`}>Core Philosophy</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <strong>User Experience:</strong> Fast, seamless, intuitive flow
              </li>
              <li>
                <strong>Performance:</strong> Native implementation for real
                speed
              </li>
              <li>
                <strong>Privacy:</strong> Local-first with optional online
                services
              </li>
            </ul>
          </aside>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              className="border-2 border-[#2c3e4f] bg-[#fff9ee] p-6"
              key={feature.title}
            >
              <h2 className={`${display.className} text-2xl`}>
                {feature.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#304353]">
                {feature.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-8 border-y-2 border-[#2c3e4f] py-10 lg:grid-cols-2">
          <article className="space-y-4">
            <h2 className={`${display.className} text-3xl`}>
              Privacy and Security
            </h2>
            <p className="text-sm leading-relaxed text-[#304353]">
              Local processing keeps transcription, logs, and audio on-device by
              default. Nothing leaves your machine unless you explicitly enable
              an online provider.
            </p>
            <p className="text-sm leading-relaxed text-[#304353]">
              Online optimization is optional, API key based, and easy to turn
              off whenever you choose.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className={`${display.className} text-3xl`}>
              Settings and Configuration
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-[#304353]">
              <li>- Speech model downloads and model-size management</li>
              <li>
                - Backend switching for auto, cpu-only, or gpu acceleration
              </li>
              <li>- Base URL, API key, and model name configuration</li>
              <li>- Local or online text optimization selection</li>
              <li>- Advanced LLM transcription for specialized terminology</li>
            </ul>
          </article>
        </section>

        <section className="mt-10">
          <h2 className={`${display.className} text-3xl`}>
            Performance (30 sec English audio)
          </h2>
          <div className="mt-5 overflow-hidden border-2 border-[#2c3e4f]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#e8dbc5]">
                <tr>
                  <th className="border-b-2 border-[#2c3e4f] px-4 py-3">
                    Solution
                  </th>
                  <th className="border-b-2 border-[#2c3e4f] px-4 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#fff9ee] text-[#1e2833]">
                <tr>
                  <td className="border-b border-[#2c3e4f] px-4 py-3 font-semibold">
                    OiPer Desktop
                  </td>
                  <td className="border-b border-[#2c3e4f] px-4 py-3 font-bold text-[#0e3d5a]">
                    1.5s
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-[#2c3e4f] px-4 py-3">
                    Lemonfox API
                  </td>
                  <td className="border-b border-[#2c3e4f] px-4 py-3">3.27s</td>
                </tr>
                <tr>
                  <td className="border-b border-[#2c3e4f] px-4 py-3">
                    Python Faster-Whisper
                  </td>
                  <td className="border-b border-[#2c3e4f] px-4 py-3">3.55s</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">OpenAI Whisper 1 API</td>
                  <td className="px-4 py-3">6.46s</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[#304353]">
            OiPer delivers the fastest transcription while maintaining high
            quality and keeping your data under your control.
          </p>
        </section>
      </div>
    </main>
  )
}
