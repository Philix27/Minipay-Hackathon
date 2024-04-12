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
      <div className={"bg-amber-50 md:h-[1000px] md:w-[800px]"}>
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
