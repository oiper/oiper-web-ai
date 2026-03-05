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
  ChevronDown,
  Keyboard,
  Settings,
  Download,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#050505]/80 backdrop-blur-md border-b border-[#1a1a1a]"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#e4ff1a] flex items-center justify-center">
          <Mic className="w-4 h-4 text-[#050505]" />
        </div>
        <span className="text-xl font-bold tracking-tight text-[#fafafa]">OiPer</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-[#888]">
        <a href="#features" className="hover:text-[#fafafa] transition-colors">
          Features
        </a>
        <a href="#privacy" className="hover:text-[#fafafa] transition-colors">
          Privacy
        </a>
        <a href="#performance" className="hover:text-[#fafafa] transition-colors">
          Performance
        </a>
        <a href="#config" className="hover:text-[#fafafa] transition-colors">
          Configuration
        </a>
      </div>
      <button className="px-5 py-2.5 bg-[#e4ff1a] text-[#050505] rounded-lg text-sm font-semibold hover:bg-[#d4ef0a] transition-colors">
        Download
      </button>
    </nav>
  )
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.8 })
        .from(
          titleRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          subtitleRef.current,
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.4"
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(228,255,26,0.04)_0%,_transparent_70%)]" />

      <div
        ref={badgeRef}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] text-xs text-[#888] mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-[#e4ff1a] animate-pulse" />
        Privacy-first voice transcription
      </div>

      <h1
        ref={titleRef}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center text-[#fafafa] leading-[0.9] max-w-5xl text-balance"
      >
        Speak.
        <br />
        <span className="text-[#e4ff1a]">Transcribe.</span>
        <br />
        Done.
      </h1>

      <p
        ref={subtitleRef}
        className="mt-8 text-lg md:text-xl text-[#666] text-center max-w-2xl leading-relaxed"
      >
        Hold a hotkey to record, release to transcribe. Instantly injected into
        your active application. All on your machine.
      </p>

      <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-12">
        <button className="group flex items-center gap-3 px-8 py-4 bg-[#e4ff1a] text-[#050505] rounded-xl text-base font-semibold hover:bg-[#d4ef0a] transition-all">
          <Download className="w-5 h-5" />
          Download OiPer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="flex items-center gap-2 px-6 py-4 text-[#888] border border-[#222] rounded-xl text-sm hover:text-[#fafafa] hover:border-[#444] transition-all">
          View on GitHub
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#444]" />
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
      desc: "Press and hold to record, release to transcribe. Works in any application seamlessly.",
    },
    {
      icon: Zap,
      title: "Instant Injection",
      desc: "Text appears directly in your active app the moment transcription completes.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      desc: "Transcription runs entirely on your machine. No data leaves your device.",
    },
    {
      icon: Cpu,
      title: "GPU Accelerated",
      desc: "Native code with optional GPU acceleration for maximum transcription speed.",
    },
    {
      icon: Globe,
      title: "Flexible Backend",
      desc: "Choose local or online processing. Auto-detect, CPU-only, or GPU mode.",
    },
    {
      icon: Settings,
      title: "Fully Configurable",
      desc: "Custom model selection, API key management, and advanced LLM transcription.",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll(".feature-card")
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    })
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="px-6 py-32 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#e4ff1a] mb-4">
          Core Features
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#fafafa] mb-16 max-w-3xl">
          Everything you need.
          <br />
          <span className="text-[#444]">Nothing you don&apos;t.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card group p-8 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#e4ff1a]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center mb-6 group-hover:bg-[#e4ff1a]/10 transition-colors">
                <f.icon className="w-6 h-6 text-[#e4ff1a]" />
              </div>
              <h3 className="text-xl font-semibold text-[#fafafa] mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">{f.desc}</p>
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
    const els = sectionRef.current.querySelectorAll(".privacy-item")
    gsap.from(els, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: -60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    })
  }, [])

  return (
    <section
      id="privacy"
      ref={sectionRef}
      className="px-6 py-32 bg-[#080808]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#e4ff1a] mb-4">
            Privacy & Security
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-8">
            Your voice.
            <br />
            Your data.
            <br />
            <span className="text-[#444]">Your control.</span>
          </h2>
          <p className="text-[#666] leading-relaxed max-w-md">
            OiPer is designed from the ground up to keep your data private. Transcription
            runs locally, activity logs stay on-device, and online services are completely
            optional.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {[
            {
              icon: Lock,
              title: "Local Processing",
              desc: "Transcription runs entirely on your machine with no external calls.",
            },
            {
              icon: Shield,
              title: "On-Device Storage",
              desc: "Activity logs and audio recordings never leave your device.",
            },
            {
              icon: Globe,
              title: "Optional Online",
              desc: "Online optimization requires your own API key and is fully opt-in.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="privacy-item flex items-start gap-5 p-6 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e4ff1a]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#e4ff1a]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#fafafa] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
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
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )
    })
  }, [])

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="px-6 py-32 bg-[#050505]"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#e4ff1a] mb-4">
          Performance
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#fafafa] mb-4">
          Blazing fast.
        </h2>
        <p className="text-[#666] mb-16 max-w-xl">
          30 seconds of English audio transcribed in 1.5 seconds. Written in
          native code for maximum efficiency.
        </p>

        <div className="flex flex-col gap-6">
          {benchmarks.map((b, i) => (
            <div key={b.name} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    b.highlight ? "text-[#e4ff1a]" : "text-[#888]"
                  }`}
                >
                  {b.name}
                </span>
                <span
                  className={`text-sm font-mono ${
                    b.highlight ? "text-[#e4ff1a]" : "text-[#555]"
                  }`}
                >
                  {b.time}s
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#111]">
                <div
                  ref={(el) => { barRefs.current[i] = el }}
                  className={`h-full rounded-full ${
                    b.highlight
                      ? "bg-[#e4ff1a]"
                      : "bg-[#333]"
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

function ConfigSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll(".config-card")
    gsap.from(items, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
    })
  }, [])

  return (
    <section id="config" ref={sectionRef} className="px-6 py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#e4ff1a] mb-4">
          Configuration
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-16">
          Total control.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Speech Models",
              desc: "Download and switch between models of various sizes. Optimize for speed or accuracy.",
            },
            {
              title: "Backend Selection",
              desc: "Auto-detect, CPU-only, or GPU acceleration. Choose what works for your hardware.",
            },
            {
              title: "Online Providers",
              desc: "Configure custom base URLs, API keys, and model names for online optimization.",
            },
            {
              title: "LLM Transcription",
              desc: "Use advanced LLMs like Gemini 2.5 Flash Lite for specialized terminology and extremely accurate results.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="config-card p-8 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]"
            >
              <h3 className="text-lg font-semibold text-[#fafafa] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
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
    gsap.from(sectionRef.current.querySelector(".cta-content"), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [])

  return (
    <section ref={sectionRef} className="px-6 py-32 bg-[#050505]">
      <div className="cta-content max-w-4xl mx-auto text-center p-16 rounded-3xl border border-[#1a1a1a] bg-[radial-gradient(ellipse_at_center,_rgba(228,255,26,0.06)_0%,_transparent_70%)]">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#fafafa] mb-6 text-balance">
          Ready to transcribe?
        </h2>
        <p className="text-[#666] max-w-lg mx-auto mb-10 leading-relaxed">
          Download OiPer Desktop and start transcribing with a single hotkey.
          Free, fast, and private.
        </p>
        <button className="group inline-flex items-center gap-3 px-10 py-5 bg-[#e4ff1a] text-[#050505] rounded-xl text-lg font-semibold hover:bg-[#d4ef0a] transition-all">
          <Download className="w-5 h-5" />
          Download Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-10 bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#e4ff1a] flex items-center justify-center">
            <Mic className="w-3 h-3 text-[#050505]" />
          </div>
          <span className="text-sm font-semibold text-[#fafafa]">OiPer Desktop</span>
        </div>
        <p className="text-xs text-[#555]">
          Privacy-first voice transcription. Built for speed.
        </p>
      </div>
    </footer>
  )
}

export default function LandingPageOpus1() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PrivacySection />
      <BenchmarkSection />
      <ConfigSection />
      <CTASection />
      <Footer />
    </div>
  )
}
