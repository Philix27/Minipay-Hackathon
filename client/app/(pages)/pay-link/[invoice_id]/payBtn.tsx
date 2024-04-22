"use client"

import { Button } from "@/comps"

import { SmartContract } from "@/lib/chain/en"

export function Pay(props: { invoiceId: string; amount: number }) {
  const sm = new SmartContract()

  const onSubmit = async () => {
    try {
      const wallet = await sm.getAccount()
      sm.payInvoice(wallet, 1, props.invoiceId)
    } catch (err) {
      console.log("Oops an error occurred")
    }
  }
  return (
    <Button type="submit" onClick={onSubmit}>
      Submit
    </Button>
  )
}
