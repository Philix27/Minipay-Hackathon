"use client"

import { Button } from "@/comps"
import { useReadContract, useWriteContract } from "wagmi"

import { SmartContract } from "@/lib/chain/en"

export function Pay(props: {
  invoiceId: string
  currentUserWalletAddress: string
}) {
  const sm = new SmartContract()
  const { writeContract, isLoading } = useWriteContract()

  const onSubmit = () => {
    console.log("tester")
    // writeContract({
    //   abi: sm.abi,
    //   address: `0x${sm.contractAddress}`,
    //   functionName: "payInvoice",
    //   args: ["0x7054b457f55dc0D47725bdeeB98eddE543eC448D", 1, "invoice_id"],
    // })
    try {
      sm.payInvoice(props.currentUserWalletAddress, 1, props.invoiceId)
    } catch (err) {
      console.log("Oops an error occurred")
    }
  }

  //   const result = useReadContract({
  //     abi: c.abi,
  //     address: "0x6b175474e89094c44da98b954eedeac495271d0f",
  //     functionName: "balanceOf",
  //     args: ["0x6b175474e89094c44da98b954eedeac495271d0f"],
  //     account: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
  //   })
  return (
    <Button type="submit" onClick={onSubmit}>
      Submit
    </Button>
  )
}
