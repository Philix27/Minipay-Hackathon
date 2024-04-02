import React, { ReactNode } from "react"

import { SiteHeader } from "../home/_comps"

export default function Layout(props: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {props.children}
    </div>
  )
}
