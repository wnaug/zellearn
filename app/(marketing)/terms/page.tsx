"use client"

// app/(marketing)/terms/page.tsx
// Zel Learn — Terms of Service

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Footer from "../_components/Footer"
import Header from "../_components/Header"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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

// ─── SECTION COMPONENT ────────────────────────────────────────────────────────

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="mb-10"
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-heading font-bold text-[13px] text-zel-teal tabular-nums">
          {number}.
        </span>
        <h2 className="font-heading font-bold text-zel-ink text-[18px]">{title}</h2>
      </div>
      <div className="pl-7 text-[14.5px] text-muted-foreground leading-[1.85] space-y-3">
        {children}
      </div>
    </motion.div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="text-zel-teal mt-[5px] flex-shrink-0 text-[10px]">✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

     <Header />

      {/* Page content */}
      <div className="max-w-2xl mx-auto px-5 pt-20 pb-28">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-zel-teal mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-zel-ink leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Terms of Service
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[13px] text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-KE", { month: "long", year: "numeric" })}
          </motion.p>
        </motion.div>

        <Separator className="bg-border mb-12" />

        {/* Sections */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <Section number="1" title="Acceptance of Terms">
            <p>
              By accessing or using Zel Learn (&quot;the Service&quot;), you agree to be bound
              by these Terms of Service. If you do not agree, please do not use the Service.
              These terms apply to all visitors, users, and anyone else who accesses Zel Learn.
            </p>
          </Section>

          <Section number="2" title="Description of Service">
            <p>
              Zel Learn is a study notes platform for university students. It allows
              users to search, read, and bookmark academic notes organised by university
              and course. All notes on the platform are uploaded and reviewed by the
              Zel Learn team.
            </p>
          </Section>

          <Section number="3" title="Eligibility">
            <p>
              You must be at least 13 years old to use Zel Learn. By creating an account,
              you confirm that the information you provide is accurate and that you are
              eligible to use the Service.
            </p>
          </Section>

          <Section number="4" title="User Accounts">
            <p>When you create an account, you agree to:</p>
            <List
              items={[
                "Provide accurate and complete information",
                "Keep your login credentials secure and confidential",
                "Notify us immediately if you suspect unauthorised access to your account",
                "Take responsibility for all activity that occurs under your account",
              ]}
            />
          </Section>

          <Section number="5" title="Acceptable Use">
            <p>You agree not to:</p>
            <List
              items={[
                "Use the Service for any unlawful purpose or in violation of any applicable laws",
                "Attempt to gain unauthorised access to any part of the Service or its infrastructure",
                "Upload, transmit, or distribute any harmful, offensive, or infringing content",
                "Use automated tools, bots, or scrapers to access or extract content from the Service",
                "Impersonate any person, entity, or misrepresent your affiliation",
                "Interfere with or disrupt the integrity or performance of the Service",
              ]}
            />
          </Section>

          <Section number="6" title="Intellectual Property">
            <p>
              All content on Zel Learn — including notes, design, graphics, logos, and
              software — is owned by Zel Learn or its content contributors and is
              protected by applicable intellectual property laws.
            </p>
            <p>
              You may access and read content for personal, non-commercial study purposes.
              You may not reproduce, redistribute, or commercially exploit any content
              from the Service without prior written permission.
            </p>
          </Section>

          <Section number="7" title="Content Accuracy">
            <p>
              Zel Learn reviews all notes before publishing, but we do not guarantee
              that any content is complete, accurate, or up to date. Notes are meant
              to support your studies — they are not a substitute for attending lectures,
              reading prescribed textbooks, or consulting your lecturers.
            </p>
            <p>
              We are not responsible for any academic outcomes resulting from reliance
              on content found on Zel Learn. Use your judgement. You know your course.
            </p>
          </Section>

          <Section number="8" title="Service Availability">
            <p>
              We work hard to keep Zel Learn running smoothly, but we cannot guarantee
              that the Service will be available at all times. We reserve the right to
              modify, suspend, or discontinue any part of the Service at any time,
              with or without notice.
            </p>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Zel Learn shall not
              be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of — or inability to use — the Service.
              This includes but is not limited to loss of data, academic outcomes,
              or interruption of access.
            </p>
          </Section>

          <Section number="10" title="Privacy">
            <p>
              Your use of Zel Learn is also governed by our{" "}
              <Link
                href="/privacy"
                className="text-zel-teal underline underline-offset-2 hover:text-zel-teal-dark transition-colors"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your information.
              By using the Service, you agree to the terms of our Privacy Policy.
            </p>
          </Section>

          <Section number="11" title="Account Termination">
            <p>
              We reserve the right to suspend or permanently terminate your account
              at any time if we determine that you have violated these Terms or are
              using the Service in a way that is harmful to others or to Zel Learn.
              You may also delete your account at any time from your profile settings.
            </p>
          </Section>

          <Section number="12" title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we will update
              the date at the top of this page and, for material changes, notify you
              via email or an in-app notice. Continuing to use the Service after changes
              are made means you accept the updated Terms.
            </p>
          </Section>

          <Section number="13" title="Governing Law">
            <p>
              These Terms are governed by the laws of Kenya. Any disputes arising from
              your use of the Service shall be subject to the jurisdiction of the
              courts of Kenya.
            </p>
          </Section>

        </motion.div>

        <Separator className="bg-border my-12" />

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="bg-card border border-border rounded-2xl p-7"
        >
          <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-muted-foreground mb-3">
            Questions?
          </p>
          <h3 className="font-heading font-bold text-zel-ink text-[18px] mb-2">
            Get in touch
          </h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
            If anything in these Terms is unclear or you have questions about how
            they apply to you, we&apos;re happy to help.
          </p>
          <a
            href="mailto:zellearn@zelox.space"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-zel-teal hover:text-zel-teal-dark transition-colors"
          >
            zellearn@zelox.space →
          </a>
        </motion.div>

      </div>

      <Footer />
    </div>
  )
}