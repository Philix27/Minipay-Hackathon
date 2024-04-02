import React from "react"
import { TextH } from "@/comps"

export function Navbar() {
  return (
    <div className={`
      h-[70px] w-full bg-[#19303d]
      flex items-center 
      px-6 bg-primary border-b-2 border-secondary
    `}>
      <TextH v="h3">Minipay</TextH>
    </div>
  )
}
