import React from "react"
import { UseFormReturn } from "react-hook-form"

import { IAccordionContent, TextH } from "@/app/comps"

import form, { styles } from ".."
import AppInput from "../../../../../comps/forms/reform"
import { IFormSchema } from "../../formSchema"

export function clientInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item2",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h5">Client's Info</TextH>
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
