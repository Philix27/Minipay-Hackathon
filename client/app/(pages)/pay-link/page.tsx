"use client"

import React from "react"

import { Pay } from "./[invoice_id]/payBtn"

export default function PaymentLinks() {
  return (
    <div>
      All payment links
      <div>
        <Pay
          invoiceId={"invoice"}
          amount={1}
        />
      </div>
    </div>
  )
}
