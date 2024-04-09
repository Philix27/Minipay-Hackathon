"use client"

import "@/styles/globals.css"
import { cn, fontSans } from "@/lib"
import { Celo } from "@thirdweb-dev/chains"
import { ThemeProvider } from "next-themes"
// import { ThirdwebProvider } from "@/lib/thirdweb/thirdweb"

import { ConnectButton, ThirdwebProvider } from "thirdweb/react"
import { ethers } from "ethers"

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
    </>
  )
}
