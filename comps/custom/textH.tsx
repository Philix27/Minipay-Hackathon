import React, { ReactNode } from "react"
import { cn } from "@/lib"

type IVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const cNames: Record<IVariants, string> = {
  h1: "text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl",
  h2: "text-2xl font-bold leading-tight tracking-tighter md:text-3xl",
  h3: "text-xl font-bold leading-tight tracking-tighter md:text-2xl",
  h4: "text-lg font-medium leading-tight tracking-tighter md:text-xl",
  h5: "text-mdl font-regular leading-tight tracking-tighter md:text-md",
  h6: "text-sm font-light leading-tight tracking-tighter md:text-xsm",
}
export function TextH(props: {
  children: ReactNode
  v?: IVariants
  classNames: string
}) {
  return (
    <h1 className={cn(cNames[props.v || "h4"], props.classNames)}>
      {props.children}
    </h1>
  )
}
