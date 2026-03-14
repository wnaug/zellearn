
// TODO: Protected by admin role guard in /app/admin/layout.tsx

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design System · Zel Learn Admin",
  description: "Color tokens, utility classes, and component patterns for Zel Learn.",
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const semanticTokens = [
  {
    group: "Surfaces",
    tokens: [
      { swatch: "oklch(0.977 0.008 185.5)", variable: "--background",        tw: "bg-background",          hex: "#F4F8F7",  use: "Page background" },
      { swatch: "oklch(0.28 0.05 185.5)",   variable: "--foreground",        tw: "text-foreground",        hex: "#1A3D3A",  use: "Primary text, headings" },
      { swatch: "oklch(0.995 0.004 185.5)", variable: "--card",              tw: "bg-card",                hex: "#FFFEFD",  use: "Card, modal, popover backgrounds" },
      { swatch: "oklch(0.94 0.018 185.5)",  variable: "--muted",             tw: "bg-muted",               hex: "#EBF2F1",  use: "Disabled inputs, table row alt, code bg" },
      { swatch: "oklch(0.58 0.038 185.5)",  variable: "--muted-foreground",  tw: "text-muted-foreground",  hex: "#6B8F8C",  use: "Placeholder, meta text, timestamps" },
    ],
  },
  {
    group: "Brand",
    tokens: [
      { swatch: "oklch(0.558 0.095 185.5)", variable: "--primary",              tw: "bg-primary",              hex: "#2F8F83",  use: "Primary buttons, active states, links" },
      { swatch: "oklch(0.977 0.008 185.5)", variable: "--primary-foreground",   tw: "text-primary-foreground", hex: "#F4F8F7",  use: "Text on primary buttons" },
      { swatch: "oklch(0.92 0.04 185.5)",   variable: "--secondary",            tw: "bg-secondary",            hex: "#D5EEEB",  use: "Secondary buttons, teal-tint chips" },
      { swatch: "oklch(0.95 0.07 85)",      variable: "--accent",               tw: "bg-accent",               hex: "#FFF0C2",  use: "Amber highlight, accent chips" },
      { swatch: "oklch(0.6 0.14 68)",       variable: "--accent-foreground",    tw: "text-accent-foreground",  hex: "#C4862A",  use: "Text on amber accent surfaces" },
    ],
  },
  {
    group: "Structure & states",
    tokens: [
      { swatch: "oklch(0.9 0.018 185.5)",   variable: "--border",               tw: "border-border",           hex: "#D5E8E5",  use: "All borders, dividers, separators" },
      { swatch: "oklch(0.9 0.018 185.5)",   variable: "--input",                tw: "border-input",            hex: "#D5E8E5",  use: "Input field borders (default)" },
      { swatch: "oklch(0.558 0.095 185.5)", variable: "--ring",                 tw: "ring-ring",               hex: "#2F8F83",  use: "Focus rings on inputs and buttons" },
      { swatch: "oklch(0.62 0.18 28)",      variable: "--destructive",          tw: "bg-destructive",          hex: "#E8604A",  use: "Delete, error, danger states" },
    ],
  },
]

const brandPalette = [
  { name: "Teal",           token: "--zel-teal",             tw: "bg-zel-teal",             hex: "#2F8F83",  swatch: "oklch(0.558 0.095 185.5)" },
  { name: "Teal Light",     token: "--zel-teal-light",       tw: "bg-zel-teal-light",       hex: "—",        swatch: "oklch(0.92 0.04 185.5)" },
  { name: "Teal Dark",      token: "--zel-teal-dark",        tw: "text-zel-teal-dark",      hex: "—",        swatch: "oklch(0.38 0.09 185.5)" },
  { name: "Teal Mid",       token: "--zel-teal-mid",         tw: "text-zel-teal-mid",       hex: "—",        swatch: "oklch(0.72 0.07 185.5)" },
  { name: "Amber",          token: "--zel-amber",            tw: "bg-zel-amber",            hex: "#E8A838",  swatch: "oklch(0.74 0.148 72.5)" },
  { name: "Amber Light",    token: "--zel-amber-light",      tw: "bg-zel-amber-light",      hex: "—",        swatch: "oklch(0.95 0.07 85)" },
  { name: "Amber Dark",     token: "--zel-amber-dark",       tw: "text-zel-amber-dark",     hex: "—",        swatch: "oklch(0.6 0.14 68)" },
  { name: "Coral",          token: "--zel-coral",            tw: "bg-zel-coral",            hex: "#E8604A",  swatch: "oklch(0.62 0.18 28)" },
  { name: "Coral Light",    token: "--zel-coral-light",      tw: "bg-zel-coral-light",      hex: "—",        swatch: "oklch(0.95 0.05 25)" },
  { name: "Sage",           token: "--zel-sage",             tw: "bg-zel-sage",             hex: "—",        swatch: "oklch(0.68 0.12 150)" },
  { name: "Sage Light",     token: "--zel-sage-light",       tw: "bg-zel-sage-light",       hex: "—",        swatch: "oklch(0.94 0.045 150)" },
  { name: "Lavender",       token: "--zel-lavender",         tw: "bg-zel-lavender",         hex: "—",        swatch: "oklch(0.65 0.12 295)" },
  { name: "Lavender Light", token: "--zel-lavender-light",   tw: "bg-zel-lavender-light",   hex: "—",        swatch: "oklch(0.94 0.04 295)" },
  { name: "Ink",            token: "--zel-ink",              tw: "bg-zel-ink",              hex: "#1A3D3A",  swatch: "oklch(0.28 0.05 185.5)" },
]

const subjectColors = [
  { subject: "Commerce",    cls: "badge-commerce",  bg: "--zel-amber-light",    fg: "--zel-amber-dark",    swatch: "oklch(0.95 0.07 85)",    example: "ECON, Business, Finance" },
  { subject: "Sciences",    cls: "badge-sciences",  bg: "--zel-sage-light",     fg: "--zel-sage",           swatch: "oklch(0.94 0.045 150)",  example: "Biology, Chemistry, Physics" },
  { subject: "Law",         cls: "badge-law",       bg: "--zel-lavender-light", fg: "--zel-lavender",       swatch: "oklch(0.94 0.04 295)",   example: "Law, Political Science" },
  { subject: "Engineering", cls: "badge-eng",       bg: "--zel-teal-light",     fg: "--zel-teal-dark",      swatch: "oklch(0.92 0.04 185.5)", example: "Engineering, Computer Science" },
  { subject: "Default",     cls: "badge-default",   bg: "--secondary",          fg: "--secondary-foreground",swatch: "oklch(0.94 0.018 185.5)",example: "Uncategorised notes" },
]

const shadows = [
  { cls: "shadow-zel-sm",   use: "Inputs, small chips, subtle elevation",       css: "0 1px 3px teal/8%, 0 1px 2px teal/5%" },
  { cls: "shadow-zel-md",   use: "Cards, dropdowns, popovers",                  css: "0 4px 12px teal/12%, 0 2px 6px teal/7%" },
  { cls: "shadow-zel-lg",   use: "Modals, bottom sheets, floating elements",    css: "0 8px 28px teal/14%, 0 4px 10px teal/8%" },
  { cls: "shadow-zel-card", use: "Note cards — shadow + 1.5px border ring",     css: "0 2px 8px teal/10% + 0 0 0 1.5px border" },
  { cls: "shadow-amber",    use: "Primary CTA buttons only — amber glow",       css: "0 4px 16px amber/35%" },
]

const utilityClasses = [
  { cls: ".shadow-zel-sm",      desc: "Subtle shadow for inputs and small elements" },
  { cls: ".shadow-zel-md",      desc: "Cards, dropdowns, popovers" },
  { cls: ".shadow-zel-lg",      desc: "Modals, bottom sheets" },
  { cls: ".shadow-zel-card",    desc: "Note cards (shadow + border ring combined)" },
  { cls: ".shadow-amber",       desc: "Primary CTA buttons only — amber glow" },
  { cls: ".progress-zel",       desc: "Teal→amber gradient on progress bar fills" },
  { cls: ".callout-amber",      desc: "Amber bg + left border — key concepts in reader" },
  { cls: ".badge-commerce",     desc: "Amber pair — ECON, Business, Finance" },
  { cls: ".badge-sciences",     desc: "Sage pair — Biology, Chemistry, Physics" },
  { cls: ".badge-law",          desc: "Lavender pair — Law, Political Science" },
  { cls: ".badge-eng",          desc: "Teal pair — Engineering, Computer Science" },
  { cls: ".badge-default",      desc: "Muted — uncategorised notes" },
  { cls: ".bg-zel-gradient",    desc: "Subtle teal gradient — hero sections, top areas" },
  { cls: ".bg-zel-ink",         desc: "Dark teal — profile hero, onboarding, reader bar" },
  { cls: ".border-l-zel",       desc: "3px teal left bar — section headings in reader" },
  { cls: ".border-l-amber",     desc: "3px amber left bar — callout blocks in reader" },
  { cls: ".accent-teal",        desc: "Note card left accent bar — engineering" },
  { cls: ".accent-amber",       desc: "Note card left accent bar — commerce" },
  { cls: ".accent-coral",       desc: "Note card left accent bar — alerts/featured" },
  { cls: ".accent-sage",        desc: "Note card left accent bar — sciences" },
  { cls: ".accent-lavender",    desc: "Note card left accent bar — law/humanities" },
]

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <h2 className="font-heading text-xl font-bold text-zel-ink whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-[1.5px] bg-border" />
    </div>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold text-zel-ink border-l-zel pl-3 mb-3">
      {children}
    </h3>
  )
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[11px] bg-zel-teal/10 text-zel-teal-dark border border-zel-teal/20 px-1.5 py-0.5 rounded">
      {children}
    </code>
  )
}

function CodeBlock({ children, lang = "tsx" }: { children: string; lang?: string }) {
  return (
    <div className="relative rounded-lg bg-zel-ink overflow-x-auto mb-4">
      <span className="absolute top-2.5 right-3 font-mono text-[9px] font-semibold text-zel-muted-fg tracking-widest uppercase">
        {lang}
      </span>
      <pre className="p-4 text-[11.5px] leading-relaxed text-zel-teal-light font-mono whitespace-pre overflow-x-auto">
        {children}
      </pre>
    </div>
  )
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 items-start bg-zel-teal/8 border border-zel-teal/20 rounded-lg p-3 mb-3 text-[12.5px] text-zel-teal-dark leading-relaxed">
      <span className="text-base mt-0.5 flex-shrink-0">✅</span>
      <span>{children}</span>
    </div>
  )
}

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 items-start bg-zel-amber-light border border-zel-amber/30 rounded-lg p-3 mb-3 text-[12.5px] text-zel-amber-dark leading-relaxed">
      <span className="text-base mt-0.5 flex-shrink-0">⚠️</span>
      <span>{children}</span>
    </div>
  )
}

function Swatch({ color, size = "sm" }: { color: string; size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-5 h-5" : "w-6 h-6"
  return (
    <div
      className={`${dim} rounded flex-shrink-0 border border-border`}
      style={{ background: color }}
    />
  )
}

function NavLink({ href, children, dot }: { href: string; children: React.ReactNode; dot: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
    >
      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
      {children}
    </a>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DesignPage() {
  return (
    <div className="flex min-h-screen bg-background">

      {/* ── SIDEBAR ─────────────────────────────────────────── */}
      <aside className="w-56 flex-shrink-0 bg-card border-r border-border sticky top-0 h-screen overflow-y-auto hidden lg:flex flex-col py-6">

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 pb-5 border-b border-border mb-4">
          
          <div>
            <p className="font-heading font-bold text-sm text-zel-ink leading-none">Zel Learn</p>
            <p className="text-[9px] font-semibold tracking-widest uppercase text-muted-foreground mt-0.5">Design Docs</p>
          </div>
        </div>

        {/* Nav */}
        <div className="px-3 space-y-0.5">
          <p className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground px-2 py-1.5">Colors</p>
          <NavLink href="#semantic"  dot="oklch(0.558 0.095 185.5)">Semantic tokens</NavLink>
          <NavLink href="#brand"     dot="oklch(0.74 0.148 72.5)">Brand palette</NavLink>
          <NavLink href="#subjects"  dot="oklch(0.68 0.12 150)">Subject colors</NavLink>
          <NavLink href="#darkmode"  dot="oklch(0.65 0.12 295)">Dark mode</NavLink>

          <p className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground px-2 py-1.5 mt-3">Utilities</p>
          <NavLink href="#shadows"     dot="oklch(0.72 0.07 185.5)">Shadows</NavLink>
          <NavLink href="#progress"    dot="oklch(0.62 0.18 28)">Progress</NavLink>
          <NavLink href="#callouts"    dot="oklch(0.74 0.148 72.5)">Callouts</NavLink>
          <NavLink href="#badges"      dot="oklch(0.65 0.12 295)">Badges</NavLink>
          <NavLink href="#backgrounds" dot="oklch(0.558 0.095 185.5)">Backgrounds</NavLink>
          <NavLink href="#borders"     dot="oklch(0.38 0.09 185.5)">Borders</NavLink>

          <p className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground px-2 py-1.5 mt-3">Reference</p>
          <NavLink href="#rules"      dot="oklch(0.28 0.05 185.5)">Usage rules</NavLink>
          <NavLink href="#cheatsheet" dot="oklch(0.74 0.148 72.5)">Cheat sheet</NavLink>
        </div>
      </aside>

      {/* ── MAIN ────────────────────────────────────────────── */}
      <main className="flex-1 min-w-0 px-8 lg:px-14 py-12 max-w-4xl">

        {/* Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 bg-zel-ink text-zel-amber px-4 py-1.5 rounded-full font-heading text-xs font-bold mb-4">
            <div className="w-1.5 h-1.5 bg-zel-amber rounded-full animate-pulse" />
            globals.css · v1.0
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-zel-ink leading-none mb-3">
            Colors &amp; <em className="italic text-zel-teal">Utilities</em>
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-lg">
            Complete reference for every color token, Tailwind class, and utility in Zel Learn&apos;s design system. Built on shadcn + Tailwind v4 with oklch color space.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["shadcn/ui", "Tailwind v4", "oklch", "Zilla Slab", "Fira Sans"].map((t) => (
              <span key={t} className="text-[10px] font-semibold px-3 py-1 rounded-full border border-border bg-card text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>


        {/* ══ SEMANTIC TOKENS ══════════════════════════════════ */}
        <section id="semantic" className="mb-16 scroll-mt-8">
          <SectionTitle>Semantic tokens</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-4 leading-relaxed">
            shadcn-compatible CSS variables that automatically switch between light and dark mode. Always prefer these over raw brand colors in components.
          </p>

          <Tip>
            Use semantic tokens for all UI components. Only reach for brand tokens (<InlineCode>--zel-teal</InlineCode>, etc.) for one-off custom elements that aren&apos;t covered by the semantic layer.
          </Tip>

          {semanticTokens.map((group) => (
            <div key={group.group} className="mb-6">
              <SubTitle>{group.group}</SubTitle>
              <div className="rounded-lg border border-border overflow-hidden mb-4">
                <table className="w-full text-[11.5px]">
                  <thead>
                    <tr className="bg-muted border-b border-border">
                      <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Swatch</th>
                      <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">CSS Variable</th>
                      <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground hidden md:table-cell">Tailwind</th>
                      <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground hidden md:table-cell">Hex approx.</th>
                      <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Use for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {group.tokens.map((token) => (
                      <tr key={token.variable} className="hover:bg-muted/50 transition-colors">
                        <td className="px-3 py-2.5">
                          <Swatch color={token.swatch} />
                        </td>
                        <td className="px-3 py-2.5">
                          <code className="font-mono text-[11px] text-zel-teal-dark">{token.variable}</code>
                        </td>
                        <td className="px-3 py-2.5 hidden md:table-cell">
                          <code className="font-mono text-[11px] text-zel-amber-dark">{token.tw}</code>
                        </td>
                        <td className="px-3 py-2.5 hidden md:table-cell">
                          <code className="font-mono text-[11px] text-muted-foreground">{token.hex}</code>
                        </td>
                        <td className="px-3 py-2.5 text-muted-foreground">{token.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <CodeBlock lang="tsx">{`// ✅ correct — uses semantic tokens
<Button>Save note</Button>
<p className="text-muted-foreground">UCT · Week 6</p>
<div className="bg-card border border-border rounded-lg">...</div>

// ❌ wrong — hardcoded color bypasses dark mode
<p style={{ color: '#6B8F8C' }}>UCT · Week 6</p>`}</CodeBlock>
        </section>


        {/* ══ BRAND PALETTE ════════════════════════════════════ */}
        <section id="brand" className="mb-16 scroll-mt-8">
          <SectionTitle>Brand palette</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Raw brand colors exposed as CSS variables and Tailwind classes. Use for decorative elements — subject bars, illustrations, one-off accents.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-5">
            {brandPalette.map((color) => (
              <div key={color.token} className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="h-14" style={{ background: color.swatch }} />
                <div className="p-2">
                  <p className="text-[11px] font-bold text-foreground">{color.name}</p>
                  <p className="font-mono text-[9.5px] text-muted-foreground mt-0.5">{color.token}</p>
                </div>
              </div>
            ))}
          </div>

          <CodeBlock lang="tsx">{`// Brand tokens as Tailwind classes
<div className="bg-zel-teal text-white" />
<div className="bg-zel-amber-light text-zel-amber-dark" />
<div className="bg-zel-coral-light text-zel-coral" />

// As CSS variables
color: var(--zel-teal);
background: oklch(from var(--zel-teal) l c h / 15%); /* 15% opacity */`}</CodeBlock>
        </section>


        {/* ══ SUBJECT COLORS ═══════════════════════════════════ */}
        <section id="subjects" className="mb-16 scroll-mt-8">
          <SectionTitle>Subject colors</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Each subject area has a dedicated color pair — light background + dark text. Applied to course badges, note card accent bars, and filter chips.
          </p>

          <div className="rounded-lg border border-border overflow-hidden mb-5">
            <table className="w-full text-[11.5px]">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Subject</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Utility class</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground hidden md:table-cell">Background token</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground hidden md:table-cell">Text token</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Used on</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subjectColors.map((s) => (
                  <tr key={s.cls} className="hover:bg-muted/50 transition-colors">
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <Swatch color={s.swatch} />
                        <span className="font-medium text-foreground">{s.subject}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5"><code className="font-mono text-[11px] text-zel-teal-dark">{s.cls}</code></td>
                    <td className="px-3 py-2.5 hidden md:table-cell"><code className="font-mono text-[11px] text-muted-foreground">{s.bg}</code></td>
                    <td className="px-3 py-2.5 hidden md:table-cell"><code className="font-mono text-[11px] text-muted-foreground">{s.fg}</code></td>
                    <td className="px-3 py-2.5 text-muted-foreground">{s.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Live badge demos */}
          <div className="bg-card border border-border rounded-lg p-4 mb-5">
            <p className="text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground mb-3">Live preview</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "ECON 101", bg: "oklch(0.95 0.07 85)",     text: "oklch(0.6 0.14 68)",       border: "oklch(0.74 0.148 72.5 / 30%)" },
                { label: "BIO 210",  bg: "oklch(0.94 0.045 150)",   text: "oklch(0.68 0.12 150)",      border: "oklch(0.68 0.12 150 / 30%)" },
                { label: "LAW 301",  bg: "oklch(0.94 0.04 295)",    text: "oklch(0.65 0.12 295)",      border: "oklch(0.65 0.12 295 / 30%)" },
                { label: "ENG 202",  bg: "oklch(0.92 0.04 185.5)",  text: "oklch(0.38 0.09 185.5)",   border: "oklch(0.558 0.095 185.5 / 30%)" },
                { label: "PSYCH",    bg: "oklch(0.94 0.018 185.5)", text: "oklch(0.58 0.038 185.5)",  border: "oklch(0.9 0.018 185.5)" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center font-mono text-[9.5px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border"
                  style={{ background: b.bg, color: b.text, borderColor: b.border }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <CodeBlock lang="tsx">{`// Map course subject to badge class
const subjectClass: Record<string, string> = {
  commerce:    'badge-commerce',
  sciences:    'badge-sciences',
  law:         'badge-law',
  engineering: 'badge-eng',
  default:     'badge-default',
}

<Badge className={subjectClass[course.subject ?? 'default']}>
  {course.code}
</Badge>`}</CodeBlock>
        </section>


        {/* ══ DARK MODE ════════════════════════════════════════ */}
        <section id="darkmode" className="mb-16 scroll-mt-8">
          <SectionTitle>Dark mode</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Handled entirely by CSS variable reassignment in the <InlineCode>.dark</InlineCode> class. Use semantic tokens in components and dark mode works for free.
          </p>

          <div className="rounded-lg border border-border overflow-hidden mb-5">
            <table className="w-full text-[11.5px]">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Token</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Light</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Dark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { token: "--background",  light: "oklch(0.977 0.008 185.5)", lightLabel: "#F4F8F7",        dark: "oklch(0.2 0.045 185.5)",    darkLabel: "Deep teal-dark" },
                  { token: "--foreground",  light: "oklch(0.28 0.05 185.5)",   lightLabel: "#1A3D3A",        dark: "oklch(0.965 0.012 185.5)",  darkLabel: "Near white" },
                  { token: "--primary",     light: "oklch(0.558 0.095 185.5)", lightLabel: "#2F8F83",        dark: "oklch(0.72 0.07 185.5)",    darkLabel: "Lighter teal" },
                  { token: "--card",        light: "oklch(0.995 0.004 185.5)", lightLabel: "Warm white",     dark: "oklch(0.25 0.042 185.5)",   darkLabel: "Dark teal card" },
                  { token: "--accent",      light: "oklch(0.95 0.07 85)",      lightLabel: "Amber light",    dark: "oklch(0.6 0.14 68)",        darkLabel: "Amber dark" },
                ].map((row) => (
                  <tr key={row.token} className="hover:bg-muted/50 transition-colors">
                    <td className="px-3 py-2.5"><code className="font-mono text-[11px] text-zel-teal-dark">{row.token}</code></td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <Swatch color={row.light} />
                        <span className="text-muted-foreground">{row.lightLabel}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <Swatch color={row.dark} />
                        <span className="text-muted-foreground">{row.darkLabel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock lang="tsx">{`// Install: npm install next-themes

// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}</CodeBlock>
        </section>

        <hr className="border-border mb-16" />


        {/* ══ SHADOWS ══════════════════════════════════════════ */}
        <section id="shadows" className="mb-16 scroll-mt-8">
          <SectionTitle>Shadows</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            All shadows are teal-tinted — not grey. This keeps them cohesive with the brand and prevents the flat &quot;dropped grey box&quot; look that kills warm UIs.
          </p>

          {/* Visual demos */}
          <div className="bg-card border border-border rounded-lg p-5 mb-5">
            <p className="text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground mb-4">Visual comparison</p>
            <div className="flex flex-wrap gap-5 items-end">
              {[
                { label: "sm",    shadow: "0 1px 3px oklch(0.558 0.095 185.5/8%),0 1px 2px oklch(0.558 0.095 185.5/5%)",                                                bg: "var(--card)" },
                { label: "md",    shadow: "0 4px 12px oklch(0.558 0.095 185.5/12%),0 2px 6px oklch(0.558 0.095 185.5/7%)",                                             bg: "var(--card)" },
                { label: "lg",    shadow: "0 8px 28px oklch(0.558 0.095 185.5/14%),0 4px 10px oklch(0.558 0.095 185.5/8%)",                                            bg: "var(--card)" },
                { label: "card",  shadow: "0 2px 8px oklch(0.558 0.095 185.5/10%),0 0 0 1.5px oklch(0.9 0.018 185.5)",                                                 bg: "var(--card)" },
                { label: "amber", shadow: "0 4px 16px oklch(0.74 0.148 72.5/35%)", bg: "oklch(0.74 0.148 72.5)", textColor: "oklch(0.28 0.05 185.5)" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="w-20 h-14 rounded-lg flex items-center justify-center text-[11px] font-bold mb-2"
                    style={{ boxShadow: s.shadow, background: s.bg, color: s.textColor ?? "var(--muted-foreground)" }}
                  >
                    {s.label}
                  </div>
                  <code className="font-mono text-[9.5px] text-muted-foreground">.shadow-zel-{s.label}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden mb-5">
            <table className="w-full text-[11.5px]">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Class</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Use for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {shadows.map((s) => (
                  <tr key={s.cls} className="hover:bg-muted/50 transition-colors">
                    <td className="px-3 py-2.5"><code className="font-mono text-[11px] text-zel-teal-dark">.{s.cls}</code></td>
                    <td className="px-3 py-2.5 text-muted-foreground">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock lang="tsx">{`// Note card
<div className="bg-card rounded-lg shadow-zel-card">...</div>

// Modal / dialog
<div className="bg-card rounded-xl shadow-zel-lg">...</div>

// Primary CTA — amber glow
<Button className="bg-zel-amber text-zel-ink shadow-amber">
  Get started →
</Button>`}</CodeBlock>
        </section>


        {/* ══ PROGRESS ═════════════════════════════════════════ */}
        <section id="progress" className="mb-16 scroll-mt-8">
          <SectionTitle>Progress</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            The <InlineCode>.progress-zel</InlineCode> utility applies the teal→amber gradient to any progress bar fill.
          </p>

          <div className="bg-card border border-border rounded-lg p-5 mb-5 space-y-4">
            {[
              { label: "Just started", pct: 15 },
              { label: "Halfway",      pct: 50 },
              { label: "Almost done",  pct: 88 },
            ].map((p) => (
              <div key={p.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] text-muted-foreground">{p.label}</span>
                  <span className="text-[11px] font-bold text-zel-amber-dark">{p.pct}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${p.pct}%`,
                      background: "linear-gradient(90deg, oklch(0.558 0.095 185.5), oklch(0.74 0.148 72.5))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <CodeBlock lang="tsx">{`// With shadcn Progress component
<Progress
  value={progressPct}
  className="h-1.5 bg-muted [&>div]:progress-zel"
/>

// Custom div approach
<div className="h-1.5 bg-muted rounded-full overflow-hidden">
  <div
    className="h-full rounded-full progress-zel transition-all duration-500"
    style={{ width: \`\${progressPct}%\` }}
  />
</div>`}</CodeBlock>
        </section>


        {/* ══ CALLOUTS ═════════════════════════════════════════ */}
        <section id="callouts" className="mb-16 scroll-mt-8">
          <SectionTitle>Callouts</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Highlight boxes for the note reader. Amber for key concepts, teal for tips and info.
          </p>

          <div className="bg-card border border-border rounded-lg p-5 mb-5 space-y-3">
            <div
              className="p-3 rounded-r-lg border-l-[3px]"
              style={{ background: "oklch(0.95 0.07 85)", borderColor: "oklch(0.74 0.148 72.5)" }}
            >
              <p className="text-[12px] font-bold mb-1" style={{ color: "oklch(0.6 0.14 68)" }}>💡 Key concept</p>
              <p className="text-[11.5px] leading-relaxed" style={{ color: "oklch(0.5 0.1 68)" }}>
                Opportunity cost is what you give up when you choose one option over the next best alternative.
              </p>
            </div>

            <div
              className="p-3 rounded-r-lg border-l-[3px]"
              style={{ background: "oklch(0.558 0.095 185.5 / 8%)", borderColor: "oklch(0.558 0.095 185.5)" }}
            >
              <p className="text-[12px] font-bold mb-1" style={{ color: "oklch(0.38 0.09 185.5)" }}>ℹ️ Note</p>
              <p className="text-[11.5px] leading-relaxed" style={{ color: "oklch(0.45 0.07 185.5)" }}>
                This model assumes perfect information — real markets often deviate significantly.
              </p>
            </div>
          </div>

          <CodeBlock lang="tsx">{`// Amber callout — key concept
<div className="callout-amber p-3 rounded-r-lg mb-3">
  <p className="text-xs font-bold text-accent-foreground mb-1">
    💡 Key concept
  </p>
  <p className="text-xs text-accent-foreground/80 leading-relaxed">
    {content}
  </p>
</div>

// Teal callout — info / tip
<div className="bg-secondary border-l-zel p-3 rounded-r-lg">
  <p className="text-xs font-bold text-primary mb-1">ℹ️ Note</p>
  <p className="text-xs text-muted-foreground leading-relaxed">
    {content}
  </p>
</div>`}</CodeBlock>
        </section>


        {/* ══ BADGES ═══════════════════════════════════════════ */}
        <section id="badges" className="mb-16 scroll-mt-8">
          <SectionTitle>Badges</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Subject color utilities extend shadcn&apos;s <InlineCode>Badge</InlineCode> component via className.
          </p>

          <CodeBlock lang="tsx">{`// Resolve subject class from course data
const subjectBadgeClass: Record<string, string> = {
  commerce:    'badge-commerce',
  sciences:    'badge-sciences',
  law:         'badge-law',
  engineering: 'badge-eng',
  default:     'badge-default',
}

// Usage in NoteCard
<Badge className={subjectBadgeClass[course.subject ?? 'default']}>
  {course.code}
</Badge>

// shadcn variant badges for status
<Badge variant="default">⭐ 4.9</Badge>       // teal bg
<Badge variant="secondary">PDF</Badge>        // muted bg
<Badge variant="destructive">🔥 Hot</Badge>   // coral bg
<Badge variant="outline">Rich text</Badge>    // border only`}</CodeBlock>
        </section>


        {/* ══ BACKGROUNDS ══════════════════════════════════════ */}
        <section id="backgrounds" className="mb-16 scroll-mt-8">
          <SectionTitle>Backgrounds</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Utility classes for hero sections, dark headers, and gradient surfaces.
          </p>

          <div className="grid grid-cols-3 gap-0 rounded-lg overflow-hidden border border-border mb-5">
            {[
              { label: ".bg-zel-gradient", desc: "Hero sections",              bg: "linear-gradient(135deg,oklch(0.977 0.008 185.5) 0%,oklch(0.92 0.04 185.5) 100%)", textClass: "text-zel-muted-fg" },
              { label: "bg-zel-ink",       desc: "Profile hero, onboarding",   bg: "oklch(0.28 0.05 185.5)", textClass: "text-white/60" },
              { label: "bg-primary",       desc: "Search bar, active nav",     bg: "oklch(0.558 0.095 185.5)", textClass: "text-white/70" },
            ].map((b) => (
              <div key={b.label} className="p-5 flex flex-col justify-end min-h-[80px]" style={{ background: b.bg }}>
                <code className={`font-mono text-[10px] font-bold ${b.textClass}`}>{b.label}</code>
                <span className={`text-[9px] mt-0.5 ${b.textClass}`}>{b.desc}</span>
              </div>
            ))}
          </div>

          <CodeBlock lang="tsx">{`// Subtle gradient — home screen top area
<div className="bg-zel-gradient px-4 pt-3 pb-4">
  <h2>Hey Amara 👋</h2>
</div>

// Dark ink — profile hero, onboarding
<div className="bg-zel-ink text-white px-4 py-7">
  ...
</div>

// Reader bottom bar
<div className="bg-zel-ink absolute bottom-0 inset-x-0 px-4 py-3">
  ...
</div>`}</CodeBlock>
        </section>


        {/* ══ BORDERS ══════════════════════════════════════════ */}
        <section id="borders" className="mb-16 scroll-mt-8">
          <SectionTitle>Borders</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Accent border utilities for note card left-bars, reader heading underlines, and highlighted sections.
          </p>

          <div className="bg-card border border-border rounded-lg p-5 mb-5 space-y-3">
            <div className="p-3 rounded-r-lg" style={{ borderLeft: "3px solid oklch(0.558 0.095 185.5)", background: "oklch(0.977 0.008 185.5)" }}>
              <p className="text-[13px] font-bold text-zel-ink mb-0.5">Section heading</p>
              <p className="text-[11px] text-muted-foreground">.border-l-zel — teal left border</p>
            </div>
            <div className="p-3 rounded-r-lg" style={{ borderLeft: "3px solid oklch(0.74 0.148 72.5)", background: "oklch(0.95 0.07 85)" }}>
              <p className="text-[13px] font-bold mb-0.5" style={{ color: "oklch(0.6 0.14 68)" }}>💡 Key concept</p>
              <p className="text-[11px]" style={{ color: "oklch(0.55 0.1 68)" }}>.border-l-amber — amber left border</p>
            </div>
          </div>

          <CodeBlock lang="tsx">{`// Section heading — used in reader
<h3 className="border-l-zel pl-3 font-heading text-sm font-semibold">
  Core Assumptions
</h3>

// Amber callout
<div className="callout-amber border-l-amber p-3 rounded-r-lg">
  ...
</div>

// Note card accent bar — absolute positioned
<div className="relative overflow-hidden rounded-lg bg-card">
  <div className="absolute left-0 inset-y-0 w-[3px] accent-amber" />
  {/* card content */}
</div>`}</CodeBlock>
        </section>

        <hr className="border-border mb-16" />


        {/* ══ USAGE RULES ══════════════════════════════════════ */}
        <section id="rules" className="mb-16 scroll-mt-8">
          <SectionTitle>Usage rules</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Non-negotiable conventions that keep the UI consistent as the codebase grows.
          </p>

          <Tip><strong>Always use semantic tokens in components.</strong> Use <InlineCode>bg-background</InlineCode>, <InlineCode>text-foreground</InlineCode>, <InlineCode>bg-card</InlineCode>, <InlineCode>border-border</InlineCode>. Never hardcode hex values in component files.</Tip>
          <Tip><strong>Use brand tokens for decorative elements only.</strong> The <InlineCode>--zel-*</InlineCode> variables are for subject badges, illustration accents, and one-off decorative elements — not text or backgrounds that need dark mode.</Tip>
          <Warn><strong>Don&apos;t mix oklch and hex in the same file.</strong> Tailwind resolves colors at build time. If you use both formats for the same color, dark mode won&apos;t work correctly for that element.</Warn>
          <Warn><strong>Don&apos;t use grey shadows.</strong> Always use <InlineCode>.shadow-zel-*</InlineCode> utilities. Grey shadows break the warm teal aesthetic and are the easiest way to make the UI look generic.</Warn>
          <Tip><strong>Subject colors are paired — always use both.</strong> Never use <InlineCode>--zel-amber</InlineCode> alone as a badge background. Always pair it with <InlineCode>--zel-amber-dark</InlineCode> as text so contrast is maintained.</Tip>
          <Tip><strong>Focus rings are automatic.</strong> The <InlineCode>--ring</InlineCode> token is set to teal globally. Every shadcn input and button picks this up — no extra classes needed.</Tip>
        </section>


        {/* ══ CHEAT SHEET ══════════════════════════════════════ */}
        <section id="cheatsheet" className="mb-16 scroll-mt-8">
          <SectionTitle>Cheat sheet</SectionTitle>
          <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
            Every utility class and Tailwind brand token in one place.
          </p>

          <div className="rounded-lg border border-border overflow-hidden mb-5">
            <table className="w-full text-[11.5px]">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Class</th>
                  <th className="text-left px-3 py-2 text-[9.5px] font-bold tracking-widest uppercase text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {utilityClasses.map((u) => (
                  <tr key={u.cls} className="hover:bg-muted/50 transition-colors">
                    <td className="px-3 py-2.5"><code className="font-mono text-[11px] text-zel-teal-dark">{u.cls}</code></td>
                    <td className="px-3 py-2.5 text-muted-foreground">{u.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock lang="css">{`/* All Tailwind brand color tokens */
bg-zel-teal          text-zel-teal          border-zel-teal
bg-zel-teal-light    text-zel-teal-dark     text-zel-teal-mid
bg-zel-amber         text-zel-amber         border-zel-amber
bg-zel-amber-light   text-zel-amber-dark
bg-zel-coral         text-zel-coral
bg-zel-coral-light
bg-zel-sage          text-zel-sage
bg-zel-sage-light
bg-zel-lavender      text-zel-lavender
bg-zel-lavender-light
bg-zel-ink           text-zel-ink

/* Semantic tokens (shadcn compatible) */
bg-background        text-foreground
bg-card              text-card-foreground
bg-primary           text-primary-foreground
bg-secondary         text-secondary-foreground
bg-muted             text-muted-foreground
bg-accent            text-accent-foreground
bg-destructive       border-border           ring-ring`}</CodeBlock>
        </section>

      </main>
    </div>
  )
}