import React from "react"
import { IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import form, { styles } from ".."
import { IFormSchema } from "../formSchema"
import AppInput from "../reform"

export function personalInfo(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "item1",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h4">Personal Info</TextH>
      </div>
    ),
    content: (
      <>
        <AppInput
          control={form.control}
          name="fromBusinessName"
          label="Your name"
        />
        <div className={styles.inputGroup}>
          <AppInput
            control={form.control}
            name="email"
            label="Email"
            place="Enter email"
          />
          <AppInput control={form.control} name="date" label="Date" />
        </div>
        <div className={styles.inputGroup}>
          <AppInput
            control={form.control}
            name="clientAddress"
            label="Address"
          />
          <AppInput control={form.control} name="phone" label="Phone number" />
        </div>
      </>
    ),
  }
}
