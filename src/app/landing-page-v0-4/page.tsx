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
  Quote,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return
    gsap.from(navRef.current, { y: -60, opacity: 0, duration: 1, ease: "power2.out" })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#faf5ef]/90 backdrop-blur-md border-b border-[#e8dfd4]"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl font-serif font-bold italic text-[#2a1f14]">OiPer</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm text-[#8b7d6b]">
        <a href="#story" className="hover:text-[#2a1f14] transition-colors font-serif italic">Story</a>
        <a href="#features" className="hover:text-[#2a1f14] transition-colors font-serif italic">Features</a>
        <a href="#privacy" className="hover:text-[#2a1f14] transition-colors font-serif italic">Privacy</a>
        <a href="#speed" className="hover:text-[#2a1f14] transition-colors font-serif italic">Speed</a>
      </div>
      <button className="px-6 py-2.5 bg-[#2a1f14] text-[#faf5ef] rounded-full text-sm font-serif hover:bg-[#3d2e1f] transition-colors">
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
      tl.from(".ed-tag", { y: 20, opacity: 0, duration: 0.7, delay: 0.3 })
        .from(".ed-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
        .from(".ed-divider", { scaleX: 0, duration: 0.8, transformOrigin: "center" }, "-=0.4")
        .from(".ed-subtitle", { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".ed-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 bg-[#faf5ef]"
    >
      <p className="ed-tag text-xs uppercase tracking-[0.3em] text-[#b5a48b] mb-8 font-serif">
        Voice Transcription Reimagined
      </p>

      <h1 className="ed-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold italic text-center text-[#2a1f14] leading-[1.05] max-w-4xl text-balance">
        The Art of
        <br />
        <span className="not-italic text-[#c2956a]">Transcription</span>
      </h1>

      <div className="ed-divider w-24 h-px bg-[#c2956a] my-10" />

      <p className="ed-subtitle text-base md:text-lg text-[#8b7d6b] text-center max-w-xl leading-relaxed font-serif">
        A desktop companion that listens when you speak and writes when you stop.
        Elegantly simple. Fiercely private. Remarkably fast.
      </p>

      <div className="ed-cta flex flex-col sm:flex-row items-center gap-4 mt-10">
        <button className="group flex items-center gap-2.5 px-8 py-4 bg-[#2a1f14] text-[#faf5ef] rounded-full text-sm font-serif hover:bg-[#3d2e1f] transition-colors">
          <Download className="w-4 h-4" />
          Download OiPer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button className="px-6 py-4 text-[#8b7d6b] border border-[#d4c8b8] rounded-full text-sm font-serif hover:text-[#2a1f14] hover:border-[#b5a48b] transition-all">
          Read the Story
        </button>
      </div>
    </section>
  )
}

function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(".story-content", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="story" ref={sectionRef} className="px-6 py-32 bg-[#f5eee4]">
      <div className="story-content max-w-3xl mx-auto text-center">
        <Quote className="w-10 h-10 text-[#c2956a] mx-auto mb-8 opacity-40" />
        <p className="text-2xl md:text-3xl font-serif italic text-[#2a1f14] leading-relaxed text-balance">
          We believe transcription should be invisible. Press a key, speak your mind,
          and watch your words appear. No windows. No clicks. No waiting.
          Just your voice, transformed.
        </p>
        <div className="w-16 h-px bg-[#c2956a] mx-auto mt-10 mb-6" />
        <p className="text-sm text-[#b5a48b] font-serif uppercase tracking-[0.2em]">
          Three Pillars: Experience, Performance, Privacy
        </p>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Keyboard,
      title: "The Workflow",
      desc: "A single global hotkey is all you need. Hold to record, release to transcribe. Your text appears in whichever application has focus.",
    },
    {
      icon: Zap,
      title: "The Speed",
      desc: "Written in native code for performance that online services cannot match. GPU acceleration takes it even further.",
    },
    {
      icon: Shield,
      title: "The Promise",
      desc: "Every transcription happens on your machine. Your audio, your logs, your data --- never shared without your explicit consent.",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(sectionRef.current.querySelectorAll(".ed-feature"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    })
  }, [])

  return (
    <section id="features" ref={sectionRef} className="px-6 py-32 bg-[#faf5ef]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b5a48b] mb-4 font-serif">
            Chapter I
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-[#2a1f14]">
            Core Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="ed-feature">
              <div className="w-14 h-14 rounded-full bg-[#f5eee4] flex items-center justify-center mb-6 border border-[#e8dfd4]">
                <f.icon className="w-6 h-6 text-[#c2956a]" />
              </div>
              <h3 className="text-xl font-serif font-semibold italic text-[#2a1f14] mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-[#8b7d6b] leading-relaxed font-serif">
                {f.desc}
              </p>
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
      gsap.from(".priv-card-ed", {
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
    <section id="privacy" ref={sectionRef} className="px-6 py-32 bg-[#f5eee4]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b5a48b] mb-4 font-serif">
            Chapter II
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-[#2a1f14]">
            A Private Affair
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              icon: Lock,
              title: "Local by Default",
              items: ["On-device transcription", "No cloud dependency", "Native code performance"],
            },
            {
              icon: Globe,
              title: "Online by Choice",
              items: ["Opt-in cloud optimization", "Your API key required", "Disable at any time"],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="priv-card-ed p-8 rounded-2xl bg-[#faf5ef] border border-[#e8dfd4]"
            >
              <block.icon className="w-6 h-6 text-[#c2956a] mb-5" />
              <h3 className="text-lg font-serif font-semibold italic text-[#2a1f14] mb-5">
                {block.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#8b7d6b] font-serif">
                    <Check className="w-4 h-4 text-[#c2956a] shrink-0" />
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
          duration: 1.2,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      )
    })
  }, [])

  return (
    <section id="speed" ref={sectionRef} className="px-6 py-32 bg-[#faf5ef]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b5a48b] mb-4 font-serif">
            Chapter III
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-[#2a1f14]">
            The Numbers
          </h2>
          <p className="mt-4 text-sm text-[#8b7d6b] font-serif">
            Transcription time for 30 seconds of English audio
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {benchmarks.map((b, i) => (
            <div key={b.name}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-serif ${b.highlight ? "font-bold italic text-[#2a1f14]" : "text-[#b5a48b]"}`}>
                  {b.name}
                </span>
                <span className={`text-sm font-serif ${b.highlight ? "text-[#c2956a] font-semibold" : "text-[#ccc1b3]"}`}>
                  {b.time}s
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#ede5d9]">
                <div
                  ref={(el) => { barRefs.current[i] = el }}
                  className={`h-full rounded-full ${b.highlight ? "bg-[#c2956a]" : "bg-[#d4c8b8]"}`}
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
    gsap.from(sectionRef.current.querySelectorAll(".cfg-ed"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    })
  }, [])

  return (
    <section ref={sectionRef} className="px-6 py-32 bg-[#f5eee4]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b5a48b] mb-4 font-serif">
            Chapter IV
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-[#2a1f14]">
            Your Preferences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Cpu, title: "Speech Models", desc: "Select and download models of various sizes. Balance between accuracy and speed." },
            { icon: Settings, title: "Backend Choice", desc: "Auto-detect hardware capabilities, or manually set CPU-only or GPU-accelerated mode." },
            { icon: Globe, title: "Online Providers", desc: "Configure custom endpoints, API keys, and model preferences for cloud optimization." },
            { icon: Zap, title: "LLM Transcription", desc: "Route through advanced LLMs for technical terminology and specialized vocabulary." },
          ].map((item) => (
            <div key={item.title} className="cfg-ed flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-[#faf5ef] flex items-center justify-center border border-[#e8dfd4] shrink-0">
                <item.icon className="w-5 h-5 text-[#c2956a]" />
              </div>
              <div>
                <h3 className="text-base font-serif font-semibold italic text-[#2a1f14] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8b7d6b] leading-relaxed font-serif">{item.desc}</p>
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
    gsap.from(sectionRef.current.querySelector(".cta-ed"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
  }, [])

  return (
    <section ref={sectionRef} className="px-6 py-32 bg-[#faf5ef]">
      <div className="cta-ed max-w-2xl mx-auto text-center">
        <div className="w-16 h-px bg-[#c2956a] mx-auto mb-10" />
        <h2 className="text-3xl md:text-5xl font-serif font-bold italic text-[#2a1f14] mb-4 text-balance">
          Begin your story
        </h2>
        <p className="text-sm text-[#8b7d6b] font-serif mb-10 leading-relaxed">
          Download OiPer Desktop and let your voice write the next chapter.
        </p>
        <button className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#2a1f14] text-[#faf5ef] rounded-full text-sm font-serif hover:bg-[#3d2e1f] transition-colors">
          <Download className="w-4 h-4" />
          Download Free
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-8 bg-[#faf5ef] border-t border-[#e8dfd4]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-base font-serif font-bold italic text-[#2a1f14]">OiPer</span>
        <span className="text-xs text-[#b5a48b] font-serif italic">
          Voice, transcribed with care.
        </span>
      </div>
    </footer>
  )
}

export default function LandingPageOpus4() {
  return (
    <div className="bg-[#faf5ef] min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <PrivacySection />
      <SpeedSection />
      <ConfigSection />
      <CTASection />
      <Footer />
    </div>
  )
}
