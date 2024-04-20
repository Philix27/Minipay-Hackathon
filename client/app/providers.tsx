"use client"

import React, { ReactNode } from "react"
import { wagmiConfig } from "@/lib"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { WagmiProvider } from "wagmi"

const queryClient = new QueryClient()

export default function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
