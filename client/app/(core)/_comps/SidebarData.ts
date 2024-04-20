import { AppPages } from "@/lib"

export type ISection = {
  title: string
  group: {
    name: string
    link: string
  }[]
}
export const data: ISection[] = [
  {
    title: "Account",
    group: [
      {
        name: "Overview",
        link: AppPages.dashboard,
      },
      {
        name: "Profile",
        link: AppPages.settings,
      },
      {
        name: "Settings",
        link: AppPages.settings,
      },
    ],
  },
  {
    title: "Invoice",
    group: [
      {
        name: "All",
        link: AppPages.invoice.all,
      },
      {
        name: "Create New",
        link: AppPages.invoice.new,
      },
    ],
  },

  {
    title: "Budget",
    group: [
      {
        name: "Manage",
        link: AppPages.budgets.index,
      },
      {
        name: "Create New",
        link: AppPages.budgets.create,
      },
    ],
  },
  {
    title: "Transactions",
    group: [
      {
        name: "Crypto",
        link: AppPages.transactionsCrypto,
      },
      {
        name: "Fiat",
        link: AppPages.transactionsFiat,
      },
    ],
  },
]
