import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { fontSans, fontSerif, fontMono, fontLogo } from "@/components/ui/fonts"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-sans",
        fontMono.variable,
        fontSerif.variable,
        fontLogo.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
