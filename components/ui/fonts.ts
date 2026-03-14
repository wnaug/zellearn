// ui/fonts.ts

import {Figtree, Mozilla_Headline, Mozilla_Text, JetBrains_Mono, Fraunces} from "next/font/google"


// *** Primary Fonts ***

// Primary Heading Font
 export const fontSerif = Fraunces({
  variable: "--font-serif",
  display: "swap",
  subsets: ["latin"],
  fallback: [ "Georgia", "Times New Roman", "Times", "serif"]
})

// Primary Text Font
 export const fontSans = Figtree({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
  fallback: [ "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
})

// Primary Mono/Number Font
 export const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  display: "swap",
  subsets: ["latin"],
  fallback: [ "SF Mono", "SF Mono-Regular", "SF Mono Mac", "SF Mono Mac Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
})



//  export const mozillaHeadline = Mozilla_Headline({
//   variable: "--font-mozilla-headline",
//   display: "swap",
//   subsets: ["latin"],
// })

//  export const mozillaText = Mozilla_Text({
//   variable: "--font-mozilla-text",
//   display: "swap",
//   subsets: ["latin"],
// })


