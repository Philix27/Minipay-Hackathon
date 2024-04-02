import Link from "next/link"
import { TextH } from "@/comps"
import { AppPages } from "@/lib"

export function Sidebar() {
  return (
    <div
      className={`
        w-[272px] border-l-[2px] bg-[#19303d] py-4
      `}
      style={{ height: "calc(100vh - 70px)" }}
    >
      {data.map((val, i) => (
        <Link href={val.link} className="hover:[&>*]:bg-secondary">
          <div className={"px-4 py-3 "}>
            <TextH v="h4">{val.name}</TextH>
          </div>
        </Link>
      ))}
    </div>
  )
}

const data: {
  name: string
  link: string
}[] = [
  {
    name: "Dashboard",
    link: AppPages.dashboard,
  },
  {
    name: "Invoice",
    link: AppPages.invoice,
  },
  {
    name: "Payment Links",
    link: AppPages.paymentLink,
  },
  {
    name: "Transactions",
    link: AppPages.transactions,
  },
  {
    name: "Budgets",
    link: AppPages.budgets,
  },
  {
    name: "Settings",
    link: AppPages.settings,
  },
]
