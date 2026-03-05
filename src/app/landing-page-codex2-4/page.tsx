'use client'

export default function LandingPageCodex24() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">OiPer Desktop</p>
          <h1>Zero-latency dictation, built for people who type fast.</h1>
          <p className="hero-lead">
            OiPer is a privacy-first voice-to-text desktop app. Hold a global
            hotkey to record, release to transcribe, and inject text directly
            into your active application.
          </p>
          <div className="hero-actions">
            <button className="primary">Download for desktop</button>
            <button className="outline">Privacy policy</button>
          </div>
          <div className="hero-meta">
            <span>Local by default</span>
            <span>GPU acceleration</span>
            <span>LLM refinement optional</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="screen">
            <div className="screen-header">
              <span />
              <span />
              <span />
            </div>
            <div className="screen-body">
              <div className="signal" />
              <div className="screen-row">
                <strong>Hold</strong>
                <span>Global hotkey</span>
              </div>
              <div className="screen-row">
                <strong>Speak</strong>
                <span>Local transcription</span>
              </div>
              <div className="screen-row">
                <strong>Release</strong>
                <span>Instant injection</span>
              </div>
            </div>
          </div>
          <div className="floating-card">
            <h4>Avg. transcription</h4>
            <p>30s English sample</p>
            <div className="metric">1.5s</div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div>
          <h2>Core philosophy</h2>
          <p>Fast workflow, native performance, and user-controlled privacy.</p>
        </div>
        <div className="strip-grid">
          <div>
            <h3>User experience</h3>
            <p>Single hotkey flow with zero friction.</p>
          </div>
          <div>
            <h3>Performance</h3>
            <p>Native code and GPU acceleration for speed.</p>
          </div>
          <div>
            <h3>Privacy</h3>
            <p>Audio, logs, and text stay on-device by default.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div>
          <h2>Feature highlights</h2>
          <p>Everything you need to own your dictation workflow.</p>
        </div>
        <div className="features-grid">
          <article>
            <h4>Quick recording & transcription</h4>
            <p>Press and release workflow with instant injection.</p>
          </article>
          <article>
            <h4>Privacy-first architecture</h4>
            <p>Runs locally. Optional online services require your key.</p>
          </article>
          <article>
            <h4>Flexibility & control</h4>
            <p>Choose auto, CPU, or GPU backend. LLMs supported.</p>
          </article>
          <article>
            <h4>Settings & configuration</h4>
            <p>Model downloads, provider configuration, advanced options.</p>
          </article>
        </div>
      </section>

      <section className="privacy">
        <div className="privacy-card">
          <h3>Local processing</h3>
          <p>Transcription, logs, and audio stay on-device.</p>
        </div>
        <div className="privacy-card">
          <h3>Online services (optional)</h3>
          <p>Bring your own API key when you want cloud cleanup.</p>
        </div>
      </section>

      <section className="settings">
        <div>
          <h2>Configuration that scales with you.</h2>
          <p>Customize models, backends, and providers without complexity.</p>
        </div>
        <div className="settings-grid">
          <div>
            <h4>Speech & model management</h4>
            <p>Pick sizes, download, and switch instantly.</p>
          </div>
          <div>
            <h4>Backend preferences</h4>
            <p>Auto detection, CPU-only mode, or GPU acceleration.</p>
          </div>
          <div>
            <h4>Online provider configuration</h4>
            <p>Set base URL, API keys, and model names.</p>
          </div>
          <div>
            <h4>Advanced options</h4>
            <p>LLM transcription for technical terminology.</p>
          </div>
        </div>
      </section>

      <section className="bench">
        <div>
          <h2>Performance benchmarks</h2>
          <p>30 second English audio sample, end-to-end latency.</p>
        </div>
        <div className="bench-table">
          <div className="bench-row head">
            <span>Solution</span>
            <span>Time</span>
          </div>
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

      <section className="cta">
        <div>
          <h2>Get OiPer Desktop today.</h2>
          <p>Fast, private transcription that stays out of your way.</p>
        </div>
        <button className="primary">Start now</button>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');

        :global(body) {
          margin: 0;
          background: #111112;
          color: #f7f3ef;
        }

        .page {
          font-family: 'Work Sans', sans-serif;
          padding: 72px 8vw 96px;
          display: flex;
          flex-direction: column;
          gap: 92px;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(198, 130, 68, 0.25),
              transparent 45%
            ),
            radial-gradient(
              circle at 80% 0%,
              rgba(34, 128, 116, 0.25),
              transparent 45%
            ),
            #111112;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: 'Libre Caslon Text', serif;
          margin: 0 0 14px;
        }

        h1 {
          font-size: clamp(2.6rem, 4.3vw, 4.7rem);
          line-height: 1.05;
        }

        p {
          margin: 0 0 18px;
          line-height: 1.6;
          color: rgba(247, 243, 239, 0.75);
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 42px;
          align-items: center;
        }

        .hero-kicker {
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.7rem;
          color: #f1b36f;
          margin-bottom: 18px;
        }

        .hero-lead {
          font-size: 1.1rem;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        button {
          font-family: 'Work Sans', sans-serif;
          border: none;
          border-radius: 999px;
          padding: 14px 26px;
          cursor: pointer;
          font-weight: 600;
        }

        .primary {
          background: #f1b36f;
          color: #1b130b;
          box-shadow: 0 18px 40px rgba(241, 179, 111, 0.4);
        }

        .outline {
          background: transparent;
          color: #f1b36f;
          border: 1px solid #f1b36f;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: #f3d8b8;
          font-size: 0.9rem;
        }

        .hero-meta span {
          background: rgba(241, 179, 111, 0.12);
          padding: 6px 14px;
          border-radius: 999px;
        }

        .hero-visual {
          position: relative;
          display: grid;
          gap: 18px;
        }

        .screen {
          border-radius: 22px;
          background: #1b1c1f;
          padding: 20px;
          border: 1px solid rgba(241, 179, 111, 0.25);
        }

        .screen-header {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .screen-header span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #2c2c2f;
        }

        .screen-body {
          display: grid;
          gap: 14px;
        }

        .signal {
          height: 60px;
          border-radius: 14px;
          background: linear-gradient(
            90deg,
            rgba(241, 179, 111, 0.35),
            rgba(34, 128, 116, 0.4)
          );
        }

        .screen-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .floating-card {
          background: #f1b36f;
          color: #1b130b;
          border-radius: 18px;
          padding: 18px;
          width: fit-content;
          box-shadow: 0 16px 30px rgba(241, 179, 111, 0.35);
        }

        .metric {
          font-size: 2rem;
          font-weight: 700;
        }

        .strip,
        .features,
        .settings,
        .bench {
          display: grid;
          gap: 28px;
        }

        .strip-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .strip-grid div,
        .features-grid article,
        .settings-grid div {
          padding: 18px;
          border-radius: 16px;
          border: 1px solid rgba(247, 243, 239, 0.12);
          background: rgba(255, 255, 255, 0.02);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .privacy {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }

        .privacy-card {
          padding: 20px;
          border-radius: 18px;
          background: #1b1c1f;
          border: 1px solid rgba(241, 179, 111, 0.25);
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .bench-table {
          display: grid;
          gap: 12px;
        }

        .bench-row {
          display: flex;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid rgba(247, 243, 239, 0.12);
          background: rgba(255, 255, 255, 0.02);
        }

        .bench-row.head {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          color: rgba(247, 243, 239, 0.5);
        }

        .bench-row.highlight {
          background: rgba(241, 179, 111, 0.2);
          font-weight: 600;
        }

        .cta {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #1b1c1f;
          border-radius: 22px;
          padding: 30px;
          border: 1px solid rgba(241, 179, 111, 0.25);
        }

        @media (max-width: 720px) {
          .page {
            padding: 60px 6vw 72px;
          }

          .hero-visual {
            order: -1;
          }
        }
      `}</style>
    </main>
  )
}
