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
  ArrowDown,
  Check,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#fcfcfc]/90 backdrop-blur-md border-b border-[#eee]"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center">
          <Mic className="w-4 h-4 text-[#fcfcfc]" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-[#111]">OiPer</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm text-[#777]">
        <a href="#features" className="hover:text-[#111] transition-colors">Features</a>
        <a href="#privacy" className="hover:text-[#111] transition-colors">Privacy</a>
        <a href="#speed" className="hover:text-[#111] transition-colors">Speed</a>
      </div>
      <button className="px-5 py-2.5 bg-[#111] text-[#fcfcfc] rounded-full text-sm font-medium hover:bg-[#333] transition-colors">
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
      tl.from(".hero-tag", { y: 20, opacity: 0, duration: 0.6, delay: 0.3 })
        .from(".hero-title span", { y: 80, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.3")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-demo", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-[#fcfcfc]"
    >
      <div className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e0e0e0] text-xs text-[#777] mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
        v2.0 now available
      </div>

      <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center text-[#111] leading-[1.05] max-w-4xl">
        <span className="block">Voice to text,</span>
        <span className="block text-[#bbb]">instantly.</span>
      </h1>

      <p className="hero-subtitle mt-8 text-base md:text-lg text-[#888] text-center max-w-xl leading-relaxed">
        A minimal desktop app that transcribes your voice the moment you stop
        speaking. Private, fast, and completely seamless.
      </p>

      <div className="hero-cta flex items-center gap-4 mt-10">
        <button className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#111] text-[#fcfcfc] rounded-full text-sm font-medium hover:bg-[#333] transition-colors">
          <Download className="w-4 h-4" />
          Download Free
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button className="px-6 py-3.5 text-[#777] border border-[#ddd] rounded-full text-sm hover:text-[#111] hover:border-[#bbb] transition-all">
          Learn More
        </button>
      </div>

      <div className="hero-demo mt-20 w-full max-w-3xl">
        <div className="rounded-2xl border border-[#e8e8e8] bg-[#f7f7f7] p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-xs text-[#aaa] font-mono">OiPer Desktop</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center">
              <Mic className="w-5 h-5 text-[#fcfcfc]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#111]">Recording...</p>
              <p className="text-xs text-[#aaa]">Hold Ctrl+Shift+Space</p>
            </div>
          </div>
          <div className="flex gap-1 items-end h-12">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-[#111] rounded-full opacity-20"
                style={{
                  height: `${Math.random() * 100}%`,
                  minHeight: "4px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 animate-bounce">
        <ArrowDown className="w-5 h-5 text-[#ccc]" />
      </div>
    </section>
  )
}

function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Keyboard,
      title: "Global Hotkey",
      desc: "Press and hold to record, release to transcribe. Seamless in every app.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      desc: "Text injected directly into your active application in under 2 seconds.",
    },
    {
      icon: Shield,
      title: "Local First",
      desc: "All processing happens on your machine. Your voice never leaves your device.",
    },
    {
      icon: Cpu,
      title: "Native Speed",
      desc: "Built with native code for minimal latency and resource usage.",
    },
    {
      icon: Globe,
      title: "Optional Cloud",
      desc: "Enable online optimization with your own API key when you need it.",
    },
    {
      icon: Settings,
      title: "Customizable",
      desc: "Choose models, backends, and processing modes to fit your workflow.",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current.querySelectorAll(".feat-card"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
    })
  }, [])

  return (
    <section id="features" ref={sectionRef} className="px-6 py-32 bg-[#fcfcfc]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#aaa] mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111]">
            Simple by design
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="feat-card text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#f3f3f3] flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-6 h-6 text-[#111]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111] mb-2">{f.title}</h3>
              <p className="text-sm text-[#999] leading-relaxed">{f.desc}</p>
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
      gsap.from(".priv-block", {
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
    <section id="privacy" ref={sectionRef} className="px-6 py-32 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#aaa] mb-3">Privacy</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111]">
            Privacy is not optional
          </h2>
          <p className="mt-4 text-[#999] max-w-lg mx-auto leading-relaxed">
            Everything runs on your machine by default. Online services are always opt-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Lock,
              title: "Local Processing",
              items: [
                "Transcription on-device",
                "No external API calls",
                "Zero network dependency",
              ],
            },
            {
              icon: Shield,
              title: "Data Stays Here",
              items: [
                "Audio never leaves device",
                "Logs stored locally",
                "Full data ownership",
              ],
            },
            {
              icon: Globe,
              title: "Your Choice",
              items: [
                "Online services opt-in",
                "Bring your own API key",
                "Disable anytime",
              ],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="priv-block p-8 rounded-2xl bg-[#fcfcfc] border border-[#eee]"
            >
              <block.icon className="w-6 h-6 text-[#111] mb-5" />
              <h3 className="text-lg font-semibold text-[#111] mb-4">{block.title}</h3>
              <ul className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[#777]"
                  >
                    <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
          duration: 1,
          delay: i * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      )
    })
  }, [])

  return (
    <section id="speed" ref={sectionRef} className="px-6 py-32 bg-[#fcfcfc]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#aaa] mb-3">Speed</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111]">
            Unreasonably fast
          </h2>
          <p className="mt-4 text-[#999] max-w-md mx-auto leading-relaxed">
            30 seconds of audio transcribed in 1.5 seconds with native performance.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {benchmarks.map((b, i) => (
            <div key={b.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-sm ${b.highlight ? "font-semibold text-[#111]" : "text-[#999]"}`}>
                  {b.name}
                </span>
                <span className={`text-sm font-mono ${b.highlight ? "text-[#111] font-semibold" : "text-[#bbb]"}`}>
                  {b.time}s
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#f0f0f0]">
                <div
                  ref={(el) => { barRefs.current[i] = el }}
                  className={`h-full rounded-full ${b.highlight ? "bg-[#111]" : "bg-[#ddd]"}`}
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
    gsap.from(sectionRef.current.querySelector(".cta-inner"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
  }, [])

  return (
    <section ref={sectionRef} className="px-6 py-32 bg-[#f7f7f7]">
      <div className="cta-inner max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111] mb-4 text-balance">
          Start transcribing today
        </h2>
        <p className="text-[#999] mb-10 leading-relaxed">
          Free, private, and ready when you are.
        </p>
        <button className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#111] text-[#fcfcfc] rounded-full text-sm font-medium hover:bg-[#333] transition-colors">
          <Download className="w-4 h-4" />
          Download OiPer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-8 bg-[#fcfcfc] border-t border-[#eee]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-sm text-[#111] font-medium">OiPer</span>
        <span className="text-xs text-[#bbb]">Privacy-first transcription</span>
      </div>
    </footer>
  )
}

export default function LandingPageOpus2() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
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
