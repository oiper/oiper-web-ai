import { DM_Sans, Exo_2 } from 'next/font/google'

const display = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})
const body = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'] })

const features = [
  {
    icon: '⌨',
    label: 'Input',
    title: 'Global Hotkey',
    desc: 'Press-and-hold activation system-wide. Works across every app without losing context.',
    glow: 'rgba(0,180,255,0.3)',
  },
  {
    icon: '🔒',
    label: 'Privacy',
    title: 'Local Inference',
    desc: 'Whisper runs on your GPU. Zero egress. Audio never leaves your machine by default.',
    glow: 'rgba(124,58,237,0.3)',
  },
  {
    icon: '⚡',
    label: 'Speed',
    title: 'GPU Accelerated',
    desc: 'CUDA and Metal support. Auto-detect your hardware or manually override the backend.',
    glow: 'rgba(0,217,166,0.3)',
  },
  {
    icon: '✦',
    label: 'Output',
    title: 'Direct Injection',
    desc: 'Transcribed text appears in your focused input instantly. No clipboard required.',
    glow: 'rgba(0,180,255,0.3)',
  },
  {
    icon: '◈',
    label: 'Enhance',
    title: 'LLM Cleanup',
    desc: 'Optional text polish via any LLM — local or cloud. Always your key, always your choice.',
    glow: 'rgba(124,58,237,0.3)',
  },
  {
    icon: '◎',
    label: 'Config',
    title: 'Model Manager',
    desc: 'Download and switch Whisper models in-app. Tiny for speed, Large for precision.',
    glow: 'rgba(0,217,166,0.3)',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, winner: true },
  { name: 'Lemonfox API', time: 3.27, winner: false },
  { name: 'Python Faster-Whisper', time: 3.55, winner: false },
  { name: 'OpenAI Whisper 1 API', time: 6.46, winner: false },
]

export default function LandingPage5() {
  return (
    <div
      className={body.className}
      style={{
        background: '#030a18',
        color: '#e8f0ff',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes pulse-glow{0%,100%{opacity:.6}50%{opacity:1}}
        @keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes barGrow{from{width:0}to{width:var(--w)}}

        .fu{animation:fadeUp .7s cubic-bezier(.16,1,.3,1) both}
        .fu1{animation-delay:.05s}
        .fu2{animation-delay:.15s}
        .fu3{animation-delay:.28s}
        .fu4{animation-delay:.42s}
        .fi{animation:fadeIn .8s .2s both}

        .glass{
          background:rgba(255,255,255,0.04);
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.08);
        }
        .glass-strong{
          background:rgba(255,255,255,0.07);
          backdrop-filter:blur(20px);
          -webkit-backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,0.12);
        }

        .feat-card{
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(255,255,255,0.03);
          padding:28px;
          transition:transform .3s,border-color .3s,box-shadow .3s;
          position:relative;overflow:hidden;
        }
        .feat-card::before{
          content:'';position:absolute;inset:0;border-radius:16px;
          opacity:0;transition:opacity .3s;
          background:radial-gradient(circle at top left, var(--glow), transparent 70%);
        }
        .feat-card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,0.14)}
        .feat-card:hover::before{opacity:1}

        .btn-cyber{
          display:inline-block;
          background:linear-gradient(135deg, #0066ff, #00b4ff);
          color:#fff;border:none;
          padding:14px 44px;font-size:13px;letter-spacing:.14em;
          text-transform:uppercase;cursor:pointer;font-family:inherit;font-weight:600;
          border-radius:8px;transition:all .25s;
          box-shadow:0 0 24px rgba(0,102,255,.35);
        }
        .btn-cyber:hover{
          transform:translateY(-2px);
          box-shadow:0 0 40px rgba(0,102,255,.55),0 8px 32px rgba(0,102,255,.25);
        }
        .btn-ghost-cyber{
          display:inline-block;background:transparent;
          color:rgba(232,240,255,.65);
          border:1px solid rgba(255,255,255,.14);
          padding:13px 42px;font-size:13px;letter-spacing:.14em;
          text-transform:uppercase;cursor:pointer;font-family:inherit;
          border-radius:8px;transition:all .25s;
        }
        .btn-ghost-cyber:hover{
          border-color:rgba(0,180,255,.45);
          color:#00b4ff;
          box-shadow:0 0 20px rgba(0,180,255,.12);
        }

        .nav-link{
          font-size:12px;letter-spacing:.14em;text-transform:uppercase;
          color:rgba(232,240,255,.4);cursor:pointer;transition:color .2s;
        }
        .nav-link:hover{color:#00b4ff}

        .gradient-text{
          background:linear-gradient(135deg, #0090ff 0%, #00d4ff 50%, #7c3aed 100%);
          -webkit-background-clip:text;background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .gradient-text-2{
          background:linear-gradient(135deg, #00d4a8 0%, #00b4ff 100%);
          -webkit-background-clip:text;background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .shimmer-text{
          background:linear-gradient(90deg, #0090ff 0%, #00d4ff 30%, #fff 50%, #00d4ff 70%, #7c3aed 100%);
          background-size:200% auto;
          -webkit-background-clip:text;background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:shimmer 4s linear infinite;
        }

        .stat-card{
          border-radius:16px;padding:24px 28px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          transition:transform .25s,box-shadow .25s;
        }
        .stat-card:hover{
          transform:translateY(-3px);
          box-shadow:0 12px 40px rgba(0,102,255,.15);
        }

        .bench-row{
          border-radius:10px;padding:16px 20px;
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.06);
          margin-bottom:12px;
          transition:border-color .25s;
        }
        .bench-row.winner{
          background:rgba(0,102,255,0.08);
          border-color:rgba(0,102,255,.3);
        }
        .bench-row:hover{border-color:rgba(255,255,255,.12)}

        .priv-card{
          border-radius:16px;padding:28px;
          background:rgba(255,255,255,0.035);
          border:1px solid rgba(255,255,255,0.07);
          transition:transform .25s,border-color .25s;
        }
        .priv-card:hover{
          transform:translateY(-3px);
          border-color:rgba(0,180,255,.2);
        }

        .orbit-ring{
          position:absolute;border-radius:50%;
          border:1px solid rgba(0,102,255,.12);
        }
        .float-1{animation:float 6s ease-in-out infinite}
        .float-2{animation:float 8s 1s ease-in-out infinite}
        .float-3{animation:float 7s 2s ease-in-out infinite}
        .pulse-dot{animation:pulse-glow 2s ease-in-out infinite}
      `}</style>

      {/* Background mesh gradient blobs */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,40,180,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '-15%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(100,20,200,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '25%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,140,255,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,100,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Nav */}
        <nav
          style={{
            padding: '20px 64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
          className="glass"
        >
          <div
            className={display.className}
            style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '0.05em',
            }}
          >
            <span className="gradient-text">OiPer</span>
            <span
              style={{
                color: 'rgba(232,240,255,0.2)',
                fontSize: '14px',
                fontWeight: 400,
                marginLeft: '6px',
              }}
            >
              Desktop
            </span>
          </div>
          <div style={{ display: 'flex', gap: '36px' }}>
            {['Features', 'Benchmark', 'Privacy', 'Docs'].map((n) => (
              <span key={n} className="nav-link">
                {n}
              </span>
            ))}
          </div>
          <button
            className="btn-cyber"
            style={{ padding: '10px 24px', fontSize: '11px' }}
          >
            Download
          </button>
        </nav>

        {/* Hero */}
        <section
          style={{
            padding: '100px 64px',
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
              className="fu fu1"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0,100,255,0.12)',
                border: '1px solid rgba(0,180,255,0.2)',
                borderRadius: '100px',
                padding: '6px 16px 6px 10px',
                marginBottom: '28px',
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#00b4ff',
                  display: 'inline-block',
                  boxShadow: '0 0 8px #00b4ff',
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  color: '#00b4ff',
                  letterSpacing: '0.18em',
                  fontWeight: 500,
                }}
              >
                PRIVACY-FIRST · LOCAL · NATIVE
              </span>
            </div>
            <h1
              className={`${display.className} fu fu2`}
              style={{
                fontSize: '84px',
                fontWeight: 900,
                lineHeight: '0.92',
                marginBottom: '28px',
                letterSpacing: '-0.02em',
              }}
            >
              Voice Input.
              <br />
              <span className="shimmer-text">Zero Leaks.</span>
            </h1>
            <p
              className="fu fu3"
              style={{
                fontSize: '16px',
                lineHeight: '1.85',
                color: 'rgba(232,240,255,0.55)',
                marginBottom: '44px',
                maxWidth: '460px',
                fontWeight: 300,
              }}
            >
              Hold a global hotkey. Speak. Release. OiPer transcribes your voice
              locally with Whisper in 1.5 seconds — no cloud, no latency, no
              data exposure.
            </p>
            <div
              className="fu fu4"
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <button className="btn-cyber">Get OiPer Free</button>
              <button className="btn-ghost-cyber">Read Docs</button>
            </div>
          </div>

          {/* Hero visual — glass stats panel */}
          <div
            className="fi"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
            }}
          >
            {/* Main glass card */}
            <div
              className="glass-strong float-1"
              style={{
                borderRadius: '24px',
                padding: '32px',
                boxShadow:
                  '0 0 60px rgba(0,100,255,0.12), 0 24px 60px rgba(0,0,0,0.4)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'rgba(0,180,255,0.7)',
                      letterSpacing: '0.18em',
                      marginBottom: '6px',
                    }}
                  >
                    TRANSCRIPTION SPEED
                  </div>
                  <div
                    className={display.className}
                    style={{ fontSize: '64px', fontWeight: 900, lineHeight: 1 }}
                  >
                    <span className="gradient-text">1.5</span>
                    <span
                      style={{
                        fontSize: '32px',
                        color: 'rgba(232,240,255,0.4)',
                      }}
                    >
                      s
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: 'rgba(0,217,166,0.12)',
                    border: '1px solid rgba(0,217,166,0.25)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '12px',
                    color: '#00d9a6',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  2.18× FASTER
                </div>
              </div>
              <div
                style={{
                  height: '4px',
                  borderRadius: '2px',
                  background: 'rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '23%',
                    background: 'linear-gradient(90deg, #0066ff, #00b4ff)',
                    borderRadius: '2px',
                    boxShadow: '0 0 12px rgba(0,180,255,0.6)',
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(232,240,255,0.35)',
                  letterSpacing: '0.08em',
                }}
              >
                vs 6.46s OpenAI Whisper 1 API — 30s English audio
              </div>
            </div>

            {/* Two smaller cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <div
                className="glass float-2"
                style={{
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    color: 'rgba(124,58,237,0.8)',
                    letterSpacing: '0.18em',
                    marginBottom: '8px',
                  }}
                >
                  CLOUD CALLS
                </div>
                <div
                  className={`${display.className} gradient-text-2`}
                  style={{ fontSize: '36px', fontWeight: 800 }}
                >
                  Zero
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(232,240,255,0.3)',
                    marginTop: '4px',
                  }}
                >
                  by default
                </div>
              </div>
              <div
                className="glass float-3"
                style={{
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    color: 'rgba(0,180,255,0.8)',
                    letterSpacing: '0.18em',
                    marginBottom: '8px',
                  }}
                >
                  ON-DEVICE
                </div>
                <div
                  className={`${display.className} gradient-text`}
                  style={{ fontSize: '36px', fontWeight: 800 }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(232,240,255,0.3)',
                    marginTop: '4px',
                  }}
                >
                  processing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div
              style={{
                display: 'inline-block',
                fontSize: '11px',
                color: 'rgba(0,180,255,0.7)',
                letterSpacing: '0.22em',
                marginBottom: '16px',
                fontWeight: 500,
              }}
            >
              CAPABILITIES
            </div>
            <h2
              className={display.className}
              style={{
                fontSize: '56px',
                fontWeight: 800,
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="gradient-text">Six Ways</span> OiPer
              <br />
              Works for You
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '16px',
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="feat-card"
                style={{ ['--glow' as string]: f.glow } as React.CSSProperties}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: f.glow.replace('0.3', '0.15'),
                      border: `1px solid ${f.glow.replace('0.3', '0.4')}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'rgba(232,240,255,0.3)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {f.label}
                  </span>
                </div>
                <h3
                  className={display.className}
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: '#e8f0ff',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.7',
                    color: 'rgba(232,240,255,0.45)',
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
        <div
          style={{
            margin: '0 64px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
          className="glass"
        >
          <section
            style={{
              padding: '72px 56px',
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
                  color: 'rgba(0,180,255,0.7)',
                  letterSpacing: '0.22em',
                  marginBottom: '20px',
                  fontWeight: 500,
                }}
              >
                PERFORMANCE BENCHMARK — 30s AUDIO
              </div>
              <h2
                className={display.className}
                style={{
                  fontSize: '64px',
                  fontWeight: 900,
                  lineHeight: '0.95',
                  marginBottom: '24px',
                }}
              >
                <span className="gradient-text">2.18×</span>
                <br />
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 400,
                    color: 'rgba(232,240,255,0.4)',
                  }}
                >
                  Faster than any API
                </span>
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.85',
                  color: 'rgba(232,240,255,0.5)',
                  marginBottom: '36px',
                  fontWeight: 300,
                }}
              >
                Native binary. GPU inference. Zero network overhead. The numbers
                speak for themselves.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {[
                  { label: 'Native binary', color: '#00b4ff' },
                  { label: 'GPU-accelerated Whisper', color: '#7c3aed' },
                  { label: 'Zero API round-trips', color: '#00d9a6' },
                  { label: 'Optimized audio pipeline', color: '#00b4ff' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: item.color,
                        boxShadow: `0 0 8px ${item.color}`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'rgba(232,240,255,0.5)',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {benchmarks.map((b, i) => (
                <div
                  key={i}
                  className={`bench-row ${b.winner ? 'winner' : ''}`}
                >
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
                        fontSize: '13px',
                        color: b.winner ? '#e8f0ff' : 'rgba(232,240,255,0.45)',
                        fontWeight: b.winner ? 600 : 400,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      {b.winner && (
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#00b4ff',
                            boxShadow: '0 0 8px #00b4ff',
                            display: 'inline-block',
                          }}
                        />
                      )}
                      {b.name}
                    </span>
                    <span
                      className={display.className}
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: b.winner ? '#00b4ff' : 'rgba(232,240,255,0.25)',
                      }}
                    >
                      {b.time}s
                    </span>
                  </div>
                  <div
                    style={{
                      height: '3px',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.05)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${(b.time / 6.46) * 100}%`,
                        borderRadius: '2px',
                        background: b.winner
                          ? 'linear-gradient(90deg, #0066ff, #00b4ff)'
                          : 'rgba(255,255,255,0.1)',
                        boxShadow: b.winner
                          ? '0 0 10px rgba(0,180,255,0.5)'
                          : 'none',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Privacy */}
        <section
          style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(0,180,255,0.7)',
                letterSpacing: '0.22em',
                marginBottom: '16px',
                fontWeight: 500,
              }}
            >
              PRIVACY ARCHITECTURE
            </div>
            <h2
              className={display.className}
              style={{
                fontSize: '56px',
                fontWeight: 800,
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
              }}
            >
              Your Data Stays
              <br />
              <span className="gradient-text">On Your Machine</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '16px',
            }}
          >
            {[
              {
                badge: 'Default',
                badgeColor: '#00d9a6',
                badgeBg: 'rgba(0,217,166,0.1)',
                title: 'Local Transcription',
                desc: 'Whisper runs entirely on your CPU or GPU. No external API calls. Your voice is processed and stays local.',
                icon: '🔒',
              },
              {
                badge: 'Default',
                badgeColor: '#00d9a6',
                badgeBg: 'rgba(0,217,166,0.1)',
                title: 'On-Device Storage',
                desc: 'Activity logs and audio recordings are stored on your machine. Full control over retention and deletion.',
                icon: '💾',
              },
              {
                badge: 'Optional',
                badgeColor: '#7c3aed',
                badgeBg: 'rgba(124,58,237,0.1)',
                title: 'Cloud LLM Cleanup',
                desc: 'External text refinement via LLMs is opt-in only. Supply your own API key. Default is always off.',
                icon: '☁',
              },
            ].map((p) => (
              <div key={p.title} className="priv-card">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      background: p.badgeBg,
                      color: p.badgeColor,
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      border: `1px solid ${p.badgeColor}30`,
                      fontWeight: 600,
                    }}
                  >
                    {p.badge}
                  </div>
                  <span style={{ fontSize: '22px' }}>{p.icon}</span>
                </div>
                <h3
                  className={display.className}
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: '#e8f0ff',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.7',
                    color: 'rgba(232,240,255,0.45)',
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
            position: 'relative',
          }}
        >
          {/* Glow behind CTA */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '600px',
              height: '300px',
              background:
                'radial-gradient(ellipse, rgba(0,80,200,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(0,180,255,0.7)',
                letterSpacing: '0.25em',
                marginBottom: '20px',
                fontWeight: 500,
              }}
            >
              START FOR FREE
            </div>
            <h2
              className={display.className}
              style={{
                fontSize: '80px',
                fontWeight: 900,
                lineHeight: '0.95',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="shimmer-text">Own Your Voice.</span>
              <br />
              <span
                style={{
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'rgba(232,240,255,0.35)',
                }}
              >
                No cloud. No subscription.
              </span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(232,240,255,0.45)',
                maxWidth: '500px',
                margin: '0 auto 48px',
                lineHeight: '1.85',
                fontWeight: 300,
              }}
            >
              One download. Local inference. Instant voice-to-text that respects
              your privacy and beats every API on speed.
            </p>
            <div
              style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
            >
              <button
                className="btn-cyber"
                style={{ padding: '16px 56px', fontSize: '13px' }}
              >
                Download OiPer
              </button>
              <button className="btn-ghost-cyber">View on GitHub</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '32px 64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="glass"
        >
          <div
            className={display.className}
            style={{ fontSize: '20px', fontWeight: 800 }}
          >
            <span className="gradient-text">OiPer</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['GitHub', 'Docs', 'Changelog', 'Discord'].map((l) => (
              <span key={l} className="nav-link">
                {l}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: '12px',
              color: 'rgba(232,240,255,0.2)',
              letterSpacing: '0.06em',
            }}
          >
            © 2025 OiPer Desktop
          </span>
        </footer>
      </div>
    </div>
  )
}
