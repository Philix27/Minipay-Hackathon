"use client"

import { useState } from "react"
import Link from "next/link"
import { TextB, TextH } from "@/comps"
import { cn } from "@/lib"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUp } from "lucide-react"

import { ISection, data } from "./SidebarData"

export function SidebarMobile(props: { className?: string }) {
  return (
    <div
      className={cn(
        `w-screen z-10 md:z-0
       bg-slate-950  bg-opacity-20
      border-secondary md:hidden fixed`,
        props.className
      )}
      style={{ height: "calc(100vh - 70px)" }}
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "backInOut", duration: 0.75 }}
        className={cn(
          `w-[60%] h-full py-4
        bg-primary
        border-r-2 border-secondary`
        )}
      >
        {data.map((item, i) => (
          <div key={i}>
            <SidebarGroup section={item} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function SidebarGroup(params: { section: ISection }) {
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
            key={i}
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
