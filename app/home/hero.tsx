import React from "react"
import { TextB, TextH } from "@/comps"

export default function HeroSection(props: {
  title: string
  subtitle: string
  img: string
  imgFirst?: boolean
}) {
  return (
    <div
      className={`
        min-h-[400px] w-full 
        grid grid-cols-1
        md:grid-cols-2
        px-2 md:px-[5%]
    `}
    >
      {props.imgFirst ? (
        <>
          <div></div>
          <div className="pt-4 h-full flex flex-col items-start justify-center">
            <TextH v="h1">{props.title}</TextH>
            <div className="mb-10" />
            <TextB v={"p4"}>{props.subtitle}</TextB>
          </div>
        </>
      ) : (
        <>
          <div className="pt-4 h-full flex flex-col items-start justify-center">
            <TextH v="h1">{props.title}</TextH>
            <div className="mb-10" />
            <TextB v={"p4"}>{props.subtitle}</TextB>
          </div>
          <div></div>
        </>
      )}
    </div>
  )
}
