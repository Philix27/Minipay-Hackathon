import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains"
import celoGroups from "@celo/rainbowkit-celo/lists"
import { createConfig, http } from "wagmi"
import { celo, celoAlfajores } from "wagmi/chains"

// declare module "wagmi" {
//   interface Register {
//     config: typeof wagmiConfig
//   }
// }

export const wagmiConfig = createConfig({
  chains: [celoAlfajores, celo],
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
})
