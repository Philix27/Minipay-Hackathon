import React from "react"
import { TextB, TextH } from "@/comps"

export default function HeroSection() {
  return (
    <div className={`
        min-h-[400px] w-full 
        grid grid-cols-1
        md:grid-cols-2
        px-2 md:px-[5%]
    `}>
      <div className="pt-4 h-full flex flex-col items-start justify-center">
        <TextH v="h1">P2P Solution</TextH>
        <div className="mb-10" />
        <TextB v={"p4"}>
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </TextB>
      </div>
      <div></div>
    </div>
  )
}
