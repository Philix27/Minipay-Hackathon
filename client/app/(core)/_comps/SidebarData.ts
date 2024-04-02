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
    title: "Home",
    group: [
      {
        name: "Dashboard",
        link: AppPages.dashboard,
      },
    ],
  },
  {
    title: "Invoice",
    group: [
      {
        name: "All",
        link: AppPages.invoice,
      },
      {
        name: "Pending",
        link: AppPages.invoice,
      },
      {
        name: "Create New",
        link: AppPages.invoice,
      },
    ],
  },
  {
    title: "Payment Links",
    group: [
      {
        name: "All",
        link: AppPages.paymentLink,
      },
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
        link: AppPages.paymentLink,
      },
      {
        name: "Fiat",
        link: AppPages.paymentLink,
      },
    ],
  },
  {
    title: "Settings",
    group: [
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
]
