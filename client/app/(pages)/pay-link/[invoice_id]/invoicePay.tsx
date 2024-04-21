"use client"

import React from "react"
import InvoicePreview from "@/(core)/invoice/new/preview"
import { Button } from "@/comps"
import { trpc } from "@/lib"

import { SmartContract } from "@/lib/chain/en"

export default function InvoicePay(props: { invoiceId: string }) {
  const { isLoading, data: invoice } = trpc.invoice.get_one.useQuery({
    id: props.invoiceId,
  })

  const onSubmit = () => {
    const c = new SmartContract()
    console.log("tester")
    try {
      c.payInvoice(
        "0x7054b457f55dc0D47725bdeeB98eddE543eC448D",
        1,
        "testInvoicer"
      )
      console.log("Sent successfully")
    } catch (err) {
      console.log("Oops an error occurred")
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!invoice) {
    return (
      <div>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <InvoicePreview
        fromAddress={invoice.fromAddress}
        fromPhone={invoice.fromPhone}
        fromEmail={invoice.fromEmail}
        toAddress={invoice.toAddress!}
        toPhone={invoice.toPhone!}
        toEmail={invoice.toEmail}
        toWebsite={invoice.toWebsite!}
        toBizName={invoice.toBusinessName}
        fromDate={invoice.fromDate}
        bizName={invoice.fromBusinessName}
        total={invoice.total!.toString()}
        subtotal={invoice.subtotal!.toString()}
        tax={invoice.tax!.toString()}
        discount={invoice.discount!.toString()}
      />
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  )
}
