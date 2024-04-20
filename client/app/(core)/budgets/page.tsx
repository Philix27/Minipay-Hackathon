import React from "react"
import { TextB, TextH } from "@/comps"
import { Home } from "lucide-react"

import { IBudgetCategories, budgetsList } from "./data"

export default function Page() {
  return (
    <div className="w-full p-4">
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
        {budgetsList.map((value, index) => (
          <div
            className={`p-4 rounded-xl ${getCardProps(value.category).color}`}
            key={index}
          >
            <div className="flex justify-between mb-2 md:flex-row flex-col-reverse items-center">
              <div>
                <TextH className={"text-white"} v="h5">
                  {value.title}
                </TextH>
              </div>
              <div
                className={`
                w-[40px] h-[40px] bg-primary 
                rounded-[25px] flex items-center 
                justify-center
              `}
              >
                {getCardProps(value.category).icon}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <TextB className={"text-slate-300"}>
                Amount Saved: {value.amountSaved}
              </TextB>
              <TextB className={"text-slate-300"}>
                Amount to save{value.amountToSave}
              </TextB>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function getCardProps(props: IBudgetCategories): {
  color: string
  icon: JSX.Element
} {
  switch (props) {
    case "Home":
      return {
        color: "bg-teal-700",
        icon: <Home />,
      }
    case "Personal":
      return {
        color: "bg-cyan-700",
        icon: <Home />,
      }
    case "Work":
      return {
        color: "bg-green-600",
        icon: <Home />,
      }
    case "Spiritual":
      return {
        color: "bg-purple-600",
        icon: <Home />,
      }
    case "Work":
      return {
        color: "bg-emerald-600",
        icon: <Home />,
      }

    default:
      return {
        color: "bg-orange-600",
        icon: <Home />,
      }
  }
}
