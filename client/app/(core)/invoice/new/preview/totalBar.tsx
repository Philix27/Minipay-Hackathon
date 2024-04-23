import React from "react"
import { TextB, TextH } from "@/comps"

export function TotalBar(props: {
  total: string
  subtotal: string
  tax: string
  discount: string
}) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center px-4 gap-y-2`}
    >
      <div>
        <TextB>Subtotal: {props.subtotal}</TextB>
        <TextB>Tax: {props.tax}</TextB>
        <TextB>Discount: {props.discount}</TextB>
      </div>
      <TextH v="h5">Total Due: ${props.total}</TextH>
    </div>
  )
}
