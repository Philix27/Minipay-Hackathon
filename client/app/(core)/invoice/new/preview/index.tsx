import React from "react"
import { UseFormReturn } from "react-hook-form"

import { TextB, TextH } from "@/app/comps"

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
    <div className={"flex flex-col items-center justify-center mt-5"}>
      <div
        className={`
          w-[90%]
          md:w-[60%] 
          bg-primary border-[1px] border-secondary-foreground
        `}
      >
        <TopBar
          bizName={form.getValues("fromBusinessName")}
          invoiceDate={form.getValues("clientAddress")}
        />
        <AddressBar />
        <ItemsBar />
        <TotalBar />
        <FooterBar />
      </div>
    </div>
  )
}
