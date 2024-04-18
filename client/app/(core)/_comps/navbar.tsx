import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { MenuIcon, SidebarClose } from "lucide-react"
import { useConnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

import { TextH } from "@/app/comps"

export function Navbar(props: {
  onMenuClick: VoidFunction
  onCloseClick: VoidFunction
  isOpen: boolean
}) {
  const [hideConnectBtn, setHideConnectBtn] = useState(false)
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // })

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true)
      // connect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
