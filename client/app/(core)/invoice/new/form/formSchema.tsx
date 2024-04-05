import { z } from "zod"

export const formSchema = z.object({
  clientBusinessName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fromBusinessName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  clientAddress: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  clientWebsite: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  date: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  footerNote: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  thanksMsg: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
})

export const defaultValues: z.infer<typeof formSchema> = {
  clientBusinessName: "",
  fromBusinessName: "",
  clientAddress: "",
  phone: "",
  email: "",
  clientWebsite: "",
  date: "",
  footerNote: "",
  thanksMsg: "",
}
