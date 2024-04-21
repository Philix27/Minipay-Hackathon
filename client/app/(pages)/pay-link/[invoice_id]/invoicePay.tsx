"use client"

import React from "react"
import InvoicePreview from "@/(core)/invoice/new/preview"
import { trpc } from "@/lib"

export default function InvoicePay(props: { invoiceId: string }) {
  const { isLoading, data: invoice } = trpc.invoice.get_one.useQuery({
    id: props.invoiceId,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!invoice) {
    return <div>No invoice found</div>
  }
  return (
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
  )
}
