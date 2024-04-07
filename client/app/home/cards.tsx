import { TextH, TextB } from "@/comps"
import React from "react"

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
      w-full h-[400px] mt-5
    `}
    >
      {cardItems.map((item, i) => (
        <div className={"border-r-ring md:mx-4 bg-primary rounded-md p-4"} key={i}>
          <div className="p-2">
            <TextH v="h5" className="mb-4">{item.title}</TextH>
            <TextB v="p5">{item.subtitle}</TextB>
          </div>
        </div>
      ))}
    </div>
  )
}
