"use client"

import { Button } from "@/comps"
import { toast } from "sonner"

import { SmartContract } from "@/lib/chain/en"

export function Pay(props: { invoiceId: string; amount: number }) {
  const sm = new SmartContract()

  const onSubmit = async () => {
    try {
      const wallet = await sm.getAccount()
      sm.payInvoice(wallet, 1, props.invoiceId).then(() => {
        toast.success("Paid success fully")
      })
      // sm.payInvoice2(wallet, "cUSD", 1)
    } catch (err) {
      console.log("Oops an error occurred")
    }
  }
  return (
    <Button type="submit" onClick={onSubmit}>
      Pay
    </Button>
  )
}
