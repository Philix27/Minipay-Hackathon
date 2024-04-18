export type IBudgetCategories = "Home" | "Work" | "Personal" | "Tech" | "Spiritual"

export interface IBudget {
  title: string
  desc?: string
  amountToSave: number
  amountSaved: number
  category: IBudgetCategories
}
export const budgetsList: IBudget[] = [
  {
    title: "Buy Groceries",
    amountSaved: 1500,
    amountToSave: 100,
    category: "Home",
  },
  {
    title: "Get new hymn book",
    amountSaved: 1500,
    amountToSave: 100,
    category: "Spiritual",
  },
  {
    title: "Yoga mat",
    amountSaved: 1500,
    amountToSave: 100,
    category: "Personal",
  },
  {
    title: "Buy laptop",
    amountSaved: 1500,
    amountToSave: 100,
    category: "Tech",
  },
  {
    title: "Bike",
    amountSaved: 1500,
    amountToSave: 100,
    category: "Work",
  },
]
