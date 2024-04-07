import React from "react"
import { TextH } from "@/comps"

export default function PreviewComp() {
  return (
    <div className={"flex flex-col items-center justify-center mt-5"}>
      <div className={"bg-amber-50 md:h-[1000px] md:w-[800px]"}>
        {/* Header */}
        <div className={"bg-teal-800 h-[70px] p-[50px]"}>
          <TextH v="h2">Business Name</TextH>
        </div>
        {/* Address */}
        <div className={"bg-amber-600 p-[50px]"}>
          <div>Your address</div>
          <div>To address</div>
        </div>
      </div>
    </div>
  )
}
