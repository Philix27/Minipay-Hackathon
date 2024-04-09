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
        link: AppPages.invoice.new,
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
        link: AppPages.paymentLink,
      },
      {
        name: "Create New",
        link: AppPages.paymentLink,
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
