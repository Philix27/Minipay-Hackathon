"use client"

import InvoicePay from "./invoicePay"

export default function PaymentLinkPage(props: {
  params: { invoice_id: string }
}) {
  return (
    <div className="w-full">
      <InvoicePay invoiceId={props.params.invoice_id} />
    </div>
  )
}
