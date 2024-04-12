import React from "react"
import { TextB } from "@/comps"

export function AddressBar(props: {}) {
  return (
    <div className={"p-5 flex justify-between"}>
      <div>
        <TextB>From:</TextB>
        <TextB>Your address</TextB>
        <TextB>email</TextB>
        <TextB>phone</TextB>
      </div>
      <div>
        <TextB>To:</TextB>
        <TextB>Your address</TextB>
        <TextB>email</TextB>
        <TextB>phone</TextB>
      </div>
    </div>
  )
}
