import React from "react"
import { IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import form, { styles } from ".."
import { IFormSchema } from "../../formSchema"
import AppInput from "../reform"

export function clientInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item2",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h4">Client's Info</TextH>
      </div>
    ),
    content: (
      <>
        <AppInput
          control={form.control}
          name="clientBusinessName"
          label="Business name"
          place="Client's name"
        />
        <AppInput
          control={form.control}
          name="clientBusinessName"
          label="Business name"
          place="Client's name"
        />
        <AppInput
          control={form.control}
          name="clientAddress"
          label="Address"
          place="Address"
        />
        <AppInput
          control={form.control}
          name="clientWebsite"
          label="Website"
          place="Website"
        />
      </>
    ),
  }
}
