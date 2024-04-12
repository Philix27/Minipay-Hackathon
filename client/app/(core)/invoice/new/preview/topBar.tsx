import { TextB, TextH } from "@/comps";
import React from "react"

export function TopBar(props: { bizName: string; invoiceDate: string;  }) {
  return (
    <div className={"h-[70px] p-[50px] flex justify-between items-start"}>
      <TextH v="h2" className={`text-muted`}>
        {props.bizName}
      </TextH>
      <div>
        <TextB v="p5">{props.invoiceDate}</TextB>
      </div>
    </div>
  )
}
