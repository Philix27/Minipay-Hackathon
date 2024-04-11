import React from "react"
import { IAccordionContent, TextH } from "@/comps"
import { UseFormReturn } from "react-hook-form"

import form, { styles } from ".."
import { IFormSchema } from "../formSchema"
import AppInput from "../reform"

export function invoiceItems(props: {
  form: UseFormReturn<IFormSchema>
}): IAccordionContent {
  const { form } = props
  return {
    value: "invoiceItems",
    title: (
      <div className={"w-full bg-primary py-2"}>
        <TextH v="h4">Invoice Items</TextH>
      </div>
    ),
    content: (
      <>
        <div className={styles.inputGroup}>
          <AppInput
            control={form.control}
            name="footerNote"
            label="Item 1"
            place="Name"
          />

          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Quantity"
          />
          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Amount"
          />
        </div>
        <div className={styles.inputGroup}>
          <AppInput
            control={form.control}
            name="footerNote"
            label="Item 1"
            place="Name"
          />

          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Quantity"
          />
          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Amount"
          />
        </div>
        <div className={styles.inputGroup}>
          <AppInput
            control={form.control}
            name="footerNote"
            label="Item 1"
            place="Name"
          />

          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Quantity"
          />
          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Amount"
          />
        </div>
        <div className={styles.inputGroup}>
          <AppInput
            control={form.control}
            name="footerNote"
            label="Item 1"
            place="Name"
          />

          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Quantity"
          />
          <AppInput
            control={form.control}
            name="thanksMsg"
            label="Item 1"
            place="Amount"
          />
        </div>
      </>
    ),
  }
}
