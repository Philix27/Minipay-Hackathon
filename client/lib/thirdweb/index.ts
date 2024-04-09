"use client"

// Do not import the components/hooks directly from the `thirdweb` package in server components
// export them from here and import in server components so that they are tagged with "use client" directive
import { createThirdwebClient } from "thirdweb"

// Do not import the components/hooks directly from the `thirdweb` package in server components
// export them from here and import in server components so that they are tagged with "use client" directive

export { ThirdwebProvider, ConnectButton } from "thirdweb/react"

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID

if (!clientId) {
  throw new Error("No client ID provided")
}

export const ThirdClient = createThirdwebClient({
  clientId: clientId,
})
