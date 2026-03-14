"use client"

// app/(marketing)/about/page.tsx

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Footer from "../_components/Footer"
import Header from "../_components/Header"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function ZelLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 bg-zel-ink rounded-[10px] flex items-center justify-center flex-shrink-0">
        <svg width="18" height="18" viewBox="0 0 44 44" fill="none">
          <line x1="11" y1="13" x2="33" y2="13" stroke="#E8A838" strokeWidth="4" strokeLinecap="round" />
          <line x1="11" y1="31" x2="33" y2="31" stroke="#E8A838" strokeWidth="4" strokeLinecap="round" />
          <line x1="32.5" y1="13.5" x2="11.5" y2="30.5" stroke="#E8A838" strokeWidth="4" strokeLinecap="round" />
          <circle cx="34" cy="10" r="4" fill="#E8604A" />
        </svg>
      </div>
      <span className="font-heading font-bold text-[17px] tracking-tight text-zel-ink">
        Zel Learn
      </span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">

      <Header />

      <section className="relative pt-28 pb-32 px-5 overflow-hidden">

        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full -top-32 -right-20 opacity-20"
            style={{ background: "radial-gradient(circle,oklch(0.72 0.07 185.5) 0%,transparent 68%)" }}
          />
          <div
            className="absolute w-[360px] h-[360px] rounded-full bottom-0 -left-16 opacity-12"
            style={{ background: "radial-gradient(circle,oklch(0.74 0.148 72.5) 0%,transparent 68%)" }}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative max-w-2xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-zel-teal mb-5"
          >
            About Zel Learn
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-zel-ink leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
          >
            Find your notes.{" "}
            <em className="italic text-zel-teal">Actually study.</em>
          </motion.h1>

          <motion.div
            variants={stagger}
            className="space-y-5 text-[16px] text-muted-foreground leading-[1.85] mb-12"
          >
            <motion.p variants={fadeUp}>
              Zel Learn is a study notes library for Kenyan university students.
              Search any unit or course, find quality notes grouped by your university,
              and read them in a clean distraction-free environment — right inside the app.
            </motion.p>

            <motion.p variants={fadeUp}>
              No more digging through WhatsApp groups or chasing expired Drive links
              the night before an exam. Your notes are here, organised, and ready
              the moment you need them.
            </motion.p>

            <motion.p variants={fadeUp}>
              Built by two cousins who got tired of the chaos.
              We handle the organisation — you handle the studying.
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button
                  asChild size="lg"
                  className="hover:bg-zel-ink/90  px-8 py-6 text-[15px] shadow-zel-lg hover:-translate-y-0.5 transition-transform"
                >
                  <Link href="/sign-up">Start for free →</Link>
                </Button>
            <Button
              asChild variant="outline" size="lg"
              className=" px-8 py-6 text-[15px] border-border hover:border-zel-teal hover:text-zel-teal-dark hover:bg-zel-teal-light transition-all"
            >
              <Link href="/">Back to home</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

    </div>
    <Footer />
    </>
  )
}