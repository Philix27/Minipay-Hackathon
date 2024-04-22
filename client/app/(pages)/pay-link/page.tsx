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
          currentUserWalletAddress={
            "0x7054b457f55dc0D47725bdeeB98eddE543eC448D"
          }
        />
      </div>
    </div>
  )
}
