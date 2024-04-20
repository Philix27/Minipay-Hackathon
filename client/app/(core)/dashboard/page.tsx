"use client"
import React from "react"
import { TextB, TextH } from "@/comps"
import { ListVideoIcon } from "lucide-react"

export default function Page() {
  return (
    <div className={`p-2 w-full`}>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
        <TopCard title={"Budget"} icon={<ListVideoIcon />} subtitle={"5 budgets"} />
        <TopCard title={"Invoice"} icon={<ListVideoIcon />} subtitle={"6 invoices"} />
        <TopCard title={"Transactions"} icon={<ListVideoIcon />} subtitle={"10 transactions"} />
      </div>
      <div>Chart</div>
    </div>
  )
}

function TopCard(props: {
  title: string
  icon: JSX.Element
  subtitle: string
}) {
  return (
    <div className={"p-4 bg-primary rounded-lg"}>
      <div className="flex items-end justify-between mb-4">
        <TextH>{props.title}</TextH>
        {props.icon}
      </div>
      <hr className="border-secondary" />
      <div className="mt-4">
        <TextB>{props.subtitle}</TextB>
      </div>
    </div>
  )
}
