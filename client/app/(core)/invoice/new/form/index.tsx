"use client"

import React from "react"
import { AppAccordion, Button, TextH } from "@/comps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { defaultValues, formSchema } from "./formSchema"
import { clientInfo, footerInfo, invoiceItems, personalInfo } from "./info"
import AppInput from "./reform"
import { Form } from "./ui"

export const styles = {
  inputGroup: `
    flex flex-col md:flex-row
    w-full flex-grow-[1] 
    md:space-x-8
    items-center 
    justify-center

`,
}

export default function FormsComps() {
  // ... // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`
            w-full flex flex-col 
            items-center 
            justify-center 
            my-8
        `}
      >
        <div
          className={"w-[90%] space-y-6 flex flex-col items-start md:w-[75%]"}
        >
          <AppAccordion
            data={[
              personalInfo({ form }),
              clientInfo({ form }),
              invoiceItems({ form }),
              footerInfo({ form }),
            ]}
          />
        
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
