import React from "react"
import { UseFormReturn } from "react-hook-form"

import { IFormSchema } from "../formSchema"
import { AddressBar } from "./addressBar"
import { FooterBar } from "./footerBar"
import { ItemsBar } from "./itemsBar"
import { TopBar } from "./topBar"
import { TotalBar } from "./totalBar"

export default function PreviewComp(props: {
  form: UseFormReturn<IFormSchema>
}) {
  const { form } = props
  return (
    <div className={"flex flex-col items-center justify-center my-5"}>
      <div
        className={`
          w-[90%]
          md:w-[60%] 
          bg-primary border-[1px] border-secondary-foreground
        `}
      >
        <TopBar
          bizName={form.getValues("fromBusinessName")}
          invoiceDate={form.getValues("fromDate")}
        />
        <AddressBar
          fromAddress={form.getValues("fromAddress")}
          fromEmail={form.getValues("fromEmail")}
          fromPhone={form.getValues("fromPhone")}
          toAddress={form.getValues("toAddress") || ""}
          toPhone={form.getValues("toPhone") || ""}
          toEmail={form.getValues("toEmail")}
          toWebsite={form.getValues("toWebsite") || ""}
          toBizName={form.getValues("toBusinessName") || ""}
        />
        <ItemsBar />
        <TotalBar
          total={"12"}
          subtotal={"23.90"}
          tax={"256%"}
          discount={"278"}
        />
        <FooterBar />
      </div>
    </div>
  )
}
