"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Mic,
  Shield,
  Zap,
  Lock,
  Cpu,
  Globe,
  ArrowRight,
  Keyboard,
  Settings,
  Download,
  Terminal,
  Gauge,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 0.8, ease: "power3.out" })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0a0a12]/90 backdrop-blur-lg border-b border-[#00e5ff]/10"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#00e5ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)]">
          <Mic className="w-4 h-4 text-[#0a0a12]" />
        </div>
        <span className="text-lg font-bold tracking-wider text-[#00e5ff] font-mono uppercase">
          OiPer
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#555]">
        <a href="#features" className="hover:text-[#00e5ff] transition-colors">Features</a>
        <a href="#privacy" className="hover:text-[#00e5ff] transition-colors">Security</a>
        <a href="#benchmarks" className="hover:text-[#00e5ff] transition-colors">Benchmarks</a>
      </div>
      <button className="px-5 py-2.5 bg-[#00e5ff] text-[#0a0a12] rounded text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
        Download
      </button>
    </nav>
  )
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.from(".neon-line-l", { scaleY: 0, duration: 0.6, transformOrigin: "top" })
        .from(".neon-line-r", { scaleY: 0, duration: 0.6, transformOrigin: "top" }, "-=0.4")
        .from(".hero-badge-n", { scale: 0, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-title-n", { y: 80, opacity: 0, duration: 1 }, "-=0.3")
        .from(".hero-sub-n", { y: 40, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta-n", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-terminal", { y: 50, opacity: 0, duration: 0.8 }, "-=0.3")
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 bg-[#0a0a12] overflow-hidden"
    >
      {/* Neon vertical lines */}
      <div className="neon-line-l absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-[#00e5ff]/20 via-[#00e5ff]/5 to-transparent" />
      <div className="neon-line-r absolute right-[10%] top-0 w-px h-full bg-gradient-to-b from-[#ff0080]/20 via-[#ff0080]/5 to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="hero-badge-n inline-flex items-center gap-2 px-4 py-1.5 rounded border border-[#00e5ff]/20 bg-[#00e5ff]/5 text-xs font-mono text-[#00e5ff] mb-8">
        <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
        SYSTEM.ACTIVE
      </div>

      <h1 className="hero-title-n text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-center leading-[0.9] max-w-5xl">
        <span className="text-[#fafafa]">VOICE</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#ff0080]">
          DECODED
        </span>
      </h1>

      <p className="hero-sub-n mt-8 text-sm md:text-base font-mono text-[#555] text-center max-w-xl leading-relaxed">
        {'>'} press hotkey {'>'} speak {'>'} release {'>'} text injected
        <br />
        {'>'} local processing {'>'} zero latency {'>'} full privacy
      </p>

      <div className="hero-cta-n flex items-center gap-4 mt-10">
        <button className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#00e5ff] text-[#0a0a12] rounded text-sm font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all">
          <Download className="w-4 h-4" />
          Install
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="flex items-center gap-2 px-6 py-3.5 border border-[#ff0080]/30 text-[#ff0080] rounded text-xs font-mono uppercase tracking-wider hover:bg-[#ff0080]/10 transition-all">
          <Terminal className="w-4 h-4" />
          Source Code
        </button>
      </div>

      <div className="hero-terminal mt-16 w-full max-w-2xl">
        <div className="rounded-lg border border-[#1a1a2e] bg-[#0d0d1a] p-6 font-mono text-sm">
          <div className="flex items-center gap-2 mb-4 text-[#555]">
            <Terminal className="w-4 h-4" />
            <span className="text-xs">oiper.terminal</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-[#00e5ff]">
              {'$'} oiper --backend gpu --model large-v3
            </p>
            <p className="text-[#555]">
              {'>'} Loading model... done (0.3s)
            </p>
            <p className="text-[#555]">
              {'>'} GPU acceleration: enabled
            </p>
            <p className="text-[#555]">
              {'>'} Listening for hotkey...
            </p>
            <p className="text-[#22c55e]">
              {'>'} Transcription complete: 1.5s
            </p>
            <span className="inline-block w-2 h-4 bg-[#00e5ff] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    { icon: Keyboard, title: "HOTKEY_BIND", desc: "Global shortcut. Hold to record, release to transcribe. Any application." },
    { icon: Zap, title: "INJECT_TEXT", desc: "Instant text injection into your focused app. Sub-second delivery." },
    { icon: Shield, title: "LOCAL_PROC", desc: "On-device transcription. Zero external calls. Your data stays yours." },
    { icon: Cpu, title: "GPU_ACCEL", desc: "Native code with GPU acceleration. Maximum throughput, minimal resources." },
    { icon: Globe, title: "CLOUD_OPT", desc: "Optional online services. Bring your API key. Full control always." },
    { icon: Settings, title: "CONFIG_SYS", desc: "Model selection, backend prefs, LLM transcription for technical content." },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current.querySelectorAll(".neon-card"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    })
  }, [])

  return (
    <section id="features" ref={sectionRef} className="px-6 py-32 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00e5ff] mb-4">
          // SYSTEM CAPABILITIES
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#fafafa] mb-16 max-w-3xl">
          Feature <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#ff0080]">Matrix</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="neon-card group p-6 rounded-lg border border-[#1a1a2e] bg-[#0d0d1a] hover:border-[#00e5ff]/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-4">
                <f.icon className="w-5 h-5 text-[#00e5ff]" />
                <span className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider">
                  {f.title}
                </span>
              </div>
              <p className="text-sm text-[#666] leading-relaxed font-mono">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrivacySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".sec-row", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="privacy" ref={sectionRef} className="px-6 py-32 bg-[#08081a]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#ff0080] mb-4">
          // SECURITY PROTOCOL
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#fafafa] mb-16">
          Zero <span className="text-[#ff0080]">Leaks</span>
        </h2>

        <div className="flex flex-col gap-4">
          {[
            {
              icon: Lock,
              label: "LOCAL_TRANSCRIPTION",
              status: "ACTIVE",
              color: "#00e5ff",
              desc: "All speech-to-text processing runs on your hardware",
            },
            {
              icon: Shield,
              label: "DATA_ISOLATION",
              status: "ENFORCED",
              color: "#22c55e",
              desc: "Audio recordings and logs never transmitted externally",
            },
            {
              icon: Globe,
              label: "ONLINE_SERVICES",
              status: "OPT-IN",
              color: "#ff0080",
              desc: "Cloud optimization requires explicit user consent and API key",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="sec-row flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 rounded-lg border border-[#1a1a2e] bg-[#0d0d1a]"
            >
              <div className="flex items-center gap-3 md:w-64 shrink-0">
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
                <span className="text-xs font-mono uppercase tracking-wider text-[#fafafa]">
                  {item.label}
                </span>
              </div>
              <span
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border w-fit"
                style={{
                  color: item.color,
                  borderColor: `${item.color}30`,
                  backgroundColor: `${item.color}10`,
                }}
              >
                {item.status}
              </span>
              <p className="text-sm font-mono text-[#555] flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenchmarkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  const benchmarks = [
    { name: "OiPer Desktop", time: 1.5, highlight: true },
    { name: "Lemonfox API", time: 3.27, highlight: false },
    { name: "Python Faster-Whisper", time: 3.55, highlight: false },
    { name: "OpenAI Whisper 1 API", time: 6.46, highlight: false },
  ]

  const maxTime = 7

  useEffect(() => {
    if (!sectionRef.current) return
    barRefs.current.forEach((bar, i) => {
      if (!bar) return
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${(benchmarks[i].time / maxTime) * 100}%`,
          duration: 1.2,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      )
    })
  }, [])

  return (
    <section id="benchmarks" ref={sectionRef} className="px-6 py-32 bg-[#0a0a12]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00e5ff] mb-4">
          // BENCHMARK RESULTS
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#fafafa] mb-4">
          Speed <span className="text-[#00e5ff]">Test</span>
        </h2>
        <p className="text-sm font-mono text-[#555] mb-16">
          {'>'} input: 30sec english audio | metric: transcription time
        </p>

        <div className="flex flex-col gap-5">
          {benchmarks.map((b, i) => (
            <div key={b.name}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {b.highlight && (
                    <Gauge className="w-4 h-4 text-[#00e5ff]" />
                  )}
                  <span
                    className={`text-sm font-mono ${b.highlight ? "text-[#00e5ff] font-bold" : "text-[#555]"
                      }`}
                  >
                    {b.name}
                  </span>
                </div>
                <span
                  className={`text-sm font-mono ${b.highlight ? "text-[#00e5ff]" : "text-[#444]"
                    }`}
                >
                  {b.time}s
                </span>
              </div>
              <div className="w-full h-4 rounded bg-[#111125]">
                <div
                  ref={(el) => { barRefs.current[i] = el }}
                  className={`h-full rounded ${b.highlight
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#00e5ff]/60 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                      : "bg-[#1a1a2e]"
                    }`}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current.querySelector(".cta-neon"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [])

  return (
    <section ref={sectionRef} className="px-6 py-32 bg-[#08081a]">
      <div className="cta-neon max-w-3xl mx-auto text-center p-16 rounded-lg border border-[#00e5ff]/20 bg-[#0d0d1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.05)_0%,_transparent_60%)]" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00e5ff] mb-6">
            // INITIALIZE
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#fafafa] mb-6 text-balance">
            Ready to <span className="text-[#00e5ff]">deploy</span>?
          </h2>
          <p className="text-sm font-mono text-[#555] max-w-md mx-auto mb-10">
            Download OiPer Desktop. Free. Open source. Privacy guaranteed.
          </p>
          <button className="group inline-flex items-center gap-3 px-10 py-4 bg-[#00e5ff] text-[#0a0a12] rounded text-sm font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all">
            <Download className="w-5 h-5" />
            Download Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-8 bg-[#0a0a12] border-t border-[#1a1a2e]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider">OiPer Desktop</span>
        <span className="text-xs font-mono text-[#333]">{'>'} built for speed. designed for privacy.</span>
      </div>
    </footer>
  )
}

export default function LandingPageOpus3() {
  return (
    <div className="bg-[#0a0a12] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PrivacySection />
      <BenchmarkSection />
      <CTASection />
      <Footer />
    </div>
  )
}
