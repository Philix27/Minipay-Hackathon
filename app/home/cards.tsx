import React from "react"
import { TextB, TextH } from "@/comps"

const cardItems = [
  {
    title: "P2P",
    img: "",
    subtitle: "Share funds between other Nigerians",
  },
  {
    title: "P2P",
    img: "",
    subtitle: "Share funds between other Nigerians",
  },
  {
    title: "P2P",
    img: "",
    subtitle: "Share funds between other Nigerians",
  },
]
export default function CardsSection() {
  return (
    <div
      className={`
      grid md:grid-cols-3 grid-cols-1 
      items-start justify-center 
      max-w-[400px] md:max-w-[80%] 
      w-full
      h-[400px] mt-5
    `}
    >
      {cardItems.map((item, i) => (
        <div className={"border-r-ring mx-4 bg-slate-800 rounded-md"} key={i}>
          <div className="p-2">
            <TextH v="h5">{item.title}</TextH>
            <TextB v="p5">{item.subtitle}</TextB>
          </div>
        </div>
      ))}
    </div>
  )
}
