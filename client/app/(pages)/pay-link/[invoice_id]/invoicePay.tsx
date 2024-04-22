"use client"

import React from "react"
import InvoicePreview from "@/(core)/invoice/new/preview"
import { Button } from "@/comps"
import { trpc } from "@/lib"

import { Pay } from "./payBtn"

export default function InvoicePay(props: { invoiceId: string }) {
  const { isLoading, data: invoice } = trpc.invoice.get_one.useQuery({
    id: props.invoiceId,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!invoice) {
    return (
      <div>
        <div>Mo invoice found...</div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <InvoicePreview
        fromAddress={invoice.fromAddress || ""}
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
      <Pay invoiceId={invoice.id} amount={1} />
    </div>
  )
}
