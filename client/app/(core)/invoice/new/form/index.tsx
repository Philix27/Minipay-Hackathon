"use client"

import React from "react"
import { Button, TextH } from "@/comps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { defaultValues, formSchema } from "./formSchema"
import AppInput from "./reform"
import { Form } from "./ui"

const styles = {
  inputGroup: `
    flex flex-col md:flex-row
    w-full flex-grow-[1] 
    md:space-x-8
    space-y-4 items-center 
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
          className={"w-[90%] space-y-6 flex flex-col items-center md:w-[75%]"}
        >
          {/* Personal SECTION */}
          <TextH v="h3">Personal Info</TextH>
          <div className={styles.inputGroup}>
            <AppInput
              control={form.control}
              name="fromBusinessName"
              label="Your name"
            />
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
            <AppInput
              control={form.control}
              name="phone"
              label="Phone number"
            />
          </div>
          <TextH v="h3">Client's Info</TextH>
          <div className={styles.inputGroup}>
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
          </div>
          <TextH v="h3">Footer</TextH>
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
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
