'use client'

export default function LandingPageCodex23() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-left">
          <p className="label">OiPer Desktop</p>
          <h1>Dictation that feels like a shortcut, not a workflow.</h1>
          <p className="lead">
            Hold a global hotkey, speak your thought, release to inject text
            into the active app. Designed for privacy, built for speed.
          </p>
          <div className="actions">
            <button className="primary">Get the desktop app</button>
            <button className="secondary">Explore privacy</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="stack">
            <div className="stack-card">
              <p className="stack-title">Quick recording</p>
              <p>Press, speak, release, done.</p>
            </div>
            <div className="stack-card">
              <p className="stack-title">Local transcription</p>
              <p>Audio stays on-device.</p>
            </div>
            <div className="stack-card">
              <p className="stack-title">Optional online cleanup</p>
              <p>Bring your own key.</p>
            </div>
          </div>
          <div className="hero-banner">
            <div className="banner-row">
              <span>Latency</span>
              <strong>1.5s</strong>
            </div>
            <div className="banner-row">
              <span>Backend</span>
              <strong>Auto / CPU / GPU</strong>
            </div>
            <div className="banner-row">
              <span>Models</span>
              <strong>Whisper + LLMs</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div>
          <h2>Privacy-first architecture.</h2>
          <p>
            Everything runs locally by default. Your audio and logs remain on
            your machine until you decide otherwise.
          </p>
        </div>
        <div className="split-cards">
          <div>
            <h3>Local processing</h3>
            <p>Transcription stays on-device with no hidden uploads.</p>
          </div>
          <div>
            <h3>Online services (optional)</h3>
            <p>Use your API key for cloud cleanup when you want it.</p>
          </div>
        </div>
      </section>

      <section className="flow">
        <div>
          <h2>Fast, seamless workflow.</h2>
          <p>Designed around the press-and-release hotkey loop.</p>
        </div>
        <div className="flow-grid">
          <div>
            <span className="step">01</span>
            <h3>Hold to record</h3>
            <p>Global hotkey, anywhere on your desktop.</p>
          </div>
          <div>
            <span className="step">02</span>
            <h3>Release to transcribe</h3>
            <p>Text appears instantly in the focused app.</p>
          </div>
          <div>
            <span className="step">03</span>
            <h3>Polish if needed</h3>
            <p>Local cleanup or online LLM refinement.</p>
          </div>
        </div>
      </section>

      <section className="settings">
        <div>
          <h2>Configurable without friction.</h2>
          <p>Pick models, tune backends, and manage providers in minutes.</p>
        </div>
        <div className="settings-grid">
          <article>
            <h4>Speech and model management</h4>
            <p>Multiple model sizes with easy downloads.</p>
          </article>
          <article>
            <h4>Backend preferences</h4>
            <p>Auto detection, CPU mode, GPU acceleration.</p>
          </article>
          <article>
            <h4>Online provider configuration</h4>
            <p>Custom base URLs, API keys, and model selection.</p>
          </article>
          <article>
            <h4>Advanced options</h4>
            <p>LLM transcription for technical vocabulary.</p>
          </article>
        </div>
      </section>

      <section className="benchmarks">
        <div>
          <h2>Benchmark results.</h2>
          <p>30 second English sample, end-to-end latency.</p>
        </div>
        <div className="bench-table">
          <div className="bench-row highlight">
            <span>OiPer Desktop</span>
            <span>1.5s</span>
          </div>
          <div className="bench-row">
            <span>Lemonfox API</span>
            <span>3.27s</span>
          </div>
          <div className="bench-row">
            <span>Python Faster-Whisper</span>
            <span>3.55s</span>
          </div>
          <div className="bench-row">
            <span>OpenAI Whisper 1 API</span>
            <span>6.46s</span>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Own the fastest transcription workflow.</h2>
          <p>Private by default, engineered for performance.</p>
        </div>
        <button className="primary">Download OiPer Desktop</button>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Manrope:wght@300;400;500;600&display=swap');

        :global(body) {
          margin: 0;
          background: #f6efe7;
          color: #1a1714;
        }

        .page {
          font-family: 'Manrope', sans-serif;
          padding: 80px 8vw 96px;
          display: flex;
          flex-direction: column;
          gap: 90px;
          background: linear-gradient(
            120deg,
            #f6efe7 10%,
            #f9fbfc 45%,
            #f6efe7 100%
          );
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: 'Fraunces', serif;
          margin: 0 0 14px;
        }

        h1 {
          font-size: clamp(2.6rem, 4.2vw, 4.8rem);
          line-height: 1.05;
        }

        p {
          margin: 0 0 18px;
          line-height: 1.6;
          color: #2d2926;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
        }

        .label {
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .lead {
          font-size: 1.05rem;
        }

        .actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        button {
          font-family: 'Manrope', sans-serif;
          border-radius: 999px;
          padding: 14px 24px;
          border: none;
          font-weight: 600;
        }

        .primary {
          background: #ffb347;
          color: #1a1714;
          box-shadow: 0 14px 30px rgba(255, 179, 71, 0.35);
        }

        .secondary {
          background: transparent;
          border: 1px solid #1a1714;
        }

        .hero-right {
          display: grid;
          gap: 24px;
        }

        .stack {
          display: grid;
          gap: 14px;
        }

        .stack-card {
          padding: 20px;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 12px 22px rgba(26, 23, 20, 0.08);
        }

        .stack-title {
          font-weight: 600;
        }

        .hero-banner {
          border-radius: 20px;
          padding: 22px;
          background: #1a1714;
          color: #f9f4ee;
          display: grid;
          gap: 12px;
        }

        .banner-row {
          display: flex;
          justify-content: space-between;
        }

        .split {
          display: grid;
          gap: 28px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          align-items: start;
        }

        .split-cards {
          display: grid;
          gap: 16px;
        }

        .split-cards div {
          padding: 18px;
          border-radius: 16px;
          background: #fffdfb;
          border: 1px solid #e4dbd0;
        }

        .flow {
          display: grid;
          gap: 28px;
        }

        .flow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .flow-grid div {
          padding: 18px;
          border-radius: 18px;
          background: #fffaf2;
          border: 1px solid #efe3d5;
        }

        .step {
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d47b24;
        }

        .settings {
          display: grid;
          gap: 26px;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .settings-grid article {
          padding: 18px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid #eee0d3;
        }

        .benchmarks {
          display: grid;
          gap: 20px;
        }

        .bench-table {
          display: grid;
          gap: 12px;
        }

        .bench-row {
          display: flex;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 16px;
          background: #fffdfb;
          border: 1px solid #eadfd2;
        }

        .bench-row.highlight {
          background: #1a1714;
          color: #f9f4ee;
          font-weight: 600;
        }

        .cta-band {
          background: #ffb347;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cta-band .primary {
          background: #1a1714;
          color: #f9f4ee;
        }

        @media (max-width: 720px) {
          .page {
            padding: 60px 6vw 72px;
          }
        }
      `}</style>
    </main>
  )
}
