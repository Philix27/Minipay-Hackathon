import React from "react"
import { TextB, TextH } from "@/comps"

export default function FooterSection() {
  return (
    <div
      className={`
      w-full border-t-2`}
    >
      <div className="pt-4 h-full flex items-center justify-between gap-x-4 w-full">
        <TextB v={"p4"}>philixbob@gmail.com</TextB>
        <TextB v={"p4"}>Github</TextB>
        <TextB v={"p4"}>LinkedIn</TextB>
      </div>
    </div>
  )
}
