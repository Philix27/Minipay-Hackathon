import { publicProcedure, router } from "../init"
import { invoiceRouter } from "./invoice"
import { invoiceItemRouter } from "./invoiceItems"

export const appRouter = router({
  invoice: invoiceRouter,
  invoiceItem: invoiceItemRouter,
  test_all: publicProcedure.query(({ ctx }) => {
    return "Hello, are you for testing"
  }),
})

export type AppRouter = typeof appRouter
