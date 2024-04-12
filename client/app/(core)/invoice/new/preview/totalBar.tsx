import React from "react"
import { TextB, TextH } from "@/comps"

export function TotalBar() {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center px-4 gap-y-2`}>
      <div>
        <TextB>Subtotal:</TextB>
        <TextB>Tax:</TextB>
        <TextB>Discount:</TextB>
      </div>
      <TextH v="h5">Total Due:</TextH>
    </div>
  )
}
