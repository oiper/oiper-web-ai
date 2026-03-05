'use client'

export default function LandingPageCodex21() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">OiPer Desktop</div>
          <h1>Voice to text at the speed of thought.</h1>
          <p>
            Hold a global hotkey to record, release to transcribe, and watch
            your words appear inside the app you are already using. OiPer keeps
            audio on-device and respects your workflow.
          </p>
          <div className="cta">
            <button className="primary">Download Desktop</button>
            <button className="ghost">Read the docs</button>
          </div>
          <div className="pill-row">
            <span>Local by default</span>
            <span>GPU acceleration</span>
            <span>Optional online polish</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-header">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="card-title">Live Inject</span>
          </div>
          <div className="card-body">
            <div className="wave" />
            <div className="keys">
              <div className="key">Hold</div>
              <div className="key">Speak</div>
              <div className="key">Release</div>
            </div>
            <div className="output">
              “Send the update by 3 PM, keep the file name the same.”
            </div>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="grid-title">
          <h2>Built on three pillars.</h2>
          <p>Experience, performance, and privacy, balanced for real work.</p>
        </div>
        <div className="grid-cards">
          <article>
            <h3>User Experience</h3>
            <p>Press and release. No waiting, no context switching.</p>
          </article>
          <article>
            <h3>Performance</h3>
            <p>Native code, GPU support, and low memory overhead.</p>
          </article>
          <article>
            <h3>Privacy</h3>
            <p>Everything stays on-device unless you opt into services.</p>
          </article>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Quick recording and transcription</h3>
          <ul>
            <li>Global hotkey press and release flow</li>
            <li>Instant text injection into active apps</li>
            <li>Local or online cleanup options</li>
          </ul>
        </div>
        <div className="feature">
          <h3>Privacy-first architecture</h3>
          <ul>
            <li>Local transcription with on-device logs</li>
            <li>No data leaves your machine without consent</li>
            <li>Full control over what is stored</li>
          </ul>
        </div>
        <div className="feature">
          <h3>Flexibility and control</h3>
          <ul>
            <li>Backend selection: auto, CPU, or GPU</li>
            <li>Multiple LLMs for accuracy boosts</li>
            <li>Local or online text optimization</li>
          </ul>
        </div>
      </section>

      <section className="config">
        <div>
          <h2>Settings that feel deliberate.</h2>
          <p>
            Manage models, configure providers, and tune transcription for your
            vocabulary without breaking your flow.
          </p>
        </div>
        <div className="config-grid">
          <div className="config-card">
            <h4>Speech and model management</h4>
            <p>Choose sizes, download quickly, and switch instantly.</p>
          </div>
          <div className="config-card">
            <h4>Backend preferences</h4>
            <p>Auto detection, CPU-only modes, and GPU acceleration.</p>
          </div>
          <div className="config-card">
            <h4>Online provider configuration</h4>
            <p>Base URL, API keys, model names, and cleanup policies.</p>
          </div>
          <div className="config-card">
            <h4>Advanced options</h4>
            <p>LLM transcription for technical or specialized content.</p>
          </div>
        </div>
      </section>

      <section className="bench">
        <div>
          <h2>Speed you can feel.</h2>
          <p>Benchmarked on a 30 second English sample.</p>
        </div>
        <div className="table">
          <div className="row header">
            <span>Solution</span>
            <span>Time</span>
          </div>
          <div className="row highlight">
            <span>OiPer Desktop</span>
            <span>1.5s</span>
          </div>
          <div className="row">
            <span>Lemonfox API</span>
            <span>3.27s</span>
          </div>
          <div className="row">
            <span>Python Faster-Whisper</span>
            <span>3.55s</span>
          </div>
          <div className="row">
            <span>OpenAI Whisper 1 API</span>
            <span>6.46s</span>
          </div>
        </div>
      </section>

      <section className="footer">
        <div>
          <h2>Own your voice workflow.</h2>
          <p>Privacy-first transcription, engineered for speed.</p>
        </div>
        <div className="cta">
          <button className="primary">Get OiPer Desktop</button>
          <button className="ghost">See release notes</button>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        :global(body) {
          margin: 0;
          background: #f5f3ef;
          color: #14110f;
        }

        .page {
          font-family: 'Source Sans 3', sans-serif;
          padding: 72px 8vw 96px;
          display: flex;
          flex-direction: column;
          gap: 96px;
          background: radial-gradient(
            circle at 15% 10%,
            #e9f5ff 0%,
            #f5f3ef 52%
          );
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: 'Epilogue', sans-serif;
          margin: 0 0 16px;
        }

        h1 {
          font-size: clamp(2.8rem, 3.6vw, 4.8rem);
          line-height: 1.05;
        }

        p {
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0 0 20px;
          color: #2c2a27;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          align-items: center;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          margin-bottom: 16px;
          color: #2c6e85;
          font-weight: 600;
        }

        .cta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        button {
          font-family: 'Epilogue', sans-serif;
          border: none;
          padding: 14px 24px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
        }

        .primary {
          background: #0b7285;
          color: #f5f3ef;
          box-shadow: 0 12px 24px rgba(11, 114, 133, 0.25);
        }

        .ghost {
          background: transparent;
          color: #0b7285;
          border: 1px solid #0b7285;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.9rem;
          color: #1b3a42;
        }

        .pill-row span {
          background: #e3eef1;
          padding: 6px 14px;
          border-radius: 999px;
        }

        .hero-card {
          background: #121417;
          color: #fefbf7;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 30px 60px rgba(18, 20, 23, 0.35);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #3d454c;
          border-radius: 50%;
        }

        .card-title {
          margin-left: auto;
          font-size: 0.9rem;
          color: #94a7b0;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .wave {
          height: 80px;
          border-radius: 18px;
          background: linear-gradient(90deg, #19a0b8, #4dd6ae, #19a0b8);
          background-size: 200% 100%;
          animation: pulse 6s ease-in-out infinite;
        }

        .keys {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .key {
          padding: 8px 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.85rem;
        }

        .output {
          font-size: 1rem;
          color: #f0f5f7;
          line-height: 1.5;
        }

        .grid {
          display: grid;
          gap: 32px;
        }

        .grid-title {
          max-width: 520px;
        }

        .grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .grid-cards article {
          padding: 24px;
          border-radius: 20px;
          background: #fffdfa;
          border: 1px solid #e6ded3;
          box-shadow: inset 0 0 0 1px rgba(11, 114, 133, 0.05);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .feature {
          background: #fdf8f2;
          border-radius: 24px;
          padding: 24px;
          border: 1px solid #eadfd1;
        }

        ul {
          padding-left: 18px;
          margin: 0;
          color: #3a3834;
        }

        li {
          margin-bottom: 10px;
        }

        .config {
          display: grid;
          gap: 32px;
          align-items: start;
        }

        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .config-card {
          padding: 20px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid #e1e6ea;
        }

        .bench {
          display: grid;
          gap: 24px;
        }

        .table {
          background: #0b0f12;
          color: #e4f6f6;
          border-radius: 18px;
          padding: 8px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          padding: 14px 18px;
          border-radius: 12px;
        }

        .row.header {
          color: #9fb2b9;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .row.highlight {
          background: linear-gradient(
            90deg,
            rgba(25, 160, 184, 0.4),
            rgba(77, 214, 174, 0.2)
          );
          font-weight: 600;
        }

        .footer {
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
          background: #0b7285;
          color: #f6f8f9;
          border-radius: 28px;
          padding: 32px;
        }

        .footer p {
          color: #e0f2f5;
        }

        .footer .ghost {
          border-color: #f6f8f9;
          color: #f6f8f9;
        }

        @keyframes pulse {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (max-width: 720px) {
          .page {
            padding: 56px 6vw 72px;
          }

          .hero-card {
            order: -1;
          }

          .cta {
            width: 100%;
          }
        }
      `}</style>
    </main>
  )
}
