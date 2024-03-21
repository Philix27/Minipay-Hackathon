import React, { ReactNode } from "react"
import { cn } from "@/lib"

type IVariants = "p1" | "p2" | "p3" | "p4" | "p5" | "p6"

const cNames: Record<IVariants, string> = {
  p1: "text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl",
  p2: "text-2xl font-bold leading-tight tracking-tighter md:text-3xl",
  p3: "text-xl font-bold leading-tight tracking-tighter md:text-2xl",
  p4: "text-lg font-medium leading-tight tracking-tighter md:text-xl",
  p5: "text-mdl font-regular leading-tight tracking-tighter md:text-md",
  p6: "text-sm font-light leading-tight tracking-tighter md:text-xsm",
}

export function TextB(props: {
  children: ReactNode
  v?: IVariants
  classNames: string
}) {
  return (
    <p className={cn(cNames[props.v || "p1"], props.classNames)}>
      {props.children}
    </p>
  )
}
