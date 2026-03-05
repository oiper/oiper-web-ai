import { Cormorant_Garamond, Raleway } from 'next/font/google'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const body = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const features = [
  {
    num: '01',
    title: 'Press & Release',
    desc: 'Hold any global hotkey to begin recording. Release to transcribe. An interaction so natural it disappears.',
  },
  {
    num: '02',
    title: 'Purely Local',
    desc: 'Whisper runs on your own hardware. Your voice, your words, your machine — never surrendered to a server.',
  },
  {
    num: '03',
    title: 'Instant Injection',
    desc: 'Transcribed text arrives in your active application. No clipboard, no paste, no interruption.',
  },
  {
    num: '04',
    title: 'GPU Accelerated',
    desc: 'CUDA and Metal support built in. Leverage your graphics card for inference that feels instantaneous.',
  },
  {
    num: '05',
    title: 'Optional Refinement',
    desc: 'Engage any LLM — local or cloud — for text cleanup. Always opt-in, always under your control.',
  },
  {
    num: '06',
    title: 'Model Freedom',
    desc: 'Choose your Whisper model. Tiny for speed, Large for precision. Download and switch from within the app.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: '1.5s', pct: 23, winner: true },
  { name: 'Lemonfox API', time: '3.27s', pct: 51, winner: false },
  { name: 'Python Faster-Whisper', time: '3.55s', pct: 55, winner: false },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', pct: 100, winner: false },
]

export default function LandingPage2() {
  return (
    <div
      className={body.className}
      style={{ background: '#f7f2eb', color: '#1a1528', minHeight: '100vh' }}
    >
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes lineGrow{from{width:0}to{width:100%}}
        .reveal{animation:fadeUp .9s cubic-bezier(.16,1,.3,1) both}
        .reveal-1{animation-delay:.1s}
        .reveal-2{animation-delay:.25s}
        .reveal-3{animation-delay:.4s}
        .reveal-4{animation-delay:.55s}
        .feat-item{border-top:1px solid rgba(26,21,40,.12);padding:28px 0;transition:background .3s}
        .feat-item:hover{background:rgba(186,148,62,.04)}
        .feat-num{font-size:11px;letter-spacing:.25em;color:rgba(186,148,62,.6);margin-bottom:12px}
        .btn-primary{
          display:inline-block;background:#1a1528;color:#f7f2eb;
          padding:15px 48px;font-size:12px;letter-spacing:.22em;text-transform:uppercase;
          border:none;cursor:pointer;transition:background .25s;font-family:inherit;
        }
        .btn-primary:hover{background:#2d2540}
        .btn-outline{
          display:inline-block;background:transparent;color:#1a1528;
          padding:14px 46px;font-size:12px;letter-spacing:.22em;text-transform:uppercase;
          border:1px solid rgba(26,21,40,.35);cursor:pointer;transition:all .25s;font-family:inherit;
        }
        .btn-outline:hover{border-color:#1a1528;background:rgba(26,21,40,.04)}
        .gold{color:#ba943e}
        .bench-bar-bg{height:2px;background:rgba(26,21,40,.08);position:relative;overflow:hidden}
        .bench-bar-fill{height:100%;background:#ba943e;animation:lineGrow 1.2s cubic-bezier(.16,1,.3,1) both}
        .nav-link{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:rgba(26,21,40,.45);cursor:pointer;transition:color .2s}
        .nav-link:hover{color:#1a1528}
        .pillar:hover .pillar-line{width:100%!important}
        .pillar-line{transition:width .4s cubic-bezier(.16,1,.3,1)!important}
        .priv-item{padding:32px;border:1px solid rgba(26,21,40,.08);transition:border-color .3s,box-shadow .3s}
        .priv-item:hover{border-color:rgba(186,148,62,.3);box-shadow:0 4px 24px rgba(186,148,62,.06)}
      `}</style>

      {/* Nav */}
      <nav
        style={{
          padding: '24px 64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(26,21,40,0.08)',
        }}
      >
        <div
          className={display.className}
          style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '0.08em' }}
        >
          OiPer
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          {['Features', 'Performance', 'Privacy', 'Download'].map((n) => (
            <span key={n} className="nav-link">
              {n}
            </span>
          ))}
        </div>
        <button
          className="btn-primary"
          style={{ padding: '10px 28px', fontSize: '11px' }}
        >
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: '100px 64px',
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '64px',
            width: '420px',
            height: '420px',
            background:
              'radial-gradient(circle, rgba(186,148,62,0.09) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '680px' }}>
          <div
            className="reveal reveal-1"
            style={{
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: '#ba943e',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Voice-to-Text — Privacy First
          </div>
          <h1
            className={`${display.className} reveal reveal-2`}
            style={{
              fontSize: '96px',
              fontWeight: 300,
              lineHeight: '0.92',
              marginBottom: '36px',
              letterSpacing: '-0.01em',
            }}
          >
            Your Voice.
            <br />
            <em style={{ color: '#ba943e' }}>Your Machine.</em>
            <br />
            Your Words.
          </h1>
          <p
            className="reveal reveal-3"
            style={{
              fontSize: '17px',
              lineHeight: '1.85',
              color: 'rgba(26,21,40,0.6)',
              marginBottom: '48px',
              maxWidth: '520px',
              fontWeight: 300,
            }}
          >
            OiPer Desktop transcribes speech to text at native speed — entirely
            on your device. Hold a hotkey, speak, release. Done in 1.5 seconds.
          </p>
          <div
            className="reveal reveal-4"
            style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
          >
            <button className="btn-primary">Download Free</button>
            <button className="btn-outline">View Docs</button>
          </div>
        </div>

        {/* Floating stat cards */}
        <div
          style={{
            position: 'absolute',
            right: '64px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {[
            { v: '1.5s', l: 'Transcription Time', sub: '30s audio' },
            { v: '100%', l: 'On-Device Processing', sub: 'Zero cloud' },
            { v: '2.18×', l: 'Faster than APIs', sub: 'Benchmarked' },
          ].map(({ v, l, sub }) => (
            <div
              key={l}
              style={{
                background: '#fff',
                border: '1px solid rgba(26,21,40,0.07)',
                padding: '20px 28px',
                boxShadow: '0 4px 32px rgba(26,21,40,0.06)',
                minWidth: '200px',
              }}
            >
              <div
                className={display.className}
                style={{
                  fontSize: '44px',
                  fontWeight: 600,
                  color: '#1a1528',
                  lineHeight: 1,
                }}
              >
                {v}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(26,21,40,0.55)',
                  marginTop: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                {l}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  color: '#ba943e',
                  marginTop: '3px',
                  letterSpacing: '0.12em',
                }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ padding: '0 64px' }}>
        <div style={{ height: '1px', background: 'rgba(26,21,40,0.08)' }} />
      </div>

      {/* Three pillars */}
      <section
        style={{
          padding: '80px 64px',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '0',
        }}
      >
        {[
          {
            icon: '◆',
            title: 'Experience',
            desc: "A workflow that becomes invisible. Hold, speak, release — and you're done.",
          },
          {
            icon: '◆',
            title: 'Performance',
            desc: 'Native code. GPU acceleration. Results in 1.5 seconds. Not a round-trip.',
          },
          {
            icon: '◆',
            title: 'Privacy',
            desc: 'No telemetry. No cloud by default. Your audio stays exactly where it should.',
          },
        ].map((p, i) => (
          <div
            key={p.title}
            className="pillar"
            style={{
              padding: '40px 40px 40px 0',
              borderLeft: i > 0 ? '1px solid rgba(26,21,40,0.08)' : 'none',
              paddingLeft: i > 0 ? '40px' : '0',
            }}
          >
            <div
              style={{
                color: '#ba943e',
                fontSize: '14px',
                marginBottom: '16px',
              }}
            >
              {p.icon}
            </div>
            <h3
              className={display.className}
              style={{
                fontSize: '32px',
                fontWeight: 500,
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}
            >
              {p.title}
            </h3>
            <div
              className="pillar-line"
              style={{
                height: '1px',
                background: '#ba943e',
                width: '32px',
                marginBottom: '16px',
              }}
            />
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.75',
                color: 'rgba(26,21,40,0.6)',
                fontWeight: 300,
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Features */}
      <div style={{ background: '#f0ebe1' }}>
        <section
          style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '56px',
            }}
          >
            <h2
              className={display.className}
              style={{
                fontSize: '64px',
                fontWeight: 300,
                lineHeight: '1',
                letterSpacing: '-0.01em',
              }}
            >
              What It
              <br />
              <em className="gold">Does</em>
            </h2>
            <p
              style={{
                maxWidth: '340px',
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'rgba(26,21,40,0.55)',
                fontWeight: 300,
              }}
            >
              Six capabilities that work in concert to make voice transcription
              feel effortless.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 64px',
            }}
          >
            {features.map((f) => (
              <div key={f.num} className="feat-item">
                <div className="feat-num">{f.num}</div>
                <h3
                  className={display.className}
                  style={{
                    fontSize: '24px',
                    fontWeight: 500,
                    marginBottom: '10px',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '1.75',
                    color: 'rgba(26,21,40,0.58)',
                    fontWeight: 300,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Benchmark */}
      <section
        style={{
          padding: '80px 64px',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.28em',
              color: '#ba943e',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Performance — 30s English Audio
          </div>
          <h2
            className={display.className}
            style={{
              fontSize: '64px',
              fontWeight: 300,
              lineHeight: '1.05',
              marginBottom: '24px',
            }}
          >
            Faster Than
            <br />
            <em className="gold">Any API.</em>
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.85',
              color: 'rgba(26,21,40,0.6)',
              marginBottom: '32px',
              fontWeight: 300,
            }}
          >
            OiPer processes 30 seconds of English audio in just 1.5 seconds —
            more than twice as fast as the closest API competitor, while keeping
            your data entirely on-device.
          </p>
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(26,21,40,0.5)',
              lineHeight: '2',
              borderLeft: '2px solid #ba943e',
              paddingLeft: '20px',
            }}
          >
            <div>Written in native code</div>
            <div>GPU-accelerated inference</div>
            <div>Zero network latency</div>
          </div>
        </div>
        <div>
          {benchmarks.map((b, i) => (
            <div key={i} style={{ marginBottom: '28px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    color: b.winner ? '#1a1528' : 'rgba(26,21,40,0.55)',
                    fontWeight: b.winner ? 600 : 400,
                    letterSpacing: b.winner ? '0.01em' : 'normal',
                  }}
                >
                  {b.winner && (
                    <span
                      style={{
                        color: '#ba943e',
                        marginRight: '8px',
                        fontSize: '12px',
                      }}
                    >
                      ◆
                    </span>
                  )}
                  {b.name}
                </span>
                <span
                  className={display.className}
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: b.winner ? '#ba943e' : 'rgba(26,21,40,0.35)',
                  }}
                >
                  {b.time}
                </span>
              </div>
              <div className="bench-bar-bg">
                <div
                  className="bench-bar-fill"
                  style={{
                    width: `${b.pct}%`,
                    background: b.winner ? '#ba943e' : 'rgba(26,21,40,0.12)',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <div style={{ background: '#1a1528' }}>
        <section
          style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '56px',
            }}
          >
            <h2
              className={display.className}
              style={{
                fontSize: '64px',
                fontWeight: 300,
                color: '#f7f2eb',
                lineHeight: '1',
              }}
            >
              Built for
              <br />
              <em style={{ color: '#ba943e' }}>Privacy</em>
            </h2>
            <p
              style={{
                maxWidth: '380px',
                fontSize: '14px',
                lineHeight: '1.85',
                color: 'rgba(247,242,235,0.45)',
                fontWeight: 300,
              }}
            >
              Your data is not a product. OiPer is designed from the ground up
              to keep everything on your device.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '20px',
            }}
          >
            {[
              {
                tag: 'Default',
                title: 'Local Transcription',
                desc: 'Whisper runs on your own CPU or GPU. No model API, no server, no exposure of any kind.',
              },
              {
                tag: 'Default',
                title: 'On-Device Logs',
                desc: 'Activity history and raw audio are stored locally. You choose what to keep and what to delete.',
              },
              {
                tag: 'Optional',
                title: 'Cloud Refinement',
                desc: 'Text cleanup via external LLMs is entirely opt-in. Supply your own API key. Disable anytime.',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="priv-item"
                style={{ borderColor: 'rgba(247,242,235,0.08)' }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: '#ba943e',
                    marginBottom: '16px',
                  }}
                >
                  {p.tag}
                </div>
                <h3
                  className={display.className}
                  style={{
                    fontSize: '22px',
                    fontWeight: 500,
                    color: '#f7f2eb',
                    marginBottom: '12px',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.75',
                    color: 'rgba(247,242,235,0.45)',
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section
        style={{
          padding: '120px 64px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #f7f2eb 0%, #ede5d5 100%)',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#ba943e',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Begin Today
        </div>
        <h2
          className={display.className}
          style={{
            fontSize: '80px',
            fontWeight: 300,
            lineHeight: '1',
            marginBottom: '28px',
          }}
        >
          Speak Freely.
          <br />
          <em className="gold">Stay Private.</em>
        </h2>
        <p
          style={{
            fontSize: '17px',
            color: 'rgba(26,21,40,0.55)',
            maxWidth: '480px',
            margin: '0 auto 48px',
            lineHeight: '1.85',
            fontWeight: 300,
          }}
        >
          No subscription. No cloud dependency. A single download and your voice
          becomes your fastest input.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary">Download OiPer</button>
          <button className="btn-outline">Read the Docs</button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#1a1528',
          padding: '40px 64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(247,242,235,0.3)',
          fontSize: '12px',
          letterSpacing: '0.06em',
        }}
      >
        <span
          className={display.className}
          style={{
            color: '#f7f2eb',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '0.06em',
          }}
        >
          OiPer
        </span>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['GitHub', 'Changelog', 'Documentation', 'Privacy'].map((l) => (
            <span key={l} style={{ cursor: 'pointer' }}>
              {l}
            </span>
          ))}
        </div>
        <span>© 2025 OiPer Desktop</span>
      </footer>
    </div>
  )
}
