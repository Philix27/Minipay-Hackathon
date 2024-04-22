"use client"

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react"
// Import CELO chain information
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains"
// Import known recommended wallets
import { Valora } from "@celo/rainbowkit-celo/wallets"
import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit"
import { ledgerWallet } from "@rainbow-me/rainbowkit/wallets"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import { WagmiConfig, WagmiProvider } from "wagmi"
import { arbitrum, base, celo, celoAlfajores, mainnet } from "wagmi/chains"

import { TrpcProvider } from "./trpcProvider"

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "90987766665",
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

const queryClient = new QueryClient()
export const SettingsContext = createContext<{
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}>({
  isOpen: false,
  setOpen: function (value: React.SetStateAction<boolean>): void {},
})

export function AppProviders(props: { children: ReactNode }) {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <TrpcProvider>
              <SettingsContext.Provider value={{ isOpen, setOpen }}>
                {props.children}
                <Toaster className={"bg-primary"} />
              </SettingsContext.Provider>
            </TrpcProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
