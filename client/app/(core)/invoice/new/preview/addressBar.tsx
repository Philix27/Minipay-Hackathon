import React from "react"
import { TextB, TextH } from "@/comps"

export function AddressBar(props: {
  fromAddress: string
  fromEmail: string
  fromPhone: string
  toBizName: string
  toAddress: string
  toEmail: string
  toPhone: string
  toWebsite: string
}) {
  return (
    <div className={"p-5 flex justify-between"}>
      <div>
        <TextB v="p6">From:</TextB>
        <TextB>{props.fromAddress}</TextB>
        <TextB>{props.fromEmail}</TextB>
        <TextB>{props.fromPhone}</TextB>
      </div>
      <div>
        <TextB>To:</TextB>
        <TextH v="h5" className="">
          {props.toBizName}
        </TextH>
        <TextB>{props.toAddress}</TextB>
        <TextB>{props.toEmail}</TextB>
        <TextB>{props.toPhone}</TextB>
        <TextB>{props.toWebsite}</TextB>
      </div>
    </div>
  )
}
