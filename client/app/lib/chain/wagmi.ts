import { createConfig, http } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig
  }

  interface window {
    ethereum: any
  }
}

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
