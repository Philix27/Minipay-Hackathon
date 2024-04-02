"use client"

import "@/styles/globals.css"
import { cn, fontSans, siteConfig } from "@/lib"
import { ThemeProvider } from "next-themes"

import { SiteHeader } from "./home/_comps"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
