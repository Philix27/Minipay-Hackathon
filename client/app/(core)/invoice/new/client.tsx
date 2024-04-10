"use client"

import React, { useState } from "react"
import { TextH } from "@/comps"

import FormComps from "./form"
import PreviewComp from "./preview"

export default function NewInvoiceClient() {
  const [isFormTab, setActiveTab] = useState<boolean>(true)

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
        {isFormTab ? <FormComps /> : <PreviewComp />}
      </div>
    </div>
  )
}
