"use client"

import React, { ReactNode } from "react"
import { wagmiConfig } from "@/lib"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { WagmiProvider } from "wagmi"

import { TrpcProvider } from "./trpcProvider"

const queryClient = new QueryClient()

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <TrpcProvider>{props.children}</TrpcProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
