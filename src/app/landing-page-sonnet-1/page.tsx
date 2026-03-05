'use client'

import { JetBrains_Mono } from 'next/font/google'
import { useEffect, useState } from 'react'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const terminalLines = [
  { text: "$ oiper --listen --hotkey='Alt+Shift+R'", type: 'cmd' },
  { text: '> Loaded: whisper-large-v3 (GPU: RTX 4070 ✓)', type: 'info' },
  { text: '> Hotkey registered. System ready.', type: 'ready' },
  { text: '$ [HOLDING ALT+SHIFT+R — RECORDING 8.3s ●]', type: 'cmd' },
  { text: '> Captured 8.3s of audio. Transcribing...', type: 'info' },
  { text: '> "Let me walk through the quarterly numbers"', type: 'result' },
  { text: '> Injected into Slack (active window)', type: 'success' },
  { text: '> Total: 1.5s — 2.18× faster than nearest API', type: 'success' },
]

const lineColor = (type: string) =>
  type === 'cmd'
    ? '#00ff41'
    : type === 'result'
      ? '#ffffa0'
      : type === 'success'
        ? '#80ffb0'
        : type === 'ready'
          ? '#80d4ff'
          : 'rgba(200,255,200,0.65)'

const features = [
  {
    tag: 'hotkey.init()',
    name: 'Global Hotkey',
    desc: 'Press-and-hold activation across every app, every window. No context switch.',
  },
  {
    tag: 'privacy.local()',
    name: 'Local Inference',
    desc: 'Whisper runs on your hardware. Audio never leaves the machine unless you choose.',
  },
  {
    tag: 'backend.gpu()',
    name: 'GPU Acceleration',
    desc: 'CUDA and Metal supported. Auto-detect or force-select your backend.',
  },
  {
    tag: 'llm.cleanup()',
    name: 'LLM Text Cleanup',
    desc: 'Gemini Flash Lite, local models, any OpenAI-compatible API for text polish.',
  },
  {
    tag: 'inject.active()',
    name: 'Direct Injection',
    desc: 'Transcribed text lands in your focused input. No clipboard. No paste.',
  },
  {
    tag: 'model.manage()',
    name: 'Model Manager',
    desc: 'Choose Whisper model size. Download, switch, and delete from built-in UI.',
  },
]

const benchmarks = [
  { name: 'OiPer Desktop', time: 1.5, winner: true },
  { name: 'Lemonfox API', time: 3.27, winner: false },
  { name: 'Python Faster-Whisper', time: 3.55, winner: false },
  { name: 'OpenAI Whisper 1 API', time: 6.46, winner: false },
]

const privacy = [
  {
    label: 'SECURE',
    c: '#00ff41',
    title: 'On-Device Audio',
    desc: 'Recording is captured and processed locally. Never persisted by default.',
  },
  {
    label: 'SECURE',
    c: '#00ff41',
    title: 'Local Transcription',
    desc: 'Whisper runs on your CPU or GPU. No API calls, no data egress, ever.',
  },
  {
    label: 'OPT-IN',
    c: '#ffffa0',
    title: 'Cloud LLM Cleanup',
    desc: 'Text polishing via cloud is entirely optional. Requires your own API key.',
  },
]

export default function LandingPage1() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const delay = visibleLines === 0 ? 600 : visibleLines === 3 ? 1200 : 650
      const t = setTimeout(() => setVisibleLines((v) => v + 1), delay)
      return () => clearTimeout(t)
    }
  }, [visibleLines])

  return (
    <div
      className={mono.className}
      style={{ background: '#060b06', color: '#c4ffc4', minHeight: '100vh' }}
    >
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeSlide { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }
        @keyframes glowPulse {
          0%,100%{text-shadow:0 0 8px #00ff41,0 0 24px #00ff41}
          50%{text-shadow:0 0 4px #00ff41,0 0 10px #00ff41}
        }
        .cursor::after{content:'█';color:#00ff41;animation:blink 1s step-start infinite}
        .tline{animation:fadeSlide 0.2s ease forwards}
        .glow{animation:glowPulse 3s ease infinite}
        .crt::after{
          content:'';position:fixed;inset:0;pointer-events:none;z-index:9999;
          background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.032) 3px,rgba(0,0,0,0.032) 4px);
        }
        .nav-lnk:hover{color:#00ff41!important}
        .feat-card{
          border:1px solid rgba(0,255,65,0.1);padding:28px;background:#060b06;
          transition:border-color .25s,background .25s;
        }
        .feat-card:hover{border-color:rgba(0,255,65,0.45);background:rgba(0,255,65,0.035)}
        .btn-g{
          background:transparent;border:1px solid #00ff41;color:#00ff41;
          padding:13px 36px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;
          cursor:pointer;transition:all .2s;font-family:inherit;
        }
        .btn-g:hover{background:#00ff41;color:#060b06;box-shadow:0 0 30px rgba(0,255,65,.35)}
        .btn-ghost{
          background:transparent;border:1px solid rgba(200,255,200,.16);
          color:rgba(200,255,200,.4);padding:13px 36px;font-size:12px;
          letter-spacing:.18em;text-transform:uppercase;cursor:pointer;
          transition:all .2s;font-family:inherit;
        }
        .btn-ghost:hover{border-color:rgba(200,255,200,.38);color:rgba(200,255,200,.72)}
        .priv-card{border:1px solid transparent;padding:24px;transition:border-color .25s}
        .priv-card:hover{border-color:rgba(0,255,65,.2)!important}
      `}</style>

      <div className="crt">
        {/* Nav */}
        <nav
          style={{
            padding: '16px 56px',
            borderBottom: '1px solid rgba(0,255,65,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{ color: '#00ff41', fontSize: '20px', fontWeight: 700 }}
              className="glow"
            >
              oiper
            </span>
            <span style={{ color: 'rgba(0,255,65,0.35)', fontSize: '13px' }}>
              @desktop
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '36px',
              fontSize: '12px',
              color: 'rgba(200,255,200,0.38)',
              letterSpacing: '0.06em',
            }}
          >
            {['[features]', '[benchmark]', '[privacy]', '[docs]'].map((n) => (
              <span
                key={n}
                className="nav-lnk"
                style={{
                  cursor: 'pointer',
                  color: 'rgba(200,255,200,0.38)',
                  transition: 'color .15s',
                }}
              >
                {n}
              </span>
            ))}
          </div>
          <button
            className="btn-g"
            style={{ padding: '8px 20px', fontSize: '11px' }}
          >
            download
          </button>
        </nav>

        {/* Hero */}
        <section
          style={{
            padding: '88px 56px',
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: 'rgba(0,255,65,0.45)',
                marginBottom: '22px',
              }}
            >
              {'# privacy-first voice-to-text desktop'}
            </div>
            <h1 style={{ lineHeight: '0.9', marginBottom: '28px' }}>
              <span
                style={{
                  fontSize: '92px',
                  fontWeight: 700,
                  color: '#00ff41',
                  display: 'block',
                }}
                className="glow"
              >
                OiPer
              </span>
              <span
                style={{
                  fontSize: '22px',
                  color: 'rgba(200,255,200,0.28)',
                  fontWeight: 400,
                  letterSpacing: '0.35em',
                  display: 'block',
                  marginTop: '14px',
                }}
              >
                DESKTOP v2.0
              </span>
            </h1>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.85',
                color: 'rgba(200,255,200,0.6)',
                marginBottom: '40px',
                maxWidth: '420px',
              }}
            >
              Hold a global hotkey. Speak. Release.
              <br />
              Whisper processes audio locally — no cloud, no lag, no data leaks.
              <br />
              Text injects directly into any active application.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '56px',
                flexWrap: 'wrap',
              }}
            >
              <button className="btn-g">./install.sh</button>
              <button className="btn-ghost">read --docs</button>
            </div>
            <div style={{ display: 'flex', gap: '44px' }}>
              {[
                ['1.5s', 'avg transcription', '#00ff41'],
                ['0KB', 'cloud data sent', '#80ffb0'],
                ['2.18×', 'faster than APIs', '#ffffa0'],
              ].map(([v, l, c]) => (
                <div key={l}>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: c,
                      lineHeight: 1,
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'rgba(200,255,200,0.35)',
                      marginTop: '6px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div
            style={{
              border: '1px solid rgba(0,255,65,0.2)',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 0 80px rgba(0,255,65,0.06)',
            }}
          >
            <div
              style={{
                padding: '10px 16px',
                background: 'rgba(0,255,65,0.05)',
                borderBottom: '1px solid rgba(0,255,65,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }}
            >
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <div
                  key={c}
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    background: c,
                    opacity: 0.85,
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: '10px',
                  fontSize: '12px',
                  color: 'rgba(0,255,65,0.35)',
                }}
              >
                oiper — bash — 80×24
              </span>
            </div>
            <div
              style={{
                padding: '24px 20px',
                minHeight: '320px',
                background: 'rgba(1,5,1,0.92)',
              }}
            >
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className="tline"
                  style={{
                    marginBottom: '8px',
                    fontSize: '13px',
                    color: lineColor(line.type),
                    lineHeight: '1.5',
                  }}
                >
                  {line.text}
                </div>
              ))}
              {visibleLines < terminalLines.length && (
                <span className="cursor" style={{ fontSize: '13px' }} />
              )}
              {visibleLines >= terminalLines.length && (
                <div
                  style={{
                    marginTop: '18px',
                    borderTop: '1px solid rgba(0,255,65,0.08)',
                    paddingTop: '14px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(0,255,65,0.35)',
                      lineHeight: '1.9',
                    }}
                  >
                    <div>$ # Audio: processed on-device only</div>
                    <div>$ # Logs: stored locally, never transmitted</div>
                  </div>
                  <span
                    className="cursor"
                    style={{
                      fontSize: '13px',
                      marginTop: '8px',
                      display: 'inline-block',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <div
          style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 56px' }}
        >
          <div
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg,transparent,rgba(0,255,65,.18),transparent)',
            }}
          />
        </div>

        {/* Features */}
        <section
          style={{ padding: '80px 56px', maxWidth: '1240px', margin: '0 auto' }}
        >
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(0,255,65,0.4)',
                letterSpacing: '0.25em',
                marginBottom: '10px',
              }}
            >
              $ ls ./core-features/
            </div>
            <h2 style={{ fontSize: '44px', fontWeight: 700, color: '#00ff41' }}>
              Core Modules
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '1px',
              background: 'rgba(0,255,65,0.06)',
            }}
          >
            {features.map((f) => (
              <div key={f.name} className="feat-card">
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(0,255,65,0.3)',
                    marginBottom: '14px',
                    letterSpacing: '0.06em',
                  }}
                >
                  {f.tag}
                </div>
                <h3
                  style={{
                    color: '#00ff41',
                    fontWeight: 700,
                    fontSize: '15px',
                    marginBottom: '10px',
                  }}
                >
                  {f.name}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(200,255,200,0.5)',
                    lineHeight: '1.65',
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 56px' }}
        >
          <div
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg,transparent,rgba(0,255,65,.18),transparent)',
            }}
          />
        </div>

        {/* Benchmark */}
        <section
          style={{
            padding: '80px 56px',
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '5fr 6fr',
            gap: '72px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(0,255,65,0.4)',
                letterSpacing: '0.25em',
                marginBottom: '10px',
              }}
            >
              $ benchmark --audio=30s --lang=en
            </div>
            <h2
              style={{
                fontSize: '44px',
                fontWeight: 700,
                color: '#00ff41',
                marginBottom: '16px',
              }}
            >
              Benchmark
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(200,255,200,0.55)',
                lineHeight: '1.8',
                marginBottom: '28px',
              }}
            >
              Tested on 30 seconds of English audio. Native code wins — every
              time.
            </p>
            <div
              style={{
                fontSize: '13px',
                color: 'rgba(0,255,65,0.5)',
                lineHeight: '2.2',
              }}
            >
              {[
                'Native binary — no Python overhead',
                'GPU-accelerated Whisper inference',
                'Optimized local audio pipeline',
                'Zero network round-trips',
              ].map((item) => (
                <div key={item}>{'> ' + item}</div>
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
                    marginBottom: '8px',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      color: b.winner ? '#00ff41' : 'rgba(200,255,200,0.58)',
                      fontWeight: b.winner ? 700 : 400,
                    }}
                  >
                    {b.winner && '★ '}
                    {b.name}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: b.winner ? '#00ff41' : 'rgba(200,255,200,0.42)',
                    }}
                  >
                    {b.time}s
                  </span>
                </div>
                <div
                  style={{
                    height: '4px',
                    width: `${(b.time / 6.46) * 100}%`,
                    background: b.winner ? '#00ff41' : 'rgba(0,255,65,0.18)',
                    borderRadius: '2px',
                    transition: 'width 0.5s',
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <div
          style={{
            background: 'rgba(0,255,65,0.015)',
            borderTop: '1px solid rgba(0,255,65,0.07)',
            borderBottom: '1px solid rgba(0,255,65,0.07)',
          }}
        >
          <section
            style={{
              padding: '80px 56px',
              maxWidth: '1240px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                color: 'rgba(0,255,65,0.4)',
                letterSpacing: '0.25em',
                marginBottom: '10px',
              }}
            >
              $ cat privacy.conf
            </div>
            <h2
              style={{
                fontSize: '44px',
                fontWeight: 700,
                color: '#00ff41',
                marginBottom: '48px',
              }}
            >
              Privacy Architecture
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: '24px',
              }}
            >
              {privacy.map((p) => (
                <div
                  key={p.title}
                  className="priv-card"
                  style={{ borderColor: `${p.c}18` }}
                >
                  <div
                    style={{
                      fontSize: '10px',
                      color: p.c,
                      letterSpacing: '0.25em',
                      fontWeight: 700,
                      marginBottom: '14px',
                    }}
                  >
                    [{p.label}]
                  </div>
                  <h3
                    style={{
                      color: 'rgba(200,255,200,0.9)',
                      fontWeight: 700,
                      fontSize: '15px',
                      marginBottom: '10px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(200,255,200,0.5)',
                      lineHeight: '1.65',
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
        <section style={{ padding: '100px 56px', textAlign: 'center' }}>
          <div
            style={{
              fontSize: '11px',
              color: 'rgba(0,255,65,0.4)',
              letterSpacing: '0.3em',
              marginBottom: '20px',
            }}
          >
            {'> SYSTEM READY'}
          </div>
          <h2
            style={{
              fontSize: '80px',
              fontWeight: 700,
              color: '#00ff41',
              lineHeight: '0.95',
              marginBottom: '24px',
            }}
            className="glow"
          >
            Own Your Voice.
            <br />
            <span
              style={{
                fontSize: '30px',
                color: 'rgba(200,255,200,0.35)',
                fontWeight: 400,
              }}
            >
              No cloud required.
            </span>
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(200,255,200,0.5)',
              maxWidth: '460px',
              margin: '0 auto 48px',
              lineHeight: '1.75',
            }}
          >
            Fast, local, and entirely under your control.
          </p>
          <button
            className="btn-g"
            style={{
              fontSize: '14px',
              padding: '16px 56px',
              letterSpacing: '0.2em',
            }}
          >
            ./install oiper-desktop
          </button>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid rgba(0,255,65,0.1)',
            padding: '28px 56px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: 'rgba(0,255,65,0.3)',
            letterSpacing: '0.05em',
          }}
        >
          <span
            className="glow"
            style={{ color: '#00ff41', fontSize: '15px', fontWeight: 700 }}
          >
            OiPer_
          </span>
          <div style={{ display: 'flex', gap: '28px' }}>
            {['GitHub', 'Documentation', 'Releases', 'Discord'].map((l) => (
              <span
                key={l}
                className="nav-lnk"
                style={{
                  cursor: 'pointer',
                  color: 'rgba(0,255,65,0.3)',
                  transition: 'color .15s',
                }}
              >
                {l}
              </span>
            ))}
          </div>
          <span>© 2025 OiPer — exit 0</span>
        </footer>
      </div>
    </div>
  )
}
