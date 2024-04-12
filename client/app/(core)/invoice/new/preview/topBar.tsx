import { TextB, TextH } from "@/comps";
import React from "react"

export function TopBar(props: { bizName: string; invoiceDate: string;  }) {
  return (
    <div className={`
        p-5 
        flex justify-between 
        items-start border-b-2 border-secondary
    `}>
      <TextH v="h2">
        {props.bizName}
      </TextH>
      <div>
        <TextB v="p5">{props.invoiceDate}</TextB>
      </div>
    </div>
  )
}
