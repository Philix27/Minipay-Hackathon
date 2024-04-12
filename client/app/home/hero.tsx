import React from "react"
import Image from "next/image"

import { TextB, TextH } from "@/app/comps"

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
        px-2 md:px-[5%] bg-primary rounded-2xl
    `}
    >
      {props.imgFirst ? (
        <>
          <div className={"flex items-center justify-center"}>
            <Image
              src={props.img}
              alt=""
              width={300}
              height={400}
              className={"h-[350px] w-[250px] md:h-[450px] md:w-[350px]"}
            />
          </div>
          <div className="h-full flex flex-col items-start justify-center px-2 md:px-4 py-8 md:py-4">
            <TextH className="text-2xl font-extrabold">{props.title}</TextH>
            <div className="mb-10" />
            <TextB v={"p4"}>{props.subtitle}</TextB>
          </div>
        </>
      ) : (
        <>
          <div className="h-full flex flex-col items-start justify-center px-2 md:px-4 py-8 md:py-4">
            <TextH className="text-2xl font-extrabold">{props.title}</TextH>
            <div className="mb-10" />
            <TextB v={"p4"}>{props.subtitle}</TextB>
          </div>
          <div className={"flex items-center justify-center"}>
            <Image
              src={props.img}
              alt=""
              width={300}
              height={400}
              className={"h-[350px] w-[250px] md:h-[450px] md:w-[350px]"}
            />
          </div>
        </>
      )}
    </div>
  )
}
