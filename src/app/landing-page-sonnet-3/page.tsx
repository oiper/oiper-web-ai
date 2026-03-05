import { Anton, IBM_Plex_Mono } from 'next/font/google'

const display = Anton({ subsets: ['latin'], weight: '400' })
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const features = [
  {
    n: '01',
    title: 'HOLD. SPEAK. RELEASE.',
    desc: 'Global hotkey triggers recording. Release to transcribe. Done.',
  },
  {
    n: '02',
    title: 'NEVER LEAVES YOUR MACHINE.',
    desc: 'Whisper runs locally. Zero cloud calls by default.',
  },
  {
    n: '03',
    title: 'TEXT IN. INSTANTLY.',
    desc: 'Injected straight into your active app. No clipboard detour.',
  },
  {
    n: '04',
    title: 'GPU OR CPU. YOUR CALL.',
    desc: 'Auto-detect or force CUDA, Metal, or CPU-only mode.',
  },
  {
    n: '05',
    title: 'LLM CLEANUP. OPT-IN.',
    desc: 'Any OpenAI-compatible API for text polishing. Your key. Your choice.',
  },
  {
    n: '06',
    title: 'PICK YOUR MODEL.',
    desc: 'Tiny to Large. Download and switch from the settings panel.',
  },
]

const benchmarks = [
  { name: 'OIPER DESKTOP', time: 1.5, winner: true },
  { name: 'LEMONFOX API', time: 3.27, winner: false },
  { name: 'PYTHON FASTER-WHISPER', time: 3.55, winner: false },
  { name: 'OPENAI WHISPER 1 API', time: 6.46, winner: false },
]

export default function LandingPage3() {
  return (
    <div
      className={mono.className}
      style={{ background: '#f5f5f0', color: '#0a0a0a', minHeight: '100vh' }}
    >
      <style>{`
        @keyframes slideInLeft{from{opacity:0;transform:translateX(-32px)}to{opacity:1;transform:none}}
        @keyframes slideInRight{from{opacity:0;transform:translateX(32px)}to{opacity:1;transform:none}}
        @keyframes stampIn{from{opacity:0;transform:scale(1.08)}to{opacity:1;transform:none}}
        @keyframes barGrow{from{width:0}to{width:var(--w)}}
        .h1-stamp{animation:stampIn .5s cubic-bezier(.16,1,.3,1) both}
        .slide-l{animation:slideInLeft .7s cubic-bezier(.16,1,.3,1) both}
        .slide-r{animation:slideInRight .7s cubic-bezier(.16,1,.3,1) both}
        .slide-l-2{animation:slideInLeft .7s .15s cubic-bezier(.16,1,.3,1) both}
        .slide-l-3{animation:slideInLeft .7s .3s cubic-bezier(.16,1,.3,1) both}
        .feat-row{
          border-top:3px solid #0a0a0a;padding:24px 0;
          display:grid;grid-template-columns:64px 1fr 1fr;gap:24px;align-items:start;
          transition:background .15s;
        }
        .feat-row:hover{background:#ff3300;color:#f5f5f0}
        .feat-row:hover .feat-desc{color:#f5f5f0!important}
        .feat-row:hover .feat-num{color:#f5f5f0!important}
        .btn-brutal{
          display:inline-block;background:#ff3300;color:#f5f5f0;
          border:3px solid #0a0a0a;padding:16px 48px;font-size:13px;
          letter-spacing:.2em;text-transform:uppercase;cursor:pointer;
          font-family:inherit;font-weight:700;transition:all .15s;
          box-shadow:4px 4px 0 #0a0a0a;
        }
        .btn-brutal:hover{transform:translate(-3px,-3px);box-shadow:7px 7px 0 #0a0a0a}
        .btn-brutal:active{transform:translate(1px,1px);box-shadow:3px 3px 0 #0a0a0a}
        .btn-inv{
          display:inline-block;background:#0a0a0a;color:#f5f5f0;
          border:3px solid #0a0a0a;padding:15px 46px;font-size:13px;
          letter-spacing:.2em;text-transform:uppercase;cursor:pointer;
          font-family:inherit;font-weight:700;transition:all .15s;
          box-shadow:4px 4px 0 rgba(0,0,0,0.25);
        }
        .btn-inv:hover{background:#ff3300;transform:translate(-3px,-3px);box-shadow:7px 7px 0 #0a0a0a}
        .nav-item{
          font-size:12px;letter-spacing:.18em;text-transform:uppercase;
          cursor:pointer;padding:6px 0;border-bottom:2px solid transparent;transition:border-color .15s;
        }
        .nav-item:hover{border-color:#ff3300}
        .stat-box{
          border:3px solid #0a0a0a;padding:28px;background:#f5f5f0;
          box-shadow:5px 5px 0 #0a0a0a;transition:all .15s;
        }
        .stat-box:hover{transform:translate(-3px,-3px);box-shadow:8px 8px 0 #0a0a0a}
        .orange{color:#ff3300}
        .bench-winner-bar{animation:barGrow .8s cubic-bezier(.16,1,.3,1) both}
      `}</style>

      {/* Nav */}
      <nav
        style={{
          borderBottom: '3px solid #0a0a0a',
          padding: '20px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#f5f5f0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          className={display.className}
          style={{ fontSize: '28px', letterSpacing: '0.04em' }}
        >
          OIPER
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Features', 'Benchmark', 'Privacy', 'Download'].map((n) => (
            <span key={n} className="nav-item">
              {n}
            </span>
          ))}
        </div>
        <button
          className="btn-brutal"
          style={{
            padding: '10px 24px',
            fontSize: '11px',
            boxShadow: '3px 3px 0 #0a0a0a',
          }}
        >
          Get It
        </button>
      </nav>

      {/* Hero */}
      <section
        style={{
          borderBottom: '3px solid #0a0a0a',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Big background text */}
        <div
          className={display.className}
          style={{
            position: 'absolute',
            fontSize: '240px',
            lineHeight: '0.85',
            color: 'rgba(255,51,0,0.06)',
            top: '20px',
            right: '-20px',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          FAST
        </div>

        <div
          style={{
            padding: '80px 56px',
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '80px',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div>
            <div
              className="slide-l"
              style={{
                display: 'inline-block',
                background: '#ff3300',
                color: '#f5f5f0',
                fontSize: '11px',
                letterSpacing: '0.28em',
                padding: '6px 16px',
                marginBottom: '28px',
                fontWeight: 700,
              }}
            >
              PRIVACY-FIRST VOICE-TO-TEXT
            </div>
            <h1
              className={`${display.className} h1-stamp`}
              style={{
                fontSize: 'clamp(72px, 10vw, 136px)',
                lineHeight: '0.88',
                marginBottom: '0',
                letterSpacing: '-0.01em',
              }}
            >
              HOLD.
              <br />
              <span className="orange">SPEAK.</span>
              <br />
              DONE.
            </h1>
            <div
              style={{
                marginTop: '40px',
                borderLeft: '5px solid #ff3300',
                paddingLeft: '20px',
              }}
            >
              <p
                className="slide-l-2"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: 'rgba(10,10,10,0.65)',
                  maxWidth: '500px',
                }}
              >
                Global hotkey activation. Local Whisper transcription. Direct
                text injection. Faster than any API. 100% on-device. No cloud,
                no subscription, no compromise.
              </p>
            </div>
            <div
              className="slide-l-3"
              style={{
                display: 'flex',
                gap: '16px',
                marginTop: '40px',
                flexWrap: 'wrap',
              }}
            >
              <button className="btn-brutal">Download Now</button>
              <button className="btn-inv">Read Docs</button>
            </div>
          </div>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {[
              ['1.5s', 'Transcription\n30s audio'],
              ['0', 'Cloud calls\nby default'],
              ['2.18×', 'Faster than\nnearest API'],
            ].map(([v, l]) => (
              <div key={v} className="stat-box">
                <div
                  className={`${display.className} orange`}
                  style={{ fontSize: '52px', lineHeight: 1 }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    color: 'rgba(10,10,10,0.55)',
                    marginTop: '6px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-line',
                    textTransform: 'uppercase',
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: '72px 56px',
          maxWidth: '1280px',
          margin: '0 auto',
          borderBottom: '3px solid #0a0a0a',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '0',
          }}
        >
          <h2
            className={display.className}
            style={{ fontSize: '72px', lineHeight: '1', marginBottom: '40px' }}
          >
            WHAT IT
            <br />
            <span className="orange">DOES</span>
          </h2>
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: 'rgba(10,10,10,0.4)',
              textTransform: 'uppercase',
              maxWidth: '240px',
              textAlign: 'right',
              lineHeight: '1.6',
            }}
          >
            Six things.
            <br />
            All of them matter.
          </div>
        </div>
        {features.map((f) => (
          <div key={f.n} className="feat-row">
            <span
              className="feat-num orange"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              {f.n}
            </span>
            <span
              className={display.className}
              style={{
                fontSize: '22px',
                lineHeight: '1.2',
                letterSpacing: '0.02em',
              }}
            >
              {f.title}
            </span>
            <span
              className="feat-desc"
              style={{
                fontSize: '13px',
                color: 'rgba(10,10,10,0.55)',
                lineHeight: '1.65',
              }}
            >
              {f.desc}
            </span>
          </div>
        ))}
        <div style={{ borderTop: '3px solid #0a0a0a' }} />
      </section>

      {/* Benchmark */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderBottom: '3px solid #0a0a0a',
        }}
      >
        <div
          style={{
            padding: '72px 56px',
            background: '#0a0a0a',
            color: '#f5f5f0',
            borderRight: '3px solid #0a0a0a',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.28em',
              color: '#ff3300',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Performance Benchmark
          </div>
          <h2
            className={display.className}
            style={{
              fontSize: '72px',
              lineHeight: '0.9',
              marginBottom: '24px',
            }}
          >
            2.18×
            <br />
            <span style={{ fontSize: '32px', color: 'rgba(245,245,240,0.5)' }}>
              FASTER
            </span>
          </h2>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.75',
              color: 'rgba(245,245,240,0.55)',
              marginBottom: '32px',
            }}
          >
            30 seconds of English audio. Native code vs Python vs Cloud APIs.
            The result is not close.
          </p>
          <div
            style={{
              fontSize: '13px',
              color: 'rgba(245,245,240,0.4)',
              lineHeight: '2',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <div>◆ No Python overhead</div>
            <div>◆ GPU inference (CUDA/Metal)</div>
            <div>◆ Zero network round-trips</div>
          </div>
        </div>
        <div style={{ padding: '72px 56px' }}>
          {benchmarks.map((b, i) => (
            <div
              key={i}
              style={{
                marginBottom: '28px',
                borderLeft: b.winner
                  ? '5px solid #ff3300'
                  : '5px solid transparent',
                paddingLeft: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '10px',
                }}
              >
                <span
                  className={b.winner ? display.className : undefined}
                  style={{
                    fontSize: b.winner ? '18px' : '14px',
                    fontWeight: b.winner ? 400 : 400,
                    color: b.winner ? '#0a0a0a' : 'rgba(10,10,10,0.55)',
                    letterSpacing: b.winner ? '0.04em' : '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {b.name}
                </span>
                <span
                  className={display.className}
                  style={{
                    fontSize: '28px',
                    color: b.winner ? '#ff3300' : 'rgba(10,10,10,0.35)',
                  }}
                >
                  {b.time}s
                </span>
              </div>
              <div
                style={{
                  height: '6px',
                  background: 'rgba(10,10,10,0.08)',
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
                    background: b.winner ? '#ff3300' : 'rgba(10,10,10,0.18)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section
        style={{ padding: '72px 56px', maxWidth: '1280px', margin: '0 auto' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          <div>
            <h2
              className={display.className}
              style={{
                fontSize: '72px',
                lineHeight: '0.9',
                marginBottom: '20px',
              }}
            >
              YOUR
              <br />
              <span className="orange">DATA.</span>
              <br />
              FULL
              <br />
              STOP.
            </h2>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.75',
                color: 'rgba(10,10,10,0.55)',
              }}
            >
              No exceptions. No asterisks. No "unless you opt out."
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                badge: 'DEFAULT',
                bg: '#0a0a0a',
                bc: '#f5f5f0',
                title: 'Local Transcription',
                desc: 'Whisper model runs on your CPU or GPU. No API calls. No server connection. Your audio is processed locally and stays locally.',
              },
              {
                badge: 'DEFAULT',
                bg: '#0a0a0a',
                bc: '#f5f5f0',
                title: 'On-Device Logs',
                desc: 'Activity logs, audio recordings, transcription history — all stored on your machine. You control it. You can delete it.',
              },
              {
                badge: 'OPT-IN ONLY',
                bg: '#ff3300',
                bc: '#f5f5f0',
                title: 'Cloud LLM Cleanup',
                desc: 'Optional text refinement via external APIs is 100% opt-in. Needs your API key. Toggle off at any time. Defaults to off.',
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  borderTop: '3px solid #0a0a0a',
                  padding: '28px 0',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    background: p.bg,
                    color: p.bc,
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    padding: '6px 10px',
                    textAlign: 'center',
                    fontWeight: 700,
                  }}
                >
                  {p.badge}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(10,10,10,0.55)',
                      lineHeight: '1.7',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '3px solid #0a0a0a' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#ff3300',
          borderTop: '3px solid #0a0a0a',
          borderBottom: '3px solid #0a0a0a',
          padding: '80px 56px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className={display.className}
          style={{
            position: 'absolute',
            fontSize: '200px',
            color: 'rgba(245,245,240,0.08)',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          DOWNLOAD
        </div>
        <div style={{ position: 'relative' }}>
          <h2
            className={display.className}
            style={{
              fontSize: '80px',
              color: '#f5f5f0',
              lineHeight: '0.9',
              marginBottom: '24px',
            }}
          >
            STOP PAYING.
            <br />
            START OWNING.
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(245,245,240,0.75)',
              maxWidth: '480px',
              margin: '0 auto 48px',
              lineHeight: '1.7',
            }}
          >
            No subscription. No cloud lock-in. One download and your voice
            becomes the fastest input on your machine.
          </p>
          <button
            className="btn-inv"
            style={{
              background: '#f5f5f0',
              color: '#0a0a0a',
              borderColor: '#f5f5f0',
            }}
          >
            Download OiPer Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '32px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '3px solid #0a0a0a',
        }}
      >
        <span className={display.className} style={{ fontSize: '22px' }}>
          OIPER
        </span>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(10,10,10,0.45)',
          }}
        >
          {['GitHub', 'Docs', 'Changelog'].map((l) => (
            <span key={l} style={{ cursor: 'pointer' }}>
              {l}
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'rgba(10,10,10,0.35)',
          }}
        >
          © 2025
        </span>
      </footer>
    </div>
  )
}
