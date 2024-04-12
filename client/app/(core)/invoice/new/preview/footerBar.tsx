import React from "react"
import { TextB } from "@/comps"

export function FooterBar() {
  return (
    <div
      className={`
      flex flex-col items-center 
      mt-3 py-3 border-t-2 
      border-secondary
    `}
    >
      <TextB v="p6">Thank you.</TextB>
      <TextB v="p6">This invoice is expiry on the x of June, 2023</TextB>
    </div>
  )
}
