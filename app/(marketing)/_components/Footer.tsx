import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useRef } from "react"
import ZelLogo from "./ZelLogo"
import Image from "next/image"



const footerLinks = {
  Product:  [{ label: "Search notes", href: "/search" }, { label: "Sign up", href: "/sign-up" }, { label: "Sign in", href: "/sign-in" }],
  Company:  [{ label: "About", href: "/about" },         { label: "Privacy", href: "/privacy" },  { label: "Terms", href: "/terms" }, { label: "Contact", href: "mailto:zellearn@zelox.space" }],
}

export default function Footer() {
     const footerRef  = useRef<HTMLDivElement>(null)
    return (
         <footer ref={footerRef} className="relative overflow-hidden" style={{ background: "oklch(0.2 0.042 185.5)" }}>
        
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute w-[700px] h-[700px] rounded-full -top-48 -left-48 opacity-12"
                    style={{ background: "radial-gradient(circle,oklch(0.558 0.095 185.5) 0%,transparent 65%)" }} />
                  <div className="absolute w-[500px] h-[500px] rounded-full -bottom-32 -right-32 opacity-8"
                    style={{ background: "radial-gradient(circle,oklch(0.74 0.148 72.5) 0%,transparent 65%)" }} />
             
                  <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage: "linear-gradient(oklch(0.72 0.07 185.5) 1px,transparent 1px),linear-gradient(90deg,oklch(0.72 0.07 185.5) 1px,transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                </div>
        
                {/* ── MARQUEE ───────────────────────────────────────── */}
                <div className="relative overflow-hidden border-b border-white/8 py-4">
                  <div className="gsap-marquee-track flex gap-0 whitespace-nowrap w-max">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-0">
                        {[
                          "⚡ Instant search",
                          "📖 Clean reader",
                          "📍 Progress tracking",
                          "🔖 Bookmarks",
                          "🎓 Kenyan universities",
                          "✨ Distraction-free",
                          "📱 Mobile-first",
                        ].map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-3 px-8 text-[12px] font-semibold tracking-wide text-white/30"
                          >
                            {item}
                            <span className="text-white/15 text-lg">·</span>
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
        
                <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-12">
        
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
        
                    <div className="lg:col-span-2 gsap-footer-item">
                    <div className="flex items-center  gap-2.5">
                            <Image src="/assets/logo-inverted.svg" width={40} height={40} alt="Zel Learn Logo" className="rounded-xl"/>
                            <span className={`font-serif font-bold text-xl text-background/70 `}>
                              Zel Learn
                            </span>
                          </div>
                      <p className="text-[13.5px] text-white/40 leading-relaxed mt-4 max-w-[220px]">
                        A search-first study library built for students. Find notes in seconds.
                      </p>
        
                      <div className="mt-6 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                        <div>
                          <p className="text-[11px] font-bold text-white/70">Install the app</p>
                          <p className="text-[10px] text-white/35">Add to home screen from your browser</p>
                        </div>
                      </div>
        
                      <div className="flex items-center gap-2 mt-5">
                        <div className="w-2 h-2 rounded-full bg-zel-sage animate-pulse" />
                        <span className="text-[11px] font-semibold text-zel-sage animate-pulse">All systems operational</span>
                      </div>
                    </div>
        
                    <div className="lg:col-span-3 grid grid-cols-3 gap-8">
                      {Object.entries(footerLinks).map(([group, links], gi) => (
                        <div key={group} className={`gsap-footer-item`} style={{ transitionDelay: `${gi * 60}ms` }}>
                          <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-white/30 mb-5">{group}</p>
                          <ul className="space-y-3">
                            {links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="text-[13px] text-white/45 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      
                    </div>
                    
                  </div>
        
                  <Separator className="bg-white/8 mb-10" />
        
                  <div className="gsap-footer-item overflow-hidden mb-10">
                    <p
                      className="font-serif font-bold text-white/[0.04] select-none leading-none tracking-tighter"
                      style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
                    >
                      Zel Learn
                    </p>
                  </div>
        
                  <Separator className="bg-white/8 mb-8" />
        
                  <div className="gsap-footer-item flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <p className="text-[12px] text-white/30 animate-bounce">
                        © <Link href="https://zelox.space">Zelox industries</Link> {new Date().getFullYear()}
                      </p>
                      <span className="text-white/15 hidden sm:block">·</span>
                      <p className="text-[12px] text-white/30">
                        Built in Kenya{" "}
                        <span className="text-[13px]">🇰🇪</span>
                      </p>
                      <span className="text-white/15 hidden sm:block">·</span>
                      <p className="text-[12px] text-white/30">
                        Made with{" "}
                        <span className="text-zel-coral">♥</span>
                        {" "}for students
                      </p>
                    </div>
        
                    <div className="flex items-center gap-2 flex-wrap">
                      {["Chuka", "Egerton", "UON"].map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full border text-white/35 border-white/10 hover:border-white/20 hover:text-white/55 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
        
                <div
                  className="absolute bottom-0 inset-x-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, oklch(0.558 0.095 185.5 / 40%), oklch(0.74 0.148 72.5 / 30%), transparent)" }}
                />
              </footer>
        
    )
}