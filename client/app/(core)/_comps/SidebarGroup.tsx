import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowDown, ArrowUp } from "lucide-react"

import { TextB, TextH } from "@/app/comps"

import { ISection } from "./SidebarData"

export function SidebarGroup(params: { section: ISection }) {
  const [isOpen, setIsOpen] = useState(false)

  const pathName = usePathname()

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
        <TextH className={"text-muted-foreground"} v="h5">
          {params.section.title}
        </TextH>
        {isOpen ? <ArrowDown size={15} /> : <ArrowUp size={15} />}
      </div>
      {isOpen &&
        params.section.group.map((val, i) => (
          <Link
            key={i}
            href={val.link}
            className={`hover:[&>*]:bg-secondary [&>p]:text-white ${
              pathName == val.link && "[&>*]:bg-secondary"
            }`}
          >
            <div className={"pr-4 pl-10 py-2 "}>
              <TextB v="p5" className="text-primary-foreground">
                {val.name}
              </TextB>
            </div>
          </Link>
        ))}
    </div>
  )
}
