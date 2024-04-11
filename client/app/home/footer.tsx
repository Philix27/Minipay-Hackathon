import React from "react"
import { TextB, TextH } from "@/comps"
import { Github, LinkedinIcon, MailIcon } from "lucide-react"

export default function FooterSection() {
  return (
    <div
      className={`
      w-full border-t-[1px] border-primary`}
    >
      <div className="pt-4 h-full flex items-center justify-around w-full">
        <div className={"flex gap-x-4"}>
          <Github />
          <LinkedinIcon />
          <MailIcon />
        </div>
      </div>
    </div>
  )
}
