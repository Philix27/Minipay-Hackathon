import React from "react"
import { IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import { IFormSchema } from "../formSchema"
import form, { styles } from "../index"
import AppInput from "../reform"

export function footerInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item3",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h4">Footer Notes</TextH>
      </div>
    ),
    content: (
      <div className={styles.inputGroup}>
        <AppInput
          control={form.control}
          name="footerNote"
          label="Footer note"
        />
        <AppInput
          control={form.control}
          name="thanksMsg"
          label="Thank you message"
        />
      </div>
    ),
  }
}
