import React from "react"
import { TextB, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import { IFormSchema } from "../formSchema"

export default function PreviewComp(props: {
  form: UseFormReturn<IFormSchema>
}) {
  const { form } = props
  return (
    <div className={"flex flex-col items-center justify-center mt-5"}>
      <div className={"bg-amber-50 md:h-[1000px] md:w-[800px]"}>
        {/* Header */}
        <div className={"h-[70px] p-[50px] flex justify-between items-start"}>
          <TextH v="h2" className={`text-muted`}>
            {form.getValues("fromBusinessName")}
          </TextH>
          <div>
            <TextB v="p5">{form.getValues("clientAddress")}</TextB>
          </div>
        </div>
        {/* Address */}
        <div className={"bg-amber-600 p-[50px]"}>
          <div>Your address</div>
          <div>To address</div>
        </div>
      </div>
      {/* List of Items */}
      <div>
        <div></div>
      </div>
      <div className={"bg-amber-600 p-[50px]"}></div>
    </div>
  )
}
