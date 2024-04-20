import { z } from "zod"

export const formSchema = z.object({
  // To
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  totalAmount: z.number(),
  totalAmountSpent: z.number(),
})

export const defaultValues: z.infer<typeof formSchema> = {
  name: "",
  totalAmount: 0,
  totalAmountSpent: 0,
}

export type IFormSchema = z.infer<typeof formSchema>
