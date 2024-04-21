"use client"

import React, { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

import { TrpcProvider } from "./trpcProvider"

const queryClient = new QueryClient()

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TrpcProvider>{props.children}</TrpcProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
