import { Spectral, Syne } from 'next/font/google'

const display = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const body = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const features = [
  {
    icon: '◉',
    title: 'Hold & Release',
    desc: 'A single hotkey gesture — press to record, release to transcribe. The most natural input workflow imaginable.',
  },
  {
    icon: '◉',
    title: 'Stays on Device',
    desc: 'Your voice never travels beyond your machine. Whisper processes everything locally, offline, and privately.',
  },
  {
    icon: '◉',
    title: 'Goes Where You Are',
    desc: 'Text injects directly into whatever app has focus. Email, document, message — it just arrives.',
  },
  {
    icon: '◉',
    title: 'Harnesses Your GPU',
    desc: 'CUDA and Metal acceleration available. Or run CPU-only. OiPer adapts to your hardware.',
  },
  {
    icon: '◉',
    title: 'Optional Refinement',
    desc: 'Hook up any LLM — local or remote — for text cleanup. Always your choice, never automatic.',
  },
  {
    icon: '◉',
    title: 'Choose Your Model',
    desc: 'Tiny models for speed, large models for accuracy. Download and swap from a single settings pane.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, winner: true },
  { name: 'Lemonfox API', time: 3.27, winner: false },
  { name: 'Python Faster-Whisper', time: 3.55, winner: false },
  { name: 'OpenAI Whisper 1 API', time: 6.46, winner: false },
]

export default function LandingPage4() {
  return (
    <div
      className={body.className}
      style={{ background: '#f3ead8', color: '#2b1a0c', minHeight: '100vh' }}
    >
      <style>{`
        @keyframes warmFadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
        @keyframes warmFadeIn{from{opacity:0}to{opacity:1}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes barGrow{from{width:0%}to{width:var(--w)}}
        .fade-up{animation:warmFadeUp .8s cubic-bezier(.16,1,.3,1) both}
        .fade-up-2{animation:warmFadeUp .8s .15s cubic-bezier(.16,1,.3,1) both}
        .fade-up-3{animation:warmFadeUp .8s .3s cubic-bezier(.16,1,.3,1) both}
        .fade-up-4{animation:warmFadeUp .8s .45s cubic-bezier(.16,1,.3,1) both}
        .fade-in{animation:warmFadeIn .8s .1s both}
        .btn-warm{
          display:inline-block;
          background:#c4622d;color:#f3ead8;
          border:none;padding:16px 48px;
          font-size:13px;letter-spacing:.18em;text-transform:uppercase;
          cursor:pointer;font-family:inherit;font-weight:600;
          border-radius:100px;transition:all .25s;
        }
        .btn-warm:hover{background:#a84f22;transform:translateY(-2px);box-shadow:0 8px 28px rgba(196,98,45,.35)}
        .btn-warm-outline{
          display:inline-block;
          background:transparent;color:#2b1a0c;
          border:2px solid rgba(43,26,12,.25);padding:14px 46px;
          font-size:13px;letter-spacing:.18em;text-transform:uppercase;
          cursor:pointer;font-family:inherit;font-weight:600;
          border-radius:100px;transition:all .25s;
        }
        .btn-warm-outline:hover{border-color:#c4622d;color:#c4622d}
        .nav-link{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:rgba(43,26,12,.45);cursor:pointer;transition:color .2s}
        .nav-link:hover{color:#c4622d}
        .feat-card{
          background:#ede2cc;border-radius:16px;padding:32px;
          border:1px solid rgba(43,26,12,.07);
          transition:transform .3s,box-shadow .3s;
        }
        .feat-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(43,26,12,.1)}
        .feat-icon{
          width:44px;height:44px;border-radius:50%;
          background:#c4622d;color:#f3ead8;
          display:flex;align-items:center;justify-content:center;
          font-size:18px;margin-bottom:20px;
        }
        .terra{color:#c4622d}
        .stat-ring{
          width:88px;height:88px;border-radius:50%;
          border:3px solid #c4622d;
          display:flex;align-items:center;justify-content:center;
          flex-direction:column;
          background:rgba(196,98,45,.07);
        }
        .spin-slow{animation:spin 20s linear infinite}
        .priv-card{
          background:#f9f4eb;border-radius:12px;padding:28px;
          border:1px solid rgba(43,26,12,.07);
          transition:box-shadow .3s;
        }
        .priv-card:hover{box-shadow:0 8px 32px rgba(196,98,45,.12)}
        .tag{
          display:inline-block;
          font-size:10px;letter-spacing:.22em;text-transform:uppercase;
          padding:4px 12px;border-radius:100px;margin-bottom:16px;
          font-weight:600;
        }
        .tag-secure{background:rgba(196,98,45,.12);color:#c4622d}
        .tag-optional{background:rgba(43,26,12,.07);color:rgba(43,26,12,.5)}
      `}</style>

      {/* Nav */}
      <nav
        style={{
          padding: '22px 64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(43,26,12,0.1)',
        }}
      >
        <div
          className={display.className}
          style={{
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#2b1a0c',
          }}
        >
          Oiper
          <span style={{ color: '#c4622d' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '36px' }}>
          {['Features', 'Performance', 'Privacy', 'Download'].map((n) => (
            <span key={n} className="nav-link">
              {n}
            </span>
          ))}
        </div>
        <button
          className="btn-warm"
          style={{ padding: '10px 28px', fontSize: '11px' }}
        >
          Download
        </button>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: '96px 64px 80px',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            className="fade-up"
            style={{
              display: 'inline-block',
              background: 'rgba(196,98,45,0.12)',
              color: '#c4622d',
              fontSize: '11px',
              letterSpacing: '0.28em',
              padding: '6px 18px',
              borderRadius: '100px',
              marginBottom: '28px',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Privacy-first · Local · Fast
          </div>
          <h1
            className={`${display.className} fade-up-2`}
            style={{
              fontSize: '80px',
              fontWeight: 800,
              lineHeight: '0.95',
              marginBottom: '28px',
              letterSpacing: '-0.02em',
            }}
          >
            Voice to Text.
            <br />
            <span className="terra">Yours Alone.</span>
          </h1>
          <p
            className="fade-up-3"
            style={{
              fontSize: '17px',
              lineHeight: '1.85',
              color: 'rgba(43,26,12,0.6)',
              marginBottom: '44px',
              maxWidth: '460px',
              fontWeight: 300,
            }}
          >
            Hold a hotkey, speak your mind, release. OiPer transcribes your
            words in 1.5 seconds — entirely on your machine, without a server in
            sight.
          </p>
          <div
            className="fade-up-4"
            style={{
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button className="btn-warm">Get OiPer Free</button>
            <button className="btn-warm-outline">Learn More</button>
          </div>
        </div>

        {/* Visual: Warm circle composition */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '420px',
          }}
        >
          {/* Outer decorative ring */}
          <div
            className="spin-slow"
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              border: '1px dashed rgba(196,98,45,0.25)',
            }}
          />
          {/* Mid ring */}
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '1px solid rgba(196,98,45,0.12)',
              background:
                'radial-gradient(circle, rgba(196,98,45,0.06) 0%, transparent 70%)',
            }}
          />
          {/* Center */}
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #c4622d, #8b3a14)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(196,98,45,0.35)',
              color: '#f3ead8',
            }}
          >
            <div
              className={display.className}
              style={{ fontSize: '44px', fontWeight: 800, lineHeight: 1 }}
            >
              1.5s
            </div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                marginTop: '6px',
                opacity: 0.75,
              }}
            >
              TRANSCRIPTION
            </div>
          </div>
          {/* Orbiting stats */}
          {[
            { label: 'On-Device', val: '100%', angle: -60 },
            { label: 'Faster', val: '2.18×', angle: 60 },
            { label: 'Cloud calls', val: 'Zero', angle: 180 },
          ].map(({ label, val, angle }) => {
            const rad = (angle * Math.PI) / 180
            const r = 175
            const x = Math.cos(rad) * r
            const y = Math.sin(rad) * r
            return (
              <div
                key={label}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  background: '#f9f4eb',
                  border: '1px solid rgba(43,26,12,0.1)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(43,26,12,0.08)',
                }}
              >
                <div
                  className={display.className}
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#c4622d',
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: 'rgba(43,26,12,0.5)',
                    letterSpacing: '0.1em',
                    marginTop: '2px',
                  }}
                >
                  {label}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Divider with ornament */}
      <div style={{ textAlign: 'center', padding: '0 64px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <div
            style={{ flex: 1, height: '1px', background: 'rgba(43,26,12,0.1)' }}
          />
          <span style={{ color: '#c4622d', fontSize: '18px' }}>◆</span>
          <div
            style={{ flex: 1, height: '1px', background: 'rgba(43,26,12,0.1)' }}
          />
        </div>
      </div>

      {/* Features */}
      <section
        style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.28em',
              color: '#c4622d',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: 600,
            }}
          >
            What Makes It Different
          </div>
          <h2
            className={display.className}
            style={{
              fontSize: '56px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: '1.05',
            }}
          >
            Built with Care,
            <br />
            <span className="terra">Not Compromise</span>
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '20px',
          }}
        >
          {features.map((f) => (
            <div key={f.title} className="feat-card">
              <div className="feat-icon">{f.icon}</div>
              <h3
                className={display.className}
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.75',
                  color: 'rgba(43,26,12,0.58)',
                  fontWeight: 300,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmark */}
      <div style={{ background: '#2b1a0c', padding: '80px 64px' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.28em',
                color: '#c4622d',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontWeight: 600,
              }}
            >
              Benchmark — 30s English Audio
            </div>
            <h2
              className={display.className}
              style={{
                fontSize: '64px',
                fontWeight: 800,
                color: '#f3ead8',
                lineHeight: '0.95',
                marginBottom: '24px',
              }}
            >
              Faster Than
              <br />
              <span style={{ color: '#c4622d' }}>Any API.</span>
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.85',
                color: 'rgba(243,234,216,0.5)',
                marginBottom: '32px',
                fontWeight: 300,
              }}
            >
              Native code, zero network latency, GPU acceleration. The
              combination makes cloud APIs look sluggish.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '16px',
              }}
            >
              {[
                ['1.5s', 'OiPer'],
                ['2.18×', 'Speedup'],
                ['0ms', 'Network'],
              ].map(([v, l]) => (
                <div
                  key={l}
                  style={{
                    borderTop: '2px solid rgba(196,98,45,0.4)',
                    paddingTop: '14px',
                  }}
                >
                  <div
                    className={display.className}
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#c4622d',
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'rgba(243,234,216,0.4)',
                      marginTop: '4px',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {benchmarks.map((b, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      color: b.winner ? '#f3ead8' : 'rgba(243,234,216,0.45)',
                      fontWeight: b.winner ? 600 : 400,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {b.winner && (
                      <span style={{ color: '#c4622d', marginRight: '8px' }}>
                        ◆
                      </span>
                    )}
                    {b.name}
                  </span>
                  <span
                    className={display.className}
                    style={{
                      fontSize: '20px',
                      color: b.winner ? '#c4622d' : 'rgba(243,234,216,0.3)',
                    }}
                  >
                    {b.time}s
                  </span>
                </div>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: 'rgba(243,234,216,0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${(b.time / 6.46) * 100}%`,
                      borderRadius: '2px',
                      background: b.winner
                        ? '#c4622d'
                        : 'rgba(243,234,216,0.12)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy */}
      <section
        style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.28em',
              color: '#c4622d',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: 600,
            }}
          >
            Privacy Architecture
          </div>
          <h2
            className={display.className}
            style={{
              fontSize: '56px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: '1.05',
            }}
          >
            Your Data Belongs
            <br />
            <span className="terra">To You</span>
          </h2>
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
              tag: 'Secure by Default',
              tagClass: 'tag-secure',
              title: 'Local Transcription',
              desc: 'The Whisper model runs entirely on your hardware. No API, no server, no cloud. Just your CPU or GPU processing your voice.',
            },
            {
              tag: 'Secure by Default',
              tagClass: 'tag-secure',
              title: 'On-Device Storage',
              desc: 'Logs and audio stay on your machine. You decide what to keep, what to archive, and what to delete.',
            },
            {
              tag: 'Optional',
              tagClass: 'tag-optional',
              title: 'Cloud LLM Cleanup',
              desc: 'Text refinement via external APIs is entirely optional. Bring your own key. Default is off. Always opt-in.',
            },
          ].map((p) => (
            <div key={p.title} className="priv-card">
              <div className={`tag ${p.tagClass}`}>{p.tag}</div>
              <h3
                className={display.className}
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.75',
                  color: 'rgba(43,26,12,0.55)',
                  fontWeight: 300,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 64px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #f3ead8 0%, #e8d9b8 100%)',
          borderTop: '1px solid rgba(43,26,12,0.08)',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(196,98,45,0.1)',
            border: '2px solid rgba(196,98,45,0.25)',
            margin: '0 auto 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#c4622d',
          }}
        >
          ◉
        </div>
        <h2
          className={display.className}
          style={{
            fontSize: '72px',
            fontWeight: 800,
            lineHeight: '0.95',
            marginBottom: '24px',
          }}
        >
          Speak Freely.
          <br />
          <span className="terra">Stay Private.</span>
        </h2>
        <p
          style={{
            fontSize: '17px',
            color: 'rgba(43,26,12,0.55)',
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: '1.85',
            fontWeight: 300,
          }}
        >
          Free to download. No subscription. No cloud dependency. Your voice,
          your hardware, your control.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            className="btn-warm"
            style={{ padding: '18px 56px', fontSize: '13px' }}
          >
            Download OiPer
          </button>
          <button className="btn-warm-outline">View on GitHub</button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#2b1a0c',
          padding: '36px 64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          className={display.className}
          style={{ fontSize: '20px', fontWeight: 700, color: '#f3ead8' }}
        >
          Oiper<span style={{ color: '#c4622d' }}>.</span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(243,234,216,0.35)',
          }}
        >
          {['GitHub', 'Docs', 'Releases', 'Privacy'].map((l) => (
            <span key={l} style={{ cursor: 'pointer' }}>
              {l}
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: '12px',
            color: 'rgba(243,234,216,0.25)',
            letterSpacing: '0.06em',
          }}
        >
          © 2025 OiPer Desktop
        </span>
      </footer>
    </div>
  )
}
