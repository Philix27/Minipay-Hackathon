"use client"

import "@/lib/styles/globals.css"
import { Celo } from "@thirdweb-dev/chains"
import { ethers } from "ethers"
import { ThemeProvider } from "next-themes"
import { ConnectButton, ThirdwebProvider } from "thirdweb/react"

import { cn, fontSans } from "@/lib/utils"

interface RootLayoutProps {
  children: React.ReactNode
}

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
          <ThirdwebProvider
          // activeChain="ethereum"
          // clientId="YOUR_CLIENT_ID"
          // signer={new ethers.providers.Web3Provider(
          //   window.ethereum
          // ).getSigner()}
          >
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </ThirdwebProvider>
          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
