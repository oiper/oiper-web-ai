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
  Check,
  Gauge,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.8, ease: "power2.out" })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center">
          <Mic className="w-4 h-4 text-white" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">OiPer</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        <a href="#speed" className="hover:text-white transition-colors">Speed</a>
      </div>
      <button className="px-5 py-2.5 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
        Download
      </button>
    </nav>
  )
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".glass-orb-1", { scale: 0, opacity: 0, duration: 1.2 })
        .from(".glass-orb-2", { scale: 0, opacity: 0, duration: 1.2 }, "-=0.8")
        .from(".glass-orb-3", { scale: 0, opacity: 0, duration: 1 }, "-=0.6")
        .from(".hero-badge-g", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-title-g", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
        .from(".hero-sub-g", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-ctas-g", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-glass-card", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="glass-orb-1 absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#38bdf8]/20 blur-[100px]" />
      <div className="glass-orb-2 absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#818cf8]/20 blur-[120px]" />
      <div className="glass-orb-3 absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#f472b6]/15 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="hero-badge-g inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs text-white/60 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          Privacy-first transcription
        </div>

        <h1 className="hero-title-g text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-center text-white leading-[0.95] max-w-5xl text-balance">
          Your voice,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6]">
            crystallized
          </span>
        </h1>

        <p className="hero-sub-g mt-8 text-base md:text-lg text-white/40 text-center max-w-xl leading-relaxed">
          A translucent desktop app that transforms speech into text with
          one hotkey. Local processing, instant results, zero compromise.
        </p>

        <div className="hero-ctas-g flex items-center gap-4 mt-10">
          <button className="group flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" />
            Download Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3.5 border border-white/10 bg-white/5 backdrop-blur-md text-white/60 rounded-xl text-sm hover:text-white hover:border-white/20 transition-all">
            Learn More
          </button>
        </div>

        <GlassCard className="hero-glass-card mt-16 w-full max-w-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
            <span className="ml-3 text-xs text-white/30">oiper-desktop</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38bdf8]/20 to-[#818cf8]/20 border border-white/10 flex items-center justify-center">
              <Mic className="w-6 h-6 text-[#38bdf8]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white/80">Transcribing...</p>
              <p className="text-xs text-white/30">Ctrl + Shift + Space</p>
            </div>
            <span className="text-xs text-[#38bdf8] font-mono">1.5s</span>
          </div>
          <div className="flex gap-1 items-end h-10 mt-6">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-full bg-gradient-to-t from-[#38bdf8]/40 to-[#818cf8]/40"
                style={{
                  height: `${Math.random() * 100}%`,
                  minHeight: "3px",
                }}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    { icon: Keyboard, title: "Global Hotkey", desc: "Press and hold to record, release to transcribe. Seamless workflow in any application." },
    { icon: Zap, title: "Instant Injection", desc: "Text appears directly in your focused application the moment transcription completes." },
    { icon: Shield, title: "Local Processing", desc: "All transcription happens on-device. Your voice data never leaves your machine." },
    { icon: Cpu, title: "GPU Accelerated", desc: "Native code with optional GPU acceleration for sub-second transcription speeds." },
    { icon: Globe, title: "Optional Cloud", desc: "Enable online text optimization with your own API key. Fully opt-in, always." },
    { icon: Settings, title: "Deep Config", desc: "Custom models, backend selection, LLM integration for technical accuracy." },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current.querySelectorAll(".glass-feat"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    })
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative px-6 py-32">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#818cf8]/10 blur-[120px]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Beautifully capable
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <GlassCard key={f.title} className="glass-feat group p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38bdf8]/10 to-[#818cf8]/10 border border-white/10 flex items-center justify-center mb-5 group-hover:from-[#38bdf8]/20 group-hover:to-[#818cf8]/20 transition-all">
                <f.icon className="w-5 h-5 text-[#38bdf8]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </GlassCard>
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
      gsap.from(".priv-glass", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="privacy" ref={sectionRef} className="relative px-6 py-32">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#f472b6]/10 blur-[100px]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3">Privacy</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Transparent privacy
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto leading-relaxed">
            Your data stays on your device. Always. Online services are strictly opt-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Lock,
              title: "Local Engine",
              items: ["On-device transcription", "No network calls", "Zero telemetry"],
            },
            {
              icon: Shield,
              title: "Data Sovereignty",
              items: ["Audio stays local", "Logs on-device", "Full ownership"],
            },
            {
              icon: Globe,
              title: "Opt-In Cloud",
              items: ["Your API key", "Enable on demand", "Disable instantly"],
            },
          ].map((block) => (
            <GlassCard key={block.title} className="priv-glass p-7">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38bdf8]/10 to-[#818cf8]/10 border border-white/10 flex items-center justify-center mb-5">
                <block.icon className="w-5 h-5 text-[#818cf8]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{block.title}</h3>
              <ul className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/40">
                    <Check className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeedSection() {
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
    <section id="speed" ref={sectionRef} className="relative px-6 py-32">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#38bdf8]/10 blur-[120px] -translate-y-1/2" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3">Performance</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Lightning fast
          </h2>
          <p className="mt-4 text-white/40 max-w-md mx-auto leading-relaxed">
            30 seconds of audio transcribed in just 1.5 seconds.
          </p>
        </div>

        <GlassCard className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <Gauge className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-xs text-white/30 uppercase tracking-wider">
              Benchmark: 30s English Audio
            </span>
          </div>
          <div className="flex flex-col gap-5">
            {benchmarks.map((b, i) => (
              <div key={b.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${b.highlight ? "font-semibold text-white" : "text-white/40"}`}>
                    {b.name}
                  </span>
                  <span className={`text-sm font-mono ${b.highlight ? "text-[#38bdf8]" : "text-white/20"}`}>
                    {b.time}s
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-white/5">
                  <div
                    ref={(el) => { barRefs.current[i] = el }}
                    className={`h-full rounded-full ${b.highlight
                        ? "bg-gradient-to-r from-[#38bdf8] to-[#818cf8]"
                        : "bg-white/10"
                      }`}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current.querySelector(".cta-glass"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.08)_0%,_transparent_60%)]" />
      <GlassCard className="cta-glass max-w-3xl mx-auto text-center p-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
          Experience clarity
        </h2>
        <p className="text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
          Download OiPer Desktop and transform your voice into text with crystal-clear precision.
        </p>
        <button className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <Download className="w-4 h-4" />
          Download OiPer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </GlassCard>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center">
            <Mic className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-medium text-white/60">OiPer</span>
        </div>
        <span className="text-xs text-white/20">Crystal-clear transcription</span>
      </div>
    </footer>
  )
}

export default function LandingPageOpus5() {
  return (
    <div className="bg-[#0c0c14] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PrivacySection />
      <SpeedSection />
      <CTASection />
      <Footer />
    </div>
  )
}
