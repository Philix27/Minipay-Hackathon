"use client"

import "@/lib/styles/globals.css"
import { cn, fontSans, wagmiConfig } from "@/lib"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { WagmiProvider } from "wagmi"

import { NavbarHeader } from "./home/_comps"

interface RootLayoutProps {
  children: React.ReactNode
}
const queryClient = new QueryClient()

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-secondary font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">
                  <NavbarHeader />
                  {children}
                </div>
              </div>
            </QueryClientProvider>
          </WagmiProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
