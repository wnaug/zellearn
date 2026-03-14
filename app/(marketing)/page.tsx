"use client"



import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button }   from "@/components/ui/button"
import { Search, BookOpen, BookMarked, Bookmark } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Variants } from "framer-motion"
import Footer from "./_components/Footer"
import Header from "./_components/Header"


const features = [
  {
    icon: Search,
    title: "Search-first",
    desc: "Type a unit, topic, or course code. Results appear instantly — grouped by your university.",
  },
  {
    icon: BookOpen,
    title: "Clean reader",
    desc: "Notes open inside the app. Distraction-free, mobile-first, built for actual reading.",
  },
  {
    icon: BookMarked,
    title: "Save progress",
    desc: "Auto-saves where you stopped. Reopen any note and it resumes exactly where you left off.",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    desc: "Save any note to your personal library with one tap. Everything in one place before exams.",
  },
]

const steps = [
  { step: "01", title: "Search a unit",     desc: "Type the unit name, course code, or topic. Results appear instantly." },
  { step: "02", title: "Pick your notes",   desc: "Results are grouped by university so you always find the right version." },
  { step: "03", title: "Read & save",       desc: "Open notes in the clean reader. Bookmark them. Progress auto-saves." },
]

const faqs = [
  { q: "Who uploads the notes?",          a: "The Zel Learn team reviews and uploads all notes to ensure quality. No random crowd-sourced content — every note is vetted before it goes live." },
  { q: "What universities are supported?", a: "We're starting with major South African universities — Wits, UCT, UKZN, UJ, and more. We expand based on where students need us most." },
  { q: "What subjects are available?",    a: "Commerce, Sciences, Law, Engineering, and Humanities. Notes are organised by university and course." },
  { q: "Is it free?",                     a: "Yes — Zel Learn is completely free to search, read, and bookmark notes. Core access stays free forever." },
  { q: "Does it work on mobile?",         a: "Zel Learn is built mobile-first. Install it as a PWA directly from your browser — no app store needed." },
]

const stats = [
  { value: "200+", label: "Notes" },
  { value: "7",     label: "Courses" },
  { value: "5",     label: "Universities" },
]



const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: -6,
    transition: { duration: 0.25, ease: "easeOut" },
  },
}


function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 300 }}>
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[44px] blur-3xl opacity-30 scale-90"
        style={{ background: "oklch(0.558 0.095 185.5)" }}
      />
      {/* Shell */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="relative rounded-[44px] overflow-hidden mx-auto"
        style={{
          width: 272,
          height: 572,
          background: "oklch(0.28 0.05 185.5)",
          boxShadow: "0 40px 90px oklch(0.28 0.05 185.5 / 45%), 0 0 0 1.5px oklch(0.38 0.09 185.5 / 55%)",
        }}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-4 text-[10px] font-bold text-white/40">
          <span>9:41</span><span>●●●</span>
        </div>

        <div className="px-5 pt-4">
          {/* Greeting */}
          <p className="font-serif font-bold text-white text-[15px] leading-tight">Hey Amara 👋</p>
          <p className="font-serif italic text-[15px] mb-2.5" style={{ color: "oklch(0.74 0.148 72.5)" }}>
            What are you studying?
          </p>
          <p className="text-[9.5px] text-white/35 mb-3">1,240 notes across 87 courses</p>

          {/* Search */}
          <div className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-3 py-2.5 mb-4">
            <span className="text-white/35 text-sm">🔍</span>
            <span className="text-white/30 text-[11px]">Search a unit, topic, course...</span>
          </div>

          <p className="text-[8.5px] font-bold tracking-widest uppercase text-white/30 mb-2">Continue reading</p>

          {/* Card 1 */}
          <div className="bg-white/7 border border-white/8 rounded-xl p-3 mb-2.5 relative overflow-hidden">
            <div className="absolute left-0 inset-y-0 w-[3px] rounded-r-full" style={{ background: "oklch(0.65 0.12 295)" }} />
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[8.5px] font-bold px-2 py-0.5 rounded-full" style={{ background: "oklch(0.65 0.12 295/18%)", color: "oklch(0.82 0.08 295)" }}>PSYCH 201</span>
            </div>
            <p className="font-serif font-semibold text-white text-[10.5px] leading-snug mb-1">Cognitive Biases & Decision Making</p>
            <p className="text-[8.5px] text-white/35 mb-2">UCT · Week 6</p>
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[62%] rounded-full" style={{ background: "linear-gradient(90deg,oklch(0.558 0.095 185.5),oklch(0.74 0.148 72.5))" }} />
            </div>
            <p className="text-[8.5px] font-bold mt-1" style={{ color: "oklch(0.74 0.148 72.5)" }}>62% read</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/7 border border-white/8 rounded-xl p-3 relative overflow-hidden">
            <div className="absolute left-0 inset-y-0 w-[3px] rounded-r-full" style={{ background: "oklch(0.74 0.148 72.5)" }} />
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[8.5px] font-bold px-2 py-0.5 rounded-full" style={{ background: "oklch(0.74 0.148 72.5/18%)", color: "oklch(0.85 0.1 72)" }}>ECON 101</span>
            </div>
            <p className="font-serif font-semibold text-white text-[10.5px] leading-snug mb-1">Intro to Microeconomics</p>
            <p className="text-[8.5px] text-white/35">Wits · Semester 1</p>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 inset-x-0 bg-white/4 border-t border-white/8 flex justify-around py-2.5 px-2">
          {[
            { icon: "🏠", label: "Home",    active: true },
            { icon: "🔍", label: "Search",  active: false },
            { icon: "🔖", label: "Saved",   active: false },
            { icon: "👤", label: "Profile", active: false },
          ].map((n) => (
            <div key={n.label} className="flex flex-col items-center gap-0.5">
              <span className="text-[15px]">{n.icon}</span>
              <span className={`text-[7.5px] font-bold ${n.active ? "text-zel-coral" : "text-white/30"}`}>{n.label}</span>
              {n.active && <div className="w-1 h-1 rounded-full bg-zel-coral" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Page() {
  const heroRef    = useRef<HTMLDivElement>(null)
  const footerRef  = useRef<HTMLDivElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // GSAP ScrollTrigger for steps and footer marquee
  useEffect(() => {
    let ctx: gsap.Context | undefined
    ;(async () => {
      try {
        const { gsap }          = await import("gsap")
        const { ScrollTrigger } = await import("gsap/ScrollTrigger")
        const { TextPlugin }    = await import("gsap/TextPlugin")
        gsap.registerPlugin(ScrollTrigger, TextPlugin)

        ctx = gsap.context(() => {
          // Steps — stagger in from left
          gsap.from(".gsap-step", {
            x: -40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 75%",
            },
          })

          // Stats counter animation
          document.querySelectorAll(".gsap-stat-number").forEach((el) => {
            const text = el.textContent ?? ""
            const isNumeric = /\d/.test(text)
            if (!isNumeric) return
            gsap.from(el, {
              textContent: "0",
              duration: 1.5,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: { trigger: el, start: "top 85%" },
            })
          })

          // Footer marquee
          const marqueeTrack = document.querySelector(".gsap-marquee-track")
          if (marqueeTrack) {
            gsap.to(marqueeTrack, {
              x: "-50%",
              duration: 22,
              ease: "none",
              repeat: -1,
            })
          }

          // Footer grid items
          // gsap.from(".gsap-footer-item", {
          //   y: 20,
          //   opacity: 0,
          //   duration: 0.6,
          //   ease: "power2.out",
          //   stagger: 0.06,
          //   scrollTrigger: {
          //     trigger: footerRef.current,
          //     start: "top 85%",
          //   },
          // })
        })
      } catch {
      }
    })()

    return () => ctx?.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

<Header />
     

      <section ref={heroRef} className="relative min-h-[92vh] flex items-center pt-16 pb-24 px-5 overflow-hidden">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <div className="absolute w-[600px] h-[600px] rounded-full -top-32 -right-24 opacity-20"
              style={{ background: "radial-gradient(circle,oklch(0.72 0.07 185.5) 0%,transparent 68%)" }} />
            <div className="absolute w-[420px] h-[420px] rounded-full bottom-0 -left-20 opacity-15"
              style={{ background: "radial-gradient(circle,oklch(0.74 0.148 72.5) 0%,transparent 68%)" }} />
            <div className="absolute w-[300px] h-[300px] rounded-full top-1/3 left-1/3 opacity-10"
              style={{ background: "radial-gradient(circle,oklch(0.65 0.12 295) 0%,transparent 68%)" }} />
          </motion.div>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div variants={stagger} initial="hidden" animate="show">
              

              <motion.h1
                className="font-serif font-bold  leading-[1.06] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
              >
                Your notes,{" "}
                <em className="italic text-zel-teal">found</em>
                <br />in seconds.
              </motion.h1>

              <motion.p className="text-[16px] text-muted-foreground leading-relaxed max-w-md mb-10">
                Stop digging through WhatsApp groups and broken Drive links.
                Zel Learn is a search-first study library built for students.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3">
                <Button
                  asChild size="lg"
                  className="hover:bg-zel-ink/90  px-8 py-6 text-[15px] shadow-zel-lg hover:-translate-y-0.5 transition-transform"
                >
                  <Link href="/sign-up">Start for free →</Link>
                </Button>
                <Button
                  asChild variant="outline" size="lg"
                  className=" px-8  py-6 text-[15px] border-border hover:border-zel-teal hover:text-zel-teal-dark hover:bg-zel-teal-light transition-all"
                >
                  <Link href="#how">See how it works</Link>
                </Button>
              </motion.div>

              <motion.div  className="flex items-center gap-5 mt-10">
                {stats.map((s, i) => (
                  <div key={s.label}>
                    {i > 0 && <span className="hidden" />}
                    <div className="flex items-center gap-4">
                      {i > 0 && <div className="w-px h-8 bg-border" />}
                      <div>
                        <p className="font-serif font-bold text-foreground text-[20px] leading-none gsap-stat-number">{s.value}</p>
                        <p className="text-[10px] font-semibold text-muted-foreground tracking-wide uppercase mt-0.5">{s.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </motion.div>
      </section>


      <section id="features" className="py-24 px-5 scroll-mt-14">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeIn} className="text-[11px] font-bold tracking-widest uppercase text-zel-teal mb-3">
              Everything you need
            </motion.p>
            <motion.h2
              className="font-serif font-bold  mb-4"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              Built for how students{" "}
              <em className="italic text-zel-teal">actually</em> study
            </motion.h2>
            <motion.p  className="text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed">
              No clutter, no noise. Just the tools that make studying faster and less stressful.
            </motion.p>
          </motion.div>

          <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-40px", amount: 0.15 }}
  className="grid grid-cols-1 md:grid-cols-2 gap-4"
>
  {features.map((f, i) => {
    const Icon = f.icon
    return (
      <motion.div
        key={f.title}
        custom={i}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="group relative rounded-2xl border border-border bg-card p-7 cursor-default overflow-hidden"
        style={{
          boxShadow: "0 2px 8px oklch(0.558 0.095 185.5 / 6%), 0 0 0 0 oklch(0.558 0.095 185.5 / 0%)",
        }}
      >
        <motion.div
          className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.558 0.095 185.5 / 14%) 0%, transparent 70%)" }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileHover={{ opacity: 1, scale: 1.4, transition: { duration: 0.4 } }}
        />

        <motion.div
          variants={iconVariants}
          className="w-11 h-11 rounded-xl bg-zel-teal-light flex items-center justify-center mb-5"
        >
          <Icon className="w-5 h-5 text-zel-teal" strokeWidth={2} />
        </motion.div>

        <h3 className="font-heading font-bold text-[19px] text-zel-ink mb-2 group-hover:text-zel-teal transition-colors duration-200">
          {f.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
          {f.desc}
        </p>

        <motion.div
          className="absolute bottom-0 left-0 h-[2.5px] bg-zel-teal rounded-full"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%", transition: { duration: 0.35, ease: "easeOut" } }}
        />
      </motion.div>
    )
  })}
</motion.div>
        </div>
      </section>

      <section id="how" className="py-24 px-5 bg-background scroll-mt-14 relative overflow-hidden">
  <div className="pointer-events-none absolute inset-0">
    <div
      className="absolute w-[500px] h-[500px] rounded-full -top-24 -right-20 opacity-20"
      style={{ background: "radial-gradient(circle,oklch(0.72 0.07 185.5) 0%,transparent 70%)" }}
    />
    <div
      className="absolute w-[360px] h-[360px] rounded-full -bottom-16 -left-16 opacity-15"
      style={{ background: "radial-gradient(circle,oklch(0.74 0.148 72.5) 0%,transparent 70%)" }}
    />
  </div>

  <div className="relative max-w-5xl mx-auto">
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={stagger}
      className="text-center mb-14"
    >
      <motion.p variants={fadeIn} className="text-[11px] font-bold tracking-widest uppercase text-zel-teal mb-3">
        Simple by design
      </motion.p>
      <motion.h2
        className="font-heading font-bold text-zel-ink mb-4"
        style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
      >
        Three steps to{" "}
        <em className="italic text-zel-teal">finding anything</em>
      </motion.h2>
    </motion.div>

    <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {steps.map((s) => (
        <div key={s.step} className="gsap-step">
          <div className="bg-card border border-border rounded-2xl p-7 hover:border-zel-teal/40 hover:shadow-zel-md transition-all h-full">
            <div className="w-10 h-10 rounded-xl bg-zel-teal-light flex items-center justify-center font-heading font-bold text-[13px] mb-6 text-zel-teal-dark font-serif">
              {s.step}
            </div>
            <h3 className="font-heading font-bold text-zel-ink text-[18px] mb-2">{s.title}</h3>
            <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section id="faq" className="py-24 px-5 scroll-mt-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeIn} className="text-[11px] font-bold tracking-widest uppercase text-zel-teal mb-3">FAQ</motion.p>
            <motion.h2
               
              className="font-serif font-bold "
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              Questions answered
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion type="single" collapsible className="bg-card border border-border rounded-2xl px-2 divide-y divide-border">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0 px-4">
                  <AccordionTrigger className="font-serif font-semibold text-[14.5px] text-muted-foreground hover:no-underline hover:text-zel-teal transition-colors py-5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>


      <section className="py-20 px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="relative rounded-3xl overflow-hidden p-14 text-center"
            style={{ background: "oklch(0.28 0.05 185.5)" }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute w-80 h-80 rounded-full -top-16 -right-16 opacity-20"
                style={{ background: "radial-gradient(circle,oklch(0.74 0.148 72.5) 0%,transparent 70%)" }} />
              <div className="absolute w-60 h-60 rounded-full -bottom-10 -left-10 opacity-12"
                style={{ background: "radial-gradient(circle,oklch(0.65 0.12 295) 0%,transparent 70%)" }} />
            </div>
            <div className="relative">
              
              <h2
                className="font-serif font-bold text-white mb-4"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                Start studying smarter
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed max-w-md mx-auto mb-9">
                Join students across the 254 who search, read, and study with Zel Learn every day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  asChild size="lg"
                  className=" hover:bg-zel-amber-dark hover:text-white font-bold  px-8  py-6 text-[15px] shadow-zel-md hover:-translate-y-0.5 transition-all"
                >
                  <Link href="/sign-up">Create free account →</Link>
                </Button>
                <Button
                  asChild variant="ghost" size="lg"
                  className="text-white/45 hover:text-white/75 hover:bg-transparent rounded-2xl px-8 py-6 text-[14px]"
                >
                  <Link href="/sign-in">Already have an account</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


     <Footer />
    </div>
  )
}