"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib"
import { ArrowDown, ArrowUp } from "lucide-react"

import { TextB, TextH } from "@/app/comps"

import { ISection, data } from "./SidebarData"
import { SidebarGroup } from "./SidebarGroup"

export function Sidebar(props: { className?: string }) {
  return (
    <div
      className={cn(
        `
        w-[272px] border-l-[2px] bg-primary py-4 hidden md:block
        border-r-2 border-secondary`,
        props.className
      )}
      style={{ height: "calc(100vh - 70px)" }}
    >
      {data.map((item, i) => (
        <div key={i}>
          <SidebarGroup section={item} />
        </div>
      ))}
    </div>
  )
}
