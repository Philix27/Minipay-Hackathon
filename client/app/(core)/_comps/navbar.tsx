import React, { Dispatch, SetStateAction } from "react"
import { MenuIcon, SidebarClose } from "lucide-react"

import { TextH } from "@/app/comps"

export function Navbar(props: {
  onMenuClick: VoidFunction
  onCloseClick: VoidFunction
  isOpen: boolean
}) {
  return (
    <div
      className={`
      h-[70px] w-full
      flex items-center justify-between
      px-6 bg-primary border-b-2 border-secondary fixed
    `}
    >
      <TextH v="h3">Minipay</TextH>
      <div className={"md:hidden"}>
        {props.isOpen ? (
          <SidebarClose onClick={props.onCloseClick} />
        ) : (
          <MenuIcon onClick={props.onMenuClick} />
        )}
      </div>
    </div>
  )
}
