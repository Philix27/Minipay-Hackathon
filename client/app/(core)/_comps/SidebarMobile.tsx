"use client"

import { cn } from "@/lib"
import { motion } from "framer-motion"

import { data } from "./SidebarData"
import { SidebarGroup } from "./SidebarGroup"

export function SidebarMobile(props: { className?: string }) {
  return (
    <div
      className={cn(
        `w-screen z-10
       bg-slate-950  bg-opacity-20
      border-secondary md:hidden fixed`,
        props.className
      )}
      style={{ height: "calc(100vh - 50px)" }}
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
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
