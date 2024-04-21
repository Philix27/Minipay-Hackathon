"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { TextH } from "@/app/comps"

import FormComps from "./form"
import { IFormSchema, defaultValues, formSchema } from "./formSchema"
import PreviewComp from "./preview"

export default function NewInvoiceClient() {
  const [isFormTab, setActiveTab] = useState<boolean>(true)

  // ... // 1. Define your form.
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: IFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className={"w-full"}>
      <div className={"w-full h-[40px] flex justify-between border-b-2"}>
        <div
          onClick={() => setActiveTab(true)}
          className={`w-[50%] flex items-center justify-center 
            border-r-2 py-2 px-4
            ${isFormTab && "bg-primary"}`}
        >
          <TextH v="h5">Form</TextH>
        </div>
        <div
          onClick={() => setActiveTab(false)}
          className={`w-[50%] flex items-center justify-center 
            border-r-2 py-2 px-4
            ${isFormTab || "bg-primary"}`}
        >
          <TextH v="h5">Preview</TextH>
        </div>
      </div>
      <div className={"w-full"}>
        {isFormTab ? (
          <FormComps form={form} onSubmit={onSubmit} />
        ) : (
          <PreviewComp
            fromAddress={form.getValues("fromAddress")}
            fromEmail={form.getValues("fromEmail")}
            fromPhone={form.getValues("fromPhone")}
            toAddress={form.getValues("toAddress") || ""}
            toPhone={form.getValues("toPhone") || ""}
            toEmail={form.getValues("toEmail")}
            toWebsite={form.getValues("toWebsite") || ""}
            toBizName={form.getValues("toBusinessName") || ""}
            fromDate={form.getValues("fromDate")}
            bizName={form.getValues("fromBusinessName")}
            total={"12"}
            subtotal={"23.90"}
            tax={"256%"}
            discount={"278"}
          />
        )}
      </div>
    </div>
  )
}
