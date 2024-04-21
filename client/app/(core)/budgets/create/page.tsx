"use client"

import React, { useState } from "react"
import { AppInput, Button, Form, TextB } from "@/comps"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { IBudgetCategories } from "../data"
import { IFormSchema, defaultValues, formSchema } from "./formSchema"

export default function Page() {
  const [category, setCategory] = useState<IBudgetCategories>("Home")
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: IFormSchema) {
    // Todo
    // Call trpc, add to db
    // call smart contract and create
    console.log(values)
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="md:w-1/2 w-4/5">
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
              className={
                "w-[90%] space-y-6 flex flex-col items-center md:w-[75%] "
              }
            >
              <AppInput
                control={form.control}
                name="name"
                label="Name of budget"
              />
              <AppInput
                control={form.control}
                name="totalAmount"
                type="no"
                label="Budget amount"
              />
              <div className={"w-full"}>
                <label htmlFor="category">
                  <TextB>Category</TextB>
                </label>
              </div>
              <select
                name="category"
                className={`
                w-full bg-secondary border-primary outline-primary
                p-2 my-2 border-2 rounded-md
              `}
                onChange={(e) => {
                  setCategory(e.target.value as IBudgetCategories)
                }}
              >
                <option value={"Home"}>Home</option>
                <option value={"Work"}>Work</option>
                <option value={"Personal"}>Personal</option>
                <option value={"Tech"}>Tech</option>
                <option value={"Spiritual"}>Spiritual</option>
              </select>
              <Button variant={"default"} type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
