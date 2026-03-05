'use client'

export default function LandingPageCodex25() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-left">
          <div className="badge">OiPer Desktop</div>
          <h1>
            Desktop dictation for people who care about speed and privacy.
          </h1>
          <p>
            Hold a global hotkey to record, release to transcribe, and inject
            the text into your active app. Local by default, online only when
            you choose.
          </p>
          <div className="hero-actions">
            <button className="primary">Download</button>
            <button className="outline">See how it works</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="orbit" />
          <div className="stat-card">
            <h3>1.5s</h3>
            <p>30s audio benchmark</p>
          </div>
          <div className="stat-card ghost">
            <h3>On-device</h3>
            <p>Audio and logs stay local</p>
          </div>
          <div className="stat-card">
            <h3>Hotkey</h3>
            <p>Hold → speak → release</p>
          </div>
        </div>
      </section>

      <section className="band">
        <div>
          <h2>Core philosophy</h2>
          <p>Experience, performance, and privacy built into every release.</p>
        </div>
        <div className="band-grid">
          <div>
            <h3>User experience</h3>
            <p>Fast and intuitive, no workflow overhead.</p>
          </div>
          <div>
            <h3>Performance</h3>
            <p>Native code with GPU acceleration where available.</p>
          </div>
          <div>
            <h3>Privacy</h3>
            <p>Local transcription with optional online services.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-left">
          <h2>Everything you need to control transcription.</h2>
          <p>
            OiPer gives you the choice between local and online text
            optimization, multiple backends, and configurable models.
          </p>
        </div>
        <div className="features-right">
          <div>
            <h4>Quick recording & transcription</h4>
            <p>Global hotkey, instant injection, local cleanup.</p>
          </div>
          <div>
            <h4>Privacy-first architecture</h4>
            <p>Everything stays on-device unless you opt in.</p>
          </div>
          <div>
            <h4>Flexibility & control</h4>
            <p>Choose auto, CPU, GPU, and multiple LLMs.</p>
          </div>
        </div>
      </section>

      <section className="settings">
        <div>
          <h2>Settings and configuration</h2>
          <p>Every preference exposed without clutter.</p>
        </div>
        <div className="settings-grid">
          <div>
            <h4>Speech & model management</h4>
            <p>Easy downloads, model size control, quick switching.</p>
          </div>
          <div>
            <h4>Backend preferences</h4>
            <p>Auto detect, CPU-only, or GPU acceleration.</p>
          </div>
          <div>
            <h4>Online provider configuration</h4>
            <p>Custom base URL, API key, and model names.</p>
          </div>
          <div>
            <h4>Advanced options</h4>
            <p>LLM transcription for specialized language.</p>
          </div>
        </div>
      </section>

      <section className="bench">
        <div>
          <h2>Performance benchmarks</h2>
          <p>30 second English audio, end-to-end latency.</p>
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

      <section className="cta">
        <div>
          <h2>Ready for a faster workflow?</h2>
          <p>Install OiPer Desktop and dictate at the speed of thought.</p>
        </div>
        <button className="primary">Get OiPer Desktop</button>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&family=Zilla+Slab:wght@400;600;700&display=swap');

        :global(body) {
          margin: 0;
          background: #f2f5f4;
          color: #0e1a1b;
        }

        .page {
          font-family: 'Rubik', sans-serif;
          padding: 70px 8vw 96px;
          display: flex;
          flex-direction: column;
          gap: 90px;
          background: linear-gradient(150deg, #f2f5f4 20%, #e3efe8 70%);
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: 'Zilla Slab', serif;
          margin: 0 0 14px;
        }

        h1 {
          font-size: clamp(2.5rem, 4.3vw, 4.6rem);
          line-height: 1.05;
        }

        p {
          margin: 0 0 18px;
          line-height: 1.6;
          color: #24383a;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 36px;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid #0e1a1b;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        button {
          font-family: 'Rubik', sans-serif;
          padding: 14px 24px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .primary {
          background: #0e1a1b;
          color: #f2f5f4;
          box-shadow: 0 14px 30px rgba(14, 26, 27, 0.2);
        }

        .outline {
          background: transparent;
          border: 1px solid #0e1a1b;
        }

        .hero-right {
          position: relative;
          display: grid;
          gap: 16px;
        }

        .orbit {
          position: absolute;
          inset: -40px -20px;
          border-radius: 40px;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(36, 56, 58, 0.2),
              transparent 55%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(14, 26, 27, 0.25),
              transparent 60%
            );
          z-index: 0;
        }

        .stat-card {
          position: relative;
          z-index: 1;
          padding: 18px;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 16px 40px rgba(14, 26, 27, 0.12);
        }

        .stat-card.ghost {
          background: #0e1a1b;
          color: #f2f5f4;
        }

        .band,
        .settings,
        .bench {
          display: grid;
          gap: 24px;
        }

        .band-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .band-grid div,
        .features-right div,
        .settings-grid div {
          background: #ffffff;
          padding: 18px;
          border-radius: 18px;
          box-shadow: 0 10px 22px rgba(14, 26, 27, 0.08);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          align-items: start;
        }

        .features-right {
          display: grid;
          gap: 16px;
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
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 8px 18px rgba(14, 26, 27, 0.08);
        }

        .bench-row.highlight {
          background: #0e1a1b;
          color: #f2f5f4;
          font-weight: 600;
        }

        .cta {
          background: #0e1a1b;
          color: #f2f5f4;
          padding: 32px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cta p {
          color: rgba(242, 245, 244, 0.7);
        }

        .cta .primary {
          background: #f2f5f4;
          color: #0e1a1b;
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
