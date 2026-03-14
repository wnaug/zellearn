import { motion } from "framer-motion"
import { Button }   from "@/components/ui/button"
import ZelLogo from "./ZelLogo"
import Link from "next/link"


export default function Header() {
    return (
        <>
         <motion.nav
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
              >
                <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
                  <Link href="/"><ZelLogo /></Link>
                  <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-muted-foreground">
                    <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="/#how"      className="hover:text-foreground transition-colors">How it works</Link>
                    <Link href="/#faq"      className="hover:text-foreground transition-colors">FAQ</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                      <Link href="/sign-in">Sign in</Link>
                    </Button>
                    <Button asChild className=" hover:bg-zel-ink/90 ease-in-out duration-300">
                      <Link href="/sign-up">Get started</Link>
                    </Button>
                  </div>
                </div>
              </motion.nav>
        </>
    )
}