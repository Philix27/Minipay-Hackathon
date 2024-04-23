"use client"

import React from "react"
import InvoicePreview from "@/(core)/invoice/new/preview"
import { Button } from "@/comps"
import { trpc } from "@/lib"

import { Pay } from "./payBtn"

export default function InvoicePay(props: { invoiceId: string }) {
  const { isLoading, data: invoice } = trpc.invoice.getById.useQuery({
    id: props.invoiceId,
  })
  // const { isLoading, data: invoice } = trpc.invoice.getAll.useQuery({
  //   id: props.invoiceId,
  // })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!invoice) {
    return (
      <div>
        <div>No invoice found...</div>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center flex-col w-full">
      {/* <InvoicePreview
        fromAddress={"Celo MiniPay Hackathon"}
        fromPhone={"08101234567"}
        fromEmail={"philixbob@gmail.com"}
        toAddress={"Celo MiniPay Hackathon"}
        toPhone={""}
        toEmail={"joma@tech.com"}
        toWebsite={"www.joma.tech"}
        toBizName={"Joma"}
        fromDate={"27 July, 2024"}
        bizName={"Philix"}
        total={"2"}
        subtotal={"2"}
        tax={"0"}
        discount={"0"}
        item1Name={"Milk"}
        item1Quantity={1}
        item1Amount={1}
        item2Name={"Sugar"}
        item2Quantity={1}
        item2Amount={1}
      /> */}
      <InvoicePreview
        fromAddress={invoice.fromAddress}
        fromPhone={invoice.fromPhone}
        fromEmail={invoice.fromEmail}
        toAddress={invoice.toAddress || ""}
        toPhone={invoice.toPhone  || ""}
        toEmail={invoice.toEmail}
        toWebsite={invoice.toWebsite  || ""}
        toBizName={invoice.toBusinessName}
        fromDate={invoice.fromDate}
        bizName={invoice.fromBusinessName}
        total={invoice.total!.toString()}
        subtotal={invoice.subtotal!.toString()}
        tax={invoice.tax?.toString() || ""}
        discount={invoice.discount?.toString() || ""}
        item1Name={"Milk"}
        item1Quantity={1}
        item1Amount={1}
        item2Name={"Sugar"}
        item2Quantity={1}
        item2Amount={1}
      />
      <Pay invoiceId={invoice.id} amount={2} />
    </div>
  )
}
