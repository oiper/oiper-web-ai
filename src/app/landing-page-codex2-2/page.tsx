'use client'

export default function LandingPageCodex22() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">OiPer Desktop</div>
        <nav>
          <a>Features</a>
          <a>Privacy</a>
          <a>Settings</a>
          <a>Benchmarks</a>
        </nav>
        <button className="cta">Get the app</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="tag">Privacy-first transcription</div>
          <h1>Press. Speak. Release. OiPer writes it everywhere.</h1>
          <p>
            OiPer Desktop is built for speed. A single global hotkey records the
            moment, then injects text into your active app with zero lag.
          </p>
          <div className="hero-actions">
            <button className="cta">Download for desktop</button>
            <button className="ghost">View documentation</button>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-header">
            <span>Live Session</span>
            <span className="status">Local</span>
          </div>
          <div className="panel-body">
            <div className="meter" />
            <div className="panel-steps">
              <div>
                <strong>Hold</strong>
                <p>Global hotkey capture</p>
              </div>
              <div>
                <strong>Speak</strong>
                <p>Noise-tuned local model</p>
              </div>
              <div>
                <strong>Release</strong>
                <p>Instant text injection</p>
              </div>
            </div>
            <div className="panel-output">
              “Draft the response, keep the tone friendly, and send.”
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div>
          <h2>Three pillars, engineered.</h2>
          <p>Fast workflow, native performance, and privacy by default.</p>
        </div>
        <div className="pillar-grid">
          <article>
            <h3>User Experience</h3>
            <p>One hotkey. One effortless flow. No UI overhead.</p>
          </article>
          <article>
            <h3>Performance</h3>
            <p>Native code with GPU acceleration and low latency.</p>
          </article>
          <article>
            <h3>Privacy</h3>
            <p>Audio and activity logs stay on-device by default.</p>
          </article>
        </div>
      </section>

      <section className="privacy">
        <div className="privacy-card">
          <h3>Local processing</h3>
          <p>
            Transcription stays on your machine. Nothing leaves without explicit
            consent.
          </p>
        </div>
        <div className="privacy-card alt">
          <h3>Optional online services</h3>
          <p>
            Plug in your own API key to enable online cleanup, or keep it local
            forever.
          </p>
        </div>
      </section>

      <section className="settings">
        <h2>Control every lever.</h2>
        <div className="settings-grid">
          <div>
            <h4>Speech and model management</h4>
            <p>Choose model size, download instantly, switch with one click.</p>
          </div>
          <div>
            <h4>Backend preferences</h4>
            <p>Auto detect, CPU-only, or GPU acceleration modes.</p>
          </div>
          <div>
            <h4>Online provider configuration</h4>
            <p>Custom base URL, API key storage, model names.</p>
          </div>
          <div>
            <h4>Advanced options</h4>
            <p>LLM transcription for technical or specialized language.</p>
          </div>
        </div>
      </section>

      <section className="benchmarks">
        <div>
          <h2>Benchmark reality.</h2>
          <p>30 second English sample, measured end-to-end.</p>
        </div>
        <div className="bench-grid">
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

      <section className="footer">
        <div>
          <h2>Ship faster with voice.</h2>
          <p>Designed for teams that care about privacy and speed.</p>
        </div>
        <div className="footer-actions">
          <button className="cta">Start with OiPer</button>
          <button className="ghost">Read the changelog</button>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        :global(body) {
          margin: 0;
          background: #0d1114;
          color: #e9f2f4;
        }

        .page {
          font-family: 'IBM Plex Sans', sans-serif;
          padding: 48px 7vw 90px;
          display: flex;
          flex-direction: column;
          gap: 90px;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(14, 160, 177, 0.08),
              rgba(14, 160, 177, 0.08) 1px,
              transparent 1px,
              transparent 36px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(14, 160, 177, 0.08),
              rgba(14, 160, 177, 0.08) 1px,
              transparent 1px,
              transparent 36px
            );
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: 'Chakra Petch', sans-serif;
          margin: 0 0 12px;
        }

        h1 {
          font-size: clamp(2.6rem, 4vw, 4.6rem);
          line-height: 1.05;
        }

        p {
          color: rgba(233, 242, 244, 0.72);
          margin: 0 0 18px;
          line-height: 1.6;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        nav {
          display: flex;
          gap: 18px;
          font-size: 0.95rem;
        }

        nav a {
          color: rgba(233, 242, 244, 0.7);
        }

        button {
          font-family: 'Chakra Petch', sans-serif;
          border: none;
          border-radius: 10px;
          padding: 12px 20px;
          cursor: pointer;
        }

        .cta {
          background: #10a9bb;
          color: #061214;
          box-shadow: 0 20px 30px rgba(16, 169, 187, 0.25);
        }

        .ghost {
          background: transparent;
          color: #10a9bb;
          border: 1px solid #10a9bb;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 36px;
          align-items: center;
        }

        .tag {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          margin-bottom: 14px;
          color: #69f3ff;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-panel {
          border: 1px solid rgba(105, 243, 255, 0.3);
          border-radius: 18px;
          padding: 20px;
          background: rgba(5, 15, 18, 0.8);
          box-shadow: inset 0 0 0 1px rgba(105, 243, 255, 0.2);
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #8fd9e1;
          margin-bottom: 20px;
        }

        .status {
          color: #1ff6a7;
        }

        .panel-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .meter {
          height: 72px;
          background: linear-gradient(90deg, #1ff6a7 0%, #0ea0b1 70%);
          border-radius: 12px;
          opacity: 0.9;
        }

        .panel-steps {
          display: grid;
          gap: 10px;
        }

        .panel-steps strong {
          display: block;
          font-size: 1rem;
        }

        .panel-steps p {
          margin: 0;
          font-size: 0.9rem;
        }

        .panel-output {
          font-size: 1rem;
          line-height: 1.5;
          color: #e9f2f4;
        }

        .pillars,
        .settings,
        .benchmarks {
          display: grid;
          gap: 28px;
        }

        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .pillar-grid article,
        .settings-grid div {
          border: 1px solid rgba(105, 243, 255, 0.2);
          border-radius: 14px;
          padding: 18px;
          background: rgba(6, 17, 20, 0.65);
        }

        .privacy {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .privacy-card {
          padding: 24px;
          border-radius: 16px;
          border: 1px solid rgba(105, 243, 255, 0.25);
          background: rgba(5, 13, 16, 0.8);
        }

        .privacy-card.alt {
          background: #132326;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .bench-grid {
          display: grid;
          gap: 12px;
        }

        .bench-row {
          display: flex;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1px solid rgba(105, 243, 255, 0.18);
          background: rgba(5, 15, 18, 0.7);
        }

        .bench-row.highlight {
          background: linear-gradient(
            90deg,
            rgba(31, 246, 167, 0.25),
            rgba(14, 160, 177, 0.25)
          );
          border-color: rgba(31, 246, 167, 0.6);
          font-weight: 600;
        }

        .footer {
          border: 1px solid rgba(31, 246, 167, 0.4);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: rgba(5, 15, 18, 0.9);
        }

        .footer-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 860px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </main>
  )
}
