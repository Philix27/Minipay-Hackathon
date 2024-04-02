"use client"

import { useState } from "react"
import Link from "next/link"
import { TextB, TextH } from "@/comps"
import { ArrowDown, ArrowUp } from "lucide-react"

import { ISection, data } from "./SidebarData"

export function Sidebar() {
  return (
    <div
      className={`
        w-[272px] border-l-[2px] bg-primary py-4
        border-r-2 border-secondary
      `}
      style={{ height: "calc(100vh - 70px)" }}
    >
      {data.map((item, i) => (
        <div>
          <SidebarGroup section={item} />
        </div>
      ))}
    </div>
  )
}

function SidebarGroup(params: { section: ISection }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        className={`
            px-4 py-2 flex items-center
            justify-between mb-2
            border-b-2 border-secondary first:pt-0
          `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <TextH className={"text-muted-foreground"}>
          {params.section.title}
        </TextH>
        {isOpen ? <ArrowDown size={15} /> : <ArrowUp size={15} />}
      </div>
      {isOpen &&
        params.section.group.map((val, i) => (
          <Link
            href={val.link}
            className="hover:[&>*]:bg-secondary [&>p]:text-white"
          >
            <div className={"px-4 py-3 "}>
              <TextB v="p5" className="text-primary-foreground ">
                {val.name}
              </TextB>
            </div>
          </Link>
        ))}
    </div>
  )
}
