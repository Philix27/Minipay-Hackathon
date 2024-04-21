import React from "react"
import { UseFormReturn } from "react-hook-form"

import { IFormSchema } from "../formSchema"
import { AddressBar } from "./addressBar"
import { FooterBar } from "./footerBar"
import { ItemsBar } from "./itemsBar"
import { TopBar } from "./topBar"
import { TotalBar } from "./totalBar"

export default function InvoicePreview(props: {
  fromAddress: string
  fromPhone: string
  fromEmail: string
  toAddress: string
  toPhone: string
  toEmail: string
  toWebsite: string
  toBizName: string
  fromDate: string
  bizName: string
  total: string
  subtotal: string
  tax: string
  discount: string
}) {
  return (
    <div className={"flex flex-col items-center justify-center my-5"}>
      <div
        className={`
          w-[90%]
          md:w-[60%] 
          bg-primary border-[1px] border-secondary-foreground
        `}
      >
        <TopBar bizName={props.bizName} invoiceDate={props.fromDate} />
        <AddressBar
          fromAddress={props.fromAddress}
          fromEmail={props.fromEmail}
          fromPhone={props.fromPhone}
          toAddress={props.toAddress}
          toPhone={props.toPhone}
          toEmail={props.toEmail}
          toWebsite={props.toWebsite}
          toBizName={props.bizName}
        />
        <ItemsBar />
        <TotalBar
          total={props.total}
          subtotal={props.subtotal}
          tax={props.tax}
          discount={props.discount}
        />
        <FooterBar />
      </div>
    </div>
  )
}
