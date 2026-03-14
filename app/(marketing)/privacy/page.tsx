"use client"

// app/(marketing)/privacy/page.tsx
// Zel Learn — Privacy Policy

import Link from "next/link"
import { motion } from "framer-motion"
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
    <motion.div variants={fadeUp} className="mb-10">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-heading font-bold text-[13px] text-zel-teal tabular-nums">
          {number}.
        </span>
        <h2 className="font-heading font-bold    text-[18px]">{title}</h2>
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

    <Header />

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
            className="font-heading font-bold    leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[13px] text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-KE", {
              month: "long",
              year: "numeric",
            })}
          </motion.p>
        </motion.div>

        <Separator className="bg-border mb-12" />

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[14.5px] text-muted-foreground leading-[1.85] mb-12"
        >
          At Zel Learn, your privacy matters. This policy explains what information
          we collect when you use Zel Learn, how we use it, and what choices you have.
          We keep this simple because we are not doing anything complicated with your data.
        </motion.p>

        {/* Sections */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <Section number="1" title="Information We Collect">
            <p>We collect the following when you use Zel Learn:</p>
            <List
              items={[
                "Account information — your name and email address when you sign up",
                "Usage data — notes you open, bookmarks you save, and reading progress",
                "Device information — browser type, operating system, and general location (country level only)",
                "Communications — if you contact us directly, we keep a record of that conversation",
              ]}
            />
            <p>
              We do not collect payment information. Zel Learn is free and we do not
              process any financial transactions.
            </p>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <List
              items={[
                "Create and manage your account",
                "Save your reading progress and bookmarks across sessions",
                "Improve the app — understanding which notes are used most helps us prioritise content",
                "Communicate with you about updates, new content, or issues with your account",
                "Ensure the security and integrity of the Service",
              ]}
            />
            <p>
              We do not use your information for advertising. We do not sell your
              data to third parties. We do not build advertising profiles.
            </p>
          </Section>

          <Section number="3" title="Authentication">
            <p>
              Zel Learn uses{" "}
              <a
                href="https://clerk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zel-teal underline underline-offset-2 hover:text-zel-teal-dark transition-colors"
              >
                Clerk
              </a>{" "}
              to handle authentication. When you sign in with email or Google,
              Clerk manages your credentials securely. We receive basic profile
              information (name and email) from Clerk to create your Zel Learn account.
              Clerk&apos;s own privacy policy governs how they handle your authentication data.
            </p>
          </Section>

          <Section number="4" title="Data Storage">
            <p>
              Your account data, reading progress, and bookmarks are stored securely
              using{" "}
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zel-teal underline underline-offset-2 hover:text-zel-teal-dark transition-colors"
              >
                Supabase
              </a>
              , a managed database platform. Data is stored on servers in secure,
              access-controlled environments. We apply row-level security policies
              so that your personal data — bookmarks, progress, account details —
              is only accessible to you.
            </p>
          </Section>

          <Section number="5" title="Cookies and Local Storage">
            <p>
              Zel Learn uses cookies and browser local storage for the following purposes:
            </p>
            <List
              items={[
                "Keeping you signed in between sessions (authentication cookies managed by Clerk)",
                "Storing recent searches locally on your device for convenience",
                "Remembering your preferences such as theme or display settings",
              ]}
            />
            <p>
              We do not use third-party tracking cookies or analytics cookies that
              follow you across the web.
            </p>
          </Section>

          <Section number="6" title="Third-Party Services">
            <p>Zel Learn uses the following third-party services to operate:</p>
            <List
              items={[
                "Clerk — authentication and user management",
                "Supabase — database and file storage",
                "Vercel — hosting and deployment",
              ]}
            />
            <p>
              Each of these services has its own privacy policy governing their
              handling of data. We choose services that take security seriously
              and do not share your data with them beyond what is necessary to
              operate Zel Learn.
            </p>
          </Section>

          <Section number="7" title="Data Retention">
            <p>
              We retain your account data for as long as your account is active.
              If you delete your account, we will delete your personal information —
              including your bookmarks and reading progress — within 30 days.
              Some anonymised usage data may be retained for analytical purposes
              after account deletion.
            </p>
          </Section>

          <Section number="8" title="Your Rights">
            <p>You have the right to:</p>
            <List
              items={[
                "Access the personal information we hold about you",
                "Request correction of inaccurate information",
                "Request deletion of your account and associated data",
                "Export your data — contact us and we will provide it",
                "Withdraw consent for any data processing that relies on consent",
              ]}
            />
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:zellearn@zelox.space"
                className="text-zel-teal underline underline-offset-2 hover:text-zel-teal-dark transition-colors"
              >
                zellearn@zelox.space
              </a>
              . We will respond within 14 days.
            </p>
          </Section>

          <Section number="9" title="Children's Privacy">
            <p>
              Zel Learn is not directed at children under the age of 13. We do not
              knowingly collect personal information from anyone under 13. If you
              believe we have inadvertently collected information from a child,
              please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section number="10" title="Security">
            <p>
              We take reasonable technical and organisational measures to protect
              your information from unauthorised access, loss, or misuse. These
              include encrypted connections (HTTPS), row-level security on our
              database, and access controls on all internal systems.
            </p>
            <p>
              No system is completely secure. If you suspect any unauthorised
              access to your account, please contact us immediately.
            </p>
          </Section>

          <Section number="11" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will update the date at the top of this page
              and notify you via email or an in-app notice. Continuing to use
              Zel Learn after changes are made means you accept the updated policy.
            </p>
          </Section>

        </motion.div>

        <Separator className="bg-border my-12" />

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="bg-card border border-border rounded-2xl p-7"
        >
          <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-muted-foreground mb-3">
            Questions about your data?
          </p>
          <h3 className="font-heading font-bold    text-[18px] mb-2">
            We&apos;re easy to reach
          </h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
            If you have any questions about this policy or how we handle your
            information, just send us an email. No ticket system, no chatbot.
          </p>
          <a
            href="mailto:zellearn@zelox.space"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-zel-teal hover:text-zel-teal-dark transition-colors"
          >
            zellearn@zelox.space →
          </a>
        </motion.div>

        {/* Cross-link to terms */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[13px] text-muted-foreground text-center mt-8"
        >
          Also see our{" "}
          <Link
            href="/terms"
            className="text-zel-teal underline underline-offset-2 hover:text-zel-teal-dark transition-colors"
          >
            Terms of Service
          </Link>
        </motion.p>

      </div>
      <Footer />
    </div>
  )
}