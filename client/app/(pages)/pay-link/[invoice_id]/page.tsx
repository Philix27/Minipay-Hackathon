"use client"

import InvoicePay from "./invoicePay"

export default function PaymentLinkPage(props: {
  params: { invoice_id: string }
}) {
  return <InvoicePay invoiceId={props.params.invoice_id} />
}
