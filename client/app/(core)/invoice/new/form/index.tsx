"use client"

import React from "react"
import { Button } from "@/comps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import AppInput from "./reform"
import { Form } from "./ui"

const styles = {
  inputGroup:
    "flex flex-col md:flex-row flex-grow-[1] w-full md:space-x-8 space-y-4",
}
export default function FormsComps() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    website: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
  })

  // ... // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
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
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>
          <div className={styles.inputGroup}>
            <AppInput control={form.control} name="username" label="Username" />
            <AppInput control={form.control} name="website" label="Website" />
          </div>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
