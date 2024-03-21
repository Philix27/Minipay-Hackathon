import React, { ReactNode } from "react"
import { cn } from "@/lib"

type IVariants = "p1" | "p2" | "p3" | "p4" | "p5" | "p6"

const cNames: Record<IVariants, string> = {
  p1: "text-3xl font-extrabold leading-tight md:text-4xl text-muted-foreground",
  p2: "text-2xl font-bold leading-tight md:text-3xl text-muted-foreground",
  p3: "text-xl font-bold leading-tight md:text-2xl text-muted-foreground",
  p4: "text-lg font-medium leading-tight md:text-xl text-muted-foreground",
  p5: "text-mdl font-regular leading-tight md:text-md text-muted-foreground",
  p6: "text-sm font-light leading-tight md:text-xsm text-muted-foreground",
}

export function TextB(props: {
  children: ReactNode
  v?: IVariants
  className?: string
}) {
  return (
    <p className={cn(cNames[props.v || "p1"], props.className)}>
      {props.children}
    </p>
  )
}
